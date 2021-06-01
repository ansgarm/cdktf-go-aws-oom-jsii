import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerSigningJobConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}.
     */
    readonly ignoreSigningJobFailure?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#profile_name SignerSigningJob#profile_name}.
     */
    readonly profileName: string;
    /**
     * destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#destination SignerSigningJob#destination}
     */
    readonly destination: SignerSigningJobDestination[];
    /**
     * source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#source SignerSigningJob#source}
     */
    readonly source: SignerSigningJobSource[];
}
export declare class SignerSigningJobRevocationRecord extends cdktf.ComplexComputedList {
    get reason(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class SignerSigningJobSignedObjectS3 extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare class SignerSigningJobSignedObject extends cdktf.ComplexComputedList {
    get s3(): any;
}
export interface SignerSigningJobDestinationS3 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#bucket SignerSigningJob#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#prefix SignerSigningJob#prefix}.
     */
    readonly prefix?: string;
}
export interface SignerSigningJobDestination {
    /**
     * s3 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#s3 SignerSigningJob#s3}
     */
    readonly s3: SignerSigningJobDestinationS3[];
}
export interface SignerSigningJobSourceS3 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#bucket SignerSigningJob#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#key SignerSigningJob#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#version SignerSigningJob#version}.
     */
    readonly version: string;
}
export interface SignerSigningJobSource {
    /**
     * s3 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#s3 SignerSigningJob#s3}
     */
    readonly s3: SignerSigningJobSourceS3[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job}.
 */
export declare class SignerSigningJob extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SignerSigningJobConfig);
    get completedAt(): string;
    get createdAt(): string;
    get id(): string;
    private _ignoreSigningJobFailure?;
    get ignoreSigningJobFailure(): boolean;
    set ignoreSigningJobFailure(value: boolean);
    resetIgnoreSigningJobFailure(): void;
    get ignoreSigningJobFailureInput(): boolean | undefined;
    get jobId(): string;
    get jobInvoker(): string;
    get jobOwner(): string;
    get platformDisplayName(): string;
    get platformId(): string;
    private _profileName;
    get profileName(): string;
    set profileName(value: string);
    get profileNameInput(): string;
    get profileVersion(): string;
    get requestedBy(): string;
    revocationRecord(index: string): SignerSigningJobRevocationRecord;
    get signatureExpiresAt(): string;
    signedObject(index: string): SignerSigningJobSignedObject;
    get status(): string;
    get statusReason(): string;
    private _destination;
    get destination(): SignerSigningJobDestination[];
    set destination(value: SignerSigningJobDestination[]);
    get destinationInput(): SignerSigningJobDestination[];
    private _source;
    get source(): SignerSigningJobSource[];
    set source(value: SignerSigningJobSource[]);
    get sourceInput(): SignerSigningJobSource[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
