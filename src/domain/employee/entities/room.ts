import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';

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
    constructor(data: RoomType, id?: Identity) {
        super(data, id);
    }
}
