import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#state DataAwsEc2LocalGateway#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#tags DataAwsEc2LocalGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#filter DataAwsEc2LocalGateway#filter}
     */
    readonly filter?: DataAwsEc2LocalGatewayFilter[];
}
export interface DataAwsEc2LocalGatewayFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#name DataAwsEc2LocalGateway#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html#values DataAwsEc2LocalGateway#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html aws_ec2_local_gateway}.
 */
export declare class DataAwsEc2LocalGateway extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway.html aws_ec2_local_gateway} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayConfig);
    get id(): string;
    get outpostArn(): string;
    get ownerId(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    get filter(): DataAwsEc2LocalGatewayFilter[];
    set filter(value: DataAwsEc2LocalGatewayFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
