import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token_validity CognitoUserPoolClient#access_token_validity}.
     */
    readonly accessTokenValidity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}.
     */
    readonly allowedOauthFlows?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}.
     */
    readonly allowedOauthFlowsUserPoolClient?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}.
     */
    readonly allowedOauthScopes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#callback_urls CognitoUserPoolClient#callback_urls}.
     */
    readonly callbackUrls?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.
     */
    readonly defaultRedirectUri?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.
     */
    readonly explicitAuthFlows?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#generate_secret CognitoUserPoolClient#generate_secret}.
     */
    readonly generateSecret?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token_validity CognitoUserPoolClient#id_token_validity}.
     */
    readonly idTokenValidity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#logout_urls CognitoUserPoolClient#logout_urls}.
     */
    readonly logoutUrls?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#name CognitoUserPoolClient#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.
     */
    readonly preventUserExistenceErrors?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#read_attributes CognitoUserPoolClient#read_attributes}.
     */
    readonly readAttributes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.
     */
    readonly refreshTokenValidity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.
     */
    readonly supportedIdentityProviders?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_pool_id CognitoUserPoolClient#user_pool_id}.
     */
    readonly userPoolId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#write_attributes CognitoUserPoolClient#write_attributes}.
     */
    readonly writeAttributes?: string[];
    /**
     * analytics_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#analytics_configuration CognitoUserPoolClient#analytics_configuration}
     */
    readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[];
    /**
     * token_validity_units block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#token_validity_units CognitoUserPoolClient#token_validity_units}
     */
    readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits[];
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_arn CognitoUserPoolClient#application_arn}.
     */
    readonly applicationArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_id CognitoUserPoolClient#application_id}.
     */
    readonly applicationId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#external_id CognitoUserPoolClient#external_id}.
     */
    readonly externalId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#role_arn CognitoUserPoolClient#role_arn}.
     */
    readonly roleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_data_shared CognitoUserPoolClient#user_data_shared}.
     */
    readonly userDataShared?: boolean;
}
export interface CognitoUserPoolClientTokenValidityUnits {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token CognitoUserPoolClient#access_token}.
     */
    readonly accessToken?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token CognitoUserPoolClient#id_token}.
     */
    readonly idToken?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token CognitoUserPoolClient#refresh_token}.
     */
    readonly refreshToken?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}.
 */
export declare class CognitoUserPoolClient extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig);
    private _accessTokenValidity?;
    get accessTokenValidity(): number;
    set accessTokenValidity(value: number);
    resetAccessTokenValidity(): void;
    get accessTokenValidityInput(): number | undefined;
    private _allowedOauthFlows?;
    get allowedOauthFlows(): string[];
    set allowedOauthFlows(value: string[]);
    resetAllowedOauthFlows(): void;
    get allowedOauthFlowsInput(): string[] | undefined;
    private _allowedOauthFlowsUserPoolClient?;
    get allowedOauthFlowsUserPoolClient(): boolean;
    set allowedOauthFlowsUserPoolClient(value: boolean);
    resetAllowedOauthFlowsUserPoolClient(): void;
    get allowedOauthFlowsUserPoolClientInput(): boolean | undefined;
    private _allowedOauthScopes?;
    get allowedOauthScopes(): string[];
    set allowedOauthScopes(value: string[]);
    resetAllowedOauthScopes(): void;
    get allowedOauthScopesInput(): string[] | undefined;
    private _callbackUrls?;
    get callbackUrls(): string[];
    set callbackUrls(value: string[]);
    resetCallbackUrls(): void;
    get callbackUrlsInput(): string[] | undefined;
    get clientSecret(): string;
    private _defaultRedirectUri?;
    get defaultRedirectUri(): string;
    set defaultRedirectUri(value: string);
    resetDefaultRedirectUri(): void;
    get defaultRedirectUriInput(): string | undefined;
    private _explicitAuthFlows?;
    get explicitAuthFlows(): string[];
    set explicitAuthFlows(value: string[]);
    resetExplicitAuthFlows(): void;
    get explicitAuthFlowsInput(): string[] | undefined;
    private _generateSecret?;
    get generateSecret(): boolean;
    set generateSecret(value: boolean);
    resetGenerateSecret(): void;
    get generateSecretInput(): boolean | undefined;
    get id(): string;
    private _idTokenValidity?;
    get idTokenValidity(): number;
    set idTokenValidity(value: number);
    resetIdTokenValidity(): void;
    get idTokenValidityInput(): number | undefined;
    private _logoutUrls?;
    get logoutUrls(): string[];
    set logoutUrls(value: string[]);
    resetLogoutUrls(): void;
    get logoutUrlsInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _preventUserExistenceErrors?;
    get preventUserExistenceErrors(): string;
    set preventUserExistenceErrors(value: string);
    resetPreventUserExistenceErrors(): void;
    get preventUserExistenceErrorsInput(): string | undefined;
    private _readAttributes?;
    get readAttributes(): string[];
    set readAttributes(value: string[]);
    resetReadAttributes(): void;
    get readAttributesInput(): string[] | undefined;
    private _refreshTokenValidity?;
    get refreshTokenValidity(): number;
    set refreshTokenValidity(value: number);
    resetRefreshTokenValidity(): void;
    get refreshTokenValidityInput(): number | undefined;
    private _supportedIdentityProviders?;
    get supportedIdentityProviders(): string[];
    set supportedIdentityProviders(value: string[]);
    resetSupportedIdentityProviders(): void;
    get supportedIdentityProvidersInput(): string[] | undefined;
    private _userPoolId;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
    private _writeAttributes?;
    get writeAttributes(): string[];
    set writeAttributes(value: string[]);
    resetWriteAttributes(): void;
    get writeAttributesInput(): string[] | undefined;
    private _analyticsConfiguration?;
    get analyticsConfiguration(): CognitoUserPoolClientAnalyticsConfiguration[];
    set analyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration[]);
    resetAnalyticsConfiguration(): void;
    get analyticsConfigurationInput(): CognitoUserPoolClientAnalyticsConfiguration[] | undefined;
    private _tokenValidityUnits?;
    get tokenValidityUnits(): CognitoUserPoolClientTokenValidityUnits[];
    set tokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits[]);
    resetTokenValidityUnits(): void;
    get tokenValidityUnitsInput(): CognitoUserPoolClientTokenValidityUnits[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
