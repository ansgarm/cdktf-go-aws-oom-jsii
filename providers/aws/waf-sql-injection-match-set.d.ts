import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#name WafSqlInjectionMatchSet#name}.
     */
    readonly name: string;
    /**
     * sql_injection_match_tuples block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}
     */
    readonly sqlInjectionMatchTuples?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
}
export interface WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#data WafSqlInjectionMatchSet#data}.
     */
    readonly data?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#type WafSqlInjectionMatchSet#type}.
     */
    readonly type: string;
}
export interface WafSqlInjectionMatchSetSqlInjectionMatchTuples {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#text_transformation WafSqlInjectionMatchSet#text_transformation}.
     */
    readonly textTransformation: string;
    /**
     * field_to_match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html#field_to_match WafSqlInjectionMatchSet#field_to_match}
     */
    readonly fieldToMatch: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html aws_waf_sql_injection_match_set}.
 */
export declare class WafSqlInjectionMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html aws_waf_sql_injection_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafSqlInjectionMatchSetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sqlInjectionMatchTuples?;
    get sqlInjectionMatchTuples(): WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
    set sqlInjectionMatchTuples(value: WafSqlInjectionMatchSetSqlInjectionMatchTuples[]);
    resetSqlInjectionMatchTuples(): void;
    get sqlInjectionMatchTuplesInput(): WafSqlInjectionMatchSetSqlInjectionMatchTuples[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
