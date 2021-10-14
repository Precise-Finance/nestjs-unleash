import { Logger } from '@nestjs/common';
import { UnleashStrategiesService } from '../unleash-strategies';
import { MetricsService } from './metrics.service';
import { ToggleRepository } from './repository/toggle-repository';
import { UnleashContext } from './unleash.context';
export declare class UnleashService {
    private readonly toggles;
    private readonly strategies;
    private readonly metrics;
    private readonly context;
    protected readonly logger: Logger;
    constructor(toggles: ToggleRepository, strategies: UnleashStrategiesService, metrics: MetricsService, context: UnleashContext);
    _isEnabled(name: string, defaultValue?: boolean): boolean;
    isEnabled(name: string, defaultValue?: boolean): boolean;
    get Properties(): Map<string, any>;
}
