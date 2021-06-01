import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}.
     */
    readonly cacheKeyParameters?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_namespace ApiGatewayIntegration#cache_namespace}.
     */
    readonly cacheNamespace?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_id ApiGatewayIntegration#connection_id}.
     */
    readonly connectionId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_type ApiGatewayIntegration#connection_type}.
     */
    readonly connectionType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#content_handling ApiGatewayIntegration#content_handling}.
     */
    readonly contentHandling?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#credentials ApiGatewayIntegration#credentials}.
     */
    readonly credentials?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#http_method ApiGatewayIntegration#http_method}.
     */
    readonly httpMethod: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#integration_http_method ApiGatewayIntegration#integration_http_method}.
     */
    readonly integrationHttpMethod?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}.
     */
    readonly passthroughBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_parameters ApiGatewayIntegration#request_parameters}.
     */
    readonly requestParameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_templates ApiGatewayIntegration#request_templates}.
     */
    readonly requestTemplates?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#resource_id ApiGatewayIntegration#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#rest_api_id ApiGatewayIntegration#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}.
     */
    readonly timeoutMilliseconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#type ApiGatewayIntegration#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#uri ApiGatewayIntegration#uri}.
     */
    readonly uri?: string;
    /**
     * tls_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#tls_config ApiGatewayIntegration#tls_config}
     */
    readonly tlsConfig?: ApiGatewayIntegrationTlsConfig[];
}
export interface ApiGatewayIntegrationTlsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}.
     */
    readonly insecureSkipVerification?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration}.
 */
export declare class ApiGatewayIntegration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig);
    private _cacheKeyParameters?;
    get cacheKeyParameters(): string[];
    set cacheKeyParameters(value: string[]);
    resetCacheKeyParameters(): void;
    get cacheKeyParametersInput(): string[] | undefined;
    private _cacheNamespace?;
    get cacheNamespace(): string;
    set cacheNamespace(value: string);
    resetCacheNamespace(): void;
    get cacheNamespaceInput(): string | undefined;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    resetConnectionId(): void;
    get connectionIdInput(): string | undefined;
    private _connectionType?;
    get connectionType(): string;
    set connectionType(value: string);
    resetConnectionType(): void;
    get connectionTypeInput(): string | undefined;
    private _contentHandling?;
    get contentHandling(): string;
    set contentHandling(value: string);
    resetContentHandling(): void;
    get contentHandlingInput(): string | undefined;
    private _credentials?;
    get credentials(): string;
    set credentials(value: string);
    resetCredentials(): void;
    get credentialsInput(): string | undefined;
    private _httpMethod;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
    private _integrationHttpMethod?;
    get integrationHttpMethod(): string;
    set integrationHttpMethod(value: string);
    resetIntegrationHttpMethod(): void;
    get integrationHttpMethodInput(): string | undefined;
    private _passthroughBehavior?;
    get passthroughBehavior(): string;
    set passthroughBehavior(value: string);
    resetPassthroughBehavior(): void;
    get passthroughBehaviorInput(): string | undefined;
    private _requestParameters?;
    get requestParameters(): {
        [key: string]: string;
    };
    set requestParameters(value: {
        [key: string]: string;
    });
    resetRequestParameters(): void;
    get requestParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _requestTemplates?;
    get requestTemplates(): {
        [key: string]: string;
    };
    set requestTemplates(value: {
        [key: string]: string;
    });
    resetRequestTemplates(): void;
    get requestTemplatesInput(): {
        [key: string]: string;
    } | undefined;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _timeoutMilliseconds?;
    get timeoutMilliseconds(): number;
    set timeoutMilliseconds(value: number);
    resetTimeoutMilliseconds(): void;
    get timeoutMillisecondsInput(): number | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
    private _tlsConfig?;
    get tlsConfig(): ApiGatewayIntegrationTlsConfig[];
    set tlsConfig(value: ApiGatewayIntegrationTlsConfig[]);
    resetTlsConfig(): void;
    get tlsConfigInput(): ApiGatewayIntegrationTlsConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
