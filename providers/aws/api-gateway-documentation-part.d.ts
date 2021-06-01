import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDocumentationPartConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#properties ApiGatewayDocumentationPart#properties}.
     */
    readonly properties: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.
     */
    readonly restApiId: string;
    /**
     * location block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#location ApiGatewayDocumentationPart#location}
     */
    readonly location: ApiGatewayDocumentationPartLocation[];
}
export interface ApiGatewayDocumentationPartLocation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#method ApiGatewayDocumentationPart#method}.
     */
    readonly method?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#name ApiGatewayDocumentationPart#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#path ApiGatewayDocumentationPart#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#status_code ApiGatewayDocumentationPart#status_code}.
     */
    readonly statusCode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#type ApiGatewayDocumentationPart#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part}.
 */
export declare class ApiGatewayDocumentationPart extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayDocumentationPartConfig);
    get id(): string;
    private _properties;
    get properties(): string;
    set properties(value: string);
    get propertiesInput(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _location;
    get location(): ApiGatewayDocumentationPartLocation[];
    set location(value: ApiGatewayDocumentationPartLocation[]);
    get locationInput(): ApiGatewayDocumentationPartLocation[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
