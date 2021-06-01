import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#name ConfigConfigurationAggregator#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags ConfigConfigurationAggregator#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags_all ConfigConfigurationAggregator#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * account_aggregation_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
     */
    readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
    /**
     * organization_aggregation_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
     */
    readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_ids ConfigConfigurationAggregator#account_ids}.
     */
    readonly accountIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}.
     */
    readonly allRegions?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}.
     */
    readonly regions?: string[];
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}.
     */
    readonly allRegions?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}.
     */
    readonly regions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#role_arn ConfigConfigurationAggregator#role_arn}.
     */
    readonly roleArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator}.
 */
export declare class ConfigConfigurationAggregator extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _accountAggregationSource?;
    get accountAggregationSource(): ConfigConfigurationAggregatorAccountAggregationSource[];
    set accountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource[]);
    resetAccountAggregationSource(): void;
    get accountAggregationSourceInput(): ConfigConfigurationAggregatorAccountAggregationSource[] | undefined;
    private _organizationAggregationSource?;
    get organizationAggregationSource(): ConfigConfigurationAggregatorOrganizationAggregationSource[];
    set organizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource[]);
    resetOrganizationAggregationSource(): void;
    get organizationAggregationSourceInput(): ConfigConfigurationAggregatorOrganizationAggregationSource[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
