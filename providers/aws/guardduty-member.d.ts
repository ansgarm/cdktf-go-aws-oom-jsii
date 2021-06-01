import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyMemberConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#account_id GuarddutyMember#account_id}.
     */
    readonly accountId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#detector_id GuarddutyMember#detector_id}.
     */
    readonly detectorId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#disable_email_notification GuarddutyMember#disable_email_notification}.
     */
    readonly disableEmailNotification?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#email GuarddutyMember#email}.
     */
    readonly email: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invitation_message GuarddutyMember#invitation_message}.
     */
    readonly invitationMessage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#invite GuarddutyMember#invite}.
     */
    readonly invite?: boolean;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#timeouts GuarddutyMember#timeouts}
     */
    readonly timeouts?: GuarddutyMemberTimeouts;
}
export interface GuarddutyMemberTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#create GuarddutyMember#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html#update GuarddutyMember#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member}.
 */
export declare class GuarddutyMember extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyMemberConfig);
    private _accountId;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _detectorId;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    private _disableEmailNotification?;
    get disableEmailNotification(): boolean;
    set disableEmailNotification(value: boolean);
    resetDisableEmailNotification(): void;
    get disableEmailNotificationInput(): boolean | undefined;
    private _email;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get id(): string;
    private _invitationMessage?;
    get invitationMessage(): string;
    set invitationMessage(value: string);
    resetInvitationMessage(): void;
    get invitationMessageInput(): string | undefined;
    private _invite?;
    get invite(): boolean;
    set invite(value: boolean);
    resetInvite(): void;
    get inviteInput(): boolean | undefined;
    get relationshipStatus(): string;
    private _timeouts?;
    get timeouts(): GuarddutyMemberTimeouts;
    set timeouts(value: GuarddutyMemberTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): GuarddutyMemberTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
