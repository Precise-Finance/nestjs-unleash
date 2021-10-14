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
exports.TogglesUpdaterService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const __1 = require("..");
const unleash_client_1 = require("../../unleash-client");
const toggle_entity_1 = require("../entity/toggle.entity");
const toggle_repository_1 = require("../repository/toggle-repository");
const base_updater_1 = require("./base-updater");
let TogglesUpdaterService = class TogglesUpdaterService extends base_updater_1.BaseUpdater {
    constructor(interval, features, scheduler, toggles) {
        super();
        this.interval = interval;
        this.features = features;
        this.scheduler = scheduler;
        this.toggles = toggles;
    }
    isAxiosError(error) {
        return error.isAxiosError;
    }
    async update() {
        var _a;
        try {
            const features = await this.features.getFeatures();
            features.features.forEach((feature) => {
                this.toggles.updateOrCreate(feature.name, new toggle_entity_1.ToggleEntity(feature));
            });
        }
        catch (error) {
            if (this.isAxiosError(error) &&
                ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === common_1.HttpStatus.NOT_FOUND) {
                const { url, baseURL } = error.config;
                this.logger.warn(
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                `Could not retrieve ${baseURL}${url}: ${error.message}`);
            }
        }
    }
};
TogglesUpdaterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(__1.REFRESH_INTERVAL)),
    __metadata("design:paramtypes", [Number, unleash_client_1.UnleashFeaturesClient,
        schedule_1.SchedulerRegistry,
        toggle_repository_1.ToggleRepository])
], TogglesUpdaterService);
exports.TogglesUpdaterService = TogglesUpdaterService;
//# sourceMappingURL=toggles-updater.service.js.map