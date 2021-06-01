import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayVpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#description ApiGatewayVpcLink#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#name ApiGatewayVpcLink#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#tags ApiGatewayVpcLink#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#tags_all ApiGatewayVpcLink#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#target_arns ApiGatewayVpcLink#target_arns}.
     */
    readonly targetArns: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html aws_api_gateway_vpc_link}.
 */
export declare class ApiGatewayVpcLink extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html aws_api_gateway_vpc_link} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ApiGatewayVpcLinkConfig);
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
    private _targetArns;
    get targetArns(): string[];
    set targetArns(value: string[]);
    get targetArnsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
