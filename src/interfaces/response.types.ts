export type ServiceStatus =
	| "Ok"
	| "Created"
	| "NotFound"
	| "Unauthorized"
	| "Error"
	| "ValidationError";

export interface ServiceResult<T> {
	result: T | null;
	status: ServiceStatus;
	validationResult?: unknown;
}
