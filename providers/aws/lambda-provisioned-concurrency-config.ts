// https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaProvisionedConcurrencyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#function_name LambdaProvisionedConcurrencyConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}
  */
  readonly provisionedConcurrentExecutions: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#qualifier LambdaProvisionedConcurrencyConfig#qualifier}
  */
  readonly qualifier: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#timeouts LambdaProvisionedConcurrencyConfig#timeouts}
  */
  readonly timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
}
export interface LambdaProvisionedConcurrencyConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#create LambdaProvisionedConcurrencyConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#update LambdaProvisionedConcurrencyConfig#update}
  */
  readonly update?: string;
}

function lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(struct?: LambdaProvisionedConcurrencyConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config}
*/
export class LambdaProvisionedConcurrencyConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaProvisionedConcurrencyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_provisioned_concurrency_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionName = config.functionName;
    this._provisionedConcurrentExecutions = config.provisionedConcurrentExecutions;
    this._qualifier = config.qualifier;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provisioned_concurrent_executions - computed: false, optional: false, required: true
  private _provisionedConcurrentExecutions: number;
  public get provisionedConcurrentExecutions() {
    return this.getNumberAttribute('provisioned_concurrent_executions');
  }
  public set provisionedConcurrentExecutions(value: number) {
    this._provisionedConcurrentExecutions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrentExecutionsInput() {
    return this._provisionedConcurrentExecutions
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier: string;
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LambdaProvisionedConcurrencyConfigTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      provisioned_concurrent_executions: cdktf.numberToTerraform(this._provisionedConcurrentExecutions),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      timeouts: lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
