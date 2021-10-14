import { UnleashClient } from '../unleash-client';
import { GetFeaturesResponse } from './features-client.interfaces';
export declare class UnleashFeaturesClient {
    private readonly client;
    constructor(client: UnleashClient);
    getFeatures(): Promise<GetFeaturesResponse>;
}
