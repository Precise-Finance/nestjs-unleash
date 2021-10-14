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
exports.UnleashMetricsClient = void 0;
const common_1 = require("@nestjs/common");
const unleash_client_1 = require("../unleash-client");
const unleash_client_constants_1 = require("../unleash-client.constants");
let UnleashMetricsClient = class UnleashMetricsClient {
    constructor(clientOptions, client) {
        this.clientOptions = clientOptions;
        this.client = client;
    }
    async sendMetrics(body) {
        return this.client.post('/metrics', {
            ...body,
            appName: this.clientOptions.appName,
            instanceId: this.clientOptions.instanceId,
        });
    }
};
UnleashMetricsClient = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(unleash_client_constants_1.UNLEASH_CLIENT_OPTIONS)),
    __metadata("design:paramtypes", [Object, unleash_client_1.UnleashClient])
], UnleashMetricsClient);
exports.UnleashMetricsClient = UnleashMetricsClient;
//# sourceMappingURL=metrics-client.js.map