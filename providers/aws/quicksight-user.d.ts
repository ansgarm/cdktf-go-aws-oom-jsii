import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightUserConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#aws_account_id QuicksightUser#aws_account_id}.
     */
    readonly awsAccountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#email QuicksightUser#email}.
     */
    readonly email: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#iam_arn QuicksightUser#iam_arn}.
     */
    readonly iamArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#identity_type QuicksightUser#identity_type}.
     */
    readonly identityType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#namespace QuicksightUser#namespace}.
     */
    readonly namespace?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#session_name QuicksightUser#session_name}.
     */
    readonly sessionName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#user_name QuicksightUser#user_name}.
     */
    readonly userName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html#user_role QuicksightUser#user_role}.
     */
    readonly userRole: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html aws_quicksight_user}.
 */
export declare class QuicksightUser extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html aws_quicksight_user} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: QuicksightUserConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _email;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _iamArn?;
    get iamArn(): string;
    set iamArn(value: string);
    resetIamArn(): void;
    get iamArnInput(): string | undefined;
    get id(): string;
    private _identityType;
    get identityType(): string;
    set identityType(value: string);
    get identityTypeInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _sessionName?;
    get sessionName(): string;
    set sessionName(value: string);
    resetSessionName(): void;
    get sessionNameInput(): string | undefined;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string | undefined;
    private _userRole;
    get userRole(): string;
    set userRole(value: string);
    get userRoleInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
