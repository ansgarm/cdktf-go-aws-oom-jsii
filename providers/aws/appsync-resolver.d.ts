import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncResolverConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#api_id AppsyncResolver#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#data_source AppsyncResolver#data_source}.
     */
    readonly dataSource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#field AppsyncResolver#field}.
     */
    readonly field: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#kind AppsyncResolver#kind}.
     */
    readonly kind?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#request_template AppsyncResolver#request_template}.
     */
    readonly requestTemplate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#response_template AppsyncResolver#response_template}.
     */
    readonly responseTemplate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#type AppsyncResolver#type}.
     */
    readonly type: string;
    /**
     * caching_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#caching_config AppsyncResolver#caching_config}
     */
    readonly cachingConfig?: AppsyncResolverCachingConfig[];
    /**
     * pipeline_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#pipeline_config AppsyncResolver#pipeline_config}
     */
    readonly pipelineConfig?: AppsyncResolverPipelineConfig[];
}
export interface AppsyncResolverCachingConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#caching_keys AppsyncResolver#caching_keys}.
     */
    readonly cachingKeys?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#ttl AppsyncResolver#ttl}.
     */
    readonly ttl?: number;
}
export interface AppsyncResolverPipelineConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#functions AppsyncResolver#functions}.
     */
    readonly functions?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver}.
 */
export declare class AppsyncResolver extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppsyncResolverConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get arn(): string;
    private _dataSource?;
    get dataSource(): string;
    set dataSource(value: string);
    resetDataSource(): void;
    get dataSourceInput(): string | undefined;
    private _field;
    get field(): string;
    set field(value: string);
    get fieldInput(): string;
    get id(): string;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    resetKind(): void;
    get kindInput(): string | undefined;
    private _requestTemplate?;
    get requestTemplate(): string;
    set requestTemplate(value: string);
    resetRequestTemplate(): void;
    get requestTemplateInput(): string | undefined;
    private _responseTemplate?;
    get responseTemplate(): string;
    set responseTemplate(value: string);
    resetResponseTemplate(): void;
    get responseTemplateInput(): string | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _cachingConfig?;
    get cachingConfig(): AppsyncResolverCachingConfig[];
    set cachingConfig(value: AppsyncResolverCachingConfig[]);
    resetCachingConfig(): void;
    get cachingConfigInput(): AppsyncResolverCachingConfig[] | undefined;
    private _pipelineConfig?;
    get pipelineConfig(): AppsyncResolverPipelineConfig[];
    set pipelineConfig(value: AppsyncResolverPipelineConfig[]);
    resetPipelineConfig(): void;
    get pipelineConfigInput(): AppsyncResolverPipelineConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
