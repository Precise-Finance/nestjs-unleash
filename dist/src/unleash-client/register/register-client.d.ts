import { Logger } from '@nestjs/common';
import { UnleashClient } from '../unleash-client';
import { UnleashClientModuleOptions } from '../unleash-client.interfaces';
export declare class UnleashRegisterClient {
    private readonly clientOptions;
    private readonly client;
    protected readonly logger: Logger;
    constructor(clientOptions: UnleashClientModuleOptions, client: UnleashClient);
    register(interval: number, strategies: string[]): Promise<void>;
}
