"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcEndpointService = exports.VpcEndpointServicePrivateDnsNameConfiguration = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class VpcEndpointServicePrivateDnsNameConfiguration extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.VpcEndpointServicePrivateDnsNameConfiguration = VpcEndpointServicePrivateDnsNameConfiguration;
_a = JSII_RTTI_SYMBOL_1;
VpcEndpointServicePrivateDnsNameConfiguration[_a] = { fqn: "hashicorp_aws.VpcEndpointServicePrivateDnsNameConfiguration", version: "0.0.0" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service}.
 */
class VpcEndpointService extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._acceptanceRequired = config.acceptanceRequired;
        this._allowedPrincipals = config.allowedPrincipals;
        this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
        this._networkLoadBalancerArns = config.networkLoadBalancerArns;
        this._privateDnsName = config.privateDnsName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    get acceptanceRequired() {
        return this.getBooleanAttribute('acceptance_required');
    }
    set acceptanceRequired(value) {
        this._acceptanceRequired = value;
    }
    // Temporarily expose input value. Use with caution.
    get acceptanceRequiredInput() {
        return this._acceptanceRequired;
    }
    get allowedPrincipals() {
        return this.getListAttribute('allowed_principals');
    }
    set allowedPrincipals(value) {
        this._allowedPrincipals = value;
    }
    resetAllowedPrincipals() {
        this._allowedPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedPrincipalsInput() {
        return this._allowedPrincipals;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // base_endpoint_dns_names - computed: true, optional: false, required: false
    get baseEndpointDnsNames() {
        return this.getListAttribute('base_endpoint_dns_names');
    }
    get gatewayLoadBalancerArns() {
        return this.getListAttribute('gateway_load_balancer_arns');
    }
    set gatewayLoadBalancerArns(value) {
        this._gatewayLoadBalancerArns = value;
    }
    resetGatewayLoadBalancerArns() {
        this._gatewayLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayLoadBalancerArnsInput() {
        return this._gatewayLoadBalancerArns;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // manages_vpc_endpoints - computed: true, optional: false, required: false
    get managesVpcEndpoints() {
        return this.getBooleanAttribute('manages_vpc_endpoints');
    }
    get networkLoadBalancerArns() {
        return this.getListAttribute('network_load_balancer_arns');
    }
    set networkLoadBalancerArns(value) {
        this._networkLoadBalancerArns = value;
    }
    resetNetworkLoadBalancerArns() {
        this._networkLoadBalancerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkLoadBalancerArnsInput() {
        return this._networkLoadBalancerArns;
    }
    get privateDnsName() {
        return this.getStringAttribute('private_dns_name');
    }
    set privateDnsName(value) {
        this._privateDnsName = value;
    }
    resetPrivateDnsName() {
        this._privateDnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateDnsNameInput() {
        return this._privateDnsName;
    }
    // private_dns_name_configuration - computed: true, optional: false, required: false
    privateDnsNameConfiguration(index) {
        return new VpcEndpointServicePrivateDnsNameConfiguration(this, 'private_dns_name_configuration', index);
    }
    // service_name - computed: true, optional: false, required: false
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    // service_type - computed: true, optional: false, required: false
    get serviceType() {
        return this.getStringAttribute('service_type');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
            allowed_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrincipals),
            gateway_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._gatewayLoadBalancerArns),
            network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._networkLoadBalancerArns),
            private_dns_name: cdktf.stringToTerraform(this._privateDnsName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
exports.VpcEndpointService = VpcEndpointService;
_b = JSII_RTTI_SYMBOL_1;
VpcEndpointService[_b] = { fqn: "hashicorp_aws.VpcEndpointService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLWVuZHBvaW50LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2cGMtZW5kcG9pbnQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQWtDL0IsTUFBYSw2Q0FBOEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTFGLDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOztBQXBCSCxzR0FxQkM7Ozs7OztBQUtELE1BQWEsa0JBQW1CLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUU3RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7SUFTZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFnQztRQUMvRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxD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LENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2hFLENBQUM7SUFDSixDQUFDOztBQTdNSCxnREE4TUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvdnBjX2VuZHBvaW50X3NlcnZpY2UuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFZwY0VuZHBvaW50U2VydmljZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NlcHRhbmNlUmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd2VkUHJpbmNpcGFscz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdhdGV3YXlMb2FkQmFsYW5jZXJBcm5zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0xvYWRCYWxhbmNlckFybnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZURuc05hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuZXhwb3J0IGNsYXNzIFZwY0VuZHBvaW50U2VydmljZVByaXZhdGVEbnNOYW1lQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFZwY0VuZHBvaW50U2VydmljZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogVnBjRW5kcG9pbnRTZXJ2aWNlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfdnBjX2VuZHBvaW50X3NlcnZpY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWNjZXB0YW5jZVJlcXVpcmVkID0gY29uZmlnLmFjY2VwdGFuY2VSZXF1aXJlZDtcbiAgICB0aGlzLl9hbGxvd2VkUHJpbmNpcGFscyA9IGNvbmZpZy5hbGxvd2VkUHJpbmNpcGFscztcbiAgICB0aGlzLl9nYXRld2F5TG9hZEJhbGFuY2VyQXJucyA9IGNvbmZpZy5nYXRld2F5TG9hZEJhbGFuY2VyQXJucztcbiAgICB0aGlzLl9uZXR3b3JrTG9hZEJhbGFuY2VyQXJucyA9IGNvbmZpZy5uZXR3b3JrTG9hZEJhbGFuY2VyQXJucztcbiAgICB0aGlzLl9wcml2YXRlRG5zTmFtZSA9IGNvbmZpZy5wcml2YXRlRG5zTmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY2NlcHRhbmNlX3JlcXVpcmVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjY2VwdGFuY2VSZXF1aXJlZDogYm9vbGVhbjtcbiAgcHVibGljIGdldCBhY2NlcHRhbmNlUmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWNjZXB0YW5jZV9yZXF1aXJlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXB0YW5jZVJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWNjZXB0YW5jZVJlcXVpcmVkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2VwdGFuY2VSZXF1aXJlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NlcHRhbmNlUmVxdWlyZWRcbiAgfVxuXG4gIC8vIGFsbG93ZWRfcHJpbmNpcGFscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93ZWRQcmluY2lwYWxzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgYWxsb3dlZFByaW5jaXBhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxsb3dlZF9wcmluY2lwYWxzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkUHJpbmNpcGFscyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGxvd2VkUHJpbmNpcGFscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93ZWRQcmluY2lwYWxzKCkge1xuICAgIHRoaXMuX2FsbG93ZWRQcmluY2lwYWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkUHJpbmNpcGFsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd2VkUHJpbmNpcGFsc1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZXMnKTtcbiAgfVxuXG4gIC8vIGJhc2VfZW5kcG9pbnRfZG5zX25hbWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmFzZUVuZHBvaW50RG5zTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYmFzZV9lbmRwb2ludF9kbnNfbmFtZXMnKTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfbG9hZF9iYWxhbmNlcl9hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dhdGV3YXlMb2FkQmFsYW5jZXJBcm5zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUxvYWRCYWxhbmNlckFybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZ2F0ZXdheV9sb2FkX2JhbGFuY2VyX2FybnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdhdGV3YXlMb2FkQmFsYW5jZXJBcm5zKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9nYXRld2F5TG9hZEJhbGFuY2VyQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdhdGV3YXlMb2FkQmFsYW5jZXJBcm5zKCkge1xuICAgIHRoaXMuX2dhdGV3YXlMb2FkQmFsYW5jZXJBcm5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnYXRld2F5TG9hZEJhbGFuY2VyQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nYXRld2F5TG9hZEJhbGFuY2VyQXJuc1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1hbmFnZXNfdnBjX2VuZHBvaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hbmFnZXNWcGNFbmRwb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbWFuYWdlc192cGNfZW5kcG9pbnRzJyk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2xvYWRfYmFsYW5jZXJfYXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrTG9hZEJhbGFuY2VyQXJucz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IG5ldHdvcmtMb2FkQmFsYW5jZXJBcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ25ldHdvcmtfbG9hZF9iYWxhbmNlcl9hcm5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrTG9hZEJhbGFuY2VyQXJucyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fbmV0d29ya0xvYWRCYWxhbmNlckFybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrTG9hZEJhbGFuY2VyQXJucygpIHtcbiAgICB0aGlzLl9uZXR3b3JrTG9hZEJhbGFuY2VyQXJucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0xvYWRCYWxhbmNlckFybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0xvYWRCYWxhbmNlckFybnNcbiAgfVxuXG4gIC8vIHByaXZhdGVfZG5zX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcml2YXRlRG5zTmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBwcml2YXRlRG5zTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfZG5zX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaXZhdGVEbnNOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlRG5zTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByaXZhdGVEbnNOYW1lKCkge1xuICAgIHRoaXMuX3ByaXZhdGVEbnNOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcml2YXRlRG5zTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcml2YXRlRG5zTmFtZVxuICB9XG5cbiAgLy8gcHJpdmF0ZV9kbnNfbmFtZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBwcml2YXRlRG5zTmFtZUNvbmZpZ3VyYXRpb24oaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgVnBjRW5kcG9pbnRTZXJ2aWNlUHJpdmF0ZURuc05hbWVDb25maWd1cmF0aW9uKHRoaXMsICdwcml2YXRlX2Ruc19uYW1lX2NvbmZpZ3VyYXRpb24nLCBpbmRleCk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfbmFtZScpO1xuICB9XG5cbiAgLy8gc2VydmljZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHN0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0ZScpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjZXB0YW5jZV9yZXF1aXJlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FjY2VwdGFuY2VSZXF1aXJlZCksXG4gICAgICBhbGxvd2VkX3ByaW5jaXBhbHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2FsbG93ZWRQcmluY2lwYWxzKSxcbiAgICAgIGdhdGV3YXlfbG9hZF9iYWxhbmNlcl9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9nYXRld2F5TG9hZEJhbGFuY2VyQXJucyksXG4gICAgICBuZXR3b3JrX2xvYWRfYmFsYW5jZXJfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbmV0d29ya0xvYWRCYWxhbmNlckFybnMpLFxuICAgICAgcHJpdmF0ZV9kbnNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJpdmF0ZURuc05hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgfTtcbiAgfVxufVxuIl19