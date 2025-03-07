import { randomUUID } from 'node:crypto';

type RoomType = {
    name: string;
    price: string;
    hasWifi: boolean;
    hasAir: boolean;
    hasKitchen: boolean;
    isPetFriendly: boolean;
    isAvailable: boolean;
};

export default class Room {
    private id: string;
    private name: string;
    private price: string;
    private hasWifi: boolean;
    private hasAir: boolean;
    private hasKitchen: boolean;
    private isPetFriendly: boolean;
    private isAvailable: boolean;

    constructor(data: RoomType, id?: string) {
        const {
            name,
            price,
            hasWifi,
            hasAir,
            hasKitchen,
            isPetFriendly,
            isAvailable
        } = data;

        this.name = name;
        this.price = price;
        this.hasWifi = hasWifi;
        this.hasAir = hasAir;
        this.hasKitchen = hasKitchen;
        this.isPetFriendly = isPetFriendly;
        this.isAvailable = isAvailable;
        this.id = id ?? randomUUID();
    }
}
