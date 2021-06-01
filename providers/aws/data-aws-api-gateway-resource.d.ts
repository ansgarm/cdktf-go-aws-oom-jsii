import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayResourceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html#path DataAwsApiGatewayResource#path}.
     */
    readonly path: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html#rest_api_id DataAwsApiGatewayResource#rest_api_id}.
     */
    readonly restApiId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html aws_api_gateway_resource}.
 */
export declare class DataAwsApiGatewayResource extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html aws_api_gateway_resource} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayResourceConfig);
    get id(): string;
    get parentId(): string;
    private _path;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    get pathPart(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
