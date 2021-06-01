import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SyntheticsCanaryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#artifact_s3_location SyntheticsCanary#artifact_s3_location}.
     */
    readonly artifactS3Location: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#execution_role_arn SyntheticsCanary#execution_role_arn}.
     */
    readonly executionRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#failure_retention_period SyntheticsCanary#failure_retention_period}.
     */
    readonly failureRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#handler SyntheticsCanary#handler}.
     */
    readonly handler: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#name SyntheticsCanary#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#runtime_version SyntheticsCanary#runtime_version}.
     */
    readonly runtimeVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_bucket SyntheticsCanary#s3_bucket}.
     */
    readonly s3Bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_key SyntheticsCanary#s3_key}.
     */
    readonly s3Key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#s3_version SyntheticsCanary#s3_version}.
     */
    readonly s3Version?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#start_canary SyntheticsCanary#start_canary}.
     */
    readonly startCanary?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#success_retention_period SyntheticsCanary#success_retention_period}.
     */
    readonly successRetentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#tags SyntheticsCanary#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#tags_all SyntheticsCanary#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#zip_file SyntheticsCanary#zip_file}.
     */
    readonly zipFile?: string;
    /**
     * run_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#run_config SyntheticsCanary#run_config}
     */
    readonly runConfig?: SyntheticsCanaryRunConfig[];
    /**
     * schedule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#schedule SyntheticsCanary#schedule}
     */
    readonly schedule: SyntheticsCanarySchedule[];
    /**
     * vpc_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#vpc_config SyntheticsCanary#vpc_config}
     */
    readonly vpcConfig?: SyntheticsCanaryVpcConfig[];
}
export declare class SyntheticsCanaryTimeline extends cdktf.ComplexComputedList {
    get created(): string;
    get lastModified(): string;
    get lastStarted(): string;
    get lastStopped(): string;
}
export interface SyntheticsCanaryRunConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#active_tracing SyntheticsCanary#active_tracing}.
     */
    readonly activeTracing?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#memory_in_mb SyntheticsCanary#memory_in_mb}.
     */
    readonly memoryInMb?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}.
     */
    readonly timeoutInSeconds?: number;
}
export interface SyntheticsCanarySchedule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#duration_in_seconds SyntheticsCanary#duration_in_seconds}.
     */
    readonly durationInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#expression SyntheticsCanary#expression}.
     */
    readonly expression: string;
}
export interface SyntheticsCanaryVpcConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#security_group_ids SyntheticsCanary#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html#subnet_ids SyntheticsCanary#subnet_ids}.
     */
    readonly subnetIds?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary}.
 */
export declare class SyntheticsCanary extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SyntheticsCanaryConfig);
    get arn(): string;
    private _artifactS3Location;
    get artifactS3Location(): string;
    set artifactS3Location(value: string);
    get artifactS3LocationInput(): string;
    get engineArn(): string;
    private _executionRoleArn;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    private _failureRetentionPeriod?;
    get failureRetentionPeriod(): number;
    set failureRetentionPeriod(value: number);
    resetFailureRetentionPeriod(): void;
    get failureRetentionPeriodInput(): number | undefined;
    private _handler;
    get handler(): string;
    set handler(value: string);
    get handlerInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _runtimeVersion;
    get runtimeVersion(): string;
    set runtimeVersion(value: string);
    get runtimeVersionInput(): string;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    resetS3Bucket(): void;
    get s3BucketInput(): string | undefined;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    resetS3Key(): void;
    get s3KeyInput(): string | undefined;
    private _s3Version?;
    get s3Version(): string;
    set s3Version(value: string);
    resetS3Version(): void;
    get s3VersionInput(): string | undefined;
    get sourceLocationArn(): string;
    private _startCanary?;
    get startCanary(): boolean;
    set startCanary(value: boolean);
    resetStartCanary(): void;
    get startCanaryInput(): boolean | undefined;
    get status(): string;
    private _successRetentionPeriod?;
    get successRetentionPeriod(): number;
    set successRetentionPeriod(value: number);
    resetSuccessRetentionPeriod(): void;
    get successRetentionPeriodInput(): number | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    timeline(index: string): SyntheticsCanaryTimeline;
    private _zipFile?;
    get zipFile(): string;
    set zipFile(value: string);
    resetZipFile(): void;
    get zipFileInput(): string | undefined;
    private _runConfig?;
    get runConfig(): SyntheticsCanaryRunConfig[];
    set runConfig(value: SyntheticsCanaryRunConfig[]);
    resetRunConfig(): void;
    get runConfigInput(): SyntheticsCanaryRunConfig[] | undefined;
    private _schedule;
    get schedule(): SyntheticsCanarySchedule[];
    set schedule(value: SyntheticsCanarySchedule[]);
    get scheduleInput(): SyntheticsCanarySchedule[];
    private _vpcConfig?;
    get vpcConfig(): SyntheticsCanaryVpcConfig[];
    set vpcConfig(value: SyntheticsCanaryVpcConfig[]);
    resetVpcConfig(): void;
    get vpcConfigInput(): SyntheticsCanaryVpcConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
