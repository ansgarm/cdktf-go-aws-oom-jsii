"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apigatewayv2Route = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apigatewayv2RouteRequestParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        request_parameter_key: cdktf.stringToTerraform(struct.requestParameterKey),
        required: cdktf.booleanToTerraform(struct.required),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route}.
 */
class Apigatewayv2Route extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apigatewayv2_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._apiId = config.apiId;
        this._apiKeyRequired = config.apiKeyRequired;
        this._authorizationScopes = config.authorizationScopes;
        this._authorizationType = config.authorizationType;
        this._authorizerId = config.authorizerId;
        this._modelSelectionExpression = config.modelSelectionExpression;
        this._operationName = config.operationName;
        this._requestModels = config.requestModels;
        this._routeKey = config.routeKey;
        this._routeResponseSelectionExpression = config.routeResponseSelectionExpression;
        this._target = config.target;
        this._requestParameter = config.requestParameter;
    }
    get apiId() {
        return this.getStringAttribute('api_id');
    }
    set apiId(value) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get apiIdInput() {
        return this._apiId;
    }
    get apiKeyRequired() {
        return this.getBooleanAttribute('api_key_required');
    }
    set apiKeyRequired(value) {
        this._apiKeyRequired = value;
    }
    resetApiKeyRequired() {
        this._apiKeyRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiKeyRequiredInput() {
        return this._apiKeyRequired;
    }
    get authorizationScopes() {
        return this.getListAttribute('authorization_scopes');
    }
    set authorizationScopes(value) {
        this._authorizationScopes = value;
    }
    resetAuthorizationScopes() {
        this._authorizationScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationScopesInput() {
        return this._authorizationScopes;
    }
    get authorizationType() {
        return this.getStringAttribute('authorization_type');
    }
    set authorizationType(value) {
        this._authorizationType = value;
    }
    resetAuthorizationType() {
        this._authorizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizationTypeInput() {
        return this._authorizationType;
    }
    get authorizerId() {
        return this.getStringAttribute('authorizer_id');
    }
    set authorizerId(value) {
        this._authorizerId = value;
    }
    resetAuthorizerId() {
        this._authorizerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authorizerIdInput() {
        return this._authorizerId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get modelSelectionExpression() {
        return this.getStringAttribute('model_selection_expression');
    }
    set modelSelectionExpression(value) {
        this._modelSelectionExpression = value;
    }
    resetModelSelectionExpression() {
        this._modelSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modelSelectionExpressionInput() {
        return this._modelSelectionExpression;
    }
    get operationName() {
        return this.getStringAttribute('operation_name');
    }
    set operationName(value) {
        this._operationName = value;
    }
    resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get operationNameInput() {
        return this._operationName;
    }
    get requestModels() {
        return this.interpolationForAttribute('request_models');
    }
    set requestModels(value) {
        this._requestModels = value;
    }
    resetRequestModels() {
        this._requestModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestModelsInput() {
        return this._requestModels;
    }
    get routeKey() {
        return this.getStringAttribute('route_key');
    }
    set routeKey(value) {
        this._routeKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get routeKeyInput() {
        return this._routeKey;
    }
    get routeResponseSelectionExpression() {
        return this.getStringAttribute('route_response_selection_expression');
    }
    set routeResponseSelectionExpression(value) {
        this._routeResponseSelectionExpression = value;
    }
    resetRouteResponseSelectionExpression() {
        this._routeResponseSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routeResponseSelectionExpressionInput() {
        return this._routeResponseSelectionExpression;
    }
    get target() {
        return this.getStringAttribute('target');
    }
    set target(value) {
        this._target = value;
    }
    resetTarget() {
        this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target;
    }
    get requestParameter() {
        return this.interpolationForAttribute('request_parameter');
    }
    set requestParameter(value) {
        this._requestParameter = value;
    }
    resetRequestParameter() {
        this._requestParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestParameterInput() {
        return this._requestParameter;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
            authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
            authorization_type: cdktf.stringToTerraform(this._authorizationType),
            authorizer_id: cdktf.stringToTerraform(this._authorizerId),
            model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
            operation_name: cdktf.stringToTerraform(this._operationName),
            request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
            route_key: cdktf.stringToTerraform(this._routeKey),
            route_response_selection_expression: cdktf.stringToTerraform(this._routeResponseSelectionExpression),
            target: cdktf.stringToTerraform(this._target),
            request_parameter: cdktf.listMapper(apigatewayv2RouteRequestParameterToTerraform)(this._requestParameter),
        };
    }
}
exports.Apigatewayv2Route = Apigatewayv2Route;
_a = JSII_RTTI_SYMBOL_1;
Apigatewayv2Route[_a] = { fqn: "hashicorp_aws.Apigatewayv2Route", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheXYyLXJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpZ2F0ZXdheXYyLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBbUUvQixTQUFTLDRDQUE0QyxDQUFDLE1BQTBDO0lBQzlGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDckQsQ0FBQTtBQUNILENBQUM7Ozs7QUFNRCxNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFNUQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBK0I7UUFDOUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx3QkFBd0I7WUFDL0MsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2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LEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNENBQTRDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDMUcsQ0FBQztJQUNKLENBQUM7O0FBNVBILDhDQTZQQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9hcGlnYXRld2F5djJfcm91dGUuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaWdhdGV3YXl2MlJvdXRlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcGlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcGlLZXlSZXF1aXJlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aG9yaXphdGlvblNjb3Blcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aG9yaXphdGlvblR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhvcml6ZXJJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb2RlbFNlbGVjdGlvbkV4cHJlc3Npb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3BlcmF0aW9uTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1ZXN0TW9kZWxzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvdXRlS2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm91dGVSZXNwb25zZVNlbGVjdGlvbkV4cHJlc3Npb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWVzdFBhcmFtZXRlcj86IEFwaWdhdGV3YXl2MlJvdXRlUmVxdWVzdFBhcmFtZXRlcltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWVzdFBhcmFtZXRlcktleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVkOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBhcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcmVxdWVzdF9wYXJhbWV0ZXJfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVlc3RQYXJhbWV0ZXJLZXkpLFxuICAgIHJlcXVpcmVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlZCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFwaWdhdGV3YXl2MlJvdXRlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBpZ2F0ZXdheXYyUm91dGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcGlnYXRld2F5djJfcm91dGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXBpSWQgPSBjb25maWcuYXBpSWQ7XG4gICAgdGhpcy5fYXBpS2V5UmVxdWlyZWQgPSBjb25maWcuYXBpS2V5UmVxdWlyZWQ7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvblNjb3BlcyA9IGNvbmZpZy5hdXRob3JpemF0aW9uU2NvcGVzO1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25UeXBlID0gY29uZmlnLmF1dGhvcml6YXRpb25UeXBlO1xuICAgIHRoaXMuX2F1dGhvcml6ZXJJZCA9IGNvbmZpZy5hdXRob3JpemVySWQ7XG4gICAgdGhpcy5fbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uID0gY29uZmlnLm1vZGVsU2VsZWN0aW9uRXhwcmVzc2lvbjtcbiAgICB0aGlzLl9vcGVyYXRpb25OYW1lID0gY29uZmlnLm9wZXJhdGlvbk5hbWU7XG4gICAgdGhpcy5fcmVxdWVzdE1vZGVscyA9IGNvbmZpZy5yZXF1ZXN0TW9kZWxzO1xuICAgIHRoaXMuX3JvdXRlS2V5ID0gY29uZmlnLnJvdXRlS2V5O1xuICAgIHRoaXMuX3JvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uID0gY29uZmlnLnJvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uO1xuICAgIHRoaXMuX3RhcmdldCA9IGNvbmZpZy50YXJnZXQ7XG4gICAgdGhpcy5fcmVxdWVzdFBhcmFtZXRlciA9IGNvbmZpZy5yZXF1ZXN0UGFyYW1ldGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcGlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBpSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBhcGlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwaV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBpSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwaUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwaUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUlkXG4gIH1cblxuICAvLyBhcGlfa2V5X3JlcXVpcmVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwaUtleVJlcXVpcmVkPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBhcGlLZXlSZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhcGlfa2V5X3JlcXVpcmVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcGlLZXlSZXF1aXJlZCh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9hcGlLZXlSZXF1aXJlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwaUtleVJlcXVpcmVkKCkge1xuICAgIHRoaXMuX2FwaUtleVJlcXVpcmVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcGlLZXlSZXF1aXJlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcGlLZXlSZXF1aXJlZFxuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbl9zY29wZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aG9yaXphdGlvblNjb3Blcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25TY29wZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXV0aG9yaXphdGlvbl9zY29wZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhvcml6YXRpb25TY29wZXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25TY29wZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRob3JpemF0aW9uU2NvcGVzKCkge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25TY29wZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25TY29wZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvblNjb3Blc1xuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhvcml6YXRpb25UeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aG9yaXphdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemF0aW9uVHlwZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aG9yaXphdGlvblR5cGUoKSB7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6YXRpb25UeXBlXG4gIH1cblxuICAvLyBhdXRob3JpemVyX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhvcml6ZXJJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBhdXRob3JpemVySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRob3JpemVyX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemVySWQodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9hdXRob3JpemVySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRob3JpemVySWQoKSB7XG4gICAgdGhpcy5fYXV0aG9yaXplcklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemVySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXplcklkXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbW9kZWxfc2VsZWN0aW9uX2V4cHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG1vZGVsU2VsZWN0aW9uRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21vZGVsX3NlbGVjdGlvbl9leHByZXNzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBtb2RlbFNlbGVjdGlvbkV4cHJlc3Npb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9tb2RlbFNlbGVjdGlvbkV4cHJlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb2RlbFNlbGVjdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgdGhpcy5fbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlbFNlbGVjdGlvbkV4cHJlc3Npb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxTZWxlY3Rpb25FeHByZXNzaW9uXG4gIH1cblxuICAvLyBvcGVyYXRpb25fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vcGVyYXRpb25OYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG9wZXJhdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcGVyYXRpb25fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3BlcmF0aW9uTmFtZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX29wZXJhdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcGVyYXRpb25OYW1lKCkge1xuICAgIHRoaXMuX29wZXJhdGlvbk5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9wZXJhdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uTmFtZVxuICB9XG5cbiAgLy8gcmVxdWVzdF9tb2RlbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWVzdE1vZGVscz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgcmVxdWVzdE1vZGVscygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXF1ZXN0X21vZGVscycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RNb2RlbHModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fcmVxdWVzdE1vZGVscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVlc3RNb2RlbHMoKSB7XG4gICAgdGhpcy5fcmVxdWVzdE1vZGVscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWVzdE1vZGVsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TW9kZWxzXG4gIH1cblxuICAvLyByb3V0ZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm91dGVLZXk6IHN0cmluZztcbiAgcHVibGljIGdldCByb3V0ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvdXRlX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm91dGVLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvdXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvdXRlS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlS2V5XG4gIH1cblxuICAvLyByb3V0ZV9yZXNwb25zZV9zZWxlY3Rpb25fZXhwcmVzc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbj86IHN0cmluZztcbiAgcHVibGljIGdldCByb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvdXRlX3Jlc3BvbnNlX3NlbGVjdGlvbl9leHByZXNzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3JvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um91dGVSZXNwb25zZVNlbGVjdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgdGhpcy5fcm91dGVSZXNwb25zZVNlbGVjdGlvbkV4cHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlUmVzcG9uc2VTZWxlY3Rpb25FeHByZXNzaW9uXG4gIH1cblxuICAvLyB0YXJnZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0KCkge1xuICAgIHRoaXMuX3RhcmdldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFxuICB9XG5cbiAgLy8gcmVxdWVzdF9wYXJhbWV0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWVzdFBhcmFtZXRlcj86IEFwaWdhdGV3YXl2MlJvdXRlUmVxdWVzdFBhcmFtZXRlcltdO1xuICBwdWJsaWMgZ2V0IHJlcXVlc3RQYXJhbWV0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVxdWVzdF9wYXJhbWV0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1ZXN0UGFyYW1ldGVyKHZhbHVlOiBBcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXJbXSApIHtcbiAgICB0aGlzLl9yZXF1ZXN0UGFyYW1ldGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdFBhcmFtZXRlcigpIHtcbiAgICB0aGlzLl9yZXF1ZXN0UGFyYW1ldGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1ZXN0UGFyYW1ldGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RQYXJhbWV0ZXJcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcGlJZCksXG4gICAgICBhcGlfa2V5X3JlcXVpcmVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXBpS2V5UmVxdWlyZWQpLFxuICAgICAgYXV0aG9yaXphdGlvbl9zY29wZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2F1dGhvcml6YXRpb25TY29wZXMpLFxuICAgICAgYXV0aG9yaXphdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRob3JpemF0aW9uVHlwZSksXG4gICAgICBhdXRob3JpemVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRob3JpemVySWQpLFxuICAgICAgbW9kZWxfc2VsZWN0aW9uX2V4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21vZGVsU2VsZWN0aW9uRXhwcmVzc2lvbiksXG4gICAgICBvcGVyYXRpb25fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb3BlcmF0aW9uTmFtZSksXG4gICAgICByZXF1ZXN0X21vZGVsczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fcmVxdWVzdE1vZGVscyksXG4gICAgICByb3V0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvdXRlS2V5KSxcbiAgICAgIHJvdXRlX3Jlc3BvbnNlX3NlbGVjdGlvbl9leHByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb3V0ZVJlc3BvbnNlU2VsZWN0aW9uRXhwcmVzc2lvbiksXG4gICAgICB0YXJnZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RhcmdldCksXG4gICAgICByZXF1ZXN0X3BhcmFtZXRlcjogY2RrdGYubGlzdE1hcHBlcihhcGlnYXRld2F5djJSb3V0ZVJlcXVlc3RQYXJhbWV0ZXJUb1RlcnJhZm9ybSkodGhpcy5fcmVxdWVzdFBhcmFtZXRlciksXG4gICAgfTtcbiAgfVxufVxuIl19