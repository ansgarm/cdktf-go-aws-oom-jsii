import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}.
     */
    readonly endpointGroupRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}.
     */
    readonly healthCheckIntervalSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.
     */
    readonly healthCheckPath?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_port GlobalacceleratorEndpointGroup#health_check_port}.
     */
    readonly healthCheckPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}.
     */
    readonly healthCheckProtocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#listener_arn GlobalacceleratorEndpointGroup#listener_arn}.
     */
    readonly listenerArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#threshold_count GlobalacceleratorEndpointGroup#threshold_count}.
     */
    readonly thresholdCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}.
     */
    readonly trafficDialPercentage?: number;
    /**
     * endpoint_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}
     */
    readonly endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[];
    /**
     * port_override block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#port_override GlobalacceleratorEndpointGroup#port_override}
     */
    readonly portOverride?: GlobalacceleratorEndpointGroupPortOverride[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#timeouts GlobalacceleratorEndpointGroup#timeouts}
     */
    readonly timeouts?: GlobalacceleratorEndpointGroupTimeouts;
}
export interface GlobalacceleratorEndpointGroupEndpointConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}.
     */
    readonly clientIpPreservationEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}.
     */
    readonly endpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#weight GlobalacceleratorEndpointGroup#weight}.
     */
    readonly weight?: number;
}
export interface GlobalacceleratorEndpointGroupPortOverride {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}.
     */
    readonly endpointPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#listener_port GlobalacceleratorEndpointGroup#listener_port}.
     */
    readonly listenerPort: number;
}
export interface GlobalacceleratorEndpointGroupTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#create GlobalacceleratorEndpointGroup#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#delete GlobalacceleratorEndpointGroup#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#update GlobalacceleratorEndpointGroup#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group}.
 */
export declare class GlobalacceleratorEndpointGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlobalacceleratorEndpointGroupConfig);
    get arn(): string;
    private _endpointGroupRegion?;
    get endpointGroupRegion(): string;
    set endpointGroupRegion(value: string);
    resetEndpointGroupRegion(): void;
    get endpointGroupRegionInput(): string | undefined;
    private _healthCheckIntervalSeconds?;
    get healthCheckIntervalSeconds(): number;
    set healthCheckIntervalSeconds(value: number);
    resetHealthCheckIntervalSeconds(): void;
    get healthCheckIntervalSecondsInput(): number | undefined;
    private _healthCheckPath?;
    get healthCheckPath(): string;
    set healthCheckPath(value: string);
    resetHealthCheckPath(): void;
    get healthCheckPathInput(): string | undefined;
    private _healthCheckPort?;
    get healthCheckPort(): number;
    set healthCheckPort(value: number);
    resetHealthCheckPort(): void;
    get healthCheckPortInput(): number | undefined;
    private _healthCheckProtocol?;
    get healthCheckProtocol(): string;
    set healthCheckProtocol(value: string);
    resetHealthCheckProtocol(): void;
    get healthCheckProtocolInput(): string | undefined;
    get id(): string;
    private _listenerArn;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string;
    private _thresholdCount?;
    get thresholdCount(): number;
    set thresholdCount(value: number);
    resetThresholdCount(): void;
    get thresholdCountInput(): number | undefined;
    private _trafficDialPercentage?;
    get trafficDialPercentage(): number;
    set trafficDialPercentage(value: number);
    resetTrafficDialPercentage(): void;
    get trafficDialPercentageInput(): number | undefined;
    private _endpointConfiguration?;
    get endpointConfiguration(): GlobalacceleratorEndpointGroupEndpointConfiguration[];
    set endpointConfiguration(value: GlobalacceleratorEndpointGroupEndpointConfiguration[]);
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): GlobalacceleratorEndpointGroupEndpointConfiguration[] | undefined;
    private _portOverride?;
    get portOverride(): GlobalacceleratorEndpointGroupPortOverride[];
    set portOverride(value: GlobalacceleratorEndpointGroupPortOverride[]);
    resetPortOverride(): void;
    get portOverrideInput(): GlobalacceleratorEndpointGroupPortOverride[] | undefined;
    private _timeouts?;
    get timeouts(): GlobalacceleratorEndpointGroupTimeouts;
    set timeouts(value: GlobalacceleratorEndpointGroupTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): GlobalacceleratorEndpointGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
