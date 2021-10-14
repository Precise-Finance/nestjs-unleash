import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export declare class DefaultStrategy implements UnleashStrategy<never> {
    name: string;
    isEnabled(_parameters: never, _context: UnleashContext): boolean;
}
