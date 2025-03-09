import Room from '../../employee/entities/room';
import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';

type BookingType = {
    room: Room;
    days: number;
    customer: string;
    email: string;
    isActive: boolean;
};

export default class Booking extends Entity<BookingType> {
    constructor(data: BookingType, id?: Identity) {
        super(data, id);
    }

    set<K extends keyof BookingType>(key: K, value: BookingType[K]) {
        if (key === 'room') {
            throw new Error('O atributo de quarto não pode ser modificado!');
        }
        super.set(key, value);
    }
}
