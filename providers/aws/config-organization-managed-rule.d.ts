import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigOrganizationManagedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#description ConfigOrganizationManagedRule#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}.
     */
    readonly excludedAccounts?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#input_parameters ConfigOrganizationManagedRule#input_parameters}.
     */
    readonly inputParameters?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}.
     */
    readonly maximumExecutionFrequency?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#name ConfigOrganizationManagedRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}.
     */
    readonly resourceIdScope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}.
     */
    readonly resourceTypesScope?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#rule_identifier ConfigOrganizationManagedRule#rule_identifier}.
     */
    readonly ruleIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}.
     */
    readonly tagKeyScope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}.
     */
    readonly tagValueScope?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#timeouts ConfigOrganizationManagedRule#timeouts}
     */
    readonly timeouts?: ConfigOrganizationManagedRuleTimeouts;
}
export interface ConfigOrganizationManagedRuleTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#create ConfigOrganizationManagedRule#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#delete ConfigOrganizationManagedRule#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#update ConfigOrganizationManagedRule#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule}.
 */
export declare class ConfigOrganizationManagedRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigOrganizationManagedRuleConfig);
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
    private _ruleIdentifier;
    get ruleIdentifier(): string;
    set ruleIdentifier(value: string);
    get ruleIdentifierInput(): string;
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
    private _timeouts?;
    get timeouts(): ConfigOrganizationManagedRuleTimeouts;
    set timeouts(value: ConfigOrganizationManagedRuleTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): ConfigOrganizationManagedRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
