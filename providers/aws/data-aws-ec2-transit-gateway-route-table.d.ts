import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#tags DataAwsEc2TransitGatewayRouteTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#filter DataAwsEc2TransitGatewayRouteTable#filter}
     */
    readonly filter?: DataAwsEc2TransitGatewayRouteTableFilter[];
}
export interface DataAwsEc2TransitGatewayRouteTableFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#name DataAwsEc2TransitGatewayRouteTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html#values DataAwsEc2TransitGatewayRouteTable#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table}.
 */
export declare class DataAwsEc2TransitGatewayRouteTable extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_table.html aws_ec2_transit_gateway_route_table} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayRouteTableConfig);
    get arn(): string;
    get defaultAssociationRouteTable(): boolean;
    get defaultPropagationRouteTable(): boolean;
    get id(): string;
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
    get transitGatewayId(): string;
    private _filter?;
    get filter(): DataAwsEc2TransitGatewayRouteTableFilter[];
    set filter(value: DataAwsEc2TransitGatewayRouteTableFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayRouteTableFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
