import { MetricsRepository } from './repository/metrics-repository';
export declare class MetricsService {
    private readonly metrics;
    constructor(metrics: MetricsRepository);
    private createMetric;
    private updateMetric;
    increase(id: string, isEnabled: boolean): void;
}
