export declare abstract class BaseRepository<T extends {
    id: string;
}> {
    private items;
    updateOrCreate(id: string, item: T): void;
    create(item: T): void;
    update(id: string, item: T): void;
    delete(id: string): void;
    private findIndex;
    find(id: string): T | undefined;
    findAll(): T[];
    flushAll(): void;
}
