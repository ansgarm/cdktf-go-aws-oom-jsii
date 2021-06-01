import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLexBotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html#name DataAwsLexBot#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html#version DataAwsLexBot#version}.
     */
    readonly version?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot}.
 */
export declare class DataAwsLexBot extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLexBotConfig);
    get arn(): string;
    get checksum(): string;
    get childDirected(): boolean;
    get createdDate(): string;
    get description(): string;
    get detectSentiment(): boolean;
    get enableModelImprovements(): boolean;
    get failureReason(): string;
    get id(): string;
    get idleSessionTtlInSeconds(): number;
    get lastUpdatedDate(): string;
    get locale(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nluIntentConfidenceThreshold(): number;
    get status(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    get voiceId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
