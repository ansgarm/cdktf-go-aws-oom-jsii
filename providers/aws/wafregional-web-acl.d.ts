import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#metric_name WafregionalWebAcl#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#name WafregionalWebAcl#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags WafregionalWebAcl#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags_all WafregionalWebAcl#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * default_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#default_action WafregionalWebAcl#default_action}
     */
    readonly defaultAction: WafregionalWebAclDefaultAction[];
    /**
     * logging_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#logging_configuration WafregionalWebAcl#logging_configuration}
     */
    readonly loggingConfiguration?: WafregionalWebAclLoggingConfiguration[];
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule WafregionalWebAcl#rule}
     */
    readonly rule?: WafregionalWebAclRule[];
}
export interface WafregionalWebAclDefaultAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}.
     */
    readonly type: string;
}
export interface WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#data WafregionalWebAcl#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}.
     */
    readonly type: string;
}
export interface WafregionalWebAclLoggingConfigurationRedactedFields {
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#field_to_match WafregionalWebAcl#field_to_match}
     */
    readonly fieldToMatch: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}
export interface WafregionalWebAclLoggingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#log_destination WafregionalWebAcl#log_destination}.
     */
    readonly logDestination: string;
    /**
     * redacted_fields block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#redacted_fields WafregionalWebAcl#redacted_fields}
     */
    readonly redactedFields?: WafregionalWebAclLoggingConfigurationRedactedFields[];
}
export interface WafregionalWebAclRuleAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}.
     */
    readonly type: string;
}
export interface WafregionalWebAclRuleOverrideAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}.
     */
    readonly type: string;
}
export interface WafregionalWebAclRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#priority WafregionalWebAcl#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule_id WafregionalWebAcl#rule_id}.
     */
    readonly ruleId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}.
     */
    readonly type?: string;
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#action WafregionalWebAcl#action}
     */
    readonly action?: WafregionalWebAclRuleAction[];
    /**
     * override_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#override_action WafregionalWebAcl#override_action}
     */
    readonly overrideAction?: WafregionalWebAclRuleOverrideAction[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl}.
 */
export declare class WafregionalWebAcl extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalWebAclConfig);
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
    get defaultAction(): WafregionalWebAclDefaultAction[];
    set defaultAction(value: WafregionalWebAclDefaultAction[]);
    get defaultActionInput(): WafregionalWebAclDefaultAction[];
    private _loggingConfiguration?;
    get loggingConfiguration(): WafregionalWebAclLoggingConfiguration[];
    set loggingConfiguration(value: WafregionalWebAclLoggingConfiguration[]);
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): WafregionalWebAclLoggingConfiguration[] | undefined;
    private _rule?;
    get rule(): WafregionalWebAclRule[];
    set rule(value: WafregionalWebAclRule[]);
    resetRule(): void;
    get ruleInput(): WafregionalWebAclRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
