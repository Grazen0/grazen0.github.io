export type WebGL = WebGLRenderingContext;
export type WebGLAttributeLocation = number;

export type Vector3 = [x: number, y: number, z: number];
export type Color = [r: number, g: number, b: number, a: number];

export interface ProgramInfo {
	program: WebGLProgram;
	attributes: {
		vertexPosition: WebGLAttributeLocation;
		vertexNormal: WebGLAttributeLocation;
		textureCoord: WebGLAttributeLocation;
	};
	uniforms: {
		projectionMatrix: WebGLUniformLocation;
		modelViewMatrix: WebGLUniformLocation;
		normalMatrix: WebGLUniformLocation;
		sampler: WebGLUniformLocation;
	};
}

export interface ModelBuffers {
	vertices: WebGLBuffer;
	indices: WebGLBuffer;
	normals: WebGLBuffer;
	textureCoords: WebGLBuffer;
}

export interface CirnoPrism {
	position: Vector3;
	rotation: number;
	fallSpeed: number;
	rotationSpeed: number;
}
