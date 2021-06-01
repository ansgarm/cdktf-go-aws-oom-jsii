import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#html SesTemplate#html}.
     */
    readonly html?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#name SesTemplate#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#subject SesTemplate#subject}.
     */
    readonly subject?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html#text SesTemplate#text}.
     */
    readonly text?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html aws_ses_template}.
 */
export declare class SesTemplate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_template.html aws_ses_template} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesTemplateConfig);
    get arn(): string;
    private _html?;
    get html(): string;
    set html(value: string);
    resetHtml(): void;
    get htmlInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    resetSubject(): void;
    get subjectInput(): string | undefined;
    private _text?;
    get text(): string;
    set text(value: string);
    resetText(): void;
    get textInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
