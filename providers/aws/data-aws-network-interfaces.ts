// https://www.terraform.io/docs/providers/aws/d/network_interfaces.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsNetworkInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#tags DataAwsNetworkInterfaces#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#filter DataAwsNetworkInterfaces#filter}
  */
  readonly filter?: DataAwsNetworkInterfacesFilter[];
}
export interface DataAwsNetworkInterfacesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#name DataAwsNetworkInterfaces#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#values DataAwsNetworkInterfaces#values}
  */
  readonly values: string[];
}

function dataAwsNetworkInterfacesFilterToTerraform(struct?: DataAwsNetworkInterfacesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces}
*/
export class DataAwsNetworkInterfaces extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNetworkInterfacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsNetworkInterfacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsNetworkInterfacesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsNetworkInterfacesFilter[] ) {
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
      filter: cdktf.listMapper(dataAwsNetworkInterfacesFilterToTerraform)(this._filter),
    };
  }
}
