import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';
import Email from '../../shared/value-objects/email';

type EmpoloyeeType = {
    name: string;
    email: Email;
    password: string;
};

export default class Employee extends Entity<EmpoloyeeType> {
    static create(data: EmpoloyeeType, id?: Identity) {
        return new Employee(data, id);
    }
}
