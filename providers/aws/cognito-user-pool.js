"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoUserPool = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
    };
}
function cognitoUserPoolAccountRecoverySettingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform)(struct.recoveryMechanism),
    };
}
function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        sms_message: cdktf.stringToTerraform(struct.smsMessage),
    };
}
function cognitoUserPoolAdminCreateUserConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_admin_create_user_only: cdktf.booleanToTerraform(struct.allowAdminCreateUserOnly),
        invite_message_template: cdktf.listMapper(cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform)(struct.inviteMessageTemplate),
    };
}
function cognitoUserPoolDeviceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        challenge_required_on_new_device: cdktf.booleanToTerraform(struct.challengeRequiredOnNewDevice),
        device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct.deviceOnlyRememberedOnUserPrompt),
    };
}
function cognitoUserPoolEmailConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configuration_set: cdktf.stringToTerraform(struct.configurationSet),
        email_sending_account: cdktf.stringToTerraform(struct.emailSendingAccount),
        from_email_address: cdktf.stringToTerraform(struct.fromEmailAddress),
        reply_to_email_address: cdktf.stringToTerraform(struct.replyToEmailAddress),
        source_arn: cdktf.stringToTerraform(struct.sourceArn),
    };
}
function cognitoUserPoolLambdaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create_auth_challenge: cdktf.stringToTerraform(struct.createAuthChallenge),
        custom_message: cdktf.stringToTerraform(struct.customMessage),
        define_auth_challenge: cdktf.stringToTerraform(struct.defineAuthChallenge),
        post_authentication: cdktf.stringToTerraform(struct.postAuthentication),
        post_confirmation: cdktf.stringToTerraform(struct.postConfirmation),
        pre_authentication: cdktf.stringToTerraform(struct.preAuthentication),
        pre_sign_up: cdktf.stringToTerraform(struct.preSignUp),
        pre_token_generation: cdktf.stringToTerraform(struct.preTokenGeneration),
        user_migration: cdktf.stringToTerraform(struct.userMigration),
        verify_auth_challenge_response: cdktf.stringToTerraform(struct.verifyAuthChallengeResponse),
    };
}
function cognitoUserPoolPasswordPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        minimum_length: cdktf.numberToTerraform(struct.minimumLength),
        require_lowercase: cdktf.booleanToTerraform(struct.requireLowercase),
        require_numbers: cdktf.booleanToTerraform(struct.requireNumbers),
        require_symbols: cdktf.booleanToTerraform(struct.requireSymbols),
        require_uppercase: cdktf.booleanToTerraform(struct.requireUppercase),
        temporary_password_validity_days: cdktf.numberToTerraform(struct.temporaryPasswordValidityDays),
    };
}
function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_value: cdktf.stringToTerraform(struct.maxValue),
        min_value: cdktf.stringToTerraform(struct.minValue),
    };
}
function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_length: cdktf.stringToTerraform(struct.maxLength),
        min_length: cdktf.stringToTerraform(struct.minLength),
    };
}
function cognitoUserPoolSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_data_type: cdktf.stringToTerraform(struct.attributeDataType),
        developer_only_attribute: cdktf.booleanToTerraform(struct.developerOnlyAttribute),
        mutable: cdktf.booleanToTerraform(struct.mutable),
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        number_attribute_constraints: cdktf.listMapper(cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform)(struct.numberAttributeConstraints),
        string_attribute_constraints: cdktf.listMapper(cognitoUserPoolSchemaStringAttributeConstraintsToTerraform)(struct.stringAttributeConstraints),
    };
}
function cognitoUserPoolSmsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        external_id: cdktf.stringToTerraform(struct.externalId),
        sns_caller_arn: cdktf.stringToTerraform(struct.snsCallerArn),
    };
}
function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function cognitoUserPoolUserPoolAddOnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        advanced_security_mode: cdktf.stringToTerraform(struct.advancedSecurityMode),
    };
}
function cognitoUserPoolUsernameConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        case_sensitive: cdktf.booleanToTerraform(struct.caseSensitive),
    };
}
function cognitoUserPoolVerificationMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_email_option: cdktf.stringToTerraform(struct.defaultEmailOption),
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_message_by_link: cdktf.stringToTerraform(struct.emailMessageByLink),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        email_subject_by_link: cdktf.stringToTerraform(struct.emailSubjectByLink),
        sms_message: cdktf.stringToTerraform(struct.smsMessage),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}.
 */
class CognitoUserPool extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_user_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._aliasAttributes = config.aliasAttributes;
        this._autoVerifiedAttributes = config.autoVerifiedAttributes;
        this._emailVerificationMessage = config.emailVerificationMessage;
        this._emailVerificationSubject = config.emailVerificationSubject;
        this._mfaConfiguration = config.mfaConfiguration;
        this._name = config.name;
        this._smsAuthenticationMessage = config.smsAuthenticationMessage;
        this._smsVerificationMessage = config.smsVerificationMessage;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._usernameAttributes = config.usernameAttributes;
        this._accountRecoverySetting = config.accountRecoverySetting;
        this._adminCreateUserConfig = config.adminCreateUserConfig;
        this._deviceConfiguration = config.deviceConfiguration;
        this._emailConfiguration = config.emailConfiguration;
        this._lambdaConfig = config.lambdaConfig;
        this._passwordPolicy = config.passwordPolicy;
        this._schema = config.schema;
        this._smsConfiguration = config.smsConfiguration;
        this._softwareTokenMfaConfiguration = config.softwareTokenMfaConfiguration;
        this._userPoolAddOns = config.userPoolAddOns;
        this._usernameConfiguration = config.usernameConfiguration;
        this._verificationMessageTemplate = config.verificationMessageTemplate;
    }
    get aliasAttributes() {
        return this.getListAttribute('alias_attributes');
    }
    set aliasAttributes(value) {
        this._aliasAttributes = value;
    }
    resetAliasAttributes() {
        this._aliasAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasAttributesInput() {
        return this._aliasAttributes;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoVerifiedAttributes() {
        return this.getListAttribute('auto_verified_attributes');
    }
    set autoVerifiedAttributes(value) {
        this._autoVerifiedAttributes = value;
    }
    resetAutoVerifiedAttributes() {
        this._autoVerifiedAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoVerifiedAttributesInput() {
        return this._autoVerifiedAttributes;
    }
    // creation_date - computed: true, optional: false, required: false
    get creationDate() {
        return this.getStringAttribute('creation_date');
    }
    get emailVerificationMessage() {
        return this.getStringAttribute('email_verification_message');
    }
    set emailVerificationMessage(value) {
        this._emailVerificationMessage = value;
    }
    resetEmailVerificationMessage() {
        this._emailVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailVerificationMessageInput() {
        return this._emailVerificationMessage;
    }
    get emailVerificationSubject() {
        return this.getStringAttribute('email_verification_subject');
    }
    set emailVerificationSubject(value) {
        this._emailVerificationSubject = value;
    }
    resetEmailVerificationSubject() {
        this._emailVerificationSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailVerificationSubjectInput() {
        return this._emailVerificationSubject;
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_modified_date - computed: true, optional: false, required: false
    get lastModifiedDate() {
        return this.getStringAttribute('last_modified_date');
    }
    get mfaConfiguration() {
        return this.getStringAttribute('mfa_configuration');
    }
    set mfaConfiguration(value) {
        this._mfaConfiguration = value;
    }
    resetMfaConfiguration() {
        this._mfaConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mfaConfigurationInput() {
        return this._mfaConfiguration;
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
    get smsAuthenticationMessage() {
        return this.getStringAttribute('sms_authentication_message');
    }
    set smsAuthenticationMessage(value) {
        this._smsAuthenticationMessage = value;
    }
    resetSmsAuthenticationMessage() {
        this._smsAuthenticationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsAuthenticationMessageInput() {
        return this._smsAuthenticationMessage;
    }
    get smsVerificationMessage() {
        return this.getStringAttribute('sms_verification_message');
    }
    set smsVerificationMessage(value) {
        this._smsVerificationMessage = value;
    }
    resetSmsVerificationMessage() {
        this._smsVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsVerificationMessageInput() {
        return this._smsVerificationMessage;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get tagsAll() {
        return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    get usernameAttributes() {
        return this.getListAttribute('username_attributes');
    }
    set usernameAttributes(value) {
        this._usernameAttributes = value;
    }
    resetUsernameAttributes() {
        this._usernameAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameAttributesInput() {
        return this._usernameAttributes;
    }
    get accountRecoverySetting() {
        return this.interpolationForAttribute('account_recovery_setting');
    }
    set accountRecoverySetting(value) {
        this._accountRecoverySetting = value;
    }
    resetAccountRecoverySetting() {
        this._accountRecoverySetting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountRecoverySettingInput() {
        return this._accountRecoverySetting;
    }
    get adminCreateUserConfig() {
        return this.interpolationForAttribute('admin_create_user_config');
    }
    set adminCreateUserConfig(value) {
        this._adminCreateUserConfig = value;
    }
    resetAdminCreateUserConfig() {
        this._adminCreateUserConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get adminCreateUserConfigInput() {
        return this._adminCreateUserConfig;
    }
    get deviceConfiguration() {
        return this.interpolationForAttribute('device_configuration');
    }
    set deviceConfiguration(value) {
        this._deviceConfiguration = value;
    }
    resetDeviceConfiguration() {
        this._deviceConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deviceConfigurationInput() {
        return this._deviceConfiguration;
    }
    get emailConfiguration() {
        return this.interpolationForAttribute('email_configuration');
    }
    set emailConfiguration(value) {
        this._emailConfiguration = value;
    }
    resetEmailConfiguration() {
        this._emailConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailConfigurationInput() {
        return this._emailConfiguration;
    }
    get lambdaConfig() {
        return this.interpolationForAttribute('lambda_config');
    }
    set lambdaConfig(value) {
        this._lambdaConfig = value;
    }
    resetLambdaConfig() {
        this._lambdaConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaConfigInput() {
        return this._lambdaConfig;
    }
    get passwordPolicy() {
        return this.interpolationForAttribute('password_policy');
    }
    set passwordPolicy(value) {
        this._passwordPolicy = value;
    }
    resetPasswordPolicy() {
        this._passwordPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordPolicyInput() {
        return this._passwordPolicy;
    }
    get schema() {
        return this.interpolationForAttribute('schema');
    }
    set schema(value) {
        this._schema = value;
    }
    resetSchema() {
        this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schemaInput() {
        return this._schema;
    }
    get smsConfiguration() {
        return this.interpolationForAttribute('sms_configuration');
    }
    set smsConfiguration(value) {
        this._smsConfiguration = value;
    }
    resetSmsConfiguration() {
        this._smsConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smsConfigurationInput() {
        return this._smsConfiguration;
    }
    get softwareTokenMfaConfiguration() {
        return this.interpolationForAttribute('software_token_mfa_configuration');
    }
    set softwareTokenMfaConfiguration(value) {
        this._softwareTokenMfaConfiguration = value;
    }
    resetSoftwareTokenMfaConfiguration() {
        this._softwareTokenMfaConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get softwareTokenMfaConfigurationInput() {
        return this._softwareTokenMfaConfiguration;
    }
    get userPoolAddOns() {
        return this.interpolationForAttribute('user_pool_add_ons');
    }
    set userPoolAddOns(value) {
        this._userPoolAddOns = value;
    }
    resetUserPoolAddOns() {
        this._userPoolAddOns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolAddOnsInput() {
        return this._userPoolAddOns;
    }
    get usernameConfiguration() {
        return this.interpolationForAttribute('username_configuration');
    }
    set usernameConfiguration(value) {
        this._usernameConfiguration = value;
    }
    resetUsernameConfiguration() {
        this._usernameConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameConfigurationInput() {
        return this._usernameConfiguration;
    }
    get verificationMessageTemplate() {
        return this.interpolationForAttribute('verification_message_template');
    }
    set verificationMessageTemplate(value) {
        this._verificationMessageTemplate = value;
    }
    resetVerificationMessageTemplate() {
        this._verificationMessageTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get verificationMessageTemplateInput() {
        return this._verificationMessageTemplate;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alias_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._aliasAttributes),
            auto_verified_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._autoVerifiedAttributes),
            email_verification_message: cdktf.stringToTerraform(this._emailVerificationMessage),
            email_verification_subject: cdktf.stringToTerraform(this._emailVerificationSubject),
            mfa_configuration: cdktf.stringToTerraform(this._mfaConfiguration),
            name: cdktf.stringToTerraform(this._name),
            sms_authentication_message: cdktf.stringToTerraform(this._smsAuthenticationMessage),
            sms_verification_message: cdktf.stringToTerraform(this._smsVerificationMessage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
            account_recovery_setting: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingToTerraform)(this._accountRecoverySetting),
            admin_create_user_config: cdktf.listMapper(cognitoUserPoolAdminCreateUserConfigToTerraform)(this._adminCreateUserConfig),
            device_configuration: cdktf.listMapper(cognitoUserPoolDeviceConfigurationToTerraform)(this._deviceConfiguration),
            email_configuration: cdktf.listMapper(cognitoUserPoolEmailConfigurationToTerraform)(this._emailConfiguration),
            lambda_config: cdktf.listMapper(cognitoUserPoolLambdaConfigToTerraform)(this._lambdaConfig),
            password_policy: cdktf.listMapper(cognitoUserPoolPasswordPolicyToTerraform)(this._passwordPolicy),
            schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform)(this._schema),
            sms_configuration: cdktf.listMapper(cognitoUserPoolSmsConfigurationToTerraform)(this._smsConfiguration),
            software_token_mfa_configuration: cdktf.listMapper(cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform)(this._softwareTokenMfaConfiguration),
            user_pool_add_ons: cdktf.listMapper(cognitoUserPoolUserPoolAddOnsToTerraform)(this._userPoolAddOns),
            username_configuration: cdktf.listMapper(cognitoUserPoolUsernameConfigurationToTerraform)(this._usernameConfiguration),
            verification_message_template: cdktf.listMapper(cognitoUserPoolVerificationMessageTemplateToTerraform)(this._verificationMessageTemplate),
        };
    }
}
exports.CognitoUserPool = CognitoUserPool;
_a = JSII_RTTI_SYMBOL_1;
CognitoUserPool[_a] = { fqn: "hashicorp_aws.CognitoUserPool", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by11c2VyLXBvb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2duaXRvLXVzZXItcG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQXFJL0IsU0FBUyxpRUFBaUUsQ0FBQyxNQUErRDtJQUN4SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDcEQsQ0FBQTtBQUNILENBQUM7QUFXRCxTQUFTLGdEQUFnRCxDQUFDLE1BQThDO0lBQ3RHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUNuSSxDQUFBO0FBQ0gsQ0FBQztBQWlCRCxTQUFTLG9FQUFvRSxDQUFDLE1BQWtFO0lBQzlJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDekQsQ0FBQTtB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SyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN2RyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVEQUF1RCxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1lBQ2hKLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ25HLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDdEgsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztTQUMxSSxDQUFDO0lBQ0osQ0FBQzs7QUF6ZEgsMENBMGRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL2NvZ25pdG9fdXNlcl9wb29sLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxpYXNBdHRyaWJ1dGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvVmVyaWZpZWRBdHRyaWJ1dGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxWZXJpZmljYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZmFDb25maWd1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21zQXV0aGVudGljYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21zVmVyaWZpY2F0aW9uTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJuYW1lQXR0cmlidXRlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY291bnRSZWNvdmVyeVNldHRpbmc/OiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWRtaW5DcmVhdGVVc2VyQ29uZmlnPzogQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbERldmljZUNvbmZpZ3VyYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbWFpbENvbmZpZ3VyYXRpb24/OiBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGFDb25maWc/OiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXNzd29yZFBvbGljeT86IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NoZW1hPzogQ29nbml0b1VzZXJQb29sU2NoZW1hW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21zQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlclBvb2xBZGRPbnM/OiBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJuYW1lQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZT86IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nUmVjb3ZlcnlNZWNoYW5pc20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gY29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgcHJpb3JpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucHJpb3JpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3ZlcnlNZWNoYW5pc206IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdSZWNvdmVyeU1lY2hhbmlzbVtdO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZWNvdmVyeV9tZWNoYW5pc206IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVjb3ZlcnlNZWNoYW5pc20pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnSW52aXRlTWVzc2FnZVRlbXBsYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxNZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbWFpbFN1YmplY3Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21zTWVzc2FnZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnSW52aXRlTWVzc2FnZVRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnSW52aXRlTWVzc2FnZVRlbXBsYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVtYWlsX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxNZXNzYWdlKSxcbiAgICBlbWFpbF9zdWJqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsU3ViamVjdCksXG4gICAgc21zX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc21zTWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd0FkbWluQ3JlYXRlVXNlck9ubHk/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludml0ZU1lc3NhZ2VUZW1wbGF0ZT86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZVtdO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWxsb3dfYWRtaW5fY3JlYXRlX3VzZXJfb25seTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5KSxcbiAgICBpbnZpdGVfbWVzc2FnZV90ZW1wbGF0ZTogY2RrdGYubGlzdE1hcHBlcihjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGVUb1RlcnJhZm9ybSkoc3RydWN0IS5pbnZpdGVNZXNzYWdlVGVtcGxhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZT86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gY29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbERldmljZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2hhbGxlbmdlX3JlcXVpcmVkX29uX25ld19kZXZpY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UpLFxuICAgIGRldmljZV9vbmx5X3JlbWVtYmVyZWRfb25fdXNlcl9wcm9tcHQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvblNldD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVtYWlsU2VuZGluZ0FjY291bnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmcm9tRW1haWxBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBseVRvRW1haWxBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VBcm4/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmF0aW9uX3NldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWd1cmF0aW9uU2V0KSxcbiAgICBlbWFpbF9zZW5kaW5nX2FjY291bnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxTZW5kaW5nQWNjb3VudCksXG4gICAgZnJvbV9lbWFpbF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyb21FbWFpbEFkZHJlc3MpLFxuICAgIHJlcGx5X3RvX2VtYWlsX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVwbHlUb0VtYWlsQWRkcmVzcyksXG4gICAgc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZUF1dGhDaGFsbGVuZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmluZUF1dGhDaGFsbGVuZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvc3RBdXRoZW50aWNhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3N0Q29uZmlybWF0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlQXV0aGVudGljYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlU2lnblVwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZVRva2VuR2VuZXJhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyTWlncmF0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlX2F1dGhfY2hhbGxlbmdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZUF1dGhDaGFsbGVuZ2UpLFxuICAgIGN1c3RvbV9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbU1lc3NhZ2UpLFxuICAgIGRlZmluZV9hdXRoX2NoYWxsZW5nZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZpbmVBdXRoQ2hhbGxlbmdlKSxcbiAgICBwb3N0X2F1dGhlbnRpY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvc3RBdXRoZW50aWNhdGlvbiksXG4gICAgcG9zdF9jb25maXJtYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9zdENvbmZpcm1hdGlvbiksXG4gICAgcHJlX2F1dGhlbnRpY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZUF1dGhlbnRpY2F0aW9uKSxcbiAgICBwcmVfc2lnbl91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVTaWduVXApLFxuICAgIHByZV90b2tlbl9nZW5lcmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZVRva2VuR2VuZXJhdGlvbiksXG4gICAgdXNlcl9taWdyYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlck1pZ3JhdGlvbiksXG4gICAgdmVyaWZ5X2F1dGhfY2hhbGxlbmdlX3Jlc3BvbnNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluaW11bUxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlTG93ZXJjYXNlPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVOdW1iZXJzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVTeW1ib2xzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlVXBwZXJjYXNlPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cz86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gY29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtaW5pbXVtX2xlbmd0aDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5pbXVtTGVuZ3RoKSxcbiAgICByZXF1aXJlX2xvd2VyY2FzZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZUxvd2VyY2FzZSksXG4gICAgcmVxdWlyZV9udW1iZXJzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlTnVtYmVycyksXG4gICAgcmVxdWlyZV9zeW1ib2xzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlU3ltYm9scyksXG4gICAgcmVxdWlyZV91cHBlcmNhc2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVVcHBlcmNhc2UpLFxuICAgIHRlbXBvcmFyeV9wYXNzd29yZF92YWxpZGl0eV9kYXlzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFZhbHVlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluVmFsdWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZhbHVlKSxcbiAgICBtaW5fdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWluVmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhMZW5ndGg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pbkxlbmd0aD86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfbGVuZ3RoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heExlbmd0aCksXG4gICAgbWluX2xlbmd0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5taW5MZW5ndGgpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU2NoZW1hIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXR0cmlidXRlRGF0YVR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmVsb3Blck9ubHlBdHRyaWJ1dGU/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtdXRhYmxlPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBudW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cz86IENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHM/OiBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50c1tdO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlX2RhdGFfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdHRyaWJ1dGVEYXRhVHlwZSksXG4gICAgZGV2ZWxvcGVyX29ubHlfYXR0cmlidXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZlbG9wZXJPbmx5QXR0cmlidXRlKSxcbiAgICBtdXRhYmxlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5tdXRhYmxlKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHJlcXVpcmVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlZCksXG4gICAgbnVtYmVyX2F0dHJpYnV0ZV9jb25zdHJhaW50czogY2RrdGYubGlzdE1hcHBlcihjb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50c1RvVGVycmFmb3JtKShzdHJ1Y3QhLm51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzKSxcbiAgICBzdHJpbmdfYXR0cmlidXRlX2NvbnN0cmFpbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXh0ZXJuYWxJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNuc0NhbGxlckFybjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleHRlcm5hbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHRlcm5hbElkKSxcbiAgICBzbnNfY2FsbGVyX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbnNDYWxsZXJBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZHZhbmNlZFNlY3VyaXR5TW9kZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc1RvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFkdmFuY2VkX3NlY3VyaXR5X21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWR2YW5jZWRTZWN1cml0eU1vZGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjb2duaXRvVXNlclBvb2xVc2VybmFtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xVc2VybmFtZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2FzZV9zZW5zaXRpdmU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNhc2VTZW5zaXRpdmUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0RW1haWxPcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVtYWlsTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVtYWlsTWVzc2FnZUJ5TGluaz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxTdWJqZWN0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxTdWJqZWN0QnlMaW5rPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNtc01lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0X2VtYWlsX29wdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0RW1haWxPcHRpb24pLFxuICAgIGVtYWlsX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxNZXNzYWdlKSxcbiAgICBlbWFpbF9tZXNzYWdlX2J5X2xpbms6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxNZXNzYWdlQnlMaW5rKSxcbiAgICBlbWFpbF9zdWJqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsU3ViamVjdCksXG4gICAgZW1haWxfc3ViamVjdF9ieV9saW5rOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsU3ViamVjdEJ5TGluayksXG4gICAgc21zX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc21zTWVzc2FnZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2wgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvZ25pdG9Vc2VyUG9vbENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZ25pdG9fdXNlcl9wb29sJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FsaWFzQXR0cmlidXRlcyA9IGNvbmZpZy5hbGlhc0F0dHJpYnV0ZXM7XG4gICAgdGhpcy5fYXV0b1ZlcmlmaWVkQXR0cmlidXRlcyA9IGNvbmZpZy5hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSA9IGNvbmZpZy5lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2U7XG4gICAgdGhpcy5fZW1haWxWZXJpZmljYXRpb25TdWJqZWN0ID0gY29uZmlnLmVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdDtcbiAgICB0aGlzLl9tZmFDb25maWd1cmF0aW9uID0gY29uZmlnLm1mYUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZSA9IGNvbmZpZy5zbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2U7XG4gICAgdGhpcy5fc21zVmVyaWZpY2F0aW9uTWVzc2FnZSA9IGNvbmZpZy5zbXNWZXJpZmljYXRpb25NZXNzYWdlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdXNlcm5hbWVBdHRyaWJ1dGVzID0gY29uZmlnLnVzZXJuYW1lQXR0cmlidXRlcztcbiAgICB0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nID0gY29uZmlnLmFjY291bnRSZWNvdmVyeVNldHRpbmc7XG4gICAgdGhpcy5fYWRtaW5DcmVhdGVVc2VyQ29uZmlnID0gY29uZmlnLmFkbWluQ3JlYXRlVXNlckNvbmZpZztcbiAgICB0aGlzLl9kZXZpY2VDb25maWd1cmF0aW9uID0gY29uZmlnLmRldmljZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fZW1haWxDb25maWd1cmF0aW9uID0gY29uZmlnLmVtYWlsQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9sYW1iZGFDb25maWcgPSBjb25maWcubGFtYmRhQ29uZmlnO1xuICAgIHRoaXMuX3Bhc3N3b3JkUG9saWN5ID0gY29uZmlnLnBhc3N3b3JkUG9saWN5O1xuICAgIHRoaXMuX3NjaGVtYSA9IGNvbmZpZy5zY2hlbWE7XG4gICAgdGhpcy5fc21zQ29uZmlndXJhdGlvbiA9IGNvbmZpZy5zbXNDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uID0gY29uZmlnLnNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3VzZXJQb29sQWRkT25zID0gY29uZmlnLnVzZXJQb29sQWRkT25zO1xuICAgIHRoaXMuX3VzZXJuYW1lQ29uZmlndXJhdGlvbiA9IGNvbmZpZy51c2VybmFtZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlID0gY29uZmlnLnZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxpYXNfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGlhc0F0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBhbGlhc0F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxpYXNfYXR0cmlidXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxpYXNBdHRyaWJ1dGVzKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9hbGlhc0F0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGlhc0F0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fYWxpYXNBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGlhc0F0dHJpYnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpYXNBdHRyaWJ1dGVzXG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9fdmVyaWZpZWRfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgYXV0b1ZlcmlmaWVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdXRvX3ZlcmlmaWVkX2F0dHJpYnV0ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9WZXJpZmllZEF0dHJpYnV0ZXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX2F1dG9WZXJpZmllZEF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvVmVyaWZpZWRBdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuX2F1dG9WZXJpZmllZEF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9WZXJpZmllZEF0dHJpYnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1ZlcmlmaWVkQXR0cmlidXRlc1xuICB9XG5cbiAgLy8gY3JlYXRpb25fZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0aW9uX2RhdGUnKTtcbiAgfVxuXG4gIC8vIGVtYWlsX3ZlcmlmaWNhdGlvbl9tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxWZXJpZmljYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGVtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsX3ZlcmlmaWNhdGlvbl9tZXNzYWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSgpIHtcbiAgICB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2VcbiAgfVxuXG4gIC8vIGVtYWlsX3ZlcmlmaWNhdGlvbl9zdWJqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxWZXJpZmljYXRpb25TdWJqZWN0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsX3ZlcmlmaWNhdGlvbl9zdWJqZWN0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbFZlcmlmaWNhdGlvblN1YmplY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCgpIHtcbiAgICB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvblN1YmplY3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsVmVyaWZpY2F0aW9uU3ViamVjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvblN1YmplY3RcbiAgfVxuXG4gIC8vIGVuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfbW9kaWZpZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RNb2RpZmllZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X21vZGlmaWVkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIG1mYV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21mYUNvbmZpZ3VyYXRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbWZhQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21mYV9jb25maWd1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZmFDb25maWd1cmF0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbWZhQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1mYUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbWZhQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWZhQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZmFDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIHNtc19hdXRoZW50aWNhdGlvbl9tZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZT86IHN0cmluZztcbiAgcHVibGljIGdldCBzbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbXNfYXV0aGVudGljYXRpb25fbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc21zQXV0aGVudGljYXRpb25NZXNzYWdlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fc21zQXV0aGVudGljYXRpb25NZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21zQXV0aGVudGljYXRpb25NZXNzYWdlKCkge1xuICAgIHRoaXMuX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc21zQXV0aGVudGljYXRpb25NZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Ntc0F1dGhlbnRpY2F0aW9uTWVzc2FnZVxuICB9XG5cbiAgLy8gc21zX3ZlcmlmaWNhdGlvbl9tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc21zVmVyaWZpY2F0aW9uTWVzc2FnZT86IHN0cmluZztcbiAgcHVibGljIGdldCBzbXNWZXJpZmljYXRpb25NZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21zX3ZlcmlmaWNhdGlvbl9tZXNzYWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbXNWZXJpZmljYXRpb25NZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbXNWZXJpZmljYXRpb25NZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21zVmVyaWZpY2F0aW9uTWVzc2FnZSgpIHtcbiAgICB0aGlzLl9zbXNWZXJpZmljYXRpb25NZXNzYWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbXNWZXJpZmljYXRpb25NZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Ntc1ZlcmlmaWNhdGlvbk1lc3NhZ2VcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzQWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsXG4gIH1cblxuICAvLyB1c2VybmFtZV9hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJuYW1lQXR0cmlidXRlcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHVzZXJuYW1lQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd1c2VybmFtZV9hdHRyaWJ1dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VybmFtZUF0dHJpYnV0ZXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3VzZXJuYW1lQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJuYW1lQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLl91c2VybmFtZUF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZUF0dHJpYnV0ZXNcbiAgfVxuXG4gIC8vIGFjY291bnRfcmVjb3Zlcnlfc2V0dGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nPzogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1tdO1xuICBwdWJsaWMgZ2V0IGFjY291bnRSZWNvdmVyeVNldHRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWNjb3VudF9yZWNvdmVyeV9zZXR0aW5nJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjb3VudFJlY292ZXJ5U2V0dGluZyh2YWx1ZTogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1tdICkge1xuICAgIHRoaXMuX2FjY291bnRSZWNvdmVyeVNldHRpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2NvdW50UmVjb3ZlcnlTZXR0aW5nKCkge1xuICAgIHRoaXMuX2FjY291bnRSZWNvdmVyeVNldHRpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY291bnRSZWNvdmVyeVNldHRpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3VudFJlY292ZXJ5U2V0dGluZ1xuICB9XG5cbiAgLy8gYWRtaW5fY3JlYXRlX3VzZXJfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FkbWluQ3JlYXRlVXNlckNvbmZpZz86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ1tdO1xuICBwdWJsaWMgZ2V0IGFkbWluQ3JlYXRlVXNlckNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhZG1pbl9jcmVhdGVfdXNlcl9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhZG1pbkNyZWF0ZVVzZXJDb25maWcodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ1tdICkge1xuICAgIHRoaXMuX2FkbWluQ3JlYXRlVXNlckNvbmZpZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkbWluQ3JlYXRlVXNlckNvbmZpZygpIHtcbiAgICB0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkbWluQ3JlYXRlVXNlckNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWdcbiAgfVxuXG4gIC8vIGRldmljZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZUNvbmZpZ3VyYXRpb24/OiBDb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uW107XG4gIHB1YmxpYyBnZXQgZGV2aWNlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXZpY2VfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZUNvbmZpZ3VyYXRpb24odmFsdWU6IENvZ25pdG9Vc2VyUG9vbERldmljZUNvbmZpZ3VyYXRpb25bXSApIHtcbiAgICB0aGlzLl9kZXZpY2VDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9kZXZpY2VDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUNvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIGVtYWlsX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxDb25maWd1cmF0aW9uPzogQ29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uW107XG4gIHB1YmxpYyBnZXQgZW1haWxDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VtYWlsX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbENvbmZpZ3VyYXRpb24odmFsdWU6IENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbltdICkge1xuICAgIHRoaXMuX2VtYWlsQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIGxhbWJkYV9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFtYmRhQ29uZmlnPzogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnW107XG4gIHB1YmxpYyBnZXQgbGFtYmRhQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhbWJkYV9jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFDb25maWcodmFsdWU6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ1tdICkge1xuICAgIHRoaXMuX2xhbWJkYUNvbmZpZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhbWJkYUNvbmZpZygpIHtcbiAgICB0aGlzLl9sYW1iZGFDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFDb25maWdcbiAgfVxuXG4gIC8vIHBhc3N3b3JkX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXNzd29yZFBvbGljeT86IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5W107XG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFzc3dvcmRfcG9saWN5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFzc3dvcmRQb2xpY3kodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5W10gKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXNzd29yZFBvbGljeSgpIHtcbiAgICB0aGlzLl9wYXNzd29yZFBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRQb2xpY3lcbiAgfVxuXG4gIC8vIHNjaGVtYSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2hlbWE/OiBDb2duaXRvVXNlclBvb2xTY2hlbWFbXTtcbiAgcHVibGljIGdldCBzY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2NoZW1hJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZW1hKHZhbHVlOiBDb2duaXRvVXNlclBvb2xTY2hlbWFbXSApIHtcbiAgICB0aGlzLl9zY2hlbWEgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlbWEoKSB7XG4gICAgdGhpcy5fc2NoZW1hID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlbWFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hXG4gIH1cblxuICAvLyBzbXNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbXNDb25maWd1cmF0aW9uPzogQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbltdO1xuICBwdWJsaWMgZ2V0IHNtc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc21zX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzbXNDb25maWd1cmF0aW9uKHZhbHVlOiBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uW10gKSB7XG4gICAgdGhpcy5fc21zQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fc21zQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc21zQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbXNDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyBzb2Z0d2FyZV90b2tlbl9tZmFfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uW107XG4gIHB1YmxpYyBnZXQgc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc29mdHdhcmVfdG9rZW5fbWZhX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb25bXSApIHtcbiAgICB0aGlzLl9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gdXNlcl9wb29sX2FkZF9vbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlclBvb2xBZGRPbnM/OiBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc1tdO1xuICBwdWJsaWMgZ2V0IHVzZXJQb29sQWRkT25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3VzZXJfcG9vbF9hZGRfb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclBvb2xBZGRPbnModmFsdWU6IENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zW10gKSB7XG4gICAgdGhpcy5fdXNlclBvb2xBZGRPbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VyUG9vbEFkZE9ucygpIHtcbiAgICB0aGlzLl91c2VyUG9vbEFkZE9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlclBvb2xBZGRPbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclBvb2xBZGRPbnNcbiAgfVxuXG4gIC8vIHVzZXJuYW1lX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlcm5hbWVDb25maWd1cmF0aW9uPzogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uW107XG4gIHB1YmxpYyBnZXQgdXNlcm5hbWVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3VzZXJuYW1lX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VybmFtZUNvbmZpZ3VyYXRpb24odmFsdWU6IENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbltdICkge1xuICAgIHRoaXMuX3VzZXJuYW1lQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJuYW1lQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIHZlcmlmaWNhdGlvbl9tZXNzYWdlX3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZT86IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZVtdO1xuICBwdWJsaWMgZ2V0IHZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2ZXJpZmljYXRpb25fbWVzc2FnZV90ZW1wbGF0ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlW10gKSB7XG4gICAgdGhpcy5fdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlKCkge1xuICAgIHRoaXMuX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZVxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGlhc19hdHRyaWJ1dGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9hbGlhc0F0dHJpYnV0ZXMpLFxuICAgICAgYXV0b192ZXJpZmllZF9hdHRyaWJ1dGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzKSxcbiAgICAgIGVtYWlsX3ZlcmlmaWNhdGlvbl9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UpLFxuICAgICAgZW1haWxfdmVyaWZpY2F0aW9uX3N1YmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCksXG4gICAgICBtZmFfY29uZmlndXJhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWZhQ29uZmlndXJhdGlvbiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHNtc19hdXRoZW50aWNhdGlvbl9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2UpLFxuICAgICAgc21zX3ZlcmlmaWNhdGlvbl9tZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbXNWZXJpZmljYXRpb25NZXNzYWdlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdXNlcm5hbWVfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdXNlcm5hbWVBdHRyaWJ1dGVzKSxcbiAgICAgIGFjY291bnRfcmVjb3Zlcnlfc2V0dGluZzogY2RrdGYubGlzdE1hcHBlcihjb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nVG9UZXJyYWZvcm0pKHRoaXMuX2FjY291bnRSZWNvdmVyeVNldHRpbmcpLFxuICAgICAgYWRtaW5fY3JlYXRlX3VzZXJfY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGNvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ1RvVGVycmFmb3JtKSh0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcpLFxuICAgICAgZGV2aWNlX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9kZXZpY2VDb25maWd1cmF0aW9uKSxcbiAgICAgIGVtYWlsX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2VtYWlsQ29uZmlndXJhdGlvbiksXG4gICAgICBsYW1iZGFfY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ1RvVGVycmFmb3JtKSh0aGlzLl9sYW1iZGFDb25maWcpLFxuICAgICAgcGFzc3dvcmRfcG9saWN5OiBjZGt0Zi5saXN0TWFwcGVyKGNvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5VG9UZXJyYWZvcm0pKHRoaXMuX3Bhc3N3b3JkUG9saWN5KSxcbiAgICAgIHNjaGVtYTogY2RrdGYubGlzdE1hcHBlcihjb2duaXRvVXNlclBvb2xTY2hlbWFUb1RlcnJhZm9ybSkodGhpcy5fc2NoZW1hKSxcbiAgICAgIHNtc19jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSkodGhpcy5fc21zQ29uZmlndXJhdGlvbiksXG4gICAgICBzb2Z0d2FyZV90b2tlbl9tZmFfY29uZmlndXJhdGlvbjogY2RrdGYubGlzdE1hcHBlcihjb2duaXRvVXNlclBvb2xTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbiksXG4gICAgICB1c2VyX3Bvb2xfYWRkX29uczogY2RrdGYubGlzdE1hcHBlcihjb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc1RvVGVycmFmb3JtKSh0aGlzLl91c2VyUG9vbEFkZE9ucyksXG4gICAgICB1c2VybmFtZV9jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb24pLFxuICAgICAgdmVyaWZpY2F0aW9uX21lc3NhZ2VfdGVtcGxhdGU6IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlVG9UZXJyYWZvcm0pKHRoaXMuX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSksXG4gICAgfTtcbiAgfVxufVxuIl19