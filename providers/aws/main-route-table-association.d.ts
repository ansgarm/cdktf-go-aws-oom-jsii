import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MainRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html#route_table_id MainRouteTableAssociation#route_table_id}.
     */
    readonly routeTableId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html#vpc_id MainRouteTableAssociation#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association}.
 */
export declare class MainRouteTableAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/main_route_table_association.html aws_main_route_table_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MainRouteTableAssociationConfig);
    get id(): string;
    get originalRouteTableId(): string;
    private _routeTableId;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
