import { SchedulerRegistry } from '@nestjs/schedule';
import { AxiosError } from 'axios';
import { UnleashFeaturesClient } from '../../unleash-client';
import { ToggleRepository } from '../repository/toggle-repository';
import { BaseUpdater } from './base-updater';
export declare class TogglesUpdaterService extends BaseUpdater {
    protected readonly interval: number;
    private readonly features;
    protected readonly scheduler: SchedulerRegistry;
    private readonly toggles;
    constructor(interval: number, features: UnleashFeaturesClient, scheduler: SchedulerRegistry, toggles: ToggleRepository);
    isAxiosError(error: unknown): error is AxiosError;
    update(): Promise<void>;
}
