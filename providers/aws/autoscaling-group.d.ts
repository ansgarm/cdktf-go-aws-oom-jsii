import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#availability_zones AutoscalingGroup#availability_zones}.
     */
    readonly availabilityZones?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#capacity_rebalance AutoscalingGroup#capacity_rebalance}.
     */
    readonly capacityRebalance?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_cooldown AutoscalingGroup#default_cooldown}.
     */
    readonly defaultCooldown?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#desired_capacity AutoscalingGroup#desired_capacity}.
     */
    readonly desiredCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#enabled_metrics AutoscalingGroup#enabled_metrics}.
     */
    readonly enabledMetrics?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete AutoscalingGroup#force_delete}.
     */
    readonly forceDelete?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}.
     */
    readonly forceDeleteWarmPool?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_grace_period AutoscalingGroup#health_check_grace_period}.
     */
    readonly healthCheckGracePeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_type AutoscalingGroup#health_check_type}.
     */
    readonly healthCheckType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_configuration AutoscalingGroup#launch_configuration}.
     */
    readonly launchConfiguration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#load_balancers AutoscalingGroup#load_balancers}.
     */
    readonly loadBalancers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}.
     */
    readonly maxInstanceLifetime?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_size AutoscalingGroup#max_size}.
     */
    readonly maxSize: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#metrics_granularity AutoscalingGroup#metrics_granularity}.
     */
    readonly metricsGranularity?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_elb_capacity AutoscalingGroup#min_elb_capacity}.
     */
    readonly minElbCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}.
     */
    readonly minSize: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name_prefix AutoscalingGroup#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#placement_group AutoscalingGroup#placement_group}.
     */
    readonly placementGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}.
     */
    readonly protectFromScaleIn?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}.
     */
    readonly serviceLinkedRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#suspended_processes AutoscalingGroup#suspended_processes}.
     */
    readonly suspendedProcesses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tags AutoscalingGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#target_group_arns AutoscalingGroup#target_group_arns}.
     */
    readonly targetGroupArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#termination_policies AutoscalingGroup#termination_policies}.
     */
    readonly terminationPolicies?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}.
     */
    readonly vpcZoneIdentifier?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}.
     */
    readonly waitForCapacityTimeout?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}.
     */
    readonly waitForElbCapacity?: number;
    /**
     * initial_lifecycle_hook block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}
     */
    readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
    /**
     * instance_refresh block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_refresh AutoscalingGroup#instance_refresh}
     */
    readonly instanceRefresh?: AutoscalingGroupInstanceRefresh[];
    /**
     * launch_template block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
     */
    readonly launchTemplate?: AutoscalingGroupLaunchTemplate[];
    /**
     * mixed_instances_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}
     */
    readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
    /**
     * tag block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tag AutoscalingGroup#tag}
     */
    readonly tag?: AutoscalingGroupTag[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#timeouts AutoscalingGroup#timeouts}
     */
    readonly timeouts?: AutoscalingGroupTimeouts;
    /**
     * warm_pool block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#warm_pool AutoscalingGroup#warm_pool}
     */
    readonly warmPool?: AutoscalingGroupWarmPool[];
}
export interface AutoscalingGroupInitialLifecycleHook {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_result AutoscalingGroup#default_result}.
     */
    readonly defaultResult?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}.
     */
    readonly heartbeatTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#lifecycle_transition AutoscalingGroup#lifecycle_transition}.
     */
    readonly lifecycleTransition: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_metadata AutoscalingGroup#notification_metadata}.
     */
    readonly notificationMetadata?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_target_arn AutoscalingGroup#notification_target_arn}.
     */
    readonly notificationTargetArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#role_arn AutoscalingGroup#role_arn}.
     */
    readonly roleArn?: string;
}
export interface AutoscalingGroupInstanceRefreshPreferences {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_warmup AutoscalingGroup#instance_warmup}.
     */
    readonly instanceWarmup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}.
     */
    readonly minHealthyPercentage?: number;
}
export interface AutoscalingGroupInstanceRefresh {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#strategy AutoscalingGroup#strategy}.
     */
    readonly strategy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#triggers AutoscalingGroup#triggers}.
     */
    readonly triggers?: string[];
    /**
     * preferences block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#preferences AutoscalingGroup#preferences}
     */
    readonly preferences?: AutoscalingGroupInstanceRefreshPreferences[];
}
export interface AutoscalingGroupLaunchTemplate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#id AutoscalingGroup#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}.
     */
    readonly version?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}.
     */
    readonly onDemandAllocationStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}.
     */
    readonly onDemandBaseCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}.
     */
    readonly onDemandPercentageAboveBaseCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}.
     */
    readonly spotAllocationStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_instance_pools AutoscalingGroup#spot_instance_pools}.
     */
    readonly spotInstancePools?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_max_price AutoscalingGroup#spot_max_price}.
     */
    readonly spotMaxPrice?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}.
     */
    readonly launchTemplateId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}.
     */
    readonly launchTemplateName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}.
     */
    readonly version?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}.
     */
    readonly launchTemplateId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}.
     */
    readonly launchTemplateName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}.
     */
    readonly version?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_type AutoscalingGroup#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#weighted_capacity AutoscalingGroup#weighted_capacity}.
     */
    readonly weightedCapacity?: string;
    /**
     * launch_template_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
     */
    readonly launchTemplateSpecification?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification[];
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
    /**
     * launch_template_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
     */
    readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification[];
    /**
     * override block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#override AutoscalingGroup#override}
     */
    readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
}
export interface AutoscalingGroupMixedInstancesPolicy {
    /**
     * instances_distribution block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instances_distribution AutoscalingGroup#instances_distribution}
     */
    readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution[];
    /**
     * launch_template block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
     */
    readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate[];
}
export interface AutoscalingGroupTag {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#key AutoscalingGroup#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#propagate_at_launch AutoscalingGroup#propagate_at_launch}.
     */
    readonly propagateAtLaunch: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#value AutoscalingGroup#value}.
     */
    readonly value: string;
}
export interface AutoscalingGroupTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#delete AutoscalingGroup#delete}.
     */
    readonly delete?: string;
}
export interface AutoscalingGroupWarmPool {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}.
     */
    readonly maxGroupPreparedCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}.
     */
    readonly minSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#pool_state AutoscalingGroup#pool_state}.
     */
    readonly poolState?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group}.
 */
export declare class AutoscalingGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AutoscalingGroupConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _capacityRebalance?;
    get capacityRebalance(): boolean;
    set capacityRebalance(value: boolean);
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): boolean | undefined;
    private _defaultCooldown?;
    get defaultCooldown(): number;
    set defaultCooldown(value: number);
    resetDefaultCooldown(): void;
    get defaultCooldownInput(): number | undefined;
    private _desiredCapacity?;
    get desiredCapacity(): number;
    set desiredCapacity(value: number);
    resetDesiredCapacity(): void;
    get desiredCapacityInput(): number | undefined;
    private _enabledMetrics?;
    get enabledMetrics(): string[];
    set enabledMetrics(value: string[]);
    resetEnabledMetrics(): void;
    get enabledMetricsInput(): string[] | undefined;
    private _forceDelete?;
    get forceDelete(): boolean;
    set forceDelete(value: boolean);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | undefined;
    private _forceDeleteWarmPool?;
    get forceDeleteWarmPool(): boolean;
    set forceDeleteWarmPool(value: boolean);
    resetForceDeleteWarmPool(): void;
    get forceDeleteWarmPoolInput(): boolean | undefined;
    private _healthCheckGracePeriod?;
    get healthCheckGracePeriod(): number;
    set healthCheckGracePeriod(value: number);
    resetHealthCheckGracePeriod(): void;
    get healthCheckGracePeriodInput(): number | undefined;
    private _healthCheckType?;
    get healthCheckType(): string;
    set healthCheckType(value: string);
    resetHealthCheckType(): void;
    get healthCheckTypeInput(): string | undefined;
    get id(): string;
    private _launchConfiguration?;
    get launchConfiguration(): string;
    set launchConfiguration(value: string);
    resetLaunchConfiguration(): void;
    get launchConfigurationInput(): string | undefined;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[] | undefined;
    private _maxInstanceLifetime?;
    get maxInstanceLifetime(): number;
    set maxInstanceLifetime(value: number);
    resetMaxInstanceLifetime(): void;
    get maxInstanceLifetimeInput(): number | undefined;
    private _maxSize;
    get maxSize(): number;
    set maxSize(value: number);
    get maxSizeInput(): number;
    private _metricsGranularity?;
    get metricsGranularity(): string;
    set metricsGranularity(value: string);
    resetMetricsGranularity(): void;
    get metricsGranularityInput(): string | undefined;
    private _minElbCapacity?;
    get minElbCapacity(): number;
    set minElbCapacity(value: number);
    resetMinElbCapacity(): void;
    get minElbCapacityInput(): number | undefined;
    private _minSize;
    get minSize(): number;
    set minSize(value: number);
    get minSizeInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    private _protectFromScaleIn?;
    get protectFromScaleIn(): boolean;
    set protectFromScaleIn(value: boolean);
    resetProtectFromScaleIn(): void;
    get protectFromScaleInInput(): boolean | undefined;
    private _serviceLinkedRoleArn?;
    get serviceLinkedRoleArn(): string;
    set serviceLinkedRoleArn(value: string);
    resetServiceLinkedRoleArn(): void;
    get serviceLinkedRoleArnInput(): string | undefined;
    private _suspendedProcesses?;
    get suspendedProcesses(): string[];
    set suspendedProcesses(value: string[]);
    resetSuspendedProcesses(): void;
    get suspendedProcessesInput(): string[] | undefined;
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
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[] | undefined;
    private _terminationPolicies?;
    get terminationPolicies(): string[];
    set terminationPolicies(value: string[]);
    resetTerminationPolicies(): void;
    get terminationPoliciesInput(): string[] | undefined;
    private _vpcZoneIdentifier?;
    get vpcZoneIdentifier(): string[];
    set vpcZoneIdentifier(value: string[]);
    resetVpcZoneIdentifier(): void;
    get vpcZoneIdentifierInput(): string[] | undefined;
    private _waitForCapacityTimeout?;
    get waitForCapacityTimeout(): string;
    set waitForCapacityTimeout(value: string);
    resetWaitForCapacityTimeout(): void;
    get waitForCapacityTimeoutInput(): string | undefined;
    private _waitForElbCapacity?;
    get waitForElbCapacity(): number;
    set waitForElbCapacity(value: number);
    resetWaitForElbCapacity(): void;
    get waitForElbCapacityInput(): number | undefined;
    private _initialLifecycleHook?;
    get initialLifecycleHook(): AutoscalingGroupInitialLifecycleHook[];
    set initialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[]);
    resetInitialLifecycleHook(): void;
    get initialLifecycleHookInput(): AutoscalingGroupInitialLifecycleHook[] | undefined;
    private _instanceRefresh?;
    get instanceRefresh(): AutoscalingGroupInstanceRefresh[];
    set instanceRefresh(value: AutoscalingGroupInstanceRefresh[]);
    resetInstanceRefresh(): void;
    get instanceRefreshInput(): AutoscalingGroupInstanceRefresh[] | undefined;
    private _launchTemplate?;
    get launchTemplate(): AutoscalingGroupLaunchTemplate[];
    set launchTemplate(value: AutoscalingGroupLaunchTemplate[]);
    resetLaunchTemplate(): void;
    get launchTemplateInput(): AutoscalingGroupLaunchTemplate[] | undefined;
    private _mixedInstancesPolicy?;
    get mixedInstancesPolicy(): AutoscalingGroupMixedInstancesPolicy[];
    set mixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy[]);
    resetMixedInstancesPolicy(): void;
    get mixedInstancesPolicyInput(): AutoscalingGroupMixedInstancesPolicy[] | undefined;
    private _tag?;
    get tag(): AutoscalingGroupTag[];
    set tag(value: AutoscalingGroupTag[]);
    resetTag(): void;
    get tagInput(): AutoscalingGroupTag[] | undefined;
    private _timeouts?;
    get timeouts(): AutoscalingGroupTimeouts;
    set timeouts(value: AutoscalingGroupTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AutoscalingGroupTimeouts | undefined;
    private _warmPool?;
    get warmPool(): AutoscalingGroupWarmPool[];
    set warmPool(value: AutoscalingGroupWarmPool[]);
    resetWarmPool(): void;
    get warmPoolInput(): AutoscalingGroupWarmPool[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
