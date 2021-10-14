"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUpdater = void 0;
const common_1 = require("@nestjs/common");
class BaseUpdater {
    constructor() {
        this.logger = new common_1.Logger(this.constructor.name);
    }
    async start() {
        this.logger.debug(`Running ${this.constructor.name} every ${this.interval} ms ...`);
        await this.update();
        this.timeout = setInterval(() => {
            void this.update();
        }, this.interval);
        this.scheduler.addInterval(this.constructor.name, this.timeout);
    }
    stop() {
        if (this.timeout) {
            this.logger.debug(`Stopping updater ${this.constructor.name} ...`);
            clearInterval(this.timeout);
        }
    }
    onApplicationShutdown(_signal) {
        this.stop();
    }
}
exports.BaseUpdater = BaseUpdater;
//# sourceMappingURL=base-updater.js.map