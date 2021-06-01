import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#gateway_id DataAwsRouteTable#gateway_id}.
     */
    readonly gatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#route_table_id DataAwsRouteTable#route_table_id}.
     */
    readonly routeTableId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#subnet_id DataAwsRouteTable#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#tags DataAwsRouteTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#vpc_id DataAwsRouteTable#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#filter DataAwsRouteTable#filter}
     */
    readonly filter?: DataAwsRouteTableFilter[];
}
export declare class DataAwsRouteTableAssociations extends cdktf.ComplexComputedList {
    get gatewayId(): string;
    get main(): boolean;
    get routeTableAssociationId(): string;
    get routeTableId(): string;
    get subnetId(): string;
}
export declare class DataAwsRouteTableRoutes extends cdktf.ComplexComputedList {
    get carrierGatewayId(): string;
    get cidrBlock(): string;
    get destinationPrefixListId(): string;
    get egressOnlyGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get ipv6CidrBlock(): string;
    get localGatewayId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get transitGatewayId(): string;
    get vpcEndpointId(): string;
    get vpcPeeringConnectionId(): string;
}
export interface DataAwsRouteTableFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#name DataAwsRouteTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_table.html#values DataAwsRouteTable#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table}.
 */
export declare class DataAwsRouteTable extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRouteTableConfig);
    get arn(): string;
    associations(index: string): DataAwsRouteTableAssociations;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string | undefined;
    get id(): string;
    get ownerId(): string;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    resetRouteTableId(): void;
    get routeTableIdInput(): string | undefined;
    routes(index: string): DataAwsRouteTableRoutes;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter?;
    get filter(): DataAwsRouteTableFilter[];
    set filter(value: DataAwsRouteTableFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRouteTableFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
