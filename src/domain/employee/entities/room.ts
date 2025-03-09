import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';
import { Optional } from '../../../core/types/optional';

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
    static create(
        data: Optional<
            RoomType,
            | 'hasWifi'
            | 'hasAir'
            | 'hasKitchen'
            | 'isPetFriendly'
            | 'isAvailable'
        >,
        id?: Identity
    ) {
        return new Room(
            {
                ...data,
                hasAir: data.hasAir ?? false,
                hasWifi: data.hasWifi ?? false,
                hasKitchen: data.hasKitchen ?? false,
                isPetFriendly: data.isPetFriendly ?? false,
                isAvailable: data.isAvailable ?? true
            },
            id
        );
    }
}
