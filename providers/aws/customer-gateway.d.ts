import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomerGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#bgp_asn CustomerGateway#bgp_asn}.
     */
    readonly bgpAsn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#device_name CustomerGateway#device_name}.
     */
    readonly deviceName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#ip_address CustomerGateway#ip_address}.
     */
    readonly ipAddress: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#tags CustomerGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#tags_all CustomerGateway#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html#type CustomerGateway#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway}.
 */
export declare class CustomerGateway extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/customer_gateway.html aws_customer_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CustomerGatewayConfig);
    get arn(): string;
    private _bgpAsn;
    get bgpAsn(): string;
    set bgpAsn(value: string);
    get bgpAsnInput(): string;
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    resetDeviceName(): void;
    get deviceNameInput(): string | undefined;
    get id(): string;
    private _ipAddress;
    get ipAddress(): string;
    set ipAddress(value: string);
    get ipAddressInput(): string;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
