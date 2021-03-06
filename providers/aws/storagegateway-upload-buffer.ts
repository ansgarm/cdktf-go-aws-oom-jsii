// https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayUploadBufferConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#disk_id StoragegatewayUploadBuffer#disk_id}
  */
  readonly diskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#disk_path StoragegatewayUploadBuffer#disk_path}
  */
  readonly diskPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#gateway_arn StoragegatewayUploadBuffer#gateway_arn}
  */
  readonly gatewayArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html aws_storagegateway_upload_buffer}
*/
export class StoragegatewayUploadBuffer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html aws_storagegateway_upload_buffer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayUploadBufferConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegatewayUploadBufferConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_upload_buffer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._diskId = config.diskId;
    this._diskPath = config.diskPath;
    this._gatewayArn = config.gatewayArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: string;
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId
  }

  // disk_path - computed: true, optional: true, required: false
  private _diskPath?: string;
  public get diskPath() {
    return this.getStringAttribute('disk_path');
  }
  public set diskPath(value: string) {
    this._diskPath = value;
  }
  public resetDiskPath() {
    this._diskPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPathInput() {
    return this._diskPath
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn
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
      disk_id: cdktf.stringToTerraform(this._diskId),
      disk_path: cdktf.stringToTerraform(this._diskPath),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
    };
  }
}
