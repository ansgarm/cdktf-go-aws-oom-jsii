import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#metric_name WafRateBasedRule#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#name WafRateBasedRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#rate_key WafRateBasedRule#rate_key}.
     */
    readonly rateKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#rate_limit WafRateBasedRule#rate_limit}.
     */
    readonly rateLimit: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#tags WafRateBasedRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#tags_all WafRateBasedRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * predicates block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#predicates WafRateBasedRule#predicates}
     */
    readonly predicates?: WafRateBasedRulePredicates[];
}
export interface WafRateBasedRulePredicates {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#data_id WafRateBasedRule#data_id}.
     */
    readonly dataId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#negated WafRateBasedRule#negated}.
     */
    readonly negated: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html#type WafRateBasedRule#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html aws_waf_rate_based_rule}.
 */
export declare class WafRateBasedRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html aws_waf_rate_based_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafRateBasedRuleConfig);
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
    private _predicates?;
    get predicates(): WafRateBasedRulePredicates[];
    set predicates(value: WafRateBasedRulePredicates[]);
    resetPredicates(): void;
    get predicatesInput(): WafRateBasedRulePredicates[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
