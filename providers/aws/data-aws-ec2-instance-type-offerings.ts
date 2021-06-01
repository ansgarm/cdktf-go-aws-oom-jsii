// https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2InstanceTypeOfferingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#location_type DataAwsEc2InstanceTypeOfferings#location_type}
  */
  readonly locationType?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#filter DataAwsEc2InstanceTypeOfferings#filter}
  */
  readonly filter?: DataAwsEc2InstanceTypeOfferingsFilter[];
}
export interface DataAwsEc2InstanceTypeOfferingsFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#name DataAwsEc2InstanceTypeOfferings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html#values DataAwsEc2InstanceTypeOfferings#values}
  */
  readonly values: string[];
}

function dataAwsEc2InstanceTypeOfferingsFilterToTerraform(struct?: DataAwsEc2InstanceTypeOfferingsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html aws_ec2_instance_type_offerings}
*/
export class DataAwsEc2InstanceTypeOfferings extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings.html aws_ec2_instance_type_offerings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2InstanceTypeOfferingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeOfferingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_instance_type_offerings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationType = config.locationType;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string;
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string ) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2InstanceTypeOfferingsFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2InstanceTypeOfferingsFilter[] ) {
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
      location_type: cdktf.stringToTerraform(this._locationType),
      filter: cdktf.listMapper(dataAwsEc2InstanceTypeOfferingsFilterToTerraform)(this._filter),
    };
  }
}
