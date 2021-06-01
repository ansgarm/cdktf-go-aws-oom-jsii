"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Bucket = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function s3BucketCorsRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedHeaders),
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedOrigins),
        expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.exposeHeaders),
        max_age_seconds: cdktf.numberToTerraform(struct.maxAgeSeconds),
    };
}
function s3BucketGrantToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
function s3BucketLifecycleRuleExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        days: cdktf.numberToTerraform(struct.days),
        expired_object_delete_marker: cdktf.booleanToTerraform(struct.expiredObjectDeleteMarker),
    };
}
function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days: cdktf.numberToTerraform(struct.days),
    };
}
function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days: cdktf.numberToTerraform(struct.days),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
function s3BucketLifecycleRuleTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        days: cdktf.numberToTerraform(struct.days),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
function s3BucketLifecycleRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        abort_incomplete_multipart_upload_days: cdktf.numberToTerraform(struct.abortIncompleteMultipartUploadDays),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        expiration: cdktf.listMapper(s3BucketLifecycleRuleExpirationToTerraform)(struct.expiration),
        noncurrent_version_expiration: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform)(struct.noncurrentVersionExpiration),
        noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform)(struct.noncurrentVersionTransition),
        transition: cdktf.listMapper(s3BucketLifecycleRuleTransitionToTerraform)(struct.transition),
    };
}
function s3BucketLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target_bucket: cdktf.stringToTerraform(struct.targetBucket),
        target_prefix: cdktf.stringToTerraform(struct.targetPrefix),
    };
}
function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days: cdktf.numberToTerraform(struct.days),
        mode: cdktf.stringToTerraform(struct.mode),
        years: cdktf.numberToTerraform(struct.years),
    };
}
function s3BucketObjectLockConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_retention: cdktf.listMapper(s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform)(struct.defaultRetention),
    };
}
function s3BucketObjectLockConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object_lock_enabled: cdktf.stringToTerraform(struct.objectLockEnabled),
        rule: cdktf.listMapper(s3BucketObjectLockConfigurationRuleToTerraform)(struct.rule),
    };
}
function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        owner: cdktf.stringToTerraform(struct.owner),
    };
}
function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        bucket: cdktf.stringToTerraform(struct.bucket),
        replica_kms_key_id: cdktf.stringToTerraform(struct.replicaKmsKeyId),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
        access_control_translation: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform)(struct.accessControlTranslation),
    };
}
function s3BucketReplicationConfigurationRulesFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
    };
}
function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sse_kms_encrypted_objects: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform)(struct.sseKmsEncryptedObjects),
    };
}
function s3BucketReplicationConfigurationRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        prefix: cdktf.stringToTerraform(struct.prefix),
        priority: cdktf.numberToTerraform(struct.priority),
        status: cdktf.stringToTerraform(struct.status),
        destination: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationToTerraform)(struct.destination),
        filter: cdktf.listMapper(s3BucketReplicationConfigurationRulesFilterToTerraform)(struct.filter),
        source_selection_criteria: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform)(struct.sourceSelectionCriteria),
    };
}
function s3BucketReplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role: cdktf.stringToTerraform(struct.role),
        rules: cdktf.listMapper(s3BucketReplicationConfigurationRulesToTerraform)(struct.rules),
    };
}
function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_master_key_id: cdktf.stringToTerraform(struct.kmsMasterKeyId),
        sse_algorithm: cdktf.stringToTerraform(struct.sseAlgorithm),
    };
}
function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_key_enabled: cdktf.booleanToTerraform(struct.bucketKeyEnabled),
        apply_server_side_encryption_by_default: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform)(struct.applyServerSideEncryptionByDefault),
    };
}
function s3BucketServerSideEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        rule: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleToTerraform)(struct.rule),
    };
}
function s3BucketVersioningToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        mfa_delete: cdktf.booleanToTerraform(struct.mfaDelete),
    };
}
function s3BucketWebsiteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_document: cdktf.stringToTerraform(struct.errorDocument),
        index_document: cdktf.stringToTerraform(struct.indexDocument),
        redirect_all_requests_to: cdktf.stringToTerraform(struct.redirectAllRequestsTo),
        routing_rules: cdktf.stringToTerraform(struct.routingRules),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket}.
 */
class S3Bucket extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_s3_bucket',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accelerationStatus = config.accelerationStatus;
        this._acl = config.acl;
        this._bucket = config.bucket;
        this._bucketPrefix = config.bucketPrefix;
        this._forceDestroy = config.forceDestroy;
        this._hostedZoneId = config.hostedZoneId;
        this._policy = config.policy;
        this._requestPayer = config.requestPayer;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._websiteDomain = config.websiteDomain;
        this._websiteEndpoint = config.websiteEndpoint;
        this._corsRule = config.corsRule;
        this._grant = config.grant;
        this._lifecycleRule = config.lifecycleRule;
        this._logging = config.logging;
        this._objectLockConfiguration = config.objectLockConfiguration;
        this._replicationConfiguration = config.replicationConfiguration;
        this._serverSideEncryptionConfiguration = config.serverSideEncryptionConfiguration;
        this._versioning = config.versioning;
        this._website = config.website;
    }
    get accelerationStatus() {
        return this.getStringAttribute('acceleration_status');
    }
    set accelerationStatus(value) {
        this._accelerationStatus = value;
    }
    resetAccelerationStatus() {
        this._accelerationStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accelerationStatusInput() {
        return this._accelerationStatus;
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
    // arn - computed: true, optional: true, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    // bucket_domain_name - computed: true, optional: false, required: false
    get bucketDomainName() {
        return this.getStringAttribute('bucket_domain_name');
    }
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    set bucketPrefix(value) {
        this._bucketPrefix = value;
    }
    resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketPrefixInput() {
        return this._bucketPrefix;
    }
    // bucket_regional_domain_name - computed: true, optional: false, required: false
    get bucketRegionalDomainName() {
        return this.getStringAttribute('bucket_regional_domain_name');
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
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    set hostedZoneId(value) {
        this._hostedZoneId = value;
    }
    resetHostedZoneId() {
        this._hostedZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostedZoneIdInput() {
        return this._hostedZoneId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get policy() {
        return this.getStringAttribute('policy');
    }
    set policy(value) {
        this._policy = value;
    }
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyInput() {
        return this._policy;
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
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
    get websiteDomain() {
        return this.getStringAttribute('website_domain');
    }
    set websiteDomain(value) {
        this._websiteDomain = value;
    }
    resetWebsiteDomain() {
        this._websiteDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get websiteDomainInput() {
        return this._websiteDomain;
    }
    get websiteEndpoint() {
        return this.getStringAttribute('website_endpoint');
    }
    set websiteEndpoint(value) {
        this._websiteEndpoint = value;
    }
    resetWebsiteEndpoint() {
        this._websiteEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get websiteEndpointInput() {
        return this._websiteEndpoint;
    }
    get corsRule() {
        return this.interpolationForAttribute('cors_rule');
    }
    set corsRule(value) {
        this._corsRule = value;
    }
    resetCorsRule() {
        this._corsRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get corsRuleInput() {
        return this._corsRule;
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
    get lifecycleRule() {
        return this.interpolationForAttribute('lifecycle_rule');
    }
    set lifecycleRule(value) {
        this._lifecycleRule = value;
    }
    resetLifecycleRule() {
        this._lifecycleRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleRuleInput() {
        return this._lifecycleRule;
    }
    get logging() {
        return this.interpolationForAttribute('logging');
    }
    set logging(value) {
        this._logging = value;
    }
    resetLogging() {
        this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingInput() {
        return this._logging;
    }
    get objectLockConfiguration() {
        return this.interpolationForAttribute('object_lock_configuration');
    }
    set objectLockConfiguration(value) {
        this._objectLockConfiguration = value;
    }
    resetObjectLockConfiguration() {
        this._objectLockConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get objectLockConfigurationInput() {
        return this._objectLockConfiguration;
    }
    get replicationConfiguration() {
        return this.interpolationForAttribute('replication_configuration');
    }
    set replicationConfiguration(value) {
        this._replicationConfiguration = value;
    }
    resetReplicationConfiguration() {
        this._replicationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicationConfigurationInput() {
        return this._replicationConfiguration;
    }
    get serverSideEncryptionConfiguration() {
        return this.interpolationForAttribute('server_side_encryption_configuration');
    }
    set serverSideEncryptionConfiguration(value) {
        this._serverSideEncryptionConfiguration = value;
    }
    resetServerSideEncryptionConfiguration() {
        this._serverSideEncryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverSideEncryptionConfigurationInput() {
        return this._serverSideEncryptionConfiguration;
    }
    get versioning() {
        return this.interpolationForAttribute('versioning');
    }
    set versioning(value) {
        this._versioning = value;
    }
    resetVersioning() {
        this._versioning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versioningInput() {
        return this._versioning;
    }
    get website() {
        return this.interpolationForAttribute('website');
    }
    set website(value) {
        this._website = value;
    }
    resetWebsite() {
        this._website = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get websiteInput() {
        return this._website;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            acceleration_status: cdktf.stringToTerraform(this._accelerationStatus),
            acl: cdktf.stringToTerraform(this._acl),
            bucket: cdktf.stringToTerraform(this._bucket),
            bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
            policy: cdktf.stringToTerraform(this._policy),
            request_payer: cdktf.stringToTerraform(this._requestPayer),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            website_domain: cdktf.stringToTerraform(this._websiteDomain),
            website_endpoint: cdktf.stringToTerraform(this._websiteEndpoint),
            cors_rule: cdktf.listMapper(s3BucketCorsRuleToTerraform)(this._corsRule),
            grant: cdktf.listMapper(s3BucketGrantToTerraform)(this._grant),
            lifecycle_rule: cdktf.listMapper(s3BucketLifecycleRuleToTerraform)(this._lifecycleRule),
            logging: cdktf.listMapper(s3BucketLoggingToTerraform)(this._logging),
            object_lock_configuration: cdktf.listMapper(s3BucketObjectLockConfigurationToTerraform)(this._objectLockConfiguration),
            replication_configuration: cdktf.listMapper(s3BucketReplicationConfigurationToTerraform)(this._replicationConfiguration),
            server_side_encryption_configuration: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationToTerraform)(this._serverSideEncryptionConfiguration),
            versioning: cdktf.listMapper(s3BucketVersioningToTerraform)(this._versioning),
            website: cdktf.listMapper(s3BucketWebsiteToTerraform)(this._website),
        };
    }
}
exports.S3Bucket = S3Bucket;
_a = JSII_RTTI_SYMBOL_1;
S3Bucket[_a] = { fqn: "hashicorp_aws.S3Bucket", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtYnVja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiczMtYnVja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBbUkvQixTQUFTLDJCQUEyQixDQUFDLE1BQXlCO0lBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNsRixlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2xGLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDbEYsY0FBYyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUNoRixlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDaEUsQ0FBQTtBQUNILENBQUM7QUFxQkQsU0FBUyx3QkFBd0IsQ0FBQyxNQUFzQjtJQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFD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QUFLLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1lBQ3RILHlCQUF5QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDeEgsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztZQUNySixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDN0UsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3JFLENBQUM7SUFDSixDQUFDOztBQXhiSCw0QkF5YkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvczNfYnVja2V0Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NlbGVyYXRpb25TdGF0dXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2w/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldFByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9yY2VEZXN0cm95PzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0ZWRab25lSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb2xpY3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RQYXllcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2Vic2l0ZURvbWFpbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2Vic2l0ZUVuZHBvaW50Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvcnNSdWxlPzogUzNCdWNrZXRDb3JzUnVsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyYW50PzogUzNCdWNrZXRHcmFudFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxpZmVjeWNsZVJ1bGU/OiBTM0J1Y2tldExpZmVjeWNsZVJ1bGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dnaW5nPzogUzNCdWNrZXRMb2dnaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb2JqZWN0TG9ja0NvbmZpZ3VyYXRpb24/OiBTM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwbGljYXRpb25Db25maWd1cmF0aW9uPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/OiBTM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb25pbmc/OiBTM0J1Y2tldFZlcnNpb25pbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWJzaXRlPzogUzNCdWNrZXRXZWJzaXRlW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0Q29yc1J1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dlZEhlYWRlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93ZWRNZXRob2RzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93ZWRPcmlnaW5zOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHBvc2VIZWFkZXJzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldENvcnNSdWxlVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRDb3JzUnVsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd2VkX2hlYWRlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxsb3dlZEhlYWRlcnMpLFxuICAgIGFsbG93ZWRfbWV0aG9kczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hbGxvd2VkTWV0aG9kcyksXG4gICAgYWxsb3dlZF9vcmlnaW5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFsbG93ZWRPcmlnaW5zKSxcbiAgICBleHBvc2VfaGVhZGVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leHBvc2VIZWFkZXJzKSxcbiAgICBtYXhfYWdlX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4QWdlU2Vjb25kcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldEdyYW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVyaT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gczNCdWNrZXRHcmFudFRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0R3JhbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIHBlcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBlcm1pc3Npb25zKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHVyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRMaWZlY3ljbGVSdWxlRXhwaXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRheXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4cGlyZWRPYmplY3REZWxldGVNYXJrZXI/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZVJ1bGVFeHBpcmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRMaWZlY3ljbGVSdWxlRXhwaXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGUpLFxuICAgIGRheXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGF5cyksXG4gICAgZXhwaXJlZF9vYmplY3RfZGVsZXRlX21hcmtlcjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZXhwaXJlZE9iamVjdERlbGV0ZU1hcmtlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldExpZmVjeWNsZVJ1bGVOb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXlzPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZVJ1bGVOb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZVJ1bGVOb25jdXJyZW50VmVyc2lvbkV4cGlyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kYXlzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0TGlmZWN5Y2xlUnVsZU5vbmN1cnJlbnRWZXJzaW9uVHJhbnNpdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRheXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0b3JhZ2VDbGFzczogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldExpZmVjeWNsZVJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZVJ1bGVOb25jdXJyZW50VmVyc2lvblRyYW5zaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kYXlzKSxcbiAgICBzdG9yYWdlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VDbGFzcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldExpZmVjeWNsZVJ1bGVUcmFuc2l0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF5cz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHMzQnVja2V0TGlmZWN5Y2xlUnVsZVRyYW5zaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldExpZmVjeWNsZVJ1bGVUcmFuc2l0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0ZSksXG4gICAgZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kYXlzKSxcbiAgICBzdG9yYWdlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VDbGFzcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldExpZmVjeWNsZVJ1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZERheXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4cGlyYXRpb24/OiBTM0J1Y2tldExpZmVjeWNsZVJ1bGVFeHBpcmF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uPzogUzNCdWNrZXRMaWZlY3ljbGVSdWxlTm9uY3VycmVudFZlcnNpb25FeHBpcmF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uPzogUzNCdWNrZXRMaWZlY3ljbGVSdWxlTm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJhbnNpdGlvbj86IFMzQnVja2V0TGlmZWN5Y2xlUnVsZVRyYW5zaXRpb25bXTtcbn1cblxuZnVuY3Rpb24gczNCdWNrZXRMaWZlY3ljbGVSdWxlVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRMaWZlY3ljbGVSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFib3J0X2luY29tcGxldGVfbXVsdGlwYXJ0X3VwbG9hZF9kYXlzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmFib3J0SW5jb21wbGV0ZU11bHRpcGFydFVwbG9hZERheXMpLFxuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkKSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICAgIGV4cGlyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRMaWZlY3ljbGVSdWxlRXhwaXJhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmV4cGlyYXRpb24pLFxuICAgIG5vbmN1cnJlbnRfdmVyc2lvbl9leHBpcmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0TGlmZWN5Y2xlUnVsZU5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLm5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbiksXG4gICAgbm9uY3VycmVudF92ZXJzaW9uX3RyYW5zaXRpb246IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRMaWZlY3ljbGVSdWxlTm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEubm9uY3VycmVudFZlcnNpb25UcmFuc2l0aW9uKSxcbiAgICB0cmFuc2l0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0TGlmZWN5Y2xlUnVsZVRyYW5zaXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS50cmFuc2l0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0TG9nZ2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldEJ1Y2tldDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRQcmVmaXg/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHMzQnVja2V0TG9nZ2luZ1RvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0TG9nZ2luZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0YXJnZXRfYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldEJ1Y2tldCksXG4gICAgdGFyZ2V0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRQcmVmaXgpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRPYmplY3RMb2NrQ29uZmlndXJhdGlvblJ1bGVEZWZhdWx0UmV0ZW50aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF5cz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHllYXJzPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uUnVsZURlZmF1bHRSZXRlbnRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uUnVsZURlZmF1bHRSZXRlbnRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kYXlzKSxcbiAgICBtb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGUpLFxuICAgIHllYXJzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnllYXJzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0T2JqZWN0TG9ja0NvbmZpZ3VyYXRpb25SdWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0UmV0ZW50aW9uOiBTM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uUnVsZURlZmF1bHRSZXRlbnRpb25bXTtcbn1cblxuZnVuY3Rpb24gczNCdWNrZXRPYmplY3RMb2NrQ29uZmlndXJhdGlvblJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uUnVsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0X3JldGVudGlvbjogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uUnVsZURlZmF1bHRSZXRlbnRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5kZWZhdWx0UmV0ZW50aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFMzQnVja2V0T2JqZWN0TG9ja0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RMb2NrRW5hYmxlZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGU/OiBTM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uUnVsZVtdO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldE9iamVjdExvY2tDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRPYmplY3RMb2NrQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvYmplY3RfbG9ja19lbmFibGVkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdExvY2tFbmFibGVkKSxcbiAgICBydWxlOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0T2JqZWN0TG9ja0NvbmZpZ3VyYXRpb25SdWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEucnVsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRGVzdGluYXRpb25BY2Nlc3NDb250cm9sVHJhbnNsYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG93bmVyOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXNEZXN0aW5hdGlvbkFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXNEZXN0aW5hdGlvbkFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vd25lciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRGVzdGluYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcGxpY2FLbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbj86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXNEZXN0aW5hdGlvbkFjY2Vzc0NvbnRyb2xUcmFuc2xhdGlvbltdO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRGVzdGluYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRGVzdGluYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjb3VudF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2NvdW50SWQpLFxuICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXQpLFxuICAgIHJlcGxpY2Ffa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsaWNhS21zS2V5SWQpLFxuICAgIHN0b3JhZ2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RvcmFnZUNsYXNzKSxcbiAgICBhY2Nlc3NfY29udHJvbF90cmFuc2xhdGlvbjogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRGVzdGluYXRpb25BY2Nlc3NDb250cm9sVHJhbnNsYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5hY2Nlc3NDb250cm9sVHJhbnNsYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlc0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlc0ZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlc1NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXNTb3VyY2VTZWxlY3Rpb25Dcml0ZXJpYVNzZUttc0VuY3J5cHRlZE9iamVjdHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFTc2VLbXNFbmNyeXB0ZWRPYmplY3RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlc1NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2VLbXNFbmNyeXB0ZWRPYmplY3RzPzogUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlc1NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhU3NlS21zRW5jcnlwdGVkT2JqZWN0c1tdO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzU291cmNlU2VsZWN0aW9uQ3JpdGVyaWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc3NlX2ttc19lbmNyeXB0ZWRfb2JqZWN0czogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFTc2VLbXNFbmNyeXB0ZWRPYmplY3RzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3NlS21zRW5jcnlwdGVkT2JqZWN0cyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmlvcml0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRGVzdGluYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWx0ZXI/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRmlsdGVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlU2VsZWN0aW9uQ3JpdGVyaWE/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzU291cmNlU2VsZWN0aW9uQ3JpdGVyaWFbXTtcbn1cblxuZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlc1RvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICBkZXN0aW5hdGlvbjogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bGVzRGVzdGluYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5kZXN0aW5hdGlvbiksXG4gICAgZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXNGaWx0ZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5maWx0ZXIpLFxuICAgIHNvdXJjZV9zZWxlY3Rpb25fY3JpdGVyaWE6IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdWxlc1NvdXJjZVNlbGVjdGlvbkNyaXRlcmlhVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlU2VsZWN0aW9uQ3JpdGVyaWEpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcnVsZXM6IFMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXNbXTtcbn1cblxuZnVuY3Rpb24gczNCdWNrZXRSZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGUpLFxuICAgIHJ1bGVzOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0UmVwbGljYXRpb25Db25maWd1cmF0aW9uUnVsZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5ydWxlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblJ1bGVBcHBseVNlcnZlclNpZGVFbmNyeXB0aW9uQnlEZWZhdWx0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNNYXN0ZXJLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NlQWxnb3JpdGhtOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHMzQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUnVsZUFwcGx5U2VydmVyU2lkZUVuY3J5cHRpb25CeURlZmF1bHRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblJ1bGVBcHBseVNlcnZlclNpZGVFbmNyeXB0aW9uQnlEZWZhdWx0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGttc19tYXN0ZXJfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc01hc3RlcktleUlkKSxcbiAgICBzc2VfYWxnb3JpdGhtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNzZUFsZ29yaXRobSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblJ1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0S2V5RW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXBwbHlTZXJ2ZXJTaWRlRW5jcnlwdGlvbkJ5RGVmYXVsdDogUzNCdWNrZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25SdWxlQXBwbHlTZXJ2ZXJTaWRlRW5jcnlwdGlvbkJ5RGVmYXVsdFtdO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2tleV9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRLZXlFbmFibGVkKSxcbiAgICBhcHBseV9zZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uX2J5X2RlZmF1bHQ6IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25SdWxlQXBwbHlTZXJ2ZXJTaWRlRW5jcnlwdGlvbkJ5RGVmYXVsdFRvVGVycmFmb3JtKShzdHJ1Y3QhLmFwcGx5U2VydmVyU2lkZUVuY3J5cHRpb25CeURlZmF1bHQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUzNCdWNrZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGU6IFMzQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uUnVsZVtdO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFMzQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJ1bGU6IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25SdWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEucnVsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFZlcnNpb25pbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWZhRGVsZXRlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gczNCdWNrZXRWZXJzaW9uaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogUzNCdWNrZXRWZXJzaW9uaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIG1mYV9kZWxldGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1mYURlbGV0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTM0J1Y2tldFdlYnNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVycm9yRG9jdW1lbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5kZXhEb2N1bWVudD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZGlyZWN0QWxsUmVxdWVzdHNUbz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm91dGluZ1J1bGVzPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzM0J1Y2tldFdlYnNpdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTM0J1Y2tldFdlYnNpdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXJyb3JfZG9jdW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JEb2N1bWVudCksXG4gICAgaW5kZXhfZG9jdW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhEb2N1bWVudCksXG4gICAgcmVkaXJlY3RfYWxsX3JlcXVlc3RzX3RvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZGlyZWN0QWxsUmVxdWVzdHNUbyksXG4gICAgcm91dGluZ19ydWxlczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb3V0aW5nUnVsZXMpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTM0J1Y2tldCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUzNCdWNrZXRDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3MzX2J1Y2tldCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hY2NlbGVyYXRpb25TdGF0dXMgPSBjb25maWcuYWNjZWxlcmF0aW9uU3RhdHVzO1xuICAgIHRoaXMuX2FjbCA9IGNvbmZpZy5hY2w7XG4gICAgdGhpcy5fYnVja2V0ID0gY29uZmlnLmJ1Y2tldDtcbiAgICB0aGlzLl9idWNrZXRQcmVmaXggPSBjb25maWcuYnVja2V0UHJlZml4O1xuICAgIHRoaXMuX2ZvcmNlRGVzdHJveSA9IGNvbmZpZy5mb3JjZURlc3Ryb3k7XG4gICAgdGhpcy5faG9zdGVkWm9uZUlkID0gY29uZmlnLmhvc3RlZFpvbmVJZDtcbiAgICB0aGlzLl9wb2xpY3kgPSBjb25maWcucG9saWN5O1xuICAgIHRoaXMuX3JlcXVlc3RQYXllciA9IGNvbmZpZy5yZXF1ZXN0UGF5ZXI7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl93ZWJzaXRlRG9tYWluID0gY29uZmlnLndlYnNpdGVEb21haW47XG4gICAgdGhpcy5fd2Vic2l0ZUVuZHBvaW50ID0gY29uZmlnLndlYnNpdGVFbmRwb2ludDtcbiAgICB0aGlzLl9jb3JzUnVsZSA9IGNvbmZpZy5jb3JzUnVsZTtcbiAgICB0aGlzLl9ncmFudCA9IGNvbmZpZy5ncmFudDtcbiAgICB0aGlzLl9saWZlY3ljbGVSdWxlID0gY29uZmlnLmxpZmVjeWNsZVJ1bGU7XG4gICAgdGhpcy5fbG9nZ2luZyA9IGNvbmZpZy5sb2dnaW5nO1xuICAgIHRoaXMuX29iamVjdExvY2tDb25maWd1cmF0aW9uID0gY29uZmlnLm9iamVjdExvY2tDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3JlcGxpY2F0aW9uQ29uZmlndXJhdGlvbiA9IGNvbmZpZy5yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uID0gY29uZmlnLnNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl92ZXJzaW9uaW5nID0gY29uZmlnLnZlcnNpb25pbmc7XG4gICAgdGhpcy5fd2Vic2l0ZSA9IGNvbmZpZy53ZWJzaXRlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY2NlbGVyYXRpb25fc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjZWxlcmF0aW9uU3RhdHVzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFjY2VsZXJhdGlvblN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2VsZXJhdGlvbl9zdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2VsZXJhdGlvblN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjZWxlcmF0aW9uU3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZWxlcmF0aW9uU3RhdHVzKCkge1xuICAgIHRoaXMuX2FjY2VsZXJhdGlvblN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZWxlcmF0aW9uU3RhdHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2VsZXJhdGlvblN0YXR1c1xuICB9XG5cbiAgLy8gYWNsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjbD86IHN0cmluZztcbiAgcHVibGljIGdldCBhY2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjbCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FjbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjbCgpIHtcbiAgICB0aGlzLl9hY2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2xcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYnVja2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldCgpIHtcbiAgICB0aGlzLl9idWNrZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRcbiAgfVxuXG4gIC8vIGJ1Y2tldF9kb21haW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldERvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfZG9tYWluX25hbWUnKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0UHJlZml4Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGJ1Y2tldFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldFByZWZpeCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2J1Y2tldFByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldFByZWZpeCgpIHtcbiAgICB0aGlzLl9idWNrZXRQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldFByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRQcmVmaXhcbiAgfVxuXG4gIC8vIGJ1Y2tldF9yZWdpb25hbF9kb21haW5fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldFJlZ2lvbmFsRG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9yZWdpb25hbF9kb21haW5fbmFtZScpO1xuICB9XG5cbiAgLy8gZm9yY2VfZGVzdHJveSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JjZURlc3Ryb3k/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGZvcmNlRGVzdHJveSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3JjZV9kZXN0cm95Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmb3JjZURlc3Ryb3kodmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fZm9yY2VEZXN0cm95ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9yY2VEZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvcmNlRGVzdHJveSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9yY2VEZXN0cm95SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlRGVzdHJveVxuICB9XG5cbiAgLy8gaG9zdGVkX3pvbmVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3N0ZWRab25lSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaG9zdGVkWm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdGVkX3pvbmVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3RlZFpvbmVJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdGVkWm9uZUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdGVkWm9uZUlkKCkge1xuICAgIHRoaXMuX2hvc3RlZFpvbmVJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdGVkWm9uZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RlZFpvbmVJZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHBvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb2xpY3k/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb2xpY3kodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9wb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb2xpY3koKSB7XG4gICAgdGhpcy5fcG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9saWN5XG4gIH1cblxuICAvLyByZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpb24nKTtcbiAgfVxuXG4gIC8vIHJlcXVlc3RfcGF5ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0UGF5ZXI/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVxdWVzdFBheWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVxdWVzdF9wYXllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWVzdFBheWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXF1ZXN0UGF5ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1ZXN0UGF5ZXIoKSB7XG4gICAgdGhpcy5fcmVxdWVzdFBheWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1ZXN0UGF5ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFBheWVyXG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTsgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbFxuICB9XG5cbiAgLy8gd2Vic2l0ZV9kb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWJzaXRlRG9tYWluPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHdlYnNpdGVEb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWJzaXRlX2RvbWFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2Vic2l0ZURvbWFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2Vic2l0ZURvbWFpbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdlYnNpdGVEb21haW4oKSB7XG4gICAgdGhpcy5fd2Vic2l0ZURvbWFpbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2Vic2l0ZURvbWFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93ZWJzaXRlRG9tYWluXG4gIH1cblxuICAvLyB3ZWJzaXRlX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2Vic2l0ZUVuZHBvaW50Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHdlYnNpdGVFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dlYnNpdGVfZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdlYnNpdGVFbmRwb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2Vic2l0ZUVuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vic2l0ZUVuZHBvaW50KCkge1xuICAgIHRoaXMuX3dlYnNpdGVFbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2Vic2l0ZUVuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYnNpdGVFbmRwb2ludFxuICB9XG5cbiAgLy8gY29yc19ydWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcnNSdWxlPzogUzNCdWNrZXRDb3JzUnVsZVtdO1xuICBwdWJsaWMgZ2V0IGNvcnNSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvcnNfcnVsZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcnNSdWxlKHZhbHVlOiBTM0J1Y2tldENvcnNSdWxlW10gKSB7XG4gICAgdGhpcy5fY29yc1J1bGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3JzUnVsZSgpIHtcbiAgICB0aGlzLl9jb3JzUnVsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29yc1J1bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29yc1J1bGVcbiAgfVxuXG4gIC8vIGdyYW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dyYW50PzogUzNCdWNrZXRHcmFudFtdO1xuICBwdWJsaWMgZ2V0IGdyYW50KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dyYW50JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZ3JhbnQodmFsdWU6IFMzQnVja2V0R3JhbnRbXSApIHtcbiAgICB0aGlzLl9ncmFudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdyYW50KCkge1xuICAgIHRoaXMuX2dyYW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncmFudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ncmFudFxuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX3J1bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGlmZWN5Y2xlUnVsZT86IFMzQnVja2V0TGlmZWN5Y2xlUnVsZVtdO1xuICBwdWJsaWMgZ2V0IGxpZmVjeWNsZVJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbGlmZWN5Y2xlX3J1bGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsaWZlY3ljbGVSdWxlKHZhbHVlOiBTM0J1Y2tldExpZmVjeWNsZVJ1bGVbXSApIHtcbiAgICB0aGlzLl9saWZlY3ljbGVSdWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGlmZWN5Y2xlUnVsZSgpIHtcbiAgICB0aGlzLl9saWZlY3ljbGVSdWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVSdWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpZmVjeWNsZVJ1bGVcbiAgfVxuXG4gIC8vIGxvZ2dpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nZ2luZz86IFMzQnVja2V0TG9nZ2luZ1tdO1xuICBwdWJsaWMgZ2V0IGxvZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nZ2luZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ2dpbmcodmFsdWU6IFMzQnVja2V0TG9nZ2luZ1tdICkge1xuICAgIHRoaXMuX2xvZ2dpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dnaW5nKCkge1xuICAgIHRoaXMuX2xvZ2dpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ1xuICB9XG5cbiAgLy8gb2JqZWN0X2xvY2tfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vYmplY3RMb2NrQ29uZmlndXJhdGlvbj86IFMzQnVja2V0T2JqZWN0TG9ja0NvbmZpZ3VyYXRpb25bXTtcbiAgcHVibGljIGdldCBvYmplY3RMb2NrQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvYmplY3RfbG9ja19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb2JqZWN0TG9ja0NvbmZpZ3VyYXRpb24odmFsdWU6IFMzQnVja2V0T2JqZWN0TG9ja0NvbmZpZ3VyYXRpb25bXSApIHtcbiAgICB0aGlzLl9vYmplY3RMb2NrQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9iamVjdExvY2tDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX29iamVjdExvY2tDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvYmplY3RMb2NrQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vYmplY3RMb2NrQ29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gcmVwbGljYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24/OiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbltdO1xuICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXBsaWNhdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwbGljYXRpb25Db25maWd1cmF0aW9uKHZhbHVlOiBTM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbltdICkge1xuICAgIHRoaXMuX3JlcGxpY2F0aW9uQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIHNlcnZlcl9zaWRlX2VuY3J5cHRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/OiBTM0J1Y2tldFNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbltdO1xuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IFMzQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uW10gKSB7XG4gICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gdmVyc2lvbmluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJzaW9uaW5nPzogUzNCdWNrZXRWZXJzaW9uaW5nW107XG4gIHB1YmxpYyBnZXQgdmVyc2lvbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2ZXJzaW9uaW5nJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdmVyc2lvbmluZyh2YWx1ZTogUzNCdWNrZXRWZXJzaW9uaW5nW10gKSB7XG4gICAgdGhpcy5fdmVyc2lvbmluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcnNpb25pbmcoKSB7XG4gICAgdGhpcy5fdmVyc2lvbmluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbmluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uaW5nXG4gIH1cblxuICAvLyB3ZWJzaXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dlYnNpdGU/OiBTM0J1Y2tldFdlYnNpdGVbXTtcbiAgcHVibGljIGdldCB3ZWJzaXRlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3dlYnNpdGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWJzaXRlKHZhbHVlOiBTM0J1Y2tldFdlYnNpdGVbXSApIHtcbiAgICB0aGlzLl93ZWJzaXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vic2l0ZSgpIHtcbiAgICB0aGlzLl93ZWJzaXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWJzaXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYnNpdGVcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjZWxlcmF0aW9uX3N0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWNjZWxlcmF0aW9uU3RhdHVzKSxcbiAgICAgIGFjbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWNsKSxcbiAgICAgIGJ1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVja2V0KSxcbiAgICAgIGJ1Y2tldF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1Y2tldFByZWZpeCksXG4gICAgICBmb3JjZV9kZXN0cm95OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZm9yY2VEZXN0cm95KSxcbiAgICAgIGhvc3RlZF96b25lX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ob3N0ZWRab25lSWQpLFxuICAgICAgcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wb2xpY3kpLFxuICAgICAgcmVxdWVzdF9wYXllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVxdWVzdFBheWVyKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgd2Vic2l0ZV9kb21haW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dlYnNpdGVEb21haW4pLFxuICAgICAgd2Vic2l0ZV9lbmRwb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fd2Vic2l0ZUVuZHBvaW50KSxcbiAgICAgIGNvcnNfcnVsZTogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldENvcnNSdWxlVG9UZXJyYWZvcm0pKHRoaXMuX2NvcnNSdWxlKSxcbiAgICAgIGdyYW50OiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0R3JhbnRUb1RlcnJhZm9ybSkodGhpcy5fZ3JhbnQpLFxuICAgICAgbGlmZWN5Y2xlX3J1bGU6IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRMaWZlY3ljbGVSdWxlVG9UZXJyYWZvcm0pKHRoaXMuX2xpZmVjeWNsZVJ1bGUpLFxuICAgICAgbG9nZ2luZzogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldExvZ2dpbmdUb1RlcnJhZm9ybSkodGhpcy5fbG9nZ2luZyksXG4gICAgICBvYmplY3RfbG9ja19jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0T2JqZWN0TG9ja0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSkodGhpcy5fb2JqZWN0TG9ja0NvbmZpZ3VyYXRpb24pLFxuICAgICAgcmVwbGljYXRpb25fY29uZmlndXJhdGlvbjogY2RrdGYubGlzdE1hcHBlcihzM0J1Y2tldFJlcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9yZXBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgICAgc2VydmVyX3NpZGVfZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0U2VydmVyU2lkZUVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgICB2ZXJzaW9uaW5nOiBjZGt0Zi5saXN0TWFwcGVyKHMzQnVja2V0VmVyc2lvbmluZ1RvVGVycmFmb3JtKSh0aGlzLl92ZXJzaW9uaW5nKSxcbiAgICAgIHdlYnNpdGU6IGNka3RmLmxpc3RNYXBwZXIoczNCdWNrZXRXZWJzaXRlVG9UZXJyYWZvcm0pKHRoaXMuX3dlYnNpdGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==