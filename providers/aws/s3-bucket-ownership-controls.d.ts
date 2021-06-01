import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketOwnershipControlsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#bucket S3BucketOwnershipControls#bucket}.
     */
    readonly bucket: string;
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#rule S3BucketOwnershipControls#rule}
     */
    readonly rule: S3BucketOwnershipControlsRule[];
}
export interface S3BucketOwnershipControlsRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#object_ownership S3BucketOwnershipControls#object_ownership}.
     */
    readonly objectOwnership: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls}.
 */
export declare class S3BucketOwnershipControls extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3BucketOwnershipControlsConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _rule;
    get rule(): S3BucketOwnershipControlsRule[];
    set rule(value: S3BucketOwnershipControlsRule[]);
    get ruleInput(): S3BucketOwnershipControlsRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
