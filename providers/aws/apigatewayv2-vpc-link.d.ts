import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2VpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#name Apigatewayv2VpcLink#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#security_group_ids Apigatewayv2VpcLink#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#subnet_ids Apigatewayv2VpcLink#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#tags Apigatewayv2VpcLink#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#tags_all Apigatewayv2VpcLink#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html aws_apigatewayv2_vpc_link}.
 */
export declare class Apigatewayv2VpcLink extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html aws_apigatewayv2_vpc_link} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Apigatewayv2VpcLinkConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _securityGroupIds;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
