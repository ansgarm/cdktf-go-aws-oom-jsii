import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.
     */
    readonly amazonSideAsn?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.
     */
    readonly autoAcceptSharedAttachments?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#default_route_table_association Ec2TransitGateway#default_route_table_association}.
     */
    readonly defaultRouteTableAssociation?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.
     */
    readonly defaultRouteTablePropagation?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#description Ec2TransitGateway#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#dns_support Ec2TransitGateway#dns_support}.
     */
    readonly dnsSupport?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#tags Ec2TransitGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#tags_all Ec2TransitGateway#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.
     */
    readonly vpnEcmpSupport?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway}.
 */
export declare class Ec2TransitGateway extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: Ec2TransitGatewayConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): number;
    set amazonSideAsn(value: number);
    resetAmazonSideAsn(): void;
    get amazonSideAsnInput(): number | undefined;
    get arn(): string;
    get associationDefaultRouteTableId(): string;
    private _autoAcceptSharedAttachments?;
    get autoAcceptSharedAttachments(): string;
    set autoAcceptSharedAttachments(value: string);
    resetAutoAcceptSharedAttachments(): void;
    get autoAcceptSharedAttachmentsInput(): string | undefined;
    private _defaultRouteTableAssociation?;
    get defaultRouteTableAssociation(): string;
    set defaultRouteTableAssociation(value: string);
    resetDefaultRouteTableAssociation(): void;
    get defaultRouteTableAssociationInput(): string | undefined;
    private _defaultRouteTablePropagation?;
    get defaultRouteTablePropagation(): string;
    set defaultRouteTablePropagation(value: string);
    resetDefaultRouteTablePropagation(): void;
    get defaultRouteTablePropagationInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _dnsSupport?;
    get dnsSupport(): string;
    set dnsSupport(value: string);
    resetDnsSupport(): void;
    get dnsSupportInput(): string | undefined;
    get id(): string;
    get ownerId(): string;
    get propagationDefaultRouteTableId(): string;
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
    private _vpnEcmpSupport?;
    get vpnEcmpSupport(): string;
    set vpnEcmpSupport(value: string);
    resetVpnEcmpSupport(): void;
    get vpnEcmpSupportInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
