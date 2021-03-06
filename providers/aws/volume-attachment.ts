// https://www.terraform.io/docs/providers/aws/r/volume_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#device_name VolumeAttachment#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#force_detach VolumeAttachment#force_detach}
  */
  readonly forceDetach?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#instance_id VolumeAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#skip_destroy VolumeAttachment#skip_destroy}
  */
  readonly skipDestroy?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#volume_id VolumeAttachment#volume_id}
  */
  readonly volumeId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment}
*/
export class VolumeAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_volume_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceName = config.deviceName;
    this._forceDetach = config.forceDetach;
    this._instanceId = config.instanceId;
    this._skipDestroy = config.skipDestroy;
    this._volumeId = config.volumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName: string;
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName
  }

  // force_detach - computed: false, optional: true, required: false
  private _forceDetach?: boolean;
  public get forceDetach() {
    return this.getBooleanAttribute('force_detach');
  }
  public set forceDetach(value: boolean ) {
    this._forceDetach = value;
  }
  public resetForceDetach() {
    this._forceDetach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDetachInput() {
    return this._forceDetach
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId: string;
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean;
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean ) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId: string;
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      force_detach: cdktf.booleanToTerraform(this._forceDetach),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
      volume_id: cdktf.stringToTerraform(this._volumeId),
    };
  }
}
