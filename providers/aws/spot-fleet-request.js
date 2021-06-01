"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotFleetRequest = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
    };
}
function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
function spotFleetRequestLaunchSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ami: cdktf.stringToTerraform(struct.ami),
        associate_public_ip_address: cdktf.booleanToTerraform(struct.associatePublicIpAddress),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        ebs_optimized: cdktf.booleanToTerraform(struct.ebsOptimized),
        iam_instance_profile: cdktf.stringToTerraform(struct.iamInstanceProfile),
        iam_instance_profile_arn: cdktf.stringToTerraform(struct.iamInstanceProfileArn),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        key_name: cdktf.stringToTerraform(struct.keyName),
        monitoring: cdktf.booleanToTerraform(struct.monitoring),
        placement_group: cdktf.stringToTerraform(struct.placementGroup),
        placement_tenancy: cdktf.stringToTerraform(struct.placementTenancy),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        user_data: cdktf.stringToTerraform(struct.userData),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.vpcSecurityGroupIds),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        ebs_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform)(struct.ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform)(struct.ephemeralBlockDevice),
        root_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform)(struct.rootBlockDevice),
    };
}
function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        priority: cdktf.numberToTerraform(struct.priority),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
    };
}
function spotFleetRequestLaunchTemplateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_specification: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform)(struct.launchTemplateSpecification),
        overrides: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigOverridesToTerraform)(struct.overrides),
    };
}
function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        replacement_strategy: cdktf.stringToTerraform(struct.replacementStrategy),
    };
}
function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_rebalance: cdktf.listMapper(spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform)(struct.capacityRebalance),
    };
}
function spotFleetRequestTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request}.
 */
class SpotFleetRequest extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_spot_fleet_request',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allocationStrategy = config.allocationStrategy;
        this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
        this._fleetType = config.fleetType;
        this._iamFleetRole = config.iamFleetRole;
        this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
        this._instancePoolsToUseCount = config.instancePoolsToUseCount;
        this._loadBalancers = config.loadBalancers;
        this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
        this._spotPrice = config.spotPrice;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._targetCapacity = config.targetCapacity;
        this._targetGroupArns = config.targetGroupArns;
        this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
        this._validFrom = config.validFrom;
        this._validUntil = config.validUntil;
        this._waitForFulfillment = config.waitForFulfillment;
        this._launchSpecification = config.launchSpecification;
        this._launchTemplateConfig = config.launchTemplateConfig;
        this._spotMaintenanceStrategies = config.spotMaintenanceStrategies;
        this._timeouts = config.timeouts;
    }
    get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    set allocationStrategy(value) {
        this._allocationStrategy = value;
    }
    resetAllocationStrategy() {
        this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocationStrategyInput() {
        return this._allocationStrategy;
    }
    // client_token - computed: true, optional: false, required: false
    get clientToken() {
        return this.getStringAttribute('client_token');
    }
    get excessCapacityTerminationPolicy() {
        return this.getStringAttribute('excess_capacity_termination_policy');
    }
    set excessCapacityTerminationPolicy(value) {
        this._excessCapacityTerminationPolicy = value;
    }
    resetExcessCapacityTerminationPolicy() {
        this._excessCapacityTerminationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excessCapacityTerminationPolicyInput() {
        return this._excessCapacityTerminationPolicy;
    }
    get fleetType() {
        return this.getStringAttribute('fleet_type');
    }
    set fleetType(value) {
        this._fleetType = value;
    }
    resetFleetType() {
        this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fleetTypeInput() {
        return this._fleetType;
    }
    get iamFleetRole() {
        return this.getStringAttribute('iam_fleet_role');
    }
    set iamFleetRole(value) {
        this._iamFleetRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get iamFleetRoleInput() {
        return this._iamFleetRole;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get instanceInterruptionBehaviour() {
        return this.getStringAttribute('instance_interruption_behaviour');
    }
    set instanceInterruptionBehaviour(value) {
        this._instanceInterruptionBehaviour = value;
    }
    resetInstanceInterruptionBehaviour() {
        this._instanceInterruptionBehaviour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceInterruptionBehaviourInput() {
        return this._instanceInterruptionBehaviour;
    }
    get instancePoolsToUseCount() {
        return this.getNumberAttribute('instance_pools_to_use_count');
    }
    set instancePoolsToUseCount(value) {
        this._instancePoolsToUseCount = value;
    }
    resetInstancePoolsToUseCount() {
        this._instancePoolsToUseCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instancePoolsToUseCountInput() {
        return this._instancePoolsToUseCount;
    }
    get loadBalancers() {
        return this.getListAttribute('load_balancers');
    }
    set loadBalancers(value) {
        this._loadBalancers = value;
    }
    resetLoadBalancers() {
        this._loadBalancers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancersInput() {
        return this._loadBalancers;
    }
    get replaceUnhealthyInstances() {
        return this.getBooleanAttribute('replace_unhealthy_instances');
    }
    set replaceUnhealthyInstances(value) {
        this._replaceUnhealthyInstances = value;
    }
    resetReplaceUnhealthyInstances() {
        this._replaceUnhealthyInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replaceUnhealthyInstancesInput() {
        return this._replaceUnhealthyInstances;
    }
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    set spotPrice(value) {
        this._spotPrice = value;
    }
    resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotPriceInput() {
        return this._spotPrice;
    }
    // spot_request_state - computed: true, optional: false, required: false
    get spotRequestState() {
        return this.getStringAttribute('spot_request_state');
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
    get targetCapacity() {
        return this.getNumberAttribute('target_capacity');
    }
    set targetCapacity(value) {
        this._targetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetCapacityInput() {
        return this._targetCapacity;
    }
    get targetGroupArns() {
        return this.getListAttribute('target_group_arns');
    }
    set targetGroupArns(value) {
        this._targetGroupArns = value;
    }
    resetTargetGroupArns() {
        this._targetGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetGroupArnsInput() {
        return this._targetGroupArns;
    }
    get terminateInstancesWithExpiration() {
        return this.getBooleanAttribute('terminate_instances_with_expiration');
    }
    set terminateInstancesWithExpiration(value) {
        this._terminateInstancesWithExpiration = value;
    }
    resetTerminateInstancesWithExpiration() {
        this._terminateInstancesWithExpiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminateInstancesWithExpirationInput() {
        return this._terminateInstancesWithExpiration;
    }
    get validFrom() {
        return this.getStringAttribute('valid_from');
    }
    set validFrom(value) {
        this._validFrom = value;
    }
    resetValidFrom() {
        this._validFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validFromInput() {
        return this._validFrom;
    }
    get validUntil() {
        return this.getStringAttribute('valid_until');
    }
    set validUntil(value) {
        this._validUntil = value;
    }
    resetValidUntil() {
        this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validUntilInput() {
        return this._validUntil;
    }
    get waitForFulfillment() {
        return this.getBooleanAttribute('wait_for_fulfillment');
    }
    set waitForFulfillment(value) {
        this._waitForFulfillment = value;
    }
    resetWaitForFulfillment() {
        this._waitForFulfillment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForFulfillmentInput() {
        return this._waitForFulfillment;
    }
    get launchSpecification() {
        return this.interpolationForAttribute('launch_specification');
    }
    set launchSpecification(value) {
        this._launchSpecification = value;
    }
    resetLaunchSpecification() {
        this._launchSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchSpecificationInput() {
        return this._launchSpecification;
    }
    get launchTemplateConfig() {
        return this.interpolationForAttribute('launch_template_config');
    }
    set launchTemplateConfig(value) {
        this._launchTemplateConfig = value;
    }
    resetLaunchTemplateConfig() {
        this._launchTemplateConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateConfigInput() {
        return this._launchTemplateConfig;
    }
    get spotMaintenanceStrategies() {
        return this.interpolationForAttribute('spot_maintenance_strategies');
    }
    set spotMaintenanceStrategies(value) {
        this._spotMaintenanceStrategies = value;
    }
    resetSpotMaintenanceStrategies() {
        this._spotMaintenanceStrategies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get spotMaintenanceStrategiesInput() {
        return this._spotMaintenanceStrategies;
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
            allocation_strategy: cdktf.stringToTerraform(this._allocationStrategy),
            excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            iam_fleet_role: cdktf.stringToTerraform(this._iamFleetRole),
            instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
            instance_pools_to_use_count: cdktf.numberToTerraform(this._instancePoolsToUseCount),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
            replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
            spot_price: cdktf.stringToTerraform(this._spotPrice),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_capacity: cdktf.numberToTerraform(this._targetCapacity),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
            terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
            valid_from: cdktf.stringToTerraform(this._validFrom),
            valid_until: cdktf.stringToTerraform(this._validUntil),
            wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
            launch_specification: cdktf.listMapper(spotFleetRequestLaunchSpecificationToTerraform)(this._launchSpecification),
            launch_template_config: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
            spot_maintenance_strategies: cdktf.listMapper(spotFleetRequestSpotMaintenanceStrategiesToTerraform)(this._spotMaintenanceStrategies),
            timeouts: spotFleetRequestTimeoutsToTerraform(this._timeouts),
        };
    }
}
exports.SpotFleetRequest = SpotFleetRequest;
_a = JSII_RTTI_SYMBOL_1;
SpotFleetRequest[_a] = { fqn: "hashicorp_aws.SpotFleetRequest", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdC1mbGVldC1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BvdC1mbGVldC1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBeUkvQixTQUFTLDREQUE0RCxDQUFDLE1BQTBEO0lBQzlILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDckQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7QUFDSCxDQUFDO0FBYUQsU0FBUyxrRUFBa0UsQ0FBQyxNQUFnRTtJQUMxSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tB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Q0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDckgsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUNwSSxRQUFRLEVBQUUsbUNBQW1DLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM5RCxDQUFDO0lBQ0osQ0FBQzs7QUF4YUgsNENBeWFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL3Nwb3RfZmxlZXRfcmVxdWVzdC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZsZWV0VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbUZsZWV0Um9sZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvYWRCYWxhbmNlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdFByaWNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldENhcGFjaXR5OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRHcm91cEFybnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWxpZEZyb20/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWxpZFVudGlsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2FpdEZvckZ1bGZpbGxtZW50PzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFNwZWNpZmljYXRpb24/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVDb25maWc/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXM/OiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBTcG90RmxlZXRSZXF1ZXN0VGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGVPblRlcm1pbmF0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc25hcHNob3RJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJvdWdocHV0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZVR5cGU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlT25UZXJtaW5hdGlvbiksXG4gICAgZGV2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgZW5jcnlwdGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0ZWQpLFxuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgc25hcHNob3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RJZCksXG4gICAgdGhyb3VnaHB1dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aHJvdWdocHV0KSxcbiAgICB2b2x1bWVfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVTaXplKSxcbiAgICB2b2x1bWVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRXBoZW1lcmFsQmxvY2tEZXZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsTmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICB2aXJ0dWFsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGVPblRlcm1pbmF0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm91Z2hwdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIHRocm91Z2hwdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGhyb3VnaHB1dCksXG4gICAgdm9sdW1lX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZSksXG4gICAgdm9sdW1lX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFtaTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3M/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNPcHRpbWl6ZWQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWFtSW5zdGFuY2VQcm9maWxlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1JbnN0YW5jZVByb2ZpbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXlOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vbml0b3Jpbmc/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwbGFjZW1lbnRHcm91cD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYWNlbWVudFRlbmFuY3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdFByaWNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlckRhdGE/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0ZWRDYXBhY2l0eT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic0Jsb2NrRGV2aWNlPzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FYnNCbG9ja0RldmljZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXBoZW1lcmFsQmxvY2tEZXZpY2U/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb290QmxvY2tEZXZpY2U/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZVtdO1xufVxuXG5mdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFtaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbWkpLFxuICAgIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKSxcbiAgICBhdmFpbGFiaWxpdHlfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdmFpbGFiaWxpdHlab25lKSxcbiAgICBlYnNfb3B0aW1pemVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lYnNPcHRpbWl6ZWQpLFxuICAgIGlhbV9pbnN0YW5jZV9wcm9maWxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbUluc3RhbmNlUHJvZmlsZSksXG4gICAgaWFtX2luc3RhbmNlX3Byb2ZpbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlhbUluc3RhbmNlUHJvZmlsZUFybiksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIGtleV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleU5hbWUpLFxuICAgIG1vbml0b3Jpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1vbml0b3JpbmcpLFxuICAgIHBsYWNlbWVudF9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wbGFjZW1lbnRHcm91cCksXG4gICAgcGxhY2VtZW50X3RlbmFuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGxhY2VtZW50VGVuYW5jeSksXG4gICAgc3BvdF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90UHJpY2UpLFxuICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgICB1c2VyX2RhdGE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlckRhdGEpLFxuICAgIHZwY19zZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudnBjU2VjdXJpdHlHcm91cElkcyksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgZWJzX2Jsb2NrX2RldmljZTogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlVG9UZXJyYWZvcm0pKHN0cnVjdCEuZWJzQmxvY2tEZXZpY2UpLFxuICAgIGVwaGVtZXJhbF9ibG9ja19kZXZpY2U6IGNka3RmLmxpc3RNYXBwZXIoc3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmVwaGVtZXJhbEJsb2NrRGV2aWNlKSxcbiAgICByb290X2Jsb2NrX2RldmljZTogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJvb3RCbG9ja0RldmljZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW9yaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZENhcGFjaXR5PzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXZhaWxhYmlsaXR5X3pvbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICBzcG90X3ByaWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RQcmljZSksXG4gICAgc3VibmV0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHRlZENhcGFjaXR5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb246IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3ZlcnJpZGVzPzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzW107XG59XG5cbmZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pLFxuICAgIG92ZXJyaWRlczogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdPdmVycmlkZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5vdmVycmlkZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBsYWNlbWVudFN0cmF0ZWd5Pzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXBsYWNlbWVudF9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBsYWNlbWVudFN0cmF0ZWd5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcGFjaXR5UmViYWxhbmNlPzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZVtdO1xufVxuXG5mdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc1RvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhcGFjaXR5X3JlYmFsYW5jZTogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2FwYWNpdHlSZWJhbGFuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU3BvdEZsZWV0UmVxdWVzdENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3Nwb3RfZmxlZXRfcmVxdWVzdCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSBjb25maWcuYWxsb2NhdGlvblN0cmF0ZWd5O1xuICAgIHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kgPSBjb25maWcuZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeTtcbiAgICB0aGlzLl9mbGVldFR5cGUgPSBjb25maWcuZmxlZXRUeXBlO1xuICAgIHRoaXMuX2lhbUZsZWV0Um9sZSA9IGNvbmZpZy5pYW1GbGVldFJvbGU7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIgPSBjb25maWcuaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXI7XG4gICAgdGhpcy5faW5zdGFuY2VQb29sc1RvVXNlQ291bnQgPSBjb25maWcuaW5zdGFuY2VQb29sc1RvVXNlQ291bnQ7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IGNvbmZpZy5sb2FkQmFsYW5jZXJzO1xuICAgIHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMgPSBjb25maWcucmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcztcbiAgICB0aGlzLl9zcG90UHJpY2UgPSBjb25maWcuc3BvdFByaWNlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdGFyZ2V0Q2FwYWNpdHkgPSBjb25maWcudGFyZ2V0Q2FwYWNpdHk7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXBBcm5zID0gY29uZmlnLnRhcmdldEdyb3VwQXJucztcbiAgICB0aGlzLl90ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbiA9IGNvbmZpZy50ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbjtcbiAgICB0aGlzLl92YWxpZEZyb20gPSBjb25maWcudmFsaWRGcm9tO1xuICAgIHRoaXMuX3ZhbGlkVW50aWwgPSBjb25maWcudmFsaWRVbnRpbDtcbiAgICB0aGlzLl93YWl0Rm9yRnVsZmlsbG1lbnQgPSBjb25maWcud2FpdEZvckZ1bGZpbGxtZW50O1xuICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb24gPSBjb25maWcubGF1bmNoU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUNvbmZpZyA9IGNvbmZpZy5sYXVuY2hUZW1wbGF0ZUNvbmZpZztcbiAgICB0aGlzLl9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzID0gY29uZmlnLnNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXM7XG4gICAgdGhpcy5fdGltZW91dHMgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsbG9jYXRpb25fc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG9jYXRpb25TdHJhdGVneSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG9jYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3lcbiAgfVxuXG4gIC8vIGNsaWVudF90b2tlbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsaWVudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xpZW50X3Rva2VuJyk7XG4gIH1cblxuICAvLyBleGNlc3NfY2FwYWNpdHlfdGVybWluYXRpb25fcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3k/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSgpIHtcbiAgICB0aGlzLl9leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3lcbiAgfVxuXG4gIC8vIGZsZWV0X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmxlZXRUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGZsZWV0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZsZWV0X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZsZWV0VHlwZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2ZsZWV0VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZsZWV0VHlwZSgpIHtcbiAgICB0aGlzLl9mbGVldFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZsZWV0VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mbGVldFR5cGVcbiAgfVxuXG4gIC8vIGlhbV9mbGVldF9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lhbUZsZWV0Um9sZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlhbUZsZWV0Um9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lhbV9mbGVldF9yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpYW1GbGVldFJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbUZsZWV0Um9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYW1GbGVldFJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtRmxlZXRSb2xlXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91ciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cj86IHN0cmluZztcbiAgcHVibGljIGdldCBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvdXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cigpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91ciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXJcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudD86IG51bWJlcjtcbiAgcHVibGljIGdldCBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2luc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VQb29sc1RvVXNlQ291bnQodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlUG9vbHNUb1VzZUNvdW50KCkge1xuICAgIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudFxuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXJzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsb2FkX2JhbGFuY2VycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9hZEJhbGFuY2Vycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9hZEJhbGFuY2VycygpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRCYWxhbmNlcnNcbiAgfVxuXG4gIC8vIHJlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCByZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcyh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcygpIHtcbiAgICB0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXNcbiAgfVxuXG4gIC8vIHNwb3RfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFByaWNlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNwb3RQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nwb3RfcHJpY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RQcmljZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3Nwb3RQcmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RQcmljZSgpIHtcbiAgICB0aGlzLl9zcG90UHJpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RQcmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90UHJpY2VcbiAgfVxuXG4gIC8vIHNwb3RfcmVxdWVzdF9zdGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwb3RSZXF1ZXN0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X3JlcXVlc3Rfc3RhdGUnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzQWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsXG4gIH1cblxuICAvLyB0YXJnZXRfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0Q2FwYWNpdHk6IG51bWJlcjtcbiAgcHVibGljIGdldCB0YXJnZXRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0Q2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldENhcGFjaXR5XG4gIH1cblxuICAvLyB0YXJnZXRfZ3JvdXBfYXJucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldEdyb3VwQXJucz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0YXJnZXRfZ3JvdXBfYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXBBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldEdyb3VwQXJucygpIHtcbiAgICB0aGlzLl90YXJnZXRHcm91cEFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cEFybnNcbiAgfVxuXG4gIC8vIHRlcm1pbmF0ZV9pbnN0YW5jZXNfd2l0aF9leHBpcmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCB0ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24odmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbigpIHtcbiAgICB0aGlzLl90ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb25cbiAgfVxuXG4gIC8vIHZhbGlkX2Zyb20gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsaWRGcm9tPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHZhbGlkRnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX2Zyb20nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbGlkRnJvbSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3ZhbGlkRnJvbSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkRnJvbSgpIHtcbiAgICB0aGlzLl92YWxpZEZyb20gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbGlkRnJvbUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZEZyb21cbiAgfVxuXG4gIC8vIHZhbGlkX3VudGlsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZhbGlkVW50aWw/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX3VudGlsJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWxpZFVudGlsKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdmFsaWRVbnRpbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkVW50aWwoKSB7XG4gICAgdGhpcy5fdmFsaWRVbnRpbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZFVudGlsXG4gIH1cblxuICAvLyB3YWl0X2Zvcl9mdWxmaWxsbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YWl0Rm9yRnVsZmlsbG1lbnQ/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHdhaXRGb3JGdWxmaWxsbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd3YWl0X2Zvcl9mdWxmaWxsbWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2FpdEZvckZ1bGZpbGxtZW50KHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdhaXRGb3JGdWxmaWxsbWVudCgpIHtcbiAgICB0aGlzLl93YWl0Rm9yRnVsZmlsbG1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdhaXRGb3JGdWxmaWxsbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93YWl0Rm9yRnVsZmlsbG1lbnRcbiAgfVxuXG4gIC8vIGxhdW5jaF9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFNwZWNpZmljYXRpb24/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbltdO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbGF1bmNoX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hTcGVjaWZpY2F0aW9uKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbltdICkge1xuICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvblxuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYXVuY2hUZW1wbGF0ZUNvbmZpZz86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ1tdO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhdW5jaF90ZW1wbGF0ZV9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hUZW1wbGF0ZUNvbmZpZyh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnW10gKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZygpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUNvbmZpZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWdcbiAgfVxuXG4gIC8vIHNwb3RfbWFpbnRlbmFuY2Vfc3RyYXRlZ2llcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzPzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNbXTtcbiAgcHVibGljIGdldCBzcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Nwb3RfbWFpbnRlbmFuY2Vfc3RyYXRlZ2llcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXModmFsdWU6IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzW10gKSB7XG4gICAgdGhpcy5fc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMoKSB7XG4gICAgdGhpcy5fc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzXG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cz86IFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0cztcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aW1lb3V0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRzKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0VGltZW91dHMgKSB7XG4gICAgdGhpcy5fdGltZW91dHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICAgIGV4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kpLFxuICAgICAgZmxlZXRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmxlZXRUeXBlKSxcbiAgICAgIGlhbV9mbGVldF9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pYW1GbGVldFJvbGUpLFxuICAgICAgaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91cjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIpLFxuICAgICAgaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCksXG4gICAgICBsb2FkX2JhbGFuY2VyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbG9hZEJhbGFuY2VycyksXG4gICAgICByZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKSxcbiAgICAgIHNwb3RfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Nwb3RQcmljZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHRhcmdldF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdGFyZ2V0Q2FwYWNpdHkpLFxuICAgICAgdGFyZ2V0X2dyb3VwX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhcmdldEdyb3VwQXJucyksXG4gICAgICB0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0ZUluc3RhbmNlc1dpdGhFeHBpcmF0aW9uKSxcbiAgICAgIHZhbGlkX2Zyb206IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZhbGlkRnJvbSksXG4gICAgICB2YWxpZF91bnRpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmFsaWRVbnRpbCksXG4gICAgICB3YWl0X2Zvcl9mdWxmaWxsbWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudCksXG4gICAgICBsYXVuY2hfc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9uKSxcbiAgICAgIGxhdW5jaF90ZW1wbGF0ZV9jb25maWc6IGNka3RmLmxpc3RNYXBwZXIoc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnVG9UZXJyYWZvcm0pKHRoaXMuX2xhdW5jaFRlbXBsYXRlQ29uZmlnKSxcbiAgICAgIHNwb3RfbWFpbnRlbmFuY2Vfc3RyYXRlZ2llczogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc1RvVGVycmFmb3JtKSh0aGlzLl9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzKSxcbiAgICAgIHRpbWVvdXRzOiBzcG90RmxlZXRSZXF1ZXN0VGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cyksXG4gICAgfTtcbiAgfVxufVxuIl19