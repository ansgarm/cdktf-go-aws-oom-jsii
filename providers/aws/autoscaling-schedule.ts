// https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#desired_capacity AutoscalingSchedule#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#end_time AutoscalingSchedule#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#max_size AutoscalingSchedule#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#min_size AutoscalingSchedule#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#recurrence AutoscalingSchedule#recurrence}
  */
  readonly recurrence?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#scheduled_action_name AutoscalingSchedule#scheduled_action_name}
  */
  readonly scheduledActionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#start_time AutoscalingSchedule#start_time}
  */
  readonly startTime?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule}
*/
export class AutoscalingSchedule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_schedule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._desiredCapacity = config.desiredCapacity;
    this._endTime = config.endTime;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._recurrence = config.recurrence;
    this._scheduledActionName = config.scheduledActionName;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName: string;
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName
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

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number;
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number;
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize
  }

  // recurrence - computed: true, optional: true, required: false
  private _recurrence?: string;
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence
  }

  // scheduled_action_name - computed: false, optional: false, required: true
  private _scheduledActionName: string;
  public get scheduledActionName() {
    return this.getStringAttribute('scheduled_action_name');
  }
  public set scheduledActionName(value: string) {
    this._scheduledActionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActionNameInput() {
    return this._scheduledActionName
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      end_time: cdktf.stringToTerraform(this._endTime),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      recurrence: cdktf.stringToTerraform(this._recurrence),
      scheduled_action_name: cdktf.stringToTerraform(this._scheduledActionName),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }
}
