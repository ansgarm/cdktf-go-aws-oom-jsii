import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2LocalGatewayRouteTableVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}.
     */
    readonly localGatewayRouteTableId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association}.
 */
export declare class Ec2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html aws_ec2_local_gateway_route_table_vpc_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig);
    get id(): string;
    get localGatewayId(): string;
    private _localGatewayRouteTableId;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    get localGatewayRouteTableIdInput(): string;
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
