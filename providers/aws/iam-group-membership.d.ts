import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html#group IamGroupMembership#group}.
     */
    readonly group: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html#name IamGroupMembership#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html#users IamGroupMembership#users}.
     */
    readonly users: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html aws_iam_group_membership}.
 */
export declare class IamGroupMembership extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html aws_iam_group_membership} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamGroupMembershipConfig);
    private _group;
    get group(): string;
    set group(value: string);
    get groupInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _users;
    get users(): string[];
    set users(value: string[]);
    get usersInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
