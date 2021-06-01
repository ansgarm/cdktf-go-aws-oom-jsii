import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpotFleetRequestConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#allocation_strategy SpotFleetRequest#allocation_strategy}.
     */
    readonly allocationStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}.
     */
    readonly excessCapacityTerminationPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#fleet_type SpotFleetRequest#fleet_type}.
     */
    readonly fleetType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_fleet_role SpotFleetRequest#iam_fleet_role}.
     */
    readonly iamFleetRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}.
     */
    readonly instanceInterruptionBehaviour?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}.
     */
    readonly instancePoolsToUseCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#load_balancers SpotFleetRequest#load_balancers}.
     */
    readonly loadBalancers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}.
     */
    readonly replaceUnhealthyInstances?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}.
     */
    readonly spotPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags_all SpotFleetRequest#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_capacity SpotFleetRequest#target_capacity}.
     */
    readonly targetCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_group_arns SpotFleetRequest#target_group_arns}.
     */
    readonly targetGroupArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}.
     */
    readonly terminateInstancesWithExpiration?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_from SpotFleetRequest#valid_from}.
     */
    readonly validFrom?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_until SpotFleetRequest#valid_until}.
     */
    readonly validUntil?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}.
     */
    readonly waitForFulfillment?: boolean;
    /**
     * launch_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_specification SpotFleetRequest#launch_specification}
     */
    readonly launchSpecification?: SpotFleetRequestLaunchSpecification[];
    /**
     * launch_template_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_config SpotFleetRequest#launch_template_config}
     */
    readonly launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[];
    /**
     * spot_maintenance_strategies block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}
     */
    readonly spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#timeouts SpotFleetRequest#timeouts}
     */
    readonly timeouts?: SpotFleetRequestTimeouts;
}
export interface SpotFleetRequestLaunchSpecificationEbsBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#snapshot_id SpotFleetRequest#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}.
     */
    readonly volumeType?: string;
}
export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#virtual_name SpotFleetRequest#virtual_name}.
     */
    readonly virtualName: string;
}
export interface SpotFleetRequestLaunchSpecificationRootBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}.
     */
    readonly volumeType?: string;
}
export interface SpotFleetRequestLaunchSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ami SpotFleetRequest#ami}.
     */
    readonly ami: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}.
     */
    readonly associatePublicIpAddress?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_optimized SpotFleetRequest#ebs_optimized}.
     */
    readonly ebsOptimized?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile SpotFleetRequest#iam_instance_profile}.
     */
    readonly iamInstanceProfile?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}.
     */
    readonly iamInstanceProfileArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#key_name SpotFleetRequest#key_name}.
     */
    readonly keyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#monitoring SpotFleetRequest#monitoring}.
     */
    readonly monitoring?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_group SpotFleetRequest#placement_group}.
     */
    readonly placementGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_tenancy SpotFleetRequest#placement_tenancy}.
     */
    readonly placementTenancy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}.
     */
    readonly spotPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#user_data SpotFleetRequest#user_data}.
     */
    readonly userData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}.
     */
    readonly weightedCapacity?: string;
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_block_device SpotFleetRequest#ebs_block_device}
     */
    readonly ebsBlockDevice?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
    /**
     * root_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#root_block_device SpotFleetRequest#root_block_device}
     */
    readonly rootBlockDevice?: SpotFleetRequestLaunchSpecificationRootBlockDevice[];
}
export interface SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#id SpotFleetRequest#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#name SpotFleetRequest#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#version SpotFleetRequest#version}.
     */
    readonly version?: string;
}
export interface SpotFleetRequestLaunchTemplateConfigOverrides {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#priority SpotFleetRequest#priority}.
     */
    readonly priority?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}.
     */
    readonly spotPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}.
     */
    readonly weightedCapacity?: number;
}
export interface SpotFleetRequestLaunchTemplateConfig {
    /**
     * launch_template_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_specification SpotFleetRequest#launch_template_specification}
     */
    readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification[];
    /**
     * overrides block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#overrides SpotFleetRequest#overrides}
     */
    readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[];
}
export interface SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replacement_strategy SpotFleetRequest#replacement_strategy}.
     */
    readonly replacementStrategy?: string;
}
export interface SpotFleetRequestSpotMaintenanceStrategies {
    /**
     * capacity_rebalance block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#capacity_rebalance SpotFleetRequest#capacity_rebalance}
     */
    readonly capacityRebalance?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance[];
}
export interface SpotFleetRequestTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#create SpotFleetRequest#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete SpotFleetRequest#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request}.
 */
export declare class SpotFleetRequest extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SpotFleetRequestConfig);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
    get clientToken(): string;
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string | undefined;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string | undefined;
    private _iamFleetRole;
    get iamFleetRole(): string;
    set iamFleetRole(value: string);
    get iamFleetRoleInput(): string;
    get id(): string;
    private _instanceInterruptionBehaviour?;
    get instanceInterruptionBehaviour(): string;
    set instanceInterruptionBehaviour(value: string);
    resetInstanceInterruptionBehaviour(): void;
    get instanceInterruptionBehaviourInput(): string | undefined;
    private _instancePoolsToUseCount?;
    get instancePoolsToUseCount(): number;
    set instancePoolsToUseCount(value: number);
    resetInstancePoolsToUseCount(): void;
    get instancePoolsToUseCountInput(): number | undefined;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[] | undefined;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean;
    set replaceUnhealthyInstances(value: boolean);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
    get spotRequestState(): string;
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
    private _targetCapacity;
    get targetCapacity(): number;
    set targetCapacity(value: number);
    get targetCapacityInput(): number;
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[] | undefined;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean;
    set terminateInstancesWithExpiration(value: boolean);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | undefined;
    private _validFrom?;
    get validFrom(): string;
    set validFrom(value: string);
    resetValidFrom(): void;
    get validFromInput(): string | undefined;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string | undefined;
    private _waitForFulfillment?;
    get waitForFulfillment(): boolean;
    set waitForFulfillment(value: boolean);
    resetWaitForFulfillment(): void;
    get waitForFulfillmentInput(): boolean | undefined;
    private _launchSpecification?;
    get launchSpecification(): SpotFleetRequestLaunchSpecification[];
    set launchSpecification(value: SpotFleetRequestLaunchSpecification[]);
    resetLaunchSpecification(): void;
    get launchSpecificationInput(): SpotFleetRequestLaunchSpecification[] | undefined;
    private _launchTemplateConfig?;
    get launchTemplateConfig(): SpotFleetRequestLaunchTemplateConfig[];
    set launchTemplateConfig(value: SpotFleetRequestLaunchTemplateConfig[]);
    resetLaunchTemplateConfig(): void;
    get launchTemplateConfigInput(): SpotFleetRequestLaunchTemplateConfig[] | undefined;
    private _spotMaintenanceStrategies?;
    get spotMaintenanceStrategies(): SpotFleetRequestSpotMaintenanceStrategies[];
    set spotMaintenanceStrategies(value: SpotFleetRequestSpotMaintenanceStrategies[]);
    resetSpotMaintenanceStrategies(): void;
    get spotMaintenanceStrategiesInput(): SpotFleetRequestSpotMaintenanceStrategies[] | undefined;
    private _timeouts?;
    get timeouts(): SpotFleetRequestTimeouts;
    set timeouts(value: SpotFleetRequestTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): SpotFleetRequestTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
