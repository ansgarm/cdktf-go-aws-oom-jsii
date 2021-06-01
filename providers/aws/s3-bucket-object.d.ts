import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketObjectConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#acl S3BucketObject#acl}.
     */
    readonly acl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#bucket S3BucketObject#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#bucket_key_enabled S3BucketObject#bucket_key_enabled}.
     */
    readonly bucketKeyEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#cache_control S3BucketObject#cache_control}.
     */
    readonly cacheControl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content S3BucketObject#content}.
     */
    readonly content?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_base64 S3BucketObject#content_base64}.
     */
    readonly contentBase64?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_disposition S3BucketObject#content_disposition}.
     */
    readonly contentDisposition?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_encoding S3BucketObject#content_encoding}.
     */
    readonly contentEncoding?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_language S3BucketObject#content_language}.
     */
    readonly contentLanguage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_type S3BucketObject#content_type}.
     */
    readonly contentType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#etag S3BucketObject#etag}.
     */
    readonly etag?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#force_destroy S3BucketObject#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#key S3BucketObject#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#kms_key_id S3BucketObject#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#metadata S3BucketObject#metadata}.
     */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_legal_hold_status S3BucketObject#object_lock_legal_hold_status}.
     */
    readonly objectLockLegalHoldStatus?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_mode S3BucketObject#object_lock_mode}.
     */
    readonly objectLockMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_retain_until_date S3BucketObject#object_lock_retain_until_date}.
     */
    readonly objectLockRetainUntilDate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#server_side_encryption S3BucketObject#server_side_encryption}.
     */
    readonly serverSideEncryption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#source S3BucketObject#source}.
     */
    readonly source?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#storage_class S3BucketObject#storage_class}.
     */
    readonly storageClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#tags S3BucketObject#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#tags_all S3BucketObject#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#website_redirect S3BucketObject#website_redirect}.
     */
    readonly websiteRedirect?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object}.
 */
export declare class S3BucketObject extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3BucketObjectConfig);
    private _acl?;
    get acl(): string;
    set acl(value: string);
    resetAcl(): void;
    get aclInput(): string | undefined;
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _bucketKeyEnabled?;
    get bucketKeyEnabled(): boolean;
    set bucketKeyEnabled(value: boolean);
    resetBucketKeyEnabled(): void;
    get bucketKeyEnabledInput(): boolean | undefined;
    private _cacheControl?;
    get cacheControl(): string;
    set cacheControl(value: string);
    resetCacheControl(): void;
    get cacheControlInput(): string | undefined;
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string | undefined;
    private _contentBase64?;
    get contentBase64(): string;
    set contentBase64(value: string);
    resetContentBase64(): void;
    get contentBase64Input(): string | undefined;
    private _contentDisposition?;
    get contentDisposition(): string;
    set contentDisposition(value: string);
    resetContentDisposition(): void;
    get contentDispositionInput(): string | undefined;
    private _contentEncoding?;
    get contentEncoding(): string;
    set contentEncoding(value: string);
    resetContentEncoding(): void;
    get contentEncodingInput(): string | undefined;
    private _contentLanguage?;
    get contentLanguage(): string;
    set contentLanguage(value: string);
    resetContentLanguage(): void;
    get contentLanguageInput(): string | undefined;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string | undefined;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    get id(): string;
    private _key;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _metadata?;
    get metadata(): {
        [key: string]: string;
    };
    set metadata(value: {
        [key: string]: string;
    });
    resetMetadata(): void;
    get metadataInput(): {
        [key: string]: string;
    } | undefined;
    private _objectLockLegalHoldStatus?;
    get objectLockLegalHoldStatus(): string;
    set objectLockLegalHoldStatus(value: string);
    resetObjectLockLegalHoldStatus(): void;
    get objectLockLegalHoldStatusInput(): string | undefined;
    private _objectLockMode?;
    get objectLockMode(): string;
    set objectLockMode(value: string);
    resetObjectLockMode(): void;
    get objectLockModeInput(): string | undefined;
    private _objectLockRetainUntilDate?;
    get objectLockRetainUntilDate(): string;
    set objectLockRetainUntilDate(value: string);
    resetObjectLockRetainUntilDate(): void;
    get objectLockRetainUntilDateInput(): string | undefined;
    private _serverSideEncryption?;
    get serverSideEncryption(): string;
    set serverSideEncryption(value: string);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
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
    get versionId(): string;
    private _websiteRedirect?;
    get websiteRedirect(): string;
    set websiteRedirect(value: string);
    resetWebsiteRedirect(): void;
    get websiteRedirectInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
