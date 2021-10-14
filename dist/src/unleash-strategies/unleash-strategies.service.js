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
exports.UnleashStrategiesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const strategy_1 = require("./strategy");
const gradual_rollout_user_id_1 = require("./strategy/gradual-rollout-user-id");
const unleash_strategies_constants_1 = require("./unleash-strategies.constants");
let UnleashStrategiesService = class UnleashStrategiesService {
    constructor(userWithId, hostname, remoteAddress, defaultStrategy, flexibleRollout, gradualRolloutRandom, gradualRolloutUserId, gradualRolloutSessionId, options, moduleRef) {
        this.userWithId = userWithId;
        this.hostname = hostname;
        this.remoteAddress = remoteAddress;
        this.defaultStrategy = defaultStrategy;
        this.flexibleRollout = flexibleRollout;
        this.gradualRolloutRandom = gradualRolloutRandom;
        this.gradualRolloutUserId = gradualRolloutUserId;
        this.gradualRolloutSessionId = gradualRolloutSessionId;
        this.options = options;
        this.moduleRef = moduleRef;
        this.strategies = [
            userWithId,
            hostname,
            remoteAddress,
            defaultStrategy,
            flexibleRollout,
            gradualRolloutRandom,
            gradualRolloutUserId,
            gradualRolloutSessionId,
        ];
    }
    async onModuleInit() {
        for (const customStrategy of this.options.strategies) {
            this.strategies.push(await this.moduleRef.create(customStrategy));
        }
    }
    findAll() {
        return this.strategies;
    }
    find(name) {
        return this.strategies.find((strategy) => strategy.name === name);
    }
    add(strategy) {
        this.strategies.push(strategy);
    }
};
UnleashStrategiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(8, (0, common_1.Inject)(unleash_strategies_constants_1.CUSTOM_STRATEGIES)),
    __metadata("design:paramtypes", [strategy_1.UserWithIdStrategy,
        strategy_1.ApplicationHostnameStrategy,
        strategy_1.RemoteAddressStrategy,
        strategy_1.DefaultStrategy,
        strategy_1.FlexibleRolloutStrategy,
        strategy_1.GradualRolloutRandomStrategy,
        gradual_rollout_user_id_1.GradualRolloutUserIdStrategy,
        strategy_1.GradualRolloutSessionIdStrategy, Object, core_1.ModuleRef])
], UnleashStrategiesService);
exports.UnleashStrategiesService = UnleashStrategiesService;
//# sourceMappingURL=unleash-strategies.service.js.map