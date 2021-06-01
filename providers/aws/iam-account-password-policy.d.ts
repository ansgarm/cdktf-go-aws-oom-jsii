import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamAccountPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.
     */
    readonly allowUsersToChangePassword?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#hard_expiry IamAccountPasswordPolicy#hard_expiry}.
     */
    readonly hardExpiry?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#max_password_age IamAccountPasswordPolicy#max_password_age}.
     */
    readonly maxPasswordAge?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.
     */
    readonly minimumPasswordLength?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.
     */
    readonly passwordReusePrevention?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.
     */
    readonly requireLowercaseCharacters?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_numbers IamAccountPasswordPolicy#require_numbers}.
     */
    readonly requireNumbers?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_symbols IamAccountPasswordPolicy#require_symbols}.
     */
    readonly requireSymbols?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.
     */
    readonly requireUppercaseCharacters?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy}.
 */
export declare class IamAccountPasswordPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: IamAccountPasswordPolicyConfig);
    private _allowUsersToChangePassword?;
    get allowUsersToChangePassword(): boolean;
    set allowUsersToChangePassword(value: boolean);
    resetAllowUsersToChangePassword(): void;
    get allowUsersToChangePasswordInput(): boolean | undefined;
    get expirePasswords(): boolean;
    private _hardExpiry?;
    get hardExpiry(): boolean;
    set hardExpiry(value: boolean);
    resetHardExpiry(): void;
    get hardExpiryInput(): boolean | undefined;
    get id(): string;
    private _maxPasswordAge?;
    get maxPasswordAge(): number;
    set maxPasswordAge(value: number);
    resetMaxPasswordAge(): void;
    get maxPasswordAgeInput(): number | undefined;
    private _minimumPasswordLength?;
    get minimumPasswordLength(): number;
    set minimumPasswordLength(value: number);
    resetMinimumPasswordLength(): void;
    get minimumPasswordLengthInput(): number | undefined;
    private _passwordReusePrevention?;
    get passwordReusePrevention(): number;
    set passwordReusePrevention(value: number);
    resetPasswordReusePrevention(): void;
    get passwordReusePreventionInput(): number | undefined;
    private _requireLowercaseCharacters?;
    get requireLowercaseCharacters(): boolean;
    set requireLowercaseCharacters(value: boolean);
    resetRequireLowercaseCharacters(): void;
    get requireLowercaseCharactersInput(): boolean | undefined;
    private _requireNumbers?;
    get requireNumbers(): boolean;
    set requireNumbers(value: boolean);
    resetRequireNumbers(): void;
    get requireNumbersInput(): boolean | undefined;
    private _requireSymbols?;
    get requireSymbols(): boolean;
    set requireSymbols(value: boolean);
    resetRequireSymbols(): void;
    get requireSymbolsInput(): boolean | undefined;
    private _requireUppercaseCharacters?;
    get requireUppercaseCharacters(): boolean;
    set requireUppercaseCharacters(value: boolean);
    resetRequireUppercaseCharacters(): void;
    get requireUppercaseCharactersInput(): boolean | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
