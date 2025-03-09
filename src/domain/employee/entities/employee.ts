import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';

type EmpoloyeeType = {
    name: string;
    email: string;
    password: string;
};

export default class Employee extends Entity<EmpoloyeeType> {
    constructor(data: EmpoloyeeType, id?: Identity) {
        super(data, id);
    }
}
