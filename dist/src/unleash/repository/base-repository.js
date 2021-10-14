"use strict";
/* eslint-disable @typescript-eslint/require-await */
// TODO: persist on disk
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor() {
        this.items = [];
    }
    updateOrCreate(id, item) {
        // eslint-disable-next-line unicorn/prefer-array-some
        this.find(item.id) ? this.update(id, item) : this.create(item);
    }
    create(item) {
        this.items.push(item);
    }
    update(id, item) {
        this.items[this.findIndex(id)] = item;
    }
    delete(id) {
        this.items.splice(this.findIndex(id), 1);
    }
    findIndex(id) {
        return this.items.findIndex((item) => item.id === id);
    }
    find(id) {
        return this.items.find((item) => item.id === id);
    }
    findAll() {
        return this.items;
    }
    flushAll() {
        this.items = [];
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base-repository.js.map