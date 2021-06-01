import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncDatasourceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#api_id AppsyncDatasource#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#description AppsyncDatasource#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#name AppsyncDatasource#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#service_role_arn AppsyncDatasource#service_role_arn}.
     */
    readonly serviceRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#type AppsyncDatasource#type}.
     */
    readonly type: string;
    /**
     * dynamodb_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#dynamodb_config AppsyncDatasource#dynamodb_config}
     */
    readonly dynamodbConfig?: AppsyncDatasourceDynamodbConfig[];
    /**
     * elasticsearch_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#elasticsearch_config AppsyncDatasource#elasticsearch_config}
     */
    readonly elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig[];
    /**
     * http_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#http_config AppsyncDatasource#http_config}
     */
    readonly httpConfig?: AppsyncDatasourceHttpConfig[];
    /**
     * lambda_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#lambda_config AppsyncDatasource#lambda_config}
     */
    readonly lambdaConfig?: AppsyncDatasourceLambdaConfig[];
}
export interface AppsyncDatasourceDynamodbConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#region AppsyncDatasource#region}.
     */
    readonly region?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#table_name AppsyncDatasource#table_name}.
     */
    readonly tableName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#use_caller_credentials AppsyncDatasource#use_caller_credentials}.
     */
    readonly useCallerCredentials?: boolean;
}
export interface AppsyncDatasourceElasticsearchConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#endpoint AppsyncDatasource#endpoint}.
     */
    readonly endpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#region AppsyncDatasource#region}.
     */
    readonly region?: string;
}
export interface AppsyncDatasourceHttpConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#endpoint AppsyncDatasource#endpoint}.
     */
    readonly endpoint: string;
}
export interface AppsyncDatasourceLambdaConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#function_arn AppsyncDatasource#function_arn}.
     */
    readonly functionArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource}.
 */
export declare class AppsyncDatasource extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppsyncDatasourceConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _dynamodbConfig?;
    get dynamodbConfig(): AppsyncDatasourceDynamodbConfig[];
    set dynamodbConfig(value: AppsyncDatasourceDynamodbConfig[]);
    resetDynamodbConfig(): void;
    get dynamodbConfigInput(): AppsyncDatasourceDynamodbConfig[] | undefined;
    private _elasticsearchConfig?;
    get elasticsearchConfig(): AppsyncDatasourceElasticsearchConfig[];
    set elasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig[]);
    resetElasticsearchConfig(): void;
    get elasticsearchConfigInput(): AppsyncDatasourceElasticsearchConfig[] | undefined;
    private _httpConfig?;
    get httpConfig(): AppsyncDatasourceHttpConfig[];
    set httpConfig(value: AppsyncDatasourceHttpConfig[]);
    resetHttpConfig(): void;
    get httpConfigInput(): AppsyncDatasourceHttpConfig[] | undefined;
    private _lambdaConfig?;
    get lambdaConfig(): AppsyncDatasourceLambdaConfig[];
    set lambdaConfig(value: AppsyncDatasourceLambdaConfig[]);
    resetLambdaConfig(): void;
    get lambdaConfigInput(): AppsyncDatasourceLambdaConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
