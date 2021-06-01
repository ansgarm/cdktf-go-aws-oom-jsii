import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsAccountConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#email OrganizationsAccount#email}.
     */
    readonly email: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}.
     */
    readonly iamUserAccessToBilling?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#name OrganizationsAccount#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#parent_id OrganizationsAccount#parent_id}.
     */
    readonly parentId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#role_name OrganizationsAccount#role_name}.
     */
    readonly roleName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#tags OrganizationsAccount#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html#tags_all OrganizationsAccount#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account}.
 */
export declare class OrganizationsAccount extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OrganizationsAccountConfig);
    get arn(): string;
    private _email;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    private _iamUserAccessToBilling?;
    get iamUserAccessToBilling(): string;
    set iamUserAccessToBilling(value: string);
    resetIamUserAccessToBilling(): void;
    get iamUserAccessToBillingInput(): string | undefined;
    get id(): string;
    get joinedMethod(): string;
    get joinedTimestamp(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentId?;
    get parentId(): string;
    set parentId(value: string);
    resetParentId(): void;
    get parentIdInput(): string | undefined;
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    resetRoleName(): void;
    get roleNameInput(): string | undefined;
    get status(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
