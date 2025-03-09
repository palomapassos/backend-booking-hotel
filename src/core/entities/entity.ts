import { randomUUID } from 'node:crypto';
import Identity from './identity';

export default abstract class Entity<T> {
    private entityId: Identity;
    protected attributes: T;

    get id() {
        return this.entityId;
    }

    get<K extends keyof T>(key: K): T[K] {
        return this.attributes[key];
    }

    set<K extends keyof T>(key: K, value: T[K]): void {
        this.attributes[key] = value;
    }

    protected constructor(attributes: T, id?: Identity) {
        this.attributes = attributes;
        this.entityId = id ?? new Identity();
    }
}
