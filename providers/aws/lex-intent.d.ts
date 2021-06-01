import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexIntentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#create_version LexIntent#create_version}.
     */
    readonly createVersion?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#description LexIntent#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#name LexIntent#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#parent_intent_signature LexIntent#parent_intent_signature}.
     */
    readonly parentIntentSignature?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#sample_utterances LexIntent#sample_utterances}.
     */
    readonly sampleUtterances?: string[];
    /**
     * conclusion_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#conclusion_statement LexIntent#conclusion_statement}
     */
    readonly conclusionStatement?: LexIntentConclusionStatement[];
    /**
     * confirmation_prompt block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#confirmation_prompt LexIntent#confirmation_prompt}
     */
    readonly confirmationPrompt?: LexIntentConfirmationPrompt[];
    /**
     * dialog_code_hook block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#dialog_code_hook LexIntent#dialog_code_hook}
     */
    readonly dialogCodeHook?: LexIntentDialogCodeHook[];
    /**
     * follow_up_prompt block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#follow_up_prompt LexIntent#follow_up_prompt}
     */
    readonly followUpPrompt?: LexIntentFollowUpPrompt[];
    /**
     * fulfillment_activity block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#fulfillment_activity LexIntent#fulfillment_activity}
     */
    readonly fulfillmentActivity: LexIntentFulfillmentActivity[];
    /**
     * rejection_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
     */
    readonly rejectionStatement?: LexIntentRejectionStatement[];
    /**
     * slot block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot LexIntent#slot}
     */
    readonly slot?: LexIntentSlot[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#timeouts LexIntent#timeouts}
     */
    readonly timeouts?: LexIntentTimeouts;
}
export interface LexIntentConclusionStatementMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexIntentConclusionStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
     */
    readonly message: LexIntentConclusionStatementMessage[];
}
export interface LexIntentConfirmationPromptMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexIntentConfirmationPrompt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}.
     */
    readonly maxAttempts: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
     */
    readonly message: LexIntentConfirmationPromptMessage[];
}
export interface LexIntentDialogCodeHook {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message_version LexIntent#message_version}.
     */
    readonly messageVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#uri LexIntent#uri}.
     */
    readonly uri: string;
}
export interface LexIntentFollowUpPromptPromptMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexIntentFollowUpPromptPrompt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}.
     */
    readonly maxAttempts: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
     */
    readonly message: LexIntentFollowUpPromptPromptMessage[];
}
export interface LexIntentFollowUpPromptRejectionStatementMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexIntentFollowUpPromptRejectionStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
     */
    readonly message: LexIntentFollowUpPromptRejectionStatementMessage[];
}
export interface LexIntentFollowUpPrompt {
    /**
     * prompt block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#prompt LexIntent#prompt}
     */
    readonly prompt: LexIntentFollowUpPromptPrompt[];
    /**
     * rejection_statement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
     */
    readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement[];
}
export interface LexIntentFulfillmentActivityCodeHook {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message_version LexIntent#message_version}.
     */
    readonly messageVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#uri LexIntent#uri}.
     */
    readonly uri: string;
}
export interface LexIntentFulfillmentActivity {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#type LexIntent#type}.
     */
    readonly type: string;
    /**
     * code_hook block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#code_hook LexIntent#code_hook}
     */
    readonly codeHook?: LexIntentFulfillmentActivityCodeHook[];
}
export interface LexIntentRejectionStatementMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexIntentRejectionStatement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
     */
    readonly message: LexIntentRejectionStatementMessage[];
}
export interface LexIntentSlotValueElicitationPromptMessage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}.
     */
    readonly content: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}.
     */
    readonly groupNumber?: number;
}
export interface LexIntentSlotValueElicitationPrompt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}.
     */
    readonly maxAttempts: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}.
     */
    readonly responseCard?: string;
    /**
     * message block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
     */
    readonly message: LexIntentSlotValueElicitationPromptMessage[];
}
export interface LexIntentSlot {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#description LexIntent#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#name LexIntent#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#priority LexIntent#priority}.
     */
    readonly priority?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}.
     */
    readonly responseCard?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#sample_utterances LexIntent#sample_utterances}.
     */
    readonly sampleUtterances?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_constraint LexIntent#slot_constraint}.
     */
    readonly slotConstraint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_type LexIntent#slot_type}.
     */
    readonly slotType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_type_version LexIntent#slot_type_version}.
     */
    readonly slotTypeVersion?: string;
    /**
     * value_elicitation_prompt block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#value_elicitation_prompt LexIntent#value_elicitation_prompt}
     */
    readonly valueElicitationPrompt?: LexIntentSlotValueElicitationPrompt[];
}
export interface LexIntentTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#create LexIntent#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#delete LexIntent#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#update LexIntent#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent}.
 */
export declare class LexIntent extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LexIntentConfig);
    get arn(): string;
    get checksum(): string;
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
    get id(): string;
    get lastUpdatedDate(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentIntentSignature?;
    get parentIntentSignature(): string;
    set parentIntentSignature(value: string);
    resetParentIntentSignature(): void;
    get parentIntentSignatureInput(): string | undefined;
    private _sampleUtterances?;
    get sampleUtterances(): string[];
    set sampleUtterances(value: string[]);
    resetSampleUtterances(): void;
    get sampleUtterancesInput(): string[] | undefined;
    get version(): string;
    private _conclusionStatement?;
    get conclusionStatement(): LexIntentConclusionStatement[];
    set conclusionStatement(value: LexIntentConclusionStatement[]);
    resetConclusionStatement(): void;
    get conclusionStatementInput(): LexIntentConclusionStatement[] | undefined;
    private _confirmationPrompt?;
    get confirmationPrompt(): LexIntentConfirmationPrompt[];
    set confirmationPrompt(value: LexIntentConfirmationPrompt[]);
    resetConfirmationPrompt(): void;
    get confirmationPromptInput(): LexIntentConfirmationPrompt[] | undefined;
    private _dialogCodeHook?;
    get dialogCodeHook(): LexIntentDialogCodeHook[];
    set dialogCodeHook(value: LexIntentDialogCodeHook[]);
    resetDialogCodeHook(): void;
    get dialogCodeHookInput(): LexIntentDialogCodeHook[] | undefined;
    private _followUpPrompt?;
    get followUpPrompt(): LexIntentFollowUpPrompt[];
    set followUpPrompt(value: LexIntentFollowUpPrompt[]);
    resetFollowUpPrompt(): void;
    get followUpPromptInput(): LexIntentFollowUpPrompt[] | undefined;
    private _fulfillmentActivity;
    get fulfillmentActivity(): LexIntentFulfillmentActivity[];
    set fulfillmentActivity(value: LexIntentFulfillmentActivity[]);
    get fulfillmentActivityInput(): LexIntentFulfillmentActivity[];
    private _rejectionStatement?;
    get rejectionStatement(): LexIntentRejectionStatement[];
    set rejectionStatement(value: LexIntentRejectionStatement[]);
    resetRejectionStatement(): void;
    get rejectionStatementInput(): LexIntentRejectionStatement[] | undefined;
    private _slot?;
    get slot(): LexIntentSlot[];
    set slot(value: LexIntentSlot[]);
    resetSlot(): void;
    get slotInput(): LexIntentSlot[] | undefined;
    private _timeouts?;
    get timeouts(): LexIntentTimeouts;
    set timeouts(value: LexIntentTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LexIntentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
