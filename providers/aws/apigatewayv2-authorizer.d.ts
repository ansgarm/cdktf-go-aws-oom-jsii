import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2AuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#api_id Apigatewayv2Authorizer#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}.
     */
    readonly authorizerCredentialsArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}.
     */
    readonly authorizerPayloadFormatVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}.
     */
    readonly authorizerResultTtlInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_type Apigatewayv2Authorizer#authorizer_type}.
     */
    readonly authorizerType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}.
     */
    readonly authorizerUri?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}.
     */
    readonly enableSimpleResponses?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#identity_sources Apigatewayv2Authorizer#identity_sources}.
     */
    readonly identitySources?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#name Apigatewayv2Authorizer#name}.
     */
    readonly name: string;
    /**
     * jwt_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}
     */
    readonly jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration[];
}
export interface Apigatewayv2AuthorizerJwtConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#audience Apigatewayv2Authorizer#audience}.
     */
    readonly audience?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#issuer Apigatewayv2Authorizer#issuer}.
     */
    readonly issuer?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer}.
 */
export declare class Apigatewayv2Authorizer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2AuthorizerConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    private _authorizerCredentialsArn?;
    get authorizerCredentialsArn(): string;
    set authorizerCredentialsArn(value: string);
    resetAuthorizerCredentialsArn(): void;
    get authorizerCredentialsArnInput(): string | undefined;
    private _authorizerPayloadFormatVersion?;
    get authorizerPayloadFormatVersion(): string;
    set authorizerPayloadFormatVersion(value: string);
    resetAuthorizerPayloadFormatVersion(): void;
    get authorizerPayloadFormatVersionInput(): string | undefined;
    private _authorizerResultTtlInSeconds?;
    get authorizerResultTtlInSeconds(): number;
    set authorizerResultTtlInSeconds(value: number);
    resetAuthorizerResultTtlInSeconds(): void;
    get authorizerResultTtlInSecondsInput(): number | undefined;
    private _authorizerType;
    get authorizerType(): string;
    set authorizerType(value: string);
    get authorizerTypeInput(): string;
    private _authorizerUri?;
    get authorizerUri(): string;
    set authorizerUri(value: string);
    resetAuthorizerUri(): void;
    get authorizerUriInput(): string | undefined;
    private _enableSimpleResponses?;
    get enableSimpleResponses(): boolean;
    set enableSimpleResponses(value: boolean);
    resetEnableSimpleResponses(): void;
    get enableSimpleResponsesInput(): boolean | undefined;
    get id(): string;
    private _identitySources?;
    get identitySources(): string[];
    set identitySources(value: string[]);
    resetIdentitySources(): void;
    get identitySourcesInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _jwtConfiguration?;
    get jwtConfiguration(): Apigatewayv2AuthorizerJwtConfiguration[];
    set jwtConfiguration(value: Apigatewayv2AuthorizerJwtConfiguration[]);
    resetJwtConfiguration(): void;
    get jwtConfigurationInput(): Apigatewayv2AuthorizerJwtConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
