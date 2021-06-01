import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDocumentationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html#description ApiGatewayDocumentationVersion#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html#rest_api_id ApiGatewayDocumentationVersion#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html#version ApiGatewayDocumentationVersion#version}.
     */
    readonly version: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html aws_api_gateway_documentation_version}.
 */
export declare class ApiGatewayDocumentationVersion extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html aws_api_gateway_documentation_version} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayDocumentationVersionConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _version;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
