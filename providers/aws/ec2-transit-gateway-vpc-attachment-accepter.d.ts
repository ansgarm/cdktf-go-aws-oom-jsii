import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayVpcAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}.
     */
    readonly transitGatewayAttachmentId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}.
     */
    readonly transitGatewayDefaultRouteTableAssociation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}.
     */
    readonly transitGatewayDefaultRouteTablePropagation?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter}.
 */
export declare class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentAccepterConfig);
    get applianceModeSupport(): string;
    get dnsSupport(): string;
    get id(): string;
    get ipv6Support(): string;
    get subnetIds(): string[];
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
    private _transitGatewayAttachmentId;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string;
    private _transitGatewayDefaultRouteTableAssociation?;
    get transitGatewayDefaultRouteTableAssociation(): boolean;
    set transitGatewayDefaultRouteTableAssociation(value: boolean);
    resetTransitGatewayDefaultRouteTableAssociation(): void;
    get transitGatewayDefaultRouteTableAssociationInput(): boolean | undefined;
    private _transitGatewayDefaultRouteTablePropagation?;
    get transitGatewayDefaultRouteTablePropagation(): boolean;
    set transitGatewayDefaultRouteTablePropagation(value: boolean);
    resetTransitGatewayDefaultRouteTablePropagation(): void;
    get transitGatewayDefaultRouteTablePropagationInput(): boolean | undefined;
    get transitGatewayId(): string;
    get vpcId(): string;
    get vpcOwnerId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
