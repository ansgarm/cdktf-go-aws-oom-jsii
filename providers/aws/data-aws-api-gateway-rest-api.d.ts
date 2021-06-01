import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html#name DataAwsApiGatewayRestApi#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html#tags DataAwsApiGatewayRestApi#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsApiGatewayRestApiEndpointConfiguration extends cdktf.ComplexComputedList {
    get types(): string[];
    get vpcEndpointIds(): string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html aws_api_gateway_rest_api}.
 */
export declare class DataAwsApiGatewayRestApi extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html aws_api_gateway_rest_api} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayRestApiConfig);
    get apiKeySource(): string;
    get arn(): string;
    get binaryMediaTypes(): string[];
    get description(): string;
    endpointConfiguration(index: string): DataAwsApiGatewayRestApiEndpointConfiguration;
    get executionArn(): string;
    get id(): string;
    get minimumCompressionSize(): number;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get policy(): string;
    get rootResourceId(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
