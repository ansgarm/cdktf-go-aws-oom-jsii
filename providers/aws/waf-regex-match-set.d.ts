import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#name WafRegexMatchSet#name}.
     */
    readonly name: string;
    /**
     * regex_match_tuple block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_match_tuple WafRegexMatchSet#regex_match_tuple}
     */
    readonly regexMatchTuple?: WafRegexMatchSetRegexMatchTuple[];
}
export interface WafRegexMatchSetRegexMatchTupleFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#data WafRegexMatchSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#type WafRegexMatchSet#type}.
     */
    readonly type: string;
}
export interface WafRegexMatchSetRegexMatchTuple {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}.
     */
    readonly regexPatternSetId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#text_transformation WafRegexMatchSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#field_to_match WafRegexMatchSet#field_to_match}
     */
    readonly fieldToMatch: WafRegexMatchSetRegexMatchTupleFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set}.
 */
export declare class WafRegexMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafRegexMatchSetConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _regexMatchTuple?;
    get regexMatchTuple(): WafRegexMatchSetRegexMatchTuple[];
    set regexMatchTuple(value: WafRegexMatchSetRegexMatchTuple[]);
    resetRegexMatchTuple(): void;
    get regexMatchTupleInput(): WafRegexMatchSetRegexMatchTuple[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
