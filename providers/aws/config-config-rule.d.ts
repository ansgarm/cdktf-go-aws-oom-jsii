import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConfigRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#description ConfigConfigRule#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#input_parameters ConfigConfigRule#input_parameters}.
     */
    readonly inputParameters?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.
     */
    readonly maximumExecutionFrequency?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#name ConfigConfigRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags ConfigConfigRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags_all ConfigConfigRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * scope block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#scope ConfigConfigRule#scope}
     */
    readonly scope?: ConfigConfigRuleScope[];
    /**
     * source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source ConfigConfigRule#source}
     */
    readonly source: ConfigConfigRuleSource[];
}
export interface ConfigConfigRuleScope {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_id ConfigConfigRule#compliance_resource_id}.
     */
    readonly complianceResourceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_types ConfigConfigRule#compliance_resource_types}.
     */
    readonly complianceResourceTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_key ConfigConfigRule#tag_key}.
     */
    readonly tagKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_value ConfigConfigRule#tag_value}.
     */
    readonly tagValue?: string;
}
export interface ConfigConfigRuleSourceSourceDetail {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#event_source ConfigConfigRule#event_source}.
     */
    readonly eventSource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.
     */
    readonly maximumExecutionFrequency?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#message_type ConfigConfigRule#message_type}.
     */
    readonly messageType?: string;
}
export interface ConfigConfigRuleSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#owner ConfigConfigRule#owner}.
     */
    readonly owner: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_identifier ConfigConfigRule#source_identifier}.
     */
    readonly sourceIdentifier: string;
    /**
     * source_detail block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_detail ConfigConfigRule#source_detail}
     */
    readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule}.
 */
export declare class ConfigConfigRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _inputParameters?;
    get inputParameters(): string;
    set inputParameters(value: string);
    resetInputParameters(): void;
    get inputParametersInput(): string | undefined;
    private _maximumExecutionFrequency?;
    get maximumExecutionFrequency(): string;
    set maximumExecutionFrequency(value: string);
    resetMaximumExecutionFrequency(): void;
    get maximumExecutionFrequencyInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ruleId(): string;
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
    private _scope?;
    get scope(): ConfigConfigRuleScope[];
    set scope(value: ConfigConfigRuleScope[]);
    resetScope(): void;
    get scopeInput(): ConfigConfigRuleScope[] | undefined;
    private _source;
    get source(): ConfigConfigRuleSource[];
    set source(value: ConfigConfigRuleSource[]);
    get sourceInput(): ConfigConfigRuleSource[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
