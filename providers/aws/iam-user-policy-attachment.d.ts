import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html#policy_arn IamUserPolicyAttachment#policy_arn}.
     */
    readonly policyArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html#user IamUserPolicyAttachment#user}.
     */
    readonly user: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html aws_iam_user_policy_attachment}.
 */
export declare class IamUserPolicyAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html aws_iam_user_policy_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamUserPolicyAttachmentConfig);
    get id(): string;
    private _policyArn;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string;
    private _user;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
