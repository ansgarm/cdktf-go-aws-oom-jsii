"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsResourcegroupstaggingapiResources = exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList = exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails extends cdktf.ComplexComputedList {
    // compliance_status - computed: true, optional: false, required: false
    get complianceStatus() {
        return this.getBooleanAttribute('compliance_status');
    }
    // keys_with_noncompliant_values - computed: true, optional: false, required: false
    get keysWithNoncompliantValues() {
        return this.getListAttribute('keys_with_noncompliant_values');
    }
    // non_compliant_keys - computed: true, optional: false, required: false
    get nonCompliantKeys() {
        return this.getListAttribute('non_compliant_keys');
    }
}
exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails = DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails;
_a = JSII_RTTI_SYMBOL_1;
DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails[_a] = { fqn: "hashicorp_aws.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails", version: "0.0.0" };
class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList extends cdktf.ComplexComputedList {
    // compliance_details - computed: true, optional: false, required: false
    get complianceDetails() {
        return this.interpolationForAttribute('compliance_details');
    }
    // resource_arn - computed: true, optional: false, required: false
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
}
exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList = DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList;
_b = JSII_RTTI_SYMBOL_1;
DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList[_b] = { fqn: "hashicorp_aws.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList", version: "0.0.0" };
function dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources}.
 */
class DataAwsResourcegroupstaggingapiResources extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_resourcegroupstaggingapi_resources',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._excludeCompliantResources = config.excludeCompliantResources;
        this._includeComplianceDetails = config.includeComplianceDetails;
        this._resourceArnList = config.resourceArnList;
        this._resourceTypeFilters = config.resourceTypeFilters;
        this._tagFilter = config.tagFilter;
    }
    get excludeCompliantResources() {
        return this.getBooleanAttribute('exclude_compliant_resources');
    }
    set excludeCompliantResources(value) {
        this._excludeCompliantResources = value;
    }
    resetExcludeCompliantResources() {
        this._excludeCompliantResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeCompliantResourcesInput() {
        return this._excludeCompliantResources;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get includeComplianceDetails() {
        return this.getBooleanAttribute('include_compliance_details');
    }
    set includeComplianceDetails(value) {
        this._includeComplianceDetails = value;
    }
    resetIncludeComplianceDetails() {
        this._includeComplianceDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeComplianceDetailsInput() {
        return this._includeComplianceDetails;
    }
    get resourceArnList() {
        return this.getListAttribute('resource_arn_list');
    }
    set resourceArnList(value) {
        this._resourceArnList = value;
    }
    resetResourceArnList() {
        this._resourceArnList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnListInput() {
        return this._resourceArnList;
    }
    // resource_tag_mapping_list - computed: true, optional: false, required: false
    resourceTagMappingList(index) {
        return new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList(this, 'resource_tag_mapping_list', index);
    }
    get resourceTypeFilters() {
        return this.getListAttribute('resource_type_filters');
    }
    set resourceTypeFilters(value) {
        this._resourceTypeFilters = value;
    }
    resetResourceTypeFilters() {
        this._resourceTypeFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeFiltersInput() {
        return this._resourceTypeFilters;
    }
    get tagFilter() {
        return this.interpolationForAttribute('tag_filter');
    }
    set tagFilter(value) {
        this._tagFilter = value;
    }
    resetTagFilter() {
        this._tagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagFilterInput() {
        return this._tagFilter;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            exclude_compliant_resources: cdktf.booleanToTerraform(this._excludeCompliantResources),
            include_compliance_details: cdktf.booleanToTerraform(this._includeComplianceDetails),
            resource_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceArnList),
            resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeFilters),
            tag_filter: cdktf.listMapper(dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform)(this._tagFilter),
        };
    }
}
exports.DataAwsResourcegroupstaggingapiResources = DataAwsResourcegroupstaggingapiResources;
_c = JSII_RTTI_SYMBOL_1;
DataAwsResourcegroupstaggingapiResources[_c] = { fqn: "hashicorp_aws.DataAwsResourcegroupstaggingapiResources", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpLXJlc291cmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzLXJlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaS1yZXNvdXJjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUE0Qi9CLE1BQWEsK0VBQWdGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU1SCx1RUFBdUU7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsbUZBQW1GO0lBQ25GLElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHdFQUF3RTtJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBZkgsMEtBZ0JDOzs7QUFDRCxNQUFhLDhEQUErRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0csd0VBQXdFO0lBQ3hFLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFRLENBQUM7SUFDckUsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDOztBQWZILHdJQWdCQzs7O0FBWUQsU0FBUyw0REFBNEQsQ0FBQyxNQUEwRDtJQUM5SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxN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LENBQUMsZ0JBQWdCLENBQUM7WUFDbkYscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDM0YsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNERBQTRELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzVHLENBQUM7SUFDSixDQUFDOztBQXpJSCw0RkEwSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL2QvcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpX3Jlc291cmNlcy5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c1Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaVJlc291cmNlc0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhjbHVkZUNvbXBsaWFudFJlc291cmNlcz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybkxpc3Q/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlVHlwZUZpbHRlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdGaWx0ZXI/OiBEYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzVGFnRmlsdGVyW107XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c1Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaVJlc291cmNlc1Jlc291cmNlVGFnTWFwcGluZ0xpc3RDb21wbGlhbmNlRGV0YWlscyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbXBsaWFuY2Vfc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcGxpYW5jZVN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb21wbGlhbmNlX3N0YXR1cycpO1xuICB9XG5cbiAgLy8ga2V5c193aXRoX25vbmNvbXBsaWFudF92YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlzV2l0aE5vbmNvbXBsaWFudFZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdrZXlzX3dpdGhfbm9uY29tcGxpYW50X3ZhbHVlcycpO1xuICB9XG5cbiAgLy8gbm9uX2NvbXBsaWFudF9rZXlzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9uQ29tcGxpYW50S2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdub25fY29tcGxpYW50X2tleXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNSZXNvdXJjZVRhZ01hcHBpbmdMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tcGxpYW5jZV9kZXRhaWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcGxpYW5jZURldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29tcGxpYW5jZV9kZXRhaWxzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c1Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaVJlc291cmNlc1RhZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlcz86IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBkYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzVGFnRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c1Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaVJlc291cmNlc1RhZ0ZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19yZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlfcmVzb3VyY2VzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2V4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXMgPSBjb25maWcuZXhjbHVkZUNvbXBsaWFudFJlc291cmNlcztcbiAgICB0aGlzLl9pbmNsdWRlQ29tcGxpYW5jZURldGFpbHMgPSBjb25maWcuaW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzO1xuICAgIHRoaXMuX3Jlc291cmNlQXJuTGlzdCA9IGNvbmZpZy5yZXNvdXJjZUFybkxpc3Q7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlRmlsdGVycyA9IGNvbmZpZy5yZXNvdXJjZVR5cGVGaWx0ZXJzO1xuICAgIHRoaXMuX3RhZ0ZpbHRlciA9IGNvbmZpZy50YWdGaWx0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGV4Y2x1ZGVfY29tcGxpYW50X3Jlc291cmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBleGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2V4Y2x1ZGVfY29tcGxpYW50X3Jlc291cmNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhjbHVkZUNvbXBsaWFudFJlc291cmNlcyh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9leGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhjbHVkZUNvbXBsaWFudFJlc291cmNlcygpIHtcbiAgICB0aGlzLl9leGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXNcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbmNsdWRlX2NvbXBsaWFuY2VfZGV0YWlscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlQ29tcGxpYW5jZURldGFpbHM/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGluY2x1ZGVDb21wbGlhbmNlRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2NvbXBsaWFuY2VfZGV0YWlscycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2luY2x1ZGVDb21wbGlhbmNlRGV0YWlscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVDb21wbGlhbmNlRGV0YWlscygpIHtcbiAgICB0aGlzLl9pbmNsdWRlQ29tcGxpYW5jZURldGFpbHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVDb21wbGlhbmNlRGV0YWlsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlQ29tcGxpYW5jZURldGFpbHNcbiAgfVxuXG4gIC8vIHJlc291cmNlX2Fybl9saXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuTGlzdD86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdyZXNvdXJjZV9hcm5fbGlzdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm5MaXN0KHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybkxpc3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUFybkxpc3QoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm5MaXN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybkxpc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm5MaXN0XG4gIH1cblxuICAvLyByZXNvdXJjZV90YWdfbWFwcGluZ19saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyByZXNvdXJjZVRhZ01hcHBpbmdMaXN0KGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNSZXNvdXJjZVRhZ01hcHBpbmdMaXN0KHRoaXMsICdyZXNvdXJjZV90YWdfbWFwcGluZ19saXN0JywgaW5kZXgpO1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfdHlwZV9maWx0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlVHlwZUZpbHRlcnM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVGaWx0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3Jlc291cmNlX3R5cGVfZmlsdGVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VUeXBlRmlsdGVycyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlRmlsdGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc291cmNlVHlwZUZpbHRlcnMoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlRmlsdGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlRmlsdGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZVR5cGVGaWx0ZXJzXG4gIH1cblxuICAvLyB0YWdfZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ0ZpbHRlcj86IERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNUYWdGaWx0ZXJbXTtcbiAgcHVibGljIGdldCB0YWdGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnX2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ0ZpbHRlcih2YWx1ZTogRGF0YUF3c1Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaVJlc291cmNlc1RhZ0ZpbHRlcltdICkge1xuICAgIHRoaXMuX3RhZ0ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl90YWdGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ0ZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdGaWx0ZXJcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhjbHVkZV9jb21wbGlhbnRfcmVzb3VyY2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZXhjbHVkZUNvbXBsaWFudFJlc291cmNlcyksXG4gICAgICBpbmNsdWRlX2NvbXBsaWFuY2VfZGV0YWlsczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2luY2x1ZGVDb21wbGlhbmNlRGV0YWlscyksXG4gICAgICByZXNvdXJjZV9hcm5fbGlzdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fcmVzb3VyY2VBcm5MaXN0KSxcbiAgICAgIHJlc291cmNlX3R5cGVfZmlsdGVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fcmVzb3VyY2VUeXBlRmlsdGVycyksXG4gICAgICB0YWdfZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNUYWdGaWx0ZXJUb1RlcnJhZm9ybSkodGhpcy5fdGFnRmlsdGVyKSxcbiAgICB9O1xuICB9XG59XG4iXX0=