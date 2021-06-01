import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#filter DataAwsEc2TransitGatewayPeeringAttachment#filter}
     */
    readonly filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayPeeringAttachmentFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#name DataAwsEc2TransitGatewayPeeringAttachment#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html#values DataAwsEc2TransitGatewayPeeringAttachment#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment}.
 */
export declare class DataAwsEc2TransitGatewayPeeringAttachment extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayPeeringAttachmentConfig);
    get id(): string;
    get peerAccountId(): string;
    get peerRegion(): string;
    get peerTransitGatewayId(): string;
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
    get transitGatewayId(): string;
    private _filter?;
    get filter(): DataAwsEc2TransitGatewayPeeringAttachmentFilter[];
    set filter(value: DataAwsEc2TransitGatewayPeeringAttachmentFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayPeeringAttachmentFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
