"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradualRolloutRandomStrategy = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("../util");
let GradualRolloutRandomStrategy = class GradualRolloutRandomStrategy {
    constructor() {
        this.name = 'gradualRolloutRandom';
    }
    isEnabled(parameters, _context) {
        const percentage = parseInt(parameters.percentage, 10);
        return percentage >= (0, util_1.randomGenerator)();
    }
};
GradualRolloutRandomStrategy = __decorate([
    (0, common_1.Injectable)()
], GradualRolloutRandomStrategy);
exports.GradualRolloutRandomStrategy = GradualRolloutRandomStrategy;
//# sourceMappingURL=gradual-rollout-random.js.map