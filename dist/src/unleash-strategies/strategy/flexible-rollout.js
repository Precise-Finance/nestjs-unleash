"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexibleRolloutStrategy = exports.UnleashStickiness = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("../util");
var UnleashStickiness;
(function (UnleashStickiness) {
    UnleashStickiness["default"] = "default";
    UnleashStickiness["userId"] = "userId";
    UnleashStickiness["sessionId"] = "sessionId";
    UnleashStickiness["random"] = "random";
})(UnleashStickiness = exports.UnleashStickiness || (exports.UnleashStickiness = {}));
let FlexibleRolloutStrategy = class FlexibleRolloutStrategy {
    constructor() {
        this.name = 'flexibleRollout';
    }
    // eslint-disable-next-line complexity
    resolveStickiness(stickiness, context) {
        const userId = context.getUserId();
        const sessionId = context.getSessionId();
        switch (stickiness) {
            case UnleashStickiness.userId:
                return userId;
            case UnleashStickiness.sessionId:
                return sessionId;
            case UnleashStickiness.random:
                return (0, util_1.randomGenerator)().toString();
            default:
                return userId || sessionId || (0, util_1.randomGenerator)().toString();
        }
    }
    // eslint-disable-next-line complexity
    isEnabled(parameters, context) {
        const groupId = parameters.groupId;
        const percentage = Number(parameters.rollout);
        const stickiness = parameters.stickiness || UnleashStickiness.default;
        const stickinessId = this.resolveStickiness(stickiness, context);
        if (!stickinessId) {
            return false;
        }
        const normalizedUserId = (0, util_1.normalizedValue)(stickinessId, groupId);
        return percentage > 0 && normalizedUserId <= percentage;
    }
};
FlexibleRolloutStrategy = __decorate([
    (0, common_1.Injectable)()
], FlexibleRolloutStrategy);
exports.FlexibleRolloutStrategy = FlexibleRolloutStrategy;
//# sourceMappingURL=flexible-rollout.js.map