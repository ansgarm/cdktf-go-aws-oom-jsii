"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodedeployDeploymentGroup = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarms: cdktf.listMapper(cdktf.stringToTerraform)(struct.alarms),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        ignore_poll_alarm_failure: cdktf.booleanToTerraform(struct.ignorePollAlarmFailure),
    };
}
function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_on_timeout: cdktf.stringToTerraform(struct.actionOnTimeout),
        wait_time_in_minutes: cdktf.numberToTerraform(struct.waitTimeInMinutes),
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        termination_wait_time_in_minutes: cdktf.numberToTerraform(struct.terminationWaitTimeInMinutes),
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        deployment_ready_option: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform)(struct.deploymentReadyOption),
        green_fleet_provisioning_option: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform)(struct.greenFleetProvisioningOption),
        terminate_blue_instances_on_deployment_success: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform)(struct.terminateBlueInstancesOnDeploymentSuccess),
    };
}
function codedeployDeploymentGroupDeploymentStyleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        deployment_option: cdktf.stringToTerraform(struct.deploymentOption),
        deployment_type: cdktf.stringToTerraform(struct.deploymentType),
    };
}
function codedeployDeploymentGroupEc2TagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function codedeployDeploymentGroupEc2TagSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform)(struct.ec2TagFilter),
    };
}
function codedeployDeploymentGroupEcsServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_name: cdktf.stringToTerraform(struct.clusterName),
        service_name: cdktf.stringToTerraform(struct.serviceName),
    };
}
function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.listenerArns),
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.listenerArns),
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prod_traffic_route: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform)(struct.prodTrafficRoute),
        target_group: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform)(struct.targetGroup),
        test_traffic_route: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform)(struct.testTrafficRoute),
    };
}
function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        elb_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform)(struct.elbInfo),
        target_group_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform)(struct.targetGroupInfo),
        target_group_pair_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform)(struct.targetGroupPairInfo),
    };
}
function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        trigger_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.triggerEvents),
        trigger_name: cdktf.stringToTerraform(struct.triggerName),
        trigger_target_arn: cdktf.stringToTerraform(struct.triggerTargetArn),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group}.
 */
class CodedeployDeploymentGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codedeploy_deployment_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._appName = config.appName;
        this._autoscalingGroups = config.autoscalingGroups;
        this._deploymentConfigName = config.deploymentConfigName;
        this._deploymentGroupName = config.deploymentGroupName;
        this._serviceRoleArn = config.serviceRoleArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._alarmConfiguration = config.alarmConfiguration;
        this._autoRollbackConfiguration = config.autoRollbackConfiguration;
        this._blueGreenDeploymentConfig = config.blueGreenDeploymentConfig;
        this._deploymentStyle = config.deploymentStyle;
        this._ec2TagFilter = config.ec2TagFilter;
        this._ec2TagSet = config.ec2TagSet;
        this._ecsService = config.ecsService;
        this._loadBalancerInfo = config.loadBalancerInfo;
        this._onPremisesInstanceTagFilter = config.onPremisesInstanceTagFilter;
        this._triggerConfiguration = config.triggerConfiguration;
    }
    get appName() {
        return this.getStringAttribute('app_name');
    }
    set appName(value) {
        this._appName = value;
    }
    // Temporarily expose input value. Use with caution.
    get appNameInput() {
        return this._appName;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoscalingGroups() {
        return this.getListAttribute('autoscaling_groups');
    }
    set autoscalingGroups(value) {
        this._autoscalingGroups = value;
    }
    resetAutoscalingGroups() {
        this._autoscalingGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingGroupsInput() {
        return this._autoscalingGroups;
    }
    // compute_platform - computed: true, optional: false, required: false
    get computePlatform() {
        return this.getStringAttribute('compute_platform');
    }
    get deploymentConfigName() {
        return this.getStringAttribute('deployment_config_name');
    }
    set deploymentConfigName(value) {
        this._deploymentConfigName = value;
    }
    resetDeploymentConfigName() {
        this._deploymentConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentConfigNameInput() {
        return this._deploymentConfigName;
    }
    // deployment_group_id - computed: true, optional: false, required: false
    get deploymentGroupId() {
        return this.getStringAttribute('deployment_group_id');
    }
    get deploymentGroupName() {
        return this.getStringAttribute('deployment_group_name');
    }
    set deploymentGroupName(value) {
        this._deploymentGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentGroupNameInput() {
        return this._deploymentGroupName;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    set serviceRoleArn(value) {
        this._serviceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRoleArnInput() {
        return this._serviceRoleArn;
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
    get alarmConfiguration() {
        return this.interpolationForAttribute('alarm_configuration');
    }
    set alarmConfiguration(value) {
        this._alarmConfiguration = value;
    }
    resetAlarmConfiguration() {
        this._alarmConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alarmConfigurationInput() {
        return this._alarmConfiguration;
    }
    get autoRollbackConfiguration() {
        return this.interpolationForAttribute('auto_rollback_configuration');
    }
    set autoRollbackConfiguration(value) {
        this._autoRollbackConfiguration = value;
    }
    resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration;
    }
    get blueGreenDeploymentConfig() {
        return this.interpolationForAttribute('blue_green_deployment_config');
    }
    set blueGreenDeploymentConfig(value) {
        this._blueGreenDeploymentConfig = value;
    }
    resetBlueGreenDeploymentConfig() {
        this._blueGreenDeploymentConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blueGreenDeploymentConfigInput() {
        return this._blueGreenDeploymentConfig;
    }
    get deploymentStyle() {
        return this.interpolationForAttribute('deployment_style');
    }
    set deploymentStyle(value) {
        this._deploymentStyle = value;
    }
    resetDeploymentStyle() {
        this._deploymentStyle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentStyleInput() {
        return this._deploymentStyle;
    }
    get ec2TagFilter() {
        return this.interpolationForAttribute('ec2_tag_filter');
    }
    set ec2TagFilter(value) {
        this._ec2TagFilter = value;
    }
    resetEc2TagFilter() {
        this._ec2TagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2TagFilterInput() {
        return this._ec2TagFilter;
    }
    get ec2TagSet() {
        return this.interpolationForAttribute('ec2_tag_set');
    }
    set ec2TagSet(value) {
        this._ec2TagSet = value;
    }
    resetEc2TagSet() {
        this._ec2TagSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2TagSetInput() {
        return this._ec2TagSet;
    }
    get ecsService() {
        return this.interpolationForAttribute('ecs_service');
    }
    set ecsService(value) {
        this._ecsService = value;
    }
    resetEcsService() {
        this._ecsService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ecsServiceInput() {
        return this._ecsService;
    }
    get loadBalancerInfo() {
        return this.interpolationForAttribute('load_balancer_info');
    }
    set loadBalancerInfo(value) {
        this._loadBalancerInfo = value;
    }
    resetLoadBalancerInfo() {
        this._loadBalancerInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerInfoInput() {
        return this._loadBalancerInfo;
    }
    get onPremisesInstanceTagFilter() {
        return this.interpolationForAttribute('on_premises_instance_tag_filter');
    }
    set onPremisesInstanceTagFilter(value) {
        this._onPremisesInstanceTagFilter = value;
    }
    resetOnPremisesInstanceTagFilter() {
        this._onPremisesInstanceTagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get onPremisesInstanceTagFilterInput() {
        return this._onPremisesInstanceTagFilter;
    }
    get triggerConfiguration() {
        return this.interpolationForAttribute('trigger_configuration');
    }
    set triggerConfiguration(value) {
        this._triggerConfiguration = value;
    }
    resetTriggerConfiguration() {
        this._triggerConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get triggerConfigurationInput() {
        return this._triggerConfiguration;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            app_name: cdktf.stringToTerraform(this._appName),
            autoscaling_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._autoscalingGroups),
            deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
            deployment_group_name: cdktf.stringToTerraform(this._deploymentGroupName),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            alarm_configuration: cdktf.listMapper(codedeployDeploymentGroupAlarmConfigurationToTerraform)(this._alarmConfiguration),
            auto_rollback_configuration: cdktf.listMapper(codedeployDeploymentGroupAutoRollbackConfigurationToTerraform)(this._autoRollbackConfiguration),
            blue_green_deployment_config: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform)(this._blueGreenDeploymentConfig),
            deployment_style: cdktf.listMapper(codedeployDeploymentGroupDeploymentStyleToTerraform)(this._deploymentStyle),
            ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagFilterToTerraform)(this._ec2TagFilter),
            ec2_tag_set: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetToTerraform)(this._ec2TagSet),
            ecs_service: cdktf.listMapper(codedeployDeploymentGroupEcsServiceToTerraform)(this._ecsService),
            load_balancer_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoToTerraform)(this._loadBalancerInfo),
            on_premises_instance_tag_filter: cdktf.listMapper(codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform)(this._onPremisesInstanceTagFilter),
            trigger_configuration: cdktf.listMapper(codedeployDeploymentGroupTriggerConfigurationToTerraform)(this._triggerConfiguration),
        };
    }
}
exports.CodedeployDeploymentGroup = CodedeployDeploymentGroup;
_a = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroup[_a] = { fqn: "hashicorp_aws.CodedeployDeploymentGroup", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWRlcGxveS1kZXBsb3ltZW50LWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZWRlcGxveS1kZXBsb3ltZW50LWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBNkcvQixTQUFTLHNEQUFzRCxDQUFDLE1BQW9EO0lBQ2xILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztLQUNwRixDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMsNkRBQTZELENBQUMsTUFBMkQ7SUFDaEksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMsa0ZBQWtGLENBQUMsTUFBZ0Y7SUFDMUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxpQkFBaUIsRUFB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LGdCQUFnQixDQUFDO1lBQzlHLGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGdEQUFnRCxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN0RyxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDN0YsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9GLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEgsK0JBQStCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywrREFBK0QsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztZQUNySixxQkFBcUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdEQUF3RCxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQzlILENBQUM7SUFDSixDQUFDOztBQWxXSCw4REFtV0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvY29kZWRlcGxveV9kZXBsb3ltZW50X2dyb3VwLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9zY2FsaW5nR3JvdXBzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwbG95bWVudENvbmZpZ05hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRHcm91cE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlUm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGFybUNvbmZpZ3VyYXRpb24/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQWxhcm1Db25maWd1cmF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJsdWVHcmVlbkRlcGxveW1lbnRDb25maWc/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwbG95bWVudFN0eWxlPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWMyVGFnRmlsdGVyPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ0ZpbHRlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWMyVGFnU2V0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ1NldFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWNzU2VydmljZT86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFY3NTZXJ2aWNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2FkQmFsYW5jZXJJbmZvPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBPblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyaWdnZXJDb25maWd1cmF0aW9uPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cFRyaWdnZXJDb25maWd1cmF0aW9uW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBbGFybUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGFybXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZ25vcmVQb2xsQWxhcm1GYWlsdXJlPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEFsYXJtQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBbGFybUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWxhcm1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFsYXJtcyksXG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgaWdub3JlX3BvbGxfYWxhcm1fZmFpbHVyZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaWdub3JlUG9sbEFsYXJtRmFpbHVyZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50cz86IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGV2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ldmVudHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uT25UaW1lb3V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2FpdFRpbWVJbk1pbnV0ZXM/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnRGVwbG95bWVudFJlYWR5T3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uX29uX3RpbWVvdXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uT25UaW1lb3V0KSxcbiAgICB3YWl0X3RpbWVfaW5fbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53YWl0VGltZUluTWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ0dyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb24/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnR3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnR3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnVGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ1Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2Vzcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uKSxcbiAgICB0ZXJtaW5hdGlvbl93YWl0X3RpbWVfaW5fbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRSZWFkeU9wdGlvbj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnRGVwbG95bWVudFJlYWR5T3B0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdHcmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2Vzcz86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnVGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3NbXTtcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXBsb3ltZW50X3JlYWR5X29wdGlvbjogY2RrdGYubGlzdE1hcHBlcihjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ0RlcGxveW1lbnRSZWFkeU9wdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmRlcGxveW1lbnRSZWFkeU9wdGlvbiksXG4gICAgZ3JlZW5fZmxlZXRfcHJvdmlzaW9uaW5nX29wdGlvbjogY2RrdGYubGlzdE1hcHBlcihjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ0dyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5ncmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uKSxcbiAgICB0ZXJtaW5hdGVfYmx1ZV9pbnN0YW5jZXNfb25fZGVwbG95bWVudF9zdWNjZXNzOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnVGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3NUb1RlcnJhZm9ybSkoc3RydWN0IS50ZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2VzcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRGVwbG95bWVudFN0eWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRPcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRUeXBlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRGVwbG95bWVudFN0eWxlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXBsb3ltZW50X29wdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXBsb3ltZW50T3B0aW9uKSxcbiAgICBkZXBsb3ltZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVwbG95bWVudFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWMyVGFnRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ1NldEVjMlRhZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRFYzJUYWdGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWMyVGFnU2V0RWMyVGFnRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ1NldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYzJUYWdGaWx0ZXI/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWMyVGFnU2V0RWMyVGFnRmlsdGVyW107XG59XG5cbmZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWMyVGFnU2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVjMl90YWdfZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRFYzJUYWdGaWx0ZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5lYzJUYWdGaWx0ZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjc1NlcnZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWNzU2VydmljZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFY3NTZXJ2aWNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsdXN0ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbHVzdGVyTmFtZSksXG4gICAgc2VydmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvRWxiSW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9FbGJJbmZvVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9FbGJJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwSW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cEluZm9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwSW5mbyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvUHJvZFRyYWZmaWNSb3V0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGlzdGVuZXJBcm5zOiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvUHJvZFRyYWZmaWNSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Byb2RUcmFmZmljUm91dGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGlzdGVuZXJfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5saXN0ZW5lckFybnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGFyZ2V0R3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGFyZ2V0R3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UYXJnZXRHcm91cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGVzdFRyYWZmaWNSb3V0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGlzdGVuZXJBcm5zOiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGVzdFRyYWZmaWNSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Rlc3RUcmFmZmljUm91dGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbGlzdGVuZXJfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5saXN0ZW5lckFybnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2RUcmFmZmljUm91dGU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Byb2RUcmFmZmljUm91dGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldEdyb3VwOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UYXJnZXRHcm91cFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVzdFRyYWZmaWNSb3V0ZT86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Rlc3RUcmFmZmljUm91dGVbXTtcbn1cblxuZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHByb2RfdHJhZmZpY19yb3V0ZTogY2RrdGYubGlzdE1hcHBlcihjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9Qcm9kVHJhZmZpY1JvdXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvZFRyYWZmaWNSb3V0ZSksXG4gICAgdGFyZ2V0X2dyb3VwOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1RhcmdldEdyb3VwVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFyZ2V0R3JvdXApLFxuICAgIHRlc3RfdHJhZmZpY19yb3V0ZTogY2RrdGYubGlzdE1hcHBlcihjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEudGVzdFRyYWZmaWNSb3V0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbGJJbmZvPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9FbGJJbmZvW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRHcm91cEluZm8/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwSW5mb1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0R3JvdXBQYWlySW5mbz86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1tdO1xufVxuXG5mdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVsYl9pbmZvOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvRWxiSW5mb1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVsYkluZm8pLFxuICAgIHRhcmdldF9ncm91cF9pbmZvOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBJbmZvVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFyZ2V0R3JvdXBJbmZvKSxcbiAgICB0YXJnZXRfZ3JvdXBfcGFpcl9pbmZvOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhcmdldEdyb3VwUGFpckluZm8pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cE9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBPblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwT25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cFRyaWdnZXJDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyaWdnZXJFdmVudHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmlnZ2VyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmlnZ2VyVGFyZ2V0QXJuOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBUcmlnZ2VyQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBUcmlnZ2VyQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0cmlnZ2VyX2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50cmlnZ2VyRXZlbnRzKSxcbiAgICB0cmlnZ2VyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHJpZ2dlck5hbWUpLFxuICAgIHRyaWdnZXJfdGFyZ2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmlnZ2VyVGFyZ2V0QXJuKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZGVkZXBsb3lfZGVwbG95bWVudF9ncm91cCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hcHBOYW1lID0gY29uZmlnLmFwcE5hbWU7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cHMgPSBjb25maWcuYXV0b3NjYWxpbmdHcm91cHM7XG4gICAgdGhpcy5fZGVwbG95bWVudENvbmZpZ05hbWUgPSBjb25maWcuZGVwbG95bWVudENvbmZpZ05hbWU7XG4gICAgdGhpcy5fZGVwbG95bWVudEdyb3VwTmFtZSA9IGNvbmZpZy5kZXBsb3ltZW50R3JvdXBOYW1lO1xuICAgIHRoaXMuX3NlcnZpY2VSb2xlQXJuID0gY29uZmlnLnNlcnZpY2VSb2xlQXJuO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fYWxhcm1Db25maWd1cmF0aW9uID0gY29uZmlnLmFsYXJtQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uID0gY29uZmlnLmF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZyA9IGNvbmZpZy5ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnO1xuICAgIHRoaXMuX2RlcGxveW1lbnRTdHlsZSA9IGNvbmZpZy5kZXBsb3ltZW50U3R5bGU7XG4gICAgdGhpcy5fZWMyVGFnRmlsdGVyID0gY29uZmlnLmVjMlRhZ0ZpbHRlcjtcbiAgICB0aGlzLl9lYzJUYWdTZXQgPSBjb25maWcuZWMyVGFnU2V0O1xuICAgIHRoaXMuX2Vjc1NlcnZpY2UgPSBjb25maWcuZWNzU2VydmljZTtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJJbmZvID0gY29uZmlnLmxvYWRCYWxhbmNlckluZm87XG4gICAgdGhpcy5fb25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyID0gY29uZmlnLm9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcjtcbiAgICB0aGlzLl90cmlnZ2VyQ29uZmlndXJhdGlvbiA9IGNvbmZpZy50cmlnZ2VyQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXBwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBwTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFwcE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcE5hbWVcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b3NjYWxpbmdfZ3JvdXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9zY2FsaW5nR3JvdXBzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXV0b3NjYWxpbmdfZ3JvdXBzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvc2NhbGluZ0dyb3Vwcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvc2NhbGluZ0dyb3VwcygpIHtcbiAgICB0aGlzLl9hdXRvc2NhbGluZ0dyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NjYWxpbmdHcm91cHNcbiAgfVxuXG4gIC8vIGNvbXB1dGVfcGxhdGZvcm0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wdXRlUGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wdXRlX3BsYXRmb3JtJyk7XG4gIH1cblxuICAvLyBkZXBsb3ltZW50X2NvbmZpZ19uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRDb25maWdOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRDb25maWdOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVwbG95bWVudF9jb25maWdfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVwbG95bWVudENvbmZpZ05hbWUodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29uZmlnTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlcGxveW1lbnRDb25maWdOYW1lKCkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRDb25maWdOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXBsb3ltZW50Q29uZmlnTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50Q29uZmlnTmFtZVxuICB9XG5cbiAgLy8gZGVwbG95bWVudF9ncm91cF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVwbG95bWVudF9ncm91cF9pZCcpO1xuICB9XG5cbiAgLy8gZGVwbG95bWVudF9ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRHcm91cE5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBkZXBsb3ltZW50R3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVwbG95bWVudF9ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXBsb3ltZW50R3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50R3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwbG95bWVudEdyb3VwTmFtZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VydmljZVJvbGVBcm46IHN0cmluZztcbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2Vfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlUm9sZUFyblxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vIGFsYXJtX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxhcm1Db25maWd1cmF0aW9uPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEFsYXJtQ29uZmlndXJhdGlvbltdO1xuICBwdWJsaWMgZ2V0IGFsYXJtQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhbGFybV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYWxhcm1Db25maWd1cmF0aW9uKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQWxhcm1Db25maWd1cmF0aW9uW10gKSB7XG4gICAgdGhpcy5fYWxhcm1Db25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxhcm1Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2FsYXJtQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxhcm1Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsYXJtQ29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gYXV0b19yb2xsYmFja19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbltdO1xuICBwdWJsaWMgZ2V0IGF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0b19yb2xsYmFja19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbih2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25bXSApIHtcbiAgICB0aGlzLl9hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIGJsdWVfZ3JlZW5fZGVwbG95bWVudF9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZz86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnW107XG4gIHB1YmxpYyBnZXQgYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdibHVlX2dyZWVuX2RlcGxveW1lbnRfY29uZmlnJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZyh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdbXSApIHtcbiAgICB0aGlzLl9ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Qmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZygpIHtcbiAgICB0aGlzLl9ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JsdWVHcmVlbkRlcGxveW1lbnRDb25maWdcbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfc3R5bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVwbG95bWVudFN0eWxlPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZVtdO1xuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRTdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXBsb3ltZW50X3N0eWxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVwbG95bWVudFN0eWxlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRGVwbG95bWVudFN0eWxlW10gKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudFN0eWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVwbG95bWVudFN0eWxlKCkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRTdHlsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudFN0eWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveW1lbnRTdHlsZVxuICB9XG5cbiAgLy8gZWMyX3RhZ19maWx0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWMyVGFnRmlsdGVyPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ0ZpbHRlcltdO1xuICBwdWJsaWMgZ2V0IGVjMlRhZ0ZpbHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlYzJfdGFnX2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVjMlRhZ0ZpbHRlcih2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ0ZpbHRlcltdICkge1xuICAgIHRoaXMuX2VjMlRhZ0ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVjMlRhZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl9lYzJUYWdGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVjMlRhZ0ZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYzJUYWdGaWx0ZXJcbiAgfVxuXG4gIC8vIGVjMl90YWdfc2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VjMlRhZ1NldD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRbXTtcbiAgcHVibGljIGdldCBlYzJUYWdTZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWMyX3RhZ19zZXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlYzJUYWdTZXQodmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRbXSApIHtcbiAgICB0aGlzLl9lYzJUYWdTZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFYzJUYWdTZXQoKSB7XG4gICAgdGhpcy5fZWMyVGFnU2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYzJUYWdTZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWMyVGFnU2V0XG4gIH1cblxuICAvLyBlY3Nfc2VydmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lY3NTZXJ2aWNlPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjc1NlcnZpY2VbXTtcbiAgcHVibGljIGdldCBlY3NTZXJ2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vjc19zZXJ2aWNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZWNzU2VydmljZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjc1NlcnZpY2VbXSApIHtcbiAgICB0aGlzLl9lY3NTZXJ2aWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWNzU2VydmljZSgpIHtcbiAgICB0aGlzLl9lY3NTZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlY3NTZXJ2aWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vjc1NlcnZpY2VcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJfaW5mbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXJJbmZvPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9bXTtcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvYWRfYmFsYW5jZXJfaW5mbycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlckluZm8odmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvW10gKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VySW5mbyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlckluZm8oKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VySW5mbyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VySW5mb0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJJbmZvXG4gIH1cblxuICAvLyBvbl9wcmVtaXNlc19pbnN0YW5jZV90YWdfZmlsdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBPblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXJbXTtcbiAgcHVibGljIGdldCBvblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb25fcHJlbWlzZXNfaW5zdGFuY2VfdGFnX2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcih2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cE9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcltdICkge1xuICAgIHRoaXMuX29uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl9vblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXJcbiAgfVxuXG4gIC8vIHRyaWdnZXJfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90cmlnZ2VyQ29uZmlndXJhdGlvbj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBUcmlnZ2VyQ29uZmlndXJhdGlvbltdO1xuICBwdWJsaWMgZ2V0IHRyaWdnZXJDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RyaWdnZXJfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyaWdnZXJDb25maWd1cmF0aW9uKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwVHJpZ2dlckNvbmZpZ3VyYXRpb25bXSApIHtcbiAgICB0aGlzLl90cmlnZ2VyQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRyaWdnZXJDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3RyaWdnZXJDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cmlnZ2VyQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyQ29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwTmFtZSksXG4gICAgICBhdXRvc2NhbGluZ19ncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2F1dG9zY2FsaW5nR3JvdXBzKSxcbiAgICAgIGRlcGxveW1lbnRfY29uZmlnX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlcGxveW1lbnRDb25maWdOYW1lKSxcbiAgICAgIGRlcGxveW1lbnRfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVwbG95bWVudEdyb3VwTmFtZSksXG4gICAgICBzZXJ2aWNlX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlUm9sZUFybiksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGFsYXJtX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cEFsYXJtQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9hbGFybUNvbmZpZ3VyYXRpb24pLFxuICAgICAgYXV0b19yb2xsYmFja19jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24pLFxuICAgICAgYmx1ZV9ncmVlbl9kZXBsb3ltZW50X2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ1RvVGVycmFmb3JtKSh0aGlzLl9ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnKSxcbiAgICAgIGRlcGxveW1lbnRfc3R5bGU6IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZVRvVGVycmFmb3JtKSh0aGlzLl9kZXBsb3ltZW50U3R5bGUpLFxuICAgICAgZWMyX3RhZ19maWx0ZXI6IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ0ZpbHRlclRvVGVycmFmb3JtKSh0aGlzLl9lYzJUYWdGaWx0ZXIpLFxuICAgICAgZWMyX3RhZ19zZXQ6IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ1NldFRvVGVycmFmb3JtKSh0aGlzLl9lYzJUYWdTZXQpLFxuICAgICAgZWNzX3NlcnZpY2U6IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjc1NlcnZpY2VUb1RlcnJhZm9ybSkodGhpcy5fZWNzU2VydmljZSksXG4gICAgICBsb2FkX2JhbGFuY2VyX2luZm86IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9Ub1RlcnJhZm9ybSkodGhpcy5fbG9hZEJhbGFuY2VySW5mbyksXG4gICAgICBvbl9wcmVtaXNlc19pbnN0YW5jZV90YWdfZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBPblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXJUb1RlcnJhZm9ybSkodGhpcy5fb25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyKSxcbiAgICAgIHRyaWdnZXJfY29uZmlndXJhdGlvbjogY2RrdGYubGlzdE1hcHBlcihjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwVHJpZ2dlckNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSkodGhpcy5fdHJpZ2dlckNvbmZpZ3VyYXRpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==