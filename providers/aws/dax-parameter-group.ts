// https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DaxParameterGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#description DaxParameterGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#name DaxParameterGroup#name}
  */
  readonly name: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#parameters DaxParameterGroup#parameters}
  */
  readonly parameters?: DaxParameterGroupParameters[];
}
export interface DaxParameterGroupParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#name DaxParameterGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html#value DaxParameterGroup#value}
  */
  readonly value: string;
}

function daxParameterGroupParametersToTerraform(struct?: DaxParameterGroupParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html aws_dax_parameter_group}
*/
export class DaxParameterGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html aws_dax_parameter_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DaxParameterGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DaxParameterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dax_parameter_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._parameters = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: DaxParameterGroupParameters[];
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: DaxParameterGroupParameters[] ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.listMapper(daxParameterGroupParametersToTerraform)(this._parameters),
    };
  }
}
