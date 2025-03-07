import { randomUUID } from 'crypto';

type EmpoloyeeType = {
	name: string;
	email: string;
	password: string;
};

export default class Employee {
	private id: string;
	private name: string;
	private email: string;
	private password: string;

	constructor(data: EmpoloyeeType, id?: string) {
		const { name, email, password } = data;

		this.name = name;
		this.email = email;
		this.password = password;
		this.id = id ?? randomUUID();
	}
}
