// https://www.terraform.io/docs/providers/aws/r/ami_copy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmiCopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#description AmiCopy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#destination_outpost_arn AmiCopy#destination_outpost_arn}
  */
  readonly destinationOutpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#encrypted AmiCopy#encrypted}
  */
  readonly encrypted?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#kms_key_id AmiCopy#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#name AmiCopy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_id AmiCopy#source_ami_id}
  */
  readonly sourceAmiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_region AmiCopy#source_ami_region}
  */
  readonly sourceAmiRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags AmiCopy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags_all AmiCopy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ebs_block_device AmiCopy#ebs_block_device}
  */
  readonly ebsBlockDevice?: AmiCopyEbsBlockDevice[];
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ephemeral_block_device AmiCopy#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#timeouts AmiCopy#timeouts}
  */
  readonly timeouts?: AmiCopyTimeouts;
}
export interface AmiCopyEbsBlockDevice {
}

function amiCopyEbsBlockDeviceToTerraform(struct?: AmiCopyEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface AmiCopyEphemeralBlockDevice {
}

function amiCopyEphemeralBlockDeviceToTerraform(struct?: AmiCopyEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface AmiCopyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#create AmiCopy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#delete AmiCopy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#update AmiCopy#update}
  */
  readonly update?: string;
}

function amiCopyTimeoutsToTerraform(struct?: AmiCopyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy}
*/
export class AmiCopy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmiCopyConfig
  */
  public constructor(scope: Construct, id: string, config: AmiCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami_copy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._destinationOutpostArn = config.destinationOutpostArn;
    this._encrypted = config.encrypted;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._sourceAmiId = config.sourceAmiId;
    this._sourceAmiRegion = config.sourceAmiRegion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // destination_outpost_arn - computed: false, optional: true, required: false
  private _destinationOutpostArn?: string;
  public get destinationOutpostArn() {
    return this.getStringAttribute('destination_outpost_arn');
  }
  public set destinationOutpostArn(value: string ) {
    this._destinationOutpostArn = value;
  }
  public resetDestinationOutpostArn() {
    this._destinationOutpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationOutpostArnInput() {
    return this._destinationOutpostArn
  }

  // ena_support - computed: true, optional: false, required: false
  public get enaSupport() {
    return this.getBooleanAttribute('ena_support');
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean ) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_location - computed: true, optional: false, required: false
  public get imageLocation() {
    return this.getStringAttribute('image_location');
  }

  // image_owner_alias - computed: true, optional: false, required: false
  public get imageOwnerAlias() {
    return this.getStringAttribute('image_owner_alias');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // manage_ebs_snapshots - computed: true, optional: false, required: false
  public get manageEbsSnapshots() {
    return this.getBooleanAttribute('manage_ebs_snapshots');
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // platform_details - computed: true, optional: false, required: false
  public get platformDetails() {
    return this.getStringAttribute('platform_details');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // ramdisk_id - computed: true, optional: false, required: false
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // root_device_name - computed: true, optional: false, required: false
  public get rootDeviceName() {
    return this.getStringAttribute('root_device_name');
  }

  // root_snapshot_id - computed: true, optional: false, required: false
  public get rootSnapshotId() {
    return this.getStringAttribute('root_snapshot_id');
  }

  // source_ami_id - computed: false, optional: false, required: true
  private _sourceAmiId: string;
  public get sourceAmiId() {
    return this.getStringAttribute('source_ami_id');
  }
  public set sourceAmiId(value: string) {
    this._sourceAmiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAmiIdInput() {
    return this._sourceAmiId
  }

  // source_ami_region - computed: false, optional: false, required: true
  private _sourceAmiRegion: string;
  public get sourceAmiRegion() {
    return this.getStringAttribute('source_ami_region');
  }
  public set sourceAmiRegion(value: string) {
    this._sourceAmiRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAmiRegionInput() {
    return this._sourceAmiRegion
  }

  // sriov_net_support - computed: true, optional: false, required: false
  public get sriovNetSupport() {
    return this.getStringAttribute('sriov_net_support');
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

  // usage_operation - computed: true, optional: false, required: false
  public get usageOperation() {
    return this.getStringAttribute('usage_operation');
  }

  // virtualization_type - computed: true, optional: false, required: false
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: AmiCopyEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: AmiCopyEbsBlockDevice[] ) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: AmiCopyEphemeralBlockDevice[] ) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AmiCopyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AmiCopyTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      destination_outpost_arn: cdktf.stringToTerraform(this._destinationOutpostArn),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      source_ami_id: cdktf.stringToTerraform(this._sourceAmiId),
      source_ami_region: cdktf.stringToTerraform(this._sourceAmiRegion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      ebs_block_device: cdktf.listMapper(amiCopyEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(amiCopyEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      timeouts: amiCopyTimeoutsToTerraform(this._timeouts),
    };
  }
}
