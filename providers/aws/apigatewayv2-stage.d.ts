import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2StageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#api_id Apigatewayv2Stage#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#auto_deploy Apigatewayv2Stage#auto_deploy}.
     */
    readonly autoDeploy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#client_certificate_id Apigatewayv2Stage#client_certificate_id}.
     */
    readonly clientCertificateId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#deployment_id Apigatewayv2Stage#deployment_id}.
     */
    readonly deploymentId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#description Apigatewayv2Stage#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#name Apigatewayv2Stage#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#stage_variables Apigatewayv2Stage#stage_variables}.
     */
    readonly stageVariables?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags Apigatewayv2Stage#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags_all Apigatewayv2Stage#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * access_log_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#access_log_settings Apigatewayv2Stage#access_log_settings}
     */
    readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings[];
    /**
     * default_route_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#default_route_settings Apigatewayv2Stage#default_route_settings}
     */
    readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings[];
    /**
     * route_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_settings Apigatewayv2Stage#route_settings}
     */
    readonly routeSettings?: Apigatewayv2StageRouteSettings[];
}
export interface Apigatewayv2StageAccessLogSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#destination_arn Apigatewayv2Stage#destination_arn}.
     */
    readonly destinationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#format Apigatewayv2Stage#format}.
     */
    readonly format: string;
}
export interface Apigatewayv2StageDefaultRouteSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.
     */
    readonly dataTraceEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.
     */
    readonly detailedMetricsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}.
     */
    readonly loggingLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.
     */
    readonly throttlingBurstLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.
     */
    readonly throttlingRateLimit?: number;
}
export interface Apigatewayv2StageRouteSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.
     */
    readonly dataTraceEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.
     */
    readonly detailedMetricsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}.
     */
    readonly loggingLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_key Apigatewayv2Stage#route_key}.
     */
    readonly routeKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.
     */
    readonly throttlingBurstLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.
     */
    readonly throttlingRateLimit?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage}.
 */
export declare class Apigatewayv2Stage extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2StageConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get arn(): string;
    private _autoDeploy?;
    get autoDeploy(): boolean;
    set autoDeploy(value: boolean);
    resetAutoDeploy(): void;
    get autoDeployInput(): boolean | undefined;
    private _clientCertificateId?;
    get clientCertificateId(): string;
    set clientCertificateId(value: string);
    resetClientCertificateId(): void;
    get clientCertificateIdInput(): string | undefined;
    private _deploymentId?;
    get deploymentId(): string;
    set deploymentId(value: string);
    resetDeploymentId(): void;
    get deploymentIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get executionArn(): string;
    get id(): string;
    get invokeUrl(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _stageVariables?;
    get stageVariables(): {
        [key: string]: string;
    };
    set stageVariables(value: {
        [key: string]: string;
    });
    resetStageVariables(): void;
    get stageVariablesInput(): {
        [key: string]: string;
    } | undefined;
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
    private _accessLogSettings?;
    get accessLogSettings(): Apigatewayv2StageAccessLogSettings[];
    set accessLogSettings(value: Apigatewayv2StageAccessLogSettings[]);
    resetAccessLogSettings(): void;
    get accessLogSettingsInput(): Apigatewayv2StageAccessLogSettings[] | undefined;
    private _defaultRouteSettings?;
    get defaultRouteSettings(): Apigatewayv2StageDefaultRouteSettings[];
    set defaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings[]);
    resetDefaultRouteSettings(): void;
    get defaultRouteSettingsInput(): Apigatewayv2StageDefaultRouteSettings[] | undefined;
    private _routeSettings?;
    get routeSettings(): Apigatewayv2StageRouteSettings[];
    set routeSettings(value: Apigatewayv2StageRouteSettings[]);
    resetRouteSettings(): void;
    get routeSettingsInput(): Apigatewayv2StageRouteSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
