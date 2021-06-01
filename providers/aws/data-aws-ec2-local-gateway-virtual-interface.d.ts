import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#tags DataAwsEc2LocalGatewayVirtualInterface#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#filter DataAwsEc2LocalGatewayVirtualInterface#filter}
     */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#name DataAwsEc2LocalGatewayVirtualInterface#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#values DataAwsEc2LocalGatewayVirtualInterface#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface}.
 */
export declare class DataAwsEc2LocalGatewayVirtualInterface extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceConfig);
    get id(): string;
    get localAddress(): string;
    get localBgpAsn(): number;
    get localGatewayId(): string;
    get localGatewayVirtualInterfaceIds(): string[];
    get peerAddress(): string;
    get peerBgpAsn(): number;
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
    get vlan(): number;
    private _filter?;
    get filter(): DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
    set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
