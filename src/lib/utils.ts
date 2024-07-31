import { MY_BIRTHDATE } from './constants';

export function myAge(): number {
	const now = new Date();
	let age = now.getFullYear() - MY_BIRTHDATE.getFullYear();

	const nowMonth = now.getMonth();
	const birthMonth = MY_BIRTHDATE.getMonth();

	if (
		nowMonth < birthMonth ||
		(nowMonth == birthMonth && now.getDay() < MY_BIRTHDATE.getDay())
	) {
		age--;
	}

	return age;
}
