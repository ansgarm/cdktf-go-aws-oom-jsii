// https://www.terraform.io/docs/providers/aws/d/network_acls.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsNetworkAclsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#tags DataAwsNetworkAcls#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#vpc_id DataAwsNetworkAcls#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#filter DataAwsNetworkAcls#filter}
  */
  readonly filter?: DataAwsNetworkAclsFilter[];
}
export interface DataAwsNetworkAclsFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#name DataAwsNetworkAcls#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#values DataAwsNetworkAcls#values}
  */
  readonly values: string[];
}

function dataAwsNetworkAclsFilterToTerraform(struct?: DataAwsNetworkAclsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls}
*/
export class DataAwsNetworkAcls extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNetworkAclsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsNetworkAclsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acls',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string ) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsNetworkAclsFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsNetworkAclsFilter[] ) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      filter: cdktf.listMapper(dataAwsNetworkAclsFilterToTerraform)(this._filter),
    };
  }
}
