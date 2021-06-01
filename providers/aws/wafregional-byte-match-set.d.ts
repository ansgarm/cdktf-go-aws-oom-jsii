import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#name WafregionalByteMatchSet#name}.
     */
    readonly name: string;
    /**
     * byte_match_tuples block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}
     */
    readonly byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
}
export interface WafregionalByteMatchSetByteMatchTuplesFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#data WafregionalByteMatchSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#type WafregionalByteMatchSet#type}.
     */
    readonly type: string;
}
export interface WafregionalByteMatchSetByteMatchTuples {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#positional_constraint WafregionalByteMatchSet#positional_constraint}.
     */
    readonly positionalConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#target_string WafregionalByteMatchSet#target_string}.
     */
    readonly targetString?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#text_transformation WafregionalByteMatchSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#field_to_match WafregionalByteMatchSet#field_to_match}
     */
    readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set}.
 */
export declare class WafregionalByteMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalByteMatchSetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _byteMatchTuples?;
    get byteMatchTuples(): WafregionalByteMatchSetByteMatchTuples[];
    set byteMatchTuples(value: WafregionalByteMatchSetByteMatchTuples[]);
    resetByteMatchTuples(): void;
    get byteMatchTuplesInput(): WafregionalByteMatchSetByteMatchTuples[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
