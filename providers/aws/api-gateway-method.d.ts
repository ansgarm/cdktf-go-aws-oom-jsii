import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayMethodConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#api_key_required ApiGatewayMethod#api_key_required}.
     */
    readonly apiKeyRequired?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#authorization ApiGatewayMethod#authorization}.
     */
    readonly authorization: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#authorization_scopes ApiGatewayMethod#authorization_scopes}.
     */
    readonly authorizationScopes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#authorizer_id ApiGatewayMethod#authorizer_id}.
     */
    readonly authorizerId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#http_method ApiGatewayMethod#http_method}.
     */
    readonly httpMethod: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#operation_name ApiGatewayMethod#operation_name}.
     */
    readonly operationName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#request_models ApiGatewayMethod#request_models}.
     */
    readonly requestModels?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#request_parameters ApiGatewayMethod#request_parameters}.
     */
    readonly requestParameters?: {
        [key: string]: boolean;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#request_validator_id ApiGatewayMethod#request_validator_id}.
     */
    readonly requestValidatorId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#resource_id ApiGatewayMethod#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#rest_api_id ApiGatewayMethod#rest_api_id}.
     */
    readonly restApiId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method}.
 */
export declare class ApiGatewayMethod extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayMethodConfig);
    private _apiKeyRequired?;
    get apiKeyRequired(): boolean;
    set apiKeyRequired(value: boolean);
    resetApiKeyRequired(): void;
    get apiKeyRequiredInput(): boolean | undefined;
    private _authorization;
    get authorization(): string;
    set authorization(value: string);
    get authorizationInput(): string;
    private _authorizationScopes?;
    get authorizationScopes(): string[];
    set authorizationScopes(value: string[]);
    resetAuthorizationScopes(): void;
    get authorizationScopesInput(): string[] | undefined;
    private _authorizerId?;
    get authorizerId(): string;
    set authorizerId(value: string);
    resetAuthorizerId(): void;
    get authorizerIdInput(): string | undefined;
    private _httpMethod;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
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
    private _requestParameters?;
    get requestParameters(): {
        [key: string]: boolean;
    };
    set requestParameters(value: {
        [key: string]: boolean;
    });
    resetRequestParameters(): void;
    get requestParametersInput(): {
        [key: string]: boolean;
    } | undefined;
    private _requestValidatorId?;
    get requestValidatorId(): string;
    set requestValidatorId(value: string);
    resetRequestValidatorId(): void;
    get requestValidatorIdInput(): string | undefined;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
