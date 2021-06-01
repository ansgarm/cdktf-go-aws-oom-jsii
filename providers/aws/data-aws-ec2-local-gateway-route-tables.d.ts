import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#tags DataAwsEc2LocalGatewayRouteTables#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#filter DataAwsEc2LocalGatewayRouteTables#filter}
     */
    readonly filter?: DataAwsEc2LocalGatewayRouteTablesFilter[];
}
export interface DataAwsEc2LocalGatewayRouteTablesFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#name DataAwsEc2LocalGatewayRouteTables#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html#values DataAwsEc2LocalGatewayRouteTables#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html aws_ec2_local_gateway_route_tables}.
 */
export declare class DataAwsEc2LocalGatewayRouteTables extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_tables.html aws_ec2_local_gateway_route_tables} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayRouteTablesConfig);
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
    get filter(): DataAwsEc2LocalGatewayRouteTablesFilter[];
    set filter(value: DataAwsEc2LocalGatewayRouteTablesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayRouteTablesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
