import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubMemberConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html#account_id SecurityhubMember#account_id}.
     */
    readonly accountId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html#email SecurityhubMember#email}.
     */
    readonly email: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html#invite SecurityhubMember#invite}.
     */
    readonly invite?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html aws_securityhub_member}.
 */
export declare class SecurityhubMember extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html aws_securityhub_member} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecurityhubMemberConfig);
    private _accountId;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _email;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get id(): string;
    private _invite?;
    get invite(): boolean;
    set invite(value: boolean);
    resetInvite(): void;
    get inviteInput(): boolean | undefined;
    get masterId(): string;
    get memberStatus(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
