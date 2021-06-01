import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointBaiduChannelConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#api_key PinpointBaiduChannel#api_key}.
     */
    readonly apiKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#application_id PinpointBaiduChannel#application_id}.
     */
    readonly applicationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#enabled PinpointBaiduChannel#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html#secret_key PinpointBaiduChannel#secret_key}.
     */
    readonly secretKey: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html aws_pinpoint_baidu_channel}.
 */
export declare class PinpointBaiduChannel extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html aws_pinpoint_baidu_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: PinpointBaiduChannelConfig);
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
    private _secretKey;
    get secretKey(): string;
    set secretKey(value: string);
    get secretKeyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
