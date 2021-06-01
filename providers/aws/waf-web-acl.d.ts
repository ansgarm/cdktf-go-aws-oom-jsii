import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#metric_name WafWebAcl#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#name WafWebAcl#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags WafWebAcl#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags_all WafWebAcl#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * default_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#default_action WafWebAcl#default_action}
     */
    readonly defaultAction: WafWebAclDefaultAction[];
    /**
     * logging_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#logging_configuration WafWebAcl#logging_configuration}
     */
    readonly loggingConfiguration?: WafWebAclLoggingConfiguration[];
    /**
     * rules block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rules WafWebAcl#rules}
     */
    readonly rules?: WafWebAclRules[];
}
export interface WafWebAclDefaultAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}.
     */
    readonly type: string;
}
export interface WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#data WafWebAcl#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}.
     */
    readonly type: string;
}
export interface WafWebAclLoggingConfigurationRedactedFields {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#field_to_match WafWebAcl#field_to_match}
     */
    readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}
export interface WafWebAclLoggingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#log_destination WafWebAcl#log_destination}.
     */
    readonly logDestination: string;
    /**
     * redacted_fields block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#redacted_fields WafWebAcl#redacted_fields}
     */
    readonly redactedFields?: WafWebAclLoggingConfigurationRedactedFields[];
}
export interface WafWebAclRulesAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}.
     */
    readonly type: string;
}
export interface WafWebAclRulesOverrideAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}.
     */
    readonly type: string;
}
export interface WafWebAclRules {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#priority WafWebAcl#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rule_id WafWebAcl#rule_id}.
     */
    readonly ruleId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}.
     */
    readonly type?: string;
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#action WafWebAcl#action}
     */
    readonly action?: WafWebAclRulesAction[];
    /**
     * override_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#override_action WafWebAcl#override_action}
     */
    readonly overrideAction?: WafWebAclRulesOverrideAction[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl}.
 */
export declare class WafWebAcl extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafWebAclConfig);
    get arn(): string;
    get id(): string;
    private _metricName;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string;
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
    private _defaultAction;
    get defaultAction(): WafWebAclDefaultAction[];
    set defaultAction(value: WafWebAclDefaultAction[]);
    get defaultActionInput(): WafWebAclDefaultAction[];
    private _loggingConfiguration?;
    get loggingConfiguration(): WafWebAclLoggingConfiguration[];
    set loggingConfiguration(value: WafWebAclLoggingConfiguration[]);
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): WafWebAclLoggingConfiguration[] | undefined;
    private _rules?;
    get rules(): WafWebAclRules[];
    set rules(value: WafWebAclRules[]);
    resetRules(): void;
    get rulesInput(): WafWebAclRules[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
