import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexBotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#child_directed LexBot#child_directed}.
     */
    readonly childDirected: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#create_version LexBot#create_version}.
     */
    readonly createVersion?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#description LexBot#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#detect_sentiment LexBot#detect_sentiment}.
     */
    readonly detectSentiment?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#enable_model_improvements LexBot#enable_model_improvements}.
     */
    readonly enableModelImprovements?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}.
     */
    readonly idleSessionTtlInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#locale LexBot#locale}.
     */
    readonly locale?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#name LexBot#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}.
     */
    readonly nluIntentConfidenceThreshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#process_behavior LexBot#process_behavior}.
     */
    readonly processBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#voice_id LexBot#voice_id}.
     */
    readonly voiceId?: string;
    /**
     * abort_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#abort_statement LexBot#abort_statement}
     */
    readonly abortStatement: LexBotAbortStatement[];
    /**
     * clarification_prompt block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#clarification_prompt LexBot#clarification_prompt}
     */
    readonly clarificationPrompt?: LexBotClarificationPrompt[];
    /**
     * intent block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent LexBot#intent}
     */
    readonly intent: LexBotIntent[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#timeouts LexBot#timeouts}
     */
    readonly timeouts?: LexBotTimeouts;
}
export interface LexBotAbortStatementMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content LexBot#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content_type LexBot#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#group_number LexBot#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexBotAbortStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#response_card LexBot#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#message LexBot#message}
     */
    readonly message: LexBotAbortStatementMessage[];
}
export interface LexBotClarificationPromptMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content LexBot#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content_type LexBot#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#group_number LexBot#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexBotClarificationPrompt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#max_attempts LexBot#max_attempts}.
     */
    readonly maxAttempts: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#response_card LexBot#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#message LexBot#message}
     */
    readonly message: LexBotClarificationPromptMessage[];
}
export interface LexBotIntent {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent_name LexBot#intent_name}.
     */
    readonly intentName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent_version LexBot#intent_version}.
     */
    readonly intentVersion: string;
}
export interface LexBotTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#create LexBot#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#delete LexBot#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#update LexBot#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot}.
 */
export declare class LexBot extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LexBotConfig);
    get arn(): string;
    get checksum(): string;
    private _childDirected;
    get childDirected(): boolean;
    set childDirected(value: boolean);
    get childDirectedInput(): boolean;
    private _createVersion?;
    get createVersion(): boolean;
    set createVersion(value: boolean);
    resetCreateVersion(): void;
    get createVersionInput(): boolean | undefined;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _detectSentiment?;
    get detectSentiment(): boolean;
    set detectSentiment(value: boolean);
    resetDetectSentiment(): void;
    get detectSentimentInput(): boolean | undefined;
    private _enableModelImprovements?;
    get enableModelImprovements(): boolean;
    set enableModelImprovements(value: boolean);
    resetEnableModelImprovements(): void;
    get enableModelImprovementsInput(): boolean | undefined;
    get failureReason(): string;
    get id(): string;
    private _idleSessionTtlInSeconds?;
    get idleSessionTtlInSeconds(): number;
    set idleSessionTtlInSeconds(value: number);
    resetIdleSessionTtlInSeconds(): void;
    get idleSessionTtlInSecondsInput(): number | undefined;
    get lastUpdatedDate(): string;
    private _locale?;
    get locale(): string;
    set locale(value: string);
    resetLocale(): void;
    get localeInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _nluIntentConfidenceThreshold?;
    get nluIntentConfidenceThreshold(): number;
    set nluIntentConfidenceThreshold(value: number);
    resetNluIntentConfidenceThreshold(): void;
    get nluIntentConfidenceThresholdInput(): number | undefined;
    private _processBehavior?;
    get processBehavior(): string;
    set processBehavior(value: string);
    resetProcessBehavior(): void;
    get processBehaviorInput(): string | undefined;
    get status(): string;
    get version(): string;
    private _voiceId?;
    get voiceId(): string;
    set voiceId(value: string);
    resetVoiceId(): void;
    get voiceIdInput(): string | undefined;
    private _abortStatement;
    get abortStatement(): LexBotAbortStatement[];
    set abortStatement(value: LexBotAbortStatement[]);
    get abortStatementInput(): LexBotAbortStatement[];
    private _clarificationPrompt?;
    get clarificationPrompt(): LexBotClarificationPrompt[];
    set clarificationPrompt(value: LexBotClarificationPrompt[]);
    resetClarificationPrompt(): void;
    get clarificationPromptInput(): LexBotClarificationPrompt[] | undefined;
    private _intent;
    get intent(): LexBotIntent[];
    set intent(value: LexBotIntent[]);
    get intentInput(): LexBotIntent[];
    private _timeouts?;
    get timeouts(): LexBotTimeouts;
    set timeouts(value: LexBotTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LexBotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
