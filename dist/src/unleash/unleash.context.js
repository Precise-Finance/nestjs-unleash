"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnleashContext = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const unleash_constants_1 = require("./unleash.constants");
const defaultUserIdFactory = (request) => {
    var _a, _b;
    return (_b = (_a = request.user) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString();
};
let UnleashContext = class UnleashContext {
    constructor(request, options) {
        this.request = request;
        this.options = options;
        this.properties = new Map();
    }
    getUserId() {
        var _a;
        const userIdFactory = (_a = this.options.userIdFactory) !== null && _a !== void 0 ? _a : defaultUserIdFactory;
        return userIdFactory(this.request);
    }
    getRemoteAddress() {
        return this.request.ip;
    }
    getSessionId() {
        var _a, _b;
        return (((_a = this.request.session) === null || _a === void 0 ? void 0 : _a.id) ||
            ((_b = this.request.session) === null || _b === void 0 ? void 0 : _b.sessionId));
    }
    getRequest() {
        return this.request;
    }
    get Properties() {
        return this.properties;
    }
};
UnleashContext = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, common_1.Inject)(unleash_constants_1.UNLEASH_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, Object])
], UnleashContext);
exports.UnleashContext = UnleashContext;
//# sourceMappingURL=unleash.context.js.map