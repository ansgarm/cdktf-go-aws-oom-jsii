import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointAppConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#name PinpointApp#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#name_prefix PinpointApp#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#tags PinpointApp#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#tags_all PinpointApp#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * campaign_hook block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#campaign_hook PinpointApp#campaign_hook}
     */
    readonly campaignHook?: PinpointAppCampaignHook[];
    /**
     * limits block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#limits PinpointApp#limits}
     */
    readonly limits?: PinpointAppLimits[];
    /**
     * quiet_time block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#quiet_time PinpointApp#quiet_time}
     */
    readonly quietTime?: PinpointAppQuietTime[];
}
export interface PinpointAppCampaignHook {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#lambda_function_name PinpointApp#lambda_function_name}.
     */
    readonly lambdaFunctionName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#mode PinpointApp#mode}.
     */
    readonly mode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#web_url PinpointApp#web_url}.
     */
    readonly webUrl?: string;
}
export interface PinpointAppLimits {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#daily PinpointApp#daily}.
     */
    readonly daily?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#maximum_duration PinpointApp#maximum_duration}.
     */
    readonly maximumDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#messages_per_second PinpointApp#messages_per_second}.
     */
    readonly messagesPerSecond?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#total PinpointApp#total}.
     */
    readonly total?: number;
}
export interface PinpointAppQuietTime {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#end PinpointApp#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html#start PinpointApp#start}.
     */
    readonly start?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app}.
 */
export declare class PinpointApp extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html aws_pinpoint_app} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: PinpointAppConfig);
    get applicationId(): string;
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _campaignHook?;
    get campaignHook(): PinpointAppCampaignHook[];
    set campaignHook(value: PinpointAppCampaignHook[]);
    resetCampaignHook(): void;
    get campaignHookInput(): PinpointAppCampaignHook[] | undefined;
    private _limits?;
    get limits(): PinpointAppLimits[];
    set limits(value: PinpointAppLimits[]);
    resetLimits(): void;
    get limitsInput(): PinpointAppLimits[] | undefined;
    private _quietTime?;
    get quietTime(): PinpointAppQuietTime[];
    set quietTime(value: PinpointAppQuietTime[]);
    resetQuietTime(): void;
    get quietTimeInput(): PinpointAppQuietTime[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
