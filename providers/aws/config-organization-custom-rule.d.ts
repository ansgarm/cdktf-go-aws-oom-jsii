import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigOrganizationCustomRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#description ConfigOrganizationCustomRule#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}.
     */
    readonly excludedAccounts?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#input_parameters ConfigOrganizationCustomRule#input_parameters}.
     */
    readonly inputParameters?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}.
     */
    readonly lambdaFunctionArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}.
     */
    readonly maximumExecutionFrequency?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#name ConfigOrganizationCustomRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}.
     */
    readonly resourceIdScope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}.
     */
    readonly resourceTypesScope?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}.
     */
    readonly tagKeyScope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}.
     */
    readonly tagValueScope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#trigger_types ConfigOrganizationCustomRule#trigger_types}.
     */
    readonly triggerTypes: string[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#timeouts ConfigOrganizationCustomRule#timeouts}
     */
    readonly timeouts?: ConfigOrganizationCustomRuleTimeouts;
}
export interface ConfigOrganizationCustomRuleTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#create ConfigOrganizationCustomRule#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#delete ConfigOrganizationCustomRule#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#update ConfigOrganizationCustomRule#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule}.
 */
export declare class ConfigOrganizationCustomRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigOrganizationCustomRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _excludedAccounts?;
    get excludedAccounts(): string[];
    set excludedAccounts(value: string[]);
    resetExcludedAccounts(): void;
    get excludedAccountsInput(): string[] | undefined;
    get id(): string;
    private _inputParameters?;
    get inputParameters(): string;
    set inputParameters(value: string);
    resetInputParameters(): void;
    get inputParametersInput(): string | undefined;
    private _lambdaFunctionArn;
    get lambdaFunctionArn(): string;
    set lambdaFunctionArn(value: string);
    get lambdaFunctionArnInput(): string;
    private _maximumExecutionFrequency?;
    get maximumExecutionFrequency(): string;
    set maximumExecutionFrequency(value: string);
    resetMaximumExecutionFrequency(): void;
    get maximumExecutionFrequencyInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceIdScope?;
    get resourceIdScope(): string;
    set resourceIdScope(value: string);
    resetResourceIdScope(): void;
    get resourceIdScopeInput(): string | undefined;
    private _resourceTypesScope?;
    get resourceTypesScope(): string[];
    set resourceTypesScope(value: string[]);
    resetResourceTypesScope(): void;
    get resourceTypesScopeInput(): string[] | undefined;
    private _tagKeyScope?;
    get tagKeyScope(): string;
    set tagKeyScope(value: string);
    resetTagKeyScope(): void;
    get tagKeyScopeInput(): string | undefined;
    private _tagValueScope?;
    get tagValueScope(): string;
    set tagValueScope(value: string);
    resetTagValueScope(): void;
    get tagValueScopeInput(): string | undefined;
    private _triggerTypes;
    get triggerTypes(): string[];
    set triggerTypes(value: string[]);
    get triggerTypesInput(): string[];
    private _timeouts?;
    get timeouts(): ConfigOrganizationCustomRuleTimeouts;
    set timeouts(value: ConfigOrganizationCustomRuleTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): ConfigOrganizationCustomRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
