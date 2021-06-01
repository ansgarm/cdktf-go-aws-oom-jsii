"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexIntent = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function lexIntentConclusionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
function lexIntentConclusionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentConclusionStatementMessageToTerraform)(struct.message),
    };
}
function lexIntentConfirmationPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
function lexIntentConfirmationPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentConfirmationPromptMessageToTerraform)(struct.message),
    };
}
function lexIntentDialogCodeHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_version: cdktf.stringToTerraform(struct.messageVersion),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
function lexIntentFollowUpPromptPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
function lexIntentFollowUpPromptPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentFollowUpPromptPromptMessageToTerraform)(struct.message),
    };
}
function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
function lexIntentFollowUpPromptRejectionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementMessageToTerraform)(struct.message),
    };
}
function lexIntentFollowUpPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prompt: cdktf.listMapper(lexIntentFollowUpPromptPromptToTerraform)(struct.prompt),
        rejection_statement: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementToTerraform)(struct.rejectionStatement),
    };
}
function lexIntentFulfillmentActivityCodeHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_version: cdktf.stringToTerraform(struct.messageVersion),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
function lexIntentFulfillmentActivityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        code_hook: cdktf.listMapper(lexIntentFulfillmentActivityCodeHookToTerraform)(struct.codeHook),
    };
}
function lexIntentRejectionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
function lexIntentRejectionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentRejectionStatementMessageToTerraform)(struct.message),
    };
}
function lexIntentSlotValueElicitationPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
function lexIntentSlotValueElicitationPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentSlotValueElicitationPromptMessageToTerraform)(struct.message),
    };
}
function lexIntentSlotToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(struct.sampleUtterances),
        slot_constraint: cdktf.stringToTerraform(struct.slotConstraint),
        slot_type: cdktf.stringToTerraform(struct.slotType),
        slot_type_version: cdktf.stringToTerraform(struct.slotTypeVersion),
        value_elicitation_prompt: cdktf.listMapper(lexIntentSlotValueElicitationPromptToTerraform)(struct.valueElicitationPrompt),
    };
}
function lexIntentTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent}.
 */
class LexIntent extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lex_intent',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._createVersion = config.createVersion;
        this._description = config.description;
        this._name = config.name;
        this._parentIntentSignature = config.parentIntentSignature;
        this._sampleUtterances = config.sampleUtterances;
        this._conclusionStatement = config.conclusionStatement;
        this._confirmationPrompt = config.confirmationPrompt;
        this._dialogCodeHook = config.dialogCodeHook;
        this._followUpPrompt = config.followUpPrompt;
        this._fulfillmentActivity = config.fulfillmentActivity;
        this._rejectionStatement = config.rejectionStatement;
        this._slot = config.slot;
        this._timeouts = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // checksum - computed: true, optional: false, required: false
    get checksum() {
        return this.getStringAttribute('checksum');
    }
    get createVersion() {
        return this.getBooleanAttribute('create_version');
    }
    set createVersion(value) {
        this._createVersion = value;
    }
    resetCreateVersion() {
        this._createVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createVersionInput() {
        return this._createVersion;
    }
    // created_date - computed: true, optional: false, required: false
    get createdDate() {
        return this.getStringAttribute('created_date');
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated_date - computed: true, optional: false, required: false
    get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get parentIntentSignature() {
        return this.getStringAttribute('parent_intent_signature');
    }
    set parentIntentSignature(value) {
        this._parentIntentSignature = value;
    }
    resetParentIntentSignature() {
        this._parentIntentSignature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentIntentSignatureInput() {
        return this._parentIntentSignature;
    }
    get sampleUtterances() {
        return this.getListAttribute('sample_utterances');
    }
    set sampleUtterances(value) {
        this._sampleUtterances = value;
    }
    resetSampleUtterances() {
        this._sampleUtterances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sampleUtterancesInput() {
        return this._sampleUtterances;
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
    get conclusionStatement() {
        return this.interpolationForAttribute('conclusion_statement');
    }
    set conclusionStatement(value) {
        this._conclusionStatement = value;
    }
    resetConclusionStatement() {
        this._conclusionStatement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conclusionStatementInput() {
        return this._conclusionStatement;
    }
    get confirmationPrompt() {
        return this.interpolationForAttribute('confirmation_prompt');
    }
    set confirmationPrompt(value) {
        this._confirmationPrompt = value;
    }
    resetConfirmationPrompt() {
        this._confirmationPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get confirmationPromptInput() {
        return this._confirmationPrompt;
    }
    get dialogCodeHook() {
        return this.interpolationForAttribute('dialog_code_hook');
    }
    set dialogCodeHook(value) {
        this._dialogCodeHook = value;
    }
    resetDialogCodeHook() {
        this._dialogCodeHook = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dialogCodeHookInput() {
        return this._dialogCodeHook;
    }
    get followUpPrompt() {
        return this.interpolationForAttribute('follow_up_prompt');
    }
    set followUpPrompt(value) {
        this._followUpPrompt = value;
    }
    resetFollowUpPrompt() {
        this._followUpPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get followUpPromptInput() {
        return this._followUpPrompt;
    }
    get fulfillmentActivity() {
        return this.interpolationForAttribute('fulfillment_activity');
    }
    set fulfillmentActivity(value) {
        this._fulfillmentActivity = value;
    }
    // Temporarily expose input value. Use with caution.
    get fulfillmentActivityInput() {
        return this._fulfillmentActivity;
    }
    get rejectionStatement() {
        return this.interpolationForAttribute('rejection_statement');
    }
    set rejectionStatement(value) {
        this._rejectionStatement = value;
    }
    resetRejectionStatement() {
        this._rejectionStatement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rejectionStatementInput() {
        return this._rejectionStatement;
    }
    get slot() {
        return this.interpolationForAttribute('slot');
    }
    set slot(value) {
        this._slot = value;
    }
    resetSlot() {
        this._slot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get slotInput() {
        return this._slot;
    }
    get timeouts() {
        return this.interpolationForAttribute('timeouts');
    }
    set timeouts(value) {
        this._timeouts = value;
    }
    resetTimeouts() {
        this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            create_version: cdktf.booleanToTerraform(this._createVersion),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            parent_intent_signature: cdktf.stringToTerraform(this._parentIntentSignature),
            sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(this._sampleUtterances),
            conclusion_statement: cdktf.listMapper(lexIntentConclusionStatementToTerraform)(this._conclusionStatement),
            confirmation_prompt: cdktf.listMapper(lexIntentConfirmationPromptToTerraform)(this._confirmationPrompt),
            dialog_code_hook: cdktf.listMapper(lexIntentDialogCodeHookToTerraform)(this._dialogCodeHook),
            follow_up_prompt: cdktf.listMapper(lexIntentFollowUpPromptToTerraform)(this._followUpPrompt),
            fulfillment_activity: cdktf.listMapper(lexIntentFulfillmentActivityToTerraform)(this._fulfillmentActivity),
            rejection_statement: cdktf.listMapper(lexIntentRejectionStatementToTerraform)(this._rejectionStatement),
            slot: cdktf.listMapper(lexIntentSlotToTerraform)(this._slot),
            timeouts: lexIntentTimeoutsToTerraform(this._timeouts),
        };
    }
}
exports.LexIntent = LexIntent;
_a = JSII_RTTI_SYMBOL_1;
LexIntent[_a] = { fqn: "hashicorp_aws.LexIntent", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV4LWludGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxleC1pbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUF5Ri9CLFNBQVMsOENBQThDLENBQUMsTUFBNEM7SUFDbEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDakQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQWVELFNBQVMsdUNBQXVDLENBQUMsTUFBcUM7SUFDcEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQzNGLENBQUE7QUFDSCxDQUFDO0FBaUJELFNBQVMsNkNBQTZDLENBQUMsTUFBMkM7SUFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDakQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFB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QUssQ0FBQyxVQUFVLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdkcsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzVELFFBQVEsRUFBRSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZELENBQUM7SUFDSixDQUFDOztBQXZTSCw4QkF3U0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvbGV4X2ludGVudC5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGVWZXJzaW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmVudEludGVudFNpZ25hdHVyZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNhbXBsZVV0dGVyYW5jZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmNsdXNpb25TdGF0ZW1lbnQ/OiBMZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maXJtYXRpb25Qcm9tcHQ/OiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpYWxvZ0NvZGVIb29rPzogTGV4SW50ZW50RGlhbG9nQ29kZUhvb2tbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvbGxvd1VwUHJvbXB0PzogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZ1bGZpbGxtZW50QWN0aXZpdHk6IExleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHlbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlamVjdGlvblN0YXRlbWVudD86IExleEludGVudFJlamVjdGlvblN0YXRlbWVudFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2xvdD86IExleEludGVudFNsb3RbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogTGV4SW50ZW50VGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnRNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3VwTnVtYmVyPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBsZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50TWVzc2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnRNZXNzYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudCksXG4gICAgY29udGVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlKSxcbiAgICBncm91cF9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBOdW1iZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VDYXJkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZTogTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudE1lc3NhZ2VbXTtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudFRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcmVzcG9uc2VfY2FyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZUNhcmQpLFxuICAgIG1lc3NhZ2U6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudE1lc3NhZ2VUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXNzYWdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudENvbmZpcm1hdGlvblByb21wdE1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JvdXBOdW1iZXI/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGxleEludGVudENvbmZpcm1hdGlvblByb21wdE1lc3NhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRNZXNzYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudCksXG4gICAgY29udGVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlKSxcbiAgICBncm91cF9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBOdW1iZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4QXR0ZW1wdHM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZUNhcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNzYWdlOiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRNZXNzYWdlW107XG59XG5cbmZ1bmN0aW9uIGxleEludGVudENvbmZpcm1hdGlvblByb21wdFRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudENvbmZpcm1hdGlvblByb21wdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfYXR0ZW1wdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4QXR0ZW1wdHMpLFxuICAgIHJlc3BvbnNlX2NhcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VDYXJkKSxcbiAgICBtZXNzYWdlOiBjZGt0Zi5saXN0TWFwcGVyKGxleEludGVudENvbmZpcm1hdGlvblByb21wdE1lc3NhZ2VUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXNzYWdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudERpYWxvZ0NvZGVIb29rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZVZlcnNpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXJpOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGxleEludGVudERpYWxvZ0NvZGVIb29rVG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50RGlhbG9nQ29kZUhvb2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2VWZXJzaW9uKSxcbiAgICB1cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJpKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0TWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncm91cE51bWJlcj86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHRNZXNzYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHRNZXNzYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudCksXG4gICAgY29udGVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlKSxcbiAgICBncm91cF9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBOdW1iZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhBdHRlbXB0czogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3BvbnNlQ2FyZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2U6IExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0TWVzc2FnZVtdO1xufVxuXG5mdW5jdGlvbiBsZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdFRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9hdHRlbXB0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhBdHRlbXB0cyksXG4gICAgcmVzcG9uc2VfY2FyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZUNhcmQpLFxuICAgIG1lc3NhZ2U6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHRNZXNzYWdlVG9UZXJyYWZvcm0pKHN0cnVjdCEubWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JvdXBOdW1iZXI/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGxleEludGVudEZvbGxvd1VwUHJvbXB0UmVqZWN0aW9uU3RhdGVtZW50TWVzc2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudEZvbGxvd1VwUHJvbXB0UmVqZWN0aW9uU3RhdGVtZW50TWVzc2FnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnQpLFxuICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgZ3JvdXBfbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwTnVtYmVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudEZvbGxvd1VwUHJvbXB0UmVqZWN0aW9uU3RhdGVtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZUNhcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNzYWdlOiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VbXTtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXNwb25zZV9jYXJkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3BvbnNlQ2FyZCksXG4gICAgbWVzc2FnZTogY2RrdGYubGlzdE1hcHBlcihsZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXNzYWdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudEZvbGxvd1VwUHJvbXB0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb21wdDogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlamVjdGlvblN0YXRlbWVudDogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRbXTtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50Rm9sbG93VXBQcm9tcHRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwcm9tcHQ6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHRUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9tcHQpLFxuICAgIHJlamVjdGlvbl9zdGF0ZW1lbnQ6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWplY3Rpb25TdGF0ZW1lbnQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eUNvZGVIb29rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZVZlcnNpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXJpOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGxleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHlDb2RlSG9va1RvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHlDb2RlSG9vayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZVZlcnNpb24pLFxuICAgIHVyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29kZUhvb2s/OiBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5Q29kZUhvb2tbXTtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eVRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICBjb2RlX2hvb2s6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eUNvZGVIb29rVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29kZUhvb2spLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50TWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncm91cE51bWJlcj86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50TWVzc2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29udGVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50KSxcbiAgICBjb250ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFR5cGUpLFxuICAgIGdyb3VwX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ncm91cE51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRSZWplY3Rpb25TdGF0ZW1lbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3BvbnNlQ2FyZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2U6IExleEludGVudFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VbXTtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50VG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJlc3BvbnNlX2NhcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VDYXJkKSxcbiAgICBtZXNzYWdlOiBjZGt0Zi5saXN0TWFwcGVyKGxleEludGVudFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXNzYWdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0TWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncm91cE51bWJlcj86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gbGV4SW50ZW50U2xvdFZhbHVlRWxpY2l0YXRpb25Qcm9tcHRNZXNzYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50U2xvdFZhbHVlRWxpY2l0YXRpb25Qcm9tcHRNZXNzYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudCksXG4gICAgY29udGVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlKSxcbiAgICBncm91cF9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBOdW1iZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50U2xvdFZhbHVlRWxpY2l0YXRpb25Qcm9tcHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhBdHRlbXB0czogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3BvbnNlQ2FyZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2U6IExleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0TWVzc2FnZVtdO1xufVxuXG5mdW5jdGlvbiBsZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdFRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9hdHRlbXB0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhBdHRlbXB0cyksXG4gICAgcmVzcG9uc2VfY2FyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZUNhcmQpLFxuICAgIG1lc3NhZ2U6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50U2xvdFZhbHVlRWxpY2l0YXRpb25Qcm9tcHRNZXNzYWdlVG9UZXJyYWZvcm0pKHN0cnVjdCEubWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRTbG90IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW9yaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3BvbnNlQ2FyZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNhbXBsZVV0dGVyYW5jZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2xvdENvbnN0cmFpbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2xvdFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNsb3RUeXBlVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlRWxpY2l0YXRpb25Qcm9tcHQ/OiBMZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdFtdO1xufVxuXG5mdW5jdGlvbiBsZXhJbnRlbnRTbG90VG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50U2xvdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgcmVzcG9uc2VfY2FyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZUNhcmQpLFxuICAgIHNhbXBsZV91dHRlcmFuY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNhbXBsZVV0dGVyYW5jZXMpLFxuICAgIHNsb3RfY29uc3RyYWludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbG90Q29uc3RyYWludCksXG4gICAgc2xvdF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNsb3RUeXBlKSxcbiAgICBzbG90X3R5cGVfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbG90VHlwZVZlcnNpb24pLFxuICAgIHZhbHVlX2VsaWNpdGF0aW9uX3Byb21wdDogY2RrdGYubGlzdE1hcHBlcihsZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlRWxpY2l0YXRpb25Qcm9tcHQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50VGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXBkYXRlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsZXhJbnRlbnRUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudFRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIExleEludGVudCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IExleEludGVudENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2xleF9pbnRlbnQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY3JlYXRlVmVyc2lvbiA9IGNvbmZpZy5jcmVhdGVWZXJzaW9uO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wYXJlbnRJbnRlbnRTaWduYXR1cmUgPSBjb25maWcucGFyZW50SW50ZW50U2lnbmF0dXJlO1xuICAgIHRoaXMuX3NhbXBsZVV0dGVyYW5jZXMgPSBjb25maWcuc2FtcGxlVXR0ZXJhbmNlcztcbiAgICB0aGlzLl9jb25jbHVzaW9uU3RhdGVtZW50ID0gY29uZmlnLmNvbmNsdXNpb25TdGF0ZW1lbnQ7XG4gICAgdGhpcy5fY29uZmlybWF0aW9uUHJvbXB0ID0gY29uZmlnLmNvbmZpcm1hdGlvblByb21wdDtcbiAgICB0aGlzLl9kaWFsb2dDb2RlSG9vayA9IGNvbmZpZy5kaWFsb2dDb2RlSG9vaztcbiAgICB0aGlzLl9mb2xsb3dVcFByb21wdCA9IGNvbmZpZy5mb2xsb3dVcFByb21wdDtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEFjdGl2aXR5ID0gY29uZmlnLmZ1bGZpbGxtZW50QWN0aXZpdHk7XG4gICAgdGhpcy5fcmVqZWN0aW9uU3RhdGVtZW50ID0gY29uZmlnLnJlamVjdGlvblN0YXRlbWVudDtcbiAgICB0aGlzLl9zbG90ID0gY29uZmlnLnNsb3Q7XG4gICAgdGhpcy5fdGltZW91dHMgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY2hlY2tzdW0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaGVja3N1bSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NoZWNrc3VtJyk7XG4gIH1cblxuICAvLyBjcmVhdGVfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGVWZXJzaW9uPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBjcmVhdGVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NyZWF0ZV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGVWZXJzaW9uKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2NyZWF0ZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGVWZXJzaW9uKCkge1xuICAgIHRoaXMuX2NyZWF0ZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlVmVyc2lvblxuICB9XG5cbiAgLy8gY3JlYXRlZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHBhcmVudF9pbnRlbnRfc2lnbmF0dXJlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmVudEludGVudFNpZ25hdHVyZT86IHN0cmluZztcbiAgcHVibGljIGdldCBwYXJlbnRJbnRlbnRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJlbnRfaW50ZW50X3NpZ25hdHVyZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyZW50SW50ZW50U2lnbmF0dXJlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fcGFyZW50SW50ZW50U2lnbmF0dXJlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyZW50SW50ZW50U2lnbmF0dXJlKCkge1xuICAgIHRoaXMuX3BhcmVudEludGVudFNpZ25hdHVyZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyZW50SW50ZW50U2lnbmF0dXJlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEludGVudFNpZ25hdHVyZVxuICB9XG5cbiAgLy8gc2FtcGxlX3V0dGVyYW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FtcGxlVXR0ZXJhbmNlcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHNhbXBsZVV0dGVyYW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2FtcGxlX3V0dGVyYW5jZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNhbXBsZVV0dGVyYW5jZXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3NhbXBsZVV0dGVyYW5jZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYW1wbGVVdHRlcmFuY2VzKCkge1xuICAgIHRoaXMuX3NhbXBsZVV0dGVyYW5jZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhbXBsZVV0dGVyYW5jZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxlVXR0ZXJhbmNlc1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBjb25jbHVzaW9uX3N0YXRlbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25jbHVzaW9uU3RhdGVtZW50PzogTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudFtdO1xuICBwdWJsaWMgZ2V0IGNvbmNsdXNpb25TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29uY2x1c2lvbl9zdGF0ZW1lbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb25jbHVzaW9uU3RhdGVtZW50KHZhbHVlOiBMZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50W10gKSB7XG4gICAgdGhpcy5fY29uY2x1c2lvblN0YXRlbWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbmNsdXNpb25TdGF0ZW1lbnQoKSB7XG4gICAgdGhpcy5fY29uY2x1c2lvblN0YXRlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uY2x1c2lvblN0YXRlbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25jbHVzaW9uU3RhdGVtZW50XG4gIH1cblxuICAvLyBjb25maXJtYXRpb25fcHJvbXB0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZpcm1hdGlvblByb21wdD86IExleEludGVudENvbmZpcm1hdGlvblByb21wdFtdO1xuICBwdWJsaWMgZ2V0IGNvbmZpcm1hdGlvblByb21wdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb25maXJtYXRpb25fcHJvbXB0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmlybWF0aW9uUHJvbXB0KHZhbHVlOiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRbXSApIHtcbiAgICB0aGlzLl9jb25maXJtYXRpb25Qcm9tcHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25maXJtYXRpb25Qcm9tcHQoKSB7XG4gICAgdGhpcy5fY29uZmlybWF0aW9uUHJvbXB0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25maXJtYXRpb25Qcm9tcHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlybWF0aW9uUHJvbXB0XG4gIH1cblxuICAvLyBkaWFsb2dfY29kZV9ob29rIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RpYWxvZ0NvZGVIb29rPzogTGV4SW50ZW50RGlhbG9nQ29kZUhvb2tbXTtcbiAgcHVibGljIGdldCBkaWFsb2dDb2RlSG9vaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkaWFsb2dfY29kZV9ob29rJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGlhbG9nQ29kZUhvb2sodmFsdWU6IExleEludGVudERpYWxvZ0NvZGVIb29rW10gKSB7XG4gICAgdGhpcy5fZGlhbG9nQ29kZUhvb2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaWFsb2dDb2RlSG9vaygpIHtcbiAgICB0aGlzLl9kaWFsb2dDb2RlSG9vayA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlhbG9nQ29kZUhvb2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlhbG9nQ29kZUhvb2tcbiAgfVxuXG4gIC8vIGZvbGxvd191cF9wcm9tcHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZm9sbG93VXBQcm9tcHQ/OiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFtdO1xuICBwdWJsaWMgZ2V0IGZvbGxvd1VwUHJvbXB0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZvbGxvd191cF9wcm9tcHQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmb2xsb3dVcFByb21wdCh2YWx1ZTogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRbXSApIHtcbiAgICB0aGlzLl9mb2xsb3dVcFByb21wdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvbGxvd1VwUHJvbXB0KCkge1xuICAgIHRoaXMuX2ZvbGxvd1VwUHJvbXB0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb2xsb3dVcFByb21wdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb2xsb3dVcFByb21wdFxuICB9XG5cbiAgLy8gZnVsZmlsbG1lbnRfYWN0aXZpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZnVsZmlsbG1lbnRBY3Rpdml0eTogTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eVtdO1xuICBwdWJsaWMgZ2V0IGZ1bGZpbGxtZW50QWN0aXZpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZnVsZmlsbG1lbnRfYWN0aXZpdHknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmdWxmaWxsbWVudEFjdGl2aXR5KHZhbHVlOiBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5W10pIHtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEFjdGl2aXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZ1bGZpbGxtZW50QWN0aXZpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsZmlsbG1lbnRBY3Rpdml0eVxuICB9XG5cbiAgLy8gcmVqZWN0aW9uX3N0YXRlbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWplY3Rpb25TdGF0ZW1lbnQ/OiBMZXhJbnRlbnRSZWplY3Rpb25TdGF0ZW1lbnRbXTtcbiAgcHVibGljIGdldCByZWplY3Rpb25TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVqZWN0aW9uX3N0YXRlbWVudCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlamVjdGlvblN0YXRlbWVudCh2YWx1ZTogTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50W10gKSB7XG4gICAgdGhpcy5fcmVqZWN0aW9uU3RhdGVtZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVqZWN0aW9uU3RhdGVtZW50KCkge1xuICAgIHRoaXMuX3JlamVjdGlvblN0YXRlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVqZWN0aW9uU3RhdGVtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlamVjdGlvblN0YXRlbWVudFxuICB9XG5cbiAgLy8gc2xvdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbG90PzogTGV4SW50ZW50U2xvdFtdO1xuICBwdWJsaWMgZ2V0IHNsb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2xvdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNsb3QodmFsdWU6IExleEludGVudFNsb3RbXSApIHtcbiAgICB0aGlzLl9zbG90ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2xvdCgpIHtcbiAgICB0aGlzLl9zbG90ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbG90SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nsb3RcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzPzogTGV4SW50ZW50VGltZW91dHM7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGltZW91dHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0cyh2YWx1ZTogTGV4SW50ZW50VGltZW91dHMgKSB7XG4gICAgdGhpcy5fdGltZW91dHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlX3ZlcnNpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9jcmVhdGVWZXJzaW9uKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHBhcmVudF9pbnRlbnRfc2lnbmF0dXJlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wYXJlbnRJbnRlbnRTaWduYXR1cmUpLFxuICAgICAgc2FtcGxlX3V0dGVyYW5jZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3NhbXBsZVV0dGVyYW5jZXMpLFxuICAgICAgY29uY2x1c2lvbl9zdGF0ZW1lbnQ6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudFRvVGVycmFmb3JtKSh0aGlzLl9jb25jbHVzaW9uU3RhdGVtZW50KSxcbiAgICAgIGNvbmZpcm1hdGlvbl9wcm9tcHQ6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0VG9UZXJyYWZvcm0pKHRoaXMuX2NvbmZpcm1hdGlvblByb21wdCksXG4gICAgICBkaWFsb2dfY29kZV9ob29rOiBjZGt0Zi5saXN0TWFwcGVyKGxleEludGVudERpYWxvZ0NvZGVIb29rVG9UZXJyYWZvcm0pKHRoaXMuX2RpYWxvZ0NvZGVIb29rKSxcbiAgICAgIGZvbGxvd191cF9wcm9tcHQ6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Rm9sbG93VXBQcm9tcHRUb1RlcnJhZm9ybSkodGhpcy5fZm9sbG93VXBQcm9tcHQpLFxuICAgICAgZnVsZmlsbG1lbnRfYWN0aXZpdHk6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eVRvVGVycmFmb3JtKSh0aGlzLl9mdWxmaWxsbWVudEFjdGl2aXR5KSxcbiAgICAgIHJlamVjdGlvbl9zdGF0ZW1lbnQ6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50VG9UZXJyYWZvcm0pKHRoaXMuX3JlamVjdGlvblN0YXRlbWVudCksXG4gICAgICBzbG90OiBjZGt0Zi5saXN0TWFwcGVyKGxleEludGVudFNsb3RUb1RlcnJhZm9ybSkodGhpcy5fc2xvdCksXG4gICAgICB0aW1lb3V0czogbGV4SW50ZW50VGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cyksXG4gICAgfTtcbiAgfVxufVxuIl19