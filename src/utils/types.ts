export type additionalProperties = {
	color: string;
};

export type ObjectTypes = Record<
	string,
	{
		EN: string;
		LV: string;
		RU: string;
	}
>;

export type WorkerDataTypes = {
	id: string;
	name: string;
	surname?: string;
	additionalProperties?: additionalProperties;
};
