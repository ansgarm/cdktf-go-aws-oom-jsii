// https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}
  */
  readonly localGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}
  */
  readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}
  */
  readonly values: string[];
}

function dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group}
*/
export class DataAwsEc2LocalGatewayVirtualInterfaceGroup extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_virtual_interface_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayId = config.localGatewayId;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_gateway_id - computed: true, optional: true, required: false
  private _localGatewayId?: string;
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }
  public set localGatewayId(value: string) {
    this._localGatewayId = value;
  }
  public resetLocalGatewayId() {
    this._localGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayIdInput() {
    return this._localGatewayId
  }

  // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
  public get localGatewayVirtualInterfaceIds() {
    return this.getListAttribute('local_gateway_virtual_interface_ids');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToTerraform)(this._filter),
    };
  }
}
