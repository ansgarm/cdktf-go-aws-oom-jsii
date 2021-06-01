import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}.
     */
    readonly authenticationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#name AppsyncGraphqlApi#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#schema AppsyncGraphqlApi#schema}.
     */
    readonly schema?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags AppsyncGraphqlApi#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags_all AppsyncGraphqlApi#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#xray_enabled AppsyncGraphqlApi#xray_enabled}.
     */
    readonly xrayEnabled?: boolean;
    /**
     * additional_authentication_provider block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}
     */
    readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
    /**
     * log_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#log_config AppsyncGraphqlApi#log_config}
     */
    readonly logConfig?: AppsyncGraphqlApiLogConfig[];
    /**
     * openid_connect_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
     */
    readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig[];
    /**
     * user_pool_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
     */
    readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig[];
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}.
     */
    readonly authTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}.
     */
    readonly clientId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}.
     */
    readonly iatTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}.
     */
    readonly issuer: string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.
     */
    readonly appIdClientRegex?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}.
     */
    readonly awsRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}.
     */
    readonly userPoolId: string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProvider {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}.
     */
    readonly authenticationType: string;
    /**
     * openid_connect_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
     */
    readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig[];
    /**
     * user_pool_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
     */
    readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig[];
}
export interface AppsyncGraphqlApiLogConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}.
     */
    readonly cloudwatchLogsRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}.
     */
    readonly excludeVerboseContent?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#field_log_level AppsyncGraphqlApi#field_log_level}.
     */
    readonly fieldLogLevel: string;
}
export interface AppsyncGraphqlApiOpenidConnectConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}.
     */
    readonly authTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}.
     */
    readonly clientId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}.
     */
    readonly iatTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}.
     */
    readonly issuer: string;
}
export interface AppsyncGraphqlApiUserPoolConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.
     */
    readonly appIdClientRegex?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}.
     */
    readonly awsRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#default_action AppsyncGraphqlApi#default_action}.
     */
    readonly defaultAction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}.
     */
    readonly userPoolId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api}.
 */
export declare class AppsyncGraphqlApi extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppsyncGraphqlApiConfig);
    get arn(): string;
    private _authenticationType;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string | undefined;
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
    uris(key: string): string;
    private _xrayEnabled?;
    get xrayEnabled(): boolean;
    set xrayEnabled(value: boolean);
    resetXrayEnabled(): void;
    get xrayEnabledInput(): boolean | undefined;
    private _additionalAuthenticationProvider?;
    get additionalAuthenticationProvider(): AppsyncGraphqlApiAdditionalAuthenticationProvider[];
    set additionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[]);
    resetAdditionalAuthenticationProvider(): void;
    get additionalAuthenticationProviderInput(): AppsyncGraphqlApiAdditionalAuthenticationProvider[] | undefined;
    private _logConfig?;
    get logConfig(): AppsyncGraphqlApiLogConfig[];
    set logConfig(value: AppsyncGraphqlApiLogConfig[]);
    resetLogConfig(): void;
    get logConfigInput(): AppsyncGraphqlApiLogConfig[] | undefined;
    private _openidConnectConfig?;
    get openidConnectConfig(): AppsyncGraphqlApiOpenidConnectConfig[];
    set openidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig[]);
    resetOpenidConnectConfig(): void;
    get openidConnectConfigInput(): AppsyncGraphqlApiOpenidConnectConfig[] | undefined;
    private _userPoolConfig?;
    get userPoolConfig(): AppsyncGraphqlApiUserPoolConfig[];
    set userPoolConfig(value: AppsyncGraphqlApiUserPoolConfig[]);
    resetUserPoolConfig(): void;
    get userPoolConfigInput(): AppsyncGraphqlApiUserPoolConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
