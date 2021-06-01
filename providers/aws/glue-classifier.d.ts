import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#name GlueClassifier#name}.
     */
    readonly name: string;
    /**
     * csv_classifier block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#csv_classifier GlueClassifier#csv_classifier}
     */
    readonly csvClassifier?: GlueClassifierCsvClassifier[];
    /**
     * grok_classifier block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_classifier GlueClassifier#grok_classifier}
     */
    readonly grokClassifier?: GlueClassifierGrokClassifier[];
    /**
     * json_classifier block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_classifier GlueClassifier#json_classifier}
     */
    readonly jsonClassifier?: GlueClassifierJsonClassifier[];
    /**
     * xml_classifier block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#xml_classifier GlueClassifier#xml_classifier}
     */
    readonly xmlClassifier?: GlueClassifierXmlClassifier[];
}
export interface GlueClassifierCsvClassifier {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#allow_single_column GlueClassifier#allow_single_column}.
     */
    readonly allowSingleColumn?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#contains_header GlueClassifier#contains_header}.
     */
    readonly containsHeader?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#delimiter GlueClassifier#delimiter}.
     */
    readonly delimiter?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#disable_value_trimming GlueClassifier#disable_value_trimming}.
     */
    readonly disableValueTrimming?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#header GlueClassifier#header}.
     */
    readonly header?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#quote_symbol GlueClassifier#quote_symbol}.
     */
    readonly quoteSymbol?: string;
}
export interface GlueClassifierGrokClassifier {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}.
     */
    readonly classification: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#custom_patterns GlueClassifier#custom_patterns}.
     */
    readonly customPatterns?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_pattern GlueClassifier#grok_pattern}.
     */
    readonly grokPattern: string;
}
export interface GlueClassifierJsonClassifier {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_path GlueClassifier#json_path}.
     */
    readonly jsonPath: string;
}
export interface GlueClassifierXmlClassifier {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}.
     */
    readonly classification: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#row_tag GlueClassifier#row_tag}.
     */
    readonly rowTag: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}.
 */
export declare class GlueClassifier extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueClassifierConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _csvClassifier?;
    get csvClassifier(): GlueClassifierCsvClassifier[];
    set csvClassifier(value: GlueClassifierCsvClassifier[]);
    resetCsvClassifier(): void;
    get csvClassifierInput(): GlueClassifierCsvClassifier[] | undefined;
    private _grokClassifier?;
    get grokClassifier(): GlueClassifierGrokClassifier[];
    set grokClassifier(value: GlueClassifierGrokClassifier[]);
    resetGrokClassifier(): void;
    get grokClassifierInput(): GlueClassifierGrokClassifier[] | undefined;
    private _jsonClassifier?;
    get jsonClassifier(): GlueClassifierJsonClassifier[];
    set jsonClassifier(value: GlueClassifierJsonClassifier[]);
    resetJsonClassifier(): void;
    get jsonClassifierInput(): GlueClassifierJsonClassifier[] | undefined;
    private _xmlClassifier?;
    get xmlClassifier(): GlueClassifierXmlClassifier[];
    set xmlClassifier(value: GlueClassifierXmlClassifier[]);
    resetXmlClassifier(): void;
    get xmlClassifierInput(): GlueClassifierXmlClassifier[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
