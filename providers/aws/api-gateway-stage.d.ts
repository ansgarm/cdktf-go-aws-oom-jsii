import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayStageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}.
     */
    readonly cacheClusterEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#cache_cluster_size ApiGatewayStage#cache_cluster_size}.
     */
    readonly cacheClusterSize?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#client_certificate_id ApiGatewayStage#client_certificate_id}.
     */
    readonly clientCertificateId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#deployment_id ApiGatewayStage#deployment_id}.
     */
    readonly deploymentId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#description ApiGatewayStage#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#documentation_version ApiGatewayStage#documentation_version}.
     */
    readonly documentationVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#rest_api_id ApiGatewayStage#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#stage_name ApiGatewayStage#stage_name}.
     */
    readonly stageName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#tags ApiGatewayStage#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#tags_all ApiGatewayStage#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#variables ApiGatewayStage#variables}.
     */
    readonly variables?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}.
     */
    readonly xrayTracingEnabled?: boolean;
    /**
     * access_log_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#access_log_settings ApiGatewayStage#access_log_settings}
     */
    readonly accessLogSettings?: ApiGatewayStageAccessLogSettings[];
}
export interface ApiGatewayStageAccessLogSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#destination_arn ApiGatewayStage#destination_arn}.
     */
    readonly destinationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#format ApiGatewayStage#format}.
     */
    readonly format: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage}.
 */
export declare class ApiGatewayStage extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayStageConfig);
    get arn(): string;
    private _cacheClusterEnabled?;
    get cacheClusterEnabled(): boolean;
    set cacheClusterEnabled(value: boolean);
    resetCacheClusterEnabled(): void;
    get cacheClusterEnabledInput(): boolean | undefined;
    private _cacheClusterSize?;
    get cacheClusterSize(): string;
    set cacheClusterSize(value: string);
    resetCacheClusterSize(): void;
    get cacheClusterSizeInput(): string | undefined;
    private _clientCertificateId?;
    get clientCertificateId(): string;
    set clientCertificateId(value: string);
    resetClientCertificateId(): void;
    get clientCertificateIdInput(): string | undefined;
    private _deploymentId;
    get deploymentId(): string;
    set deploymentId(value: string);
    get deploymentIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _documentationVersion?;
    get documentationVersion(): string;
    set documentationVersion(value: string);
    resetDocumentationVersion(): void;
    get documentationVersionInput(): string | undefined;
    get executionArn(): string;
    get id(): string;
    get invokeUrl(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _stageName;
    get stageName(): string;
    set stageName(value: string);
    get stageNameInput(): string;
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
    private _variables?;
    get variables(): {
        [key: string]: string;
    };
    set variables(value: {
        [key: string]: string;
    });
    resetVariables(): void;
    get variablesInput(): {
        [key: string]: string;
    } | undefined;
    private _xrayTracingEnabled?;
    get xrayTracingEnabled(): boolean;
    set xrayTracingEnabled(value: boolean);
    resetXrayTracingEnabled(): void;
    get xrayTracingEnabledInput(): boolean | undefined;
    private _accessLogSettings?;
    get accessLogSettings(): ApiGatewayStageAccessLogSettings[];
    set accessLogSettings(value: ApiGatewayStageAccessLogSettings[]);
    resetAccessLogSettings(): void;
    get accessLogSettingsInput(): ApiGatewayStageAccessLogSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
