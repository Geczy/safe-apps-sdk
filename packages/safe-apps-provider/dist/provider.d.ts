/// <reference types="node" />
import SafeAppsSDK, { SafeInfo } from '@gnosis.pm/safe-apps-sdk';
import { EventEmitter } from 'events';
import { EIP1193Provider } from './types';
export declare class SafeAppProvider extends EventEmitter implements EIP1193Provider {
    private readonly safe;
    private readonly sdk;
    private submittedTxs;
    constructor(safe: SafeInfo, sdk: SafeAppsSDK);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    get chainId(): number;
    request(request: {
        method: string;
        params?: any[];
    }, opts?: any[]): Promise<any>;
    send(request: any, callback: (error: Error | null, response?: any) => void): Promise<any>;
}
