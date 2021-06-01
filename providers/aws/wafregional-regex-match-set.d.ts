import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#name WafregionalRegexMatchSet#name}.
     */
    readonly name: string;
    /**
     * regex_match_tuple block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}
     */
    readonly regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[];
}
export interface WafregionalRegexMatchSetRegexMatchTupleFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#data WafregionalRegexMatchSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#type WafregionalRegexMatchSet#type}.
     */
    readonly type: string;
}
export interface WafregionalRegexMatchSetRegexMatchTuple {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}.
     */
    readonly regexPatternSetId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#text_transformation WafregionalRegexMatchSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#field_to_match WafregionalRegexMatchSet#field_to_match}
     */
    readonly fieldToMatch: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set}.
 */
export declare class WafregionalRegexMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalRegexMatchSetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _regexMatchTuple?;
    get regexMatchTuple(): WafregionalRegexMatchSetRegexMatchTuple[];
    set regexMatchTuple(value: WafregionalRegexMatchSetRegexMatchTuple[]);
    resetRegexMatchTuple(): void;
    get regexMatchTupleInput(): WafregionalRegexMatchSetRegexMatchTuple[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
