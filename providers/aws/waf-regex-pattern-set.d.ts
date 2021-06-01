import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafRegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html#name WafRegexPatternSet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html#regex_pattern_strings WafRegexPatternSet#regex_pattern_strings}.
     */
    readonly regexPatternStrings?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html aws_waf_regex_pattern_set}.
 */
export declare class WafRegexPatternSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html aws_waf_regex_pattern_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafRegexPatternSetConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _regexPatternStrings?;
    get regexPatternStrings(): string[];
    set regexPatternStrings(value: string[]);
    resetRegexPatternStrings(): void;
    get regexPatternStringsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
