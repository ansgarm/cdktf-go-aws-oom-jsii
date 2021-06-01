import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayVpnAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#tags DataAwsEc2TransitGatewayVpnAttachment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#transit_gateway_id DataAwsEc2TransitGatewayVpnAttachment#transit_gateway_id}.
     */
    readonly transitGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#vpn_connection_id DataAwsEc2TransitGatewayVpnAttachment#vpn_connection_id}.
     */
    readonly vpnConnectionId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#filter DataAwsEc2TransitGatewayVpnAttachment#filter}
     */
    readonly filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayVpnAttachmentFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#name DataAwsEc2TransitGatewayVpnAttachment#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#values DataAwsEc2TransitGatewayVpnAttachment#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html aws_ec2_transit_gateway_vpn_attachment}.
 */
export declare class DataAwsEc2TransitGatewayVpnAttachment extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html aws_ec2_transit_gateway_vpn_attachment} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayVpnAttachmentConfig);
    get id(): string;
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
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    private _vpnConnectionId?;
    get vpnConnectionId(): string;
    set vpnConnectionId(value: string);
    resetVpnConnectionId(): void;
    get vpnConnectionIdInput(): string | undefined;
    private _filter?;
    get filter(): DataAwsEc2TransitGatewayVpnAttachmentFilter[];
    set filter(value: DataAwsEc2TransitGatewayVpnAttachmentFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayVpnAttachmentFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
