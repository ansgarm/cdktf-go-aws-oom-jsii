"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingGroup = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingGroupInitialLifecycleHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_result: cdktf.stringToTerraform(struct.defaultResult),
        heartbeat_timeout: cdktf.numberToTerraform(struct.heartbeatTimeout),
        lifecycle_transition: cdktf.stringToTerraform(struct.lifecycleTransition),
        name: cdktf.stringToTerraform(struct.name),
        notification_metadata: cdktf.stringToTerraform(struct.notificationMetadata),
        notification_target_arn: cdktf.stringToTerraform(struct.notificationTargetArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_warmup: cdktf.stringToTerraform(struct.instanceWarmup),
        min_healthy_percentage: cdktf.numberToTerraform(struct.minHealthyPercentage),
    };
}
function autoscalingGroupInstanceRefreshToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        strategy: cdktf.stringToTerraform(struct.strategy),
        triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.triggers),
        preferences: cdktf.listMapper(autoscalingGroupInstanceRefreshPreferencesToTerraform)(struct.preferences),
    };
}
function autoscalingGroupLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_demand_allocation_strategy: cdktf.stringToTerraform(struct.onDemandAllocationStrategy),
        on_demand_base_capacity: cdktf.numberToTerraform(struct.onDemandBaseCapacity),
        on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct.onDemandPercentageAboveBaseCapacity),
        spot_allocation_strategy: cdktf.stringToTerraform(struct.spotAllocationStrategy),
        spot_instance_pools: cdktf.numberToTerraform(struct.spotInstancePools),
        spot_max_price: cdktf.stringToTerraform(struct.spotMaxPrice),
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform)(struct.launchTemplateSpecification),
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform)(struct.launchTemplateSpecification),
        override: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform)(struct.override),
    };
}
function autoscalingGroupMixedInstancesPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instances_distribution: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform)(struct.instancesDistribution),
        launch_template: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform)(struct.launchTemplate),
    };
}
function autoscalingGroupTagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        propagate_at_launch: cdktf.booleanToTerraform(struct.propagateAtLaunch),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function autoscalingGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
function autoscalingGroupWarmPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_group_prepared_capacity: cdktf.numberToTerraform(struct.maxGroupPreparedCapacity),
        min_size: cdktf.numberToTerraform(struct.minSize),
        pool_state: cdktf.stringToTerraform(struct.poolState),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group}.
 */
class AutoscalingGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._availabilityZones = config.availabilityZones;
        this._capacityRebalance = config.capacityRebalance;
        this._defaultCooldown = config.defaultCooldown;
        this._desiredCapacity = config.desiredCapacity;
        this._enabledMetrics = config.enabledMetrics;
        this._forceDelete = config.forceDelete;
        this._forceDeleteWarmPool = config.forceDeleteWarmPool;
        this._healthCheckGracePeriod = config.healthCheckGracePeriod;
        this._healthCheckType = config.healthCheckType;
        this._launchConfiguration = config.launchConfiguration;
        this._loadBalancers = config.loadBalancers;
        this._maxInstanceLifetime = config.maxInstanceLifetime;
        this._maxSize = config.maxSize;
        this._metricsGranularity = config.metricsGranularity;
        this._minElbCapacity = config.minElbCapacity;
        this._minSize = config.minSize;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._placementGroup = config.placementGroup;
        this._protectFromScaleIn = config.protectFromScaleIn;
        this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
        this._suspendedProcesses = config.suspendedProcesses;
        this._tags = config.tags;
        this._targetGroupArns = config.targetGroupArns;
        this._terminationPolicies = config.terminationPolicies;
        this._vpcZoneIdentifier = config.vpcZoneIdentifier;
        this._waitForCapacityTimeout = config.waitForCapacityTimeout;
        this._waitForElbCapacity = config.waitForElbCapacity;
        this._initialLifecycleHook = config.initialLifecycleHook;
        this._instanceRefresh = config.instanceRefresh;
        this._launchTemplate = config.launchTemplate;
        this._mixedInstancesPolicy = config.mixedInstancesPolicy;
        this._tag = config.tag;
        this._timeouts = config.timeouts;
        this._warmPool = config.warmPool;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    set availabilityZones(value) {
        this._availabilityZones = value;
    }
    resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZonesInput() {
        return this._availabilityZones;
    }
    get capacityRebalance() {
        return this.getBooleanAttribute('capacity_rebalance');
    }
    set capacityRebalance(value) {
        this._capacityRebalance = value;
    }
    resetCapacityRebalance() {
        this._capacityRebalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityRebalanceInput() {
        return this._capacityRebalance;
    }
    get defaultCooldown() {
        return this.getNumberAttribute('default_cooldown');
    }
    set defaultCooldown(value) {
        this._defaultCooldown = value;
    }
    resetDefaultCooldown() {
        this._defaultCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultCooldownInput() {
        return this._defaultCooldown;
    }
    get desiredCapacity() {
        return this.getNumberAttribute('desired_capacity');
    }
    set desiredCapacity(value) {
        this._desiredCapacity = value;
    }
    resetDesiredCapacity() {
        this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get desiredCapacityInput() {
        return this._desiredCapacity;
    }
    get enabledMetrics() {
        return this.getListAttribute('enabled_metrics');
    }
    set enabledMetrics(value) {
        this._enabledMetrics = value;
    }
    resetEnabledMetrics() {
        this._enabledMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledMetricsInput() {
        return this._enabledMetrics;
    }
    get forceDelete() {
        return this.getBooleanAttribute('force_delete');
    }
    set forceDelete(value) {
        this._forceDelete = value;
    }
    resetForceDelete() {
        this._forceDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDeleteInput() {
        return this._forceDelete;
    }
    get forceDeleteWarmPool() {
        return this.getBooleanAttribute('force_delete_warm_pool');
    }
    set forceDeleteWarmPool(value) {
        this._forceDeleteWarmPool = value;
    }
    resetForceDeleteWarmPool() {
        this._forceDeleteWarmPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDeleteWarmPoolInput() {
        return this._forceDeleteWarmPool;
    }
    get healthCheckGracePeriod() {
        return this.getNumberAttribute('health_check_grace_period');
    }
    set healthCheckGracePeriod(value) {
        this._healthCheckGracePeriod = value;
    }
    resetHealthCheckGracePeriod() {
        this._healthCheckGracePeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckGracePeriodInput() {
        return this._healthCheckGracePeriod;
    }
    get healthCheckType() {
        return this.getStringAttribute('health_check_type');
    }
    set healthCheckType(value) {
        this._healthCheckType = value;
    }
    resetHealthCheckType() {
        this._healthCheckType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckTypeInput() {
        return this._healthCheckType;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get launchConfiguration() {
        return this.getStringAttribute('launch_configuration');
    }
    set launchConfiguration(value) {
        this._launchConfiguration = value;
    }
    resetLaunchConfiguration() {
        this._launchConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchConfigurationInput() {
        return this._launchConfiguration;
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
    get maxInstanceLifetime() {
        return this.getNumberAttribute('max_instance_lifetime');
    }
    set maxInstanceLifetime(value) {
        this._maxInstanceLifetime = value;
    }
    resetMaxInstanceLifetime() {
        this._maxInstanceLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxInstanceLifetimeInput() {
        return this._maxInstanceLifetime;
    }
    get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    // Temporarily expose input value. Use with caution.
    get maxSizeInput() {
        return this._maxSize;
    }
    get metricsGranularity() {
        return this.getStringAttribute('metrics_granularity');
    }
    set metricsGranularity(value) {
        this._metricsGranularity = value;
    }
    resetMetricsGranularity() {
        this._metricsGranularity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricsGranularityInput() {
        return this._metricsGranularity;
    }
    get minElbCapacity() {
        return this.getNumberAttribute('min_elb_capacity');
    }
    set minElbCapacity(value) {
        this._minElbCapacity = value;
    }
    resetMinElbCapacity() {
        this._minElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minElbCapacityInput() {
        return this._minElbCapacity;
    }
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
    set minSize(value) {
        this._minSize = value;
    }
    // Temporarily expose input value. Use with caution.
    get minSizeInput() {
        return this._minSize;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    set namePrefix(value) {
        this._namePrefix = value;
    }
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namePrefixInput() {
        return this._namePrefix;
    }
    get placementGroup() {
        return this.getStringAttribute('placement_group');
    }
    set placementGroup(value) {
        this._placementGroup = value;
    }
    resetPlacementGroup() {
        this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementGroupInput() {
        return this._placementGroup;
    }
    get protectFromScaleIn() {
        return this.getBooleanAttribute('protect_from_scale_in');
    }
    set protectFromScaleIn(value) {
        this._protectFromScaleIn = value;
    }
    resetProtectFromScaleIn() {
        this._protectFromScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get protectFromScaleInInput() {
        return this._protectFromScaleIn;
    }
    get serviceLinkedRoleArn() {
        return this.getStringAttribute('service_linked_role_arn');
    }
    set serviceLinkedRoleArn(value) {
        this._serviceLinkedRoleArn = value;
    }
    resetServiceLinkedRoleArn() {
        this._serviceLinkedRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceLinkedRoleArnInput() {
        return this._serviceLinkedRoleArn;
    }
    get suspendedProcesses() {
        return this.getListAttribute('suspended_processes');
    }
    set suspendedProcesses(value) {
        this._suspendedProcesses = value;
    }
    resetSuspendedProcesses() {
        this._suspendedProcesses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suspendedProcessesInput() {
        return this._suspendedProcesses;
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
    get terminationPolicies() {
        return this.getListAttribute('termination_policies');
    }
    set terminationPolicies(value) {
        this._terminationPolicies = value;
    }
    resetTerminationPolicies() {
        this._terminationPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminationPoliciesInput() {
        return this._terminationPolicies;
    }
    get vpcZoneIdentifier() {
        return this.getListAttribute('vpc_zone_identifier');
    }
    set vpcZoneIdentifier(value) {
        this._vpcZoneIdentifier = value;
    }
    resetVpcZoneIdentifier() {
        this._vpcZoneIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcZoneIdentifierInput() {
        return this._vpcZoneIdentifier;
    }
    get waitForCapacityTimeout() {
        return this.getStringAttribute('wait_for_capacity_timeout');
    }
    set waitForCapacityTimeout(value) {
        this._waitForCapacityTimeout = value;
    }
    resetWaitForCapacityTimeout() {
        this._waitForCapacityTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForCapacityTimeoutInput() {
        return this._waitForCapacityTimeout;
    }
    get waitForElbCapacity() {
        return this.getNumberAttribute('wait_for_elb_capacity');
    }
    set waitForElbCapacity(value) {
        this._waitForElbCapacity = value;
    }
    resetWaitForElbCapacity() {
        this._waitForElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForElbCapacityInput() {
        return this._waitForElbCapacity;
    }
    get initialLifecycleHook() {
        return this.interpolationForAttribute('initial_lifecycle_hook');
    }
    set initialLifecycleHook(value) {
        this._initialLifecycleHook = value;
    }
    resetInitialLifecycleHook() {
        this._initialLifecycleHook = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initialLifecycleHookInput() {
        return this._initialLifecycleHook;
    }
    get instanceRefresh() {
        return this.interpolationForAttribute('instance_refresh');
    }
    set instanceRefresh(value) {
        this._instanceRefresh = value;
    }
    resetInstanceRefresh() {
        this._instanceRefresh = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceRefreshInput() {
        return this._instanceRefresh;
    }
    get launchTemplate() {
        return this.interpolationForAttribute('launch_template');
    }
    set launchTemplate(value) {
        this._launchTemplate = value;
    }
    resetLaunchTemplate() {
        this._launchTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTemplateInput() {
        return this._launchTemplate;
    }
    get mixedInstancesPolicy() {
        return this.interpolationForAttribute('mixed_instances_policy');
    }
    set mixedInstancesPolicy(value) {
        this._mixedInstancesPolicy = value;
    }
    resetMixedInstancesPolicy() {
        this._mixedInstancesPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mixedInstancesPolicyInput() {
        return this._mixedInstancesPolicy;
    }
    get tag() {
        return this.interpolationForAttribute('tag');
    }
    set tag(value) {
        this._tag = value;
    }
    resetTag() {
        this._tag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagInput() {
        return this._tag;
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
    get warmPool() {
        return this.interpolationForAttribute('warm_pool');
    }
    set warmPool(value) {
        this._warmPool = value;
    }
    resetWarmPool() {
        this._warmPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get warmPoolInput() {
        return this._warmPool;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            capacity_rebalance: cdktf.booleanToTerraform(this._capacityRebalance),
            default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
            desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
            enabled_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledMetrics),
            force_delete: cdktf.booleanToTerraform(this._forceDelete),
            force_delete_warm_pool: cdktf.booleanToTerraform(this._forceDeleteWarmPool),
            health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
            health_check_type: cdktf.stringToTerraform(this._healthCheckType),
            launch_configuration: cdktf.stringToTerraform(this._launchConfiguration),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
            max_instance_lifetime: cdktf.numberToTerraform(this._maxInstanceLifetime),
            max_size: cdktf.numberToTerraform(this._maxSize),
            metrics_granularity: cdktf.stringToTerraform(this._metricsGranularity),
            min_elb_capacity: cdktf.numberToTerraform(this._minElbCapacity),
            min_size: cdktf.numberToTerraform(this._minSize),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            placement_group: cdktf.stringToTerraform(this._placementGroup),
            protect_from_scale_in: cdktf.booleanToTerraform(this._protectFromScaleIn),
            service_linked_role_arn: cdktf.stringToTerraform(this._serviceLinkedRoleArn),
            suspended_processes: cdktf.listMapper(cdktf.stringToTerraform)(this._suspendedProcesses),
            tags: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._tags),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
            termination_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._terminationPolicies),
            vpc_zone_identifier: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcZoneIdentifier),
            wait_for_capacity_timeout: cdktf.stringToTerraform(this._waitForCapacityTimeout),
            wait_for_elb_capacity: cdktf.numberToTerraform(this._waitForElbCapacity),
            initial_lifecycle_hook: cdktf.listMapper(autoscalingGroupInitialLifecycleHookToTerraform)(this._initialLifecycleHook),
            instance_refresh: cdktf.listMapper(autoscalingGroupInstanceRefreshToTerraform)(this._instanceRefresh),
            launch_template: cdktf.listMapper(autoscalingGroupLaunchTemplateToTerraform)(this._launchTemplate),
            mixed_instances_policy: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyToTerraform)(this._mixedInstancesPolicy),
            tag: cdktf.listMapper(autoscalingGroupTagToTerraform)(this._tag),
            timeouts: autoscalingGroupTimeoutsToTerraform(this._timeouts),
            warm_pool: cdktf.listMapper(autoscalingGroupWarmPoolToTerraform)(this._warmPool),
        };
    }
}
exports.AutoscalingGroup = AutoscalingGroup;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingGroup[_a] = { fqn: "hashicorp_aws.AutoscalingGroup", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmctZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRvc2NhbGluZy1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQStML0IsU0FBUywrQ0FBK0MsQ0FBQyxNQUE2QztJQUNwRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDMUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDNUUsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUMvRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFhRCxTQUFTLHFEQUFxRCxDQUFDLE1BQW1EO0lBQ2hILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIs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QUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3RCxTQUFTLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDakYsQ0FBQztJQUNKLENBQUM7O0FBL3BCSCw0Q0FncUJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL2F1dG9zY2FsaW5nX2dyb3VwLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXBhY2l0eVJlYmFsYW5jZT86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0Q29vbGRvd24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNpcmVkQ2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZE1ldHJpY3M/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3JjZURlbGV0ZT86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3JjZURlbGV0ZVdhcm1Qb29sPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWx0aENoZWNrR3JhY2VQZXJpb2Q/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWx0aENoZWNrVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoQ29uZmlndXJhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9hZEJhbGFuY2Vycz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heEluc3RhbmNlTGlmZXRpbWU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFNpemU6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldHJpY3NHcmFudWxhcml0eT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pbkVsYkNhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5TaXplOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYWNlbWVudEdyb3VwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3RlY3RGcm9tU2NhbGVJbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VMaW5rZWRSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VzcGVuZGVkUHJvY2Vzc2VzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0R3JvdXBBcm5zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlcm1pbmF0aW9uUG9saWNpZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY1pvbmVJZGVudGlmaWVyPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdhaXRGb3JFbGJDYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5pdGlhbExpZmVjeWNsZUhvb2s/OiBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VSZWZyZXNoPzogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZT86IEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaXhlZEluc3RhbmNlc1BvbGljeT86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWc/OiBBdXRvc2NhbGluZ0dyb3VwVGFnW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogQXV0b3NjYWxpbmdHcm91cFRpbWVvdXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3YXJtUG9vbD86IEF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0UmVzdWx0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFydGJlYXRUaW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaWZlY3ljbGVUcmFuc2l0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uTWV0YWRhdGE/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvblRhcmdldEFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybj86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRfcmVzdWx0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXN1bHQpLFxuICAgIGhlYXJ0YmVhdF90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYXJ0YmVhdFRpbWVvdXQpLFxuICAgIGxpZmVjeWNsZV90cmFuc2l0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpZmVjeWNsZVRyYW5zaXRpb24pLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgbm90aWZpY2F0aW9uX21ldGFkYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvbk1ldGFkYXRhKSxcbiAgICBub3RpZmljYXRpb25fdGFyZ2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25UYXJnZXRBcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVdhcm11cD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pbkhlYWx0aHlQZXJjZW50YWdlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2Vfd2FybXVwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlV2FybXVwKSxcbiAgICBtaW5faGVhbHRoeV9wZXJjZW50YWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbkhlYWx0aHlQZXJjZW50YWdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdHJhdGVneTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmlnZ2Vycz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmZXJlbmNlcz86IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hQcmVmZXJlbmNlc1tdO1xufVxuXG5mdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJhdGVneSksXG4gICAgdHJpZ2dlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudHJpZ2dlcnMpLFxuICAgIHByZWZlcmVuY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hQcmVmZXJlbmNlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByZWZlcmVuY2VzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kQmFzZUNhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdEFsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RJbnN0YW5jZVBvb2xzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcG90TWF4UHJpY2U/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUluc3RhbmNlc0Rpc3RyaWJ1dGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUluc3RhbmNlc0Rpc3RyaWJ1dGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvbl9kZW1hbmRfYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgb25fZGVtYW5kX2Jhc2VfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub25EZW1hbmRCYXNlQ2FwYWNpdHkpLFxuICAgIG9uX2RlbWFuZF9wZXJjZW50YWdlX2Fib3ZlX2Jhc2VfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkpLFxuICAgIHNwb3RfYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90QWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICBzcG90X2luc3RhbmNlX3Bvb2xzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RJbnN0YW5jZVBvb2xzKSxcbiAgICBzcG90X21heF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90TWF4UHJpY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlSWQpLFxuICAgIGxhdW5jaF90ZW1wbGF0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlTmFtZSksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZUlkKSxcbiAgICBsYXVuY2hfdGVtcGxhdGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZU5hbWUpLFxuICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0ZWRDYXBhY2l0eT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbltdO1xufVxuXG5mdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3ZlcnJpZGU/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlW107XG59XG5cbmZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pLFxuICAgIG92ZXJyaWRlOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVUb1RlcnJhZm9ybSkoc3RydWN0IS5vdmVycmlkZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZXNEaXN0cmlidXRpb24/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlW107XG59XG5cbmZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZXNfZGlzdHJpYnV0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUluc3RhbmNlc0Rpc3RyaWJ1dGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmluc3RhbmNlc0Rpc3RyaWJ1dGlvbiksXG4gICAgbGF1bmNoX3RlbXBsYXRlOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEubGF1bmNoVGVtcGxhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cFRhZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9wYWdhdGVBdExhdW5jaDogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cFRhZ1RvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBUYWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgcHJvcGFnYXRlX2F0X2xhdW5jaDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucHJvcGFnYXRlQXRMYXVuY2gpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvb2xTdGF0ZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9ncm91cF9wcmVwYXJlZF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhHcm91cFByZXBhcmVkQ2FwYWNpdHkpLFxuICAgIG1pbl9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pblNpemUpLFxuICAgIHBvb2xfc3RhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9vbFN0YXRlKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nR3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBdXRvc2NhbGluZ0dyb3VwQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXV0b3NjYWxpbmdfZ3JvdXAnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZXM7XG4gICAgdGhpcy5fY2FwYWNpdHlSZWJhbGFuY2UgPSBjb25maWcuY2FwYWNpdHlSZWJhbGFuY2U7XG4gICAgdGhpcy5fZGVmYXVsdENvb2xkb3duID0gY29uZmlnLmRlZmF1bHRDb29sZG93bjtcbiAgICB0aGlzLl9kZXNpcmVkQ2FwYWNpdHkgPSBjb25maWcuZGVzaXJlZENhcGFjaXR5O1xuICAgIHRoaXMuX2VuYWJsZWRNZXRyaWNzID0gY29uZmlnLmVuYWJsZWRNZXRyaWNzO1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlID0gY29uZmlnLmZvcmNlRGVsZXRlO1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2wgPSBjb25maWcuZm9yY2VEZWxldGVXYXJtUG9vbDtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kID0gY29uZmlnLmhlYWx0aENoZWNrR3JhY2VQZXJpb2Q7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tUeXBlID0gY29uZmlnLmhlYWx0aENoZWNrVHlwZTtcbiAgICB0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uID0gY29uZmlnLmxhdW5jaENvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IGNvbmZpZy5sb2FkQmFsYW5jZXJzO1xuICAgIHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUgPSBjb25maWcubWF4SW5zdGFuY2VMaWZldGltZTtcbiAgICB0aGlzLl9tYXhTaXplID0gY29uZmlnLm1heFNpemU7XG4gICAgdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5ID0gY29uZmlnLm1ldHJpY3NHcmFudWxhcml0eTtcbiAgICB0aGlzLl9taW5FbGJDYXBhY2l0eSA9IGNvbmZpZy5taW5FbGJDYXBhY2l0eTtcbiAgICB0aGlzLl9taW5TaXplID0gY29uZmlnLm1pblNpemU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSBjb25maWcubmFtZVByZWZpeDtcbiAgICB0aGlzLl9wbGFjZW1lbnRHcm91cCA9IGNvbmZpZy5wbGFjZW1lbnRHcm91cDtcbiAgICB0aGlzLl9wcm90ZWN0RnJvbVNjYWxlSW4gPSBjb25maWcucHJvdGVjdEZyb21TY2FsZUluO1xuICAgIHRoaXMuX3NlcnZpY2VMaW5rZWRSb2xlQXJuID0gY29uZmlnLnNlcnZpY2VMaW5rZWRSb2xlQXJuO1xuICAgIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3NlcyA9IGNvbmZpZy5zdXNwZW5kZWRQcm9jZXNzZXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IGNvbmZpZy50YXJnZXRHcm91cEFybnM7XG4gICAgdGhpcy5fdGVybWluYXRpb25Qb2xpY2llcyA9IGNvbmZpZy50ZXJtaW5hdGlvblBvbGljaWVzO1xuICAgIHRoaXMuX3ZwY1pvbmVJZGVudGlmaWVyID0gY29uZmlnLnZwY1pvbmVJZGVudGlmaWVyO1xuICAgIHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQgPSBjb25maWcud2FpdEZvckNhcGFjaXR5VGltZW91dDtcbiAgICB0aGlzLl93YWl0Rm9yRWxiQ2FwYWNpdHkgPSBjb25maWcud2FpdEZvckVsYkNhcGFjaXR5O1xuICAgIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rID0gY29uZmlnLmluaXRpYWxMaWZlY3ljbGVIb29rO1xuICAgIHRoaXMuX2luc3RhbmNlUmVmcmVzaCA9IGNvbmZpZy5pbnN0YW5jZVJlZnJlc2g7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGUgPSBjb25maWcubGF1bmNoVGVtcGxhdGU7XG4gICAgdGhpcy5fbWl4ZWRJbnN0YW5jZXNQb2xpY3kgPSBjb25maWcubWl4ZWRJbnN0YW5jZXNQb2xpY3k7XG4gICAgdGhpcy5fdGFnID0gY29uZmlnLnRhZztcbiAgICB0aGlzLl90aW1lb3V0cyA9IGNvbmZpZy50aW1lb3V0cztcbiAgICB0aGlzLl93YXJtUG9vbCA9IGNvbmZpZy53YXJtUG9vbDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXNcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3JlYmFsYW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlYmFsYW5jZT86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZWJhbGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2FwYWNpdHlfcmViYWxhbmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXBhY2l0eVJlYmFsYW5jZSh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmViYWxhbmNlKCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlYmFsYW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZVxuICB9XG5cbiAgLy8gZGVmYXVsdF9jb29sZG93biAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRDb29sZG93bj86IG51bWJlcjtcbiAgcHVibGljIGdldCBkZWZhdWx0Q29vbGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZWZhdWx0X2Nvb2xkb3duJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0Q29vbGRvd24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlZmF1bHRDb29sZG93biA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRDb29sZG93bigpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q29vbGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRDb29sZG93bklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q29vbGRvd25cbiAgfVxuXG4gIC8vIGRlc2lyZWRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNpcmVkQ2FwYWNpdHk/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgZGVzaXJlZENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVzaXJlZF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzaXJlZENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZXNpcmVkQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNpcmVkQ2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fZGVzaXJlZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNpcmVkQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzaXJlZENhcGFjaXR5XG4gIH1cblxuICAvLyBlbmFibGVkX21ldHJpY3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZE1ldHJpY3M/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBlbmFibGVkTWV0cmljcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdlbmFibGVkX21ldHJpY3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWRNZXRyaWNzKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9lbmFibGVkTWV0cmljcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWRNZXRyaWNzKCkge1xuICAgIHRoaXMuX2VuYWJsZWRNZXRyaWNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkTWV0cmljc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkTWV0cmljc1xuICB9XG5cbiAgLy8gZm9yY2VfZGVsZXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvcmNlRGVsZXRlPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBmb3JjZURlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3JjZV9kZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcmNlRGVsZXRlKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9yY2VEZWxldGUoKSB7XG4gICAgdGhpcy5fZm9yY2VEZWxldGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcmNlRGVsZXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlRGVsZXRlXG4gIH1cblxuICAvLyBmb3JjZV9kZWxldGVfd2FybV9wb29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvcmNlRGVsZXRlV2FybVBvb2w/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGZvcmNlRGVsZXRlV2FybVBvb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZm9yY2VfZGVsZXRlX3dhcm1fcG9vbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZm9yY2VEZWxldGVXYXJtUG9vbCh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9mb3JjZURlbGV0ZVdhcm1Qb29sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9yY2VEZWxldGVXYXJtUG9vbCgpIHtcbiAgICB0aGlzLl9mb3JjZURlbGV0ZVdhcm1Qb29sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JjZURlbGV0ZVdhcm1Qb29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2xcbiAgfVxuXG4gIC8vIGhlYWx0aF9jaGVja19ncmFjZV9wZXJpb2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZD86IG51bWJlcjtcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja0dyYWNlUGVyaW9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaGVhbHRoX2NoZWNrX2dyYWNlX3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrR3JhY2VQZXJpb2QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja0dyYWNlUGVyaW9kKCkge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrR3JhY2VQZXJpb2QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrR3JhY2VQZXJpb2RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFxuICB9XG5cbiAgLy8gaGVhbHRoX2NoZWNrX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFsdGhDaGVja1R5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGVhbHRoX2NoZWNrX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWx0aENoZWNrVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhbHRoQ2hlY2tUeXBlKCkge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrVHlwZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhdW5jaF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaENvbmZpZ3VyYXRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbGF1bmNoQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF9jb25maWd1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hDb25maWd1cmF0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbGF1bmNoQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbGF1bmNoQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBsb2FkX2JhbGFuY2VycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXJzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsb2FkX2JhbGFuY2VycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9hZEJhbGFuY2Vycyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlcnMoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJzXG4gIH1cblxuICAvLyBtYXhfaW5zdGFuY2VfbGlmZXRpbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4SW5zdGFuY2VMaWZldGltZT86IG51bWJlcjtcbiAgcHVibGljIGdldCBtYXhJbnN0YW5jZUxpZmV0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X2luc3RhbmNlX2xpZmV0aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhJbnN0YW5jZUxpZmV0aW1lKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fbWF4SW5zdGFuY2VMaWZldGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heEluc3RhbmNlTGlmZXRpbWUoKSB7XG4gICAgdGhpcy5fbWF4SW5zdGFuY2VMaWZldGltZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4SW5zdGFuY2VMaWZldGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhJbnN0YW5jZUxpZmV0aW1lXG4gIH1cblxuICAvLyBtYXhfc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhTaXplOiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgbWF4U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhTaXplID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4U2l6ZVxuICB9XG5cbiAgLy8gbWV0cmljc19ncmFudWxhcml0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRyaWNzR3JhbnVsYXJpdHk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbWV0cmljc0dyYW51bGFyaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljc19ncmFudWxhcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljc0dyYW51bGFyaXR5KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWV0cmljc0dyYW51bGFyaXR5KCkge1xuICAgIHRoaXMuX21ldHJpY3NHcmFudWxhcml0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWV0cmljc0dyYW51bGFyaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldHJpY3NHcmFudWxhcml0eVxuICB9XG5cbiAgLy8gbWluX2VsYl9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5FbGJDYXBhY2l0eT86IG51bWJlcjtcbiAgcHVibGljIGdldCBtaW5FbGJDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9lbGJfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pbkVsYkNhcGFjaXR5KHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fbWluRWxiQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5FbGJDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9taW5FbGJDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluRWxiQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluRWxiQ2FwYWNpdHlcbiAgfVxuXG4gIC8vIG1pbl9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21pblNpemU6IG51bWJlcjtcbiAgcHVibGljIGdldCBtaW5TaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pblNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pblNpemUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5TaXplXG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBuYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lUHJlZml4Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lUHJlZml4KCkge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVByZWZpeFxuICB9XG5cbiAgLy8gcGxhY2VtZW50X2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYWNlbWVudEdyb3VwPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBsYWNlbWVudEdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxhY2VtZW50X2dyb3VwJyk7XG4gIH1cbiAgcHVibGljIHNldCBwbGFjZW1lbnRHcm91cCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3BsYWNlbWVudEdyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50R3JvdXAoKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50R3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudEdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudEdyb3VwXG4gIH1cblxuICAvLyBwcm90ZWN0X2Zyb21fc2NhbGVfaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvdGVjdEZyb21TY2FsZUluPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBwcm90ZWN0RnJvbVNjYWxlSW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJvdGVjdF9mcm9tX3NjYWxlX2luJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90ZWN0RnJvbVNjYWxlSW4odmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fcHJvdGVjdEZyb21TY2FsZUluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdGVjdEZyb21TY2FsZUluKCkge1xuICAgIHRoaXMuX3Byb3RlY3RGcm9tU2NhbGVJbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdGVjdEZyb21TY2FsZUluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RlY3RGcm9tU2NhbGVJblxuICB9XG5cbiAgLy8gc2VydmljZV9saW5rZWRfcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlTGlua2VkUm9sZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBzZXJ2aWNlTGlua2VkUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfbGlua2VkX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlTGlua2VkUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZUxpbmtlZFJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlTGlua2VkUm9sZUFybigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTGlua2VkUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZUxpbmtlZFJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUxpbmtlZFJvbGVBcm5cbiAgfVxuXG4gIC8vIHN1c3BlbmRlZF9wcm9jZXNzZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VzcGVuZGVkUHJvY2Vzc2VzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgc3VzcGVuZGVkUHJvY2Vzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1c3BlbmRlZF9wcm9jZXNzZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1c3BlbmRlZFByb2Nlc3Nlcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fc3VzcGVuZGVkUHJvY2Vzc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VzcGVuZGVkUHJvY2Vzc2VzKCkge1xuICAgIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3NlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VzcGVuZGVkUHJvY2Vzc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3Nlc1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFyZ2V0X2dyb3VwX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0R3JvdXBBcm5zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXBBcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RhcmdldF9ncm91cF9hcm5zJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRHcm91cEFybnModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldEdyb3VwQXJucygpIHtcbiAgICB0aGlzLl90YXJnZXRHcm91cEFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cEFybnNcbiAgfVxuXG4gIC8vIHRlcm1pbmF0aW9uX3BvbGljaWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rlcm1pbmF0aW9uUG9saWNpZXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCB0ZXJtaW5hdGlvblBvbGljaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3Rlcm1pbmF0aW9uX3BvbGljaWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZXJtaW5hdGlvblBvbGljaWVzKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl90ZXJtaW5hdGlvblBvbGljaWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVybWluYXRpb25Qb2xpY2llcygpIHtcbiAgICB0aGlzLl90ZXJtaW5hdGlvblBvbGljaWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZXJtaW5hdGlvblBvbGljaWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm1pbmF0aW9uUG9saWNpZXNcbiAgfVxuXG4gIC8vIHZwY196b25lX2lkZW50aWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNab25lSWRlbnRpZmllcj86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHZwY1pvbmVJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZwY196b25lX2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY1pvbmVJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZwY1pvbmVJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjWm9uZUlkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fdnBjWm9uZUlkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY1pvbmVJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY1pvbmVJZGVudGlmaWVyXG4gIH1cblxuICAvLyB3YWl0X2Zvcl9jYXBhY2l0eV90aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgd2FpdEZvckNhcGFjaXR5VGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dhaXRfZm9yX2NhcGFjaXR5X3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhaXRGb3JDYXBhY2l0eVRpbWVvdXQodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl93YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdEZvckNhcGFjaXR5VGltZW91dCgpIHtcbiAgICB0aGlzLl93YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXRcbiAgfVxuXG4gIC8vIHdhaXRfZm9yX2VsYl9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YWl0Rm9yRWxiQ2FwYWNpdHk/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgd2FpdEZvckVsYkNhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnd2FpdF9mb3JfZWxiX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3YWl0Rm9yRWxiQ2FwYWNpdHkodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl93YWl0Rm9yRWxiQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYWl0Rm9yRWxiQ2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fd2FpdEZvckVsYkNhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3YWl0Rm9yRWxiQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdEZvckVsYkNhcGFjaXR5XG4gIH1cblxuICAvLyBpbml0aWFsX2xpZmVjeWNsZV9ob29rIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luaXRpYWxMaWZlY3ljbGVIb29rPzogQXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rW107XG4gIHB1YmxpYyBnZXQgaW5pdGlhbExpZmVjeWNsZUhvb2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5pdGlhbF9saWZlY3ljbGVfaG9vaycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluaXRpYWxMaWZlY3ljbGVIb29rKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tbXSApIHtcbiAgICB0aGlzLl9pbml0aWFsTGlmZWN5Y2xlSG9vayA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluaXRpYWxMaWZlY3ljbGVIb29rKCkge1xuICAgIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbml0aWFsTGlmZWN5Y2xlSG9va0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0aWFsTGlmZWN5Y2xlSG9va1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfcmVmcmVzaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVJlZnJlc2g/OiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoW107XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSZWZyZXNoKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luc3RhbmNlX3JlZnJlc2gnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVJlZnJlc2godmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hbXSApIHtcbiAgICB0aGlzLl9pbnN0YW5jZVJlZnJlc2ggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVJlZnJlc2goKSB7XG4gICAgdGhpcy5faW5zdGFuY2VSZWZyZXNoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVJlZnJlc2hJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VSZWZyZXNoXG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGU/OiBBdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGVbXTtcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hUZW1wbGF0ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlW10gKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZSgpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVcbiAgfVxuXG4gIC8vIG1peGVkX2luc3RhbmNlc19wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWl4ZWRJbnN0YW5jZXNQb2xpY3k/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lbXTtcbiAgcHVibGljIGdldCBtaXhlZEluc3RhbmNlc1BvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtaXhlZF9pbnN0YW5jZXNfcG9saWN5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbWl4ZWRJbnN0YW5jZXNQb2xpY3kodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeVtdICkge1xuICAgIHRoaXMuX21peGVkSW5zdGFuY2VzUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWl4ZWRJbnN0YW5jZXNQb2xpY3koKSB7XG4gICAgdGhpcy5fbWl4ZWRJbnN0YW5jZXNQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1peGVkSW5zdGFuY2VzUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21peGVkSW5zdGFuY2VzUG9saWN5XG4gIH1cblxuICAvLyB0YWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnPzogQXV0b3NjYWxpbmdHcm91cFRhZ1tdO1xuICBwdWJsaWMgZ2V0IHRhZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWcodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBUYWdbXSApIHtcbiAgICB0aGlzLl90YWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWcoKSB7XG4gICAgdGhpcy5fdGFnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnXG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cz86IEF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0cztcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aW1lb3V0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRzKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMgKSB7XG4gICAgdGhpcy5fdGltZW91dHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHNcbiAgfVxuXG4gIC8vIHdhcm1fcG9vbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YXJtUG9vbD86IEF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbFtdO1xuICBwdWJsaWMgZ2V0IHdhcm1Qb29sKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3dhcm1fcG9vbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhcm1Qb29sKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2xbXSApIHtcbiAgICB0aGlzLl93YXJtUG9vbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdhcm1Qb29sKCkge1xuICAgIHRoaXMuX3dhcm1Qb29sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3YXJtUG9vbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93YXJtUG9vbFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhdmFpbGFiaWxpdHlfem9uZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzKSxcbiAgICAgIGNhcGFjaXR5X3JlYmFsYW5jZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlKSxcbiAgICAgIGRlZmF1bHRfY29vbGRvd246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRDb29sZG93biksXG4gICAgICBkZXNpcmVkX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZXNpcmVkQ2FwYWNpdHkpLFxuICAgICAgZW5hYmxlZF9tZXRyaWNzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9lbmFibGVkTWV0cmljcyksXG4gICAgICBmb3JjZV9kZWxldGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9mb3JjZURlbGV0ZSksXG4gICAgICBmb3JjZV9kZWxldGVfd2FybV9wb29sOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZm9yY2VEZWxldGVXYXJtUG9vbCksXG4gICAgICBoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kKSxcbiAgICAgIGhlYWx0aF9jaGVja190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja1R5cGUpLFxuICAgICAgbGF1bmNoX2NvbmZpZ3VyYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xhdW5jaENvbmZpZ3VyYXRpb24pLFxuICAgICAgbG9hZF9iYWxhbmNlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2xvYWRCYWxhbmNlcnMpLFxuICAgICAgbWF4X2luc3RhbmNlX2xpZmV0aW1lOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhJbnN0YW5jZUxpZmV0aW1lKSxcbiAgICAgIG1heF9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhTaXplKSxcbiAgICAgIG1ldHJpY3NfZ3JhbnVsYXJpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21ldHJpY3NHcmFudWxhcml0eSksXG4gICAgICBtaW5fZWxiX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9taW5FbGJDYXBhY2l0eSksXG4gICAgICBtaW5fc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluU2l6ZSksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIG5hbWVfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lUHJlZml4KSxcbiAgICAgIHBsYWNlbWVudF9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhY2VtZW50R3JvdXApLFxuICAgICAgcHJvdGVjdF9mcm9tX3NjYWxlX2luOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcHJvdGVjdEZyb21TY2FsZUluKSxcbiAgICAgIHNlcnZpY2VfbGlua2VkX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlTGlua2VkUm9sZUFybiksXG4gICAgICBzdXNwZW5kZWRfcHJvY2Vzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zdXNwZW5kZWRQcm9jZXNzZXMpLFxuICAgICAgdGFnczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSkodGhpcy5fdGFncyksXG4gICAgICB0YXJnZXRfZ3JvdXBfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFyZ2V0R3JvdXBBcm5zKSxcbiAgICAgIHRlcm1pbmF0aW9uX3BvbGljaWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90ZXJtaW5hdGlvblBvbGljaWVzKSxcbiAgICAgIHZwY196b25lX2lkZW50aWZpZXI6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3ZwY1pvbmVJZGVudGlmaWVyKSxcbiAgICAgIHdhaXRfZm9yX2NhcGFjaXR5X3RpbWVvdXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQpLFxuICAgICAgd2FpdF9mb3JfZWxiX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl93YWl0Rm9yRWxiQ2FwYWNpdHkpLFxuICAgICAgaW5pdGlhbF9saWZlY3ljbGVfaG9vazogY2RrdGYubGlzdE1hcHBlcihhdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tUb1RlcnJhZm9ybSkodGhpcy5faW5pdGlhbExpZmVjeWNsZUhvb2spLFxuICAgICAgaW5zdGFuY2VfcmVmcmVzaDogY2RrdGYubGlzdE1hcHBlcihhdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoVG9UZXJyYWZvcm0pKHRoaXMuX2luc3RhbmNlUmVmcmVzaCksXG4gICAgICBsYXVuY2hfdGVtcGxhdGU6IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlVG9UZXJyYWZvcm0pKHRoaXMuX2xhdW5jaFRlbXBsYXRlKSxcbiAgICAgIG1peGVkX2luc3RhbmNlc19wb2xpY3k6IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5VG9UZXJyYWZvcm0pKHRoaXMuX21peGVkSW5zdGFuY2VzUG9saWN5KSxcbiAgICAgIHRhZzogY2RrdGYubGlzdE1hcHBlcihhdXRvc2NhbGluZ0dyb3VwVGFnVG9UZXJyYWZvcm0pKHRoaXMuX3RhZyksXG4gICAgICB0aW1lb3V0czogYXV0b3NjYWxpbmdHcm91cFRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMpLFxuICAgICAgd2FybV9wb29sOiBjZGt0Zi5saXN0TWFwcGVyKGF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbFRvVGVycmFmb3JtKSh0aGlzLl93YXJtUG9vbCksXG4gICAgfTtcbiAgfVxufVxuIl19