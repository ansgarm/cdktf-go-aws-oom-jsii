import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set.html#name DataAwsWafv2RegexPatternSet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set.html#scope DataAwsWafv2RegexPatternSet#scope}.
     */
    readonly scope: string;
}
export declare class DataAwsWafv2RegexPatternSetRegularExpression extends cdktf.ComplexComputedList {
    get regexString(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set}.
 */
export declare class DataAwsWafv2RegexPatternSet extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWafv2RegexPatternSetConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    regularExpression(index: string): DataAwsWafv2RegexPatternSetRegularExpression;
    private _scope;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
