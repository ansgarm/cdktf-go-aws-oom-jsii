"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FmsPolicy = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function fmsPolicyExcludeMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account: cdktf.listMapper(cdktf.stringToTerraform)(struct.account),
        orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct.orgunit),
    };
}
function fmsPolicyIncludeMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account: cdktf.listMapper(cdktf.stringToTerraform)(struct.account),
        orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct.orgunit),
    };
}
function fmsPolicySecurityServicePolicyDataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        managed_service_data: cdktf.stringToTerraform(struct.managedServiceData),
        type: cdktf.stringToTerraform(struct.type),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy}.
 */
class FmsPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_fms_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._deleteAllPolicyResources = config.deleteAllPolicyResources;
        this._excludeResourceTags = config.excludeResourceTags;
        this._name = config.name;
        this._remediationEnabled = config.remediationEnabled;
        this._resourceTags = config.resourceTags;
        this._resourceType = config.resourceType;
        this._resourceTypeList = config.resourceTypeList;
        this._excludeMap = config.excludeMap;
        this._includeMap = config.includeMap;
        this._securityServicePolicyData = config.securityServicePolicyData;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get deleteAllPolicyResources() {
        return this.getBooleanAttribute('delete_all_policy_resources');
    }
    set deleteAllPolicyResources(value) {
        this._deleteAllPolicyResources = value;
    }
    resetDeleteAllPolicyResources() {
        this._deleteAllPolicyResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteAllPolicyResourcesInput() {
        return this._deleteAllPolicyResources;
    }
    get excludeResourceTags() {
        return this.getBooleanAttribute('exclude_resource_tags');
    }
    set excludeResourceTags(value) {
        this._excludeResourceTags = value;
    }
    // Temporarily expose input value. Use with caution.
    get excludeResourceTagsInput() {
        return this._excludeResourceTags;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // policy_update_token - computed: true, optional: false, required: false
    get policyUpdateToken() {
        return this.getStringAttribute('policy_update_token');
    }
    get remediationEnabled() {
        return this.getBooleanAttribute('remediation_enabled');
    }
    set remediationEnabled(value) {
        this._remediationEnabled = value;
    }
    resetRemediationEnabled() {
        this._remediationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remediationEnabledInput() {
        return this._remediationEnabled;
    }
    get resourceTags() {
        return this.interpolationForAttribute('resource_tags');
    }
    set resourceTags(value) {
        this._resourceTags = value;
    }
    resetResourceTags() {
        this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTagsInput() {
        return this._resourceTags;
    }
    get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    set resourceType(value) {
        this._resourceType = value;
    }
    resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeInput() {
        return this._resourceType;
    }
    get resourceTypeList() {
        return this.getListAttribute('resource_type_list');
    }
    set resourceTypeList(value) {
        this._resourceTypeList = value;
    }
    resetResourceTypeList() {
        this._resourceTypeList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeListInput() {
        return this._resourceTypeList;
    }
    get excludeMap() {
        return this.interpolationForAttribute('exclude_map');
    }
    set excludeMap(value) {
        this._excludeMap = value;
    }
    resetExcludeMap() {
        this._excludeMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeMapInput() {
        return this._excludeMap;
    }
    get includeMap() {
        return this.interpolationForAttribute('include_map');
    }
    set includeMap(value) {
        this._includeMap = value;
    }
    resetIncludeMap() {
        this._includeMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeMapInput() {
        return this._includeMap;
    }
    get securityServicePolicyData() {
        return this.interpolationForAttribute('security_service_policy_data');
    }
    set securityServicePolicyData(value) {
        this._securityServicePolicyData = value;
    }
    // Temporarily expose input value. Use with caution.
    get securityServicePolicyDataInput() {
        return this._securityServicePolicyData;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            delete_all_policy_resources: cdktf.booleanToTerraform(this._deleteAllPolicyResources),
            exclude_resource_tags: cdktf.booleanToTerraform(this._excludeResourceTags),
            name: cdktf.stringToTerraform(this._name),
            remediation_enabled: cdktf.booleanToTerraform(this._remediationEnabled),
            resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
            resource_type: cdktf.stringToTerraform(this._resourceType),
            resource_type_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeList),
            exclude_map: cdktf.listMapper(fmsPolicyExcludeMapToTerraform)(this._excludeMap),
            include_map: cdktf.listMapper(fmsPolicyIncludeMapToTerraform)(this._includeMap),
            security_service_policy_data: cdktf.listMapper(fmsPolicySecurityServicePolicyDataToTerraform)(this._securityServicePolicyData),
        };
    }
}
exports.FmsPolicy = FmsPolicy;
_a = JSII_RTTI_SYMBOL_1;
FmsPolicy[_a] = { fqn: "hashicorp_aws.FmsPolicy", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm1zLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtcy1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUErRC9CLFNBQVMsOEJBQThCLENBQUMsTUFBNEI7SUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25FLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFhRCxTQUFTLDhCQUE4QixDQUFDLE1BQTRCO0lBQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNuRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ3BFLENBQUE7QUFDSCxDQUFDO0FBYUQsU0FBUyw2Q0FBNkMsQ0FBQyxNQUEyQztJQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7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QixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMvRSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1NBQy9ILENBQUM7SUFDSixDQUFDOztBQS9OSCw4QkFnT0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvZm1zX3BvbGljeS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRm1zUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZUFsbFBvbGljeVJlc291cmNlcz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4Y2x1ZGVSZXNvdXJjZVRhZ3M6IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlbWVkaWF0aW9uRW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VUYWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlVHlwZUxpc3Q/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4Y2x1ZGVNYXA/OiBGbXNQb2xpY3lFeGNsdWRlTWFwW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlTWFwPzogRm1zUG9saWN5SW5jbHVkZU1hcFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YTogRm1zUG9saWN5U2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBGbXNQb2xpY3lFeGNsdWRlTWFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JndW5pdD86IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBmbXNQb2xpY3lFeGNsdWRlTWFwVG9UZXJyYWZvcm0oc3RydWN0PzogRm1zUG9saWN5RXhjbHVkZU1hcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFjY291bnQpLFxuICAgIG9yZ3VuaXQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEub3JndW5pdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbXNQb2xpY3lJbmNsdWRlTWFwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50Pzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JndW5pdD86IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBmbXNQb2xpY3lJbmNsdWRlTWFwVG9UZXJyYWZvcm0oc3RydWN0PzogRm1zUG9saWN5SW5jbHVkZU1hcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFjY291bnQpLFxuICAgIG9yZ3VuaXQ6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEub3JndW5pdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hbmFnZWRTZXJ2aWNlRGF0YT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGZtc1BvbGljeVNlY3VyaXR5U2VydmljZVBvbGljeURhdGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBGbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1hbmFnZWRfc2VydmljZV9kYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hbmFnZWRTZXJ2aWNlRGF0YSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBGbXNQb2xpY3kgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBGbXNQb2xpY3lDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19mbXNfcG9saWN5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RlbGV0ZUFsbFBvbGljeVJlc291cmNlcyA9IGNvbmZpZy5kZWxldGVBbGxQb2xpY3lSZXNvdXJjZXM7XG4gICAgdGhpcy5fZXhjbHVkZVJlc291cmNlVGFncyA9IGNvbmZpZy5leGNsdWRlUmVzb3VyY2VUYWdzO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9yZW1lZGlhdGlvbkVuYWJsZWQgPSBjb25maWcucmVtZWRpYXRpb25FbmFibGVkO1xuICAgIHRoaXMuX3Jlc291cmNlVGFncyA9IGNvbmZpZy5yZXNvdXJjZVRhZ3M7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gY29uZmlnLnJlc291cmNlVHlwZTtcbiAgICB0aGlzLl9yZXNvdXJjZVR5cGVMaXN0ID0gY29uZmlnLnJlc291cmNlVHlwZUxpc3Q7XG4gICAgdGhpcy5fZXhjbHVkZU1hcCA9IGNvbmZpZy5leGNsdWRlTWFwO1xuICAgIHRoaXMuX2luY2x1ZGVNYXAgPSBjb25maWcuaW5jbHVkZU1hcDtcbiAgICB0aGlzLl9zZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhID0gY29uZmlnLnNlY3VyaXR5U2VydmljZVBvbGljeURhdGE7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGVsZXRlX2FsbF9wb2xpY3lfcmVzb3VyY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZUFsbFBvbGljeVJlc291cmNlcz86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlbGV0ZV9hbGxfcG9saWN5X3Jlc291cmNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2RlbGV0ZUFsbFBvbGljeVJlc291cmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZUFsbFBvbGljeVJlc291cmNlcygpIHtcbiAgICB0aGlzLl9kZWxldGVBbGxQb2xpY3lSZXNvdXJjZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZUFsbFBvbGljeVJlc291cmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVBbGxQb2xpY3lSZXNvdXJjZXNcbiAgfVxuXG4gIC8vIGV4Y2x1ZGVfcmVzb3VyY2VfdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9leGNsdWRlUmVzb3VyY2VUYWdzOiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVSZXNvdXJjZVRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZXhjbHVkZV9yZXNvdXJjZV90YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCBleGNsdWRlUmVzb3VyY2VUYWdzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXhjbHVkZVJlc291cmNlVGFncyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGNsdWRlUmVzb3VyY2VUYWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVSZXNvdXJjZVRhZ3NcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHBvbGljeV91cGRhdGVfdG9rZW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb2xpY3lVcGRhdGVUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvbGljeV91cGRhdGVfdG9rZW4nKTtcbiAgfVxuXG4gIC8vIHJlbWVkaWF0aW9uX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVtZWRpYXRpb25FbmFibGVkPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCByZW1lZGlhdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVtZWRpYXRpb25fZW5hYmxlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVtZWRpYXRpb25FbmFibGVkKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX3JlbWVkaWF0aW9uRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlbWVkaWF0aW9uRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9yZW1lZGlhdGlvbkVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlbWVkaWF0aW9uRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1lZGlhdGlvbkVuYWJsZWRcbiAgfVxuXG4gIC8vIHJlc291cmNlX3RhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VUYWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCByZXNvdXJjZVRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVzb3VyY2VfdGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlVGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl9yZXNvdXJjZVRhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZVRhZ3MoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUYWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUYWdzXG4gIH1cblxuICAvLyByZXNvdXJjZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzb3VyY2VUeXBlKCkge1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlVHlwZVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfdHlwZV9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb3VyY2VUeXBlTGlzdD86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncmVzb3VyY2VfdHlwZV9saXN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZVR5cGVMaXN0KHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZUxpc3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZVR5cGVMaXN0KCkge1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZUxpc3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZUxpc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUeXBlTGlzdFxuICB9XG5cbiAgLy8gZXhjbHVkZV9tYXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhjbHVkZU1hcD86IEZtc1BvbGljeUV4Y2x1ZGVNYXBbXTtcbiAgcHVibGljIGdldCBleGNsdWRlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2V4Y2x1ZGVfbWFwJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZXhjbHVkZU1hcCh2YWx1ZTogRm1zUG9saWN5RXhjbHVkZU1hcFtdICkge1xuICAgIHRoaXMuX2V4Y2x1ZGVNYXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGNsdWRlTWFwKCkge1xuICAgIHRoaXMuX2V4Y2x1ZGVNYXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVNYXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZU1hcFxuICB9XG5cbiAgLy8gaW5jbHVkZV9tYXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZU1hcD86IEZtc1BvbGljeUluY2x1ZGVNYXBbXTtcbiAgcHVibGljIGdldCBpbmNsdWRlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luY2x1ZGVfbWFwJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZU1hcCh2YWx1ZTogRm1zUG9saWN5SW5jbHVkZU1hcFtdICkge1xuICAgIHRoaXMuX2luY2x1ZGVNYXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlTWFwKCkge1xuICAgIHRoaXMuX2luY2x1ZGVNYXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVNYXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZU1hcFxuICB9XG5cbiAgLy8gc2VjdXJpdHlfc2VydmljZV9wb2xpY3lfZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhOiBGbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhW107XG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZWN1cml0eV9zZXJ2aWNlX3BvbGljeV9kYXRhJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YSh2YWx1ZTogRm1zUG9saWN5U2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YVtdKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlTZXJ2aWNlUG9saWN5RGF0YSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5U2VydmljZVBvbGljeURhdGFcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlX2FsbF9wb2xpY3lfcmVzb3VyY2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZGVsZXRlQWxsUG9saWN5UmVzb3VyY2VzKSxcbiAgICAgIGV4Y2x1ZGVfcmVzb3VyY2VfdGFnczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2V4Y2x1ZGVSZXNvdXJjZVRhZ3MpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICByZW1lZGlhdGlvbl9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcmVtZWRpYXRpb25FbmFibGVkKSxcbiAgICAgIHJlc291cmNlX3RhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3Jlc291cmNlVGFncyksXG4gICAgICByZXNvdXJjZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXNvdXJjZVR5cGUpLFxuICAgICAgcmVzb3VyY2VfdHlwZV9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9yZXNvdXJjZVR5cGVMaXN0KSxcbiAgICAgIGV4Y2x1ZGVfbWFwOiBjZGt0Zi5saXN0TWFwcGVyKGZtc1BvbGljeUV4Y2x1ZGVNYXBUb1RlcnJhZm9ybSkodGhpcy5fZXhjbHVkZU1hcCksXG4gICAgICBpbmNsdWRlX21hcDogY2RrdGYubGlzdE1hcHBlcihmbXNQb2xpY3lJbmNsdWRlTWFwVG9UZXJyYWZvcm0pKHRoaXMuX2luY2x1ZGVNYXApLFxuICAgICAgc2VjdXJpdHlfc2VydmljZV9wb2xpY3lfZGF0YTogY2RrdGYubGlzdE1hcHBlcihmbXNQb2xpY3lTZWN1cml0eVNlcnZpY2VQb2xpY3lEYXRhVG9UZXJyYWZvcm0pKHRoaXMuX3NlY3VyaXR5U2VydmljZVBvbGljeURhdGEpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==