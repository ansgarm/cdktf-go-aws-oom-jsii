// https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#allow_ssh OpsworksPermission#allow_ssh}
  */
  readonly allowSsh?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#allow_sudo OpsworksPermission#allow_sudo}
  */
  readonly allowSudo?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#level OpsworksPermission#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#stack_id OpsworksPermission#stack_id}
  */
  readonly stackId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html#user_arn OpsworksPermission#user_arn}
  */
  readonly userArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission}
*/
export class OpsworksPermission extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowSsh = config.allowSsh;
    this._allowSudo = config.allowSudo;
    this._level = config.level;
    this._stackId = config.stackId;
    this._userArn = config.userArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ssh - computed: true, optional: true, required: false
  private _allowSsh?: boolean;
  public get allowSsh() {
    return this.getBooleanAttribute('allow_ssh');
  }
  public set allowSsh(value: boolean) {
    this._allowSsh = value;
  }
  public resetAllowSsh() {
    this._allowSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSshInput() {
    return this._allowSsh
  }

  // allow_sudo - computed: true, optional: true, required: false
  private _allowSudo?: boolean;
  public get allowSudo() {
    return this.getBooleanAttribute('allow_sudo');
  }
  public set allowSudo(value: boolean) {
    this._allowSudo = value;
  }
  public resetAllowSudo() {
    this._allowSudo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSudoInput() {
    return this._allowSudo
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: true, optional: true, required: false
  private _level?: string;
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // stack_id - computed: true, optional: true, required: false
  private _stackId?: string;
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId
  }

  // user_arn - computed: false, optional: false, required: true
  private _userArn: string;
  public get userArn() {
    return this.getStringAttribute('user_arn');
  }
  public set userArn(value: string) {
    this._userArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userArnInput() {
    return this._userArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ssh: cdktf.booleanToTerraform(this._allowSsh),
      allow_sudo: cdktf.booleanToTerraform(this._allowSudo),
      level: cdktf.stringToTerraform(this._level),
      stack_id: cdktf.stringToTerraform(this._stackId),
      user_arn: cdktf.stringToTerraform(this._userArn),
    };
  }
}
