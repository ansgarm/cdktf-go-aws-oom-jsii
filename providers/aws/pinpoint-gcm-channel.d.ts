import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointGcmChannelConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html#api_key PinpointGcmChannel#api_key}.
     */
    readonly apiKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html#application_id PinpointGcmChannel#application_id}.
     */
    readonly applicationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html#enabled PinpointGcmChannel#enabled}.
     */
    readonly enabled?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html aws_pinpoint_gcm_channel}.
 */
export declare class PinpointGcmChannel extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html aws_pinpoint_gcm_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: PinpointGcmChannelConfig);
    private _apiKey;
    get apiKey(): string;
    set apiKey(value: string);
    get apiKeyInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
