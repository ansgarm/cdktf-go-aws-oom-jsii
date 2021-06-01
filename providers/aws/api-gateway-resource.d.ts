import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayResourceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html#parent_id ApiGatewayResource#parent_id}.
     */
    readonly parentId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html#path_part ApiGatewayResource#path_part}.
     */
    readonly pathPart: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html#rest_api_id ApiGatewayResource#rest_api_id}.
     */
    readonly restApiId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html aws_api_gateway_resource}.
 */
export declare class ApiGatewayResource extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html aws_api_gateway_resource} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayResourceConfig);
    get id(): string;
    private _parentId;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string;
    get path(): string;
    private _pathPart;
    get pathPart(): string;
    set pathPart(value: string);
    get pathPartInput(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
