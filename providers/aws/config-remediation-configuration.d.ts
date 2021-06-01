import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#config_rule_name ConfigRemediationConfiguration#config_rule_name}.
     */
    readonly configRuleName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_type ConfigRemediationConfiguration#resource_type}.
     */
    readonly resourceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_id ConfigRemediationConfiguration#target_id}.
     */
    readonly targetId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_type ConfigRemediationConfiguration#target_type}.
     */
    readonly targetType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_version ConfigRemediationConfiguration#target_version}.
     */
    readonly targetVersion?: string;
    /**
     * parameter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#parameter ConfigRemediationConfiguration#parameter}
     */
    readonly parameter?: ConfigRemediationConfigurationParameter[];
}
export interface ConfigRemediationConfigurationParameter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#name ConfigRemediationConfiguration#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_value ConfigRemediationConfiguration#resource_value}.
     */
    readonly resourceValue?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#static_value ConfigRemediationConfiguration#static_value}.
     */
    readonly staticValue?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration}.
 */
export declare class ConfigRemediationConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig);
    get arn(): string;
    private _configRuleName;
    get configRuleName(): string;
    set configRuleName(value: string);
    get configRuleNameInput(): string;
    get id(): string;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string | undefined;
    private _targetId;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string;
    private _targetType;
    get targetType(): string;
    set targetType(value: string);
    get targetTypeInput(): string;
    private _targetVersion?;
    get targetVersion(): string;
    set targetVersion(value: string);
    resetTargetVersion(): void;
    get targetVersionInput(): string | undefined;
    private _parameter?;
    get parameter(): ConfigRemediationConfigurationParameter[];
    set parameter(value: ConfigRemediationConfigurationParameter[]);
    resetParameter(): void;
    get parameterInput(): ConfigRemediationConfigurationParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
