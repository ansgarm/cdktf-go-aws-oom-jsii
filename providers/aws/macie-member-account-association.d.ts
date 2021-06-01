import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MacieMemberAccountAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html#member_account_id MacieMemberAccountAssociation#member_account_id}.
     */
    readonly memberAccountId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html aws_macie_member_account_association}.
 */
export declare class MacieMemberAccountAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html aws_macie_member_account_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MacieMemberAccountAssociationConfig);
    get id(): string;
    private _memberAccountId;
    get memberAccountId(): string;
    set memberAccountId(value: string);
    get memberAccountIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
