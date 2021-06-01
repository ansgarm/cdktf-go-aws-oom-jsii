import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MacieS3BucketAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#bucket_name MacieS3BucketAssociation#bucket_name}.
     */
    readonly bucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#member_account_id MacieS3BucketAssociation#member_account_id}.
     */
    readonly memberAccountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#prefix MacieS3BucketAssociation#prefix}.
     */
    readonly prefix?: string;
    /**
     * classification_type block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#classification_type MacieS3BucketAssociation#classification_type}
     */
    readonly classificationType?: MacieS3BucketAssociationClassificationType[];
}
export interface MacieS3BucketAssociationClassificationType {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#continuous MacieS3BucketAssociation#continuous}.
     */
    readonly continuous?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html#one_time MacieS3BucketAssociation#one_time}.
     */
    readonly oneTime?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html aws_macie_s3_bucket_association}.
 */
export declare class MacieS3BucketAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association.html aws_macie_s3_bucket_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MacieS3BucketAssociationConfig);
    private _bucketName;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    get id(): string;
    private _memberAccountId?;
    get memberAccountId(): string;
    set memberAccountId(value: string);
    resetMemberAccountId(): void;
    get memberAccountIdInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _classificationType?;
    get classificationType(): MacieS3BucketAssociationClassificationType[];
    set classificationType(value: MacieS3BucketAssociationClassificationType[]);
    resetClassificationType(): void;
    get classificationTypeInput(): MacieS3BucketAssociationClassificationType[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
