import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsResourcegroupstaggingapiResourcesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#exclude_compliant_resources DataAwsResourcegroupstaggingapiResources#exclude_compliant_resources}.
     */
    readonly excludeCompliantResources?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#include_compliance_details DataAwsResourcegroupstaggingapiResources#include_compliance_details}.
     */
    readonly includeComplianceDetails?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#resource_arn_list DataAwsResourcegroupstaggingapiResources#resource_arn_list}.
     */
    readonly resourceArnList?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#resource_type_filters DataAwsResourcegroupstaggingapiResources#resource_type_filters}.
     */
    readonly resourceTypeFilters?: string[];
    /**
     * tag_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#tag_filter DataAwsResourcegroupstaggingapiResources#tag_filter}
     */
    readonly tagFilter?: DataAwsResourcegroupstaggingapiResourcesTagFilter[];
}
export declare class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails extends cdktf.ComplexComputedList {
    get complianceStatus(): boolean;
    get keysWithNoncompliantValues(): string[];
    get nonCompliantKeys(): string[];
}
export declare class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList extends cdktf.ComplexComputedList {
    get complianceDetails(): any;
    get resourceArn(): string;
    get tags(): any;
}
export interface DataAwsResourcegroupstaggingapiResourcesTagFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#key DataAwsResourcegroupstaggingapiResources#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html#values DataAwsResourcegroupstaggingapiResources#values}.
     */
    readonly values?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources}.
 */
export declare class DataAwsResourcegroupstaggingapiResources extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsResourcegroupstaggingapiResourcesConfig);
    private _excludeCompliantResources?;
    get excludeCompliantResources(): boolean;
    set excludeCompliantResources(value: boolean);
    resetExcludeCompliantResources(): void;
    get excludeCompliantResourcesInput(): boolean | undefined;
    get id(): string;
    private _includeComplianceDetails?;
    get includeComplianceDetails(): boolean;
    set includeComplianceDetails(value: boolean);
    resetIncludeComplianceDetails(): void;
    get includeComplianceDetailsInput(): boolean | undefined;
    private _resourceArnList?;
    get resourceArnList(): string[];
    set resourceArnList(value: string[]);
    resetResourceArnList(): void;
    get resourceArnListInput(): string[] | undefined;
    resourceTagMappingList(index: string): DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList;
    private _resourceTypeFilters?;
    get resourceTypeFilters(): string[];
    set resourceTypeFilters(value: string[]);
    resetResourceTypeFilters(): void;
    get resourceTypeFiltersInput(): string[] | undefined;
    private _tagFilter?;
    get tagFilter(): DataAwsResourcegroupstaggingapiResourcesTagFilter[];
    set tagFilter(value: DataAwsResourcegroupstaggingapiResourcesTagFilter[]);
    resetTagFilter(): void;
    get tagFilterInput(): DataAwsResourcegroupstaggingapiResourcesTagFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
