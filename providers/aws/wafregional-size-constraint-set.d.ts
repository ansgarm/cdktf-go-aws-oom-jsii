import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#name WafregionalSizeConstraintSet#name}.
     */
    readonly name: string;
    /**
     * size_constraints block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#size_constraints WafregionalSizeConstraintSet#size_constraints}
     */
    readonly sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
}
export interface WafregionalSizeConstraintSetSizeConstraintsFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#data WafregionalSizeConstraintSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#type WafregionalSizeConstraintSet#type}.
     */
    readonly type: string;
}
export interface WafregionalSizeConstraintSetSizeConstraints {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#comparison_operator WafregionalSizeConstraintSet#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#size WafregionalSizeConstraintSet#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#text_transformation WafregionalSizeConstraintSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#field_to_match WafregionalSizeConstraintSet#field_to_match}
     */
    readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set}.
 */
export declare class WafregionalSizeConstraintSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalSizeConstraintSetConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sizeConstraints?;
    get sizeConstraints(): WafregionalSizeConstraintSetSizeConstraints[];
    set sizeConstraints(value: WafregionalSizeConstraintSetSizeConstraints[]);
    resetSizeConstraints(): void;
    get sizeConstraintsInput(): WafregionalSizeConstraintSetSizeConstraints[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
