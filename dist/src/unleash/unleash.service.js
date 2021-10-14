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
var UnleashService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnleashService = void 0;
const common_1 = require("@nestjs/common");
const unleash_strategies_1 = require("../unleash-strategies");
const metrics_service_1 = require("./metrics.service");
const toggle_repository_1 = require("./repository/toggle-repository");
const unleash_context_1 = require("./unleash.context");
let UnleashService = UnleashService_1 = class UnleashService {
    constructor(toggles, strategies, metrics, context) {
        this.toggles = toggles;
        this.strategies = strategies;
        this.metrics = metrics;
        this.context = context;
        this.logger = new common_1.Logger(UnleashService_1.name);
    }
    // eslint-disable-next-line sonarjs/cognitive-complexity
    _isEnabled(name, defaultValue = false) {
        const toggle = this.toggles.find(name);
        if (!toggle) {
            this.logger.warn(`Toggle not found: ${name}`);
            return defaultValue;
        }
        if (toggle.stale) {
            this.logger.warn(`Toggle is stale: ${name}`);
        }
        if (!toggle.enabled) {
            this.logger.log(`Toggle is disabled: ${name}`);
            return defaultValue;
        }
        if (toggle.strategies.length === 0) {
            return toggle.enabled;
        }
        return toggle.strategies.some((data) => {
            const strategy = this.strategies.find(data.name);
            if (!strategy) {
                return false;
            }
            try {
                const isEnabled = strategy.isEnabled(data.parameters, this.context);
                if (isEnabled) {
                    this.logger.debug(`Strategy "${data.name}" returned true`);
                }
                return isEnabled;
            }
            catch (error) {
                this.logger.error(error.stack);
                return false;
            }
        });
    }
    isEnabled(name, defaultValue = false) {
        const isEnabled = this._isEnabled(name, defaultValue);
        this.metrics.increase(name, isEnabled);
        return isEnabled;
    }
    get Properties() {
        return this.context.Properties;
    }
};
UnleashService = UnleashService_1 = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [toggle_repository_1.ToggleRepository,
        unleash_strategies_1.UnleashStrategiesService,
        metrics_service_1.MetricsService,
        unleash_context_1.UnleashContext])
], UnleashService);
exports.UnleashService = UnleashService;
//# sourceMappingURL=unleash.service.js.map