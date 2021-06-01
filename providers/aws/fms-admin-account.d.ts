import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FmsAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_admin_account.html#account_id FmsAdminAccount#account_id}.
     */
    readonly accountId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_admin_account.html aws_fms_admin_account}.
 */
export declare class FmsAdminAccount extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_admin_account.html aws_fms_admin_account} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: FmsAdminAccountConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
