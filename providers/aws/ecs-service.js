"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ecsServiceCapacityProviderStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        base: cdktf.numberToTerraform(struct.base),
        capacity_provider: cdktf.stringToTerraform(struct.capacityProvider),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function ecsServiceDeploymentCircuitBreakerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable: cdktf.booleanToTerraform(struct.enable),
        rollback: cdktf.booleanToTerraform(struct.rollback),
    };
}
function ecsServiceDeploymentControllerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
function ecsServiceLoadBalancerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        container_port: cdktf.numberToTerraform(struct.containerPort),
        elb_name: cdktf.stringToTerraform(struct.elbName),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
    };
}
function ecsServiceNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        assign_public_ip: cdktf.booleanToTerraform(struct.assignPublicIp),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
function ecsServiceOrderedPlacementStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field: cdktf.stringToTerraform(struct.field),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function ecsServicePlacementConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function ecsServiceServiceRegistriesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        container_port: cdktf.numberToTerraform(struct.containerPort),
        port: cdktf.numberToTerraform(struct.port),
        registry_arn: cdktf.stringToTerraform(struct.registryArn),
    };
}
function ecsServiceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service}.
 */
class EcsService extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ecs_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cluster = config.cluster;
        this._deploymentMaximumPercent = config.deploymentMaximumPercent;
        this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
        this._desiredCount = config.desiredCount;
        this._enableEcsManagedTags = config.enableEcsManagedTags;
        this._enableExecuteCommand = config.enableExecuteCommand;
        this._forceNewDeployment = config.forceNewDeployment;
        this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
        this._iamRole = config.iamRole;
        this._launchType = config.launchType;
        this._name = config.name;
        this._platformVersion = config.platformVersion;
        this._propagateTags = config.propagateTags;
        this._schedulingStrategy = config.schedulingStrategy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._taskDefinition = config.taskDefinition;
        this._waitForSteadyState = config.waitForSteadyState;
        this._capacityProviderStrategy = config.capacityProviderStrategy;
        this._deploymentCircuitBreaker = config.deploymentCircuitBreaker;
        this._deploymentController = config.deploymentController;
        this._loadBalancer = config.loadBalancer;
        this._networkConfiguration = config.networkConfiguration;
        this._orderedPlacementStrategy = config.orderedPlacementStrategy;
        this._placementConstraints = config.placementConstraints;
        this._serviceRegistries = config.serviceRegistries;
        this._timeouts = config.timeouts;
    }
    get cluster() {
        return this.getStringAttribute('cluster');
    }
    set cluster(value) {
        this._cluster = value;
    }
    resetCluster() {
        this._cluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterInput() {
        return this._cluster;
    }
    get deploymentMaximumPercent() {
        return this.getNumberAttribute('deployment_maximum_percent');
    }
    set deploymentMaximumPercent(value) {
        this._deploymentMaximumPercent = value;
    }
    resetDeploymentMaximumPercent() {
        this._deploymentMaximumPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentMaximumPercentInput() {
        return this._deploymentMaximumPercent;
    }
    get deploymentMinimumHealthyPercent() {
        return this.getNumberAttribute('deployment_minimum_healthy_percent');
    }
    set deploymentMinimumHealthyPercent(value) {
        this._deploymentMinimumHealthyPercent = value;
    }
    resetDeploymentMinimumHealthyPercent() {
        this._deploymentMinimumHealthyPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentMinimumHealthyPercentInput() {
        return this._deploymentMinimumHealthyPercent;
    }
    get desiredCount() {
        return this.getNumberAttribute('desired_count');
    }
    set desiredCount(value) {
        this._desiredCount = value;
    }
    resetDesiredCount() {
        this._desiredCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get desiredCountInput() {
        return this._desiredCount;
    }
    get enableEcsManagedTags() {
        return this.getBooleanAttribute('enable_ecs_managed_tags');
    }
    set enableEcsManagedTags(value) {
        this._enableEcsManagedTags = value;
    }
    resetEnableEcsManagedTags() {
        this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableEcsManagedTagsInput() {
        return this._enableEcsManagedTags;
    }
    get enableExecuteCommand() {
        return this.getBooleanAttribute('enable_execute_command');
    }
    set enableExecuteCommand(value) {
        this._enableExecuteCommand = value;
    }
    resetEnableExecuteCommand() {
        this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableExecuteCommandInput() {
        return this._enableExecuteCommand;
    }
    get forceNewDeployment() {
        return this.getBooleanAttribute('force_new_deployment');
    }
    set forceNewDeployment(value) {
        this._forceNewDeployment = value;
    }
    resetForceNewDeployment() {
        this._forceNewDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceNewDeploymentInput() {
        return this._forceNewDeployment;
    }
    get healthCheckGracePeriodSeconds() {
        return this.getNumberAttribute('health_check_grace_period_seconds');
    }
    set healthCheckGracePeriodSeconds(value) {
        this._healthCheckGracePeriodSeconds = value;
    }
    resetHealthCheckGracePeriodSeconds() {
        this._healthCheckGracePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckGracePeriodSecondsInput() {
        return this._healthCheckGracePeriodSeconds;
    }
    get iamRole() {
        return this.getStringAttribute('iam_role');
    }
    set iamRole(value) {
        this._iamRole = value;
    }
    resetIamRole() {
        this._iamRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamRoleInput() {
        return this._iamRole;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get launchType() {
        return this.getStringAttribute('launch_type');
    }
    set launchType(value) {
        this._launchType = value;
    }
    resetLaunchType() {
        this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get launchTypeInput() {
        return this._launchType;
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
    get platformVersion() {
        return this.getStringAttribute('platform_version');
    }
    set platformVersion(value) {
        this._platformVersion = value;
    }
    resetPlatformVersion() {
        this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformVersionInput() {
        return this._platformVersion;
    }
    get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    set propagateTags(value) {
        this._propagateTags = value;
    }
    resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propagateTagsInput() {
        return this._propagateTags;
    }
    get schedulingStrategy() {
        return this.getStringAttribute('scheduling_strategy');
    }
    set schedulingStrategy(value) {
        this._schedulingStrategy = value;
    }
    resetSchedulingStrategy() {
        this._schedulingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulingStrategyInput() {
        return this._schedulingStrategy;
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
    get taskDefinition() {
        return this.getStringAttribute('task_definition');
    }
    set taskDefinition(value) {
        this._taskDefinition = value;
    }
    resetTaskDefinition() {
        this._taskDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskDefinitionInput() {
        return this._taskDefinition;
    }
    get waitForSteadyState() {
        return this.getBooleanAttribute('wait_for_steady_state');
    }
    set waitForSteadyState(value) {
        this._waitForSteadyState = value;
    }
    resetWaitForSteadyState() {
        this._waitForSteadyState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitForSteadyStateInput() {
        return this._waitForSteadyState;
    }
    get capacityProviderStrategy() {
        return this.interpolationForAttribute('capacity_provider_strategy');
    }
    set capacityProviderStrategy(value) {
        this._capacityProviderStrategy = value;
    }
    resetCapacityProviderStrategy() {
        this._capacityProviderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityProviderStrategyInput() {
        return this._capacityProviderStrategy;
    }
    get deploymentCircuitBreaker() {
        return this.interpolationForAttribute('deployment_circuit_breaker');
    }
    set deploymentCircuitBreaker(value) {
        this._deploymentCircuitBreaker = value;
    }
    resetDeploymentCircuitBreaker() {
        this._deploymentCircuitBreaker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentCircuitBreakerInput() {
        return this._deploymentCircuitBreaker;
    }
    get deploymentController() {
        return this.interpolationForAttribute('deployment_controller');
    }
    set deploymentController(value) {
        this._deploymentController = value;
    }
    resetDeploymentController() {
        this._deploymentController = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentControllerInput() {
        return this._deploymentController;
    }
    get loadBalancer() {
        return this.interpolationForAttribute('load_balancer');
    }
    set loadBalancer(value) {
        this._loadBalancer = value;
    }
    resetLoadBalancer() {
        this._loadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerInput() {
        return this._loadBalancer;
    }
    get networkConfiguration() {
        return this.interpolationForAttribute('network_configuration');
    }
    set networkConfiguration(value) {
        this._networkConfiguration = value;
    }
    resetNetworkConfiguration() {
        this._networkConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkConfigurationInput() {
        return this._networkConfiguration;
    }
    get orderedPlacementStrategy() {
        return this.interpolationForAttribute('ordered_placement_strategy');
    }
    set orderedPlacementStrategy(value) {
        this._orderedPlacementStrategy = value;
    }
    resetOrderedPlacementStrategy() {
        this._orderedPlacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderedPlacementStrategyInput() {
        return this._orderedPlacementStrategy;
    }
    get placementConstraints() {
        return this.interpolationForAttribute('placement_constraints');
    }
    set placementConstraints(value) {
        this._placementConstraints = value;
    }
    resetPlacementConstraints() {
        this._placementConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementConstraintsInput() {
        return this._placementConstraints;
    }
    get serviceRegistries() {
        return this.interpolationForAttribute('service_registries');
    }
    set serviceRegistries(value) {
        this._serviceRegistries = value;
    }
    resetServiceRegistries() {
        this._serviceRegistries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRegistriesInput() {
        return this._serviceRegistries;
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
            cluster: cdktf.stringToTerraform(this._cluster),
            deployment_maximum_percent: cdktf.numberToTerraform(this._deploymentMaximumPercent),
            deployment_minimum_healthy_percent: cdktf.numberToTerraform(this._deploymentMinimumHealthyPercent),
            desired_count: cdktf.numberToTerraform(this._desiredCount),
            enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
            enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
            force_new_deployment: cdktf.booleanToTerraform(this._forceNewDeployment),
            health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
            iam_role: cdktf.stringToTerraform(this._iamRole),
            launch_type: cdktf.stringToTerraform(this._launchType),
            name: cdktf.stringToTerraform(this._name),
            platform_version: cdktf.stringToTerraform(this._platformVersion),
            propagate_tags: cdktf.stringToTerraform(this._propagateTags),
            scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            task_definition: cdktf.stringToTerraform(this._taskDefinition),
            wait_for_steady_state: cdktf.booleanToTerraform(this._waitForSteadyState),
            capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
            deployment_circuit_breaker: cdktf.listMapper(ecsServiceDeploymentCircuitBreakerToTerraform)(this._deploymentCircuitBreaker),
            deployment_controller: cdktf.listMapper(ecsServiceDeploymentControllerToTerraform)(this._deploymentController),
            load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform)(this._loadBalancer),
            network_configuration: cdktf.listMapper(ecsServiceNetworkConfigurationToTerraform)(this._networkConfiguration),
            ordered_placement_strategy: cdktf.listMapper(ecsServiceOrderedPlacementStrategyToTerraform)(this._orderedPlacementStrategy),
            placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
            service_registries: cdktf.listMapper(ecsServiceServiceRegistriesToTerraform)(this._serviceRegistries),
            timeouts: ecsServiceTimeoutsToTerraform(this._timeouts),
        };
    }
}
exports.EcsService = EcsService;
_a = JSII_RTTI_SYMBOL_1;
EcsService[_a] = { fqn: "hashicorp_aws.EcsService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlY3Mtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQW1KL0IsU0FBUyw2Q0FBNkMsQ0FBQyxNQUEyQztJQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMsNkNBQTZDLENBQUMsTUFBMkM7SUFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDaEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3JELENBQUE7QUFDSCxDQUFDO0FBU0QsU0FBUyx5Q0FBeUMsQ0FBQyxNQUF1QztJQUN4RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQXFCRCxTQUFTLGlDQUFpQyxD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QUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDdEYscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUM5RywwQkFBMEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBQzNILHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDOUcsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNyRyxRQUFRLEVBQUUsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN4RCxDQUFDO0lBQ0osQ0FBQzs7QUE3Z0JILGdDQThnQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvZWNzX3NlcnZpY2UuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsdXN0ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRNYXhpbXVtUGVyY2VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRNaW5pbXVtSGVhbHRoeVBlcmNlbnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNpcmVkQ291bnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUVjc01hbmFnZWRUYWdzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUV4ZWN1dGVDb21tYW5kPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9yY2VOZXdEZXBsb3ltZW50PzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFsdGhDaGVja0dyYWNlUGVyaW9kU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWFtUm9sZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYXRmb3JtVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvcGFnYXRlVGFncz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVkdWxpbmdTdHJhdGVneT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXNrRGVmaW5pdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3YWl0Rm9yU3RlYWR5U3RhdGU/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3k/OiBFY3NTZXJ2aWNlQ2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRDaXJjdWl0QnJlYWtlcj86IEVjc1NlcnZpY2VEZXBsb3ltZW50Q2lyY3VpdEJyZWFrZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwbG95bWVudENvbnRyb2xsZXI/OiBFY3NTZXJ2aWNlRGVwbG95bWVudENvbnRyb2xsZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9hZEJhbGFuY2VyPzogRWNzU2VydmljZUxvYWRCYWxhbmNlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrQ29uZmlndXJhdGlvbj86IEVjc1NlcnZpY2VOZXR3b3JrQ29uZmlndXJhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3k/OiBFY3NTZXJ2aWNlT3JkZXJlZFBsYWNlbWVudFN0cmF0ZWd5W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYWNlbWVudENvbnN0cmFpbnRzPzogRWNzU2VydmljZVBsYWNlbWVudENvbnN0cmFpbnRzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VSZWdpc3RyaWVzPzogRWNzU2VydmljZVNlcnZpY2VSZWdpc3RyaWVzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogRWNzU2VydmljZVRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBFY3NTZXJ2aWNlQ2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhc2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcGFjaXR5UHJvdmlkZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHQ/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVjc1NlcnZpY2VDYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NTZXJ2aWNlQ2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJhc2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmFzZSksXG4gICAgY2FwYWNpdHlfcHJvdmlkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FwYWNpdHlQcm92aWRlciksXG4gICAgd2VpZ2h0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFY3NTZXJ2aWNlRGVwbG95bWVudENpcmN1aXRCcmVha2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGU6IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGxiYWNrOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBlY3NTZXJ2aWNlRGVwbG95bWVudENpcmN1aXRCcmVha2VyVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZURlcGxveW1lbnRDaXJjdWl0QnJlYWtlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZSksXG4gICAgcm9sbGJhY2s6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGxiYWNrKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VEZXBsb3ltZW50Q29udHJvbGxlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBlY3NTZXJ2aWNlRGVwbG95bWVudENvbnRyb2xsZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NTZXJ2aWNlRGVwbG95bWVudENvbnRyb2xsZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VMb2FkQmFsYW5jZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250YWluZXJOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRhaW5lclBvcnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWxiTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldEdyb3VwQXJuPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBlY3NTZXJ2aWNlTG9hZEJhbGFuY2VyVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZUxvYWRCYWxhbmNlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJOYW1lKSxcbiAgICBjb250YWluZXJfcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJQb3J0KSxcbiAgICBlbGJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbGJOYW1lKSxcbiAgICB0YXJnZXRfZ3JvdXBfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldEdyb3VwQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VOZXR3b3JrQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhc3NpZ25QdWJsaWNJcD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1Ym5ldHM6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBlY3NTZXJ2aWNlTmV0d29ya0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NTZXJ2aWNlTmV0d29ya0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXNzaWduX3B1YmxpY19pcDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYXNzaWduUHVibGljSXApLFxuICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwcyksXG4gICAgc3VibmV0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VPcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWVsZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZWNzU2VydmljZU9yZGVyZWRQbGFjZW1lbnRTdHJhdGVneVRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1NlcnZpY2VPcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZmllbGQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmllbGQpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFY3NTZXJ2aWNlUGxhY2VtZW50Q29uc3RyYWludHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhwcmVzc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZWNzU2VydmljZVBsYWNlbWVudENvbnN0cmFpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZVBsYWNlbWVudENvbnN0cmFpbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhwcmVzc2lvbiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRhaW5lck5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRhaW5lclBvcnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZ2lzdHJ5QXJuOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllc1RvVGVycmFmb3JtKHN0cnVjdD86IEVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJOYW1lKSxcbiAgICBjb250YWluZXJfcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJQb3J0KSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHJlZ2lzdHJ5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWdpc3RyeUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFY3NTZXJ2aWNlVGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZWNzU2VydmljZVRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzU2VydmljZVRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRWNzU2VydmljZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVjc1NlcnZpY2VDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lY3Nfc2VydmljZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jbHVzdGVyID0gY29uZmlnLmNsdXN0ZXI7XG4gICAgdGhpcy5fZGVwbG95bWVudE1heGltdW1QZXJjZW50ID0gY29uZmlnLmRlcGxveW1lbnRNYXhpbXVtUGVyY2VudDtcbiAgICB0aGlzLl9kZXBsb3ltZW50TWluaW11bUhlYWx0aHlQZXJjZW50ID0gY29uZmlnLmRlcGxveW1lbnRNaW5pbXVtSGVhbHRoeVBlcmNlbnQ7XG4gICAgdGhpcy5fZGVzaXJlZENvdW50ID0gY29uZmlnLmRlc2lyZWRDb3VudDtcbiAgICB0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFncyA9IGNvbmZpZy5lbmFibGVFY3NNYW5hZ2VkVGFncztcbiAgICB0aGlzLl9lbmFibGVFeGVjdXRlQ29tbWFuZCA9IGNvbmZpZy5lbmFibGVFeGVjdXRlQ29tbWFuZDtcbiAgICB0aGlzLl9mb3JjZU5ld0RlcGxveW1lbnQgPSBjb25maWcuZm9yY2VOZXdEZXBsb3ltZW50O1xuICAgIHRoaXMuX2hlYWx0aENoZWNrR3JhY2VQZXJpb2RTZWNvbmRzID0gY29uZmlnLmhlYWx0aENoZWNrR3JhY2VQZXJpb2RTZWNvbmRzO1xuICAgIHRoaXMuX2lhbVJvbGUgPSBjb25maWcuaWFtUm9sZTtcbiAgICB0aGlzLl9sYXVuY2hUeXBlID0gY29uZmlnLmxhdW5jaFR5cGU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BsYXRmb3JtVmVyc2lvbiA9IGNvbmZpZy5wbGF0Zm9ybVZlcnNpb247XG4gICAgdGhpcy5fcHJvcGFnYXRlVGFncyA9IGNvbmZpZy5wcm9wYWdhdGVUYWdzO1xuICAgIHRoaXMuX3NjaGVkdWxpbmdTdHJhdGVneSA9IGNvbmZpZy5zY2hlZHVsaW5nU3RyYXRlZ3k7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90YXNrRGVmaW5pdGlvbiA9IGNvbmZpZy50YXNrRGVmaW5pdGlvbjtcbiAgICB0aGlzLl93YWl0Rm9yU3RlYWR5U3RhdGUgPSBjb25maWcud2FpdEZvclN0ZWFkeVN0YXRlO1xuICAgIHRoaXMuX2NhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSA9IGNvbmZpZy5jYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3k7XG4gICAgdGhpcy5fZGVwbG95bWVudENpcmN1aXRCcmVha2VyID0gY29uZmlnLmRlcGxveW1lbnRDaXJjdWl0QnJlYWtlcjtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29udHJvbGxlciA9IGNvbmZpZy5kZXBsb3ltZW50Q29udHJvbGxlcjtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXIgPSBjb25maWcubG9hZEJhbGFuY2VyO1xuICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uID0gY29uZmlnLm5ldHdvcmtDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX29yZGVyZWRQbGFjZW1lbnRTdHJhdGVneSA9IGNvbmZpZy5vcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3k7XG4gICAgdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMgPSBjb25maWcucGxhY2VtZW50Q29uc3RyYWludHM7XG4gICAgdGhpcy5fc2VydmljZVJlZ2lzdHJpZXMgPSBjb25maWcuc2VydmljZVJlZ2lzdHJpZXM7XG4gICAgdGhpcy5fdGltZW91dHMgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNsdXN0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbHVzdGVyPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNsdXN0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3RlcigpIHtcbiAgICB0aGlzLl9jbHVzdGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJcbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfbWF4aW11bV9wZXJjZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRNYXhpbXVtUGVyY2VudD86IG51bWJlcjtcbiAgcHVibGljIGdldCBkZXBsb3ltZW50TWF4aW11bVBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZXBsb3ltZW50X21heGltdW1fcGVyY2VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVwbG95bWVudE1heGltdW1QZXJjZW50KHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudE1heGltdW1QZXJjZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVwbG95bWVudE1heGltdW1QZXJjZW50KCkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRNYXhpbXVtUGVyY2VudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudE1heGltdW1QZXJjZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveW1lbnRNYXhpbXVtUGVyY2VudFxuICB9XG5cbiAgLy8gZGVwbG95bWVudF9taW5pbXVtX2hlYWx0aHlfcGVyY2VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXBsb3ltZW50TWluaW11bUhlYWx0aHlQZXJjZW50PzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRNaW5pbXVtSGVhbHRoeVBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZXBsb3ltZW50X21pbmltdW1faGVhbHRoeV9wZXJjZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXBsb3ltZW50TWluaW11bUhlYWx0aHlQZXJjZW50KHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudE1pbmltdW1IZWFsdGh5UGVyY2VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlcGxveW1lbnRNaW5pbXVtSGVhbHRoeVBlcmNlbnQoKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudE1pbmltdW1IZWFsdGh5UGVyY2VudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudE1pbmltdW1IZWFsdGh5UGVyY2VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50TWluaW11bUhlYWx0aHlQZXJjZW50XG4gIH1cblxuICAvLyBkZXNpcmVkX2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2lyZWRDb3VudD86IG51bWJlcjtcbiAgcHVibGljIGdldCBkZXNpcmVkQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZXNpcmVkX2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNpcmVkQ291bnQodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9kZXNpcmVkQ291bnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNpcmVkQ291bnQoKSB7XG4gICAgdGhpcy5fZGVzaXJlZENvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNpcmVkQ291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzaXJlZENvdW50XG4gIH1cblxuICAvLyBlbmFibGVfZWNzX21hbmFnZWRfdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVFY3NNYW5hZ2VkVGFncz86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgZW5hYmxlRWNzTWFuYWdlZFRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2Vjc19tYW5hZ2VkX3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUVjc01hbmFnZWRUYWdzKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2VuYWJsZUVjc01hbmFnZWRUYWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlRWNzTWFuYWdlZFRhZ3MoKSB7XG4gICAgdGhpcy5fZW5hYmxlRWNzTWFuYWdlZFRhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUVjc01hbmFnZWRUYWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUVjc01hbmFnZWRUYWdzXG4gIH1cblxuICAvLyBlbmFibGVfZXhlY3V0ZV9jb21tYW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUV4ZWN1dGVDb21tYW5kPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBlbmFibGVFeGVjdXRlQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZXhlY3V0ZV9jb21tYW5kJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVFeGVjdXRlQ29tbWFuZCh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9lbmFibGVFeGVjdXRlQ29tbWFuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUV4ZWN1dGVDb21tYW5kKCkge1xuICAgIHRoaXMuX2VuYWJsZUV4ZWN1dGVDb21tYW5kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVFeGVjdXRlQ29tbWFuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVFeGVjdXRlQ29tbWFuZFxuICB9XG5cbiAgLy8gZm9yY2VfbmV3X2RlcGxveW1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZm9yY2VOZXdEZXBsb3ltZW50PzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBmb3JjZU5ld0RlcGxveW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZm9yY2VfbmV3X2RlcGxveW1lbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcmNlTmV3RGVwbG95bWVudCh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9mb3JjZU5ld0RlcGxveW1lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JjZU5ld0RlcGxveW1lbnQoKSB7XG4gICAgdGhpcy5fZm9yY2VOZXdEZXBsb3ltZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JjZU5ld0RlcGxveW1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VOZXdEZXBsb3ltZW50XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWx0aENoZWNrR3JhY2VQZXJpb2RTZWNvbmRzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja0dyYWNlUGVyaW9kU2Vjb25kcygpIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZFNlY29uZHNcbiAgfVxuXG4gIC8vIGlhbV9yb2xlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWFtUm9sZT86IHN0cmluZztcbiAgcHVibGljIGdldCBpYW1Sb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbVJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbVJvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYW1Sb2xlKCkge1xuICAgIHRoaXMuX2lhbVJvbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbVJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtUm9sZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhdW5jaF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVHlwZT86IHN0cmluZztcbiAgcHVibGljIGdldCBsYXVuY2hUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGF1bmNoX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhdW5jaFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhdW5jaFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUeXBlKCkge1xuICAgIHRoaXMuX2xhdW5jaFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVHlwZVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBwbGF0Zm9ybV92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGxhdGZvcm1WZXJzaW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBsYXRmb3JtVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYXRmb3JtX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYXRmb3JtVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhdGZvcm1WZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhdGZvcm1WZXJzaW9uKCkge1xuICAgIHRoaXMuX3BsYXRmb3JtVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1WZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtVmVyc2lvblxuICB9XG5cbiAgLy8gcHJvcGFnYXRlX3RhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlVGFncz86IHN0cmluZztcbiAgcHVibGljIGdldCBwcm9wYWdhdGVUYWdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvcGFnYXRlX3RhZ3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb3BhZ2F0ZVRhZ3ModmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVUYWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvcGFnYXRlVGFncygpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVUYWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9wYWdhdGVUYWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BhZ2F0ZVRhZ3NcbiAgfVxuXG4gIC8vIHNjaGVkdWxpbmdfc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZWR1bGluZ1N0cmF0ZWd5Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNjaGVkdWxpbmdTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjaGVkdWxpbmdfc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjaGVkdWxpbmdTdHJhdGVneSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3NjaGVkdWxpbmdTdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVkdWxpbmdTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9zY2hlZHVsaW5nU3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVkdWxpbmdTdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlZHVsaW5nU3RyYXRlZ3lcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzQWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsXG4gIH1cblxuICAvLyB0YXNrX2RlZmluaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFza0RlZmluaXRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdGFza0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXNrX2RlZmluaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tEZWZpbml0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdGFza0RlZmluaXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXNrRGVmaW5pdGlvbigpIHtcbiAgICB0aGlzLl90YXNrRGVmaW5pdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFza0RlZmluaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0RlZmluaXRpb25cbiAgfVxuXG4gIC8vIHdhaXRfZm9yX3N0ZWFkeV9zdGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YWl0Rm9yU3RlYWR5U3RhdGU/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHdhaXRGb3JTdGVhZHlTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd3YWl0X2Zvcl9zdGVhZHlfc3RhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhaXRGb3JTdGVhZHlTdGF0ZSh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl93YWl0Rm9yU3RlYWR5U3RhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYWl0Rm9yU3RlYWR5U3RhdGUoKSB7XG4gICAgdGhpcy5fd2FpdEZvclN0ZWFkeVN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3YWl0Rm9yU3RlYWR5U3RhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdEZvclN0ZWFkeVN0YXRlXG4gIH1cblxuICAvLyBjYXBhY2l0eV9wcm92aWRlcl9zdHJhdGVneSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3k/OiBFY3NTZXJ2aWNlQ2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5W107XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NhcGFjaXR5X3Byb3ZpZGVyX3N0cmF0ZWd5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5KHZhbHVlOiBFY3NTZXJ2aWNlQ2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5W10gKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5KCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UHJvdmlkZXJTdHJhdGVneVxuICB9XG5cbiAgLy8gZGVwbG95bWVudF9jaXJjdWl0X2JyZWFrZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVwbG95bWVudENpcmN1aXRCcmVha2VyPzogRWNzU2VydmljZURlcGxveW1lbnRDaXJjdWl0QnJlYWtlcltdO1xuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRDaXJjdWl0QnJlYWtlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXBsb3ltZW50X2NpcmN1aXRfYnJlYWtlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlcGxveW1lbnRDaXJjdWl0QnJlYWtlcih2YWx1ZTogRWNzU2VydmljZURlcGxveW1lbnRDaXJjdWl0QnJlYWtlcltdICkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRDaXJjdWl0QnJlYWtlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlcGxveW1lbnRDaXJjdWl0QnJlYWtlcigpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q2lyY3VpdEJyZWFrZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRDaXJjdWl0QnJlYWtlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50Q2lyY3VpdEJyZWFrZXJcbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfY29udHJvbGxlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXBsb3ltZW50Q29udHJvbGxlcj86IEVjc1NlcnZpY2VEZXBsb3ltZW50Q29udHJvbGxlcltdO1xuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRDb250cm9sbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RlcGxveW1lbnRfY29udHJvbGxlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlcGxveW1lbnRDb250cm9sbGVyKHZhbHVlOiBFY3NTZXJ2aWNlRGVwbG95bWVudENvbnRyb2xsZXJbXSApIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29udHJvbGxlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlcGxveW1lbnRDb250cm9sbGVyKCkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRDb250cm9sbGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXBsb3ltZW50Q29udHJvbGxlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50Q29udHJvbGxlclxuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXI/OiBFY3NTZXJ2aWNlTG9hZEJhbGFuY2VyW107XG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvYWRfYmFsYW5jZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsb2FkQmFsYW5jZXIodmFsdWU6IEVjc1NlcnZpY2VMb2FkQmFsYW5jZXJbXSApIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2FkQmFsYW5jZXIoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZEJhbGFuY2VyXG4gIH1cblxuICAvLyBuZXR3b3JrX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya0NvbmZpZ3VyYXRpb24/OiBFY3NTZXJ2aWNlTmV0d29ya0NvbmZpZ3VyYXRpb25bXTtcbiAgcHVibGljIGdldCBuZXR3b3JrQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrQ29uZmlndXJhdGlvbih2YWx1ZTogRWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uW10gKSB7XG4gICAgdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9uZXR3b3JrQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIG9yZGVyZWRfcGxhY2VtZW50X3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29yZGVyZWRQbGFjZW1lbnRTdHJhdGVneT86IEVjc1NlcnZpY2VPcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3lbXTtcbiAgcHVibGljIGdldCBvcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3JkZXJlZF9wbGFjZW1lbnRfc3RyYXRlZ3knKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBvcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3kodmFsdWU6IEVjc1NlcnZpY2VPcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3lbXSApIHtcbiAgICB0aGlzLl9vcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3koKSB7XG4gICAgdGhpcy5fb3JkZXJlZFBsYWNlbWVudFN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXJlZFBsYWNlbWVudFN0cmF0ZWd5XG4gIH1cblxuICAvLyBwbGFjZW1lbnRfY29uc3RyYWludHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGxhY2VtZW50Q29uc3RyYWludHM/OiBFY3NTZXJ2aWNlUGxhY2VtZW50Q29uc3RyYWludHNbXTtcbiAgcHVibGljIGdldCBwbGFjZW1lbnRDb25zdHJhaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwbGFjZW1lbnRfY29uc3RyYWludHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwbGFjZW1lbnRDb25zdHJhaW50cyh2YWx1ZTogRWNzU2VydmljZVBsYWNlbWVudENvbnN0cmFpbnRzW10gKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbGFjZW1lbnRDb25zdHJhaW50cygpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnRDb25zdHJhaW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50Q29uc3RyYWludHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHNcbiAgfVxuXG4gIC8vIHNlcnZpY2VfcmVnaXN0cmllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlUmVnaXN0cmllcz86IEVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllc1tdO1xuICBwdWJsaWMgZ2V0IHNlcnZpY2VSZWdpc3RyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NlcnZpY2VfcmVnaXN0cmllcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VSZWdpc3RyaWVzKHZhbHVlOiBFY3NTZXJ2aWNlU2VydmljZVJlZ2lzdHJpZXNbXSApIHtcbiAgICB0aGlzLl9zZXJ2aWNlUmVnaXN0cmllcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZpY2VSZWdpc3RyaWVzKCkge1xuICAgIHRoaXMuX3NlcnZpY2VSZWdpc3RyaWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlUmVnaXN0cmllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlUmVnaXN0cmllc1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHM/OiBFY3NTZXJ2aWNlVGltZW91dHM7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGltZW91dHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0cyh2YWx1ZTogRWNzU2VydmljZVRpbWVvdXRzICkge1xuICAgIHRoaXMuX3RpbWVvdXRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dHMoKSB7XG4gICAgdGhpcy5fdGltZW91dHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsdXN0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NsdXN0ZXIpLFxuICAgICAgZGVwbG95bWVudF9tYXhpbXVtX3BlcmNlbnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2RlcGxveW1lbnRNYXhpbXVtUGVyY2VudCksXG4gICAgICBkZXBsb3ltZW50X21pbmltdW1faGVhbHRoeV9wZXJjZW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZXBsb3ltZW50TWluaW11bUhlYWx0aHlQZXJjZW50KSxcbiAgICAgIGRlc2lyZWRfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2Rlc2lyZWRDb3VudCksXG4gICAgICBlbmFibGVfZWNzX21hbmFnZWRfdGFnczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZUVjc01hbmFnZWRUYWdzKSxcbiAgICAgIGVuYWJsZV9leGVjdXRlX2NvbW1hbmQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVFeGVjdXRlQ29tbWFuZCksXG4gICAgICBmb3JjZV9uZXdfZGVwbG95bWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZvcmNlTmV3RGVwbG95bWVudCksXG4gICAgICBoZWFsdGhfY2hlY2tfZ3JhY2VfcGVyaW9kX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2hlYWx0aENoZWNrR3JhY2VQZXJpb2RTZWNvbmRzKSxcbiAgICAgIGlhbV9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pYW1Sb2xlKSxcbiAgICAgIGxhdW5jaF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sYXVuY2hUeXBlKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcGxhdGZvcm1fdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhdGZvcm1WZXJzaW9uKSxcbiAgICAgIHByb3BhZ2F0ZV90YWdzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcm9wYWdhdGVUYWdzKSxcbiAgICAgIHNjaGVkdWxpbmdfc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NjaGVkdWxpbmdTdHJhdGVneSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHRhc2tfZGVmaW5pdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFza0RlZmluaXRpb24pLFxuICAgICAgd2FpdF9mb3Jfc3RlYWR5X3N0YXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fd2FpdEZvclN0ZWFkeVN0YXRlKSxcbiAgICAgIGNhcGFjaXR5X3Byb3ZpZGVyX3N0cmF0ZWd5OiBjZGt0Zi5saXN0TWFwcGVyKGVjc1NlcnZpY2VDYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3lUb1RlcnJhZm9ybSkodGhpcy5fY2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5KSxcbiAgICAgIGRlcGxveW1lbnRfY2lyY3VpdF9icmVha2VyOiBjZGt0Zi5saXN0TWFwcGVyKGVjc1NlcnZpY2VEZXBsb3ltZW50Q2lyY3VpdEJyZWFrZXJUb1RlcnJhZm9ybSkodGhpcy5fZGVwbG95bWVudENpcmN1aXRCcmVha2VyKSxcbiAgICAgIGRlcGxveW1lbnRfY29udHJvbGxlcjogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlRGVwbG95bWVudENvbnRyb2xsZXJUb1RlcnJhZm9ybSkodGhpcy5fZGVwbG95bWVudENvbnRyb2xsZXIpLFxuICAgICAgbG9hZF9iYWxhbmNlcjogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlTG9hZEJhbGFuY2VyVG9UZXJyYWZvcm0pKHRoaXMuX2xvYWRCYWxhbmNlciksXG4gICAgICBuZXR3b3JrX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoZWNzU2VydmljZU5ldHdvcmtDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uKSxcbiAgICAgIG9yZGVyZWRfcGxhY2VtZW50X3N0cmF0ZWd5OiBjZGt0Zi5saXN0TWFwcGVyKGVjc1NlcnZpY2VPcmRlcmVkUGxhY2VtZW50U3RyYXRlZ3lUb1RlcnJhZm9ybSkodGhpcy5fb3JkZXJlZFBsYWNlbWVudFN0cmF0ZWd5KSxcbiAgICAgIHBsYWNlbWVudF9jb25zdHJhaW50czogY2RrdGYubGlzdE1hcHBlcihlY3NTZXJ2aWNlUGxhY2VtZW50Q29uc3RyYWludHNUb1RlcnJhZm9ybSkodGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMpLFxuICAgICAgc2VydmljZV9yZWdpc3RyaWVzOiBjZGt0Zi5saXN0TWFwcGVyKGVjc1NlcnZpY2VTZXJ2aWNlUmVnaXN0cmllc1RvVGVycmFmb3JtKSh0aGlzLl9zZXJ2aWNlUmVnaXN0cmllcyksXG4gICAgICB0aW1lb3V0czogZWNzU2VydmljZVRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==