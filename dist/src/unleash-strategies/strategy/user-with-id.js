"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithIdStrategy = void 0;
const common_1 = require("@nestjs/common");
let UserWithIdStrategy = class UserWithIdStrategy {
    constructor() {
        this.name = 'userWithId';
    }
    isEnabled(parameters, context) {
        const userId = context.getUserId();
        if (!userId) {
            return false;
        }
        const userIds = parameters.userIds.split(/\s*,\s*/);
        return userIds.includes(userId);
    }
};
UserWithIdStrategy = __decorate([
    (0, common_1.Injectable)()
], UserWithIdStrategy);
exports.UserWithIdStrategy = UserWithIdStrategy;
//# sourceMappingURL=user-with-id.js.map