import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayVpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html#name DataAwsApiGatewayVpcLink#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html#tags DataAwsApiGatewayVpcLink#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html aws_api_gateway_vpc_link}.
 */
export declare class DataAwsApiGatewayVpcLink extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html aws_api_gateway_vpc_link} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayVpcLinkConfig);
    get description(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get status(): string;
    get statusMessage(): string;
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
    get targetArns(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
