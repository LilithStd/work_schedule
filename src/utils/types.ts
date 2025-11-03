export type additionalProperties = {
	color: string;
};

export type WorkerDataTypes = {
	id: string;
	name: string;
	surname?: string;
	additionalProperties?: additionalProperties;
};
