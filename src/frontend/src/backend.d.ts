import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    name: string;
    email: string;
    phone: string;
    projectDetails: string;
}
export type SubmissionId = bigint;
export interface backendInterface {
    getSubmission(id: SubmissionId): Promise<Submission | null>;
    listSubmissions(): Promise<Array<Submission>>;
    submitContactForm(name: string, email: string, phone: string, projectDetails: string): Promise<SubmissionId>;
}
