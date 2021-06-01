import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#encoding IamUserSshKey#encoding}.
     */
    readonly encoding: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#public_key IamUserSshKey#public_key}.
     */
    readonly publicKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#status IamUserSshKey#status}.
     */
    readonly status?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html#username IamUserSshKey#username}.
     */
    readonly username: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html aws_iam_user_ssh_key}.
 */
export declare class IamUserSshKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html aws_iam_user_ssh_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamUserSshKeyConfig);
    private _encoding;
    get encoding(): string;
    set encoding(value: string);
    get encodingInput(): string;
    get fingerprint(): string;
    get id(): string;
    private _publicKey;
    get publicKey(): string;
    set publicKey(value: string);
    get publicKeyInput(): string;
    get sshPublicKeyId(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _username;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
