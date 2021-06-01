import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLexIntentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html#name DataAwsLexIntent#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html#version DataAwsLexIntent#version}.
     */
    readonly version?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html aws_lex_intent}.
 */
export declare class DataAwsLexIntent extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_intent.html aws_lex_intent} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLexIntentConfig);
    get arn(): string;
    get checksum(): string;
    get createdDate(): string;
    get description(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get parentIntentSignature(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
