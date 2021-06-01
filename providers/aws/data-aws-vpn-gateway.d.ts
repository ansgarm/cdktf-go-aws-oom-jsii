import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpnGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#amazon_side_asn DataAwsVpnGateway#amazon_side_asn}.
     */
    readonly amazonSideAsn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#attached_vpc_id DataAwsVpnGateway#attached_vpc_id}.
     */
    readonly attachedVpcId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#availability_zone DataAwsVpnGateway#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#state DataAwsVpnGateway#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#tags DataAwsVpnGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#filter DataAwsVpnGateway#filter}
     */
    readonly filter?: DataAwsVpnGatewayFilter[];
}
export interface DataAwsVpnGatewayFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#name DataAwsVpnGateway#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html#values DataAwsVpnGateway#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway}.
 */
export declare class DataAwsVpnGateway extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsVpnGatewayConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): string;
    set amazonSideAsn(value: string);
    resetAmazonSideAsn(): void;
    get amazonSideAsnInput(): string | undefined;
    get arn(): string;
    private _attachedVpcId?;
    get attachedVpcId(): string;
    set attachedVpcId(value: string);
    resetAttachedVpcId(): void;
    get attachedVpcIdInput(): string | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    get id(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _filter?;
    get filter(): DataAwsVpnGatewayFilter[];
    set filter(value: DataAwsVpnGatewayFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpnGatewayFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
