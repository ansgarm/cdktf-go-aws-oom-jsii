import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html#groups IamUserGroupMembership#groups}.
     */
    readonly groups: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html#user IamUserGroupMembership#user}.
     */
    readonly user: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html aws_iam_user_group_membership}.
 */
export declare class IamUserGroupMembership extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html aws_iam_user_group_membership} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamUserGroupMembershipConfig);
    private _groups;
    get groups(): string[];
    set groups(value: string[]);
    get groupsInput(): string[];
    get id(): string;
    private _user;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
