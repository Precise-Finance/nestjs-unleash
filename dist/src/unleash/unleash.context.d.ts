import { UnleashModuleOptions } from '.';
import { Request } from '../unleash-strategies';
export declare class UnleashContext {
    private request;
    private readonly options;
    private properties;
    constructor(request: Request<{
        id: string;
    }>, options: UnleashModuleOptions);
    getUserId(): string | undefined;
    getRemoteAddress(): string | undefined;
    getSessionId(): string | undefined;
    getRequest<T = Request<{
        id: string;
    }>>(): T;
    get Properties(): Map<string, any>;
}
