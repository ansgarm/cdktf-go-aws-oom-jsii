// https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmiFromInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#description AmiFromInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#name AmiFromInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}
  */
  readonly snapshotWithoutReboot?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#source_instance_id AmiFromInstance#source_instance_id}
  */
  readonly sourceInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags AmiFromInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags_all AmiFromInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ebs_block_device AmiFromInstance#ebs_block_device}
  */
  readonly ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[];
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ephemeral_block_device AmiFromInstance#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#timeouts AmiFromInstance#timeouts}
  */
  readonly timeouts?: AmiFromInstanceTimeouts;
}
export interface AmiFromInstanceEbsBlockDevice {
}

function amiFromInstanceEbsBlockDeviceToTerraform(struct?: AmiFromInstanceEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface AmiFromInstanceEphemeralBlockDevice {
}

function amiFromInstanceEphemeralBlockDeviceToTerraform(struct?: AmiFromInstanceEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface AmiFromInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#create AmiFromInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#delete AmiFromInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#update AmiFromInstance#update}
  */
  readonly update?: string;
}

function amiFromInstanceTimeoutsToTerraform(struct?: AmiFromInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance}
*/
export class AmiFromInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmiFromInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AmiFromInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami_from_instance',
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
    this._snapshotWithoutReboot = config.snapshotWithoutReboot;
    this._sourceInstanceId = config.sourceInstanceId;
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

  // ena_support - computed: true, optional: false, required: false
  public get enaSupport() {
    return this.getBooleanAttribute('ena_support');
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

  // snapshot_without_reboot - computed: false, optional: true, required: false
  private _snapshotWithoutReboot?: boolean;
  public get snapshotWithoutReboot() {
    return this.getBooleanAttribute('snapshot_without_reboot');
  }
  public set snapshotWithoutReboot(value: boolean ) {
    this._snapshotWithoutReboot = value;
  }
  public resetSnapshotWithoutReboot() {
    this._snapshotWithoutReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWithoutRebootInput() {
    return this._snapshotWithoutReboot
  }

  // source_instance_id - computed: false, optional: false, required: true
  private _sourceInstanceId: string;
  public get sourceInstanceId() {
    return this.getStringAttribute('source_instance_id');
  }
  public set sourceInstanceId(value: string) {
    this._sourceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceIdInput() {
    return this._sourceInstanceId
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
  private _ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[];
  public get ebsBlockDevice() {
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: AmiFromInstanceEbsBlockDevice[] ) {
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
  private _ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[];
  public get ephemeralBlockDevice() {
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: AmiFromInstanceEphemeralBlockDevice[] ) {
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
  private _timeouts?: AmiFromInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AmiFromInstanceTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      snapshot_without_reboot: cdktf.booleanToTerraform(this._snapshotWithoutReboot),
      source_instance_id: cdktf.stringToTerraform(this._sourceInstanceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      ebs_block_device: cdktf.listMapper(amiFromInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(amiFromInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      timeouts: amiFromInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
