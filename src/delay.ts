import { duration, TUnit } from '@riim/duration';

export function delay(value: number): Promise<void>;
export function delay(value: number, unit: TUnit): Promise<void>;
export function delay(value: `${number}${TUnit}`): Promise<void>;
export function delay(value: number | `${number}${TUnit}`, unit?: TUnit): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(
			() => {
				resolve(undefined);
			},
			typeof value == 'string' ? duration(value) : unit !== undefined ? duration(value, unit) : value
		);
	});
}
