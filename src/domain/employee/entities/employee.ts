import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';

type EmpoloyeeType = {
    name: string;
    email: string;
    password: string;
};

export default class Employee extends Entity<EmpoloyeeType> {
    static create(data: EmpoloyeeType, id?: Identity) {
        return new Employee(data, id);
    }
}
