import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2RouteConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#api_id Apigatewayv2Route#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#api_key_required Apigatewayv2Route#api_key_required}.
     */
    readonly apiKeyRequired?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#authorization_scopes Apigatewayv2Route#authorization_scopes}.
     */
    readonly authorizationScopes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#authorization_type Apigatewayv2Route#authorization_type}.
     */
    readonly authorizationType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#authorizer_id Apigatewayv2Route#authorizer_id}.
     */
    readonly authorizerId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#model_selection_expression Apigatewayv2Route#model_selection_expression}.
     */
    readonly modelSelectionExpression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#operation_name Apigatewayv2Route#operation_name}.
     */
    readonly operationName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#request_models Apigatewayv2Route#request_models}.
     */
    readonly requestModels?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#route_key Apigatewayv2Route#route_key}.
     */
    readonly routeKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.
     */
    readonly routeResponseSelectionExpression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#target Apigatewayv2Route#target}.
     */
    readonly target?: string;
    /**
     * request_parameter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#request_parameter Apigatewayv2Route#request_parameter}
     */
    readonly requestParameter?: Apigatewayv2RouteRequestParameter[];
}
export interface Apigatewayv2RouteRequestParameter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#request_parameter_key Apigatewayv2Route#request_parameter_key}.
     */
    readonly requestParameterKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#required Apigatewayv2Route#required}.
     */
    readonly required: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route}.
 */
export declare class Apigatewayv2Route extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2RouteConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    private _apiKeyRequired?;
    get apiKeyRequired(): boolean;
    set apiKeyRequired(value: boolean);
    resetApiKeyRequired(): void;
    get apiKeyRequiredInput(): boolean | undefined;
    private _authorizationScopes?;
    get authorizationScopes(): string[];
    set authorizationScopes(value: string[]);
    resetAuthorizationScopes(): void;
    get authorizationScopesInput(): string[] | undefined;
    private _authorizationType?;
    get authorizationType(): string;
    set authorizationType(value: string);
    resetAuthorizationType(): void;
    get authorizationTypeInput(): string | undefined;
    private _authorizerId?;
    get authorizerId(): string;
    set authorizerId(value: string);
    resetAuthorizerId(): void;
    get authorizerIdInput(): string | undefined;
    get id(): string;
    private _modelSelectionExpression?;
    get modelSelectionExpression(): string;
    set modelSelectionExpression(value: string);
    resetModelSelectionExpression(): void;
    get modelSelectionExpressionInput(): string | undefined;
    private _operationName?;
    get operationName(): string;
    set operationName(value: string);
    resetOperationName(): void;
    get operationNameInput(): string | undefined;
    private _requestModels?;
    get requestModels(): {
        [key: string]: string;
    };
    set requestModels(value: {
        [key: string]: string;
    });
    resetRequestModels(): void;
    get requestModelsInput(): {
        [key: string]: string;
    } | undefined;
    private _routeKey;
    get routeKey(): string;
    set routeKey(value: string);
    get routeKeyInput(): string;
    private _routeResponseSelectionExpression?;
    get routeResponseSelectionExpression(): string;
    set routeResponseSelectionExpression(value: string);
    resetRouteResponseSelectionExpression(): void;
    get routeResponseSelectionExpressionInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _requestParameter?;
    get requestParameter(): Apigatewayv2RouteRequestParameter[];
    set requestParameter(value: Apigatewayv2RouteRequestParameter[]);
    resetRequestParameter(): void;
    get requestParameterInput(): Apigatewayv2RouteRequestParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
