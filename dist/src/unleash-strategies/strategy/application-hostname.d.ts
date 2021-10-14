import { UnleashContext } from '../../unleash';
import { UnleashStrategy } from './strategy.interface';
export interface HostnameParameters {
    hostNames: string;
}
export declare class ApplicationHostnameStrategy implements UnleashStrategy<HostnameParameters> {
    name: string;
    hostname: string;
    isEnabled(parameters: HostnameParameters, _context: UnleashContext): boolean;
}
