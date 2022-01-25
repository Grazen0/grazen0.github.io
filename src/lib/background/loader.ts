import type { WebGL, ModelBuffers, ProgramInfo } from '$lib/background/types';
import { isPowerOf2 } from '$lib/utils';
import { indices, normals, positions, textureCoords } from './geometry';
import { getUniformNonNull, initBuffer } from './utils';

export function loadShader(gl: WebGL, type: number, source: string): WebGLShader {
	const shader = gl.createShader(type);
	if (!shader) throw new Error(`Could not create shader with source ${source}`);

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const info = gl.getShaderInfoLog(shader);
		gl.deleteShader(shader);

		throw new Error(`Could not compile a shader: ${info}`);
	}

	return shader;
}

export function loadShaderProgram(gl: WebGL, vsSource: string, fsSource: string): WebGLProgram {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

	const program = gl.createProgram();
	if (!program) throw new Error('Could not create shader program');

	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS))
		throw new Error(`Could not initialize shader program: ${gl.getProgramInfoLog(program)}`);

	return program;
}

export function loadTexture(gl: WebGL, url: string): Promise<WebGLTexture> {
	return new Promise((resolve, reject) => {
		const image = new Image();

		image.onload = () => {
			const texture = gl.createTexture();
			if (!texture) return reject('Could not create texture');

			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

			if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
				gl.generateMipmap(gl.TEXTURE_2D);
			} else {
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			}

			resolve(texture);
		};

		image.onerror = () => reject('Could not load texture image');

		image.src = url;
	});
}

export function loadBuffers(gl: WebGL): ModelBuffers {
	const posBuffer = initBuffer(gl, new Float32Array(positions));
	const indexBuffer = initBuffer(gl, new Uint16Array(indices), gl.ELEMENT_ARRAY_BUFFER);
	const normalBuffer = initBuffer(gl, new Float32Array(normals));
	const textureBuffer = initBuffer(gl, new Float32Array(textureCoords));

	return {
		vertices: posBuffer,
		indices: indexBuffer,
		normals: normalBuffer,
		textureCoords: textureBuffer,
	};
}

export function loadProgramInfo(gl: WebGL, vsSource: string, fsSource: string): ProgramInfo {
	const program = loadShaderProgram(gl, vsSource, fsSource);

	return {
		program,
		attributes: {
			vertexPosition: gl.getAttribLocation(program, 'aVertexPosition'),
			vertexNormal: gl.getAttribLocation(program, 'aVertexNormal'),
			textureCoord: gl.getAttribLocation(program, 'aTextureCoord'),
		},
		uniforms: {
			projectionMatrix: getUniformNonNull(gl, program, 'uProjectionMatrix'),
			modelViewMatrix: getUniformNonNull(gl, program, 'uModelViewMatrix'),
			normalMatrix: getUniformNonNull(gl, program, 'uNormalMatrix'),
			sampler: getUniformNonNull(gl, program, 'uSampler'),
		},
	};
}
