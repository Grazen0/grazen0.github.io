import { mat4 } from 'gl-matrix';
import type { ModelBuffers, ProgramInfo, WebGL, CirnoPrism } from './types';
import { BACKGROUND_COLOR } from '$lib/background/constants';
import { randomRange } from '$lib/utils';
import { indices } from './geometry';
import { loadBuffers, loadProgramInfo, loadTexture } from './loader';
import { fsSource, vsSource } from './shaders';

export class BackgroundScene {
	private readonly FRAME_DURATION_MS = 1000 / 60;
	private readonly programInfo: ProgramInfo;
	private readonly prismBuffers: ModelBuffers;
	private prisms: CirnoPrism[] = [];
	private frame: number | null = null;
	private lastTick = -1;
	private spawnTimer = 0;

	public constructor(public readonly gl: WebGL, private readonly texture: WebGLTexture) {
		this.programInfo = loadProgramInfo(gl, vsSource, fsSource);
		this.prismBuffers = loadBuffers(gl);
	}

	public static async init(gl: WebGL, textureUrl: string): Promise<BackgroundScene> {
		const texture = await loadTexture(gl, textureUrl);
		return new BackgroundScene(gl, texture);
	}

	private loop(time: number) {
		this.frame = requestAnimationFrame(t => this.loop(t));

		while (this.lastTick < time) {
			this.tick(1);
			this.lastTick += this.FRAME_DURATION_MS;
		}

		this.draw();
	}

	private tick(delta: number) {
		const toRemove = new WeakSet<CirnoPrism>();

		for (const prism of this.prisms) {
			prism.rotation += prism.rotationSpeed * delta;
			prism.position[1] -= prism.fallSpeed * delta;

			if (prism.position[1] < -30) {
				toRemove.add(prism);
			}
		}

		this.prisms = this.prisms.filter(p => !toRemove.has(p));

		this.spawnTimer -= delta;
		while (this.spawnTimer < 0) {
			this.addPrism();
			this.spawnTimer += 10;
		}
	}

	private draw() {
		const {
			gl,
			programInfo: { program, attributes, uniforms },
			prismBuffers,
		} = this;

		// Clear canvas
		gl.clearColor(...BACKGROUND_COLOR);
		gl.clearDepth(1);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		const projectionMatrix = mat4.create();
		mat4.perspective(
			projectionMatrix,
			Math.PI / 3,
			gl.canvas.clientWidth / gl.canvas.clientHeight,
			0.1,
			100
		);

		// Position buffer
		gl.bindBuffer(gl.ARRAY_BUFFER, prismBuffers.vertices);
		gl.vertexAttribPointer(attributes.vertexPosition, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(attributes.vertexPosition);

		// Normals buffer
		gl.bindBuffer(gl.ARRAY_BUFFER, prismBuffers.normals);
		gl.vertexAttribPointer(attributes.vertexNormal, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(attributes.vertexNormal);

		// Texture buffer
		gl.bindBuffer(gl.ARRAY_BUFFER, prismBuffers.textureCoords);
		gl.vertexAttribPointer(attributes.textureCoord, 2, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(attributes.textureCoord);

		// Index buffer
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, prismBuffers.indices);

		gl.useProgram(program);

		// Use texture
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.uniform1i(uniforms.sampler, 0);

		gl.uniformMatrix4fv(uniforms.projectionMatrix, false, projectionMatrix);

		for (const prism of this.prisms) {
			const modelViewMatrix = mat4.create();
			mat4.translate(modelViewMatrix, modelViewMatrix, prism.position);
			mat4.rotate(modelViewMatrix, modelViewMatrix, prism.rotation, [0, 1, 0]);

			const normalMatrix = mat4.create();
			mat4.invert(normalMatrix, modelViewMatrix);
			mat4.transpose(normalMatrix, normalMatrix);

			// Use matrices
			gl.uniformMatrix4fv(uniforms.modelViewMatrix, false, modelViewMatrix);
			gl.uniformMatrix4fv(uniforms.normalMatrix, false, normalMatrix);

			gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
		}
	}

	public addPrism(): CirnoPrism {
		const prism: CirnoPrism = {
			position: [randomRange(-30, 30), 30, randomRange(-10, -40)],
			rotation: Math.random() * Math.PI * 2,
			fallSpeed: randomRange(0.04, 0.2),
			rotationSpeed: randomRange(0.01, 0.05),
		};

		this.prisms.push(prism);
		return prism;
	}

	public start() {
		this.frame = requestAnimationFrame(t => this.loop(t));
	}

	public stop(): boolean {
		if (this.frame === null) return false;

		cancelAnimationFrame(this.frame);
		return true;
	}
}
