import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#local_gateway_id DataAwsEc2LocalGatewayRouteTable#local_gateway_id}.
     */
    readonly localGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#local_gateway_route_table_id DataAwsEc2LocalGatewayRouteTable#local_gateway_route_table_id}.
     */
    readonly localGatewayRouteTableId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#outpost_arn DataAwsEc2LocalGatewayRouteTable#outpost_arn}.
     */
    readonly outpostArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#state DataAwsEc2LocalGatewayRouteTable#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#tags DataAwsEc2LocalGatewayRouteTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#filter DataAwsEc2LocalGatewayRouteTable#filter}
     */
    readonly filter?: DataAwsEc2LocalGatewayRouteTableFilter[];
}
export interface DataAwsEc2LocalGatewayRouteTableFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#name DataAwsEc2LocalGatewayRouteTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html#values DataAwsEc2LocalGatewayRouteTable#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table}.
 */
export declare class DataAwsEc2LocalGatewayRouteTable extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayRouteTableConfig);
    get id(): string;
    private _localGatewayId?;
    get localGatewayId(): string;
    set localGatewayId(value: string);
    resetLocalGatewayId(): void;
    get localGatewayIdInput(): string | undefined;
    private _localGatewayRouteTableId?;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    resetLocalGatewayRouteTableId(): void;
    get localGatewayRouteTableIdInput(): string | undefined;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string | undefined;
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
    get filter(): DataAwsEc2LocalGatewayRouteTableFilter[];
    set filter(value: DataAwsEc2LocalGatewayRouteTableFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayRouteTableFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
