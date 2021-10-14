import { Logger, OnApplicationShutdown } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
export declare abstract class BaseUpdater implements OnApplicationShutdown {
    private timeout?;
    protected readonly logger: Logger;
    protected abstract interval: number;
    protected abstract scheduler: SchedulerRegistry;
    start(): Promise<void>;
    stop(): void;
    abstract update(): Promise<void>;
    onApplicationShutdown(_signal?: string): void;
}
