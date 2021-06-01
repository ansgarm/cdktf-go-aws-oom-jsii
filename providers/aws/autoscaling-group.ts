// https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#availability_zones AutoscalingGroup#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#capacity_rebalance AutoscalingGroup#capacity_rebalance}
  */
  readonly capacityRebalance?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_cooldown AutoscalingGroup#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#desired_capacity AutoscalingGroup#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#enabled_metrics AutoscalingGroup#enabled_metrics}
  */
  readonly enabledMetrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete AutoscalingGroup#force_delete}
  */
  readonly forceDelete?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}
  */
  readonly forceDeleteWarmPool?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_grace_period AutoscalingGroup#health_check_grace_period}
  */
  readonly healthCheckGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_type AutoscalingGroup#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_configuration AutoscalingGroup#launch_configuration}
  */
  readonly launchConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#load_balancers AutoscalingGroup#load_balancers}
  */
  readonly loadBalancers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}
  */
  readonly maxInstanceLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_size AutoscalingGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#metrics_granularity AutoscalingGroup#metrics_granularity}
  */
  readonly metricsGranularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_elb_capacity AutoscalingGroup#min_elb_capacity}
  */
  readonly minElbCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name_prefix AutoscalingGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#placement_group AutoscalingGroup#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}
  */
  readonly protectFromScaleIn?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}
  */
  readonly serviceLinkedRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#suspended_processes AutoscalingGroup#suspended_processes}
  */
  readonly suspendedProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tags AutoscalingGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#target_group_arns AutoscalingGroup#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#termination_policies AutoscalingGroup#termination_policies}
  */
  readonly terminationPolicies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}
  */
  readonly vpcZoneIdentifier?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}
  */
  readonly waitForCapacityTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}
  */
  readonly waitForElbCapacity?: number;
  /**
  * initial_lifecycle_hook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}
  */
  readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
  /**
  * instance_refresh block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_refresh AutoscalingGroup#instance_refresh}
  */
  readonly instanceRefresh?: AutoscalingGroupInstanceRefresh[];
  /**
  * launch_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
  */
  readonly launchTemplate?: AutoscalingGroupLaunchTemplate[];
  /**
  * mixed_instances_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}
  */
  readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tag AutoscalingGroup#tag}
  */
  readonly tag?: AutoscalingGroupTag[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#timeouts AutoscalingGroup#timeouts}
  */
  readonly timeouts?: AutoscalingGroupTimeouts;
  /**
  * warm_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#warm_pool AutoscalingGroup#warm_pool}
  */
  readonly warmPool?: AutoscalingGroupWarmPool[];
}
export interface AutoscalingGroupInitialLifecycleHook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_result AutoscalingGroup#default_result}
  */
  readonly defaultResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}
  */
  readonly heartbeatTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#lifecycle_transition AutoscalingGroup#lifecycle_transition}
  */
  readonly lifecycleTransition: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_metadata AutoscalingGroup#notification_metadata}
  */
  readonly notificationMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_target_arn AutoscalingGroup#notification_target_arn}
  */
  readonly notificationTargetArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#role_arn AutoscalingGroup#role_arn}
  */
  readonly roleArn?: string;
}

function autoscalingGroupInitialLifecycleHookToTerraform(struct?: AutoscalingGroupInitialLifecycleHook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_result: cdktf.stringToTerraform(struct!.defaultResult),
    heartbeat_timeout: cdktf.numberToTerraform(struct!.heartbeatTimeout),
    lifecycle_transition: cdktf.stringToTerraform(struct!.lifecycleTransition),
    name: cdktf.stringToTerraform(struct!.name),
    notification_metadata: cdktf.stringToTerraform(struct!.notificationMetadata),
    notification_target_arn: cdktf.stringToTerraform(struct!.notificationTargetArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface AutoscalingGroupInstanceRefreshPreferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_warmup AutoscalingGroup#instance_warmup}
  */
  readonly instanceWarmup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}
  */
  readonly minHealthyPercentage?: number;
}

function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct?: AutoscalingGroupInstanceRefreshPreferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_warmup: cdktf.stringToTerraform(struct!.instanceWarmup),
    min_healthy_percentage: cdktf.numberToTerraform(struct!.minHealthyPercentage),
  }
}

export interface AutoscalingGroupInstanceRefresh {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#strategy AutoscalingGroup#strategy}
  */
  readonly strategy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#triggers AutoscalingGroup#triggers}
  */
  readonly triggers?: string[];
  /**
  * preferences block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#preferences AutoscalingGroup#preferences}
  */
  readonly preferences?: AutoscalingGroupInstanceRefreshPreferences[];
}

function autoscalingGroupInstanceRefreshToTerraform(struct?: AutoscalingGroupInstanceRefresh): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.triggers),
    preferences: cdktf.listMapper(autoscalingGroupInstanceRefreshPreferencesToTerraform)(struct!.preferences),
  }
}

export interface AutoscalingGroupLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#id AutoscalingGroup#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
  */
  readonly version?: string;
}

function autoscalingGroupLaunchTemplateToTerraform(struct?: AutoscalingGroupLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}
  */
  readonly onDemandAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}
  */
  readonly onDemandBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}
  */
  readonly onDemandPercentageAboveBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}
  */
  readonly spotAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_instance_pools AutoscalingGroup#spot_instance_pools}
  */
  readonly spotInstancePools?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_max_price AutoscalingGroup#spot_max_price}
  */
  readonly spotMaxPrice?: string;
}

function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_demand_allocation_strategy: cdktf.stringToTerraform(struct!.onDemandAllocationStrategy),
    on_demand_base_capacity: cdktf.numberToTerraform(struct!.onDemandBaseCapacity),
    on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct!.onDemandPercentageAboveBaseCapacity),
    spot_allocation_strategy: cdktf.stringToTerraform(struct!.spotAllocationStrategy),
    spot_instance_pools: cdktf.numberToTerraform(struct!.spotInstancePools),
    spot_max_price: cdktf.stringToTerraform(struct!.spotMaxPrice),
  }
}

export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
  */
  readonly version?: string;
}

function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
  */
  readonly version?: string;
}

function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_type AutoscalingGroup#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#weighted_capacity AutoscalingGroup#weighted_capacity}
  */
  readonly weightedCapacity?: string;
  /**
  * launch_template_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
  */
  readonly launchTemplateSpecification?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification[];
}

function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.stringToTerraform(struct!.weightedCapacity),
    launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform)(struct!.launchTemplateSpecification),
  }
}

export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
  /**
  * launch_template_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
  */
  readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification[];
  /**
  * override block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#override AutoscalingGroup#override}
  */
  readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
}

function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform)(struct!.launchTemplateSpecification),
    override: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform)(struct!.override),
  }
}

export interface AutoscalingGroupMixedInstancesPolicy {
  /**
  * instances_distribution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instances_distribution AutoscalingGroup#instances_distribution}
  */
  readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution[];
  /**
  * launch_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
  */
  readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate[];
}

function autoscalingGroupMixedInstancesPolicyToTerraform(struct?: AutoscalingGroupMixedInstancesPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instances_distribution: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform)(struct!.instancesDistribution),
    launch_template: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform)(struct!.launchTemplate),
  }
}

export interface AutoscalingGroupTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#key AutoscalingGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#propagate_at_launch AutoscalingGroup#propagate_at_launch}
  */
  readonly propagateAtLaunch: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#value AutoscalingGroup#value}
  */
  readonly value: string;
}

function autoscalingGroupTagToTerraform(struct?: AutoscalingGroupTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    propagate_at_launch: cdktf.booleanToTerraform(struct!.propagateAtLaunch),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AutoscalingGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#delete AutoscalingGroup#delete}
  */
  readonly delete?: string;
}

function autoscalingGroupTimeoutsToTerraform(struct?: AutoscalingGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export interface AutoscalingGroupWarmPool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}
  */
  readonly maxGroupPreparedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#pool_state AutoscalingGroup#pool_state}
  */
  readonly poolState?: string;
}

function autoscalingGroupWarmPoolToTerraform(struct?: AutoscalingGroupWarmPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_group_prepared_capacity: cdktf.numberToTerraform(struct!.maxGroupPreparedCapacity),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    pool_state: cdktf.stringToTerraform(struct!.poolState),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group}
*/
export class AutoscalingGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingGroupConfig) {
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
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // capacity_rebalance - computed: false, optional: true, required: false
  private _capacityRebalance?: boolean;
  public get capacityRebalance() {
    return this.getBooleanAttribute('capacity_rebalance');
  }
  public set capacityRebalance(value: boolean ) {
    this._capacityRebalance = value;
  }
  public resetCapacityRebalance() {
    this._capacityRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityRebalanceInput() {
    return this._capacityRebalance
  }

  // default_cooldown - computed: true, optional: true, required: false
  private _defaultCooldown?: number;
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number;
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity
  }

  // enabled_metrics - computed: false, optional: true, required: false
  private _enabledMetrics?: string[];
  public get enabledMetrics() {
    return this.getListAttribute('enabled_metrics');
  }
  public set enabledMetrics(value: string[] ) {
    this._enabledMetrics = value;
  }
  public resetEnabledMetrics() {
    this._enabledMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledMetricsInput() {
    return this._enabledMetrics
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean ) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete
  }

  // force_delete_warm_pool - computed: false, optional: true, required: false
  private _forceDeleteWarmPool?: boolean;
  public get forceDeleteWarmPool() {
    return this.getBooleanAttribute('force_delete_warm_pool');
  }
  public set forceDeleteWarmPool(value: boolean ) {
    this._forceDeleteWarmPool = value;
  }
  public resetForceDeleteWarmPool() {
    this._forceDeleteWarmPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteWarmPoolInput() {
    return this._forceDeleteWarmPool
  }

  // health_check_grace_period - computed: false, optional: true, required: false
  private _healthCheckGracePeriod?: number;
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }
  public set healthCheckGracePeriod(value: number ) {
    this._healthCheckGracePeriod = value;
  }
  public resetHealthCheckGracePeriod() {
    this._healthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodInput() {
    return this._healthCheckGracePeriod
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string;
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_configuration - computed: false, optional: true, required: false
  private _launchConfiguration?: string;
  public get launchConfiguration() {
    return this.getStringAttribute('launch_configuration');
  }
  public set launchConfiguration(value: string ) {
    this._launchConfiguration = value;
  }
  public resetLaunchConfiguration() {
    this._launchConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchConfigurationInput() {
    return this._launchConfiguration
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers?: string[];
  public get loadBalancers() {
    return this.getListAttribute('load_balancers');
  }
  public set loadBalancers(value: string[] ) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers
  }

  // max_instance_lifetime - computed: false, optional: true, required: false
  private _maxInstanceLifetime?: number;
  public get maxInstanceLifetime() {
    return this.getNumberAttribute('max_instance_lifetime');
  }
  public set maxInstanceLifetime(value: number ) {
    this._maxInstanceLifetime = value;
  }
  public resetMaxInstanceLifetime() {
    this._maxInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceLifetimeInput() {
    return this._maxInstanceLifetime
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize: number;
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize
  }

  // metrics_granularity - computed: false, optional: true, required: false
  private _metricsGranularity?: string;
  public get metricsGranularity() {
    return this.getStringAttribute('metrics_granularity');
  }
  public set metricsGranularity(value: string ) {
    this._metricsGranularity = value;
  }
  public resetMetricsGranularity() {
    this._metricsGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsGranularityInput() {
    return this._metricsGranularity
  }

  // min_elb_capacity - computed: false, optional: true, required: false
  private _minElbCapacity?: number;
  public get minElbCapacity() {
    return this.getNumberAttribute('min_elb_capacity');
  }
  public set minElbCapacity(value: number ) {
    this._minElbCapacity = value;
  }
  public resetMinElbCapacity() {
    this._minElbCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minElbCapacityInput() {
    return this._minElbCapacity
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize: number;
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // placement_group - computed: false, optional: true, required: false
  private _placementGroup?: string;
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string ) {
    this._placementGroup = value;
  }
  public resetPlacementGroup() {
    this._placementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup
  }

  // protect_from_scale_in - computed: false, optional: true, required: false
  private _protectFromScaleIn?: boolean;
  public get protectFromScaleIn() {
    return this.getBooleanAttribute('protect_from_scale_in');
  }
  public set protectFromScaleIn(value: boolean ) {
    this._protectFromScaleIn = value;
  }
  public resetProtectFromScaleIn() {
    this._protectFromScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectFromScaleInInput() {
    return this._protectFromScaleIn
  }

  // service_linked_role_arn - computed: true, optional: true, required: false
  private _serviceLinkedRoleArn?: string;
  public get serviceLinkedRoleArn() {
    return this.getStringAttribute('service_linked_role_arn');
  }
  public set serviceLinkedRoleArn(value: string) {
    this._serviceLinkedRoleArn = value;
  }
  public resetServiceLinkedRoleArn() {
    this._serviceLinkedRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLinkedRoleArnInput() {
    return this._serviceLinkedRoleArn
  }

  // suspended_processes - computed: false, optional: true, required: false
  private _suspendedProcesses?: string[];
  public get suspendedProcesses() {
    return this.getListAttribute('suspended_processes');
  }
  public set suspendedProcesses(value: string[] ) {
    this._suspendedProcesses = value;
  }
  public resetSuspendedProcesses() {
    this._suspendedProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedProcessesInput() {
    return this._suspendedProcesses
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_group_arns - computed: false, optional: true, required: false
  private _targetGroupArns?: string[];
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }
  public set targetGroupArns(value: string[] ) {
    this._targetGroupArns = value;
  }
  public resetTargetGroupArns() {
    this._targetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnsInput() {
    return this._targetGroupArns
  }

  // termination_policies - computed: false, optional: true, required: false
  private _terminationPolicies?: string[];
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }
  public set terminationPolicies(value: string[] ) {
    this._terminationPolicies = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies
  }

  // vpc_zone_identifier - computed: true, optional: true, required: false
  private _vpcZoneIdentifier?: string[];
  public get vpcZoneIdentifier() {
    return this.getListAttribute('vpc_zone_identifier');
  }
  public set vpcZoneIdentifier(value: string[]) {
    this._vpcZoneIdentifier = value;
  }
  public resetVpcZoneIdentifier() {
    this._vpcZoneIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcZoneIdentifierInput() {
    return this._vpcZoneIdentifier
  }

  // wait_for_capacity_timeout - computed: false, optional: true, required: false
  private _waitForCapacityTimeout?: string;
  public get waitForCapacityTimeout() {
    return this.getStringAttribute('wait_for_capacity_timeout');
  }
  public set waitForCapacityTimeout(value: string ) {
    this._waitForCapacityTimeout = value;
  }
  public resetWaitForCapacityTimeout() {
    this._waitForCapacityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityTimeoutInput() {
    return this._waitForCapacityTimeout
  }

  // wait_for_elb_capacity - computed: false, optional: true, required: false
  private _waitForElbCapacity?: number;
  public get waitForElbCapacity() {
    return this.getNumberAttribute('wait_for_elb_capacity');
  }
  public set waitForElbCapacity(value: number ) {
    this._waitForElbCapacity = value;
  }
  public resetWaitForElbCapacity() {
    this._waitForElbCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForElbCapacityInput() {
    return this._waitForElbCapacity
  }

  // initial_lifecycle_hook - computed: false, optional: true, required: false
  private _initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
  public get initialLifecycleHook() {
    return this.interpolationForAttribute('initial_lifecycle_hook') as any;
  }
  public set initialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[] ) {
    this._initialLifecycleHook = value;
  }
  public resetInitialLifecycleHook() {
    this._initialLifecycleHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLifecycleHookInput() {
    return this._initialLifecycleHook
  }

  // instance_refresh - computed: false, optional: true, required: false
  private _instanceRefresh?: AutoscalingGroupInstanceRefresh[];
  public get instanceRefresh() {
    return this.interpolationForAttribute('instance_refresh') as any;
  }
  public set instanceRefresh(value: AutoscalingGroupInstanceRefresh[] ) {
    this._instanceRefresh = value;
  }
  public resetInstanceRefresh() {
    this._instanceRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRefreshInput() {
    return this._instanceRefresh
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate?: AutoscalingGroupLaunchTemplate[];
  public get launchTemplate() {
    return this.interpolationForAttribute('launch_template') as any;
  }
  public set launchTemplate(value: AutoscalingGroupLaunchTemplate[] ) {
    this._launchTemplate = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate
  }

  // mixed_instances_policy - computed: false, optional: true, required: false
  private _mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
  public get mixedInstancesPolicy() {
    return this.interpolationForAttribute('mixed_instances_policy') as any;
  }
  public set mixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy[] ) {
    this._mixedInstancesPolicy = value;
  }
  public resetMixedInstancesPolicy() {
    this._mixedInstancesPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedInstancesPolicyInput() {
    return this._mixedInstancesPolicy
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: AutoscalingGroupTag[];
  public get tag() {
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: AutoscalingGroupTag[] ) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutoscalingGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutoscalingGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // warm_pool - computed: false, optional: true, required: false
  private _warmPool?: AutoscalingGroupWarmPool[];
  public get warmPool() {
    return this.interpolationForAttribute('warm_pool') as any;
  }
  public set warmPool(value: AutoscalingGroupWarmPool[] ) {
    this._warmPool = value;
  }
  public resetWarmPool() {
    this._warmPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmPoolInput() {
    return this._warmPool
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
