import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#alias_attributes CognitoUserPool#alias_attributes}.
     */
    readonly aliasAttributes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.
     */
    readonly autoVerifiedAttributes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_message CognitoUserPool#email_verification_message}.
     */
    readonly emailVerificationMessage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_subject CognitoUserPool#email_verification_subject}.
     */
    readonly emailVerificationSubject?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mfa_configuration CognitoUserPool#mfa_configuration}.
     */
    readonly mfaConfiguration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_authentication_message CognitoUserPool#sms_authentication_message}.
     */
    readonly smsAuthenticationMessage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_verification_message CognitoUserPool#sms_verification_message}.
     */
    readonly smsVerificationMessage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags CognitoUserPool#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags_all CognitoUserPool#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_attributes CognitoUserPool#username_attributes}.
     */
    readonly usernameAttributes?: string[];
    /**
     * account_recovery_setting block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#account_recovery_setting CognitoUserPool#account_recovery_setting}
     */
    readonly accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting[];
    /**
     * admin_create_user_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#admin_create_user_config CognitoUserPool#admin_create_user_config}
     */
    readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig[];
    /**
     * device_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_configuration CognitoUserPool#device_configuration}
     */
    readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration[];
    /**
     * email_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_configuration CognitoUserPool#email_configuration}
     */
    readonly emailConfiguration?: CognitoUserPoolEmailConfiguration[];
    /**
     * lambda_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_config CognitoUserPool#lambda_config}
     */
    readonly lambdaConfig?: CognitoUserPoolLambdaConfig[];
    /**
     * password_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#password_policy CognitoUserPool#password_policy}
     */
    readonly passwordPolicy?: CognitoUserPoolPasswordPolicy[];
    /**
     * schema block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#schema CognitoUserPool#schema}
     */
    readonly schema?: CognitoUserPoolSchema[];
    /**
     * sms_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_configuration CognitoUserPool#sms_configuration}
     */
    readonly smsConfiguration?: CognitoUserPoolSmsConfiguration[];
    /**
     * software_token_mfa_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}
     */
    readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration[];
    /**
     * user_pool_add_ons block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_pool_add_ons CognitoUserPool#user_pool_add_ons}
     */
    readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns[];
    /**
     * username_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_configuration CognitoUserPool#username_configuration}
     */
    readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration[];
    /**
     * verification_message_template block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verification_message_template CognitoUserPool#verification_message_template}
     */
    readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate[];
}
export interface CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#priority CognitoUserPool#priority}.
     */
    readonly priority: number;
}
export interface CognitoUserPoolAccountRecoverySetting {
    /**
     * recovery_mechanism block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#recovery_mechanism CognitoUserPool#recovery_mechanism}
     */
    readonly recoveryMechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
}
export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}.
     */
    readonly emailMessage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}.
     */
    readonly emailSubject?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}.
     */
    readonly smsMessage?: string;
}
export interface CognitoUserPoolAdminCreateUserConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}.
     */
    readonly allowAdminCreateUserOnly?: boolean;
    /**
     * invite_message_template block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#invite_message_template CognitoUserPool#invite_message_template}
     */
    readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate[];
}
export interface CognitoUserPoolDeviceConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}.
     */
    readonly challengeRequiredOnNewDevice?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}.
     */
    readonly deviceOnlyRememberedOnUserPrompt?: boolean;
}
export interface CognitoUserPoolEmailConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#configuration_set CognitoUserPool#configuration_set}.
     */
    readonly configurationSet?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_sending_account CognitoUserPool#email_sending_account}.
     */
    readonly emailSendingAccount?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#from_email_address CognitoUserPool#from_email_address}.
     */
    readonly fromEmailAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#reply_to_email_address CognitoUserPool#reply_to_email_address}.
     */
    readonly replyToEmailAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#source_arn CognitoUserPool#source_arn}.
     */
    readonly sourceArn?: string;
}
export interface CognitoUserPoolLambdaConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#create_auth_challenge CognitoUserPool#create_auth_challenge}.
     */
    readonly createAuthChallenge?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_message CognitoUserPool#custom_message}.
     */
    readonly customMessage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#define_auth_challenge CognitoUserPool#define_auth_challenge}.
     */
    readonly defineAuthChallenge?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_authentication CognitoUserPool#post_authentication}.
     */
    readonly postAuthentication?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_confirmation CognitoUserPool#post_confirmation}.
     */
    readonly postConfirmation?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_authentication CognitoUserPool#pre_authentication}.
     */
    readonly preAuthentication?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_sign_up CognitoUserPool#pre_sign_up}.
     */
    readonly preSignUp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_token_generation CognitoUserPool#pre_token_generation}.
     */
    readonly preTokenGeneration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_migration CognitoUserPool#user_migration}.
     */
    readonly userMigration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}.
     */
    readonly verifyAuthChallengeResponse?: string;
}
export interface CognitoUserPoolPasswordPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#minimum_length CognitoUserPool#minimum_length}.
     */
    readonly minimumLength?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_lowercase CognitoUserPool#require_lowercase}.
     */
    readonly requireLowercase?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_numbers CognitoUserPool#require_numbers}.
     */
    readonly requireNumbers?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_symbols CognitoUserPool#require_symbols}.
     */
    readonly requireSymbols?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_uppercase CognitoUserPool#require_uppercase}.
     */
    readonly requireUppercase?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}.
     */
    readonly temporaryPasswordValidityDays?: number;
}
export interface CognitoUserPoolSchemaNumberAttributeConstraints {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_value CognitoUserPool#max_value}.
     */
    readonly maxValue?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_value CognitoUserPool#min_value}.
     */
    readonly minValue?: string;
}
export interface CognitoUserPoolSchemaStringAttributeConstraints {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_length CognitoUserPool#max_length}.
     */
    readonly maxLength?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_length CognitoUserPool#min_length}.
     */
    readonly minLength?: string;
}
export interface CognitoUserPoolSchema {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#attribute_data_type CognitoUserPool#attribute_data_type}.
     */
    readonly attributeDataType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#developer_only_attribute CognitoUserPool#developer_only_attribute}.
     */
    readonly developerOnlyAttribute?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mutable CognitoUserPool#mutable}.
     */
    readonly mutable?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#required CognitoUserPool#required}.
     */
    readonly required?: boolean;
    /**
     * number_attribute_constraints block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#number_attribute_constraints CognitoUserPool#number_attribute_constraints}
     */
    readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints[];
    /**
     * string_attribute_constraints block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#string_attribute_constraints CognitoUserPool#string_attribute_constraints}
     */
    readonly stringAttributeConstraints?: CognitoUserPoolSchemaStringAttributeConstraints[];
}
export interface CognitoUserPoolSmsConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#external_id CognitoUserPool#external_id}.
     */
    readonly externalId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sns_caller_arn CognitoUserPool#sns_caller_arn}.
     */
    readonly snsCallerArn: string;
}
export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#enabled CognitoUserPool#enabled}.
     */
    readonly enabled: boolean;
}
export interface CognitoUserPoolUserPoolAddOns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#advanced_security_mode CognitoUserPool#advanced_security_mode}.
     */
    readonly advancedSecurityMode: string;
}
export interface CognitoUserPoolUsernameConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#case_sensitive CognitoUserPool#case_sensitive}.
     */
    readonly caseSensitive: boolean;
}
export interface CognitoUserPoolVerificationMessageTemplate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#default_email_option CognitoUserPool#default_email_option}.
     */
    readonly defaultEmailOption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}.
     */
    readonly emailMessage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message_by_link CognitoUserPool#email_message_by_link}.
     */
    readonly emailMessageByLink?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}.
     */
    readonly emailSubject?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject_by_link CognitoUserPool#email_subject_by_link}.
     */
    readonly emailSubjectByLink?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}.
     */
    readonly smsMessage?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}.
 */
export declare class CognitoUserPool extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CognitoUserPoolConfig);
    private _aliasAttributes?;
    get aliasAttributes(): string[];
    set aliasAttributes(value: string[]);
    resetAliasAttributes(): void;
    get aliasAttributesInput(): string[] | undefined;
    get arn(): string;
    private _autoVerifiedAttributes?;
    get autoVerifiedAttributes(): string[];
    set autoVerifiedAttributes(value: string[]);
    resetAutoVerifiedAttributes(): void;
    get autoVerifiedAttributesInput(): string[] | undefined;
    get creationDate(): string;
    private _emailVerificationMessage?;
    get emailVerificationMessage(): string;
    set emailVerificationMessage(value: string);
    resetEmailVerificationMessage(): void;
    get emailVerificationMessageInput(): string | undefined;
    private _emailVerificationSubject?;
    get emailVerificationSubject(): string;
    set emailVerificationSubject(value: string);
    resetEmailVerificationSubject(): void;
    get emailVerificationSubjectInput(): string | undefined;
    get endpoint(): string;
    get id(): string;
    get lastModifiedDate(): string;
    private _mfaConfiguration?;
    get mfaConfiguration(): string;
    set mfaConfiguration(value: string);
    resetMfaConfiguration(): void;
    get mfaConfigurationInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _smsAuthenticationMessage?;
    get smsAuthenticationMessage(): string;
    set smsAuthenticationMessage(value: string);
    resetSmsAuthenticationMessage(): void;
    get smsAuthenticationMessageInput(): string | undefined;
    private _smsVerificationMessage?;
    get smsVerificationMessage(): string;
    set smsVerificationMessage(value: string);
    resetSmsVerificationMessage(): void;
    get smsVerificationMessageInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _usernameAttributes?;
    get usernameAttributes(): string[];
    set usernameAttributes(value: string[]);
    resetUsernameAttributes(): void;
    get usernameAttributesInput(): string[] | undefined;
    private _accountRecoverySetting?;
    get accountRecoverySetting(): CognitoUserPoolAccountRecoverySetting[];
    set accountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting[]);
    resetAccountRecoverySetting(): void;
    get accountRecoverySettingInput(): CognitoUserPoolAccountRecoverySetting[] | undefined;
    private _adminCreateUserConfig?;
    get adminCreateUserConfig(): CognitoUserPoolAdminCreateUserConfig[];
    set adminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig[]);
    resetAdminCreateUserConfig(): void;
    get adminCreateUserConfigInput(): CognitoUserPoolAdminCreateUserConfig[] | undefined;
    private _deviceConfiguration?;
    get deviceConfiguration(): CognitoUserPoolDeviceConfiguration[];
    set deviceConfiguration(value: CognitoUserPoolDeviceConfiguration[]);
    resetDeviceConfiguration(): void;
    get deviceConfigurationInput(): CognitoUserPoolDeviceConfiguration[] | undefined;
    private _emailConfiguration?;
    get emailConfiguration(): CognitoUserPoolEmailConfiguration[];
    set emailConfiguration(value: CognitoUserPoolEmailConfiguration[]);
    resetEmailConfiguration(): void;
    get emailConfigurationInput(): CognitoUserPoolEmailConfiguration[] | undefined;
    private _lambdaConfig?;
    get lambdaConfig(): CognitoUserPoolLambdaConfig[];
    set lambdaConfig(value: CognitoUserPoolLambdaConfig[]);
    resetLambdaConfig(): void;
    get lambdaConfigInput(): CognitoUserPoolLambdaConfig[] | undefined;
    private _passwordPolicy?;
    get passwordPolicy(): CognitoUserPoolPasswordPolicy[];
    set passwordPolicy(value: CognitoUserPoolPasswordPolicy[]);
    resetPasswordPolicy(): void;
    get passwordPolicyInput(): CognitoUserPoolPasswordPolicy[] | undefined;
    private _schema?;
    get schema(): CognitoUserPoolSchema[];
    set schema(value: CognitoUserPoolSchema[]);
    resetSchema(): void;
    get schemaInput(): CognitoUserPoolSchema[] | undefined;
    private _smsConfiguration?;
    get smsConfiguration(): CognitoUserPoolSmsConfiguration[];
    set smsConfiguration(value: CognitoUserPoolSmsConfiguration[]);
    resetSmsConfiguration(): void;
    get smsConfigurationInput(): CognitoUserPoolSmsConfiguration[] | undefined;
    private _softwareTokenMfaConfiguration?;
    get softwareTokenMfaConfiguration(): CognitoUserPoolSoftwareTokenMfaConfiguration[];
    set softwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration[]);
    resetSoftwareTokenMfaConfiguration(): void;
    get softwareTokenMfaConfigurationInput(): CognitoUserPoolSoftwareTokenMfaConfiguration[] | undefined;
    private _userPoolAddOns?;
    get userPoolAddOns(): CognitoUserPoolUserPoolAddOns[];
    set userPoolAddOns(value: CognitoUserPoolUserPoolAddOns[]);
    resetUserPoolAddOns(): void;
    get userPoolAddOnsInput(): CognitoUserPoolUserPoolAddOns[] | undefined;
    private _usernameConfiguration?;
    get usernameConfiguration(): CognitoUserPoolUsernameConfiguration[];
    set usernameConfiguration(value: CognitoUserPoolUsernameConfiguration[]);
    resetUsernameConfiguration(): void;
    get usernameConfigurationInput(): CognitoUserPoolUsernameConfiguration[] | undefined;
    private _verificationMessageTemplate?;
    get verificationMessageTemplate(): CognitoUserPoolVerificationMessageTemplate[];
    set verificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate[]);
    resetVerificationMessageTemplate(): void;
    get verificationMessageTemplateInput(): CognitoUserPoolVerificationMessageTemplate[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
