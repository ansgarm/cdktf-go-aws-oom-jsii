"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontDistribution = exports.CloudfrontDistributionTrustedSigners = exports.CloudfrontDistributionTrustedSignersItems = exports.CloudfrontDistributionTrustedKeyGroups = exports.CloudfrontDistributionTrustedKeyGroupsItems = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class CloudfrontDistributionTrustedKeyGroupsItems extends cdktf.ComplexComputedList {
    // key_group_id - computed: true, optional: false, required: false
    get keyGroupId() {
        return this.getStringAttribute('key_group_id');
    }
    // key_pair_ids - computed: true, optional: false, required: false
    get keyPairIds() {
        return this.getListAttribute('key_pair_ids');
    }
}
exports.CloudfrontDistributionTrustedKeyGroupsItems = CloudfrontDistributionTrustedKeyGroupsItems;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedKeyGroupsItems[_a] = { fqn: "hashicorp_aws.CloudfrontDistributionTrustedKeyGroupsItems", version: "0.0.0" };
class CloudfrontDistributionTrustedKeyGroups extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // items - computed: true, optional: false, required: false
    get items() {
        return this.interpolationForAttribute('items');
    }
}
exports.CloudfrontDistributionTrustedKeyGroups = CloudfrontDistributionTrustedKeyGroups;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedKeyGroups[_b] = { fqn: "hashicorp_aws.CloudfrontDistributionTrustedKeyGroups", version: "0.0.0" };
class CloudfrontDistributionTrustedSignersItems extends cdktf.ComplexComputedList {
    // aws_account_number - computed: true, optional: false, required: false
    get awsAccountNumber() {
        return this.getStringAttribute('aws_account_number');
    }
    // key_pair_ids - computed: true, optional: false, required: false
    get keyPairIds() {
        return this.getListAttribute('key_pair_ids');
    }
}
exports.CloudfrontDistributionTrustedSignersItems = CloudfrontDistributionTrustedSignersItems;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedSignersItems[_c] = { fqn: "hashicorp_aws.CloudfrontDistributionTrustedSignersItems", version: "0.0.0" };
class CloudfrontDistributionTrustedSigners extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // items - computed: true, optional: false, required: false
    get items() {
        return this.interpolationForAttribute('items');
    }
}
exports.CloudfrontDistributionTrustedSigners = CloudfrontDistributionTrustedSigners;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedSigners[_d] = { fqn: "hashicorp_aws.CloudfrontDistributionTrustedSigners", version: "0.0.0" };
function cloudfrontDistributionCustomErrorResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_caching_min_ttl: cdktf.numberToTerraform(struct.errorCachingMinTtl),
        error_code: cdktf.numberToTerraform(struct.errorCode),
        response_code: cdktf.numberToTerraform(struct.responseCode),
        response_page_path: cdktf.stringToTerraform(struct.responsePagePath),
    };
}
function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform)(struct.cookies),
    };
}
function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
    };
}
function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform)(struct.forwardedValues),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation),
    };
}
function cloudfrontDistributionLoggingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        include_cookies: cdktf.booleanToTerraform(struct.includeCookies),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform)(struct.cookies),
    };
}
function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
    };
}
function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        path_pattern: cdktf.stringToTerraform(struct.pathPattern),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform)(struct.forwardedValues),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation),
    };
}
function cloudfrontDistributionOriginCustomHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_port: cdktf.numberToTerraform(struct.httpPort),
        https_port: cdktf.numberToTerraform(struct.httpsPort),
        origin_keepalive_timeout: cdktf.numberToTerraform(struct.originKeepaliveTimeout),
        origin_protocol_policy: cdktf.stringToTerraform(struct.originProtocolPolicy),
        origin_read_timeout: cdktf.numberToTerraform(struct.originReadTimeout),
        origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.originSslProtocols),
    };
}
function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_access_identity: cdktf.stringToTerraform(struct.originAccessIdentity),
    };
}
function cloudfrontDistributionOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain_name: cdktf.stringToTerraform(struct.domainName),
        origin_id: cdktf.stringToTerraform(struct.originId),
        origin_path: cdktf.stringToTerraform(struct.originPath),
        custom_header: cdktf.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform)(struct.customHeader),
        custom_origin_config: cdktf.listMapper(cloudfrontDistributionOriginCustomOriginConfigToTerraform)(struct.customOriginConfig),
        s3_origin_config: cdktf.listMapper(cloudfrontDistributionOriginS3OriginConfigToTerraform)(struct.s3OriginConfig),
    };
}
function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        status_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct.statusCodes),
    };
}
function cloudfrontDistributionOriginGroupMemberToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
    };
}
function cloudfrontDistributionOriginGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
        failover_criteria: cdktf.listMapper(cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform)(struct.failoverCriteria),
        member: cdktf.listMapper(cloudfrontDistributionOriginGroupMemberToTerraform)(struct.member),
    };
}
function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        locations: cdktf.listMapper(cdktf.stringToTerraform)(struct.locations),
        restriction_type: cdktf.stringToTerraform(struct.restrictionType),
    };
}
function cloudfrontDistributionRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        geo_restriction: cdktf.listMapper(cloudfrontDistributionRestrictionsGeoRestrictionToTerraform)(struct.geoRestriction),
    };
}
function cloudfrontDistributionViewerCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm_certificate_arn: cdktf.stringToTerraform(struct.acmCertificateArn),
        cloudfront_default_certificate: cdktf.booleanToTerraform(struct.cloudfrontDefaultCertificate),
        iam_certificate_id: cdktf.stringToTerraform(struct.iamCertificateId),
        minimum_protocol_version: cdktf.stringToTerraform(struct.minimumProtocolVersion),
        ssl_support_method: cdktf.stringToTerraform(struct.sslSupportMethod),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}.
 */
class CloudfrontDistribution extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_distribution',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._aliases = config.aliases;
        this._comment = config.comment;
        this._defaultRootObject = config.defaultRootObject;
        this._enabled = config.enabled;
        this._httpVersion = config.httpVersion;
        this._isIpv6Enabled = config.isIpv6Enabled;
        this._priceClass = config.priceClass;
        this._retainOnDelete = config.retainOnDelete;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._waitForDeployment = config.waitForDeployment;
        this._webAclId = config.webAclId;
        this._customErrorResponse = config.customErrorResponse;
        this._defaultCacheBehavior = config.defaultCacheBehavior;
        this._loggingConfig = config.loggingConfig;
        this._orderedCacheBehavior = config.orderedCacheBehavior;
        this._origin = config.origin;
        this._originGroup = config.originGroup;
        this._restrictions = config.restrictions;
        this._viewerCertificate = config.viewerCertificate;
    }
    get aliases() {
        return this.getListAttribute('aliases');
    }
    set aliases(value) {
        this._aliases = value;
    }
    resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasesInput() {
        return this._aliases;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // caller_reference - computed: true, optional: false, required: false
    get callerReference() {
        return this.getStringAttribute('caller_reference');
    }
    get comment() {
        return this.getStringAttribute('comment');
    }
    set comment(value) {
        this._comment = value;
    }
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentInput() {
        return this._comment;
    }
    get defaultRootObject() {
        return this.getStringAttribute('default_root_object');
    }
    set defaultRootObject(value) {
        this._defaultRootObject = value;
    }
    resetDefaultRootObject() {
        this._defaultRootObject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultRootObjectInput() {
        return this._defaultRootObject;
    }
    // domain_name - computed: true, optional: false, required: false
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // hosted_zone_id - computed: true, optional: false, required: false
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    get httpVersion() {
        return this.getStringAttribute('http_version');
    }
    set httpVersion(value) {
        this._httpVersion = value;
    }
    resetHttpVersion() {
        this._httpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpVersionInput() {
        return this._httpVersion;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // in_progress_validation_batches - computed: true, optional: false, required: false
    get inProgressValidationBatches() {
        return this.getNumberAttribute('in_progress_validation_batches');
    }
    get isIpv6Enabled() {
        return this.getBooleanAttribute('is_ipv6_enabled');
    }
    set isIpv6Enabled(value) {
        this._isIpv6Enabled = value;
    }
    resetIsIpv6Enabled() {
        this._isIpv6Enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isIpv6EnabledInput() {
        return this._isIpv6Enabled;
    }
    // last_modified_time - computed: true, optional: false, required: false
    get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }
    get priceClass() {
        return this.getStringAttribute('price_class');
    }
    set priceClass(value) {
        this._priceClass = value;
    }
    resetPriceClass() {
        this._priceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priceClassInput() {
        return this._priceClass;
    }
    get retainOnDelete() {
        return this.getBooleanAttribute('retain_on_delete');
    }
    set retainOnDelete(value) {
        this._retainOnDelete = value;
    }
    resetRetainOnDelete() {
        this._retainOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retainOnDeleteInput() {
        return this._retainOnDelete;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    // trusted_key_groups - computed: true, optional: false, required: false
    trustedKeyGroups(index) {
        return new CloudfrontDistributionTrustedKeyGroups(this, 'trusted_key_groups', index);
    }
    // trusted_signers - computed: true, optional: false, required: false
    trustedSigners(index) {
        return new CloudfrontDistributionTrustedSigners(this, 'trusted_signers', index);
    }
    get waitForDeployment() {
        return this.getBooleanAttribute('wait_for_deployment');
    }
    set waitForDeployment(value) {
        this._waitForDeployment = value;
    }
    resetWaitForDeployment() {
        this._waitForDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForDeploymentInput() {
        return this._waitForDeployment;
    }
    get webAclId() {
        return this.getStringAttribute('web_acl_id');
    }
    set webAclId(value) {
        this._webAclId = value;
    }
    resetWebAclId() {
        this._webAclId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webAclIdInput() {
        return this._webAclId;
    }
    get customErrorResponse() {
        return this.interpolationForAttribute('custom_error_response');
    }
    set customErrorResponse(value) {
        this._customErrorResponse = value;
    }
    resetCustomErrorResponse() {
        this._customErrorResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customErrorResponseInput() {
        return this._customErrorResponse;
    }
    get defaultCacheBehavior() {
        return this.interpolationForAttribute('default_cache_behavior');
    }
    set defaultCacheBehavior(value) {
        this._defaultCacheBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultCacheBehaviorInput() {
        return this._defaultCacheBehavior;
    }
    get loggingConfig() {
        return this.interpolationForAttribute('logging_config');
    }
    set loggingConfig(value) {
        this._loggingConfig = value;
    }
    resetLoggingConfig() {
        this._loggingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingConfigInput() {
        return this._loggingConfig;
    }
    get orderedCacheBehavior() {
        return this.interpolationForAttribute('ordered_cache_behavior');
    }
    set orderedCacheBehavior(value) {
        this._orderedCacheBehavior = value;
    }
    resetOrderedCacheBehavior() {
        this._orderedCacheBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderedCacheBehaviorInput() {
        return this._orderedCacheBehavior;
    }
    get origin() {
        return this.interpolationForAttribute('origin');
    }
    set origin(value) {
        this._origin = value;
    }
    // Temporarily expose input value. Use with caution.
    get originInput() {
        return this._origin;
    }
    get originGroup() {
        return this.interpolationForAttribute('origin_group');
    }
    set originGroup(value) {
        this._originGroup = value;
    }
    resetOriginGroup() {
        this._originGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originGroupInput() {
        return this._originGroup;
    }
    get restrictions() {
        return this.interpolationForAttribute('restrictions');
    }
    set restrictions(value) {
        this._restrictions = value;
    }
    // Temporarily expose input value. Use with caution.
    get restrictionsInput() {
        return this._restrictions;
    }
    get viewerCertificate() {
        return this.interpolationForAttribute('viewer_certificate');
    }
    set viewerCertificate(value) {
        this._viewerCertificate = value;
    }
    // Temporarily expose input value. Use with caution.
    get viewerCertificateInput() {
        return this._viewerCertificate;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
            comment: cdktf.stringToTerraform(this._comment),
            default_root_object: cdktf.stringToTerraform(this._defaultRootObject),
            enabled: cdktf.booleanToTerraform(this._enabled),
            http_version: cdktf.stringToTerraform(this._httpVersion),
            is_ipv6_enabled: cdktf.booleanToTerraform(this._isIpv6Enabled),
            price_class: cdktf.stringToTerraform(this._priceClass),
            retain_on_delete: cdktf.booleanToTerraform(this._retainOnDelete),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
            web_acl_id: cdktf.stringToTerraform(this._webAclId),
            custom_error_response: cdktf.listMapper(cloudfrontDistributionCustomErrorResponseToTerraform)(this._customErrorResponse),
            default_cache_behavior: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorToTerraform)(this._defaultCacheBehavior),
            logging_config: cdktf.listMapper(cloudfrontDistributionLoggingConfigToTerraform)(this._loggingConfig),
            ordered_cache_behavior: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorToTerraform)(this._orderedCacheBehavior),
            origin: cdktf.listMapper(cloudfrontDistributionOriginToTerraform)(this._origin),
            origin_group: cdktf.listMapper(cloudfrontDistributionOriginGroupToTerraform)(this._originGroup),
            restrictions: cdktf.listMapper(cloudfrontDistributionRestrictionsToTerraform)(this._restrictions),
            viewer_certificate: cdktf.listMapper(cloudfrontDistributionViewerCertificateToTerraform)(this._viewerCertificate),
        };
    }
}
exports.CloudfrontDistribution = CloudfrontDistribution;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontDistribution[_e] = { fqn: "hashicorp_aws.CloudfrontDistribution", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1kaXN0cmlidXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZGZyb250LWRpc3RyaWJ1dGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQXNHL0IsTUFBYSwyQ0FBNEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXhGLGtFQUFrRTtJQUNsRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7QUFWSCxrR0FXQzs7O0FBQ0QsTUFBYSxzQ0FBdUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5GLDZEQUE2RDtJQUM3RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQVEsQ0FBQztJQUN4RCxDQUFDOztBQVZILHdGQVdDOzs7QUFDRCxNQUFhLHlDQUEwQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdEYsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7QUFWSCw4RkFXQzs7O0FBQ0QsTUFBYSxvQ0FBcUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWpGLDZEQUE2RDtJQUM3RCxJQUFXLE9B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Q0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDdEUsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ25ELHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDeEgsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzSCxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDckcsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzSCxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0UsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNENBQTRDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQy9GLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNqRyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2xILENBQUM7SUFDSixDQUFDOztBQXJiSCx3REFzYkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvY2xvdWRmcm9udF9kaXN0cmlidXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsaWFzZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0Um9vdE9iamVjdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cFZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXNJcHY2RW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaWNlQ2xhc3M/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRhaW5PbkRlbGV0ZT86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3YWl0Rm9yRGVwbG95bWVudD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWJBY2xJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tRXJyb3JSZXNwb25zZT86IENsb3VkZnJvbnREaXN0cmlidXRpb25DdXN0b21FcnJvclJlc3BvbnNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRDYWNoZUJlaGF2aW9yOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nZ2luZ0NvbmZpZz86IENsb3VkZnJvbnREaXN0cmlidXRpb25Mb2dnaW5nQ29uZmlnW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yZGVyZWRDYWNoZUJlaGF2aW9yPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpbjogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5Hcm91cD86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXN0cmljdGlvbnM6IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlld2VyQ2VydGlmaWNhdGU6IENsb3VkZnJvbnREaXN0cmlidXRpb25WaWV3ZXJDZXJ0aWZpY2F0ZVtdO1xufVxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnREaXN0cmlidXRpb25UcnVzdGVkS2V5R3JvdXBzSXRlbXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5X2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyBrZXlfcGFpcl9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlQYWlySWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2tleV9wYWlyX2lkcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblRydXN0ZWRLZXlHcm91cHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2l0ZW1zJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblRydXN0ZWRTaWduZXJzSXRlbXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhd3NfYWNjb3VudF9udW1iZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NBY2NvdW50TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdzX2FjY291bnRfbnVtYmVyJyk7XG4gIH1cblxuICAvLyBrZXlfcGFpcl9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlQYWlySWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2tleV9wYWlyX2lkcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblRydXN0ZWRTaWduZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpdGVtcycpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uQ3VzdG9tRXJyb3JSZXNwb25zZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXJyb3JDYWNoaW5nTWluVHRsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXJyb3JDb2RlOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZUNvZGU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VQYWdlUGF0aD86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbkN1c3RvbUVycm9yUmVzcG9uc2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uQ3VzdG9tRXJyb3JSZXNwb25zZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlcnJvcl9jYWNoaW5nX21pbl90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JDYWNoaW5nTWluVHRsKSxcbiAgICBlcnJvcl9jb2RlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmVycm9yQ29kZSksXG4gICAgcmVzcG9uc2VfY29kZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZUNvZGUpLFxuICAgIHJlc3BvbnNlX3BhZ2VfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZVBhZ2VQYXRoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9yd2FyZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3aGl0ZWxpc3RlZE5hbWVzPzogc3RyaW5nW107XG59XG5cbmZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZvcndhcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9yd2FyZCksXG4gICAgd2hpdGVsaXN0ZWRfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEud2hpdGVsaXN0ZWROYW1lcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVycz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHF1ZXJ5U3RyaW5nOiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWVyeVN0cmluZ0NhY2hlS2V5cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb29raWVzOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzW107XG59XG5cbmZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWRlcnMpLFxuICAgIHF1ZXJ5X3N0cmluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlTdHJpbmcpLFxuICAgIHF1ZXJ5X3N0cmluZ19jYWNoZV9rZXlzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nQ2FjaGVLZXlzKSxcbiAgICBjb29raWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5jb29raWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXZlbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZUJvZHk/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhQXJuOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXZlbnRUeXBlKSxcbiAgICBpbmNsdWRlX2JvZHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVCb2R5KSxcbiAgICBsYW1iZGFfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93ZWRNZXRob2RzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYWNoZVBvbGljeUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYWNoZWRNZXRob2RzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcHJlc3M/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0VHRsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmllbGRMZXZlbEVuY3J5cHRpb25JZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pblR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5SZXF1ZXN0UG9saWN5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlYWx0aW1lTG9nQ29uZmlnQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21vb3RoU3RyZWFtaW5nPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldE9yaWdpbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3RlZEtleUdyb3Vwcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0ZWRTaWduZXJzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aWV3ZXJQcm90b2NvbFBvbGljeTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3J3YXJkZWRWYWx1ZXM/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbj86IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25bXTtcbn1cblxuZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsbG93ZWRfbWV0aG9kczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hbGxvd2VkTWV0aG9kcyksXG4gICAgY2FjaGVfcG9saWN5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhY2hlUG9saWN5SWQpLFxuICAgIGNhY2hlZF9tZXRob2RzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNhY2hlZE1ldGhvZHMpLFxuICAgIGNvbXByZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzcyksXG4gICAgZGVmYXVsdF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFR0bCksXG4gICAgZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWVsZExldmVsRW5jcnlwdGlvbklkKSxcbiAgICBtYXhfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFR0bCksXG4gICAgbWluX3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5UdGwpLFxuICAgIG9yaWdpbl9yZXF1ZXN0X3BvbGljeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5SZXF1ZXN0UG9saWN5SWQpLFxuICAgIHJlYWx0aW1lX2xvZ19jb25maWdfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlYWx0aW1lTG9nQ29uZmlnQXJuKSxcbiAgICBzbW9vdGhfc3RyZWFtaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zbW9vdGhTdHJlYW1pbmcpLFxuICAgIHRhcmdldF9vcmlnaW5faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0T3JpZ2luSWQpLFxuICAgIHRydXN0ZWRfa2V5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50cnVzdGVkS2V5R3JvdXBzKSxcbiAgICB0cnVzdGVkX3NpZ25lcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudHJ1c3RlZFNpZ25lcnMpLFxuICAgIHZpZXdlcl9wcm90b2NvbF9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlld2VyUHJvdG9jb2xQb2xpY3kpLFxuICAgIGZvcndhcmRlZF92YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZm9yd2FyZGVkVmFsdWVzKSxcbiAgICBsYW1iZGFfZnVuY3Rpb25fYXNzb2NpYXRpb246IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkxvZ2dpbmdDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVDb29raWVzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25Mb2dnaW5nQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkxvZ2dpbmdDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldCksXG4gICAgaW5jbHVkZV9jb29raWVzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQ29va2llcyksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvcndhcmQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2hpdGVsaXN0ZWROYW1lcz86IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmb3J3YXJkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcndhcmQpLFxuICAgIHdoaXRlbGlzdGVkX25hbWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLndoaXRlbGlzdGVkTmFtZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWRlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWVyeVN0cmluZzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlTdHJpbmdDYWNoZUtleXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29va2llczogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llc1tdO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaGVhZGVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5oZWFkZXJzKSxcbiAgICBxdWVyeV9zdHJpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nKSxcbiAgICBxdWVyeV9zdHJpbmdfY2FjaGVfa2V5czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5xdWVyeVN0cmluZ0NhY2hlS2V5cyksXG4gICAgY29va2llczogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29va2llcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVCb2R5PzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYUFybjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBldmVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50VHlwZSksXG4gICAgaW5jbHVkZV9ib2R5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQm9keSksXG4gICAgbGFtYmRhX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd2VkTWV0aG9kczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVQb2xpY3lJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVkTWV0aG9kczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXByZXNzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpZWxkTGV2ZWxFbmNyeXB0aW9uSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhUdGw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5UdGw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luUmVxdWVzdFBvbGljeUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhdGhQYXR0ZXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlYWx0aW1lTG9nQ29uZmlnQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21vb3RoU3RyZWFtaW5nPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldE9yaWdpbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3RlZEtleUdyb3Vwcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0ZWRTaWduZXJzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aWV3ZXJQcm90b2NvbFBvbGljeTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3J3YXJkZWRWYWx1ZXM/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbj86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25bXTtcbn1cblxuZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsbG93ZWRfbWV0aG9kczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hbGxvd2VkTWV0aG9kcyksXG4gICAgY2FjaGVfcG9saWN5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhY2hlUG9saWN5SWQpLFxuICAgIGNhY2hlZF9tZXRob2RzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNhY2hlZE1ldGhvZHMpLFxuICAgIGNvbXByZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzcyksXG4gICAgZGVmYXVsdF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGVmYXVsdFR0bCksXG4gICAgZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWVsZExldmVsRW5jcnlwdGlvbklkKSxcbiAgICBtYXhfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFR0bCksXG4gICAgbWluX3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5UdGwpLFxuICAgIG9yaWdpbl9yZXF1ZXN0X3BvbGljeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5SZXF1ZXN0UG9saWN5SWQpLFxuICAgIHBhdGhfcGF0dGVybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXRoUGF0dGVybiksXG4gICAgcmVhbHRpbWVfbG9nX2NvbmZpZ19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVhbHRpbWVMb2dDb25maWdBcm4pLFxuICAgIHNtb290aF9zdHJlYW1pbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNtb290aFN0cmVhbWluZyksXG4gICAgdGFyZ2V0X29yaWdpbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRPcmlnaW5JZCksXG4gICAgdHJ1c3RlZF9rZXlfZ3JvdXBzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRydXN0ZWRLZXlHcm91cHMpLFxuICAgIHRydXN0ZWRfc2lnbmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50cnVzdGVkU2lnbmVycyksXG4gICAgdmlld2VyX3Byb3RvY29sX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aWV3ZXJQcm90b2NvbFBvbGljeSksXG4gICAgZm9yd2FyZGVkX3ZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5mb3J3YXJkZWRWYWx1ZXMpLFxuICAgIGxhbWJkYV9mdW5jdGlvbl9hc3NvY2lhdGlvbjogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEubGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbUhlYWRlclRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5DdXN0b21IZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tT3JpZ2luQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwUG9ydDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cHNQb3J0OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luS2VlcGFsaXZlVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpblByb3RvY29sUG9saWN5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5SZWFkVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luU3NsUHJvdG9jb2xzOiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbU9yaWdpbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5DdXN0b21PcmlnaW5Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaHR0cF9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBQb3J0KSxcbiAgICBodHRwc19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBzUG9ydCksXG4gICAgb3JpZ2luX2tlZXBhbGl2ZV90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbktlZXBhbGl2ZVRpbWVvdXQpLFxuICAgIG9yaWdpbl9wcm90b2NvbF9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luUHJvdG9jb2xQb2xpY3kpLFxuICAgIG9yaWdpbl9yZWFkX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luUmVhZFRpbWVvdXQpLFxuICAgIG9yaWdpbl9zc2xfcHJvdG9jb2xzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLm9yaWdpblNzbFByb3RvY29scyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luUzNPcmlnaW5Db25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luQWNjZXNzSWRlbnRpdHk6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpblMzT3JpZ2luQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpblMzT3JpZ2luQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG9yaWdpbl9hY2Nlc3NfaWRlbnRpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luQWNjZXNzSWRlbnRpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5JZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5QYXRoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21IZWFkZXI/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tSGVhZGVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbU9yaWdpbkNvbmZpZz86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5DdXN0b21PcmlnaW5Db25maWdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNPcmlnaW5Db25maWc/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luUzNPcmlnaW5Db25maWdbXTtcbn1cblxuZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpblRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW4pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluTmFtZSksXG4gICAgb3JpZ2luX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbklkKSxcbiAgICBvcmlnaW5fcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5QYXRoKSxcbiAgICBjdXN0b21faGVhZGVyOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5DdXN0b21IZWFkZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5jdXN0b21IZWFkZXIpLFxuICAgIGN1c3RvbV9vcmlnaW5fY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5DdXN0b21PcmlnaW5Db25maWdUb1RlcnJhZm9ybSkoc3RydWN0IS5jdXN0b21PcmlnaW5Db25maWcpLFxuICAgIHMzX29yaWdpbl9jb25maWc6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpblMzT3JpZ2luQ29uZmlnVG9UZXJyYWZvcm0pKHN0cnVjdCEuczNPcmlnaW5Db25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwRmFpbG92ZXJDcml0ZXJpYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzQ29kZXM6IG51bWJlcltdO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBGYWlsb3ZlckNyaXRlcmlhVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwRmFpbG92ZXJDcml0ZXJpYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNfY29kZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RhdHVzQ29kZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwTWVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5JZDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBNZW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBNZW1iZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb3JpZ2luX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbklkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmFpbG92ZXJDcml0ZXJpYTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwRmFpbG92ZXJDcml0ZXJpYVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZW1iZXI6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cE1lbWJlcltdO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb3JpZ2luX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbklkKSxcbiAgICBmYWlsb3Zlcl9jcml0ZXJpYTogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBGYWlsb3ZlckNyaXRlcmlhVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmFpbG92ZXJDcml0ZXJpYSksXG4gICAgbWVtYmVyOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cE1lbWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLm1lbWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zR2VvUmVzdHJpY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvY2F0aW9ucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdHJpY3Rpb25UeXBlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubG9jYXRpb25zKSxcbiAgICByZXN0cmljdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3RyaWN0aW9uVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2VvUmVzdHJpY3Rpb246IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbltdO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBnZW9fcmVzdHJpY3Rpb246IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9uc0dlb1Jlc3RyaWN0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuZ2VvUmVzdHJpY3Rpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblZpZXdlckNlcnRpZmljYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjbUNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3VkZnJvbnREZWZhdWx0Q2VydGlmaWNhdGU/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbUNlcnRpZmljYXRlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluaW11bVByb3RvY29sVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2xTdXBwb3J0TWV0aG9kPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uVmlld2VyQ2VydGlmaWNhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uVmlld2VyQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNtX2NlcnRpZmljYXRlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY21DZXJ0aWZpY2F0ZUFybiksXG4gICAgY2xvdWRmcm9udF9kZWZhdWx0X2NlcnRpZmljYXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZGZyb250RGVmYXVsdENlcnRpZmljYXRlKSxcbiAgICBpYW1fY2VydGlmaWNhdGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWFtQ2VydGlmaWNhdGVJZCksXG4gICAgbWluaW11bV9wcm90b2NvbF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbmltdW1Qcm90b2NvbFZlcnNpb24pLFxuICAgIHNzbF9zdXBwb3J0X21ldGhvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc2xTdXBwb3J0TWV0aG9kKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnREaXN0cmlidXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRmcm9udF9kaXN0cmlidXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWxpYXNlcyA9IGNvbmZpZy5hbGlhc2VzO1xuICAgIHRoaXMuX2NvbW1lbnQgPSBjb25maWcuY29tbWVudDtcbiAgICB0aGlzLl9kZWZhdWx0Um9vdE9iamVjdCA9IGNvbmZpZy5kZWZhdWx0Um9vdE9iamVjdDtcbiAgICB0aGlzLl9lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG4gICAgdGhpcy5faHR0cFZlcnNpb24gPSBjb25maWcuaHR0cFZlcnNpb247XG4gICAgdGhpcy5faXNJcHY2RW5hYmxlZCA9IGNvbmZpZy5pc0lwdjZFbmFibGVkO1xuICAgIHRoaXMuX3ByaWNlQ2xhc3MgPSBjb25maWcucHJpY2VDbGFzcztcbiAgICB0aGlzLl9yZXRhaW5PbkRlbGV0ZSA9IGNvbmZpZy5yZXRhaW5PbkRlbGV0ZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3dhaXRGb3JEZXBsb3ltZW50ID0gY29uZmlnLndhaXRGb3JEZXBsb3ltZW50O1xuICAgIHRoaXMuX3dlYkFjbElkID0gY29uZmlnLndlYkFjbElkO1xuICAgIHRoaXMuX2N1c3RvbUVycm9yUmVzcG9uc2UgPSBjb25maWcuY3VzdG9tRXJyb3JSZXNwb25zZTtcbiAgICB0aGlzLl9kZWZhdWx0Q2FjaGVCZWhhdmlvciA9IGNvbmZpZy5kZWZhdWx0Q2FjaGVCZWhhdmlvcjtcbiAgICB0aGlzLl9sb2dnaW5nQ29uZmlnID0gY29uZmlnLmxvZ2dpbmdDb25maWc7XG4gICAgdGhpcy5fb3JkZXJlZENhY2hlQmVoYXZpb3IgPSBjb25maWcub3JkZXJlZENhY2hlQmVoYXZpb3I7XG4gICAgdGhpcy5fb3JpZ2luID0gY29uZmlnLm9yaWdpbjtcbiAgICB0aGlzLl9vcmlnaW5Hcm91cCA9IGNvbmZpZy5vcmlnaW5Hcm91cDtcbiAgICB0aGlzLl9yZXN0cmljdGlvbnMgPSBjb25maWcucmVzdHJpY3Rpb25zO1xuICAgIHRoaXMuX3ZpZXdlckNlcnRpZmljYXRlID0gY29uZmlnLnZpZXdlckNlcnRpZmljYXRlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGlhc2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsaWFzZXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBhbGlhc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FsaWFzZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsaWFzZXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX2FsaWFzZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGlhc2VzKCkge1xuICAgIHRoaXMuX2FsaWFzZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsaWFzZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpYXNlc1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjYWxsZXJfcmVmZXJlbmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FsbGVyUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2FsbGVyX3JlZmVyZW5jZScpO1xuICB9XG5cbiAgLy8gY29tbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21tZW50Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tZW50KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbW1lbnQoKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50XG4gIH1cblxuICAvLyBkZWZhdWx0X3Jvb3Rfb2JqZWN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRSb290T2JqZWN0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRSb290T2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9yb290X29iamVjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFJvb3RPYmplY3QodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZWZhdWx0Um9vdE9iamVjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSb290T2JqZWN0KCkge1xuICAgIHRoaXMuX2RlZmF1bHRSb290T2JqZWN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0Um9vdE9iamVjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Um9vdE9iamVjdFxuICB9XG5cbiAgLy8gZG9tYWluX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5hYmxlZDogYm9vbGVhbjtcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxuICB9XG5cbiAgLy8gZXRhZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV0YWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldGFnJyk7XG4gIH1cblxuICAvLyBob3N0ZWRfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RlZFpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RlZF96b25lX2lkJyk7XG4gIH1cblxuICAvLyBodHRwX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaHR0cFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBWZXJzaW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faHR0cFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwVmVyc2lvbigpIHtcbiAgICB0aGlzLl9odHRwVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFZlcnNpb25cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbl9wcm9ncmVzc192YWxpZGF0aW9uX2JhdGNoZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpblByb2dyZXNzVmFsaWRhdGlvbkJhdGNoZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbl9wcm9ncmVzc192YWxpZGF0aW9uX2JhdGNoZXMnKTtcbiAgfVxuXG4gIC8vIGlzX2lwdjZfZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pc0lwdjZFbmFibGVkPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBpc0lwdjZFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2lzX2lwdjZfZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXNJcHY2RW5hYmxlZCh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9pc0lwdjZFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXNJcHY2RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0lwdjZFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpc0lwdjZFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSXB2NkVuYWJsZWRcbiAgfVxuXG4gIC8vIGxhc3RfbW9kaWZpZWRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RNb2RpZmllZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X21vZGlmaWVkX3RpbWUnKTtcbiAgfVxuXG4gIC8vIHByaWNlX2NsYXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByaWNlQ2xhc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcHJpY2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaWNlX2NsYXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmljZUNsYXNzKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fcHJpY2VDbGFzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByaWNlQ2xhc3MoKSB7XG4gICAgdGhpcy5fcHJpY2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpY2VDbGFzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmljZUNsYXNzXG4gIH1cblxuICAvLyByZXRhaW5fb25fZGVsZXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldGFpbk9uRGVsZXRlPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCByZXRhaW5PbkRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXRhaW5fb25fZGVsZXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXRhaW5PbkRlbGV0ZSh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9yZXRhaW5PbkRlbGV0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldGFpbk9uRGVsZXRlKCkge1xuICAgIHRoaXMuX3JldGFpbk9uRGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXRhaW5PbkRlbGV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRhaW5PbkRlbGV0ZVxuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTsgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbFxuICB9XG5cbiAgLy8gdHJ1c3RlZF9rZXlfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyB0cnVzdGVkS2V5R3JvdXBzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IENsb3VkZnJvbnREaXN0cmlidXRpb25UcnVzdGVkS2V5R3JvdXBzKHRoaXMsICd0cnVzdGVkX2tleV9ncm91cHMnLCBpbmRleCk7XG4gIH1cblxuICAvLyB0cnVzdGVkX3NpZ25lcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHRydXN0ZWRTaWduZXJzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IENsb3VkZnJvbnREaXN0cmlidXRpb25UcnVzdGVkU2lnbmVycyh0aGlzLCAndHJ1c3RlZF9zaWduZXJzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gd2FpdF9mb3JfZGVwbG95bWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YWl0Rm9yRGVwbG95bWVudD86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgd2FpdEZvckRlcGxveW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnd2FpdF9mb3JfZGVwbG95bWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2FpdEZvckRlcGxveW1lbnQodmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fd2FpdEZvckRlcGxveW1lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYWl0Rm9yRGVwbG95bWVudCgpIHtcbiAgICB0aGlzLl93YWl0Rm9yRGVwbG95bWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdEZvckRlcGxveW1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdEZvckRlcGxveW1lbnRcbiAgfVxuXG4gIC8vIHdlYl9hY2xfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2ViQWNsSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgd2ViQWNsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWJfYWNsX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWJBY2xJZCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3dlYkFjbElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2ViQWNsSWQoKSB7XG4gICAgdGhpcy5fd2ViQWNsSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlYkFjbElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlYkFjbElkXG4gIH1cblxuICAvLyBjdXN0b21fZXJyb3JfcmVzcG9uc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tRXJyb3JSZXNwb25zZT86IENsb3VkZnJvbnREaXN0cmlidXRpb25DdXN0b21FcnJvclJlc3BvbnNlW107XG4gIHB1YmxpYyBnZXQgY3VzdG9tRXJyb3JSZXNwb25zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjdXN0b21fZXJyb3JfcmVzcG9uc2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21FcnJvclJlc3BvbnNlKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uQ3VzdG9tRXJyb3JSZXNwb25zZVtdICkge1xuICAgIHRoaXMuX2N1c3RvbUVycm9yUmVzcG9uc2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21FcnJvclJlc3BvbnNlKCkge1xuICAgIHRoaXMuX2N1c3RvbUVycm9yUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUVycm9yUmVzcG9uc2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRXJyb3JSZXNwb25zZVxuICB9XG5cbiAgLy8gZGVmYXVsdF9jYWNoZV9iZWhhdmlvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZhdWx0Q2FjaGVCZWhhdmlvcjogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yW107XG4gIHB1YmxpYyBnZXQgZGVmYXVsdENhY2hlQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVmYXVsdF9jYWNoZV9iZWhhdmlvcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRDYWNoZUJlaGF2aW9yKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JbXSkge1xuICAgIHRoaXMuX2RlZmF1bHRDYWNoZUJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRDYWNoZUJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDYWNoZUJlaGF2aW9yXG4gIH1cblxuICAvLyBsb2dnaW5nX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dnaW5nQ29uZmlnPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkxvZ2dpbmdDb25maWdbXTtcbiAgcHVibGljIGdldCBsb2dnaW5nQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ2dpbmdfY29uZmlnJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nZ2luZ0NvbmZpZyh2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkxvZ2dpbmdDb25maWdbXSApIHtcbiAgICB0aGlzLl9sb2dnaW5nQ29uZmlnID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nZ2luZ0NvbmZpZygpIHtcbiAgICB0aGlzLl9sb2dnaW5nQ29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dnaW5nQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdDb25maWdcbiAgfVxuXG4gIC8vIG9yZGVyZWRfY2FjaGVfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3JkZXJlZENhY2hlQmVoYXZpb3I/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JbXTtcbiAgcHVibGljIGdldCBvcmRlcmVkQ2FjaGVCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvcmRlcmVkX2NhY2hlX2JlaGF2aW9yJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3JkZXJlZENhY2hlQmVoYXZpb3IodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvcltdICkge1xuICAgIHRoaXMuX29yZGVyZWRDYWNoZUJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3JkZXJlZENhY2hlQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5fb3JkZXJlZENhY2hlQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yZGVyZWRDYWNoZUJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyZWRDYWNoZUJlaGF2aW9yXG4gIH1cblxuICAvLyBvcmlnaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3JpZ2luOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luW107XG4gIHB1YmxpYyBnZXQgb3JpZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yaWdpbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpbih2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbltdKSB7XG4gICAgdGhpcy5fb3JpZ2luID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yaWdpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5cbiAgfVxuXG4gIC8vIG9yaWdpbl9ncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vcmlnaW5Hcm91cD86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cFtdO1xuICBwdWJsaWMgZ2V0IG9yaWdpbkdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yaWdpbl9ncm91cCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpbkdyb3VwKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBbXSApIHtcbiAgICB0aGlzLl9vcmlnaW5Hcm91cCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9yaWdpbkdyb3VwKCkge1xuICAgIHRoaXMuX29yaWdpbkdyb3VwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmlnaW5Hcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5Hcm91cFxuICB9XG5cbiAgLy8gcmVzdHJpY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc3RyaWN0aW9uczogQ2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IHJlc3RyaWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXN0cmljdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0cmljdGlvbnModmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNbXSkge1xuICAgIHRoaXMuX3Jlc3RyaWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXN0cmljdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdHJpY3Rpb25zXG4gIH1cblxuICAvLyB2aWV3ZXJfY2VydGlmaWNhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmlld2VyQ2VydGlmaWNhdGU6IENsb3VkZnJvbnREaXN0cmlidXRpb25WaWV3ZXJDZXJ0aWZpY2F0ZVtdO1xuICBwdWJsaWMgZ2V0IHZpZXdlckNlcnRpZmljYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZpZXdlcl9jZXJ0aWZpY2F0ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHZpZXdlckNlcnRpZmljYXRlKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uVmlld2VyQ2VydGlmaWNhdGVbXSkge1xuICAgIHRoaXMuX3ZpZXdlckNlcnRpZmljYXRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpZXdlckNlcnRpZmljYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdlckNlcnRpZmljYXRlXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsaWFzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2FsaWFzZXMpLFxuICAgICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29tbWVudCksXG4gICAgICBkZWZhdWx0X3Jvb3Rfb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0Um9vdE9iamVjdCksXG4gICAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlZCksXG4gICAgICBodHRwX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2h0dHBWZXJzaW9uKSxcbiAgICAgIGlzX2lwdjZfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2lzSXB2NkVuYWJsZWQpLFxuICAgICAgcHJpY2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByaWNlQ2xhc3MpLFxuICAgICAgcmV0YWluX29uX2RlbGV0ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3JldGFpbk9uRGVsZXRlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgd2FpdF9mb3JfZGVwbG95bWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3dhaXRGb3JEZXBsb3ltZW50KSxcbiAgICAgIHdlYl9hY2xfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dlYkFjbElkKSxcbiAgICAgIGN1c3RvbV9lcnJvcl9yZXNwb25zZTogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uQ3VzdG9tRXJyb3JSZXNwb25zZVRvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21FcnJvclJlc3BvbnNlKSxcbiAgICAgIGRlZmF1bHRfY2FjaGVfYmVoYXZpb3I6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yVG9UZXJyYWZvcm0pKHRoaXMuX2RlZmF1bHRDYWNoZUJlaGF2aW9yKSxcbiAgICAgIGxvZ2dpbmdfY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25Mb2dnaW5nQ29uZmlnVG9UZXJyYWZvcm0pKHRoaXMuX2xvZ2dpbmdDb25maWcpLFxuICAgICAgb3JkZXJlZF9jYWNoZV9iZWhhdmlvcjogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JUb1RlcnJhZm9ybSkodGhpcy5fb3JkZXJlZENhY2hlQmVoYXZpb3IpLFxuICAgICAgb3JpZ2luOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Ub1RlcnJhZm9ybSkodGhpcy5fb3JpZ2luKSxcbiAgICAgIG9yaWdpbl9ncm91cDogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBUb1RlcnJhZm9ybSkodGhpcy5fb3JpZ2luR3JvdXApLFxuICAgICAgcmVzdHJpY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNUb1RlcnJhZm9ybSkodGhpcy5fcmVzdHJpY3Rpb25zKSxcbiAgICAgIHZpZXdlcl9jZXJ0aWZpY2F0ZTogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uVmlld2VyQ2VydGlmaWNhdGVUb1RlcnJhZm9ybSkodGhpcy5fdmlld2VyQ2VydGlmaWNhdGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==