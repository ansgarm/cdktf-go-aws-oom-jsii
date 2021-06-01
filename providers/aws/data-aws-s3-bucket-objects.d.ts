import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3BucketObjectsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#bucket DataAwsS3BucketObjects#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#delimiter DataAwsS3BucketObjects#delimiter}.
     */
    readonly delimiter?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#encoding_type DataAwsS3BucketObjects#encoding_type}.
     */
    readonly encodingType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#fetch_owner DataAwsS3BucketObjects#fetch_owner}.
     */
    readonly fetchOwner?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#max_keys DataAwsS3BucketObjects#max_keys}.
     */
    readonly maxKeys?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#prefix DataAwsS3BucketObjects#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html#start_after DataAwsS3BucketObjects#start_after}.
     */
    readonly startAfter?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html aws_s3_bucket_objects}.
 */
export declare class DataAwsS3BucketObjects extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html aws_s3_bucket_objects} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsS3BucketObjectsConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get commonPrefixes(): string[];
    private _delimiter?;
    get delimiter(): string;
    set delimiter(value: string);
    resetDelimiter(): void;
    get delimiterInput(): string | undefined;
    private _encodingType?;
    get encodingType(): string;
    set encodingType(value: string);
    resetEncodingType(): void;
    get encodingTypeInput(): string | undefined;
    private _fetchOwner?;
    get fetchOwner(): boolean;
    set fetchOwner(value: boolean);
    resetFetchOwner(): void;
    get fetchOwnerInput(): boolean | undefined;
    get id(): string;
    get keys(): string[];
    private _maxKeys?;
    get maxKeys(): number;
    set maxKeys(value: number);
    resetMaxKeys(): void;
    get maxKeysInput(): number | undefined;
    get owners(): string[];
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _startAfter?;
    get startAfter(): string;
    set startAfter(value: string);
    resetStartAfter(): void;
    get startAfterInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
