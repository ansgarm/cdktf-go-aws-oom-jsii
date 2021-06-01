import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}.
     */
    readonly autoscalingGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#desired_capacity AutoscalingSchedule#desired_capacity}.
     */
    readonly desiredCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#end_time AutoscalingSchedule#end_time}.
     */
    readonly endTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#max_size AutoscalingSchedule#max_size}.
     */
    readonly maxSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#min_size AutoscalingSchedule#min_size}.
     */
    readonly minSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#recurrence AutoscalingSchedule#recurrence}.
     */
    readonly recurrence?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#scheduled_action_name AutoscalingSchedule#scheduled_action_name}.
     */
    readonly scheduledActionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#start_time AutoscalingSchedule#start_time}.
     */
    readonly startTime?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule}.
 */
export declare class AutoscalingSchedule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AutoscalingScheduleConfig);
    get arn(): string;
    private _autoscalingGroupName;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string;
    private _desiredCapacity?;
    get desiredCapacity(): number;
    set desiredCapacity(value: number);
    resetDesiredCapacity(): void;
    get desiredCapacityInput(): number | undefined;
    private _endTime?;
    get endTime(): string;
    set endTime(value: string);
    resetEndTime(): void;
    get endTimeInput(): string | undefined;
    get id(): string;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    resetMaxSize(): void;
    get maxSizeInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number | undefined;
    private _recurrence?;
    get recurrence(): string;
    set recurrence(value: string);
    resetRecurrence(): void;
    get recurrenceInput(): string | undefined;
    private _scheduledActionName;
    get scheduledActionName(): string;
    set scheduledActionName(value: string);
    get scheduledActionNameInput(): string;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    resetStartTime(): void;
    get startTimeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
