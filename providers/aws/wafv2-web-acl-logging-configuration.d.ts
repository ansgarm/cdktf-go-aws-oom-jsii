import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2WebAclLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * AWS Kinesis Firehose Delivery Stream ARNs.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#log_destination_configs Wafv2WebAclLoggingConfiguration#log_destination_configs}
     */
    readonly logDestinationConfigs: string[];
    /**
     * AWS WebACL ARN.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#resource_arn Wafv2WebAclLoggingConfiguration#resource_arn}
     */
    readonly resourceArn: string;
    /**
     * logging_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#logging_filter Wafv2WebAclLoggingConfiguration#logging_filter}
     */
    readonly loggingFilter?: Wafv2WebAclLoggingConfigurationLoggingFilter[];
    /**
     * redacted_fields block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#redacted_fields Wafv2WebAclLoggingConfiguration#redacted_fields}
     */
    readonly redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[];
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#action Wafv2WebAclLoggingConfiguration#action}.
     */
    readonly action: string;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#label_name Wafv2WebAclLoggingConfiguration#label_name}.
     */
    readonly labelName: string;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition {
    /**
     * action_condition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#action_condition Wafv2WebAclLoggingConfiguration#action_condition}
     */
    readonly actionCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition[];
    /**
     * label_name_condition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#label_name_condition Wafv2WebAclLoggingConfiguration#label_name_condition}
     */
    readonly labelNameCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition[];
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#behavior Wafv2WebAclLoggingConfiguration#behavior}.
     */
    readonly behavior: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#requirement Wafv2WebAclLoggingConfiguration#requirement}.
     */
    readonly requirement: string;
    /**
     * condition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#condition Wafv2WebAclLoggingConfiguration#condition}
     */
    readonly condition: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[];
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#default_behavior Wafv2WebAclLoggingConfiguration#default_behavior}.
     */
    readonly defaultBehavior: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#filter Wafv2WebAclLoggingConfiguration#filter}
     */
    readonly filter: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[];
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsBody {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsMethod {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#name Wafv2WebAclLoggingConfiguration#name}.
     */
    readonly name: string;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#name Wafv2WebAclLoggingConfiguration#name}.
     */
    readonly name: string;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath {
}
export interface Wafv2WebAclLoggingConfigurationRedactedFields {
    /**
     * all_query_arguments block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#all_query_arguments Wafv2WebAclLoggingConfiguration#all_query_arguments}
     */
    readonly allQueryArguments?: Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments[];
    /**
     * body block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#body Wafv2WebAclLoggingConfiguration#body}
     */
    readonly body?: Wafv2WebAclLoggingConfigurationRedactedFieldsBody[];
    /**
     * method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#method Wafv2WebAclLoggingConfiguration#method}
     */
    readonly method?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#query_string Wafv2WebAclLoggingConfiguration#query_string}
     */
    readonly queryString?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString[];
    /**
     * single_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#single_header Wafv2WebAclLoggingConfiguration#single_header}
     */
    readonly singleHeader?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader[];
    /**
     * single_query_argument block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#single_query_argument Wafv2WebAclLoggingConfiguration#single_query_argument}
     */
    readonly singleQueryArgument?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument[];
    /**
     * uri_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#uri_path Wafv2WebAclLoggingConfiguration#uri_path}
     */
    readonly uriPath?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration}.
 */
export declare class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Wafv2WebAclLoggingConfigurationConfig);
    get id(): string;
    private _logDestinationConfigs;
    get logDestinationConfigs(): string[];
    set logDestinationConfigs(value: string[]);
    get logDestinationConfigsInput(): string[];
    private _resourceArn;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _loggingFilter?;
    get loggingFilter(): Wafv2WebAclLoggingConfigurationLoggingFilter[];
    set loggingFilter(value: Wafv2WebAclLoggingConfigurationLoggingFilter[]);
    resetLoggingFilter(): void;
    get loggingFilterInput(): Wafv2WebAclLoggingConfigurationLoggingFilter[] | undefined;
    private _redactedFields?;
    get redactedFields(): Wafv2WebAclLoggingConfigurationRedactedFields[];
    set redactedFields(value: Wafv2WebAclLoggingConfigurationRedactedFields[]);
    resetRedactedFields(): void;
    get redactedFieldsInput(): Wafv2WebAclLoggingConfigurationRedactedFields[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
