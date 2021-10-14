import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export interface GradualRolloutRandomParameters {
    percentage: `${number}`;
}
export declare class GradualRolloutRandomStrategy implements UnleashStrategy<GradualRolloutRandomParameters> {
    name: string;
    isEnabled(parameters: GradualRolloutRandomParameters, _context: UnleashContext): boolean;
}
