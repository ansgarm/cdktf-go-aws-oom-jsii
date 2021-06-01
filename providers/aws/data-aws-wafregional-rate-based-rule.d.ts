import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWafregionalRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html#name DataAwsWafregionalRateBasedRule#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule}.
 */
export declare class DataAwsWafregionalRateBasedRule extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWafregionalRateBasedRuleConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
