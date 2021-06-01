import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayPrefixListReferenceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#blackhole Ec2TransitGatewayPrefixListReference#blackhole}.
     */
    readonly blackhole?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}.
     */
    readonly prefixListId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}.
     */
    readonly transitGatewayAttachmentId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}.
     */
    readonly transitGatewayRouteTableId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference}.
 */
export declare class Ec2TransitGatewayPrefixListReference extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayPrefixListReferenceConfig);
    private _blackhole?;
    get blackhole(): boolean;
    set blackhole(value: boolean);
    resetBlackhole(): void;
    get blackholeInput(): boolean | undefined;
    get id(): string;
    private _prefixListId;
    get prefixListId(): string;
    set prefixListId(value: string);
    get prefixListIdInput(): string;
    get prefixListOwnerId(): string;
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    resetTransitGatewayAttachmentId(): void;
    get transitGatewayAttachmentIdInput(): string | undefined;
    private _transitGatewayRouteTableId;
    get transitGatewayRouteTableId(): string;
    set transitGatewayRouteTableId(value: string);
    get transitGatewayRouteTableIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
