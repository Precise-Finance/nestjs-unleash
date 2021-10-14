"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStrategy = void 0;
class DefaultStrategy {
    constructor() {
        this.name = 'default';
    }
    isEnabled(_parameters, _context) {
        return true;
    }
}
exports.DefaultStrategy = DefaultStrategy;
//# sourceMappingURL=default.js.map