import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayAuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}.
     */
    readonly authorizerCredentials?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}.
     */
    readonly authorizerResultTtlInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}.
     */
    readonly authorizerUri?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#identity_source ApiGatewayAuthorizer#identity_source}.
     */
    readonly identitySource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}.
     */
    readonly identityValidationExpression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#name ApiGatewayAuthorizer#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#provider_arns ApiGatewayAuthorizer#provider_arns}.
     */
    readonly providerArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#rest_api_id ApiGatewayAuthorizer#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#type ApiGatewayAuthorizer#type}.
     */
    readonly type?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html aws_api_gateway_authorizer}.
 */
export declare class ApiGatewayAuthorizer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html aws_api_gateway_authorizer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayAuthorizerConfig);
    private _authorizerCredentials?;
    get authorizerCredentials(): string;
    set authorizerCredentials(value: string);
    resetAuthorizerCredentials(): void;
    get authorizerCredentialsInput(): string | undefined;
    private _authorizerResultTtlInSeconds?;
    get authorizerResultTtlInSeconds(): number;
    set authorizerResultTtlInSeconds(value: number);
    resetAuthorizerResultTtlInSeconds(): void;
    get authorizerResultTtlInSecondsInput(): number | undefined;
    private _authorizerUri?;
    get authorizerUri(): string;
    set authorizerUri(value: string);
    resetAuthorizerUri(): void;
    get authorizerUriInput(): string | undefined;
    get id(): string;
    private _identitySource?;
    get identitySource(): string;
    set identitySource(value: string);
    resetIdentitySource(): void;
    get identitySourceInput(): string | undefined;
    private _identityValidationExpression?;
    get identityValidationExpression(): string;
    set identityValidationExpression(value: string);
    resetIdentityValidationExpression(): void;
    get identityValidationExpressionInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _providerArns?;
    get providerArns(): string[];
    set providerArns(value: string[]);
    resetProviderArns(): void;
    get providerArnsInput(): string[] | undefined;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
