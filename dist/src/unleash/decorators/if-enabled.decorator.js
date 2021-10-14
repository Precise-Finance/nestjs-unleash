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
exports.IfEnabled = exports.METADATA_TOGGLE_NAME = exports.IfEnabledGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const unleash_service_1 = require("../unleash.service");
let IfEnabledGuard = class IfEnabledGuard {
    constructor(reflector, unleash, moduleRef) {
        this.reflector = reflector;
        this.unleash = unleash;
        this.moduleRef = moduleRef;
    }
    canActivate(context) {
        const toggle = this.reflector.get(exports.METADATA_TOGGLE_NAME, context.getHandler());
        if (!this.unleash.isEnabled(toggle)) {
            throw new common_1.NotFoundException();
        }
        return true;
    }
};
IfEnabledGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        unleash_service_1.UnleashService,
        core_1.ModuleRef])
], IfEnabledGuard);
exports.IfEnabledGuard = IfEnabledGuard;
exports.METADATA_TOGGLE_NAME = 'toggleName';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function IfEnabled(toggleName) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.METADATA_TOGGLE_NAME, toggleName), (0, common_1.UseGuards)(IfEnabledGuard));
}
exports.IfEnabled = IfEnabled;
//# sourceMappingURL=if-enabled.decorator.js.map