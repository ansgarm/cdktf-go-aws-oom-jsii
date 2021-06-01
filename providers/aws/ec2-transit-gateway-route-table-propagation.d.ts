import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayRouteTablePropagationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html#transit_gateway_attachment_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_attachment_id}.
     */
    readonly transitGatewayAttachmentId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html#transit_gateway_route_table_id Ec2TransitGatewayRouteTablePropagation#transit_gateway_route_table_id}.
     */
    readonly transitGatewayRouteTableId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html aws_ec2_transit_gateway_route_table_propagation}.
 */
export declare class Ec2TransitGatewayRouteTablePropagation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html aws_ec2_transit_gateway_route_table_propagation} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTablePropagationConfig);
    get id(): string;
    get resourceId(): string;
    get resourceType(): string;
    private _transitGatewayAttachmentId;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string;
    private _transitGatewayRouteTableId;
    get transitGatewayRouteTableId(): string;
    set transitGatewayRouteTableId(value: string);
    get transitGatewayRouteTableIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
