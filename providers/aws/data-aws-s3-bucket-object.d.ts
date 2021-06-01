import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3BucketObjectConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#bucket DataAwsS3BucketObject#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#key DataAwsS3BucketObject#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#range DataAwsS3BucketObject#range}.
     */
    readonly range?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#tags DataAwsS3BucketObject#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html#version_id DataAwsS3BucketObject#version_id}.
     */
    readonly versionId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html aws_s3_bucket_object}.
 */
export declare class DataAwsS3BucketObject extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html aws_s3_bucket_object} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsS3BucketObjectConfig);
    get body(): string;
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get bucketKeyEnabled(): boolean;
    get cacheControl(): string;
    get contentDisposition(): string;
    get contentEncoding(): string;
    get contentLanguage(): string;
    get contentLength(): number;
    get contentType(): string;
    get etag(): string;
    get expiration(): string;
    get expires(): string;
    get id(): string;
    private _key;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    get lastModified(): string;
    metadata(key: string): string;
    get objectLockLegalHoldStatus(): string;
    get objectLockMode(): string;
    get objectLockRetainUntilDate(): string;
    private _range?;
    get range(): string;
    set range(value: string);
    resetRange(): void;
    get rangeInput(): string | undefined;
    get serverSideEncryption(): string;
    get sseKmsKeyId(): string;
    get storageClass(): string;
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
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    get websiteRedirectLocation(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
