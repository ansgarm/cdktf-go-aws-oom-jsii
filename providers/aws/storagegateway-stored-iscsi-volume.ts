// https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayStoredIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#disk_id StoragegatewayStoredIscsiVolume#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}
  */
  readonly kmsEncrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#kms_key StoragegatewayStoredIscsiVolume#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}
  */
  readonly preserveExistingData: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#tags StoragegatewayStoredIscsiVolume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#tags_all StoragegatewayStoredIscsiVolume#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#target_name StoragegatewayStoredIscsiVolume#target_name}
  */
  readonly targetName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume}
*/
export class StoragegatewayStoredIscsiVolume extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayStoredIscsiVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegatewayStoredIscsiVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_stored_iscsi_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._diskId = config.diskId;
    this._gatewayArn = config.gatewayArn;
    this._kmsEncrypted = config.kmsEncrypted;
    this._kmsKey = config.kmsKey;
    this._networkInterfaceId = config.networkInterfaceId;
    this._preserveExistingData = config.preserveExistingData;
    this._snapshotId = config.snapshotId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetName = config.targetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chap_enabled - computed: true, optional: false, required: false
  public get chapEnabled() {
    return this.getBooleanAttribute('chap_enabled');
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId: string;
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId
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

  // kms_encrypted - computed: false, optional: true, required: false
  private _kmsEncrypted?: boolean;
  public get kmsEncrypted() {
    return this.getBooleanAttribute('kms_encrypted');
  }
  public set kmsEncrypted(value: boolean ) {
    this._kmsEncrypted = value;
  }
  public resetKmsEncrypted() {
    this._kmsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedInput() {
    return this._kmsEncrypted
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string ) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey
  }

  // lun_number - computed: true, optional: false, required: false
  public get lunNumber() {
    return this.getNumberAttribute('lun_number');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // network_interface_port - computed: true, optional: false, required: false
  public get networkInterfacePort() {
    return this.getNumberAttribute('network_interface_port');
  }

  // preserve_existing_data - computed: false, optional: false, required: true
  private _preserveExistingData: boolean;
  public get preserveExistingData() {
    return this.getBooleanAttribute('preserve_existing_data');
  }
  public set preserveExistingData(value: boolean) {
    this._preserveExistingData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveExistingDataInput() {
    return this._preserveExistingData
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string;
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string ) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // target_name - computed: false, optional: false, required: true
  private _targetName: string;
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName
  }

  // volume_attachment_status - computed: true, optional: false, required: false
  public get volumeAttachmentStatus() {
    return this.getStringAttribute('volume_attachment_status');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size_in_bytes - computed: true, optional: false, required: false
  public get volumeSizeInBytes() {
    return this.getNumberAttribute('volume_size_in_bytes');
  }

  // volume_status - computed: true, optional: false, required: false
  public get volumeStatus() {
    return this.getStringAttribute('volume_status');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_id: cdktf.stringToTerraform(this._diskId),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      preserve_existing_data: cdktf.booleanToTerraform(this._preserveExistingData),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      target_name: cdktf.stringToTerraform(this._targetName),
    };
  }
}
