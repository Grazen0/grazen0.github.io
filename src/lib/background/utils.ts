import type { WebGL } from './types';

export function getUniformNonNull(
	gl: WebGL,
	program: WebGLProgram,
	name: string
): WebGLUniformLocation {
	const location = gl.getUniformLocation(program, name);
	if (!location) throw new Error(`Could not find uniform location for ${name}`);

	return location;
}

export function initBuffer(gl: WebGL, data: BufferSource, type = gl.ARRAY_BUFFER): WebGLBuffer {
	const buffer = gl.createBuffer();
	if (!buffer) throw new Error('Could not create position buffer');

	gl.bindBuffer(type, buffer);
	gl.bufferData(type, data, gl.STATIC_DRAW);

	return buffer;
}
