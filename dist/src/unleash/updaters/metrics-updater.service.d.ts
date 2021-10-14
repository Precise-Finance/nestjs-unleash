import { SchedulerRegistry } from '@nestjs/schedule';
import { UnleashMetricsClient } from '../../unleash-client';
import { MetricsRepository } from '../repository/metrics-repository';
import { BaseUpdater } from './base-updater';
export declare class MetricsUpdaterService extends BaseUpdater {
    protected readonly interval: number;
    protected readonly scheduler: SchedulerRegistry;
    private readonly metrics;
    private readonly metricsClient;
    lastUpdated: Date;
    constructor(interval: number, scheduler: SchedulerRegistry, metrics: MetricsRepository, metricsClient: UnleashMetricsClient);
    update(): Promise<void>;
}
