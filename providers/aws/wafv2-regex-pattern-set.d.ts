import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#description Wafv2RegexPatternSet#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#name Wafv2RegexPatternSet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#scope Wafv2RegexPatternSet#scope}.
     */
    readonly scope: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#tags Wafv2RegexPatternSet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#tags_all Wafv2RegexPatternSet#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * regular_expression block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#regular_expression Wafv2RegexPatternSet#regular_expression}
     */
    readonly regularExpression?: Wafv2RegexPatternSetRegularExpression[];
}
export interface Wafv2RegexPatternSetRegularExpression {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#regex_string Wafv2RegexPatternSet#regex_string}.
     */
    readonly regexString: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set}.
 */
export declare class Wafv2RegexPatternSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lockToken(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scope;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _regularExpression?;
    get regularExpression(): Wafv2RegexPatternSetRegularExpression[];
    set regularExpression(value: Wafv2RegexPatternSetRegularExpression[]);
    resetRegularExpression(): void;
    get regularExpressionInput(): Wafv2RegexPatternSetRegularExpression[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
