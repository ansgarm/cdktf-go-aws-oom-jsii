import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#metric_name WafregionalRateBasedRule#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#name WafregionalRateBasedRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#rate_key WafregionalRateBasedRule#rate_key}.
     */
    readonly rateKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#rate_limit WafregionalRateBasedRule#rate_limit}.
     */
    readonly rateLimit: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#tags WafregionalRateBasedRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#tags_all WafregionalRateBasedRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * predicate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#predicate WafregionalRateBasedRule#predicate}
     */
    readonly predicate?: WafregionalRateBasedRulePredicate[];
}
export interface WafregionalRateBasedRulePredicate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#data_id WafregionalRateBasedRule#data_id}.
     */
    readonly dataId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#negated WafregionalRateBasedRule#negated}.
     */
    readonly negated: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#type WafregionalRateBasedRule#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule}.
 */
export declare class WafregionalRateBasedRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalRateBasedRuleConfig);
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
    private _rateKey;
    get rateKey(): string;
    set rateKey(value: string);
    get rateKeyInput(): string;
    private _rateLimit;
    get rateLimit(): number;
    set rateLimit(value: number);
    get rateLimitInput(): number;
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
    private _predicate?;
    get predicate(): WafregionalRateBasedRulePredicate[];
    set predicate(value: WafregionalRateBasedRulePredicate[]);
    resetPredicate(): void;
    get predicateInput(): WafregionalRateBasedRulePredicate[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
