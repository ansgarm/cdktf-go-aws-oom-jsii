import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#api_id AppsyncFunction#api_id}.
     */
    readonly apiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#data_source AppsyncFunction#data_source}.
     */
    readonly dataSource: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#description AppsyncFunction#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#function_version AppsyncFunction#function_version}.
     */
    readonly functionVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#name AppsyncFunction#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#request_mapping_template AppsyncFunction#request_mapping_template}.
     */
    readonly requestMappingTemplate: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#response_mapping_template AppsyncFunction#response_mapping_template}.
     */
    readonly responseMappingTemplate: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html aws_appsync_function}.
 */
export declare class AppsyncFunction extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html aws_appsync_function} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppsyncFunctionConfig);
    private _apiId;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    get arn(): string;
    private _dataSource;
    get dataSource(): string;
    set dataSource(value: string);
    get dataSourceInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get functionId(): string;
    private _functionVersion?;
    get functionVersion(): string;
    set functionVersion(value: string);
    resetFunctionVersion(): void;
    get functionVersionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _requestMappingTemplate;
    get requestMappingTemplate(): string;
    set requestMappingTemplate(value: string);
    get requestMappingTemplateInput(): string;
    private _responseMappingTemplate;
    get responseMappingTemplate(): string;
    set responseMappingTemplate(value: string);
    get responseMappingTemplateInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
