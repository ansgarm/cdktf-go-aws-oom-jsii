import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpv4CidrBlockAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#cidr_block VpcIpv4CidrBlockAssociation#cidr_block}.
     */
    readonly cidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#vpc_id VpcIpv4CidrBlockAssociation#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#timeouts VpcIpv4CidrBlockAssociation#timeouts}
     */
    readonly timeouts?: VpcIpv4CidrBlockAssociationTimeouts;
}
export interface VpcIpv4CidrBlockAssociationTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#create VpcIpv4CidrBlockAssociation#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#delete VpcIpv4CidrBlockAssociation#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association}.
 */
export declare class VpcIpv4CidrBlockAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcIpv4CidrBlockAssociationConfig);
    private _cidrBlock;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    get cidrBlockInput(): string;
    get id(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts?;
    get timeouts(): VpcIpv4CidrBlockAssociationTimeouts;
    set timeouts(value: VpcIpv4CidrBlockAssociationTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): VpcIpv4CidrBlockAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
