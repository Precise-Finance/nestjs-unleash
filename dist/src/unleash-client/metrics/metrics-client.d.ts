import { UnleashClient } from '../unleash-client';
import { UnleashClientModuleOptions } from '../unleash-client.interfaces';
import { SendMetricsRequestBody } from './metrics-client.interfaces';
export declare class UnleashMetricsClient {
    private readonly clientOptions;
    private readonly client;
    constructor(clientOptions: UnleashClientModuleOptions, client: UnleashClient);
    sendMetrics(body: Omit<SendMetricsRequestBody, 'appName' | 'instanceId'>): Promise<void>;
}
