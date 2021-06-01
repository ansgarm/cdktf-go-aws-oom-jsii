import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}.
     */
    readonly excessCapacityTerminationPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}.
     */
    readonly replaceUnhealthyInstances?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags Ec2Fleet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags_all Ec2Fleet#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances Ec2Fleet#terminate_instances}.
     */
    readonly terminateInstances?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}.
     */
    readonly terminateInstancesWithExpiration?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#type Ec2Fleet#type}.
     */
    readonly type?: string;
    /**
     * launch_template_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_config Ec2Fleet#launch_template_config}
     */
    readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig[];
    /**
     * on_demand_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_options Ec2Fleet#on_demand_options}
     */
    readonly onDemandOptions?: Ec2FleetOnDemandOptions[];
    /**
     * spot_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_options Ec2Fleet#spot_options}
     */
    readonly spotOptions?: Ec2FleetSpotOptions[];
    /**
     * target_capacity_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#target_capacity_specification Ec2Fleet#target_capacity_specification}
     */
    readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#timeouts Ec2Fleet#timeouts}
     */
    readonly timeouts?: Ec2FleetTimeouts;
}
export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_id Ec2Fleet#launch_template_id}.
     */
    readonly launchTemplateId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_name Ec2Fleet#launch_template_name}.
     */
    readonly launchTemplateName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#version Ec2Fleet#version}.
     */
    readonly version: string;
}
export interface Ec2FleetLaunchTemplateConfigOverride {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#availability_zone Ec2Fleet#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_type Ec2Fleet#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#max_price Ec2Fleet#max_price}.
     */
    readonly maxPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#priority Ec2Fleet#priority}.
     */
    readonly priority?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#subnet_id Ec2Fleet#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#weighted_capacity Ec2Fleet#weighted_capacity}.
     */
    readonly weightedCapacity?: number;
}
export interface Ec2FleetLaunchTemplateConfig {
    /**
     * launch_template_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_specification Ec2Fleet#launch_template_specification}
     */
    readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification[];
    /**
     * override block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#override Ec2Fleet#override}
     */
    readonly override?: Ec2FleetLaunchTemplateConfigOverride[];
}
export interface Ec2FleetOnDemandOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}.
     */
    readonly allocationStrategy?: string;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replacement_strategy Ec2Fleet#replacement_strategy}.
     */
    readonly replacementStrategy?: string;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategies {
    /**
     * capacity_rebalance block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#capacity_rebalance Ec2Fleet#capacity_rebalance}
     */
    readonly capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance[];
}
export interface Ec2FleetSpotOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}.
     */
    readonly allocationStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}.
     */
    readonly instanceInterruptionBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}.
     */
    readonly instancePoolsToUseCount?: number;
    /**
     * maintenance_strategies block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#maintenance_strategies Ec2Fleet#maintenance_strategies}
     */
    readonly maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies[];
}
export interface Ec2FleetTargetCapacitySpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#default_target_capacity_type Ec2Fleet#default_target_capacity_type}.
     */
    readonly defaultTargetCapacityType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}.
     */
    readonly onDemandTargetCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_target_capacity Ec2Fleet#spot_target_capacity}.
     */
    readonly spotTargetCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#total_target_capacity Ec2Fleet#total_target_capacity}.
     */
    readonly totalTargetCapacity: number;
}
export interface Ec2FleetTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#create Ec2Fleet#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#delete Ec2Fleet#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#update Ec2Fleet#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet}.
 */
export declare class Ec2Fleet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2FleetConfig);
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string | undefined;
    get id(): string;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean;
    set replaceUnhealthyInstances(value: boolean);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | undefined;
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
    private _terminateInstances?;
    get terminateInstances(): boolean;
    set terminateInstances(value: boolean);
    resetTerminateInstances(): void;
    get terminateInstancesInput(): boolean | undefined;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean;
    set terminateInstancesWithExpiration(value: boolean);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _launchTemplateConfig;
    get launchTemplateConfig(): Ec2FleetLaunchTemplateConfig[];
    set launchTemplateConfig(value: Ec2FleetLaunchTemplateConfig[]);
    get launchTemplateConfigInput(): Ec2FleetLaunchTemplateConfig[];
    private _onDemandOptions?;
    get onDemandOptions(): Ec2FleetOnDemandOptions[];
    set onDemandOptions(value: Ec2FleetOnDemandOptions[]);
    resetOnDemandOptions(): void;
    get onDemandOptionsInput(): Ec2FleetOnDemandOptions[] | undefined;
    private _spotOptions?;
    get spotOptions(): Ec2FleetSpotOptions[];
    set spotOptions(value: Ec2FleetSpotOptions[]);
    resetSpotOptions(): void;
    get spotOptionsInput(): Ec2FleetSpotOptions[] | undefined;
    private _targetCapacitySpecification;
    get targetCapacitySpecification(): Ec2FleetTargetCapacitySpecification[];
    set targetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification[]);
    get targetCapacitySpecificationInput(): Ec2FleetTargetCapacitySpecification[];
    private _timeouts?;
    get timeouts(): Ec2FleetTimeouts;
    set timeouts(value: Ec2FleetTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): Ec2FleetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
