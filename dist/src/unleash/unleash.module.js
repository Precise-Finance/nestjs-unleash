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
var UnleashModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnleashModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const schedule_1 = require("@nestjs/schedule");
const _1 = require(".");
const unleash_client_1 = require("../unleash-client");
const unleash_strategies_1 = require("../unleash-strategies");
const metrics_service_1 = require("./metrics.service");
const metrics_repository_1 = require("./repository/metrics-repository");
const toggle_repository_1 = require("./repository/toggle-repository");
const unleash_constants_1 = require("./unleash.constants");
const unleash_service_1 = require("./unleash.service");
const metrics_updater_service_1 = require("./updaters/metrics-updater.service");
const toggles_updater_service_1 = require("./updaters/toggles-updater.service");
const DEFAULT_TIMEOUT = 1000;
const DEFAULT_INTERVAL = 15000;
let UnleashModule = UnleashModule_1 = class UnleashModule {
    constructor(togglesUpdater, metricsUpdater, registerClient, metricsInterval, strategies, options) {
        this.togglesUpdater = togglesUpdater;
        this.metricsUpdater = metricsUpdater;
        this.registerClient = registerClient;
        this.metricsInterval = metricsInterval;
        this.strategies = strategies;
        this.options = options;
        this.logger = new common_1.Logger(UnleashModule_1.name);
    }
    async onModuleInit() {
        var _a;
        await this.togglesUpdater.start();
        if (!((_a = this.options.disableRegistration) !== null && _a !== void 0 ? _a : true)) {
            try {
                await this.registerClient.register(this.metricsInterval, this.strategies.findAll().map((strategy) => strategy.name));
                await this.metricsUpdater.start();
            }
            catch (error) {
                this.logger.error(error);
            }
        }
    }
    static forRoot(options) {
        var _a, _b, _c;
        const strategiesModule = unleash_strategies_1.UnleashStrategiesModule.registerAsync({
            useFactory: (options) => {
                var _a;
                return ({
                    strategies: (_a = options.strategies) !== null && _a !== void 0 ? _a : [],
                });
            },
            inject: [unleash_constants_1.UNLEASH_MODULE_OPTIONS],
        });
        const clientModule = unleash_client_1.UnleashClientModule.registerAsync({
            useFactory: (options) => {
                var _a;
                return ({
                    baseURL: options.url,
                    appName: options.appName,
                    instanceId: options.instanceId,
                    timeout: ((_a = options.http) === null || _a === void 0 ? void 0 : _a.timeout) || DEFAULT_TIMEOUT,
                    http: options.http,
                });
            },
            inject: [unleash_constants_1.UNLEASH_MODULE_OPTIONS],
        });
        return {
            global: (_a = options === null || options === void 0 ? void 0 : options.global) !== null && _a !== void 0 ? _a : true,
            module: UnleashModule_1,
            imports: [strategiesModule, clientModule],
            exports: [
                clientModule,
                strategiesModule,
                unleash_constants_1.UNLEASH_MODULE_OPTIONS,
                toggle_repository_1.ToggleRepository,
            ],
            providers: [
                {
                    provide: unleash_constants_1.UNLEASH_MODULE_OPTIONS,
                    useValue: options,
                },
                {
                    provide: unleash_constants_1.REFRESH_INTERVAL,
                    useValue: (_b = options.refreshInterval) !== null && _b !== void 0 ? _b : DEFAULT_INTERVAL,
                },
                {
                    provide: unleash_constants_1.METRICS_INTERVAL,
                    useValue: (_c = options.metricsInterval) !== null && _c !== void 0 ? _c : DEFAULT_INTERVAL,
                },
            ],
        };
    }
    // eslint-disable-next-line complexity
    static forRootAsync(options) {
        var _a;
        const strategiesModule = unleash_strategies_1.UnleashStrategiesModule.registerAsync({
            // extraProviders: options.strategies,
            useFactory: (options) => {
                var _a;
                return ({
                    strategies: (_a = options.strategies) !== null && _a !== void 0 ? _a : [],
                });
            },
            inject: [unleash_constants_1.UNLEASH_MODULE_OPTIONS, core_1.ModuleRef],
        });
        const clientModule = unleash_client_1.UnleashClientModule.registerAsync({
            // eslint-disable-next-line sonarjs/no-identical-functions
            useFactory: (options) => {
                var _a;
                return ({
                    baseURL: options.url,
                    appName: options.appName,
                    instanceId: options.instanceId,
                    timeout: ((_a = options.http) === null || _a === void 0 ? void 0 : _a.timeout) || DEFAULT_TIMEOUT,
                    http: options.http,
                });
            },
            inject: [unleash_constants_1.UNLEASH_MODULE_OPTIONS],
        });
        return {
            global: (_a = options === null || options === void 0 ? void 0 : options.global) !== null && _a !== void 0 ? _a : true,
            module: UnleashModule_1,
            imports: [strategiesModule, clientModule],
            exports: [
                clientModule,
                strategiesModule,
                unleash_constants_1.UNLEASH_MODULE_OPTIONS,
                toggle_repository_1.ToggleRepository,
            ],
            providers: [
                {
                    provide: unleash_constants_1.UNLEASH_MODULE_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                {
                    provide: unleash_constants_1.REFRESH_INTERVAL,
                    useFactory: (options) => { var _a; return (_a = options.refreshInterval) !== null && _a !== void 0 ? _a : DEFAULT_INTERVAL; },
                    inject: [unleash_constants_1.UNLEASH_MODULE_OPTIONS],
                },
                {
                    provide: unleash_constants_1.METRICS_INTERVAL,
                    useFactory: (options) => { var _a; return (_a = options.metricsInterval) !== null && _a !== void 0 ? _a : DEFAULT_INTERVAL; },
                    inject: [unleash_constants_1.UNLEASH_MODULE_OPTIONS],
                },
            ],
        };
    }
};
UnleashModule = UnleashModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot()],
        providers: [
            metrics_repository_1.MetricsRepository,
            metrics_service_1.MetricsService,
            metrics_updater_service_1.MetricsUpdaterService,
            toggle_repository_1.ToggleRepository,
            toggles_updater_service_1.TogglesUpdaterService,
            _1.UnleashContext,
            unleash_service_1.UnleashService,
        ],
        exports: [unleash_service_1.UnleashService, unleash_strategies_1.UnleashStrategiesModule, toggle_repository_1.ToggleRepository],
    }),
    __param(3, (0, common_1.Inject)(unleash_constants_1.METRICS_INTERVAL)),
    __param(5, (0, common_1.Inject)(unleash_constants_1.UNLEASH_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [toggles_updater_service_1.TogglesUpdaterService,
        metrics_updater_service_1.MetricsUpdaterService,
        unleash_client_1.UnleashRegisterClient, Number, unleash_strategies_1.UnleashStrategiesService, Object])
], UnleashModule);
exports.UnleashModule = UnleashModule;
//# sourceMappingURL=unleash.module.js.map