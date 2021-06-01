import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#name IamUserPolicy#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#name_prefix IamUserPolicy#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#policy IamUserPolicy#policy}.
     */
    readonly policy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html#user IamUserPolicy#user}.
     */
    readonly user: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html aws_iam_user_policy}.
 */
export declare class IamUserPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html aws_iam_user_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamUserPolicyConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _user;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
