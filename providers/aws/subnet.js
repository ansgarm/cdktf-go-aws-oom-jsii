"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subnet = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function subnetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet}.
 */
class Subnet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_subnet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
        this._availabilityZone = config.availabilityZone;
        this._availabilityZoneId = config.availabilityZoneId;
        this._cidrBlock = config.cidrBlock;
        this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
        this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
        this._outpostArn = config.outpostArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcId = config.vpcId;
        this._timeouts = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get assignIpv6AddressOnCreation() {
        return this.getBooleanAttribute('assign_ipv6_address_on_creation');
    }
    set assignIpv6AddressOnCreation(value) {
        this._assignIpv6AddressOnCreation = value;
    }
    resetAssignIpv6AddressOnCreation() {
        this._assignIpv6AddressOnCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assignIpv6AddressOnCreationInput() {
        return this._assignIpv6AddressOnCreation;
    }
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    set availabilityZone(value) {
        this._availabilityZone = value;
    }
    resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneInput() {
        return this._availabilityZone;
    }
    get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    set availabilityZoneId(value) {
        this._availabilityZoneId = value;
    }
    resetAvailabilityZoneId() {
        this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneIdInput() {
        return this._availabilityZoneId;
    }
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    set cidrBlock(value) {
        this._cidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    get cidrBlockInput() {
        return this._cidrBlock;
    }
    get customerOwnedIpv4Pool() {
        return this.getStringAttribute('customer_owned_ipv4_pool');
    }
    set customerOwnedIpv4Pool(value) {
        this._customerOwnedIpv4Pool = value;
    }
    resetCustomerOwnedIpv4Pool() {
        this._customerOwnedIpv4Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerOwnedIpv4PoolInput() {
        return this._customerOwnedIpv4Pool;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get ipv6CidrBlock() {
        return this.getStringAttribute('ipv6_cidr_block');
    }
    set ipv6CidrBlock(value) {
        this._ipv6CidrBlock = value;
    }
    resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }
    // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
    get ipv6CidrBlockAssociationId() {
        return this.getStringAttribute('ipv6_cidr_block_association_id');
    }
    get mapCustomerOwnedIpOnLaunch() {
        return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
    }
    set mapCustomerOwnedIpOnLaunch(value) {
        this._mapCustomerOwnedIpOnLaunch = value;
    }
    resetMapCustomerOwnedIpOnLaunch() {
        this._mapCustomerOwnedIpOnLaunch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mapCustomerOwnedIpOnLaunchInput() {
        return this._mapCustomerOwnedIpOnLaunch;
    }
    get mapPublicIpOnLaunch() {
        return this.getBooleanAttribute('map_public_ip_on_launch');
    }
    set mapPublicIpOnLaunch(value) {
        this._mapPublicIpOnLaunch = value;
    }
    resetMapPublicIpOnLaunch() {
        this._mapPublicIpOnLaunch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mapPublicIpOnLaunchInput() {
        return this._mapPublicIpOnLaunch;
    }
    get outpostArn() {
        return this.getStringAttribute('outpost_arn');
    }
    set outpostArn(value) {
        this._outpostArn = value;
    }
    resetOutpostArn() {
        this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outpostArnInput() {
        return this._outpostArn;
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
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
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            assign_ipv6_address_on_creation: cdktf.booleanToTerraform(this._assignIpv6AddressOnCreation),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
            map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
            outpost_arn: cdktf.stringToTerraform(this._outpostArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: subnetTimeoutsToTerraform(this._timeouts),
        };
    }
}
exports.Subnet = Subnet;
_a = JSII_RTTI_SYMBOL_1;
Subnet[_a] = { fqn: "hashicorp_aws.Subnet", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibmV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VibmV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBdUUvQixTQUFTLHlCQUF5QixDQUFDLE1BQXVCO0lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQzs7OztBQU1ELE1BQWEsTUFBTyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFakQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBb0I7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxZQUFZO1lBQ25DLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1B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QzVGLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN2RSxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM5RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDN0QsK0JBQStCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUMzRix1QkFBdUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQzVFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0RCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDNUMsUUFBUSxFQUFFLHlCQUF5QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDcEQsQ0FBQztJQUNKLENBQUM7O0FBN1JILHdCQThSQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9zdWJuZXQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFN1Ym5ldENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXNzaWduSXB2NkFkZHJlc3NPbkNyZWF0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2lkckJsb2NrOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tZXJPd25lZElwdjRQb29sPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlwdjZDaWRyQmxvY2s/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXBDdXN0b21lck93bmVkSXBPbkxhdW5jaD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hcFB1YmxpY0lwT25MYXVuY2g/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdXRwb3N0QXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogU3VibmV0VGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN1Ym5ldFRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdWJuZXRUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IFN1Ym5ldFRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTdWJuZXQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU3VibmV0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc3VibmV0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2Fzc2lnbklwdjZBZGRyZXNzT25DcmVhdGlvbiA9IGNvbmZpZy5hc3NpZ25JcHY2QWRkcmVzc09uQ3JlYXRpb247XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IGNvbmZpZy5hdmFpbGFiaWxpdHlab25lO1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVJZCA9IGNvbmZpZy5hdmFpbGFiaWxpdHlab25lSWQ7XG4gICAgdGhpcy5fY2lkckJsb2NrID0gY29uZmlnLmNpZHJCbG9jaztcbiAgICB0aGlzLl9jdXN0b21lck93bmVkSXB2NFBvb2wgPSBjb25maWcuY3VzdG9tZXJPd25lZElwdjRQb29sO1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSBjb25maWcuaXB2NkNpZHJCbG9jaztcbiAgICB0aGlzLl9tYXBDdXN0b21lck93bmVkSXBPbkxhdW5jaCA9IGNvbmZpZy5tYXBDdXN0b21lck93bmVkSXBPbkxhdW5jaDtcbiAgICB0aGlzLl9tYXBQdWJsaWNJcE9uTGF1bmNoID0gY29uZmlnLm1hcFB1YmxpY0lwT25MYXVuY2g7XG4gICAgdGhpcy5fb3V0cG9zdEFybiA9IGNvbmZpZy5vdXRwb3N0QXJuO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdnBjSWQgPSBjb25maWcudnBjSWQ7XG4gICAgdGhpcy5fdGltZW91dHMgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXNzaWduX2lwdjZfYWRkcmVzc19vbl9jcmVhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hc3NpZ25JcHY2QWRkcmVzc09uQ3JlYXRpb24/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGFzc2lnbklwdjZBZGRyZXNzT25DcmVhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhc3NpZ25faXB2Nl9hZGRyZXNzX29uX2NyZWF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhc3NpZ25JcHY2QWRkcmVzc09uQ3JlYXRpb24odmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fYXNzaWduSXB2NkFkZHJlc3NPbkNyZWF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXNzaWduSXB2NkFkZHJlc3NPbkNyZWF0aW9uKCkge1xuICAgIHRoaXMuX2Fzc2lnbklwdjZBZGRyZXNzT25DcmVhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXNzaWduSXB2NkFkZHJlc3NPbkNyZWF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbklwdjZBZGRyZXNzT25DcmVhdGlvblxuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2YWlsYWJpbGl0eVpvbmUoKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFiaWxpdHlab25lXG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F2YWlsYWJpbGl0eVpvbmVJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lSWQoKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZUlkXG4gIH1cblxuICAvLyBjaWRyX2Jsb2NrIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NpZHJCbG9jazogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNpZHJCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NpZHJfYmxvY2snKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNpZHJCbG9jayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2lkckJsb2NrID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNpZHJCbG9ja0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaWRyQmxvY2tcbiAgfVxuXG4gIC8vIGN1c3RvbWVyX293bmVkX2lwdjRfcG9vbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21lck93bmVkSXB2NFBvb2w/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJPd25lZElwdjRQb29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfb3duZWRfaXB2NF9wb29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21lck93bmVkSXB2NFBvb2wodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9jdXN0b21lck93bmVkSXB2NFBvb2wgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21lck93bmVkSXB2NFBvb2woKSB7XG4gICAgdGhpcy5fY3VzdG9tZXJPd25lZElwdjRQb29sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21lck93bmVkSXB2NFBvb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tZXJPd25lZElwdjRQb29sXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaXB2Nl9jaWRyX2Jsb2NrIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjZDaWRyQmxvY2s/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaXB2NkNpZHJCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwdjZfY2lkcl9ibG9jaycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXB2NkNpZHJCbG9jayh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJcHY2Q2lkckJsb2NrKCkge1xuICAgIHRoaXMuX2lwdjZDaWRyQmxvY2sgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlwdjZDaWRyQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXB2NkNpZHJCbG9ja1xuICB9XG5cbiAgLy8gaXB2Nl9jaWRyX2Jsb2NrX2Fzc29jaWF0aW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXB2NkNpZHJCbG9ja0Fzc29jaWF0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcHY2X2NpZHJfYmxvY2tfYXNzb2NpYXRpb25faWQnKTtcbiAgfVxuXG4gIC8vIG1hcF9jdXN0b21lcl9vd25lZF9pcF9vbl9sYXVuY2ggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFwQ3VzdG9tZXJPd25lZElwT25MYXVuY2g/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IG1hcEN1c3RvbWVyT3duZWRJcE9uTGF1bmNoKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ21hcF9jdXN0b21lcl9vd25lZF9pcF9vbl9sYXVuY2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hcEN1c3RvbWVyT3duZWRJcE9uTGF1bmNoKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX21hcEN1c3RvbWVyT3duZWRJcE9uTGF1bmNoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFwQ3VzdG9tZXJPd25lZElwT25MYXVuY2goKSB7XG4gICAgdGhpcy5fbWFwQ3VzdG9tZXJPd25lZElwT25MYXVuY2ggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hcEN1c3RvbWVyT3duZWRJcE9uTGF1bmNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcEN1c3RvbWVyT3duZWRJcE9uTGF1bmNoXG4gIH1cblxuICAvLyBtYXBfcHVibGljX2lwX29uX2xhdW5jaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXBQdWJsaWNJcE9uTGF1bmNoPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBtYXBQdWJsaWNJcE9uTGF1bmNoKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ21hcF9wdWJsaWNfaXBfb25fbGF1bmNoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXBQdWJsaWNJcE9uTGF1bmNoKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX21hcFB1YmxpY0lwT25MYXVuY2ggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXBQdWJsaWNJcE9uTGF1bmNoKCkge1xuICAgIHRoaXMuX21hcFB1YmxpY0lwT25MYXVuY2ggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hcFB1YmxpY0lwT25MYXVuY2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwUHVibGljSXBPbkxhdW5jaFxuICB9XG5cbiAgLy8gb3V0cG9zdF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3V0cG9zdEFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBvdXRwb3N0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3V0cG9zdF9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dHBvc3RBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9vdXRwb3N0QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3V0cG9zdEFybigpIHtcbiAgICB0aGlzLl9vdXRwb3N0QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdXRwb3N0QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHBvc3RBcm5cbiAgfVxuXG4gIC8vIG93bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyX2lkJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTsgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbFxuICB9XG5cbiAgLy8gdnBjX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZwY0lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdnBjSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2cGNfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92cGNJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNJZFxuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHM/OiBTdWJuZXRUaW1lb3V0cztcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aW1lb3V0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRzKHZhbHVlOiBTdWJuZXRUaW1lb3V0cyApIHtcbiAgICB0aGlzLl90aW1lb3V0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0c1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhc3NpZ25faXB2Nl9hZGRyZXNzX29uX2NyZWF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXNzaWduSXB2NkFkZHJlc3NPbkNyZWF0aW9uKSxcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdmFpbGFiaWxpdHlab25lKSxcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdmFpbGFiaWxpdHlab25lSWQpLFxuICAgICAgY2lkcl9ibG9jazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2lkckJsb2NrKSxcbiAgICAgIGN1c3RvbWVyX293bmVkX2lwdjRfcG9vbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tZXJPd25lZElwdjRQb29sKSxcbiAgICAgIGlwdjZfY2lkcl9ibG9jazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faXB2NkNpZHJCbG9jayksXG4gICAgICBtYXBfY3VzdG9tZXJfb3duZWRfaXBfb25fbGF1bmNoOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fbWFwQ3VzdG9tZXJPd25lZElwT25MYXVuY2gpLFxuICAgICAgbWFwX3B1YmxpY19pcF9vbl9sYXVuY2g6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9tYXBQdWJsaWNJcE9uTGF1bmNoKSxcbiAgICAgIG91dHBvc3RfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9vdXRwb3N0QXJuKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdnBjX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92cGNJZCksXG4gICAgICB0aW1lb3V0czogc3VibmV0VGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cyksXG4gICAgfTtcbiAgfVxufVxuIl19