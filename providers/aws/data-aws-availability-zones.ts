// https://www.terraform.io/docs/providers/aws/d/availability_zones.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAvailabilityZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}
  */
  readonly allAvailabilityZones?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_names DataAwsAvailabilityZones#exclude_names}
  */
  readonly excludeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}
  */
  readonly excludeZoneIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#state DataAwsAvailabilityZones#state}
  */
  readonly state?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#filter DataAwsAvailabilityZones#filter}
  */
  readonly filter?: DataAwsAvailabilityZonesFilter[];
}
export interface DataAwsAvailabilityZonesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#name DataAwsAvailabilityZones#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#values DataAwsAvailabilityZones#values}
  */
  readonly values: string[];
}

function dataAwsAvailabilityZonesFilterToTerraform(struct?: DataAwsAvailabilityZonesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones}
*/
export class DataAwsAvailabilityZones extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAvailabilityZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsAvailabilityZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_availability_zones',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allAvailabilityZones = config.allAvailabilityZones;
    this._excludeNames = config.excludeNames;
    this._excludeZoneIds = config.excludeZoneIds;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_availability_zones - computed: false, optional: true, required: false
  private _allAvailabilityZones?: boolean;
  public get allAvailabilityZones() {
    return this.getBooleanAttribute('all_availability_zones');
  }
  public set allAvailabilityZones(value: boolean ) {
    this._allAvailabilityZones = value;
  }
  public resetAllAvailabilityZones() {
    this._allAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allAvailabilityZonesInput() {
    return this._allAvailabilityZones
  }

  // exclude_names - computed: false, optional: true, required: false
  private _excludeNames?: string[];
  public get excludeNames() {
    return this.getListAttribute('exclude_names');
  }
  public set excludeNames(value: string[] ) {
    this._excludeNames = value;
  }
  public resetExcludeNames() {
    this._excludeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamesInput() {
    return this._excludeNames
  }

  // exclude_zone_ids - computed: false, optional: true, required: false
  private _excludeZoneIds?: string[];
  public get excludeZoneIds() {
    return this.getListAttribute('exclude_zone_ids');
  }
  public set excludeZoneIds(value: string[] ) {
    this._excludeZoneIds = value;
  }
  public resetExcludeZoneIds() {
    this._excludeZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeZoneIdsInput() {
    return this._excludeZoneIds
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // zone_ids - computed: true, optional: false, required: false
  public get zoneIds() {
    return this.getListAttribute('zone_ids');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAvailabilityZonesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsAvailabilityZonesFilter[] ) {
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
      all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
      exclude_names: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeNames),
      exclude_zone_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeZoneIds),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataAwsAvailabilityZonesFilterToTerraform)(this._filter),
    };
  }
}
