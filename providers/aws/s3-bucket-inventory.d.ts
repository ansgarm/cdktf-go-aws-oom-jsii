import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketInventoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#enabled S3BucketInventory#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#included_object_versions S3BucketInventory#included_object_versions}.
     */
    readonly includedObjectVersions: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#name S3BucketInventory#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#optional_fields S3BucketInventory#optional_fields}.
     */
    readonly optionalFields?: string[];
    /**
     * destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#destination S3BucketInventory#destination}
     */
    readonly destination: S3BucketInventoryDestination[];
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#filter S3BucketInventory#filter}
     */
    readonly filter?: S3BucketInventoryFilter[];
    /**
     * schedule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#schedule S3BucketInventory#schedule}
     */
    readonly schedule: S3BucketInventorySchedule[];
}
export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#key_id S3BucketInventory#key_id}.
     */
    readonly keyId: string;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
}
export interface S3BucketInventoryDestinationBucketEncryption {
    /**
     * sse_kms block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_kms S3BucketInventory#sse_kms}
     */
    readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms[];
    /**
     * sse_s3 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_s3 S3BucketInventory#sse_s3}
     */
    readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3[];
}
export interface S3BucketInventoryDestinationBucket {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#account_id S3BucketInventory#account_id}.
     */
    readonly accountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket_arn S3BucketInventory#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#format S3BucketInventory#format}.
     */
    readonly format: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}.
     */
    readonly prefix?: string;
    /**
     * encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#encryption S3BucketInventory#encryption}
     */
    readonly encryption?: S3BucketInventoryDestinationBucketEncryption[];
}
export interface S3BucketInventoryDestination {
    /**
     * bucket block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
     */
    readonly bucket: S3BucketInventoryDestinationBucket[];
}
export interface S3BucketInventoryFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}.
     */
    readonly prefix?: string;
}
export interface S3BucketInventorySchedule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#frequency S3BucketInventory#frequency}.
     */
    readonly frequency: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory}.
 */
export declare class S3BucketInventory extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3BucketInventoryConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get id(): string;
    private _includedObjectVersions;
    get includedObjectVersions(): string;
    set includedObjectVersions(value: string);
    get includedObjectVersionsInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _optionalFields?;
    get optionalFields(): string[];
    set optionalFields(value: string[]);
    resetOptionalFields(): void;
    get optionalFieldsInput(): string[] | undefined;
    private _destination;
    get destination(): S3BucketInventoryDestination[];
    set destination(value: S3BucketInventoryDestination[]);
    get destinationInput(): S3BucketInventoryDestination[];
    private _filter?;
    get filter(): S3BucketInventoryFilter[];
    set filter(value: S3BucketInventoryFilter[]);
    resetFilter(): void;
    get filterInput(): S3BucketInventoryFilter[] | undefined;
    private _schedule;
    get schedule(): S3BucketInventorySchedule[];
    set schedule(value: S3BucketInventorySchedule[]);
    get scheduleInput(): S3BucketInventorySchedule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
