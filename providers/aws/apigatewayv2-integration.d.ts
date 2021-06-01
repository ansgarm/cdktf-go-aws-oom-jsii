import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2IntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#api_id Apigatewayv2Integration#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#connection_id Apigatewayv2Integration#connection_id}.
     */
    readonly connectionId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#connection_type Apigatewayv2Integration#connection_type}.
     */
    readonly connectionType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}.
     */
    readonly contentHandlingStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#credentials_arn Apigatewayv2Integration#credentials_arn}.
     */
    readonly credentialsArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#description Apigatewayv2Integration#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_method Apigatewayv2Integration#integration_method}.
     */
    readonly integrationMethod?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_subtype Apigatewayv2Integration#integration_subtype}.
     */
    readonly integrationSubtype?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_type Apigatewayv2Integration#integration_type}.
     */
    readonly integrationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_uri Apigatewayv2Integration#integration_uri}.
     */
    readonly integrationUri?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}.
     */
    readonly passthroughBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#payload_format_version Apigatewayv2Integration#payload_format_version}.
     */
    readonly payloadFormatVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#request_parameters Apigatewayv2Integration#request_parameters}.
     */
    readonly requestParameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#request_templates Apigatewayv2Integration#request_templates}.
     */
    readonly requestTemplates?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#template_selection_expression Apigatewayv2Integration#template_selection_expression}.
     */
    readonly templateSelectionExpression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}.
     */
    readonly timeoutMilliseconds?: number;
    /**
     * response_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#response_parameters Apigatewayv2Integration#response_parameters}
     */
    readonly responseParameters?: Apigatewayv2IntegrationResponseParameters[];
    /**
     * tls_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#tls_config Apigatewayv2Integration#tls_config}
     */
    readonly tlsConfig?: Apigatewayv2IntegrationTlsConfig[];
}
export interface Apigatewayv2IntegrationResponseParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#mappings Apigatewayv2Integration#mappings}.
     */
    readonly mappings: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#status_code Apigatewayv2Integration#status_code}.
     */
    readonly statusCode: string;
}
export interface Apigatewayv2IntegrationTlsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.
     */
    readonly serverNameToVerify?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration}.
 */
export declare class Apigatewayv2Integration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
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
    private _contentHandlingStrategy?;
    get contentHandlingStrategy(): string;
    set contentHandlingStrategy(value: string);
    resetContentHandlingStrategy(): void;
    get contentHandlingStrategyInput(): string | undefined;
    private _credentialsArn?;
    get credentialsArn(): string;
    set credentialsArn(value: string);
    resetCredentialsArn(): void;
    get credentialsArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _integrationMethod?;
    get integrationMethod(): string;
    set integrationMethod(value: string);
    resetIntegrationMethod(): void;
    get integrationMethodInput(): string | undefined;
    get integrationResponseSelectionExpression(): string;
    private _integrationSubtype?;
    get integrationSubtype(): string;
    set integrationSubtype(value: string);
    resetIntegrationSubtype(): void;
    get integrationSubtypeInput(): string | undefined;
    private _integrationType;
    get integrationType(): string;
    set integrationType(value: string);
    get integrationTypeInput(): string;
    private _integrationUri?;
    get integrationUri(): string;
    set integrationUri(value: string);
    resetIntegrationUri(): void;
    get integrationUriInput(): string | undefined;
    private _passthroughBehavior?;
    get passthroughBehavior(): string;
    set passthroughBehavior(value: string);
    resetPassthroughBehavior(): void;
    get passthroughBehaviorInput(): string | undefined;
    private _payloadFormatVersion?;
    get payloadFormatVersion(): string;
    set payloadFormatVersion(value: string);
    resetPayloadFormatVersion(): void;
    get payloadFormatVersionInput(): string | undefined;
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
    private _templateSelectionExpression?;
    get templateSelectionExpression(): string;
    set templateSelectionExpression(value: string);
    resetTemplateSelectionExpression(): void;
    get templateSelectionExpressionInput(): string | undefined;
    private _timeoutMilliseconds?;
    get timeoutMilliseconds(): number;
    set timeoutMilliseconds(value: number);
    resetTimeoutMilliseconds(): void;
    get timeoutMillisecondsInput(): number | undefined;
    private _responseParameters?;
    get responseParameters(): Apigatewayv2IntegrationResponseParameters[];
    set responseParameters(value: Apigatewayv2IntegrationResponseParameters[]);
    resetResponseParameters(): void;
    get responseParametersInput(): Apigatewayv2IntegrationResponseParameters[] | undefined;
    private _tlsConfig?;
    get tlsConfig(): Apigatewayv2IntegrationTlsConfig[];
    set tlsConfig(value: Apigatewayv2IntegrationTlsConfig[]);
    resetTlsConfig(): void;
    get tlsConfigInput(): Apigatewayv2IntegrationTlsConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
