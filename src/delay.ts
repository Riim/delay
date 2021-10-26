import { interval, TUnit } from '@riim/interval';

export function delay(value: number): Promise<void>;
export function delay(value: number, unit: TUnit): Promise<void>;
export function delay(value: `${number}${TUnit}`): Promise<void>;
export function delay(value: number | `${number}${TUnit}`, unit?: TUnit): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(
			() => {
				resolve(undefined);
			},
			typeof value == 'string' ? interval(value) : unit !== undefined ? interval(value, unit) : value
		);
	});
}
