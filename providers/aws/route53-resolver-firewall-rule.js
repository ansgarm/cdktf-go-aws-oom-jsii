"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route53ResolverFirewallRule = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule}.
 */
class Route53ResolverFirewallRule extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route53_resolver_firewall_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._action = config.action;
        this._blockOverrideDnsType = config.blockOverrideDnsType;
        this._blockOverrideDomain = config.blockOverrideDomain;
        this._blockOverrideTtl = config.blockOverrideTtl;
        this._blockResponse = config.blockResponse;
        this._firewallDomainListId = config.firewallDomainListId;
        this._firewallRuleGroupId = config.firewallRuleGroupId;
        this._name = config.name;
        this._priority = config.priority;
    }
    get action() {
        return this.getStringAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
    get blockOverrideDnsType() {
        return this.getStringAttribute('block_override_dns_type');
    }
    set blockOverrideDnsType(value) {
        this._blockOverrideDnsType = value;
    }
    resetBlockOverrideDnsType() {
        this._blockOverrideDnsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockOverrideDnsTypeInput() {
        return this._blockOverrideDnsType;
    }
    get blockOverrideDomain() {
        return this.getStringAttribute('block_override_domain');
    }
    set blockOverrideDomain(value) {
        this._blockOverrideDomain = value;
    }
    resetBlockOverrideDomain() {
        this._blockOverrideDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockOverrideDomainInput() {
        return this._blockOverrideDomain;
    }
    get blockOverrideTtl() {
        return this.getNumberAttribute('block_override_ttl');
    }
    set blockOverrideTtl(value) {
        this._blockOverrideTtl = value;
    }
    resetBlockOverrideTtl() {
        this._blockOverrideTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockOverrideTtlInput() {
        return this._blockOverrideTtl;
    }
    get blockResponse() {
        return this.getStringAttribute('block_response');
    }
    set blockResponse(value) {
        this._blockResponse = value;
    }
    resetBlockResponse() {
        this._blockResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockResponseInput() {
        return this._blockResponse;
    }
    get firewallDomainListId() {
        return this.getStringAttribute('firewall_domain_list_id');
    }
    set firewallDomainListId(value) {
        this._firewallDomainListId = value;
    }
    // Temporarily expose input value. Use with caution.
    get firewallDomainListIdInput() {
        return this._firewallDomainListId;
    }
    get firewallRuleGroupId() {
        return this.getStringAttribute('firewall_rule_group_id');
    }
    set firewallRuleGroupId(value) {
        this._firewallRuleGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get firewallRuleGroupIdInput() {
        return this._firewallRuleGroupId;
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
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            action: cdktf.stringToTerraform(this._action),
            block_override_dns_type: cdktf.stringToTerraform(this._blockOverrideDnsType),
            block_override_domain: cdktf.stringToTerraform(this._blockOverrideDomain),
            block_override_ttl: cdktf.numberToTerraform(this._blockOverrideTtl),
            block_response: cdktf.stringToTerraform(this._blockResponse),
            firewall_domain_list_id: cdktf.stringToTerraform(this._firewallDomainListId),
            firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
        };
    }
}
exports.Route53ResolverFirewallRule = Route53ResolverFirewallRule;
_a = JSII_RTTI_SYMBOL_1;
Route53ResolverFirewallRule[_a] = { fqn: "hashicorp_aws.Route53ResolverFirewallRule", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1My1yZXNvbHZlci1maXJld2FsbC1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGU1My1yZXNvbHZlci1maXJld2FsbC1ydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCOzs7O0FBOEMvQixNQUFhLDJCQUE0QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFdEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBeUM7UUFDeEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxvQ0FBb0M7WUFDM0QsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFD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Q25FLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM1RCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzVFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDMUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNsRCxDQUFDO0lBQ0osQ0FBQzs7QUE3TEgsa0VBOExDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL3JvdXRlNTNfcmVzb2x2ZXJfZmlyZXdhbGxfcnVsZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJsb2NrT3ZlcnJpZGVEbnNUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJsb2NrT3ZlcnJpZGVEb21haW4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tPdmVycmlkZVR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tSZXNwb25zZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlyZXdhbGxEb21haW5MaXN0SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpcmV3YWxsUnVsZUdyb3VwSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlcjtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBSb3V0ZTUzUmVzb2x2ZXJGaXJld2FsbFJ1bGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUm91dGU1M1Jlc29sdmVyRmlyZXdhbGxSdWxlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfcm91dGU1M19yZXNvbHZlcl9maXJld2FsbF9ydWxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FjdGlvbiA9IGNvbmZpZy5hY3Rpb247XG4gICAgdGhpcy5fYmxvY2tPdmVycmlkZURuc1R5cGUgPSBjb25maWcuYmxvY2tPdmVycmlkZURuc1R5cGU7XG4gICAgdGhpcy5fYmxvY2tPdmVycmlkZURvbWFpbiA9IGNvbmZpZy5ibG9ja092ZXJyaWRlRG9tYWluO1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVUdGwgPSBjb25maWcuYmxvY2tPdmVycmlkZVR0bDtcbiAgICB0aGlzLl9ibG9ja1Jlc3BvbnNlID0gY29uZmlnLmJsb2NrUmVzcG9uc2U7XG4gICAgdGhpcy5fZmlyZXdhbGxEb21haW5MaXN0SWQgPSBjb25maWcuZmlyZXdhbGxEb21haW5MaXN0SWQ7XG4gICAgdGhpcy5fZmlyZXdhbGxSdWxlR3JvdXBJZCA9IGNvbmZpZy5maXJld2FsbFJ1bGVHcm91cElkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wcmlvcml0eSA9IGNvbmZpZy5wcmlvcml0eTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvblxuICB9XG5cbiAgLy8gYmxvY2tfb3ZlcnJpZGVfZG5zX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvY2tPdmVycmlkZURuc1R5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYmxvY2tPdmVycmlkZURuc1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdibG9ja19vdmVycmlkZV9kbnNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvY2tPdmVycmlkZURuc1R5cGUodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9ibG9ja092ZXJyaWRlRG5zVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJsb2NrT3ZlcnJpZGVEbnNUeXBlKCkge1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVEbnNUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibG9ja092ZXJyaWRlRG5zVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja092ZXJyaWRlRG5zVHlwZVxuICB9XG5cbiAgLy8gYmxvY2tfb3ZlcnJpZGVfZG9tYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jsb2NrT3ZlcnJpZGVEb21haW4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYmxvY2tPdmVycmlkZURvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jsb2NrX292ZXJyaWRlX2RvbWFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvY2tPdmVycmlkZURvbWFpbih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVEb21haW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9ja092ZXJyaWRlRG9tYWluKCkge1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVEb21haW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJsb2NrT3ZlcnJpZGVEb21haW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tPdmVycmlkZURvbWFpblxuICB9XG5cbiAgLy8gYmxvY2tfb3ZlcnJpZGVfdHRsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jsb2NrT3ZlcnJpZGVUdGw/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgYmxvY2tPdmVycmlkZVR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Jsb2NrX292ZXJyaWRlX3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvY2tPdmVycmlkZVR0bCh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVUdGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9ja092ZXJyaWRlVHRsKCkge1xuICAgIHRoaXMuX2Jsb2NrT3ZlcnJpZGVUdGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJsb2NrT3ZlcnJpZGVUdGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tPdmVycmlkZVR0bFxuICB9XG5cbiAgLy8gYmxvY2tfcmVzcG9uc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvY2tSZXNwb25zZT86IHN0cmluZztcbiAgcHVibGljIGdldCBibG9ja1Jlc3BvbnNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmxvY2tfcmVzcG9uc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJsb2NrUmVzcG9uc2UodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9ibG9ja1Jlc3BvbnNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmxvY2tSZXNwb25zZSgpIHtcbiAgICB0aGlzLl9ibG9ja1Jlc3BvbnNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibG9ja1Jlc3BvbnNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2NrUmVzcG9uc2VcbiAgfVxuXG4gIC8vIGZpcmV3YWxsX2RvbWFpbl9saXN0X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpcmV3YWxsRG9tYWluTGlzdElkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZmlyZXdhbGxEb21haW5MaXN0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaXJld2FsbF9kb21haW5fbGlzdF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlyZXdhbGxEb21haW5MaXN0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpcmV3YWxsRG9tYWluTGlzdElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpcmV3YWxsRG9tYWluTGlzdElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcmV3YWxsRG9tYWluTGlzdElkXG4gIH1cblxuICAvLyBmaXJld2FsbF9ydWxlX2dyb3VwX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpcmV3YWxsUnVsZUdyb3VwSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBmaXJld2FsbFJ1bGVHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlyZXdhbGxfcnVsZV9ncm91cF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlyZXdhbGxSdWxlR3JvdXBJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlyZXdhbGxSdWxlR3JvdXBJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJld2FsbFJ1bGVHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcmV3YWxsUnVsZUdyb3VwSWRcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHByaW9yaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByaW9yaXR5OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcmlvcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpb3JpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaW9yaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWN0aW9uKSxcbiAgICAgIGJsb2NrX292ZXJyaWRlX2Ruc190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ibG9ja092ZXJyaWRlRG5zVHlwZSksXG4gICAgICBibG9ja19vdmVycmlkZV9kb21haW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Jsb2NrT3ZlcnJpZGVEb21haW4pLFxuICAgICAgYmxvY2tfb3ZlcnJpZGVfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9ibG9ja092ZXJyaWRlVHRsKSxcbiAgICAgIGJsb2NrX3Jlc3BvbnNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ibG9ja1Jlc3BvbnNlKSxcbiAgICAgIGZpcmV3YWxsX2RvbWFpbl9saXN0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maXJld2FsbERvbWFpbkxpc3RJZCksXG4gICAgICBmaXJld2FsbF9ydWxlX2dyb3VwX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9maXJld2FsbFJ1bGVHcm91cElkKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcHJpb3JpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3ByaW9yaXR5KSxcbiAgICB9O1xuICB9XG59XG4iXX0=