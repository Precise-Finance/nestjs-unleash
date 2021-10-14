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
var UnleashRegisterClient_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnleashRegisterClient = void 0;
const common_1 = require("@nestjs/common");
const package_json_1 = require("../../../package.json");
const unleash_client_1 = require("../unleash-client");
const unleash_client_constants_1 = require("../unleash-client.constants");
let UnleashRegisterClient = UnleashRegisterClient_1 = class UnleashRegisterClient {
    constructor(clientOptions, client) {
        this.clientOptions = clientOptions;
        this.client = client;
        this.logger = new common_1.Logger(UnleashRegisterClient_1.name);
    }
    async register(interval, strategies) {
        const payload = {
            appName: this.clientOptions.appName,
            instanceId: this.clientOptions.instanceId,
            interval,
            sdkVersion: `${package_json_1.name}@${package_json_1.version}`,
            started: new Date().toISOString(),
            strategies,
        };
        this.logger.debug(`Registering ${JSON.stringify(payload)})`);
        await this.client.post('/register', payload);
    }
};
UnleashRegisterClient = UnleashRegisterClient_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(unleash_client_constants_1.UNLEASH_CLIENT_OPTIONS)),
    __metadata("design:paramtypes", [Object, unleash_client_1.UnleashClient])
], UnleashRegisterClient);
exports.UnleashRegisterClient = UnleashRegisterClient;
//# sourceMappingURL=register-client.js.map