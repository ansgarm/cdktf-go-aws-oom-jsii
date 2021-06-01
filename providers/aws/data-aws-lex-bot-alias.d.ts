import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLexBotAliasConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html#bot_name DataAwsLexBotAlias#bot_name}.
     */
    readonly botName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html#name DataAwsLexBotAlias#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html aws_lex_bot_alias}.
 */
export declare class DataAwsLexBotAlias extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html aws_lex_bot_alias} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLexBotAliasConfig);
    get arn(): string;
    private _botName;
    get botName(): string;
    set botName(value: string);
    get botNameInput(): string;
    get botVersion(): string;
    get checksum(): string;
    get createdDate(): string;
    get description(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
