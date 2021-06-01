import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalXssMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#name WafregionalXssMatchSet#name}.
     */
    readonly name: string;
    /**
     * xss_match_tuple block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}
     */
    readonly xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
}
export interface WafregionalXssMatchSetXssMatchTupleFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#data WafregionalXssMatchSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#type WafregionalXssMatchSet#type}.
     */
    readonly type: string;
}
export interface WafregionalXssMatchSetXssMatchTuple {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#text_transformation WafregionalXssMatchSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#field_to_match WafregionalXssMatchSet#field_to_match}
     */
    readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set}.
 */
export declare class WafregionalXssMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalXssMatchSetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _xssMatchTuple?;
    get xssMatchTuple(): WafregionalXssMatchSetXssMatchTuple[];
    set xssMatchTuple(value: WafregionalXssMatchSetXssMatchTuple[]);
    resetXssMatchTuple(): void;
    get xssMatchTupleInput(): WafregionalXssMatchSetXssMatchTuple[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
