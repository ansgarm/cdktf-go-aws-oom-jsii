// https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsResourcegroupstaggingapiResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}
  */
  readonly excludeCompliantResources?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}
  */
  readonly includeComplianceDetails?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}
  */
  readonly resourceArnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}
  */
  readonly resourceTypeFilters?: string[];
  /**
  * tag_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#tag_filter DataAwsResourcegroupstaggingapiResources#tag_filter}
  */
  readonly tagFilter?: DataAwsResourcegroupstaggingapiResourcesTagFilter[];
}
export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails extends cdktf.ComplexComputedList {

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getBooleanAttribute('compliance_status');
  }

  // keys_with_noncompliant_values - computed: true, optional: false, required: false
  public get keysWithNoncompliantValues() {
    return this.getListAttribute('keys_with_noncompliant_values');
  }

  // non_compliant_keys - computed: true, optional: false, required: false
  public get nonCompliantKeys() {
    return this.getListAttribute('non_compliant_keys');
  }
}
export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList extends cdktf.ComplexComputedList {

  // compliance_details - computed: true, optional: false, required: false
  public get complianceDetails() {
    return this.interpolationForAttribute('compliance_details') as any;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
}
export interface DataAwsResourcegroupstaggingapiResourcesTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#key DataAwsResourcegroupstaggingapiResources#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#values DataAwsResourcegroupstaggingapiResources#values}
  */
  readonly values?: string[];
}

function dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform(struct?: DataAwsResourcegroupstaggingapiResourcesTagFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources}
*/
export class DataAwsResourcegroupstaggingapiResources extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsResourcegroupstaggingapiResourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsResourcegroupstaggingapiResourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_resourcegroupstaggingapi_resources',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._excludeCompliantResources = config.excludeCompliantResources;
    this._includeComplianceDetails = config.includeComplianceDetails;
    this._resourceArnList = config.resourceArnList;
    this._resourceTypeFilters = config.resourceTypeFilters;
    this._tagFilter = config.tagFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_compliant_resources - computed: false, optional: true, required: false
  private _excludeCompliantResources?: boolean;
  public get excludeCompliantResources() {
    return this.getBooleanAttribute('exclude_compliant_resources');
  }
  public set excludeCompliantResources(value: boolean ) {
    this._excludeCompliantResources = value;
  }
  public resetExcludeCompliantResources() {
    this._excludeCompliantResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCompliantResourcesInput() {
    return this._excludeCompliantResources
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_compliance_details - computed: false, optional: true, required: false
  private _includeComplianceDetails?: boolean;
  public get includeComplianceDetails() {
    return this.getBooleanAttribute('include_compliance_details');
  }
  public set includeComplianceDetails(value: boolean ) {
    this._includeComplianceDetails = value;
  }
  public resetIncludeComplianceDetails() {
    this._includeComplianceDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeComplianceDetailsInput() {
    return this._includeComplianceDetails
  }

  // resource_arn_list - computed: false, optional: true, required: false
  private _resourceArnList?: string[];
  public get resourceArnList() {
    return this.getListAttribute('resource_arn_list');
  }
  public set resourceArnList(value: string[] ) {
    this._resourceArnList = value;
  }
  public resetResourceArnList() {
    this._resourceArnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnListInput() {
    return this._resourceArnList
  }

  // resource_tag_mapping_list - computed: true, optional: false, required: false
  public resourceTagMappingList(index: string) {
    return new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList(this, 'resource_tag_mapping_list', index);
  }

  // resource_type_filters - computed: false, optional: true, required: false
  private _resourceTypeFilters?: string[];
  public get resourceTypeFilters() {
    return this.getListAttribute('resource_type_filters');
  }
  public set resourceTypeFilters(value: string[] ) {
    this._resourceTypeFilters = value;
  }
  public resetResourceTypeFilters() {
    this._resourceTypeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFiltersInput() {
    return this._resourceTypeFilters
  }

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter?: DataAwsResourcegroupstaggingapiResourcesTagFilter[];
  public get tagFilter() {
    return this.interpolationForAttribute('tag_filter') as any;
  }
  public set tagFilter(value: DataAwsResourcegroupstaggingapiResourcesTagFilter[] ) {
    this._tagFilter = value;
  }
  public resetTagFilter() {
    this._tagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_compliant_resources: cdktf.booleanToTerraform(this._excludeCompliantResources),
      include_compliance_details: cdktf.booleanToTerraform(this._includeComplianceDetails),
      resource_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceArnList),
      resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeFilters),
      tag_filter: cdktf.listMapper(dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform)(this._tagFilter),
    };
  }
}
