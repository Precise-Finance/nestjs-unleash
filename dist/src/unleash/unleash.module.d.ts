import { DynamicModule, OnModuleInit } from '@nestjs/common';
import { UnleashModuleAsyncOptions, UnleashModuleOptions } from '.';
import { UnleashRegisterClient } from '../unleash-client';
import { UnleashStrategiesService } from '../unleash-strategies';
import { MetricsUpdaterService } from './updaters/metrics-updater.service';
import { TogglesUpdaterService } from './updaters/toggles-updater.service';
export declare class UnleashModule implements OnModuleInit {
    private readonly togglesUpdater;
    private readonly metricsUpdater;
    private readonly registerClient;
    private readonly metricsInterval;
    private readonly strategies;
    private readonly options;
    private readonly logger;
    constructor(togglesUpdater: TogglesUpdaterService, metricsUpdater: MetricsUpdaterService, registerClient: UnleashRegisterClient, metricsInterval: number, strategies: UnleashStrategiesService, options: UnleashModuleOptions);
    onModuleInit(): Promise<void>;
    static forRoot(options: UnleashModuleOptions): DynamicModule;
    static forRootAsync(options: UnleashModuleAsyncOptions): DynamicModule;
}
