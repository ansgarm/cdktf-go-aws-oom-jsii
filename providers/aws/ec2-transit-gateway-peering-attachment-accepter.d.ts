import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayPeeringAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#tags Ec2TransitGatewayPeeringAttachmentAccepter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#tags_all Ec2TransitGatewayPeeringAttachmentAccepter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html#transit_gateway_attachment_id Ec2TransitGatewayPeeringAttachmentAccepter#transit_gateway_attachment_id}.
     */
    readonly transitGatewayAttachmentId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter}.
 */
export declare class Ec2TransitGatewayPeeringAttachmentAccepter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentAccepterConfig);
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
    get transitGatewayId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
