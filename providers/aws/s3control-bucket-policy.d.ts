import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlBucketPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html#bucket S3ControlBucketPolicy#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html#policy S3ControlBucketPolicy#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html aws_s3control_bucket_policy}.
 */
export declare class S3ControlBucketPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_policy.html aws_s3control_bucket_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3ControlBucketPolicyConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
