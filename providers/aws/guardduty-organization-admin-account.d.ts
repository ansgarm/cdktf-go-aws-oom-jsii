import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyOrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html#admin_account_id GuarddutyOrganizationAdminAccount#admin_account_id}.
     */
    readonly adminAccountId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html aws_guardduty_organization_admin_account}.
 */
export declare class GuarddutyOrganizationAdminAccount extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_admin_account.html aws_guardduty_organization_admin_account} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyOrganizationAdminAccountConfig);
    private _adminAccountId;
    get adminAccountId(): string;
    set adminAccountId(value: string);
    get adminAccountIdInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
