import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserLoginProfileConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#password_length IamUserLoginProfile#password_length}.
     */
    readonly passwordLength?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#password_reset_required IamUserLoginProfile#password_reset_required}.
     */
    readonly passwordResetRequired?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#pgp_key IamUserLoginProfile#pgp_key}.
     */
    readonly pgpKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html#user IamUserLoginProfile#user}.
     */
    readonly user: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html aws_iam_user_login_profile}.
 */
export declare class IamUserLoginProfile extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html aws_iam_user_login_profile} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamUserLoginProfileConfig);
    get encryptedPassword(): string;
    get id(): string;
    get keyFingerprint(): string;
    private _passwordLength?;
    get passwordLength(): number;
    set passwordLength(value: number);
    resetPasswordLength(): void;
    get passwordLengthInput(): number | undefined;
    private _passwordResetRequired?;
    get passwordResetRequired(): boolean;
    set passwordResetRequired(value: boolean);
    resetPasswordResetRequired(): void;
    get passwordResetRequiredInput(): boolean | undefined;
    private _pgpKey;
    get pgpKey(): string;
    set pgpKey(value: string);
    get pgpKeyInput(): string;
    private _user;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
