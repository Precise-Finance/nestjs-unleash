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
exports.MetricsUpdaterService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const __1 = require("..");
const unleash_client_1 = require("../../unleash-client");
const metrics_repository_1 = require("../repository/metrics-repository");
const base_updater_1 = require("./base-updater");
let MetricsUpdaterService = class MetricsUpdaterService extends base_updater_1.BaseUpdater {
    constructor(interval, scheduler, metrics, metricsClient) {
        super();
        this.interval = interval;
        this.scheduler = scheduler;
        this.metrics = metrics;
        this.metricsClient = metricsClient;
        this.lastUpdated = new Date();
    }
    async update() {
        const metrics = this.metrics.findAll();
        if (metrics.length === 0) {
            return;
        }
        try {
            await this.metricsClient.sendMetrics({
                bucket: {
                    start: this.lastUpdated.toISOString(),
                    stop: new Date().toISOString(),
                    toggles: Object.fromEntries(metrics.map((metric) => [
                        metric.id,
                        { yes: metric.yes, no: metric.no },
                    ])),
                },
            });
            this.metrics.flushAll();
        }
        catch (error) {
            this.logger.warn(error.message);
        }
    }
};
MetricsUpdaterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(__1.METRICS_INTERVAL)),
    __metadata("design:paramtypes", [Number, schedule_1.SchedulerRegistry,
        metrics_repository_1.MetricsRepository,
        unleash_client_1.UnleashMetricsClient])
], MetricsUpdaterService);
exports.MetricsUpdaterService = MetricsUpdaterService;
//# sourceMappingURL=metrics-updater.service.js.map