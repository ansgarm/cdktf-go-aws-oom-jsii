import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSignerSigningJobConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html#job_id DataAwsSignerSigningJob#job_id}.
     */
    readonly jobId: string;
}
export declare class DataAwsSignerSigningJobRevocationRecord extends cdktf.ComplexComputedList {
    get reason(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class DataAwsSignerSigningJobSignedObjectS3 extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare class DataAwsSignerSigningJobSignedObject extends cdktf.ComplexComputedList {
    get s3(): any;
}
export declare class DataAwsSignerSigningJobSourceS3 extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
    get version(): string;
}
export declare class DataAwsSignerSigningJobSource extends cdktf.ComplexComputedList {
    get s3(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job}.
 */
export declare class DataAwsSignerSigningJob extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_job.html aws_signer_signing_job} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSignerSigningJobConfig);
    get completedAt(): string;
    get createdAt(): string;
    get id(): string;
    private _jobId;
    get jobId(): string;
    set jobId(value: string);
    get jobIdInput(): string;
    get jobInvoker(): string;
    get jobOwner(): string;
    get platformDisplayName(): string;
    get platformId(): string;
    get profileName(): string;
    get profileVersion(): string;
    get requestedBy(): string;
    revocationRecord(index: string): DataAwsSignerSigningJobRevocationRecord;
    get signatureExpiresAt(): string;
    signedObject(index: string): DataAwsSignerSigningJobSignedObject;
    source(index: string): DataAwsSignerSigningJobSource;
    get status(): string;
    get statusReason(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
