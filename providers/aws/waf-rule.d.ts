import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#metric_name WafRule#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#name WafRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#tags WafRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#tags_all WafRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * predicates block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#predicates WafRule#predicates}
     */
    readonly predicates?: WafRulePredicates[];
}
export interface WafRulePredicates {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#data_id WafRule#data_id}.
     */
    readonly dataId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#negated WafRule#negated}.
     */
    readonly negated: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html#type WafRule#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html aws_waf_rule}.
 */
export declare class WafRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rule.html aws_waf_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafRuleConfig);
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
    private _predicates?;
    get predicates(): WafRulePredicates[];
    set predicates(value: WafRulePredicates[]);
    resetPredicates(): void;
    get predicatesInput(): WafRulePredicates[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
