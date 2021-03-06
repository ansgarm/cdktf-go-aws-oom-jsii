// https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html#enabled EbsEncryptionByDefault#enabled}
  */
  readonly enabled?: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default}
*/
export class EbsEncryptionByDefault extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsEncryptionByDefaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EbsEncryptionByDefaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_encryption_by_default',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
    };
  }
}
