import Entity from '../../../core/entities/entity';

type RoomType = {
    name: string;
    price: string;
    hasWifi: boolean;
    hasAir: boolean;
    hasKitchen: boolean;
    isPetFriendly: boolean;
    isAvailable: boolean;
};

export default class Room extends Entity<RoomType> {
    constructor(data: RoomType, id?: string) {
        super(data, id);
    }
}
