import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3AccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#account_id S3AccessPoint#account_id}.
     */
    readonly accountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#bucket S3AccessPoint#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#name S3AccessPoint#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#policy S3AccessPoint#policy}.
     */
    readonly policy?: string;
    /**
     * public_access_block_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#public_access_block_configuration S3AccessPoint#public_access_block_configuration}
     */
    readonly publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration[];
    /**
     * vpc_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_configuration S3AccessPoint#vpc_configuration}
     */
    readonly vpcConfiguration?: S3AccessPointVpcConfiguration[];
}
export interface S3AccessPointPublicAccessBlockConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_acls S3AccessPoint#block_public_acls}.
     */
    readonly blockPublicAcls?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_policy S3AccessPoint#block_public_policy}.
     */
    readonly blockPublicPolicy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#ignore_public_acls S3AccessPoint#ignore_public_acls}.
     */
    readonly ignorePublicAcls?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#restrict_public_buckets S3AccessPoint#restrict_public_buckets}.
     */
    readonly restrictPublicBuckets?: boolean;
}
export interface S3AccessPointVpcConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_id S3AccessPoint#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point}.
 */
export declare class S3AccessPoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3AccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get arn(): string;
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get domainName(): string;
    get hasPublicAccessPolicy(): boolean;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get networkOrigin(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _publicAccessBlockConfiguration?;
    get publicAccessBlockConfiguration(): S3AccessPointPublicAccessBlockConfiguration[];
    set publicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration[]);
    resetPublicAccessBlockConfiguration(): void;
    get publicAccessBlockConfigurationInput(): S3AccessPointPublicAccessBlockConfiguration[] | undefined;
    private _vpcConfiguration?;
    get vpcConfiguration(): S3AccessPointVpcConfiguration[];
    set vpcConfiguration(value: S3AccessPointVpcConfiguration[]);
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): S3AccessPointVpcConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
