declare function is(val: unknown, type: string): boolean;
declare const isArray: (val: any) => boolean;
declare const isString: (val: unknown) => val is string;

export { is, isArray, isString };
