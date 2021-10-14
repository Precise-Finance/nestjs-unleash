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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsService = void 0;
const common_1 = require("@nestjs/common");
const metric_entity_1 = require("./entity/metric.entity");
const metrics_repository_1 = require("./repository/metrics-repository");
let MetricsService = class MetricsService {
    constructor(metrics) {
        this.metrics = metrics;
    }
    createMetric(id, isEnabled) {
        if (isEnabled) {
            this.metrics.create(new metric_entity_1.MetricEntity({ id, yes: 1 }));
        }
        else {
            this.metrics.create(new metric_entity_1.MetricEntity({ id, no: 1 }));
        }
    }
    updateMetric(metric, isEnabled) {
        if (isEnabled) {
            metric.yes++;
        }
        else {
            metric.no++;
        }
    }
    increase(id, isEnabled) {
        const metric = this.metrics.find(id);
        if (metric) {
            this.updateMetric(metric, isEnabled);
        }
        else {
            this.createMetric(id, isEnabled);
        }
    }
};
MetricsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [metrics_repository_1.MetricsRepository])
], MetricsService);
exports.MetricsService = MetricsService;
//# sourceMappingURL=metrics.service.js.map