import { Logger } from '@nestjs/common';
import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export interface RemoteAddressParameters {
    IPs: string;
}
export declare class RemoteAddressStrategy implements UnleashStrategy<RemoteAddressParameters> {
    name: string;
    protected readonly logger: Logger;
    isEnabled(parameters: RemoteAddressParameters, context: UnleashContext): boolean;
}
