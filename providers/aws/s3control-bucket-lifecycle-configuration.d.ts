import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#bucket S3ControlBucketLifecycleConfiguration#bucket}.
     */
    readonly bucket: string;
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#rule S3ControlBucketLifecycleConfiguration#rule}
     */
    readonly rule: S3ControlBucketLifecycleConfigurationRule[];
}
export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}.
     */
    readonly daysAfterInitiation: number;
}
export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#date S3ControlBucketLifecycleConfiguration#date}.
     */
    readonly date?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#days S3ControlBucketLifecycleConfiguration#days}.
     */
    readonly days?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}.
     */
    readonly expiredObjectDeleteMarker?: boolean;
}
export interface S3ControlBucketLifecycleConfigurationRuleFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#prefix S3ControlBucketLifecycleConfiguration#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#tags S3ControlBucketLifecycleConfiguration#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface S3ControlBucketLifecycleConfigurationRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#id S3ControlBucketLifecycleConfiguration#id}.
     */
    readonly id: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#status S3ControlBucketLifecycleConfiguration#status}.
     */
    readonly status?: string;
    /**
     * abort_incomplete_multipart_upload block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
     */
    readonly abortIncompleteMultipartUpload?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload[];
    /**
     * expiration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#expiration S3ControlBucketLifecycleConfiguration#expiration}
     */
    readonly expiration?: S3ControlBucketLifecycleConfigurationRuleExpiration[];
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html#filter S3ControlBucketLifecycleConfiguration#filter}
     */
    readonly filter?: S3ControlBucketLifecycleConfigurationRuleFilter[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration}.
 */
export declare class S3ControlBucketLifecycleConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3ControlBucketLifecycleConfigurationConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _rule;
    get rule(): S3ControlBucketLifecycleConfigurationRule[];
    set rule(value: S3ControlBucketLifecycleConfigurationRule[]);
    get ruleInput(): S3ControlBucketLifecycleConfigurationRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
