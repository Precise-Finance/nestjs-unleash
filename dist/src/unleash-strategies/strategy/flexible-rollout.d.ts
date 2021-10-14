import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export declare enum UnleashStickiness {
    default = "default",
    userId = "userId",
    sessionId = "sessionId",
    random = "random"
}
export interface FlexibleRolloutParameters {
    rollout: `${number}`;
    stickiness: UnleashStickiness;
    groupId: string;
}
export declare class FlexibleRolloutStrategy implements UnleashStrategy<FlexibleRolloutParameters> {
    name: string;
    resolveStickiness(stickiness: UnleashStickiness | undefined, context: UnleashContext): string | undefined;
    isEnabled(parameters: FlexibleRolloutParameters, context: UnleashContext): boolean;
}
