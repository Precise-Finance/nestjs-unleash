"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricEntity = void 0;
class MetricEntity {
    constructor(data) {
        this.yes = 0;
        this.no = 0;
        this.createdAt = new Date();
        Object.assign(this, data);
    }
}
exports.MetricEntity = MetricEntity;
//# sourceMappingURL=metric.entity.js.map