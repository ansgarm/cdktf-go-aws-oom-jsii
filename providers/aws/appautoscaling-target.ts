// https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppautoscalingTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#max_capacity AppautoscalingTarget#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#min_capacity AppautoscalingTarget#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#resource_id AppautoscalingTarget#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#role_arn AppautoscalingTarget#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#scalable_dimension AppautoscalingTarget#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#service_namespace AppautoscalingTarget#service_namespace}
  */
  readonly serviceNamespace: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target}
*/
export class AppautoscalingTarget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppautoscalingTargetConfig
  */
  public constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._maxCapacity = config.maxCapacity;
    this._minCapacity = config.minCapacity;
    this._resourceId = config.resourceId;
    this._roleArn = config.roleArn;
    this._scalableDimension = config.scalableDimension;
    this._serviceNamespace = config.serviceNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity: number;
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity: number;
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension: string;
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace: string;
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
    };
  }
}
