import { DynamicModule, Provider } from '@nestjs/common';
import { UnleashStrategiesModuleAsyncOptions, UnleashStrategiesModuleOptions } from '.';
export declare class UnleashStrategiesModule {
    static register({ strategies, }: UnleashStrategiesModuleOptions): DynamicModule;
    static registerAsync(options: UnleashStrategiesModuleAsyncOptions): DynamicModule;
    static createStrategiesProviders(options: UnleashStrategiesModuleAsyncOptions): Provider[];
    private static createStrategiesOptionsProvider;
}
