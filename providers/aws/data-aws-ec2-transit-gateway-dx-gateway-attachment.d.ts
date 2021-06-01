import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayDxGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}.
     */
    readonly dxGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}.
     */
    readonly transitGatewayId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#filter DataAwsEc2TransitGatewayDxGatewayAttachment#filter}
     */
    readonly filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayDxGatewayAttachmentFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#name DataAwsEc2TransitGatewayDxGatewayAttachment#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html#values DataAwsEc2TransitGatewayDxGatewayAttachment#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html aws_ec2_transit_gateway_dx_gateway_attachment}.
 */
export declare class DataAwsEc2TransitGatewayDxGatewayAttachment extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_dx_gateway_attachment.html aws_ec2_transit_gateway_dx_gateway_attachment} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayDxGatewayAttachmentConfig);
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    resetDxGatewayId(): void;
    get dxGatewayIdInput(): string | undefined;
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
    private _filter?;
    get filter(): DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[];
    set filter(value: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
