"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodebuildWebhook = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function codebuildWebhookFilterGroupFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exclude_matched_pattern: cdktf.booleanToTerraform(struct.excludeMatchedPattern),
        pattern: cdktf.stringToTerraform(struct.pattern),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function codebuildWebhookFilterGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        filter: cdktf.listMapper(codebuildWebhookFilterGroupFilterToTerraform)(struct.filter),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}.
 */
class CodebuildWebhook extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codebuild_webhook',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._branchFilter = config.branchFilter;
        this._projectName = config.projectName;
        this._filterGroup = config.filterGroup;
    }
    get branchFilter() {
        return this.getStringAttribute('branch_filter');
    }
    set branchFilter(value) {
        this._branchFilter = value;
    }
    resetBranchFilter() {
        this._branchFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get branchFilterInput() {
        return this._branchFilter;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // payload_url - computed: true, optional: false, required: false
    get payloadUrl() {
        return this.getStringAttribute('payload_url');
    }
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    set projectName(value) {
        this._projectName = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectNameInput() {
        return this._projectName;
    }
    // secret - computed: true, optional: false, required: false
    get secret() {
        return this.getStringAttribute('secret');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    get filterGroup() {
        return this.interpolationForAttribute('filter_group');
    }
    set filterGroup(value) {
        this._filterGroup = value;
    }
    resetFilterGroup() {
        this._filterGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterGroupInput() {
        return this._filterGroup;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            branch_filter: cdktf.stringToTerraform(this._branchFilter),
            project_name: cdktf.stringToTerraform(this._projectName),
            filter_group: cdktf.listMapper(codebuildWebhookFilterGroupToTerraform)(this._filterGroup),
        };
    }
}
exports.CodebuildWebhook = CodebuildWebhook;
_a = JSII_RTTI_SYMBOL_1;
CodebuildWebhook[_a] = { fqn: "hashicorp_aws.CodebuildWebhook", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWJ1aWxkLXdlYmhvb2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2RlYnVpbGQtd2ViaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQW1DL0IsU0FBUyw0Q0FBNEMsQ0FBQyxNQUEwQztJQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7UUFDaEYsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVdELFNBQVMsc0NBQXNDLENBQUMsTUFBb0M7SUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDdkYsQ0FBQTtBQUNILENBQUM7Ozs7QUFNRCxNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFM0QsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBOEI7UUFDN0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx1QkFBdUI7WUFDOUMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFRRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDL0QsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQW9DO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDMUIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUYsQ0FBQztJQUNKLENBQUM7O0FBNUdILDRDQTZHQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9jb2RlYnVpbGRfd2ViaG9vay5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkV2ViaG9va0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnJhbmNoRmlsdGVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2plY3ROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbHRlckdyb3VwPzogQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVidWlsZFdlYmhvb2tGaWx0ZXJHcm91cEZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4Y2x1ZGVNYXRjaGVkUGF0dGVybj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXR0ZXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZGVidWlsZFdlYmhvb2tGaWx0ZXJHcm91cEZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVidWlsZFdlYmhvb2tGaWx0ZXJHcm91cEZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleGNsdWRlX21hdGNoZWRfcGF0dGVybjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZXhjbHVkZU1hdGNoZWRQYXR0ZXJuKSxcbiAgICBwYXR0ZXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdHRlcm4pLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWx0ZXI/OiBDb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXBGaWx0ZXJbXTtcbn1cblxuZnVuY3Rpb24gY29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZpbHRlcjogY2RrdGYubGlzdE1hcHBlcihjb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXBGaWx0ZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5maWx0ZXIpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29kZWJ1aWxkV2ViaG9vayBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvZGVidWlsZFdlYmhvb2tDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jb2RlYnVpbGRfd2ViaG9vaycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9icmFuY2hGaWx0ZXIgPSBjb25maWcuYnJhbmNoRmlsdGVyO1xuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gY29uZmlnLnByb2plY3ROYW1lO1xuICAgIHRoaXMuX2ZpbHRlckdyb3VwID0gY29uZmlnLmZpbHRlckdyb3VwO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBicmFuY2hfZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JyYW5jaEZpbHRlcj86IHN0cmluZztcbiAgcHVibGljIGdldCBicmFuY2hGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdicmFuY2hfZmlsdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBicmFuY2hGaWx0ZXIodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9icmFuY2hGaWx0ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCcmFuY2hGaWx0ZXIoKSB7XG4gICAgdGhpcy5fYnJhbmNoRmlsdGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBicmFuY2hGaWx0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnJhbmNoRmlsdGVyXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcGF5bG9hZF91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXlsb2FkVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGF5bG9hZF91cmwnKTtcbiAgfVxuXG4gIC8vIHByb2plY3RfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm9qZWN0TmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHByb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvamVjdF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9qZWN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvamVjdE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWVcbiAgfVxuXG4gIC8vIHNlY3JldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3JldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldCcpO1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICAvLyBmaWx0ZXJfZ3JvdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsdGVyR3JvdXA/OiBDb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXBbXTtcbiAgcHVibGljIGdldCBmaWx0ZXJHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWx0ZXJfZ3JvdXAnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmaWx0ZXJHcm91cCh2YWx1ZTogQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwW10gKSB7XG4gICAgdGhpcy5fZmlsdGVyR3JvdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWx0ZXJHcm91cCgpIHtcbiAgICB0aGlzLl9maWx0ZXJHcm91cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsdGVyR3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyR3JvdXBcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJhbmNoX2ZpbHRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnJhbmNoRmlsdGVyKSxcbiAgICAgIHByb2plY3RfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJvamVjdE5hbWUpLFxuICAgICAgZmlsdGVyX2dyb3VwOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVidWlsZFdlYmhvb2tGaWx0ZXJHcm91cFRvVGVycmFmb3JtKSh0aGlzLl9maWx0ZXJHcm91cCksXG4gICAgfTtcbiAgfVxufVxuIl19