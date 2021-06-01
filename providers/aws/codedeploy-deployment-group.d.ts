import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodedeployDeploymentGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#app_name CodedeployDeploymentGroup#app_name}.
     */
    readonly appName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}.
     */
    readonly autoscalingGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}.
     */
    readonly deploymentConfigName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}.
     */
    readonly deploymentGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#service_role_arn CodedeployDeploymentGroup#service_role_arn}.
     */
    readonly serviceRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#tags CodedeployDeploymentGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#tags_all CodedeployDeploymentGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * alarm_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}
     */
    readonly alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration[];
    /**
     * auto_rollback_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}
     */
    readonly autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration[];
    /**
     * blue_green_deployment_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}
     */
    readonly blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig[];
    /**
     * deployment_style block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_style CodedeployDeploymentGroup#deployment_style}
     */
    readonly deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle[];
    /**
     * ec2_tag_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
     */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[];
    /**
     * ec2_tag_set block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}
     */
    readonly ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[];
    /**
     * ecs_service block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ecs_service CodedeployDeploymentGroup#ecs_service}
     */
    readonly ecsService?: CodedeployDeploymentGroupEcsService[];
    /**
     * load_balancer_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}
     */
    readonly loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo[];
    /**
     * on_premises_instance_tag_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}
     */
    readonly onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
    /**
     * trigger_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}
     */
    readonly triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[];
}
export interface CodedeployDeploymentGroupAlarmConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#alarms CodedeployDeploymentGroup#alarms}.
     */
    readonly alarms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#enabled CodedeployDeploymentGroup#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}.
     */
    readonly ignorePollAlarmFailure?: boolean;
}
export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#enabled CodedeployDeploymentGroup#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#events CodedeployDeploymentGroup#events}.
     */
    readonly events?: string[];
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}.
     */
    readonly actionOnTimeout?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}.
     */
    readonly waitTimeInMinutes?: number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action CodedeployDeploymentGroup#action}.
     */
    readonly action?: string;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action CodedeployDeploymentGroup#action}.
     */
    readonly action?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}.
     */
    readonly terminationWaitTimeInMinutes?: number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
    /**
     * deployment_ready_option block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}
     */
    readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption[];
    /**
     * green_fleet_provisioning_option block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}
     */
    readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption[];
    /**
     * terminate_blue_instances_on_deployment_success block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}
     */
    readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess[];
}
export interface CodedeployDeploymentGroupDeploymentStyle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_option CodedeployDeploymentGroup#deployment_option}.
     */
    readonly deploymentOption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_type CodedeployDeploymentGroup#deployment_type}.
     */
    readonly deploymentType?: string;
}
export interface CodedeployDeploymentGroupEc2TagFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}.
     */
    readonly type?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}.
     */
    readonly value?: string;
}
export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}.
     */
    readonly type?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}.
     */
    readonly value?: string;
}
export interface CodedeployDeploymentGroupEc2TagSet {
    /**
     * ec2_tag_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
     */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
}
export interface CodedeployDeploymentGroupEcsService {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#cluster_name CodedeployDeploymentGroup#cluster_name}.
     */
    readonly clusterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#service_name CodedeployDeploymentGroup#service_name}.
     */
    readonly serviceName: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}.
     */
    readonly name?: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}.
     */
    readonly name?: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#listener_arns CodedeployDeploymentGroup#listener_arns}.
     */
    readonly listenerArns: string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}.
     */
    readonly name: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#listener_arns CodedeployDeploymentGroup#listener_arns}.
     */
    readonly listenerArns: string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
    /**
     * prod_traffic_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}
     */
    readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute[];
    /**
     * target_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group CodedeployDeploymentGroup#target_group}
     */
    readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
    /**
     * test_traffic_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}
     */
    readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfo {
    /**
     * elb_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#elb_info CodedeployDeploymentGroup#elb_info}
     */
    readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
    /**
     * target_group_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group_info CodedeployDeploymentGroup#target_group_info}
     */
    readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
    /**
     * target_group_pair_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}
     */
    readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo[];
}
export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}.
     */
    readonly type?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}.
     */
    readonly value?: string;
}
export interface CodedeployDeploymentGroupTriggerConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_events CodedeployDeploymentGroup#trigger_events}.
     */
    readonly triggerEvents: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_name CodedeployDeploymentGroup#trigger_name}.
     */
    readonly triggerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}.
     */
    readonly triggerTargetArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group}.
 */
export declare class CodedeployDeploymentGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig);
    private _appName;
    get appName(): string;
    set appName(value: string);
    get appNameInput(): string;
    get arn(): string;
    private _autoscalingGroups?;
    get autoscalingGroups(): string[];
    set autoscalingGroups(value: string[]);
    resetAutoscalingGroups(): void;
    get autoscalingGroupsInput(): string[] | undefined;
    get computePlatform(): string;
    private _deploymentConfigName?;
    get deploymentConfigName(): string;
    set deploymentConfigName(value: string);
    resetDeploymentConfigName(): void;
    get deploymentConfigNameInput(): string | undefined;
    get deploymentGroupId(): string;
    private _deploymentGroupName;
    get deploymentGroupName(): string;
    set deploymentGroupName(value: string);
    get deploymentGroupNameInput(): string;
    get id(): string;
    private _serviceRoleArn;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    get serviceRoleArnInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _alarmConfiguration?;
    get alarmConfiguration(): CodedeployDeploymentGroupAlarmConfiguration[];
    set alarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration[]);
    resetAlarmConfiguration(): void;
    get alarmConfigurationInput(): CodedeployDeploymentGroupAlarmConfiguration[] | undefined;
    private _autoRollbackConfiguration?;
    get autoRollbackConfiguration(): CodedeployDeploymentGroupAutoRollbackConfiguration[];
    set autoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration[]);
    resetAutoRollbackConfiguration(): void;
    get autoRollbackConfigurationInput(): CodedeployDeploymentGroupAutoRollbackConfiguration[] | undefined;
    private _blueGreenDeploymentConfig?;
    get blueGreenDeploymentConfig(): CodedeployDeploymentGroupBlueGreenDeploymentConfig[];
    set blueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig[]);
    resetBlueGreenDeploymentConfig(): void;
    get blueGreenDeploymentConfigInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfig[] | undefined;
    private _deploymentStyle?;
    get deploymentStyle(): CodedeployDeploymentGroupDeploymentStyle[];
    set deploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle[]);
    resetDeploymentStyle(): void;
    get deploymentStyleInput(): CodedeployDeploymentGroupDeploymentStyle[] | undefined;
    private _ec2TagFilter?;
    get ec2TagFilter(): CodedeployDeploymentGroupEc2TagFilter[];
    set ec2TagFilter(value: CodedeployDeploymentGroupEc2TagFilter[]);
    resetEc2TagFilter(): void;
    get ec2TagFilterInput(): CodedeployDeploymentGroupEc2TagFilter[] | undefined;
    private _ec2TagSet?;
    get ec2TagSet(): CodedeployDeploymentGroupEc2TagSet[];
    set ec2TagSet(value: CodedeployDeploymentGroupEc2TagSet[]);
    resetEc2TagSet(): void;
    get ec2TagSetInput(): CodedeployDeploymentGroupEc2TagSet[] | undefined;
    private _ecsService?;
    get ecsService(): CodedeployDeploymentGroupEcsService[];
    set ecsService(value: CodedeployDeploymentGroupEcsService[]);
    resetEcsService(): void;
    get ecsServiceInput(): CodedeployDeploymentGroupEcsService[] | undefined;
    private _loadBalancerInfo?;
    get loadBalancerInfo(): CodedeployDeploymentGroupLoadBalancerInfo[];
    set loadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo[]);
    resetLoadBalancerInfo(): void;
    get loadBalancerInfoInput(): CodedeployDeploymentGroupLoadBalancerInfo[] | undefined;
    private _onPremisesInstanceTagFilter?;
    get onPremisesInstanceTagFilter(): CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
    set onPremisesInstanceTagFilter(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[]);
    resetOnPremisesInstanceTagFilter(): void;
    get onPremisesInstanceTagFilterInput(): CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | undefined;
    private _triggerConfiguration?;
    get triggerConfiguration(): CodedeployDeploymentGroupTriggerConfiguration[];
    set triggerConfiguration(value: CodedeployDeploymentGroupTriggerConfiguration[]);
    resetTriggerConfiguration(): void;
    get triggerConfigurationInput(): CodedeployDeploymentGroupTriggerConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
