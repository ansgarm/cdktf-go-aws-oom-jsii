import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppautoscalingTargetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#max_capacity AppautoscalingTarget#max_capacity}.
     */
    readonly maxCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#min_capacity AppautoscalingTarget#min_capacity}.
     */
    readonly minCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#resource_id AppautoscalingTarget#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#role_arn AppautoscalingTarget#role_arn}.
     */
    readonly roleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#scalable_dimension AppautoscalingTarget#scalable_dimension}.
     */
    readonly scalableDimension: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#service_namespace AppautoscalingTarget#service_namespace}.
     */
    readonly serviceNamespace: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target}.
 */
export declare class AppautoscalingTarget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig);
    get id(): string;
    private _maxCapacity;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    get maxCapacityInput(): number;
    private _minCapacity;
    get minCapacity(): number;
    set minCapacity(value: number);
    get minCapacityInput(): number;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _scalableDimension;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string;
    private _serviceNamespace;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
