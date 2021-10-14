import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export interface UserWithIdParameters {
    userIds: string;
}
export declare class UserWithIdStrategy implements UnleashStrategy<UserWithIdParameters> {
    name: string;
    isEnabled(parameters: UserWithIdParameters, context: UnleashContext): boolean;
}
