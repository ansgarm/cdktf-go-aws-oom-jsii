import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}.
     */
    readonly localGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}
     */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group}.
 */
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig);
    get id(): string;
    private _localGatewayId?;
    get localGatewayId(): string;
    set localGatewayId(value: string);
    resetLocalGatewayId(): void;
    get localGatewayIdInput(): string | undefined;
    get localGatewayVirtualInterfaceIds(): string[];
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
    get filter(): DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[];
    set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
