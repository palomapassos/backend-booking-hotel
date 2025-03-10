import Room from '../../employee/entities/room';
import Identity from '../../../core/entities/identity';
import { Optional } from '../../../core/types/optional';
import Email from '../../shared/value-objects/email';
import AggregateRoot from '../../../core/entities/aggregate-root';

type BookingType = {
    room: Room;
    days: number;
    customer: string;
    email: Email;
    isActive: boolean;
};

export default class Booking extends AggregateRoot<BookingType> {
    static create(data: Optional<BookingType, 'isActive'>, id?: Identity) {
        return new Booking({ ...data, isActive: data.isActive ?? true }, id);
    }

    set<K extends keyof BookingType>(key: K, value: BookingType[K]) {
        if (key === 'room') {
            throw new Error('O atributo de quarto não pode ser modificado!');
        }
        super.set(key, value);
    }
}
