import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexBotAliasConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_name LexBotAlias#bot_name}.
     */
    readonly botName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_version LexBotAlias#bot_version}.
     */
    readonly botVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#description LexBotAlias#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#name LexBotAlias#name}.
     */
    readonly name: string;
    /**
     * conversation_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#conversation_logs LexBotAlias#conversation_logs}
     */
    readonly conversationLogs?: LexBotAliasConversationLogs[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#timeouts LexBotAlias#timeouts}
     */
    readonly timeouts?: LexBotAliasTimeouts;
}
export interface LexBotAliasConversationLogsLogSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#destination LexBotAlias#destination}.
     */
    readonly destination: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#kms_key_arn LexBotAlias#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_type LexBotAlias#log_type}.
     */
    readonly logType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#resource_arn LexBotAlias#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface LexBotAliasConversationLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#iam_role_arn LexBotAlias#iam_role_arn}.
     */
    readonly iamRoleArn: string;
    /**
     * log_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_settings LexBotAlias#log_settings}
     */
    readonly logSettings?: LexBotAliasConversationLogsLogSettings[];
}
export interface LexBotAliasTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#create LexBotAlias#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#delete LexBotAlias#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#update LexBotAlias#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias}.
 */
export declare class LexBotAlias extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LexBotAliasConfig);
    get arn(): string;
    private _botName;
    get botName(): string;
    set botName(value: string);
    get botNameInput(): string;
    private _botVersion;
    get botVersion(): string;
    set botVersion(value: string);
    get botVersionInput(): string;
    get checksum(): string;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lastUpdatedDate(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _conversationLogs?;
    get conversationLogs(): LexBotAliasConversationLogs[];
    set conversationLogs(value: LexBotAliasConversationLogs[]);
    resetConversationLogs(): void;
    get conversationLogsInput(): LexBotAliasConversationLogs[] | undefined;
    private _timeouts?;
    get timeouts(): LexBotAliasTimeouts;
    set timeouts(value: LexBotAliasTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LexBotAliasTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
