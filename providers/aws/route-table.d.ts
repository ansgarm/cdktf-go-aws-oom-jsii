import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#propagating_vgws RouteTable#propagating_vgws}.
     */
    readonly propagatingVgws?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#route RouteTable#route}.
     */
    readonly route?: RouteTableRoute[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#tags RouteTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#tags_all RouteTable#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_id RouteTable#vpc_id}.
     */
    readonly vpcId: string;
}
export interface RouteTableRoute {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#carrier_gateway_id RouteTable#carrier_gateway_id}.
     */
    readonly carrierGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#cidr_block RouteTable#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#destination_prefix_list_id RouteTable#destination_prefix_list_id}.
     */
    readonly destinationPrefixListId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#egress_only_gateway_id RouteTable#egress_only_gateway_id}.
     */
    readonly egressOnlyGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#gateway_id RouteTable#gateway_id}.
     */
    readonly gatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#instance_id RouteTable#instance_id}.
     */
    readonly instanceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#ipv6_cidr_block RouteTable#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#local_gateway_id RouteTable#local_gateway_id}.
     */
    readonly localGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#nat_gateway_id RouteTable#nat_gateway_id}.
     */
    readonly natGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#network_interface_id RouteTable#network_interface_id}.
     */
    readonly networkInterfaceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#transit_gateway_id RouteTable#transit_gateway_id}.
     */
    readonly transitGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_endpoint_id RouteTable#vpc_endpoint_id}.
     */
    readonly vpcEndpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table.html#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}.
     */
    readonly vpcPeeringConnectionId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table}.
 */
export declare class RouteTable extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RouteTableConfig);
    get arn(): string;
    get id(): string;
    get ownerId(): string;
    private _propagatingVgws?;
    get propagatingVgws(): string[];
    set propagatingVgws(value: string[]);
    resetPropagatingVgws(): void;
    get propagatingVgwsInput(): string[] | undefined;
    private _route?;
    get route(): RouteTableRoute[];
    set route(value: RouteTableRoute[]);
    resetRoute(): void;
    get routeInput(): RouteTableRoute[] | undefined;
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
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
