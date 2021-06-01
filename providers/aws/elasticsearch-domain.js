"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticsearchDomain = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        master_user_arn: cdktf.stringToTerraform(struct.masterUserArn),
        master_user_name: cdktf.stringToTerraform(struct.masterUserName),
        master_user_password: cdktf.stringToTerraform(struct.masterUserPassword),
    };
}
function elasticsearchDomainAdvancedSecurityOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        internal_user_database_enabled: cdktf.booleanToTerraform(struct.internalUserDatabaseEnabled),
        master_user_options: cdktf.listMapper(elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform)(struct.masterUserOptions),
    };
}
function elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone_count: cdktf.numberToTerraform(struct.availabilityZoneCount),
    };
}
function elasticsearchDomainClusterConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dedicated_master_count: cdktf.numberToTerraform(struct.dedicatedMasterCount),
        dedicated_master_enabled: cdktf.booleanToTerraform(struct.dedicatedMasterEnabled),
        dedicated_master_type: cdktf.stringToTerraform(struct.dedicatedMasterType),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        warm_count: cdktf.numberToTerraform(struct.warmCount),
        warm_enabled: cdktf.booleanToTerraform(struct.warmEnabled),
        warm_type: cdktf.stringToTerraform(struct.warmType),
        zone_awareness_enabled: cdktf.booleanToTerraform(struct.zoneAwarenessEnabled),
        zone_awareness_config: cdktf.listMapper(elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform)(struct.zoneAwarenessConfig),
    };
}
function elasticsearchDomainCognitoOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        identity_pool_id: cdktf.stringToTerraform(struct.identityPoolId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        user_pool_id: cdktf.stringToTerraform(struct.userPoolId),
    };
}
function elasticsearchDomainDomainEndpointOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_endpoint: cdktf.stringToTerraform(struct.customEndpoint),
        custom_endpoint_certificate_arn: cdktf.stringToTerraform(struct.customEndpointCertificateArn),
        custom_endpoint_enabled: cdktf.booleanToTerraform(struct.customEndpointEnabled),
        enforce_https: cdktf.booleanToTerraform(struct.enforceHttps),
        tls_security_policy: cdktf.stringToTerraform(struct.tlsSecurityPolicy),
    };
}
function elasticsearchDomainEbsOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ebs_enabled: cdktf.booleanToTerraform(struct.ebsEnabled),
        iops: cdktf.numberToTerraform(struct.iops),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
function elasticsearchDomainEncryptAtRestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
    };
}
function elasticsearchDomainLogPublishingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_arn: cdktf.stringToTerraform(struct.cloudwatchLogGroupArn),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_type: cdktf.stringToTerraform(struct.logType),
    };
}
function elasticsearchDomainNodeToNodeEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function elasticsearchDomainSnapshotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        automated_snapshot_start_hour: cdktf.numberToTerraform(struct.automatedSnapshotStartHour),
    };
}
function elasticsearchDomainTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        update: cdktf.stringToTerraform(struct.update),
    };
}
function elasticsearchDomainVpcOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain}.
 */
class ElasticsearchDomain extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticsearch_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accessPolicies = config.accessPolicies;
        this._advancedOptions = config.advancedOptions;
        this._domainName = config.domainName;
        this._elasticsearchVersion = config.elasticsearchVersion;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._advancedSecurityOptions = config.advancedSecurityOptions;
        this._clusterConfig = config.clusterConfig;
        this._cognitoOptions = config.cognitoOptions;
        this._domainEndpointOptions = config.domainEndpointOptions;
        this._ebsOptions = config.ebsOptions;
        this._encryptAtRest = config.encryptAtRest;
        this._logPublishingOptions = config.logPublishingOptions;
        this._nodeToNodeEncryption = config.nodeToNodeEncryption;
        this._snapshotOptions = config.snapshotOptions;
        this._timeouts = config.timeouts;
        this._vpcOptions = config.vpcOptions;
    }
    get accessPolicies() {
        return this.getStringAttribute('access_policies');
    }
    set accessPolicies(value) {
        this._accessPolicies = value;
    }
    resetAccessPolicies() {
        this._accessPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessPoliciesInput() {
        return this._accessPolicies;
    }
    get advancedOptions() {
        return this.interpolationForAttribute('advanced_options'); // Getting the computed value is not yet implemented
    }
    set advancedOptions(value) {
        this._advancedOptions = value;
    }
    resetAdvancedOptions() {
        this._advancedOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get advancedOptionsInput() {
        return this._advancedOptions;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // domain_id - computed: true, optional: false, required: false
    get domainId() {
        return this.getStringAttribute('domain_id');
    }
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    get elasticsearchVersion() {
        return this.getStringAttribute('elasticsearch_version');
    }
    set elasticsearchVersion(value) {
        this._elasticsearchVersion = value;
    }
    resetElasticsearchVersion() {
        this._elasticsearchVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticsearchVersionInput() {
        return this._elasticsearchVersion;
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kibana_endpoint - computed: true, optional: false, required: false
    get kibanaEndpoint() {
        return this.getStringAttribute('kibana_endpoint');
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
    get advancedSecurityOptions() {
        return this.interpolationForAttribute('advanced_security_options');
    }
    set advancedSecurityOptions(value) {
        this._advancedSecurityOptions = value;
    }
    resetAdvancedSecurityOptions() {
        this._advancedSecurityOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get advancedSecurityOptionsInput() {
        return this._advancedSecurityOptions;
    }
    get clusterConfig() {
        return this.interpolationForAttribute('cluster_config');
    }
    set clusterConfig(value) {
        this._clusterConfig = value;
    }
    resetClusterConfig() {
        this._clusterConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterConfigInput() {
        return this._clusterConfig;
    }
    get cognitoOptions() {
        return this.interpolationForAttribute('cognito_options');
    }
    set cognitoOptions(value) {
        this._cognitoOptions = value;
    }
    resetCognitoOptions() {
        this._cognitoOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cognitoOptionsInput() {
        return this._cognitoOptions;
    }
    get domainEndpointOptions() {
        return this.interpolationForAttribute('domain_endpoint_options');
    }
    set domainEndpointOptions(value) {
        this._domainEndpointOptions = value;
    }
    resetDomainEndpointOptions() {
        this._domainEndpointOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainEndpointOptionsInput() {
        return this._domainEndpointOptions;
    }
    get ebsOptions() {
        return this.interpolationForAttribute('ebs_options');
    }
    set ebsOptions(value) {
        this._ebsOptions = value;
    }
    resetEbsOptions() {
        this._ebsOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsOptionsInput() {
        return this._ebsOptions;
    }
    get encryptAtRest() {
        return this.interpolationForAttribute('encrypt_at_rest');
    }
    set encryptAtRest(value) {
        this._encryptAtRest = value;
    }
    resetEncryptAtRest() {
        this._encryptAtRest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptAtRestInput() {
        return this._encryptAtRest;
    }
    get logPublishingOptions() {
        return this.interpolationForAttribute('log_publishing_options');
    }
    set logPublishingOptions(value) {
        this._logPublishingOptions = value;
    }
    resetLogPublishingOptions() {
        this._logPublishingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logPublishingOptionsInput() {
        return this._logPublishingOptions;
    }
    get nodeToNodeEncryption() {
        return this.interpolationForAttribute('node_to_node_encryption');
    }
    set nodeToNodeEncryption(value) {
        this._nodeToNodeEncryption = value;
    }
    resetNodeToNodeEncryption() {
        this._nodeToNodeEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nodeToNodeEncryptionInput() {
        return this._nodeToNodeEncryption;
    }
    get snapshotOptions() {
        return this.interpolationForAttribute('snapshot_options');
    }
    set snapshotOptions(value) {
        this._snapshotOptions = value;
    }
    resetSnapshotOptions() {
        this._snapshotOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotOptionsInput() {
        return this._snapshotOptions;
    }
    get timeouts() {
        return this.interpolationForAttribute('timeouts');
    }
    set timeouts(value) {
        this._timeouts = value;
    }
    resetTimeouts() {
        this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts;
    }
    get vpcOptions() {
        return this.interpolationForAttribute('vpc_options');
    }
    set vpcOptions(value) {
        this._vpcOptions = value;
    }
    resetVpcOptions() {
        this._vpcOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcOptionsInput() {
        return this._vpcOptions;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_policies: cdktf.stringToTerraform(this._accessPolicies),
            advanced_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._advancedOptions),
            domain_name: cdktf.stringToTerraform(this._domainName),
            elasticsearch_version: cdktf.stringToTerraform(this._elasticsearchVersion),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            advanced_security_options: cdktf.listMapper(elasticsearchDomainAdvancedSecurityOptionsToTerraform)(this._advancedSecurityOptions),
            cluster_config: cdktf.listMapper(elasticsearchDomainClusterConfigToTerraform)(this._clusterConfig),
            cognito_options: cdktf.listMapper(elasticsearchDomainCognitoOptionsToTerraform)(this._cognitoOptions),
            domain_endpoint_options: cdktf.listMapper(elasticsearchDomainDomainEndpointOptionsToTerraform)(this._domainEndpointOptions),
            ebs_options: cdktf.listMapper(elasticsearchDomainEbsOptionsToTerraform)(this._ebsOptions),
            encrypt_at_rest: cdktf.listMapper(elasticsearchDomainEncryptAtRestToTerraform)(this._encryptAtRest),
            log_publishing_options: cdktf.listMapper(elasticsearchDomainLogPublishingOptionsToTerraform)(this._logPublishingOptions),
            node_to_node_encryption: cdktf.listMapper(elasticsearchDomainNodeToNodeEncryptionToTerraform)(this._nodeToNodeEncryption),
            snapshot_options: cdktf.listMapper(elasticsearchDomainSnapshotOptionsToTerraform)(this._snapshotOptions),
            timeouts: elasticsearchDomainTimeoutsToTerraform(this._timeouts),
            vpc_options: cdktf.listMapper(elasticsearchDomainVpcOptionsToTerraform)(this._vpcOptions),
        };
    }
}
exports.ElasticsearchDomain = ElasticsearchDomain;
_a = JSII_RTTI_SYMBOL_1;
ElasticsearchDomain[_a] = { fqn: "hashicorp_aws.ElasticsearchDomain", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpY3NlYXJjaC1kb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbGFzdGljc2VhcmNoLWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQStHL0IsU0FBUyxzRUFBc0UsQ0FBQyxNQUFvRTtJQUNsSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUMvRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNqRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO0tBQzFFLENBQUE7QUFDSCxDQUFDO0FBbUJELFNBQVMscURBQXFELENBQUMsTUFBbUQ7SUFDaEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsOEJBQThCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUM3RixtQkFBbUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHNFQUFzRSxDQUFDLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO0tBQ3pJLENBQUE7QUFDSCxDQUFDO0FBU0QsU0FBUyw4REFBOEQsQ0FBQyxNQUE0RDtJQUNsSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQs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LENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3hILHVCQUF1QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsa0RBQWtELENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDekgsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4RyxRQUFRLEVBQUUsc0NBQXNDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDMUYsQ0FBQztJQUNKLENBQUM7O0FBN1dILGtEQThXQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9lbGFzdGljc2VhcmNoX2RvbWFpbi5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY2Vzc1BvbGljaWVzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWR2YW5jZWRPcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVsYXN0aWNzZWFyY2hWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZHZhbmNlZFNlY3VyaXR5T3B0aW9ucz86IEVsYXN0aWNzZWFyY2hEb21haW5BZHZhbmNlZFNlY3VyaXR5T3B0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyQ29uZmlnPzogRWxhc3RpY3NlYXJjaERvbWFpbkNsdXN0ZXJDb25maWdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29nbml0b09wdGlvbnM/OiBFbGFzdGljc2VhcmNoRG9tYWluQ29nbml0b09wdGlvbnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluRW5kcG9pbnRPcHRpb25zPzogRWxhc3RpY3NlYXJjaERvbWFpbkRvbWFpbkVuZHBvaW50T3B0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNPcHRpb25zPzogRWxhc3RpY3NlYXJjaERvbWFpbkVic09wdGlvbnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdEF0UmVzdD86IEVsYXN0aWNzZWFyY2hEb21haW5FbmNyeXB0QXRSZXN0W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ1B1Ymxpc2hpbmdPcHRpb25zPzogRWxhc3RpY3NlYXJjaERvbWFpbkxvZ1B1Ymxpc2hpbmdPcHRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vZGVUb05vZGVFbmNyeXB0aW9uPzogRWxhc3RpY3NlYXJjaERvbWFpbk5vZGVUb05vZGVFbmNyeXB0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNuYXBzaG90T3B0aW9ucz86IEVsYXN0aWNzZWFyY2hEb21haW5TbmFwc2hvdE9wdGlvbnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBFbGFzdGljc2VhcmNoRG9tYWluVGltZW91dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY09wdGlvbnM/OiBFbGFzdGljc2VhcmNoRG9tYWluVnBjT3B0aW9uc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljc2VhcmNoRG9tYWluQWR2YW5jZWRTZWN1cml0eU9wdGlvbnNNYXN0ZXJVc2VyT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFzdGVyVXNlckFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hc3RlclVzZXJOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXN0ZXJVc2VyUGFzc3dvcmQ/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVsYXN0aWNzZWFyY2hEb21haW5BZHZhbmNlZFNlY3VyaXR5T3B0aW9uc01hc3RlclVzZXJPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3NlYXJjaERvbWFpbkFkdmFuY2VkU2VjdXJpdHlPcHRpb25zTWFzdGVyVXNlck9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWFzdGVyX3VzZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hc3RlclVzZXJBcm4pLFxuICAgIG1hc3Rlcl91c2VyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFzdGVyVXNlck5hbWUpLFxuICAgIG1hc3Rlcl91c2VyX3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hc3RlclVzZXJQYXNzd29yZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljc2VhcmNoRG9tYWluQWR2YW5jZWRTZWN1cml0eU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnRlcm5hbFVzZXJEYXRhYmFzZUVuYWJsZWQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXN0ZXJVc2VyT3B0aW9ucz86IEVsYXN0aWNzZWFyY2hEb21haW5BZHZhbmNlZFNlY3VyaXR5T3B0aW9uc01hc3RlclVzZXJPcHRpb25zW107XG59XG5cbmZ1bmN0aW9uIGVsYXN0aWNzZWFyY2hEb21haW5BZHZhbmNlZFNlY3VyaXR5T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5BZHZhbmNlZFNlY3VyaXR5T3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBpbnRlcm5hbF91c2VyX2RhdGFiYXNlX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmludGVybmFsVXNlckRhdGFiYXNlRW5hYmxlZCksXG4gICAgbWFzdGVyX3VzZXJfb3B0aW9uczogY2RrdGYubGlzdE1hcHBlcihlbGFzdGljc2VhcmNoRG9tYWluQWR2YW5jZWRTZWN1cml0eU9wdGlvbnNNYXN0ZXJVc2VyT3B0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1hc3RlclVzZXJPcHRpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWNzZWFyY2hEb21haW5DbHVzdGVyQ29uZmlnWm9uZUF3YXJlbmVzc0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVpvbmVDb3VudD86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZWxhc3RpY3NlYXJjaERvbWFpbkNsdXN0ZXJDb25maWdab25lQXdhcmVuZXNzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3NlYXJjaERvbWFpbkNsdXN0ZXJDb25maWdab25lQXdhcmVuZXNzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF2YWlsYWJpbGl0eV96b25lX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmVDb3VudCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljc2VhcmNoRG9tYWluQ2x1c3RlckNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWRpY2F0ZWRNYXN0ZXJDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWRpY2F0ZWRNYXN0ZXJFbmFibGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWRpY2F0ZWRNYXN0ZXJUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZUNvdW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2FybUNvdW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdhcm1FbmFibGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3YXJtVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHpvbmVBd2FyZW5lc3NFbmFibGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgem9uZUF3YXJlbmVzc0NvbmZpZz86IEVsYXN0aWNzZWFyY2hEb21haW5DbHVzdGVyQ29uZmlnWm9uZUF3YXJlbmVzc0NvbmZpZ1tdO1xufVxuXG5mdW5jdGlvbiBlbGFzdGljc2VhcmNoRG9tYWluQ2x1c3RlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5DbHVzdGVyQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlZGljYXRlZF9tYXN0ZXJfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGVkaWNhdGVkTWFzdGVyQ291bnQpLFxuICAgIGRlZGljYXRlZF9tYXN0ZXJfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGVkaWNhdGVkTWFzdGVyRW5hYmxlZCksXG4gICAgZGVkaWNhdGVkX21hc3Rlcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZGljYXRlZE1hc3RlclR5cGUpLFxuICAgIGluc3RhbmNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlQ291bnQpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICB3YXJtX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcm1Db3VudCksXG4gICAgd2FybV9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS53YXJtRW5hYmxlZCksXG4gICAgd2FybV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndhcm1UeXBlKSxcbiAgICB6b25lX2F3YXJlbmVzc19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS56b25lQXdhcmVuZXNzRW5hYmxlZCksXG4gICAgem9uZV9hd2FyZW5lc3NfY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWNzZWFyY2hEb21haW5DbHVzdGVyQ29uZmlnWm9uZUF3YXJlbmVzc0NvbmZpZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnpvbmVBd2FyZW5lc3NDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpbkNvZ25pdG9PcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWRlbnRpdHlQb29sSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJQb29sSWQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZWxhc3RpY3NlYXJjaERvbWFpbkNvZ25pdG9PcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3NlYXJjaERvbWFpbkNvZ25pdG9PcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGlkZW50aXR5X3Bvb2xfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWRlbnRpdHlQb29sSWQpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHVzZXJfcG9vbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VyUG9vbElkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWNzZWFyY2hEb21haW5Eb21haW5FbmRwb2ludE9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUVuZHBvaW50Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tRW5kcG9pbnRDZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tRW5kcG9pbnRFbmFibGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZm9yY2VIdHRwcz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHNTZWN1cml0eVBvbGljeT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZWxhc3RpY3NlYXJjaERvbWFpbkRvbWFpbkVuZHBvaW50T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5Eb21haW5FbmRwb2ludE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3VzdG9tX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbUVuZHBvaW50KSxcbiAgICBjdXN0b21fZW5kcG9pbnRfY2VydGlmaWNhdGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbUVuZHBvaW50Q2VydGlmaWNhdGVBcm4pLFxuICAgIGN1c3RvbV9lbmRwb2ludF9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21FbmRwb2ludEVuYWJsZWQpLFxuICAgIGVuZm9yY2VfaHR0cHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuZm9yY2VIdHRwcyksXG4gICAgdGxzX3NlY3VyaXR5X3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50bHNTZWN1cml0eVBvbGljeSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljc2VhcmNoRG9tYWluRWJzT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVUeXBlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBlbGFzdGljc2VhcmNoRG9tYWluRWJzT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5FYnNPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVic19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lYnNFbmFibGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgIHZvbHVtZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpbkVuY3J5cHRBdFJlc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBlbGFzdGljc2VhcmNoRG9tYWluRW5jcnlwdEF0UmVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5FbmNyeXB0QXRSZXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpbkxvZ1B1Ymxpc2hpbmdPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZHdhdGNoTG9nR3JvdXBBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dUeXBlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVsYXN0aWNzZWFyY2hEb21haW5Mb2dQdWJsaXNoaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5Mb2dQdWJsaXNoaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ0dyb3VwQXJuKSxcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWNzZWFyY2hEb21haW5Ob2RlVG9Ob2RlRW5jcnlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBlbGFzdGljc2VhcmNoRG9tYWluTm9kZVRvTm9kZUVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbGFzdGljc2VhcmNoRG9tYWluTm9kZVRvTm9kZUVuY3J5cHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljc2VhcmNoRG9tYWluU25hcHNob3RPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b21hdGVkU25hcHNob3RTdGFydEhvdXI6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZWxhc3RpY3NlYXJjaERvbWFpblNuYXBzaG90T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5TbmFwc2hvdE9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXV0b21hdGVkX3NuYXBzaG90X3N0YXJ0X2hvdXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYXV0b21hdGVkU25hcHNob3RTdGFydEhvdXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3NlYXJjaERvbWFpblRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1cGRhdGU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVsYXN0aWNzZWFyY2hEb21haW5UaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWNzZWFyY2hEb21haW5UaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWNzZWFyY2hEb21haW5WcGNPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM/OiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gZWxhc3RpY3NlYXJjaERvbWFpblZwY09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbGFzdGljc2VhcmNoRG9tYWluVnBjT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRJZHMpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRWxhc3RpY3NlYXJjaERvbWFpbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVsYXN0aWNzZWFyY2hEb21haW5Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lbGFzdGljc2VhcmNoX2RvbWFpbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hY2Nlc3NQb2xpY2llcyA9IGNvbmZpZy5hY2Nlc3NQb2xpY2llcztcbiAgICB0aGlzLl9hZHZhbmNlZE9wdGlvbnMgPSBjb25maWcuYWR2YW5jZWRPcHRpb25zO1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSBjb25maWcuZG9tYWluTmFtZTtcbiAgICB0aGlzLl9lbGFzdGljc2VhcmNoVmVyc2lvbiA9IGNvbmZpZy5lbGFzdGljc2VhcmNoVmVyc2lvbjtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2FkdmFuY2VkU2VjdXJpdHlPcHRpb25zID0gY29uZmlnLmFkdmFuY2VkU2VjdXJpdHlPcHRpb25zO1xuICAgIHRoaXMuX2NsdXN0ZXJDb25maWcgPSBjb25maWcuY2x1c3RlckNvbmZpZztcbiAgICB0aGlzLl9jb2duaXRvT3B0aW9ucyA9IGNvbmZpZy5jb2duaXRvT3B0aW9ucztcbiAgICB0aGlzLl9kb21haW5FbmRwb2ludE9wdGlvbnMgPSBjb25maWcuZG9tYWluRW5kcG9pbnRPcHRpb25zO1xuICAgIHRoaXMuX2Vic09wdGlvbnMgPSBjb25maWcuZWJzT3B0aW9ucztcbiAgICB0aGlzLl9lbmNyeXB0QXRSZXN0ID0gY29uZmlnLmVuY3J5cHRBdFJlc3Q7XG4gICAgdGhpcy5fbG9nUHVibGlzaGluZ09wdGlvbnMgPSBjb25maWcubG9nUHVibGlzaGluZ09wdGlvbnM7XG4gICAgdGhpcy5fbm9kZVRvTm9kZUVuY3J5cHRpb24gPSBjb25maWcubm9kZVRvTm9kZUVuY3J5cHRpb247XG4gICAgdGhpcy5fc25hcHNob3RPcHRpb25zID0gY29uZmlnLnNuYXBzaG90T3B0aW9ucztcbiAgICB0aGlzLl90aW1lb3V0cyA9IGNvbmZpZy50aW1lb3V0cztcbiAgICB0aGlzLl92cGNPcHRpb25zID0gY29uZmlnLnZwY09wdGlvbnM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjY2Vzc19wb2xpY2llcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1BvbGljaWVzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFjY2Vzc1BvbGljaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX3BvbGljaWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2Nlc3NQb2xpY2llcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjZXNzUG9saWNpZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NQb2xpY2llcygpIHtcbiAgICB0aGlzLl9hY2Nlc3NQb2xpY2llcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzUG9saWNpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzUG9saWNpZXNcbiAgfVxuXG4gIC8vIGFkdmFuY2VkX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZHZhbmNlZE9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgYWR2YW5jZWRPcHRpb25zKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FkdmFuY2VkX29wdGlvbnMnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IGFkdmFuY2VkT3B0aW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX2FkdmFuY2VkT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkdmFuY2VkT3B0aW9ucygpIHtcbiAgICB0aGlzLl9hZHZhbmNlZE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkdmFuY2VkT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZHZhbmNlZE9wdGlvbnNcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZG9tYWluX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9tYWluSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5faWQnKTtcbiAgfVxuXG4gIC8vIGRvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbk5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5OYW1lXG4gIH1cblxuICAvLyBlbGFzdGljc2VhcmNoX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY3NlYXJjaFZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZWxhc3RpY3NlYXJjaFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbGFzdGljc2VhcmNoX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVsYXN0aWNzZWFyY2hWZXJzaW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZWxhc3RpY3NlYXJjaFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbGFzdGljc2VhcmNoVmVyc2lvbigpIHtcbiAgICB0aGlzLl9lbGFzdGljc2VhcmNoVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY3NlYXJjaFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxhc3RpY3NlYXJjaFZlcnNpb25cbiAgfVxuXG4gIC8vIGVuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGtpYmFuYV9lbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtpYmFuYUVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2liYW5hX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTsgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbFxuICB9XG5cbiAgLy8gYWR2YW5jZWRfc2VjdXJpdHlfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZHZhbmNlZFNlY3VyaXR5T3B0aW9ucz86IEVsYXN0aWNzZWFyY2hEb21haW5BZHZhbmNlZFNlY3VyaXR5T3B0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IGFkdmFuY2VkU2VjdXJpdHlPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FkdmFuY2VkX3NlY3VyaXR5X29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhZHZhbmNlZFNlY3VyaXR5T3B0aW9ucyh2YWx1ZTogRWxhc3RpY3NlYXJjaERvbWFpbkFkdmFuY2VkU2VjdXJpdHlPcHRpb25zW10gKSB7XG4gICAgdGhpcy5fYWR2YW5jZWRTZWN1cml0eU9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZHZhbmNlZFNlY3VyaXR5T3B0aW9ucygpIHtcbiAgICB0aGlzLl9hZHZhbmNlZFNlY3VyaXR5T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWR2YW5jZWRTZWN1cml0eU9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWR2YW5jZWRTZWN1cml0eU9wdGlvbnNcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsdXN0ZXJDb25maWc/OiBFbGFzdGljc2VhcmNoRG9tYWluQ2x1c3RlckNvbmZpZ1tdO1xuICBwdWJsaWMgZ2V0IGNsdXN0ZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2x1c3Rlcl9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyQ29uZmlnKHZhbHVlOiBFbGFzdGljc2VhcmNoRG9tYWluQ2x1c3RlckNvbmZpZ1tdICkge1xuICAgIHRoaXMuX2NsdXN0ZXJDb25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbHVzdGVyQ29uZmlnKCkge1xuICAgIHRoaXMuX2NsdXN0ZXJDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlckNvbmZpZ1xuICB9XG5cbiAgLy8gY29nbml0b19vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZ25pdG9PcHRpb25zPzogRWxhc3RpY3NlYXJjaERvbWFpbkNvZ25pdG9PcHRpb25zW107XG4gIHB1YmxpYyBnZXQgY29nbml0b09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29nbml0b19vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29nbml0b09wdGlvbnModmFsdWU6IEVsYXN0aWNzZWFyY2hEb21haW5Db2duaXRvT3B0aW9uc1tdICkge1xuICAgIHRoaXMuX2NvZ25pdG9PcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29nbml0b09wdGlvbnMoKSB7XG4gICAgdGhpcy5fY29nbml0b09wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvZ25pdG9PcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZ25pdG9PcHRpb25zXG4gIH1cblxuICAvLyBkb21haW5fZW5kcG9pbnRfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb21haW5FbmRwb2ludE9wdGlvbnM/OiBFbGFzdGljc2VhcmNoRG9tYWluRG9tYWluRW5kcG9pbnRPcHRpb25zW107XG4gIHB1YmxpYyBnZXQgZG9tYWluRW5kcG9pbnRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RvbWFpbl9lbmRwb2ludF9vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluRW5kcG9pbnRPcHRpb25zKHZhbHVlOiBFbGFzdGljc2VhcmNoRG9tYWluRG9tYWluRW5kcG9pbnRPcHRpb25zW10gKSB7XG4gICAgdGhpcy5fZG9tYWluRW5kcG9pbnRPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9tYWluRW5kcG9pbnRPcHRpb25zKCkge1xuICAgIHRoaXMuX2RvbWFpbkVuZHBvaW50T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluRW5kcG9pbnRPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbkVuZHBvaW50T3B0aW9uc1xuICB9XG5cbiAgLy8gZWJzX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzT3B0aW9ucz86IEVsYXN0aWNzZWFyY2hEb21haW5FYnNPcHRpb25zW107XG4gIHB1YmxpYyBnZXQgZWJzT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlYnNfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic09wdGlvbnModmFsdWU6IEVsYXN0aWNzZWFyY2hEb21haW5FYnNPcHRpb25zW10gKSB7XG4gICAgdGhpcy5fZWJzT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic09wdGlvbnMoKSB7XG4gICAgdGhpcy5fZWJzT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWJzT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNPcHRpb25zXG4gIH1cblxuICAvLyBlbmNyeXB0X2F0X3Jlc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdEF0UmVzdD86IEVsYXN0aWNzZWFyY2hEb21haW5FbmNyeXB0QXRSZXN0W107XG4gIHB1YmxpYyBnZXQgZW5jcnlwdEF0UmVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0X2F0X3Jlc3QnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmNyeXB0QXRSZXN0KHZhbHVlOiBFbGFzdGljc2VhcmNoRG9tYWluRW5jcnlwdEF0UmVzdFtdICkge1xuICAgIHRoaXMuX2VuY3J5cHRBdFJlc3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNyeXB0QXRSZXN0KCkge1xuICAgIHRoaXMuX2VuY3J5cHRBdFJlc3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRBdFJlc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdEF0UmVzdFxuICB9XG5cbiAgLy8gbG9nX3B1Ymxpc2hpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dQdWJsaXNoaW5nT3B0aW9ucz86IEVsYXN0aWNzZWFyY2hEb21haW5Mb2dQdWJsaXNoaW5nT3B0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IGxvZ1B1Ymxpc2hpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ19wdWJsaXNoaW5nX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dQdWJsaXNoaW5nT3B0aW9ucyh2YWx1ZTogRWxhc3RpY3NlYXJjaERvbWFpbkxvZ1B1Ymxpc2hpbmdPcHRpb25zW10gKSB7XG4gICAgdGhpcy5fbG9nUHVibGlzaGluZ09wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dQdWJsaXNoaW5nT3B0aW9ucygpIHtcbiAgICB0aGlzLl9sb2dQdWJsaXNoaW5nT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nUHVibGlzaGluZ09wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nUHVibGlzaGluZ09wdGlvbnNcbiAgfVxuXG4gIC8vIG5vZGVfdG9fbm9kZV9lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vZGVUb05vZGVFbmNyeXB0aW9uPzogRWxhc3RpY3NlYXJjaERvbWFpbk5vZGVUb05vZGVFbmNyeXB0aW9uW107XG4gIHB1YmxpYyBnZXQgbm9kZVRvTm9kZUVuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbm9kZV90b19ub2RlX2VuY3J5cHRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBub2RlVG9Ob2RlRW5jcnlwdGlvbih2YWx1ZTogRWxhc3RpY3NlYXJjaERvbWFpbk5vZGVUb05vZGVFbmNyeXB0aW9uW10gKSB7XG4gICAgdGhpcy5fbm9kZVRvTm9kZUVuY3J5cHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb2RlVG9Ob2RlRW5jcnlwdGlvbigpIHtcbiAgICB0aGlzLl9ub2RlVG9Ob2RlRW5jcnlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm9kZVRvTm9kZUVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZVRvTm9kZUVuY3J5cHRpb25cbiAgfVxuXG4gIC8vIHNuYXBzaG90X29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc25hcHNob3RPcHRpb25zPzogRWxhc3RpY3NlYXJjaERvbWFpblNuYXBzaG90T3B0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IHNuYXBzaG90T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzbmFwc2hvdF9vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc25hcHNob3RPcHRpb25zKHZhbHVlOiBFbGFzdGljc2VhcmNoRG9tYWluU25hcHNob3RPcHRpb25zW10gKSB7XG4gICAgdGhpcy5fc25hcHNob3RPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U25hcHNob3RPcHRpb25zKCkge1xuICAgIHRoaXMuX3NuYXBzaG90T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25hcHNob3RPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NuYXBzaG90T3B0aW9uc1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHM/OiBFbGFzdGljc2VhcmNoRG9tYWluVGltZW91dHM7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGltZW91dHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0cyh2YWx1ZTogRWxhc3RpY3NlYXJjaERvbWFpblRpbWVvdXRzICkge1xuICAgIHRoaXMuX3RpbWVvdXRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dHMoKSB7XG4gICAgdGhpcy5fdGltZW91dHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzXG4gIH1cblxuICAvLyB2cGNfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNPcHRpb25zPzogRWxhc3RpY3NlYXJjaERvbWFpblZwY09wdGlvbnNbXTtcbiAgcHVibGljIGdldCB2cGNPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjT3B0aW9ucyh2YWx1ZTogRWxhc3RpY3NlYXJjaERvbWFpblZwY09wdGlvbnNbXSApIHtcbiAgICB0aGlzLl92cGNPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjT3B0aW9ucygpIHtcbiAgICB0aGlzLl92cGNPcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY09wdGlvbnNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjZXNzX3BvbGljaWVzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY2Nlc3NQb2xpY2llcyksXG4gICAgICBhZHZhbmNlZF9vcHRpb25zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl9hZHZhbmNlZE9wdGlvbnMpLFxuICAgICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RvbWFpbk5hbWUpLFxuICAgICAgZWxhc3RpY3NlYXJjaF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbGFzdGljc2VhcmNoVmVyc2lvbiksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGFkdmFuY2VkX3NlY3VyaXR5X29wdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZWxhc3RpY3NlYXJjaERvbWFpbkFkdmFuY2VkU2VjdXJpdHlPcHRpb25zVG9UZXJyYWZvcm0pKHRoaXMuX2FkdmFuY2VkU2VjdXJpdHlPcHRpb25zKSxcbiAgICAgIGNsdXN0ZXJfY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWNzZWFyY2hEb21haW5DbHVzdGVyQ29uZmlnVG9UZXJyYWZvcm0pKHRoaXMuX2NsdXN0ZXJDb25maWcpLFxuICAgICAgY29nbml0b19vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWNzZWFyY2hEb21haW5Db2duaXRvT3B0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl9jb2duaXRvT3B0aW9ucyksXG4gICAgICBkb21haW5fZW5kcG9pbnRfb3B0aW9uczogY2RrdGYubGlzdE1hcHBlcihlbGFzdGljc2VhcmNoRG9tYWluRG9tYWluRW5kcG9pbnRPcHRpb25zVG9UZXJyYWZvcm0pKHRoaXMuX2RvbWFpbkVuZHBvaW50T3B0aW9ucyksXG4gICAgICBlYnNfb3B0aW9uczogY2RrdGYubGlzdE1hcHBlcihlbGFzdGljc2VhcmNoRG9tYWluRWJzT3B0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl9lYnNPcHRpb25zKSxcbiAgICAgIGVuY3J5cHRfYXRfcmVzdDogY2RrdGYubGlzdE1hcHBlcihlbGFzdGljc2VhcmNoRG9tYWluRW5jcnlwdEF0UmVzdFRvVGVycmFmb3JtKSh0aGlzLl9lbmNyeXB0QXRSZXN0KSxcbiAgICAgIGxvZ19wdWJsaXNoaW5nX29wdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZWxhc3RpY3NlYXJjaERvbWFpbkxvZ1B1Ymxpc2hpbmdPcHRpb25zVG9UZXJyYWZvcm0pKHRoaXMuX2xvZ1B1Ymxpc2hpbmdPcHRpb25zKSxcbiAgICAgIG5vZGVfdG9fbm9kZV9lbmNyeXB0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWNzZWFyY2hEb21haW5Ob2RlVG9Ob2RlRW5jcnlwdGlvblRvVGVycmFmb3JtKSh0aGlzLl9ub2RlVG9Ob2RlRW5jcnlwdGlvbiksXG4gICAgICBzbmFwc2hvdF9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWNzZWFyY2hEb21haW5TbmFwc2hvdE9wdGlvbnNUb1RlcnJhZm9ybSkodGhpcy5fc25hcHNob3RPcHRpb25zKSxcbiAgICAgIHRpbWVvdXRzOiBlbGFzdGljc2VhcmNoRG9tYWluVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cyksXG4gICAgICB2cGNfb3B0aW9uczogY2RrdGYubGlzdE1hcHBlcihlbGFzdGljc2VhcmNoRG9tYWluVnBjT3B0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl92cGNPcHRpb25zKSxcbiAgICB9O1xuICB9XG59XG4iXX0=