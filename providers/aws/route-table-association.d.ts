import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html#gateway_id RouteTableAssociation#gateway_id}.
     */
    readonly gatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html#route_table_id RouteTableAssociation#route_table_id}.
     */
    readonly routeTableId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html#subnet_id RouteTableAssociation#subnet_id}.
     */
    readonly subnetId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association}.
 */
export declare class RouteTableAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table_association.html aws_route_table_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RouteTableAssociationConfig);
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string | undefined;
    get id(): string;
    private _routeTableId;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
