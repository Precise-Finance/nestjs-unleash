import { OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { UnleashStrategiesModuleOptions } from '.';
import { ApplicationHostnameStrategy, DefaultStrategy, FlexibleRolloutStrategy, GradualRolloutRandomStrategy, GradualRolloutSessionIdStrategy, RemoteAddressStrategy, UnleashStrategy, UserWithIdStrategy } from './strategy';
import { GradualRolloutUserIdStrategy } from './strategy/gradual-rollout-user-id';
export declare class UnleashStrategiesService implements OnModuleInit {
    private readonly userWithId;
    private readonly hostname;
    private readonly remoteAddress;
    private readonly defaultStrategy;
    private readonly flexibleRollout;
    private readonly gradualRolloutRandom;
    private readonly gradualRolloutUserId;
    private readonly gradualRolloutSessionId;
    private readonly options;
    private readonly moduleRef;
    private strategies;
    constructor(userWithId: UserWithIdStrategy, hostname: ApplicationHostnameStrategy, remoteAddress: RemoteAddressStrategy, defaultStrategy: DefaultStrategy, flexibleRollout: FlexibleRolloutStrategy, gradualRolloutRandom: GradualRolloutRandomStrategy, gradualRolloutUserId: GradualRolloutUserIdStrategy, gradualRolloutSessionId: GradualRolloutSessionIdStrategy, options: UnleashStrategiesModuleOptions, moduleRef: ModuleRef);
    onModuleInit(): Promise<void>;
    findAll(): UnleashStrategy[];
    find(name: string): UnleashStrategy | undefined;
    add(strategy: UnleashStrategy): void;
}
