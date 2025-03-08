import Entity from '../../../core/entities/entity';

type EmpoloyeeType = {
    name: string;
    email: string;
    password: string;
};

export default class Employee extends Entity<EmpoloyeeType> {
    constructor(data: EmpoloyeeType, id?: string) {
        super(data, id);
    }
}
