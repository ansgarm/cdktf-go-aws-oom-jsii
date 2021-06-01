import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2CustomDataIdentifierConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#description Macie2CustomDataIdentifier#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#ignore_words Macie2CustomDataIdentifier#ignore_words}.
     */
    readonly ignoreWords?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#keywords Macie2CustomDataIdentifier#keywords}.
     */
    readonly keywords?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}.
     */
    readonly maximumMatchDistance?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#name Macie2CustomDataIdentifier#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#name_prefix Macie2CustomDataIdentifier#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#regex Macie2CustomDataIdentifier#regex}.
     */
    readonly regex?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#tags Macie2CustomDataIdentifier#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#tags_all Macie2CustomDataIdentifier#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier}.
 */
export declare class Macie2CustomDataIdentifier extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: Macie2CustomDataIdentifierConfig);
    get arn(): string;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _ignoreWords?;
    get ignoreWords(): string[];
    set ignoreWords(value: string[]);
    resetIgnoreWords(): void;
    get ignoreWordsInput(): string[] | undefined;
    private _keywords?;
    get keywords(): string[];
    set keywords(value: string[]);
    resetKeywords(): void;
    get keywordsInput(): string[] | undefined;
    private _maximumMatchDistance?;
    get maximumMatchDistance(): number;
    set maximumMatchDistance(value: number);
    resetMaximumMatchDistance(): void;
    get maximumMatchDistanceInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
