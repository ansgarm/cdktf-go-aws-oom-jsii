import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ObjectCopyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#acl S3ObjectCopy#acl}.
     */
    readonly acl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#bucket S3ObjectCopy#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.
     */
    readonly bucketKeyEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#cache_control S3ObjectCopy#cache_control}.
     */
    readonly cacheControl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_disposition S3ObjectCopy#content_disposition}.
     */
    readonly contentDisposition?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_encoding S3ObjectCopy#content_encoding}.
     */
    readonly contentEncoding?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_language S3ObjectCopy#content_language}.
     */
    readonly contentLanguage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#content_type S3ObjectCopy#content_type}.
     */
    readonly contentType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_match S3ObjectCopy#copy_if_match}.
     */
    readonly copyIfMatch?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.
     */
    readonly copyIfModifiedSince?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_none_match S3ObjectCopy#copy_if_none_match}.
     */
    readonly copyIfNoneMatch?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.
     */
    readonly copyIfUnmodifiedSince?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#customer_algorithm S3ObjectCopy#customer_algorithm}.
     */
    readonly customerAlgorithm?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#customer_key S3ObjectCopy#customer_key}.
     */
    readonly customerKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#customer_key_md5 S3ObjectCopy#customer_key_md5}.
     */
    readonly customerKeyMd5?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.
     */
    readonly expectedBucketOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.
     */
    readonly expectedSourceBucketOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#expires S3ObjectCopy#expires}.
     */
    readonly expires?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#force_destroy S3ObjectCopy#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#key S3ObjectCopy#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#kms_encryption_context S3ObjectCopy#kms_encryption_context}.
     */
    readonly kmsEncryptionContext?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#kms_key_id S3ObjectCopy#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#metadata S3ObjectCopy#metadata}.
     */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#metadata_directive S3ObjectCopy#metadata_directive}.
     */
    readonly metadataDirective?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.
     */
    readonly objectLockLegalHoldStatus?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#object_lock_mode S3ObjectCopy#object_lock_mode}.
     */
    readonly objectLockMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.
     */
    readonly objectLockRetainUntilDate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#request_payer S3ObjectCopy#request_payer}.
     */
    readonly requestPayer?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#server_side_encryption S3ObjectCopy#server_side_encryption}.
     */
    readonly serverSideEncryption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source S3ObjectCopy#source}.
     */
    readonly source: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.
     */
    readonly sourceCustomerAlgorithm?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source_customer_key S3ObjectCopy#source_customer_key}.
     */
    readonly sourceCustomerKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.
     */
    readonly sourceCustomerKeyMd5?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#storage_class S3ObjectCopy#storage_class}.
     */
    readonly storageClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#tagging_directive S3ObjectCopy#tagging_directive}.
     */
    readonly taggingDirective?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#tags S3ObjectCopy#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#tags_all S3ObjectCopy#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#website_redirect S3ObjectCopy#website_redirect}.
     */
    readonly websiteRedirect?: string;
    /**
     * grant block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#grant S3ObjectCopy#grant}
     */
    readonly grant?: S3ObjectCopyGrant[];
}
export interface S3ObjectCopyGrant {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#email S3ObjectCopy#email}.
     */
    readonly email?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#id S3ObjectCopy#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#permissions S3ObjectCopy#permissions}.
     */
    readonly permissions: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#type S3ObjectCopy#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html#uri S3ObjectCopy#uri}.
     */
    readonly uri?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy}.
 */
export declare class S3ObjectCopy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3ObjectCopyConfig);
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
    private _copyIfMatch?;
    get copyIfMatch(): string;
    set copyIfMatch(value: string);
    resetCopyIfMatch(): void;
    get copyIfMatchInput(): string | undefined;
    private _copyIfModifiedSince?;
    get copyIfModifiedSince(): string;
    set copyIfModifiedSince(value: string);
    resetCopyIfModifiedSince(): void;
    get copyIfModifiedSinceInput(): string | undefined;
    private _copyIfNoneMatch?;
    get copyIfNoneMatch(): string;
    set copyIfNoneMatch(value: string);
    resetCopyIfNoneMatch(): void;
    get copyIfNoneMatchInput(): string | undefined;
    private _copyIfUnmodifiedSince?;
    get copyIfUnmodifiedSince(): string;
    set copyIfUnmodifiedSince(value: string);
    resetCopyIfUnmodifiedSince(): void;
    get copyIfUnmodifiedSinceInput(): string | undefined;
    private _customerAlgorithm?;
    get customerAlgorithm(): string;
    set customerAlgorithm(value: string);
    resetCustomerAlgorithm(): void;
    get customerAlgorithmInput(): string | undefined;
    private _customerKey?;
    get customerKey(): string;
    set customerKey(value: string);
    resetCustomerKey(): void;
    get customerKeyInput(): string | undefined;
    private _customerKeyMd5?;
    get customerKeyMd5(): string;
    set customerKeyMd5(value: string);
    resetCustomerKeyMd5(): void;
    get customerKeyMd5Input(): string | undefined;
    get etag(): string;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _expectedSourceBucketOwner?;
    get expectedSourceBucketOwner(): string;
    set expectedSourceBucketOwner(value: string);
    resetExpectedSourceBucketOwner(): void;
    get expectedSourceBucketOwnerInput(): string | undefined;
    get expiration(): string;
    private _expires?;
    get expires(): string;
    set expires(value: string);
    resetExpires(): void;
    get expiresInput(): string | undefined;
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
    private _kmsEncryptionContext?;
    get kmsEncryptionContext(): string;
    set kmsEncryptionContext(value: string);
    resetKmsEncryptionContext(): void;
    get kmsEncryptionContextInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get lastModified(): string;
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
    private _metadataDirective?;
    get metadataDirective(): string;
    set metadataDirective(value: string);
    resetMetadataDirective(): void;
    get metadataDirectiveInput(): string | undefined;
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
    get requestCharged(): boolean;
    private _requestPayer?;
    get requestPayer(): string;
    set requestPayer(value: string);
    resetRequestPayer(): void;
    get requestPayerInput(): string | undefined;
    private _serverSideEncryption?;
    get serverSideEncryption(): string;
    set serverSideEncryption(value: string);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): string | undefined;
    private _source;
    get source(): string;
    set source(value: string);
    get sourceInput(): string;
    private _sourceCustomerAlgorithm?;
    get sourceCustomerAlgorithm(): string;
    set sourceCustomerAlgorithm(value: string);
    resetSourceCustomerAlgorithm(): void;
    get sourceCustomerAlgorithmInput(): string | undefined;
    private _sourceCustomerKey?;
    get sourceCustomerKey(): string;
    set sourceCustomerKey(value: string);
    resetSourceCustomerKey(): void;
    get sourceCustomerKeyInput(): string | undefined;
    private _sourceCustomerKeyMd5?;
    get sourceCustomerKeyMd5(): string;
    set sourceCustomerKeyMd5(value: string);
    resetSourceCustomerKeyMd5(): void;
    get sourceCustomerKeyMd5Input(): string | undefined;
    get sourceVersionId(): string;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
    private _taggingDirective?;
    get taggingDirective(): string;
    set taggingDirective(value: string);
    resetTaggingDirective(): void;
    get taggingDirectiveInput(): string | undefined;
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
    private _grant?;
    get grant(): S3ObjectCopyGrant[];
    set grant(value: S3ObjectCopyGrant[]);
    resetGrant(): void;
    get grantInput(): S3ObjectCopyGrant[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
