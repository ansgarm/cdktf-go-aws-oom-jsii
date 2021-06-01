import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ClientVpnNetworkAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}.
     */
    readonly clientVpnEndpointId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html#security_groups Ec2ClientVpnNetworkAssociation#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}.
     */
    readonly subnetId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html aws_ec2_client_vpn_network_association}.
 */
export declare class Ec2ClientVpnNetworkAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html aws_ec2_client_vpn_network_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2ClientVpnNetworkAssociationConfig);
    get associationId(): string;
    private _clientVpnEndpointId;
    get clientVpnEndpointId(): string;
    set clientVpnEndpointId(value: string);
    get clientVpnEndpointIdInput(): string;
    get id(): string;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    get status(): string;
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
