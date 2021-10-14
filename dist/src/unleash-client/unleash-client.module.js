"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UnleashClientModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnleashClientModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const _1 = require(".");
const __1 = require("..");
const unleash_client_1 = require("./unleash-client");
const unleash_client_constants_1 = require("./unleash-client.constants");
let UnleashClientModule = UnleashClientModule_1 = class UnleashClientModule {
    static optionsFactory(options) {
        var _a;
        return {
            ...options.http,
            baseURL: options.baseURL,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            headers: {
                ...(_a = options.http) === null || _a === void 0 ? void 0 : _a.headers,
                'UNLEASH-INSTANCEID': options.instanceId,
                'UNLEASH-APPNAME': options.appName,
            },
        };
    }
    static register(options) {
        return {
            module: UnleashClientModule_1,
            imports: [
                axios_1.HttpModule.register(UnleashClientModule_1.optionsFactory(options)),
                __1.UnleashStrategiesModule,
            ],
            providers: [{ provide: unleash_client_constants_1.UNLEASH_CLIENT_OPTIONS, useValue: options }],
        };
    }
    static registerAsync(options) {
        var _a;
        const provider = {
            provide: unleash_client_constants_1.UNLEASH_CLIENT_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject,
        };
        return {
            module: __1.UnleashStrategiesModule,
            imports: [
                ...((_a = options.imports) !== null && _a !== void 0 ? _a : []),
                axios_1.HttpModule.registerAsync({
                    useFactory: (options) => UnleashClientModule_1.optionsFactory(options),
                    inject: [unleash_client_constants_1.UNLEASH_CLIENT_OPTIONS],
                }),
            ],
            providers: [
                provider,
                __1.UnleashStrategiesModule,
                unleash_client_1.UnleashClient,
                _1.UnleashFeaturesClient,
                _1.UnleashMetricsClient,
                _1.UnleashRegisterClient,
            ],
            exports: [
                provider,
                unleash_client_1.UnleashClient,
                _1.UnleashFeaturesClient,
                _1.UnleashMetricsClient,
                _1.UnleashRegisterClient,
            ],
        };
    }
};
UnleashClientModule = UnleashClientModule_1 = __decorate([
    (0, common_1.Module)({})
], UnleashClientModule);
exports.UnleashClientModule = UnleashClientModule;
//# sourceMappingURL=unleash-client.module.js.map