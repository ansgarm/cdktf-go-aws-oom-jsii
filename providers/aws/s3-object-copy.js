"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ObjectCopy = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3ObjectCopyGrantToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        id: cdktf.stringToTerraform(struct.id),
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy}.
 */
class S3ObjectCopy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_object_copy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._acl = config.acl;
        this._bucket = config.bucket;
        this._bucketKeyEnabled = config.bucketKeyEnabled;
        this._cacheControl = config.cacheControl;
        this._contentDisposition = config.contentDisposition;
        this._contentEncoding = config.contentEncoding;
        this._contentLanguage = config.contentLanguage;
        this._contentType = config.contentType;
        this._copyIfMatch = config.copyIfMatch;
        this._copyIfModifiedSince = config.copyIfModifiedSince;
        this._copyIfNoneMatch = config.copyIfNoneMatch;
        this._copyIfUnmodifiedSince = config.copyIfUnmodifiedSince;
        this._customerAlgorithm = config.customerAlgorithm;
        this._customerKey = config.customerKey;
        this._customerKeyMd5 = config.customerKeyMd5;
        this._expectedBucketOwner = config.expectedBucketOwner;
        this._expectedSourceBucketOwner = config.expectedSourceBucketOwner;
        this._expires = config.expires;
        this._forceDestroy = config.forceDestroy;
        this._key = config.key;
        this._kmsEncryptionContext = config.kmsEncryptionContext;
        this._kmsKeyId = config.kmsKeyId;
        this._metadata = config.metadata;
        this._metadataDirective = config.metadataDirective;
        this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
        this._objectLockMode = config.objectLockMode;
        this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
        this._requestPayer = config.requestPayer;
        this._serverSideEncryption = config.serverSideEncryption;
        this._source = config.source;
        this._sourceCustomerAlgorithm = config.sourceCustomerAlgorithm;
        this._sourceCustomerKey = config.sourceCustomerKey;
        this._sourceCustomerKeyMd5 = config.sourceCustomerKeyMd5;
        this._storageClass = config.storageClass;
        this._taggingDirective = config.taggingDirective;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._websiteRedirect = config.websiteRedirect;
        this._grant = config.grant;
    }
    get acl() {
        return this.getStringAttribute('acl');
    }
    set acl(value) {
        this._acl = value;
    }
    resetAcl() {
        this._acl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aclInput() {
        return this._acl;
    }
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    get bucketKeyEnabled() {
        return this.getBooleanAttribute('bucket_key_enabled');
    }
    set bucketKeyEnabled(value) {
        this._bucketKeyEnabled = value;
    }
    resetBucketKeyEnabled() {
        this._bucketKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketKeyEnabledInput() {
        return this._bucketKeyEnabled;
    }
    get cacheControl() {
        return this.getStringAttribute('cache_control');
    }
    set cacheControl(value) {
        this._cacheControl = value;
    }
    resetCacheControl() {
        this._cacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheControlInput() {
        return this._cacheControl;
    }
    get contentDisposition() {
        return this.getStringAttribute('content_disposition');
    }
    set contentDisposition(value) {
        this._contentDisposition = value;
    }
    resetContentDisposition() {
        this._contentDisposition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentDispositionInput() {
        return this._contentDisposition;
    }
    get contentEncoding() {
        return this.getStringAttribute('content_encoding');
    }
    set contentEncoding(value) {
        this._contentEncoding = value;
    }
    resetContentEncoding() {
        this._contentEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentEncodingInput() {
        return this._contentEncoding;
    }
    get contentLanguage() {
        return this.getStringAttribute('content_language');
    }
    set contentLanguage(value) {
        this._contentLanguage = value;
    }
    resetContentLanguage() {
        this._contentLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentLanguageInput() {
        return this._contentLanguage;
    }
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    get copyIfMatch() {
        return this.getStringAttribute('copy_if_match');
    }
    set copyIfMatch(value) {
        this._copyIfMatch = value;
    }
    resetCopyIfMatch() {
        this._copyIfMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfMatchInput() {
        return this._copyIfMatch;
    }
    get copyIfModifiedSince() {
        return this.getStringAttribute('copy_if_modified_since');
    }
    set copyIfModifiedSince(value) {
        this._copyIfModifiedSince = value;
    }
    resetCopyIfModifiedSince() {
        this._copyIfModifiedSince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfModifiedSinceInput() {
        return this._copyIfModifiedSince;
    }
    get copyIfNoneMatch() {
        return this.getStringAttribute('copy_if_none_match');
    }
    set copyIfNoneMatch(value) {
        this._copyIfNoneMatch = value;
    }
    resetCopyIfNoneMatch() {
        this._copyIfNoneMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfNoneMatchInput() {
        return this._copyIfNoneMatch;
    }
    get copyIfUnmodifiedSince() {
        return this.getStringAttribute('copy_if_unmodified_since');
    }
    set copyIfUnmodifiedSince(value) {
        this._copyIfUnmodifiedSince = value;
    }
    resetCopyIfUnmodifiedSince() {
        this._copyIfUnmodifiedSince = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyIfUnmodifiedSinceInput() {
        return this._copyIfUnmodifiedSince;
    }
    get customerAlgorithm() {
        return this.getStringAttribute('customer_algorithm');
    }
    set customerAlgorithm(value) {
        this._customerAlgorithm = value;
    }
    resetCustomerAlgorithm() {
        this._customerAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerAlgorithmInput() {
        return this._customerAlgorithm;
    }
    get customerKey() {
        return this.getStringAttribute('customer_key');
    }
    set customerKey(value) {
        this._customerKey = value;
    }
    resetCustomerKey() {
        this._customerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerKeyInput() {
        return this._customerKey;
    }
    get customerKeyMd5() {
        return this.getStringAttribute('customer_key_md5');
    }
    set customerKeyMd5(value) {
        this._customerKeyMd5 = value;
    }
    resetCustomerKeyMd5() {
        this._customerKeyMd5 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerKeyMd5Input() {
        return this._customerKeyMd5;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    set expectedBucketOwner(value) {
        this._expectedBucketOwner = value;
    }
    resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }
    get expectedSourceBucketOwner() {
        return this.getStringAttribute('expected_source_bucket_owner');
    }
    set expectedSourceBucketOwner(value) {
        this._expectedSourceBucketOwner = value;
    }
    resetExpectedSourceBucketOwner() {
        this._expectedSourceBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expectedSourceBucketOwnerInput() {
        return this._expectedSourceBucketOwner;
    }
    // expiration - computed: true, optional: false, required: false
    get expiration() {
        return this.getStringAttribute('expiration');
    }
    get expires() {
        return this.getStringAttribute('expires');
    }
    set expires(value) {
        this._expires = value;
    }
    resetExpires() {
        this._expires = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get expiresInput() {
        return this._expires;
    }
    get forceDestroy() {
        return this.getBooleanAttribute('force_destroy');
    }
    set forceDestroy(value) {
        this._forceDestroy = value;
    }
    resetForceDestroy() {
        this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDestroyInput() {
        return this._forceDestroy;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    get kmsEncryptionContext() {
        return this.getStringAttribute('kms_encryption_context');
    }
    set kmsEncryptionContext(value) {
        this._kmsEncryptionContext = value;
    }
    resetKmsEncryptionContext() {
        this._kmsEncryptionContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsEncryptionContextInput() {
        return this._kmsEncryptionContext;
    }
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    // last_modified - computed: true, optional: false, required: false
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    get metadata() {
        return this.interpolationForAttribute('metadata'); // Getting the computed value is not yet implemented
    }
    set metadata(value) {
        this._metadata = value;
    }
    resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata;
    }
    get metadataDirective() {
        return this.getStringAttribute('metadata_directive');
    }
    set metadataDirective(value) {
        this._metadataDirective = value;
    }
    resetMetadataDirective() {
        this._metadataDirective = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataDirectiveInput() {
        return this._metadataDirective;
    }
    get objectLockLegalHoldStatus() {
        return this.getStringAttribute('object_lock_legal_hold_status');
    }
    set objectLockLegalHoldStatus(value) {
        this._objectLockLegalHoldStatus = value;
    }
    resetObjectLockLegalHoldStatus() {
        this._objectLockLegalHoldStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectLockLegalHoldStatusInput() {
        return this._objectLockLegalHoldStatus;
    }
    get objectLockMode() {
        return this.getStringAttribute('object_lock_mode');
    }
    set objectLockMode(value) {
        this._objectLockMode = value;
    }
    resetObjectLockMode() {
        this._objectLockMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectLockModeInput() {
        return this._objectLockMode;
    }
    get objectLockRetainUntilDate() {
        return this.getStringAttribute('object_lock_retain_until_date');
    }
    set objectLockRetainUntilDate(value) {
        this._objectLockRetainUntilDate = value;
    }
    resetObjectLockRetainUntilDate() {
        this._objectLockRetainUntilDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectLockRetainUntilDateInput() {
        return this._objectLockRetainUntilDate;
    }
    // request_charged - computed: true, optional: false, required: false
    get requestCharged() {
        return this.getBooleanAttribute('request_charged');
    }
    get requestPayer() {
        return this.getStringAttribute('request_payer');
    }
    set requestPayer(value) {
        this._requestPayer = value;
    }
    resetRequestPayer() {
        this._requestPayer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestPayerInput() {
        return this._requestPayer;
    }
    get serverSideEncryption() {
        return this.getStringAttribute('server_side_encryption');
    }
    set serverSideEncryption(value) {
        this._serverSideEncryption = value;
    }
    resetServerSideEncryption() {
        this._serverSideEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverSideEncryptionInput() {
        return this._serverSideEncryption;
    }
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    get sourceCustomerAlgorithm() {
        return this.getStringAttribute('source_customer_algorithm');
    }
    set sourceCustomerAlgorithm(value) {
        this._sourceCustomerAlgorithm = value;
    }
    resetSourceCustomerAlgorithm() {
        this._sourceCustomerAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceCustomerAlgorithmInput() {
        return this._sourceCustomerAlgorithm;
    }
    get sourceCustomerKey() {
        return this.getStringAttribute('source_customer_key');
    }
    set sourceCustomerKey(value) {
        this._sourceCustomerKey = value;
    }
    resetSourceCustomerKey() {
        this._sourceCustomerKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceCustomerKeyInput() {
        return this._sourceCustomerKey;
    }
    get sourceCustomerKeyMd5() {
        return this.getStringAttribute('source_customer_key_md5');
    }
    set sourceCustomerKeyMd5(value) {
        this._sourceCustomerKeyMd5 = value;
    }
    resetSourceCustomerKeyMd5() {
        this._sourceCustomerKeyMd5 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceCustomerKeyMd5Input() {
        return this._sourceCustomerKeyMd5;
    }
    // source_version_id - computed: true, optional: false, required: false
    get sourceVersionId() {
        return this.getStringAttribute('source_version_id');
    }
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    set storageClass(value) {
        this._storageClass = value;
    }
    resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageClassInput() {
        return this._storageClass;
    }
    get taggingDirective() {
        return this.getStringAttribute('tagging_directive');
    }
    set taggingDirective(value) {
        this._taggingDirective = value;
    }
    resetTaggingDirective() {
        this._taggingDirective = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taggingDirectiveInput() {
        return this._taggingDirective;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get tagsAll() {
        return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    get websiteRedirect() {
        return this.getStringAttribute('website_redirect');
    }
    set websiteRedirect(value) {
        this._websiteRedirect = value;
    }
    resetWebsiteRedirect() {
        this._websiteRedirect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get websiteRedirectInput() {
        return this._websiteRedirect;
    }
    get grant() {
        return this.interpolationForAttribute('grant');
    }
    set grant(value) {
        this._grant = value;
    }
    resetGrant() {
        this._grant = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get grantInput() {
        return this._grant;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            acl: cdktf.stringToTerraform(this._acl),
            bucket: cdktf.stringToTerraform(this._bucket),
            bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
            cache_control: cdktf.stringToTerraform(this._cacheControl),
            content_disposition: cdktf.stringToTerraform(this._contentDisposition),
            content_encoding: cdktf.stringToTerraform(this._contentEncoding),
            content_language: cdktf.stringToTerraform(this._contentLanguage),
            content_type: cdktf.stringToTerraform(this._contentType),
            copy_if_match: cdktf.stringToTerraform(this._copyIfMatch),
            copy_if_modified_since: cdktf.stringToTerraform(this._copyIfModifiedSince),
            copy_if_none_match: cdktf.stringToTerraform(this._copyIfNoneMatch),
            copy_if_unmodified_since: cdktf.stringToTerraform(this._copyIfUnmodifiedSince),
            customer_algorithm: cdktf.stringToTerraform(this._customerAlgorithm),
            customer_key: cdktf.stringToTerraform(this._customerKey),
            customer_key_md5: cdktf.stringToTerraform(this._customerKeyMd5),
            expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
            expected_source_bucket_owner: cdktf.stringToTerraform(this._expectedSourceBucketOwner),
            expires: cdktf.stringToTerraform(this._expires),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            key: cdktf.stringToTerraform(this._key),
            kms_encryption_context: cdktf.stringToTerraform(this._kmsEncryptionContext),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
            metadata_directive: cdktf.stringToTerraform(this._metadataDirective),
            object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
            object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
            object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
            request_payer: cdktf.stringToTerraform(this._requestPayer),
            server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
            source: cdktf.stringToTerraform(this._source),
            source_customer_algorithm: cdktf.stringToTerraform(this._sourceCustomerAlgorithm),
            source_customer_key: cdktf.stringToTerraform(this._sourceCustomerKey),
            source_customer_key_md5: cdktf.stringToTerraform(this._sourceCustomerKeyMd5),
            storage_class: cdktf.stringToTerraform(this._storageClass),
            tagging_directive: cdktf.stringToTerraform(this._taggingDirective),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
            grant: cdktf.listMapper(s3ObjectCopyGrantToTerraform)(this._grant),
        };
    }
}
exports.S3ObjectCopy = S3ObjectCopy;
_a = JSII_RTTI_SYMBOL_1;
S3ObjectCopy[_a] = { fqn: "hashicorp_aws.S3ObjectCopy", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtb2JqZWN0LWNvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzMy1vYmplY3QtY29weS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQTJML0IsU0FBUyw0QkFBNEIsQ0FBQyxNQUEwQjtJQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxFQUFFLENBQUM7UUFDdkMsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMzRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDOzs7O0FBTUQsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUV2RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7SUFTZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEwQjtRQUN6RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG9CQUFvQjtZQUMzQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixT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QixDQUFDO1lBQ2pGLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDckUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM1RSxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2hFLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNuRSxDQUFDO0lBQ0osQ0FBQzs7QUE3dkJILG9DQTh2QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvczNfb2JqZWN0X2NvcHkuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFMzT2JqZWN0Q29weUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXRLZXlFbmFibGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVDb250cm9sPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50RGlzcG9zaXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRFbmNvZGluZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudExhbmd1YWdlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvcHlJZk1hdGNoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3B5SWZNb2RpZmllZFNpbmNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29weUlmTm9uZU1hdGNoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29weUlmVW5tb2RpZmllZFNpbmNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tZXJBbGdvcml0aG0/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21lcktleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tZXJLZXlNZDU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHBlY3RlZEJ1Y2tldE93bmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHBpcmVzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3JjZURlc3Ryb3k/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0VuY3J5cHRpb25Db250ZXh0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRhZGF0YURpcmVjdGl2ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RMb2NrTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RMb2NrUmV0YWluVW50aWxEYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1ZXN0UGF5ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZlclNpZGVFbmNyeXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VDdXN0b21lcktleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VDdXN0b21lcktleU1kNT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ2dpbmdEaXJlY3RpdmU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWJzaXRlUmVkaXJlY3Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JhbnQ/OiBTM09iamVjdENvcHlHcmFudFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBTM09iamVjdENvcHlHcmFudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWw/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1cmk/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHMzT2JqZWN0Q29weUdyYW50VG9UZXJyYWZvcm0oc3RydWN0PzogUzNPYmplY3RDb3B5R3JhbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW1haWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWwpLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICBwZXJtaXNzaW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wZXJtaXNzaW9ucyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB1cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJpKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFMzT2JqZWN0Q29weSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUzNPYmplY3RDb3B5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfczNfb2JqZWN0X2NvcHknLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWNsID0gY29uZmlnLmFjbDtcbiAgICB0aGlzLl9idWNrZXQgPSBjb25maWcuYnVja2V0O1xuICAgIHRoaXMuX2J1Y2tldEtleUVuYWJsZWQgPSBjb25maWcuYnVja2V0S2V5RW5hYmxlZDtcbiAgICB0aGlzLl9jYWNoZUNvbnRyb2wgPSBjb25maWcuY2FjaGVDb250cm9sO1xuICAgIHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiA9IGNvbmZpZy5jb250ZW50RGlzcG9zaXRpb247XG4gICAgdGhpcy5fY29udGVudEVuY29kaW5nID0gY29uZmlnLmNvbnRlbnRFbmNvZGluZztcbiAgICB0aGlzLl9jb250ZW50TGFuZ3VhZ2UgPSBjb25maWcuY29udGVudExhbmd1YWdlO1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gY29uZmlnLmNvbnRlbnRUeXBlO1xuICAgIHRoaXMuX2NvcHlJZk1hdGNoID0gY29uZmlnLmNvcHlJZk1hdGNoO1xuICAgIHRoaXMuX2NvcHlJZk1vZGlmaWVkU2luY2UgPSBjb25maWcuY29weUlmTW9kaWZpZWRTaW5jZTtcbiAgICB0aGlzLl9jb3B5SWZOb25lTWF0Y2ggPSBjb25maWcuY29weUlmTm9uZU1hdGNoO1xuICAgIHRoaXMuX2NvcHlJZlVubW9kaWZpZWRTaW5jZSA9IGNvbmZpZy5jb3B5SWZVbm1vZGlmaWVkU2luY2U7XG4gICAgdGhpcy5fY3VzdG9tZXJBbGdvcml0aG0gPSBjb25maWcuY3VzdG9tZXJBbGdvcml0aG07XG4gICAgdGhpcy5fY3VzdG9tZXJLZXkgPSBjb25maWcuY3VzdG9tZXJLZXk7XG4gICAgdGhpcy5fY3VzdG9tZXJLZXlNZDUgPSBjb25maWcuY3VzdG9tZXJLZXlNZDU7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IGNvbmZpZy5leHBlY3RlZEJ1Y2tldE93bmVyO1xuICAgIHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXIgPSBjb25maWcuZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcjtcbiAgICB0aGlzLl9leHBpcmVzID0gY29uZmlnLmV4cGlyZXM7XG4gICAgdGhpcy5fZm9yY2VEZXN0cm95ID0gY29uZmlnLmZvcmNlRGVzdHJveTtcbiAgICB0aGlzLl9rZXkgPSBjb25maWcua2V5O1xuICAgIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0ID0gY29uZmlnLmttc0VuY3J5cHRpb25Db250ZXh0O1xuICAgIHRoaXMuX2ttc0tleUlkID0gY29uZmlnLmttc0tleUlkO1xuICAgIHRoaXMuX21ldGFkYXRhID0gY29uZmlnLm1ldGFkYXRhO1xuICAgIHRoaXMuX21ldGFkYXRhRGlyZWN0aXZlID0gY29uZmlnLm1ldGFkYXRhRGlyZWN0aXZlO1xuICAgIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMgPSBjb25maWcub2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cztcbiAgICB0aGlzLl9vYmplY3RMb2NrTW9kZSA9IGNvbmZpZy5vYmplY3RMb2NrTW9kZTtcbiAgICB0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlID0gY29uZmlnLm9iamVjdExvY2tSZXRhaW5VbnRpbERhdGU7XG4gICAgdGhpcy5fcmVxdWVzdFBheWVyID0gY29uZmlnLnJlcXVlc3RQYXllcjtcbiAgICB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbiA9IGNvbmZpZy5zZXJ2ZXJTaWRlRW5jcnlwdGlvbjtcbiAgICB0aGlzLl9zb3VyY2UgPSBjb25maWcuc291cmNlO1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtO1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5ID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyS2V5O1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5TWQ1ID0gY29uZmlnLnNvdXJjZUN1c3RvbWVyS2V5TWQ1O1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IGNvbmZpZy5zdG9yYWdlQ2xhc3M7XG4gICAgdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZSA9IGNvbmZpZy50YWdnaW5nRGlyZWN0aXZlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fd2Vic2l0ZVJlZGlyZWN0ID0gY29uZmlnLndlYnNpdGVSZWRpcmVjdDtcbiAgICB0aGlzLl9ncmFudCA9IGNvbmZpZy5ncmFudDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjbD86IHN0cmluZztcbiAgcHVibGljIGdldCBhY2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjbCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FjbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjbCgpIHtcbiAgICB0aGlzLl9hY2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2xcbiAgfVxuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWNrZXQ6IHN0cmluZztcbiAgcHVibGljIGdldCBidWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRcbiAgfVxuXG4gIC8vIGJ1Y2tldF9rZXlfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1Y2tldEtleUVuYWJsZWQ/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGJ1Y2tldEtleUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYnVja2V0X2tleV9lbmFibGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRLZXlFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYnVja2V0S2V5RW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldEtleUVuYWJsZWQoKSB7XG4gICAgdGhpcy5fYnVja2V0S2V5RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0S2V5RW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRLZXlFbmFibGVkXG4gIH1cblxuICAvLyBjYWNoZV9jb250cm9sIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FjaGVDb250cm9sPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNhY2hlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhY2hlX2NvbnRyb2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhY2hlQ29udHJvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FjaGVDb250cm9sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGVDb250cm9sKCkge1xuICAgIHRoaXMuX2NhY2hlQ29udHJvbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FjaGVDb250cm9sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlQ29udHJvbFxuICB9XG5cbiAgLy8gY29udGVudF9kaXNwb3NpdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnREaXNwb3NpdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBjb250ZW50RGlzcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X2Rpc3Bvc2l0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50RGlzcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnREaXNwb3NpdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnREaXNwb3NpdGlvbigpIHtcbiAgICB0aGlzLl9jb250ZW50RGlzcG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnREaXNwb3NpdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50RGlzcG9zaXRpb25cbiAgfVxuXG4gIC8vIGNvbnRlbnRfZW5jb2RpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50RW5jb2Rpbmc/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY29udGVudEVuY29kaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGVudF9lbmNvZGluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGVudEVuY29kaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50RW5jb2RpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250ZW50RW5jb2RpbmcoKSB7XG4gICAgdGhpcy5fY29udGVudEVuY29kaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50RW5jb2RpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudEVuY29kaW5nXG4gIH1cblxuICAvLyBjb250ZW50X2xhbmd1YWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudExhbmd1YWdlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvbnRlbnRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfbGFuZ3VhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRMYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudExhbmd1YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudExhbmd1YWdlKCkge1xuICAgIHRoaXMuX2NvbnRlbnRMYW5ndWFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudExhbmd1YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRMYW5ndWFnZVxuICB9XG5cbiAgLy8gY29udGVudF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudFR5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRUeXBlKCkge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVxuICB9XG5cbiAgLy8gY29weV9pZl9tYXRjaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3B5SWZNYXRjaD86IHN0cmluZztcbiAgcHVibGljIGdldCBjb3B5SWZNYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvcHlfaWZfbWF0Y2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcHlJZk1hdGNoKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fY29weUlmTWF0Y2ggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3B5SWZNYXRjaCgpIHtcbiAgICB0aGlzLl9jb3B5SWZNYXRjaCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29weUlmTWF0Y2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29weUlmTWF0Y2hcbiAgfVxuXG4gIC8vIGNvcHlfaWZfbW9kaWZpZWRfc2luY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29weUlmTW9kaWZpZWRTaW5jZT86IHN0cmluZztcbiAgcHVibGljIGdldCBjb3B5SWZNb2RpZmllZFNpbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29weV9pZl9tb2RpZmllZF9zaW5jZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29weUlmTW9kaWZpZWRTaW5jZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2NvcHlJZk1vZGlmaWVkU2luY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3B5SWZNb2RpZmllZFNpbmNlKCkge1xuICAgIHRoaXMuX2NvcHlJZk1vZGlmaWVkU2luY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcHlJZk1vZGlmaWVkU2luY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29weUlmTW9kaWZpZWRTaW5jZVxuICB9XG5cbiAgLy8gY29weV9pZl9ub25lX21hdGNoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlJZk5vbmVNYXRjaD86IHN0cmluZztcbiAgcHVibGljIGdldCBjb3B5SWZOb25lTWF0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3B5X2lmX25vbmVfbWF0Y2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcHlJZk5vbmVNYXRjaCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2NvcHlJZk5vbmVNYXRjaCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcHlJZk5vbmVNYXRjaCgpIHtcbiAgICB0aGlzLl9jb3B5SWZOb25lTWF0Y2ggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcHlJZk5vbmVNYXRjaElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3B5SWZOb25lTWF0Y2hcbiAgfVxuXG4gIC8vIGNvcHlfaWZfdW5tb2RpZmllZF9zaW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3B5SWZVbm1vZGlmaWVkU2luY2U/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY29weUlmVW5tb2RpZmllZFNpbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29weV9pZl91bm1vZGlmaWVkX3NpbmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb3B5SWZVbm1vZGlmaWVkU2luY2UodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9jb3B5SWZVbm1vZGlmaWVkU2luY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3B5SWZVbm1vZGlmaWVkU2luY2UoKSB7XG4gICAgdGhpcy5fY29weUlmVW5tb2RpZmllZFNpbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3B5SWZVbm1vZGlmaWVkU2luY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29weUlmVW5tb2RpZmllZFNpbmNlXG4gIH1cblxuICAvLyBjdXN0b21lcl9hbGdvcml0aG0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21lckFsZ29yaXRobT86IHN0cmluZztcbiAgcHVibGljIGdldCBjdXN0b21lckFsZ29yaXRobSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2FsZ29yaXRobScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tZXJBbGdvcml0aG0odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbWVyQWxnb3JpdGhtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tZXJBbGdvcml0aG0oKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyQWxnb3JpdGhtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyQWxnb3JpdGhtXG4gIH1cblxuICAvLyBjdXN0b21lcl9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tZXJLZXk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21lcl9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbWVyS2V5KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJLZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21lcktleSgpIHtcbiAgICB0aGlzLl9jdXN0b21lcktleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJLZXlcbiAgfVxuXG4gIC8vIGN1c3RvbWVyX2tleV9tZDUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21lcktleU1kNT86IHN0cmluZztcbiAgcHVibGljIGdldCBjdXN0b21lcktleU1kNSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2tleV9tZDUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbWVyS2V5TWQ1KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21lcktleU1kNSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHRoaXMuX2N1c3RvbWVyS2V5TWQ1ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21lcktleU1kNUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21lcktleU1kNVxuICB9XG5cbiAgLy8gZXRhZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV0YWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldGFnJyk7XG4gIH1cblxuICAvLyBleHBlY3RlZF9idWNrZXRfb3duZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhwZWN0ZWRCdWNrZXRPd25lcj86IHN0cmluZztcbiAgcHVibGljIGdldCBleHBlY3RlZEJ1Y2tldE93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwZWN0ZWRfYnVja2V0X293bmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHBlY3RlZEJ1Y2tldE93bmVyKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4cGVjdGVkQnVja2V0T3duZXIoKSB7XG4gICAgdGhpcy5fZXhwZWN0ZWRCdWNrZXRPd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRCdWNrZXRPd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHBlY3RlZEJ1Y2tldE93bmVyXG4gIH1cblxuICAvLyBleHBlY3RlZF9zb3VyY2VfYnVja2V0X293bmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXI/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cGVjdGVkX3NvdXJjZV9idWNrZXRfb3duZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4cGVjdGVkU291cmNlQnVja2V0T3duZXIodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9leHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lcigpIHtcbiAgICB0aGlzLl9leHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHBlY3RlZFNvdXJjZUJ1Y2tldE93bmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGVjdGVkU291cmNlQnVja2V0T3duZXJcbiAgfVxuXG4gIC8vIGV4cGlyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBleHBpcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXhwaXJhdGlvbicpO1xuICB9XG5cbiAgLy8gZXhwaXJlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHBpcmVzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGV4cGlyZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHBpcmVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHBpcmVzKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZXhwaXJlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4cGlyZXMoKSB7XG4gICAgdGhpcy5fZXhwaXJlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhwaXJlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHBpcmVzXG4gIH1cblxuICAvLyBmb3JjZV9kZXN0cm95IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvcmNlRGVzdHJveT86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgZm9yY2VEZXN0cm95KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcmNlX2Rlc3Ryb3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcmNlRGVzdHJveSh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9mb3JjZURlc3Ryb3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JjZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9yY2VEZXN0cm95ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JjZURlc3Ryb3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VEZXN0cm95XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tleTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleVxuICB9XG5cbiAgLy8ga21zX2VuY3J5cHRpb25fY29udGV4dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0VuY3J5cHRpb25Db250ZXh0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGttc0VuY3J5cHRpb25Db250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2VuY3J5cHRpb25fY29udGV4dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zRW5jcnlwdGlvbkNvbnRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zRW5jcnlwdGlvbkNvbnRleHQoKSB7XG4gICAgdGhpcy5fa21zRW5jcnlwdGlvbkNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0VuY3J5cHRpb25Db250ZXh0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0VuY3J5cHRpb25Db250ZXh0XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5SWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWRcbiAgfVxuXG4gIC8vIGxhc3RfbW9kaWZpZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0TW9kaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X21vZGlmaWVkJyk7XG4gIH1cblxuICAvLyBtZXRhZGF0YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldGFkYXRhPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldGFkYXRhJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCBtZXRhZGF0YSh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0YWRhdGEoKSB7XG4gICAgdGhpcy5fbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhXG4gIH1cblxuICAvLyBtZXRhZGF0YV9kaXJlY3RpdmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWV0YWRhdGFEaXJlY3RpdmU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbWV0YWRhdGFEaXJlY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRhZGF0YV9kaXJlY3RpdmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1ldGFkYXRhRGlyZWN0aXZlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFEaXJlY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRhZGF0YURpcmVjdGl2ZSgpIHtcbiAgICB0aGlzLl9tZXRhZGF0YURpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGFEaXJlY3RpdmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFEaXJlY3RpdmVcbiAgfVxuXG4gIC8vIG9iamVjdF9sb2NrX2xlZ2FsX2hvbGRfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1cz86IHN0cmluZztcbiAgcHVibGljIGdldCBvYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0X2xvY2tfbGVnYWxfaG9sZF9zdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9iamVjdExvY2tMZWdhbEhvbGRTdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPYmplY3RMb2NrTGVnYWxIb2xkU3RhdHVzKCkge1xuICAgIHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tMZWdhbEhvbGRTdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0TG9ja0xlZ2FsSG9sZFN0YXR1c1xuICB9XG5cbiAgLy8gb2JqZWN0X2xvY2tfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29iamVjdExvY2tNb2RlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0X2xvY2tfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb2JqZWN0TG9ja01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29iamVjdExvY2tNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2JqZWN0TG9ja01vZGUoKSB7XG4gICAgdGhpcy5fb2JqZWN0TG9ja01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdExvY2tNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdExvY2tNb2RlXG4gIH1cblxuICAvLyBvYmplY3RfbG9ja19yZXRhaW5fdW50aWxfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29iamVjdExvY2tSZXRhaW5VbnRpbERhdGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgb2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdF9sb2NrX3JldGFpbl91bnRpbF9kYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvYmplY3RMb2NrUmV0YWluVW50aWxEYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2JqZWN0TG9ja1JldGFpblVudGlsRGF0ZSgpIHtcbiAgICB0aGlzLl9vYmplY3RMb2NrUmV0YWluVW50aWxEYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvYmplY3RMb2NrUmV0YWluVW50aWxEYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29iamVjdExvY2tSZXRhaW5VbnRpbERhdGVcbiAgfVxuXG4gIC8vIHJlcXVlc3RfY2hhcmdlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcXVlc3RDaGFyZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVlc3RfY2hhcmdlZCcpO1xuICB9XG5cbiAgLy8gcmVxdWVzdF9wYXllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0UGF5ZXI/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVxdWVzdFBheWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVxdWVzdF9wYXllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWVzdFBheWVyKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fcmVxdWVzdFBheWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdFBheWVyKCkge1xuICAgIHRoaXMuX3JlcXVlc3RQYXllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFBheWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RQYXllclxuICB9XG5cbiAgLy8gc2VydmVyX3NpZGVfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZlclNpZGVFbmNyeXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmVyX3NpZGVfZW5jcnlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmVyU2lkZUVuY3J5cHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmVyU2lkZUVuY3J5cHRpb24oKSB7XG4gICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uXG4gIH1cblxuICAvLyBzb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlXG4gIH1cblxuICAvLyBzb3VyY2VfY3VzdG9tZXJfYWxnb3JpdGhtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2N1c3RvbWVyX2FsZ29yaXRobScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlQ3VzdG9tZXJBbGdvcml0aG0odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9zb3VyY2VDdXN0b21lckFsZ29yaXRobSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKCkge1xuICAgIHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lckFsZ29yaXRobUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDdXN0b21lckFsZ29yaXRobVxuICB9XG5cbiAgLy8gc291cmNlX2N1c3RvbWVyX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VDdXN0b21lcktleT86IHN0cmluZztcbiAgcHVibGljIGdldCBzb3VyY2VDdXN0b21lcktleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9jdXN0b21lcl9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUN1c3RvbWVyS2V5KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fc291cmNlQ3VzdG9tZXJLZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VDdXN0b21lcktleSgpIHtcbiAgICB0aGlzLl9zb3VyY2VDdXN0b21lcktleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlQ3VzdG9tZXJLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQ3VzdG9tZXJLZXlcbiAgfVxuXG4gIC8vIHNvdXJjZV9jdXN0b21lcl9rZXlfbWQ1IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUN1c3RvbWVyS2V5TWQ1Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNvdXJjZUN1c3RvbWVyS2V5TWQ1KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2N1c3RvbWVyX2tleV9tZDUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUN1c3RvbWVyS2V5TWQ1KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fc291cmNlQ3VzdG9tZXJLZXlNZDUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VDdXN0b21lcktleU1kNSgpIHtcbiAgICB0aGlzLl9zb3VyY2VDdXN0b21lcktleU1kNSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlQ3VzdG9tZXJLZXlNZDVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQ3VzdG9tZXJLZXlNZDVcbiAgfVxuXG4gIC8vIHNvdXJjZV92ZXJzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlVmVyc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX3ZlcnNpb25faWQnKTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfY2xhc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2xhc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RvcmFnZV9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RvcmFnZUNsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdG9yYWdlQ2xhc3MoKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlQ2xhc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZUNsYXNzXG4gIH1cblxuICAvLyB0YWdnaW5nX2RpcmVjdGl2ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdnaW5nRGlyZWN0aXZlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHRhZ2dpbmdEaXJlY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWdnaW5nX2RpcmVjdGl2ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnZ2luZ0RpcmVjdGl2ZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3RhZ2dpbmdEaXJlY3RpdmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdnaW5nRGlyZWN0aXZlKCkge1xuICAgIHRoaXMuX3RhZ2dpbmdEaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ2dpbmdEaXJlY3RpdmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZ2luZ0RpcmVjdGl2ZVxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vIHZlcnNpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uX2lkJyk7XG4gIH1cblxuICAvLyB3ZWJzaXRlX3JlZGlyZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2Vic2l0ZVJlZGlyZWN0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHdlYnNpdGVSZWRpcmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dlYnNpdGVfcmVkaXJlY3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdlYnNpdGVSZWRpcmVjdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2Vic2l0ZVJlZGlyZWN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vic2l0ZVJlZGlyZWN0KCkge1xuICAgIHRoaXMuX3dlYnNpdGVSZWRpcmVjdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2Vic2l0ZVJlZGlyZWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYnNpdGVSZWRpcmVjdFxuICB9XG5cbiAgLy8gZ3JhbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JhbnQ/OiBTM09iamVjdENvcHlHcmFudFtdO1xuICBwdWJsaWMgZ2V0IGdyYW50KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dyYW50JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZ3JhbnQodmFsdWU6IFMzT2JqZWN0Q29weUdyYW50W10gKSB7XG4gICAgdGhpcy5fZ3JhbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcmFudCgpIHtcbiAgICB0aGlzLl9ncmFudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3JhbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhbnRcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY2wpLFxuICAgICAgYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9idWNrZXQpLFxuICAgICAgYnVja2V0X2tleV9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0S2V5RW5hYmxlZCksXG4gICAgICBjYWNoZV9jb250cm9sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jYWNoZUNvbnRyb2wpLFxuICAgICAgY29udGVudF9kaXNwb3NpdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29udGVudERpc3Bvc2l0aW9uKSxcbiAgICAgIGNvbnRlbnRfZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRFbmNvZGluZyksXG4gICAgICBjb250ZW50X2xhbmd1YWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250ZW50TGFuZ3VhZ2UpLFxuICAgICAgY29udGVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250ZW50VHlwZSksXG4gICAgICBjb3B5X2lmX21hdGNoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb3B5SWZNYXRjaCksXG4gICAgICBjb3B5X2lmX21vZGlmaWVkX3NpbmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb3B5SWZNb2RpZmllZFNpbmNlKSxcbiAgICAgIGNvcHlfaWZfbm9uZV9tYXRjaDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29weUlmTm9uZU1hdGNoKSxcbiAgICAgIGNvcHlfaWZfdW5tb2RpZmllZF9zaW5jZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29weUlmVW5tb2RpZmllZFNpbmNlKSxcbiAgICAgIGN1c3RvbWVyX2FsZ29yaXRobTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tZXJBbGdvcml0aG0pLFxuICAgICAgY3VzdG9tZXJfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jdXN0b21lcktleSksXG4gICAgICBjdXN0b21lcl9rZXlfbWQ1OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jdXN0b21lcktleU1kNSksXG4gICAgICBleHBlY3RlZF9idWNrZXRfb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4cGVjdGVkQnVja2V0T3duZXIpLFxuICAgICAgZXhwZWN0ZWRfc291cmNlX2J1Y2tldF9vd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhwZWN0ZWRTb3VyY2VCdWNrZXRPd25lciksXG4gICAgICBleHBpcmVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9leHBpcmVzKSxcbiAgICAgIGZvcmNlX2Rlc3Ryb3k6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9mb3JjZURlc3Ryb3kpLFxuICAgICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rZXkpLFxuICAgICAga21zX2VuY3J5cHRpb25fY29udGV4dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zRW5jcnlwdGlvbkNvbnRleHQpLFxuICAgICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zS2V5SWQpLFxuICAgICAgbWV0YWRhdGE6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX21ldGFkYXRhKSxcbiAgICAgIG1ldGFkYXRhX2RpcmVjdGl2ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWV0YWRhdGFEaXJlY3RpdmUpLFxuICAgICAgb2JqZWN0X2xvY2tfbGVnYWxfaG9sZF9zdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29iamVjdExvY2tMZWdhbEhvbGRTdGF0dXMpLFxuICAgICAgb2JqZWN0X2xvY2tfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb2JqZWN0TG9ja01vZGUpLFxuICAgICAgb2JqZWN0X2xvY2tfcmV0YWluX3VudGlsX2RhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29iamVjdExvY2tSZXRhaW5VbnRpbERhdGUpLFxuICAgICAgcmVxdWVzdF9wYXllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVxdWVzdFBheWVyKSxcbiAgICAgIHNlcnZlcl9zaWRlX2VuY3J5cHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uKSxcbiAgICAgIHNvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc291cmNlKSxcbiAgICAgIHNvdXJjZV9jdXN0b21lcl9hbGdvcml0aG06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZUN1c3RvbWVyQWxnb3JpdGhtKSxcbiAgICAgIHNvdXJjZV9jdXN0b21lcl9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NvdXJjZUN1c3RvbWVyS2V5KSxcbiAgICAgIHNvdXJjZV9jdXN0b21lcl9rZXlfbWQ1OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VDdXN0b21lcktleU1kNSksXG4gICAgICBzdG9yYWdlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlQ2xhc3MpLFxuICAgICAgdGFnZ2luZ19kaXJlY3RpdmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RhZ2dpbmdEaXJlY3RpdmUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB3ZWJzaXRlX3JlZGlyZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl93ZWJzaXRlUmVkaXJlY3QpLFxuICAgICAgZ3JhbnQ6IGNka3RmLmxpc3RNYXBwZXIoczNPYmplY3RDb3B5R3JhbnRUb1RlcnJhZm9ybSkodGhpcy5fZ3JhbnQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==