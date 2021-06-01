import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3AccountPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#account_id S3AccountPublicAccessBlock#account_id}.
     */
    readonly accountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_acls S3AccountPublicAccessBlock#block_public_acls}.
     */
    readonly blockPublicAcls?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_policy S3AccountPublicAccessBlock#block_public_policy}.
     */
    readonly blockPublicPolicy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}.
     */
    readonly ignorePublicAcls?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}.
     */
    readonly restrictPublicBuckets?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block}.
 */
export declare class S3AccountPublicAccessBlock extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: S3AccountPublicAccessBlockConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _blockPublicAcls?;
    get blockPublicAcls(): boolean;
    set blockPublicAcls(value: boolean);
    resetBlockPublicAcls(): void;
    get blockPublicAclsInput(): boolean | undefined;
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean;
    set blockPublicPolicy(value: boolean);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | undefined;
    get id(): string;
    private _ignorePublicAcls?;
    get ignorePublicAcls(): boolean;
    set ignorePublicAcls(value: boolean);
    resetIgnorePublicAcls(): void;
    get ignorePublicAclsInput(): boolean | undefined;
    private _restrictPublicBuckets?;
    get restrictPublicBuckets(): boolean;
    set restrictPublicBuckets(value: boolean);
    resetRestrictPublicBuckets(): void;
    get restrictPublicBucketsInput(): boolean | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
