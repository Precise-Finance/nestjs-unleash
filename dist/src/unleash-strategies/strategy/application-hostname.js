"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationHostnameStrategy = void 0;
const common_1 = require("@nestjs/common");
const os_1 = require("os");
let ApplicationHostnameStrategy = class ApplicationHostnameStrategy {
    constructor() {
        this.name = 'applicationHostname';
        this.hostname = (0, os_1.hostname)();
    }
    isEnabled(parameters, _context) {
        if (!parameters.hostNames) {
            return false;
        }
        return parameters.hostNames
            .toLowerCase()
            .split(/\s*,\s*/)
            .includes(this.hostname);
    }
};
ApplicationHostnameStrategy = __decorate([
    (0, common_1.Injectable)()
], ApplicationHostnameStrategy);
exports.ApplicationHostnameStrategy = ApplicationHostnameStrategy;
//# sourceMappingURL=application-hostname.js.map