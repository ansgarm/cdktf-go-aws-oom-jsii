import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrManagedScalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#cluster_id EmrManagedScalingPolicy#cluster_id}.
     */
    readonly clusterId: string;
    /**
     * compute_limits block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#compute_limits EmrManagedScalingPolicy#compute_limits}
     */
    readonly computeLimits: EmrManagedScalingPolicyComputeLimits[];
}
export interface EmrManagedScalingPolicyComputeLimits {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}.
     */
    readonly maximumCapacityUnits: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}.
     */
    readonly maximumCoreCapacityUnits?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}.
     */
    readonly maximumOndemandCapacityUnits?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}.
     */
    readonly minimumCapacityUnits: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#unit_type EmrManagedScalingPolicy#unit_type}.
     */
    readonly unitType: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy}.
 */
export declare class EmrManagedScalingPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EmrManagedScalingPolicyConfig);
    private _clusterId;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    get id(): string;
    private _computeLimits;
    get computeLimits(): EmrManagedScalingPolicyComputeLimits[];
    set computeLimits(value: EmrManagedScalingPolicyComputeLimits[]);
    get computeLimitsInput(): EmrManagedScalingPolicyComputeLimits[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
