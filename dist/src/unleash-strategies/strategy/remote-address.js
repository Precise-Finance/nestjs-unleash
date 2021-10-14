"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable max-depth */
/* eslint-disable @typescript-eslint/no-unsafe-call */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var RemoteAddressStrategy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteAddressStrategy = void 0;
const common_1 = require("@nestjs/common");
const ip = __importStar(require("ip"));
const net_1 = require("net");
let RemoteAddressStrategy = RemoteAddressStrategy_1 = class RemoteAddressStrategy {
    constructor() {
        this.name = 'remoteAddress';
        this.logger = new common_1.Logger(RemoteAddressStrategy_1.name);
    }
    // eslint-disable-next-line complexity, sonarjs/cognitive-complexity
    isEnabled(parameters, context) {
        const remoteAddress = context.getRemoteAddress();
        if (!parameters.IPs || !remoteAddress) {
            return false;
        }
        for (const range of parameters.IPs.split(/\s*,\s*/)) {
            if (range === remoteAddress) {
                return true;
            }
            try {
                if (!(0, net_1.isIP)(range) && ip.cidrSubnet(range).contains(remoteAddress)) {
                    return true;
                }
            }
            catch (error) {
                this.logger.warn(error);
            }
        }
        return false;
    }
};
RemoteAddressStrategy = RemoteAddressStrategy_1 = __decorate([
    (0, common_1.Injectable)()
], RemoteAddressStrategy);
exports.RemoteAddressStrategy = RemoteAddressStrategy;
//# sourceMappingURL=remote-address.js.map