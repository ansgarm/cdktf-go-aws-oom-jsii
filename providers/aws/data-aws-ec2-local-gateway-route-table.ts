// https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2LocalGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}
  */
  readonly localGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}
  */
  readonly localGatewayRouteTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}
  */
  readonly outpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#state DataAwsEc2LocalGatewayRouteTable#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#tags DataAwsEc2LocalGatewayRouteTable#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#filter DataAwsEc2LocalGatewayRouteTable#filter}
  */
  readonly filter?: DataAwsEc2LocalGatewayRouteTableFilter[];
}
export interface DataAwsEc2LocalGatewayRouteTableFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#name DataAwsEc2LocalGatewayRouteTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#values DataAwsEc2LocalGatewayRouteTable#values}
  */
  readonly values: string[];
}

function dataAwsEc2LocalGatewayRouteTableFilterToTerraform(struct?: DataAwsEc2LocalGatewayRouteTableFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table}
*/
export class DataAwsEc2LocalGatewayRouteTable extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2LocalGatewayRouteTableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayRouteTableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayId = config.localGatewayId;
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._outpostArn = config.outpostArn;
    this._state = config.state;
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

  // local_gateway_route_table_id - computed: true, optional: true, required: false
  private _localGatewayRouteTableId?: string;
  public get localGatewayRouteTableId() {
    return this.getStringAttribute('local_gateway_route_table_id');
  }
  public set localGatewayRouteTableId(value: string) {
    this._localGatewayRouteTableId = value;
  }
  public resetLocalGatewayRouteTableId() {
    this._localGatewayRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayRouteTableIdInput() {
    return this._localGatewayRouteTableId
  }

  // outpost_arn - computed: true, optional: true, required: false
  private _outpostArn?: string;
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string) {
    this._outpostArn = value;
  }
  public resetOutpostArn() {
    this._outpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnInput() {
    return this._outpostArn
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
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
  private _filter?: DataAwsEc2LocalGatewayRouteTableFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2LocalGatewayRouteTableFilter[] ) {
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
      local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
      outpost_arn: cdktf.stringToTerraform(this._outpostArn),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2LocalGatewayRouteTableFilterToTerraform)(this._filter),
    };
  }
}
