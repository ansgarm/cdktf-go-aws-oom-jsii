import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#name EcsCapacityProvider#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags EcsCapacityProvider#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags_all EcsCapacityProvider#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * auto_scaling_group_provider block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
     */
    readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider[];
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#instance_warmup_period EcsCapacityProvider#instance_warmup_period}.
     */
    readonly instanceWarmupPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}.
     */
    readonly maximumScalingStepSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}.
     */
    readonly minimumScalingStepSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#status EcsCapacityProvider#status}.
     */
    readonly status?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#target_capacity EcsCapacityProvider#target_capacity}.
     */
    readonly targetCapacity?: number;
}
export interface EcsCapacityProviderAutoScalingGroupProvider {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}.
     */
    readonly autoScalingGroupArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_termination_protection EcsCapacityProvider#managed_termination_protection}.
     */
    readonly managedTerminationProtection?: string;
    /**
     * managed_scaling block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_scaling EcsCapacityProvider#managed_scaling}
     */
    readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider}.
 */
export declare class EcsCapacityProvider extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _autoScalingGroupProvider;
    get autoScalingGroupProvider(): EcsCapacityProviderAutoScalingGroupProvider[];
    set autoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider[]);
    get autoScalingGroupProviderInput(): EcsCapacityProviderAutoScalingGroupProvider[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
