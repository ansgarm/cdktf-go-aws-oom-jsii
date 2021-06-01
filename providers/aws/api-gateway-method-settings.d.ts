import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayMethodSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#method_path ApiGatewayMethodSettings#method_path}.
     */
    readonly methodPath: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#rest_api_id ApiGatewayMethodSettings#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#stage_name ApiGatewayMethodSettings#stage_name}.
     */
    readonly stageName: string;
    /**
     * settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#settings ApiGatewayMethodSettings#settings}
     */
    readonly settings: ApiGatewayMethodSettingsSettings[];
}
export interface ApiGatewayMethodSettingsSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}.
     */
    readonly cacheDataEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}.
     */
    readonly cacheTtlInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#caching_enabled ApiGatewayMethodSettings#caching_enabled}.
     */
    readonly cachingEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}.
     */
    readonly dataTraceEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#logging_level ApiGatewayMethodSettings#logging_level}.
     */
    readonly loggingLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}.
     */
    readonly metricsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}.
     */
    readonly requireAuthorizationForCacheControl?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}.
     */
    readonly throttlingBurstLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}.
     */
    readonly throttlingRateLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}.
     */
    readonly unauthorizedCacheControlHeaderStrategy?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings}.
 */
export declare class ApiGatewayMethodSettings extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig);
    get id(): string;
    private _methodPath;
    get methodPath(): string;
    set methodPath(value: string);
    get methodPathInput(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _stageName;
    get stageName(): string;
    set stageName(value: string);
    get stageNameInput(): string;
    private _settings;
    get settings(): ApiGatewayMethodSettingsSettings[];
    set settings(value: ApiGatewayMethodSettingsSettings[]);
    get settingsInput(): ApiGatewayMethodSettingsSettings[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
