import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#metric_name WafRuleGroup#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#name WafRuleGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags WafRuleGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags_all WafRuleGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * activated_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#activated_rule WafRuleGroup#activated_rule}
     */
    readonly activatedRule?: WafRuleGroupActivatedRule[];
}
export interface WafRuleGroupActivatedRuleAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}.
     */
    readonly type: string;
}
export interface WafRuleGroupActivatedRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#priority WafRuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#rule_id WafRuleGroup#rule_id}.
     */
    readonly ruleId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}.
     */
    readonly type?: string;
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#action WafRuleGroup#action}
     */
    readonly action: WafRuleGroupActivatedRuleAction[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group}.
 */
export declare class WafRuleGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafRuleGroupConfig);
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
    private _activatedRule?;
    get activatedRule(): WafRuleGroupActivatedRule[];
    set activatedRule(value: WafRuleGroupActivatedRule[]);
    resetActivatedRule(): void;
    get activatedRuleInput(): WafRuleGroupActivatedRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
