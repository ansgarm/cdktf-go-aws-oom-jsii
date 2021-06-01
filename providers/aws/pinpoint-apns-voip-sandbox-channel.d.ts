import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointApnsVoipSandboxChannelConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#application_id PinpointApnsVoipSandboxChannel#application_id}.
     */
    readonly applicationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}.
     */
    readonly bundleId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#certificate PinpointApnsVoipSandboxChannel#certificate}.
     */
    readonly certificate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}.
     */
    readonly defaultAuthenticationMethod?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#enabled PinpointApnsVoipSandboxChannel#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#private_key PinpointApnsVoipSandboxChannel#private_key}.
     */
    readonly privateKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#team_id PinpointApnsVoipSandboxChannel#team_id}.
     */
    readonly teamId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#token_key PinpointApnsVoipSandboxChannel#token_key}.
     */
    readonly tokenKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}.
     */
    readonly tokenKeyId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html aws_pinpoint_apns_voip_sandbox_channel}.
 */
export declare class PinpointApnsVoipSandboxChannel extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html aws_pinpoint_apns_voip_sandbox_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: PinpointApnsVoipSandboxChannelConfig);
    private _applicationId;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    resetBundleId(): void;
    get bundleIdInput(): string | undefined;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string | undefined;
    private _defaultAuthenticationMethod?;
    get defaultAuthenticationMethod(): string;
    set defaultAuthenticationMethod(value: string);
    resetDefaultAuthenticationMethod(): void;
    get defaultAuthenticationMethodInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get id(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string | undefined;
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    resetTeamId(): void;
    get teamIdInput(): string | undefined;
    private _tokenKey?;
    get tokenKey(): string;
    set tokenKey(value: string);
    resetTokenKey(): void;
    get tokenKeyInput(): string | undefined;
    private _tokenKeyId?;
    get tokenKeyId(): string;
    set tokenKeyId(value: string);
    resetTokenKeyId(): void;
    get tokenKeyIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
