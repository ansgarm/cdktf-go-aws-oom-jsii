import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2RouteResponseConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#api_id Apigatewayv2RouteResponse#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}.
     */
    readonly modelSelectionExpression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#response_models Apigatewayv2RouteResponse#response_models}.
     */
    readonly responseModels?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#route_id Apigatewayv2RouteResponse#route_id}.
     */
    readonly routeId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#route_response_key Apigatewayv2RouteResponse#route_response_key}.
     */
    readonly routeResponseKey: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html aws_apigatewayv2_route_response}.
 */
export declare class Apigatewayv2RouteResponse extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html aws_apigatewayv2_route_response} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2RouteResponseConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get id(): string;
    private _modelSelectionExpression?;
    get modelSelectionExpression(): string;
    set modelSelectionExpression(value: string);
    resetModelSelectionExpression(): void;
    get modelSelectionExpressionInput(): string | undefined;
    private _responseModels?;
    get responseModels(): {
        [key: string]: string;
    };
    set responseModels(value: {
        [key: string]: string;
    });
    resetResponseModels(): void;
    get responseModelsInput(): {
        [key: string]: string;
    } | undefined;
    private _routeId;
    get routeId(): string;
    set routeId(value: string);
    get routeIdInput(): string;
    private _routeResponseKey;
    get routeResponseKey(): string;
    set routeResponseKey(value: string);
    get routeResponseKeyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
