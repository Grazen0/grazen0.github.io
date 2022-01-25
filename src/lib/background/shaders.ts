export const vsSource = `
attribute vec4 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uNormalMatrix;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying highp vec2 vTextureCoord;
varying highp vec3 vLighting;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vTextureCoord = aTextureCoord;

  highp vec3 ambientLight = vec3(0.3);
  highp vec3 directionalVector = normalize(vec3(0.1, 1.0, 1.0));
  highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
  vLighting = ambientLight + directional;
}
`;

export const fsSource = `
varying highp vec2 vTextureCoord;
varying highp vec3 vLighting;

uniform sampler2D uSampler;

void main() {
  highp vec4 texelColor = texture2D(uSampler, vTextureCoord);
  gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
}
`;
