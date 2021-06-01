import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayMethodResponseConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#http_method ApiGatewayMethodResponse#http_method}.
     */
    readonly httpMethod: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#resource_id ApiGatewayMethodResponse#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#response_models ApiGatewayMethodResponse#response_models}.
     */
    readonly responseModels?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#response_parameters ApiGatewayMethodResponse#response_parameters}.
     */
    readonly responseParameters?: {
        [key: string]: boolean;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#rest_api_id ApiGatewayMethodResponse#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#status_code ApiGatewayMethodResponse#status_code}.
     */
    readonly statusCode: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html aws_api_gateway_method_response}.
 */
export declare class ApiGatewayMethodResponse extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html aws_api_gateway_method_response} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayMethodResponseConfig);
    private _httpMethod;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
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
    private _responseParameters?;
    get responseParameters(): {
        [key: string]: boolean;
    };
    set responseParameters(value: {
        [key: string]: boolean;
    });
    resetResponseParameters(): void;
    get responseParametersInput(): {
        [key: string]: boolean;
    } | undefined;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _statusCode;
    get statusCode(): string;
    set statusCode(value: string);
    get statusCodeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
