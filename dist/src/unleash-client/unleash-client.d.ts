import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
export declare class UnleashClient {
    private readonly http;
    private readonly logger;
    constructor(http: HttpService);
    request<T = unknown>(config: AxiosRequestConfig): Promise<T>;
    get<TResponse = unknown>(url: string, config?: AxiosRequestConfig): Promise<TResponse>;
    post<TResponse = unknown, TRequest = unknown>(url: string, data?: TRequest, config?: AxiosRequestConfig): Promise<TResponse>;
}
