import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyInviteAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#detector_id GuarddutyInviteAccepter#detector_id}.
     */
    readonly detectorId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#master_account_id GuarddutyInviteAccepter#master_account_id}.
     */
    readonly masterAccountId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#timeouts GuarddutyInviteAccepter#timeouts}
     */
    readonly timeouts?: GuarddutyInviteAccepterTimeouts;
}
export interface GuarddutyInviteAccepterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#create GuarddutyInviteAccepter#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter}.
 */
export declare class GuarddutyInviteAccepter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyInviteAccepterConfig);
    private _detectorId;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get id(): string;
    private _masterAccountId;
    get masterAccountId(): string;
    set masterAccountId(value: string);
    get masterAccountIdInput(): string;
    private _timeouts?;
    get timeouts(): GuarddutyInviteAccepterTimeouts;
    set timeouts(value: GuarddutyInviteAccepterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): GuarddutyInviteAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
