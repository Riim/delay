import { TUnit } from '@riim/duration';
export declare function delay(value: number): Promise<void>;
export declare function delay(value: number, unit: TUnit): Promise<void>;
export declare function delay(value: `${number}${TUnit}`): Promise<void>;
