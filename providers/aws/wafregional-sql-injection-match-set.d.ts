import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#name WafregionalSqlInjectionMatchSet#name}.
     */
    readonly name: string;
    /**
     * sql_injection_match_tuple block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}
     */
    readonly sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#data WafregionalSqlInjectionMatchSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#type WafregionalSqlInjectionMatchSet#type}.
     */
    readonly type: string;
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}
     */
    readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set}.
 */
export declare class WafregionalSqlInjectionMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalSqlInjectionMatchSetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sqlInjectionMatchTuple?;
    get sqlInjectionMatchTuple(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
    set sqlInjectionMatchTuple(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[]);
    resetSqlInjectionMatchTuple(): void;
    get sqlInjectionMatchTupleInput(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
