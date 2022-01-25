export function getAge(birthDate: Date): number {
	const now = new Date();
	let age = now.getFullYear() - birthDate.getFullYear();

	const month = now.getMonth() - birthDate.getMonth();
	if (month < 0 || (month === 0 && now.getDate() - birthDate.getDate())) {
		age--;
	}

	return age;
}

export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

export const isPowerOf2 = (value: number) => (value & (value - 1)) === 0;
