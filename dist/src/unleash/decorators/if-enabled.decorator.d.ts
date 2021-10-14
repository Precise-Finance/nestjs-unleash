import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ModuleRef, Reflector } from '@nestjs/core';
import { UnleashService } from '../unleash.service';
export declare class IfEnabledGuard implements CanActivate {
    private readonly reflector;
    private readonly unleash;
    private readonly moduleRef;
    constructor(reflector: Reflector, unleash: UnleashService, moduleRef: ModuleRef);
    canActivate(context: ExecutionContext): boolean;
}
export declare const METADATA_TOGGLE_NAME = "toggleName";
export declare function IfEnabled(toggleName: string): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void;
