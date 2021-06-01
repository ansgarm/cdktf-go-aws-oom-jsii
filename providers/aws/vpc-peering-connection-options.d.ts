import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcPeeringConnectionOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}.
     */
    readonly vpcPeeringConnectionId: string;
    /**
     * accepter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#accepter VpcPeeringConnectionOptions#accepter}
     */
    readonly accepter?: VpcPeeringConnectionOptionsAccepter[];
    /**
     * requester block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#requester VpcPeeringConnectionOptions#requester}
     */
    readonly requester?: VpcPeeringConnectionOptionsRequester[];
}
export interface VpcPeeringConnectionOptionsAccepter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.
     */
    readonly allowClassicLinkToRemoteVpc?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.
     */
    readonly allowRemoteVpcDnsResolution?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.
     */
    readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionOptionsRequester {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}.
     */
    readonly allowClassicLinkToRemoteVpc?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}.
     */
    readonly allowRemoteVpcDnsResolution?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}.
     */
    readonly allowVpcToRemoteClassicLink?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options}.
 */
export declare class VpcPeeringConnectionOptions extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionOptionsConfig);
    get id(): string;
    private _vpcPeeringConnectionId;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    get vpcPeeringConnectionIdInput(): string;
    private _accepter?;
    get accepter(): VpcPeeringConnectionOptionsAccepter[];
    set accepter(value: VpcPeeringConnectionOptionsAccepter[]);
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionOptionsAccepter[] | undefined;
    private _requester?;
    get requester(): VpcPeeringConnectionOptionsRequester[];
    set requester(value: VpcPeeringConnectionOptionsRequester[]);
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionOptionsRequester[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
