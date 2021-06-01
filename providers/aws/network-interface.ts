// https://www.terraform.io/docs/providers/aws/r/network_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#description NetworkInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_address_count NetworkInterface#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#ipv6_addresses NetworkInterface#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ip NetworkInterface#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips NetworkInterface#private_ips}
  */
  readonly privateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#private_ips_count NetworkInterface#private_ips_count}
  */
  readonly privateIpsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#security_groups NetworkInterface#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#source_dest_check NetworkInterface#source_dest_check}
  */
  readonly sourceDestCheck?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#subnet_id NetworkInterface#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags NetworkInterface#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#tags_all NetworkInterface#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * attachment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#attachment NetworkInterface#attachment}
  */
  readonly attachment?: NetworkInterfaceAttachment[];
}
export interface NetworkInterfaceAttachment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#device_index NetworkInterface#device_index}
  */
  readonly deviceIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html#instance NetworkInterface#instance}
  */
  readonly instance: string;
}

function networkInterfaceAttachmentToTerraform(struct?: NetworkInterfaceAttachment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    instance: cdktf.stringToTerraform(struct!.instance),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface}
*/
export class NetworkInterface extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6Addresses = config.ipv6Addresses;
    this._privateIp = config.privateIp;
    this._privateIps = config.privateIps;
    this._privateIpsCount = config.privateIpsCount;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._attachment = config.attachment;
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

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number;
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount
  }

  // ipv6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses?: string[];
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // private_dns_name - computed: true, optional: false, required: false
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string;
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp
  }

  // private_ips - computed: true, optional: true, required: false
  private _privateIps?: string[];
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps
  }

  // private_ips_count - computed: true, optional: true, required: false
  private _privateIpsCount?: number;
  public get privateIpsCount() {
    return this.getNumberAttribute('private_ips_count');
  }
  public set privateIpsCount(value: number) {
    this._privateIpsCount = value;
  }
  public resetPrivateIpsCount() {
    this._privateIpsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsCountInput() {
    return this._privateIpsCount
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean;
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }
  public set sourceDestCheck(value: boolean ) {
    this._sourceDestCheck = value;
  }
  public resetSourceDestCheck() {
    this._sourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDestCheckInput() {
    return this._sourceDestCheck
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // attachment - computed: false, optional: true, required: false
  private _attachment?: NetworkInterfaceAttachment[];
  public get attachment() {
    return this.interpolationForAttribute('attachment') as any;
  }
  public set attachment(value: NetworkInterfaceAttachment[] ) {
    this._attachment = value;
  }
  public resetAttachment() {
    this._attachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIps),
      private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      attachment: cdktf.listMapper(networkInterfaceAttachmentToTerraform)(this._attachment),
    };
  }
}
