import Room from '../../employee/entities/room';
import Entity from '../../../core/entities/entity';

type BookingType = {
    room: Room;
    days: number;
    customer: string;
    email: string;
    isActive: boolean;
};

export default class Booking extends Entity<BookingType> {
    constructor(data: BookingType, id?: string) {
        super(data, id);
    }
}
