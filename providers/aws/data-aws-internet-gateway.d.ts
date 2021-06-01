import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#internet_gateway_id DataAwsInternetGateway#internet_gateway_id}.
     */
    readonly internetGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#tags DataAwsInternetGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#filter DataAwsInternetGateway#filter}
     */
    readonly filter?: DataAwsInternetGatewayFilter[];
}
export declare class DataAwsInternetGatewayAttachments extends cdktf.ComplexComputedList {
    get state(): string;
    get vpcId(): string;
}
export interface DataAwsInternetGatewayFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#name DataAwsInternetGateway#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html#values DataAwsInternetGateway#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway}.
 */
export declare class DataAwsInternetGateway extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsInternetGatewayConfig);
    get arn(): string;
    attachments(index: string): DataAwsInternetGatewayAttachments;
    get id(): string;
    private _internetGatewayId?;
    get internetGatewayId(): string;
    set internetGatewayId(value: string);
    resetInternetGatewayId(): void;
    get internetGatewayIdInput(): string | undefined;
    get ownerId(): string;
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
    private _filter?;
    get filter(): DataAwsInternetGatewayFilter[];
    set filter(value: DataAwsInternetGatewayFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsInternetGatewayFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
