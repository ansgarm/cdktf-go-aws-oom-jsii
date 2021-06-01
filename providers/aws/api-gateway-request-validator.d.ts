import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#name ApiGatewayRequestValidator#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#rest_api_id ApiGatewayRequestValidator#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_body ApiGatewayRequestValidator#validate_request_body}.
     */
    readonly validateRequestBody?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}.
     */
    readonly validateRequestParameters?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator}.
 */
export declare class ApiGatewayRequestValidator extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _validateRequestBody?;
    get validateRequestBody(): boolean;
    set validateRequestBody(value: boolean);
    resetValidateRequestBody(): void;
    get validateRequestBodyInput(): boolean | undefined;
    private _validateRequestParameters?;
    get validateRequestParameters(): boolean;
    set validateRequestParameters(value: boolean);
    resetValidateRequestParameters(): void;
    get validateRequestParametersInput(): boolean | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
