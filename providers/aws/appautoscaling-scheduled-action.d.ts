import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppautoscalingScheduledActionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#end_time AppautoscalingScheduledAction#end_time}.
     */
    readonly endTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#name AppautoscalingScheduledAction#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#resource_id AppautoscalingScheduledAction#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}.
     */
    readonly scalableDimension: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#schedule AppautoscalingScheduledAction#schedule}.
     */
    readonly schedule: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#service_namespace AppautoscalingScheduledAction#service_namespace}.
     */
    readonly serviceNamespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#start_time AppautoscalingScheduledAction#start_time}.
     */
    readonly startTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#timezone AppautoscalingScheduledAction#timezone}.
     */
    readonly timezone?: string;
    /**
     * scalable_target_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}
     */
    readonly scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction[];
}
export interface AppautoscalingScheduledActionScalableTargetAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#max_capacity AppautoscalingScheduledAction#max_capacity}.
     */
    readonly maxCapacity?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#min_capacity AppautoscalingScheduledAction#min_capacity}.
     */
    readonly minCapacity?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action}.
 */
export declare class AppautoscalingScheduledAction extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppautoscalingScheduledActionConfig);
    get arn(): string;
    private _endTime?;
    get endTime(): string;
    set endTime(value: string);
    resetEndTime(): void;
    get endTimeInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _scalableDimension;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string;
    private _schedule;
    get schedule(): string;
    set schedule(value: string);
    get scheduleInput(): string;
    private _serviceNamespace;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    resetStartTime(): void;
    get startTimeInput(): string | undefined;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
    private _scalableTargetAction;
    get scalableTargetAction(): AppautoscalingScheduledActionScalableTargetAction[];
    set scalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction[]);
    get scalableTargetActionInput(): AppautoscalingScheduledActionScalableTargetAction[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
