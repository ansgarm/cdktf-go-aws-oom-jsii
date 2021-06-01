import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#filter DataAwsEc2LocalGatewayVirtualInterfaceGroups#filter}
     */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html aws_ec2_local_gateway_virtual_interface_groups}.
 */
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroups extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html aws_ec2_local_gateway_virtual_interface_groups} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig);
    get id(): string;
    get ids(): string[];
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
    get filter(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[];
    set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
