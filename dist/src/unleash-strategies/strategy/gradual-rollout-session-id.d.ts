import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export interface GradualRolloutSessionIdParameters {
    percentage: `${number}`;
    groupId: string;
}
export declare class GradualRolloutSessionIdStrategy implements UnleashStrategy<GradualRolloutSessionIdParameters> {
    name: string;
    isEnabled(parameters: GradualRolloutSessionIdParameters, context: UnleashContext): boolean;
}
