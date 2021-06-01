import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayGatewayResponseConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#response_parameters ApiGatewayGatewayResponse#response_parameters}.
     */
    readonly responseParameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#response_templates ApiGatewayGatewayResponse#response_templates}.
     */
    readonly responseTemplates?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#response_type ApiGatewayGatewayResponse#response_type}.
     */
    readonly responseType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#rest_api_id ApiGatewayGatewayResponse#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#status_code ApiGatewayGatewayResponse#status_code}.
     */
    readonly statusCode?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response}.
 */
export declare class ApiGatewayGatewayResponse extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayGatewayResponseConfig);
    get id(): string;
    private _responseParameters?;
    get responseParameters(): {
        [key: string]: string;
    };
    set responseParameters(value: {
        [key: string]: string;
    });
    resetResponseParameters(): void;
    get responseParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _responseTemplates?;
    get responseTemplates(): {
        [key: string]: string;
    };
    set responseTemplates(value: {
        [key: string]: string;
    });
    resetResponseTemplates(): void;
    get responseTemplatesInput(): {
        [key: string]: string;
    } | undefined;
    private _responseType;
    get responseType(): string;
    set responseType(value: string);
    get responseTypeInput(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    resetStatusCode(): void;
    get statusCodeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
