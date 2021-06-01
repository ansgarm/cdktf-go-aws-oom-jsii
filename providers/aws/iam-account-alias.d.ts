import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamAccountAliasConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html#account_alias IamAccountAlias#account_alias}.
     */
    readonly accountAlias: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias}.
 */
export declare class IamAccountAlias extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html aws_iam_account_alias} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamAccountAliasConfig);
    private _accountAlias;
    get accountAlias(): string;
    set accountAlias(value: string);
    get accountAliasInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
