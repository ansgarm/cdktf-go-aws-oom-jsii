import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#name WafByteMatchSet#name}.
     */
    readonly name: string;
    /**
     * byte_match_tuples block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#byte_match_tuples WafByteMatchSet#byte_match_tuples}
     */
    readonly byteMatchTuples?: WafByteMatchSetByteMatchTuples[];
}
export interface WafByteMatchSetByteMatchTuplesFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#data WafByteMatchSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#type WafByteMatchSet#type}.
     */
    readonly type: string;
}
export interface WafByteMatchSetByteMatchTuples {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#positional_constraint WafByteMatchSet#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#target_string WafByteMatchSet#target_string}.
     */
    readonly targetString?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#text_transformation WafByteMatchSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html#field_to_match WafByteMatchSet#field_to_match}
     */
    readonly fieldToMatch: WafByteMatchSetByteMatchTuplesFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set}.
 */
export declare class WafByteMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafByteMatchSetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _byteMatchTuples?;
    get byteMatchTuples(): WafByteMatchSetByteMatchTuples[];
    set byteMatchTuples(value: WafByteMatchSetByteMatchTuples[]);
    resetByteMatchTuples(): void;
    get byteMatchTuplesInput(): WafByteMatchSetByteMatchTuples[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
