"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayGatewayResponse = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response}.
 */
class ApiGatewayGatewayResponse extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_gateway_response',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._responseParameters = config.responseParameters;
        this._responseTemplates = config.responseTemplates;
        this._responseType = config.responseType;
        this._restApiId = config.restApiId;
        this._statusCode = config.statusCode;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get responseParameters() {
        return this.interpolationForAttribute('response_parameters');
    }
    set responseParameters(value) {
        this._responseParameters = value;
    }
    resetResponseParameters() {
        this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseParametersInput() {
        return this._responseParameters;
    }
    get responseTemplates() {
        return this.interpolationForAttribute('response_templates');
    }
    set responseTemplates(value) {
        this._responseTemplates = value;
    }
    resetResponseTemplates() {
        this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseTemplatesInput() {
        return this._responseTemplates;
    }
    get responseType() {
        return this.getStringAttribute('response_type');
    }
    set responseType(value) {
        this._responseType = value;
    }
    // Temporarily expose input value. Use with caution.
    get responseTypeInput() {
        return this._responseType;
    }
    get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    set restApiId(value) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get restApiIdInput() {
        return this._restApiId;
    }
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
    set statusCode(value) {
        this._statusCode = value;
    }
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusCodeInput() {
        return this._statusCode;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
            response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
            response_type: cdktf.stringToTerraform(this._responseType),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            status_code: cdktf.stringToTerraform(this._statusCode),
        };
    }
}
exports.ApiGatewayGatewayResponse = ApiGatewayGatewayResponse;
_a = JSII_RTTI_SYMBOL_1;
ApiGatewayGatewayResponse[_a] = { fqn: "hashicorp_aws.ApiGatewayGatewayResponse", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktZ2F0ZXdheS1yZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS1nYXRld2F5LWdhdGV3YXktcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7Ozs7QUE4Qi9CLE1BQWEseUJBQTBCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVwRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7SUFTZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF1QztRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGtDQUFrQztZQUN6RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBZ0M7UUFDNUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtJQUNqQyxDQUFDO0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQVEsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFnQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFBO0lBQ2hDLENBQUM7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDM0IsQ0FBQztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDeEIsQ0FBQztJQUlELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDekIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3JGLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNuRixhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQzs7QUE5SEgsOERBK0hDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL2FwaV9nYXRld2F5X2dhdGV3YXlfcmVzcG9uc2UuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaUdhdGV3YXlHYXRld2F5UmVzcG9uc2VDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VQYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3BvbnNlVGVtcGxhdGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdEFwaUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzQ29kZT86IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFwaUdhdGV3YXlHYXRld2F5UmVzcG9uc2UgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBpR2F0ZXdheUdhdGV3YXlSZXNwb25zZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwaV9nYXRld2F5X2dhdGV3YXlfcmVzcG9uc2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fcmVzcG9uc2VQYXJhbWV0ZXJzID0gY29uZmlnLnJlc3BvbnNlUGFyYW1ldGVycztcbiAgICB0aGlzLl9yZXNwb25zZVRlbXBsYXRlcyA9IGNvbmZpZy5yZXNwb25zZVRlbXBsYXRlcztcbiAgICB0aGlzLl9yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIHRoaXMuX3Jlc3RBcGlJZCA9IGNvbmZpZy5yZXN0QXBpSWQ7XG4gICAgdGhpcy5fc3RhdHVzQ29kZSA9IGNvbmZpZy5zdGF0dXNDb2RlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcmVzcG9uc2VfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNwb25zZVBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHJlc3BvbnNlUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNwb25zZV9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzcG9uc2VQYXJhbWV0ZXJzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9yZXNwb25zZVBhcmFtZXRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVBhcmFtZXRlcnNcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX3RlbXBsYXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNwb25zZVRlbXBsYXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VUZW1wbGF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVzcG9uc2VfdGVtcGxhdGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzcG9uc2VUZW1wbGF0ZXModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VUZW1wbGF0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNwb25zZVRlbXBsYXRlcygpIHtcbiAgICB0aGlzLl9yZXNwb25zZVRlbXBsYXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VUZW1wbGF0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUZW1wbGF0ZXNcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzcG9uc2VUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzcG9uc2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzcG9uc2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVHlwZVxuICB9XG5cbiAgLy8gcmVzdF9hcGlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzdEFwaUlkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVzdEFwaUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzdF9hcGlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc3RBcGlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzdEFwaUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3RBcGlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0QXBpSWRcbiAgfVxuXG4gIC8vIHN0YXR1c19jb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXR1c0NvZGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19jb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXNDb2RlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fc3RhdHVzQ29kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXR1c0NvZGUoKSB7XG4gICAgdGhpcy5fc3RhdHVzQ29kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdHVzQ29kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXNDb2RlXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlX3BhcmFtZXRlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycyksXG4gICAgICByZXNwb25zZV90ZW1wbGF0ZXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3Jlc3BvbnNlVGVtcGxhdGVzKSxcbiAgICAgIHJlc3BvbnNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jlc3BvbnNlVHlwZSksXG4gICAgICByZXN0X2FwaV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzdEFwaUlkKSxcbiAgICAgIHN0YXR1c19jb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGF0dXNDb2RlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=