import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#name SesConfigurationSet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}.
     */
    readonly reputationMetricsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#sending_enabled SesConfigurationSet#sending_enabled}.
     */
    readonly sendingEnabled?: boolean;
    /**
     * delivery_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#delivery_options SesConfigurationSet#delivery_options}
     */
    readonly deliveryOptions?: SesConfigurationSetDeliveryOptions[];
}
export interface SesConfigurationSetDeliveryOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#tls_policy SesConfigurationSet#tls_policy}.
     */
    readonly tlsPolicy?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set}.
 */
export declare class SesConfigurationSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesConfigurationSetConfig);
    get arn(): string;
    get id(): string;
    get lastFreshStart(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _reputationMetricsEnabled?;
    get reputationMetricsEnabled(): boolean;
    set reputationMetricsEnabled(value: boolean);
    resetReputationMetricsEnabled(): void;
    get reputationMetricsEnabledInput(): boolean | undefined;
    private _sendingEnabled?;
    get sendingEnabled(): boolean;
    set sendingEnabled(value: boolean);
    resetSendingEnabled(): void;
    get sendingEnabledInput(): boolean | undefined;
    private _deliveryOptions?;
    get deliveryOptions(): SesConfigurationSetDeliveryOptions[];
    set deliveryOptions(value: SesConfigurationSetDeliveryOptions[]);
    resetDeliveryOptions(): void;
    get deliveryOptionsInput(): SesConfigurationSetDeliveryOptions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
