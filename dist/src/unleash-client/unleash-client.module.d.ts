import { DynamicModule } from '@nestjs/common';
import { UnleashClientModuleAsyncOptions, UnleashClientModuleOptions } from './unleash-client.interfaces';
export declare class UnleashClientModule {
    private static optionsFactory;
    static register(options: UnleashClientModuleOptions): DynamicModule;
    static registerAsync(options: UnleashClientModuleAsyncOptions): DynamicModule;
}
