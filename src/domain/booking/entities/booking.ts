import { randomUUID } from 'node:crypto';
import Room from '../../employee/entities/room';

type BookingType = {
    room: Room;
    days: number;
    customer: string;
    email: string;
    isActive: boolean;
};

export default class Booking {
    private id: string;
    private room: Room;
    private days: number;
    private customer: string;
    private email: string;
    private isActive: boolean;

    constructor(data: BookingType, id?: string) {
        const { room, days, customer, email, isActive } = data;

        this.room = room;
        this.days = days;
        this.customer = customer;
        this.email = email;
        this.isActive = isActive;
        this.id = id ?? randomUUID();
    }
}
