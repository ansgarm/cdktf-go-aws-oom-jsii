// https://www.terraform.io/docs/providers/aws/d/pricing_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsPricingProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#service_code DataAwsPricingProduct#service_code}
  */
  readonly serviceCode: string;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#filters DataAwsPricingProduct#filters}
  */
  readonly filters: DataAwsPricingProductFilters[];
}
export interface DataAwsPricingProductFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#field DataAwsPricingProduct#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html#value DataAwsPricingProduct#value}
  */
  readonly value: string;
}

function dataAwsPricingProductFiltersToTerraform(struct?: DataAwsPricingProductFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product}
*/
export class DataAwsPricingProduct extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsPricingProductConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsPricingProductConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pricing_product',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serviceCode = config.serviceCode;
    this._filters = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // service_code - computed: false, optional: false, required: true
  private _serviceCode: string;
  public get serviceCode() {
    return this.getStringAttribute('service_code');
  }
  public set serviceCode(value: string) {
    this._serviceCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCodeInput() {
    return this._serviceCode
  }

  // filters - computed: false, optional: false, required: true
  private _filters: DataAwsPricingProductFilters[];
  public get filters() {
    return this.interpolationForAttribute('filters') as any;
  }
  public set filters(value: DataAwsPricingProductFilters[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_code: cdktf.stringToTerraform(this._serviceCode),
      filters: cdktf.listMapper(dataAwsPricingProductFiltersToTerraform)(this._filters),
    };
  }
}
