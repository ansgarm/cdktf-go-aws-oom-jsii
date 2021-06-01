"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoIdentityPool = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        provider_name: cdktf.stringToTerraform(struct.providerName),
        server_side_token_check: cdktf.booleanToTerraform(struct.serverSideTokenCheck),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool}.
 */
class CognitoIdentityPool extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_identity_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowClassicFlow = config.allowClassicFlow;
        this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
        this._developerProviderName = config.developerProviderName;
        this._identityPoolName = config.identityPoolName;
        this._openidConnectProviderArns = config.openidConnectProviderArns;
        this._samlProviderArns = config.samlProviderArns;
        this._supportedLoginProviders = config.supportedLoginProviders;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._cognitoIdentityProviders = config.cognitoIdentityProviders;
    }
    get allowClassicFlow() {
        return this.getBooleanAttribute('allow_classic_flow');
    }
    set allowClassicFlow(value) {
        this._allowClassicFlow = value;
    }
    resetAllowClassicFlow() {
        this._allowClassicFlow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowClassicFlowInput() {
        return this._allowClassicFlow;
    }
    get allowUnauthenticatedIdentities() {
        return this.getBooleanAttribute('allow_unauthenticated_identities');
    }
    set allowUnauthenticatedIdentities(value) {
        this._allowUnauthenticatedIdentities = value;
    }
    resetAllowUnauthenticatedIdentities() {
        this._allowUnauthenticatedIdentities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowUnauthenticatedIdentitiesInput() {
        return this._allowUnauthenticatedIdentities;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get developerProviderName() {
        return this.getStringAttribute('developer_provider_name');
    }
    set developerProviderName(value) {
        this._developerProviderName = value;
    }
    resetDeveloperProviderName() {
        this._developerProviderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get developerProviderNameInput() {
        return this._developerProviderName;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get identityPoolName() {
        return this.getStringAttribute('identity_pool_name');
    }
    set identityPoolName(value) {
        this._identityPoolName = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityPoolNameInput() {
        return this._identityPoolName;
    }
    get openidConnectProviderArns() {
        return this.getListAttribute('openid_connect_provider_arns');
    }
    set openidConnectProviderArns(value) {
        this._openidConnectProviderArns = value;
    }
    resetOpenidConnectProviderArns() {
        this._openidConnectProviderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get openidConnectProviderArnsInput() {
        return this._openidConnectProviderArns;
    }
    get samlProviderArns() {
        return this.getListAttribute('saml_provider_arns');
    }
    set samlProviderArns(value) {
        this._samlProviderArns = value;
    }
    resetSamlProviderArns() {
        this._samlProviderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samlProviderArnsInput() {
        return this._samlProviderArns;
    }
    get supportedLoginProviders() {
        return this.interpolationForAttribute('supported_login_providers');
    }
    set supportedLoginProviders(value) {
        this._supportedLoginProviders = value;
    }
    resetSupportedLoginProviders() {
        this._supportedLoginProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportedLoginProvidersInput() {
        return this._supportedLoginProviders;
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
    get cognitoIdentityProviders() {
        return this.interpolationForAttribute('cognito_identity_providers');
    }
    set cognitoIdentityProviders(value) {
        this._cognitoIdentityProviders = value;
    }
    resetCognitoIdentityProviders() {
        this._cognitoIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cognitoIdentityProvidersInput() {
        return this._cognitoIdentityProviders;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_classic_flow: cdktf.booleanToTerraform(this._allowClassicFlow),
            allow_unauthenticated_identities: cdktf.booleanToTerraform(this._allowUnauthenticatedIdentities),
            developer_provider_name: cdktf.stringToTerraform(this._developerProviderName),
            identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
            openid_connect_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._openidConnectProviderArns),
            saml_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._samlProviderArns),
            supported_login_providers: cdktf.hashMapper(cdktf.anyToTerraform)(this._supportedLoginProviders),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cognito_identity_providers: cdktf.listMapper(cognitoIdentityPoolCognitoIdentityProvidersToTerraform)(this._cognitoIdentityProviders),
        };
    }
}
exports.CognitoIdentityPool = CognitoIdentityPool;
_a = JSII_RTTI_SYMBOL_1;
CognitoIdentityPool[_a] = { fqn: "hashicorp_aws.CognitoIdentityPool", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by1pZGVudGl0eS1wb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29nbml0by1pZGVudGl0eS1wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBK0QvQixTQUFTLHNEQUFzRCxDQUFDLE1BQW9EO0lBQ2xILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3BELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO0tBQ2hGLENBQUE7QUFDSCxDQUFDOzs7O0FBTUQsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTlELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7OztJQVNkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWlDO1FBQ2hGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQywrQkFBK0IsR0FBRyxNQUFN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QUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDN0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUN4RyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNyRix5QkFBeUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDaEcsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztTQUNySSxDQUFDO0lBQ0osQ0FBQzs7QUFoT0gsa0RBaU9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL2NvZ25pdG9faWRlbnRpdHlfcG9vbC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b0lkZW50aXR5UG9vbENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd0NsYXNzaWNGbG93PzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllcz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZlbG9wZXJQcm92aWRlck5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkZW50aXR5UG9vbE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcGVuaWRDb25uZWN0UHJvdmlkZXJBcm5zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNhbWxQcm92aWRlckFybnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0ZWRMb2dpblByb3ZpZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvZ25pdG9JZGVudGl0eVByb3ZpZGVycz86IENvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b0lkZW50aXR5UG9vbENvZ25pdG9JZGVudGl0eVByb3ZpZGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3ZpZGVyTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZlclNpZGVUb2tlbkNoZWNrPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gY29nbml0b0lkZW50aXR5UG9vbENvZ25pdG9JZGVudGl0eVByb3ZpZGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xpZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudElkKSxcbiAgICBwcm92aWRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3ZpZGVyTmFtZSksXG4gICAgc2VydmVyX3NpZGVfdG9rZW5fY2hlY2s6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlclNpZGVUb2tlbkNoZWNrKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29nbml0b0lkZW50aXR5UG9vbCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29nbml0b0lkZW50aXR5UG9vbENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZ25pdG9faWRlbnRpdHlfcG9vbCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvd0NsYXNzaWNGbG93ID0gY29uZmlnLmFsbG93Q2xhc3NpY0Zsb3c7XG4gICAgdGhpcy5fYWxsb3dVbmF1dGhlbnRpY2F0ZWRJZGVudGl0aWVzID0gY29uZmlnLmFsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllcztcbiAgICB0aGlzLl9kZXZlbG9wZXJQcm92aWRlck5hbWUgPSBjb25maWcuZGV2ZWxvcGVyUHJvdmlkZXJOYW1lO1xuICAgIHRoaXMuX2lkZW50aXR5UG9vbE5hbWUgPSBjb25maWcuaWRlbnRpdHlQb29sTmFtZTtcbiAgICB0aGlzLl9vcGVuaWRDb25uZWN0UHJvdmlkZXJBcm5zID0gY29uZmlnLm9wZW5pZENvbm5lY3RQcm92aWRlckFybnM7XG4gICAgdGhpcy5fc2FtbFByb3ZpZGVyQXJucyA9IGNvbmZpZy5zYW1sUHJvdmlkZXJBcm5zO1xuICAgIHRoaXMuX3N1cHBvcnRlZExvZ2luUHJvdmlkZXJzID0gY29uZmlnLnN1cHBvcnRlZExvZ2luUHJvdmlkZXJzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fY29nbml0b0lkZW50aXR5UHJvdmlkZXJzID0gY29uZmlnLmNvZ25pdG9JZGVudGl0eVByb3ZpZGVycztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxsb3dfY2xhc3NpY19mbG93IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93Q2xhc3NpY0Zsb3c/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0Zsb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfY2xhc3NpY19mbG93Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd0NsYXNzaWNGbG93KHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2FsbG93Q2xhc3NpY0Zsb3cgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd0NsYXNzaWNGbG93KCkge1xuICAgIHRoaXMuX2FsbG93Q2xhc3NpY0Zsb3cgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0Zsb3dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGFzc2ljRmxvd1xuICB9XG5cbiAgLy8gYWxsb3dfdW5hdXRoZW50aWNhdGVkX2lkZW50aXRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dVbmF1dGhlbnRpY2F0ZWRJZGVudGl0aWVzPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBhbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfdW5hdXRoZW50aWNhdGVkX2lkZW50aXRpZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllcyh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9hbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXMoKSB7XG4gICAgdGhpcy5fYWxsb3dVbmF1dGhlbnRpY2F0ZWRJZGVudGl0aWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dVbmF1dGhlbnRpY2F0ZWRJZGVudGl0aWVzXG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRldmVsb3Blcl9wcm92aWRlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmVsb3BlclByb3ZpZGVyTmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBkZXZlbG9wZXJQcm92aWRlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZlbG9wZXJfcHJvdmlkZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2ZWxvcGVyUHJvdmlkZXJOYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGV2ZWxvcGVyUHJvdmlkZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2ZWxvcGVyUHJvdmlkZXJOYW1lKCkge1xuICAgIHRoaXMuX2RldmVsb3BlclByb3ZpZGVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2ZWxvcGVyUHJvdmlkZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmVsb3BlclByb3ZpZGVyTmFtZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGlkZW50aXR5X3Bvb2xfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZGVudGl0eVBvb2xOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWRlbnRpdHlQb29sTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkZW50aXR5X3Bvb2xfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWRlbnRpdHlQb29sTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWRlbnRpdHlQb29sTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZGVudGl0eVBvb2xOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkZW50aXR5UG9vbE5hbWVcbiAgfVxuXG4gIC8vIG9wZW5pZF9jb25uZWN0X3Byb3ZpZGVyX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IG9wZW5pZENvbm5lY3RQcm92aWRlckFybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnb3BlbmlkX2Nvbm5lY3RfcHJvdmlkZXJfYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9wZW5pZENvbm5lY3RQcm92aWRlckFybnMoKSB7XG4gICAgdGhpcy5fb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuaWRDb25uZWN0UHJvdmlkZXJBcm5zXG4gIH1cblxuICAvLyBzYW1sX3Byb3ZpZGVyX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FtbFByb3ZpZGVyQXJucz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHNhbWxQcm92aWRlckFybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2FtbF9wcm92aWRlcl9hcm5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYW1sUHJvdmlkZXJBcm5zKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9zYW1sUHJvdmlkZXJBcm5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FtbFByb3ZpZGVyQXJucygpIHtcbiAgICB0aGlzLl9zYW1sUHJvdmlkZXJBcm5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYW1sUHJvdmlkZXJBcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbWxQcm92aWRlckFybnNcbiAgfVxuXG4gIC8vIHN1cHBvcnRlZF9sb2dpbl9wcm92aWRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VwcG9ydGVkTG9naW5Qcm92aWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZExvZ2luUHJvdmlkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1cHBvcnRlZF9sb2dpbl9wcm92aWRlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0ZWRMb2dpblByb3ZpZGVycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl9zdXBwb3J0ZWRMb2dpblByb3ZpZGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRlZExvZ2luUHJvdmlkZXJzKCkge1xuICAgIHRoaXMuX3N1cHBvcnRlZExvZ2luUHJvdmlkZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0ZWRMb2dpblByb3ZpZGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0ZWRMb2dpblByb3ZpZGVyc1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vIGNvZ25pdG9faWRlbnRpdHlfcHJvdmlkZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZ25pdG9JZGVudGl0eVByb3ZpZGVycz86IENvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnNbXTtcbiAgcHVibGljIGdldCBjb2duaXRvSWRlbnRpdHlQcm92aWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29nbml0b19pZGVudGl0eV9wcm92aWRlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb2duaXRvSWRlbnRpdHlQcm92aWRlcnModmFsdWU6IENvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnNbXSApIHtcbiAgICB0aGlzLl9jb2duaXRvSWRlbnRpdHlQcm92aWRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2duaXRvSWRlbnRpdHlQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5fY29nbml0b0lkZW50aXR5UHJvdmlkZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2duaXRvSWRlbnRpdHlQcm92aWRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29nbml0b0lkZW50aXR5UHJvdmlkZXJzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93X2NsYXNzaWNfZmxvdzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FsbG93Q2xhc3NpY0Zsb3cpLFxuICAgICAgYWxsb3dfdW5hdXRoZW50aWNhdGVkX2lkZW50aXRpZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXMpLFxuICAgICAgZGV2ZWxvcGVyX3Byb3ZpZGVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RldmVsb3BlclByb3ZpZGVyTmFtZSksXG4gICAgICBpZGVudGl0eV9wb29sX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkZW50aXR5UG9vbE5hbWUpLFxuICAgICAgb3BlbmlkX2Nvbm5lY3RfcHJvdmlkZXJfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucyksXG4gICAgICBzYW1sX3Byb3ZpZGVyX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3NhbWxQcm92aWRlckFybnMpLFxuICAgICAgc3VwcG9ydGVkX2xvZ2luX3Byb3ZpZGVyczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fc3VwcG9ydGVkTG9naW5Qcm92aWRlcnMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBjb2duaXRvX2lkZW50aXR5X3Byb3ZpZGVyczogY2RrdGYubGlzdE1hcHBlcihjb2duaXRvSWRlbnRpdHlQb29sQ29nbml0b0lkZW50aXR5UHJvdmlkZXJzVG9UZXJyYWZvcm0pKHRoaXMuX2NvZ25pdG9JZGVudGl0eVByb3ZpZGVycyksXG4gICAgfTtcbiAgfVxufVxuIl19