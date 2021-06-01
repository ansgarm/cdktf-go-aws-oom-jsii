import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}.
     */
    readonly apiKeySelectionExpression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#body Apigatewayv2Api#body}.
     */
    readonly body?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#credentials_arn Apigatewayv2Api#credentials_arn}.
     */
    readonly credentialsArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#description Apigatewayv2Api#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}.
     */
    readonly disableExecuteApiEndpoint?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#fail_on_warnings Apigatewayv2Api#fail_on_warnings}.
     */
    readonly failOnWarnings?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#name Apigatewayv2Api#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#protocol_type Apigatewayv2Api#protocol_type}.
     */
    readonly protocolType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#route_key Apigatewayv2Api#route_key}.
     */
    readonly routeKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#route_selection_expression Apigatewayv2Api#route_selection_expression}.
     */
    readonly routeSelectionExpression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#tags Apigatewayv2Api#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#tags_all Apigatewayv2Api#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#target Apigatewayv2Api#target}.
     */
    readonly target?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#version Apigatewayv2Api#version}.
     */
    readonly version?: string;
    /**
     * cors_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#cors_configuration Apigatewayv2Api#cors_configuration}
     */
    readonly corsConfiguration?: Apigatewayv2ApiCorsConfiguration[];
}
export interface Apigatewayv2ApiCorsConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_credentials Apigatewayv2Api#allow_credentials}.
     */
    readonly allowCredentials?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_headers Apigatewayv2Api#allow_headers}.
     */
    readonly allowHeaders?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_methods Apigatewayv2Api#allow_methods}.
     */
    readonly allowMethods?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_origins Apigatewayv2Api#allow_origins}.
     */
    readonly allowOrigins?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#expose_headers Apigatewayv2Api#expose_headers}.
     */
    readonly exposeHeaders?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#max_age Apigatewayv2Api#max_age}.
     */
    readonly maxAge?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api}.
 */
export declare class Apigatewayv2Api extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2ApiConfig);
    get apiEndpoint(): string;
    private _apiKeySelectionExpression?;
    get apiKeySelectionExpression(): string;
    set apiKeySelectionExpression(value: string);
    resetApiKeySelectionExpression(): void;
    get apiKeySelectionExpressionInput(): string | undefined;
    get arn(): string;
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string | undefined;
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
    private _disableExecuteApiEndpoint?;
    get disableExecuteApiEndpoint(): boolean;
    set disableExecuteApiEndpoint(value: boolean);
    resetDisableExecuteApiEndpoint(): void;
    get disableExecuteApiEndpointInput(): boolean | undefined;
    get executionArn(): string;
    private _failOnWarnings?;
    get failOnWarnings(): boolean;
    set failOnWarnings(value: boolean);
    resetFailOnWarnings(): void;
    get failOnWarningsInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _protocolType;
    get protocolType(): string;
    set protocolType(value: string);
    get protocolTypeInput(): string;
    private _routeKey?;
    get routeKey(): string;
    set routeKey(value: string);
    resetRouteKey(): void;
    get routeKeyInput(): string | undefined;
    private _routeSelectionExpression?;
    get routeSelectionExpression(): string;
    set routeSelectionExpression(value: string);
    resetRouteSelectionExpression(): void;
    get routeSelectionExpressionInput(): string | undefined;
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
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _corsConfiguration?;
    get corsConfiguration(): Apigatewayv2ApiCorsConfiguration[];
    set corsConfiguration(value: Apigatewayv2ApiCorsConfiguration[]);
    resetCorsConfiguration(): void;
    get corsConfigurationInput(): Apigatewayv2ApiCorsConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
