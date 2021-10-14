import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export interface GradualRolloutUserIdParameters {
    percentage: `${number}`;
    groupId: string;
}
export declare class GradualRolloutUserIdStrategy implements UnleashStrategy<GradualRolloutUserIdParameters> {
    name: string;
    isEnabled(parameters: GradualRolloutUserIdParameters, context: UnleashContext): boolean;
}
