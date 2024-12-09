export const randomRange = (min: number, max: number): number =>
	min + (max - min) * Math.random();

export const clearNullishTimeout = (timeout: number | null): void => {
	if (timeout !== null) {
		clearTimeout(timeout);
	}
};
