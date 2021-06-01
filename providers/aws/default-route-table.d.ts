import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#default_route_table_id DefaultRouteTable#default_route_table_id}.
     */
    readonly defaultRouteTableId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#propagating_vgws DefaultRouteTable#propagating_vgws}.
     */
    readonly propagatingVgws?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#route DefaultRouteTable#route}.
     */
    readonly route?: DefaultRouteTableRoute[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#tags DefaultRouteTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#tags_all DefaultRouteTable#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface DefaultRouteTableRoute {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#cidr_block DefaultRouteTable#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}.
     */
    readonly destinationPrefixListId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}.
     */
    readonly egressOnlyGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#gateway_id DefaultRouteTable#gateway_id}.
     */
    readonly gatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#instance_id DefaultRouteTable#instance_id}.
     */
    readonly instanceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#nat_gateway_id DefaultRouteTable#nat_gateway_id}.
     */
    readonly natGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#network_interface_id DefaultRouteTable#network_interface_id}.
     */
    readonly networkInterfaceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#transit_gateway_id DefaultRouteTable#transit_gateway_id}.
     */
    readonly transitGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}.
     */
    readonly vpcEndpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}.
     */
    readonly vpcPeeringConnectionId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table}.
 */
export declare class DefaultRouteTable extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_route_table.html aws_default_route_table} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DefaultRouteTableConfig);
    get arn(): string;
    private _defaultRouteTableId;
    get defaultRouteTableId(): string;
    set defaultRouteTableId(value: string);
    get defaultRouteTableIdInput(): string;
    get id(): string;
    get ownerId(): string;
    private _propagatingVgws?;
    get propagatingVgws(): string[];
    set propagatingVgws(value: string[]);
    resetPropagatingVgws(): void;
    get propagatingVgwsInput(): string[] | undefined;
    private _route?;
    get route(): DefaultRouteTableRoute[];
    set route(value: DefaultRouteTableRoute[]);
    resetRoute(): void;
    get routeInput(): DefaultRouteTableRoute[] | undefined;
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
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
