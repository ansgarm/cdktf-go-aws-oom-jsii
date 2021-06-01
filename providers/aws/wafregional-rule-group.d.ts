import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#metric_name WafregionalRuleGroup#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#name WafregionalRuleGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#tags WafregionalRuleGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#tags_all WafregionalRuleGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * activated_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#activated_rule WafregionalRuleGroup#activated_rule}
     */
    readonly activatedRule?: WafregionalRuleGroupActivatedRule[];
}
export interface WafregionalRuleGroupActivatedRuleAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#type WafregionalRuleGroup#type}.
     */
    readonly type: string;
}
export interface WafregionalRuleGroupActivatedRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#priority WafregionalRuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#rule_id WafregionalRuleGroup#rule_id}.
     */
    readonly ruleId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#type WafregionalRuleGroup#type}.
     */
    readonly type?: string;
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#action WafregionalRuleGroup#action}
     */
    readonly action: WafregionalRuleGroupActivatedRuleAction[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group}.
 */
export declare class WafregionalRuleGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalRuleGroupConfig);
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
    get activatedRule(): WafregionalRuleGroupActivatedRule[];
    set activatedRule(value: WafregionalRuleGroupActivatedRule[]);
    resetActivatedRule(): void;
    get activatedRuleInput(): WafregionalRuleGroupActivatedRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
