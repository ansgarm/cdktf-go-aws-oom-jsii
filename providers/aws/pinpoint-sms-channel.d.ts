import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointSmsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#application_id PinpointSmsChannel#application_id}.
     */
    readonly applicationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#enabled PinpointSmsChannel#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#sender_id PinpointSmsChannel#sender_id}.
     */
    readonly senderId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html#short_code PinpointSmsChannel#short_code}.
     */
    readonly shortCode?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html aws_pinpoint_sms_channel}.
 */
export declare class PinpointSmsChannel extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html aws_pinpoint_sms_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: PinpointSmsChannelConfig);
    private _applicationId;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get id(): string;
    get promotionalMessagesPerSecond(): number;
    private _senderId?;
    get senderId(): string;
    set senderId(value: string);
    resetSenderId(): void;
    get senderIdInput(): string | undefined;
    private _shortCode?;
    get shortCode(): string;
    set shortCode(value: string);
    resetShortCode(): void;
    get shortCodeInput(): string | undefined;
    get transactionalMessagesPerSecond(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
