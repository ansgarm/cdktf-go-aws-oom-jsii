import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#tags DataAwsEc2TransitGatewayVpcAttachment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#filter DataAwsEc2TransitGatewayVpcAttachment#filter}
     */
    readonly filter?: DataAwsEc2TransitGatewayVpcAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayVpcAttachmentFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#name DataAwsEc2TransitGatewayVpcAttachment#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html#values DataAwsEc2TransitGatewayVpcAttachment#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}.
 */
export declare class DataAwsEc2TransitGatewayVpcAttachment extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayVpcAttachmentConfig);
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
    get transitGatewayId(): string;
    get vpcId(): string;
    get vpcOwnerId(): string;
    private _filter?;
    get filter(): DataAwsEc2TransitGatewayVpcAttachmentFilter[];
    set filter(value: DataAwsEc2TransitGatewayVpcAttachmentFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayVpcAttachmentFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
