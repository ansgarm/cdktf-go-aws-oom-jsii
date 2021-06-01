import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#tags DataAwsEc2TransitGatewayRouteTables#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#filter DataAwsEc2TransitGatewayRouteTables#filter}
     */
    readonly filter?: DataAwsEc2TransitGatewayRouteTablesFilter[];
}
export interface DataAwsEc2TransitGatewayRouteTablesFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#name DataAwsEc2TransitGatewayRouteTables#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html#values DataAwsEc2TransitGatewayRouteTables#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html aws_ec2_transit_gateway_route_tables}.
 */
export declare class DataAwsEc2TransitGatewayRouteTables extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_route_tables.html aws_ec2_transit_gateway_route_tables} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayRouteTablesConfig);
    get id(): string;
    get ids(): string[];
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
    get filter(): DataAwsEc2TransitGatewayRouteTablesFilter[];
    set filter(value: DataAwsEc2TransitGatewayRouteTablesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayRouteTablesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
