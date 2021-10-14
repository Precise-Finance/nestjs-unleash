"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UnleashStrategiesModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnleashStrategiesModule = void 0;
const common_1 = require("@nestjs/common");
const strategy_1 = require("./strategy");
const gradual_rollout_random_1 = require("./strategy/gradual-rollout-random");
const gradual_rollout_user_id_1 = require("./strategy/gradual-rollout-user-id");
const unleash_strategies_constants_1 = require("./unleash-strategies.constants");
const unleash_strategies_service_1 = require("./unleash-strategies.service");
let UnleashStrategiesModule = UnleashStrategiesModule_1 = class UnleashStrategiesModule {
    static register({ strategies = [], }) {
        return {
            module: UnleashStrategiesModule_1,
            providers: [
                unleash_strategies_service_1.UnleashStrategiesService,
                { provide: unleash_strategies_constants_1.CUSTOM_STRATEGIES, useValue: strategies },
            ],
            exports: [
                unleash_strategies_service_1.UnleashStrategiesService,
                { provide: unleash_strategies_constants_1.CUSTOM_STRATEGIES, useValue: strategies },
            ],
        };
    }
    static registerAsync(options) {
        var _a;
        const providers = this.createStrategiesProviders(options);
        return {
            module: UnleashStrategiesModule_1,
            imports: options.imports,
            providers: [
                ...((_a = options.extraProviders) !== null && _a !== void 0 ? _a : []),
                ...providers,
                unleash_strategies_service_1.UnleashStrategiesService,
            ],
            exports: [...providers, unleash_strategies_service_1.UnleashStrategiesService],
        };
    }
    static createStrategiesProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createStrategiesOptionsProvider(options)];
        }
        return [
            this.createStrategiesOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createStrategiesOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: unleash_strategies_constants_1.CUSTOM_STRATEGIES,
                useFactory: options.useFactory,
                inject: options.inject,
            };
        }
        return {
            provide: unleash_strategies_constants_1.CUSTOM_STRATEGIES,
            useFactory: async (optionsFactory) => await optionsFactory.createStrategiesOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
};
UnleashStrategiesModule = UnleashStrategiesModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [
            strategy_1.DefaultStrategy,
            strategy_1.ApplicationHostnameStrategy,
            strategy_1.FlexibleRolloutStrategy,
            strategy_1.RemoteAddressStrategy,
            strategy_1.UserWithIdStrategy,
            gradual_rollout_random_1.GradualRolloutRandomStrategy,
            strategy_1.GradualRolloutSessionIdStrategy,
            gradual_rollout_user_id_1.GradualRolloutUserIdStrategy,
        ],
    })
], UnleashStrategiesModule);
exports.UnleashStrategiesModule = UnleashStrategiesModule;
//# sourceMappingURL=unleash-strategies.module.js.map