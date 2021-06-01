import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcDhcpOptionsAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html#dhcp_options_id VpcDhcpOptionsAssociation#dhcp_options_id}.
     */
    readonly dhcpOptionsId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html#vpc_id VpcDhcpOptionsAssociation#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association}.
 */
export declare class VpcDhcpOptionsAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcDhcpOptionsAssociationConfig);
    private _dhcpOptionsId;
    get dhcpOptionsId(): string;
    set dhcpOptionsId(value: string);
    get dhcpOptionsIdInput(): string;
    get id(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
