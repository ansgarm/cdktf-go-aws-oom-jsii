import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcPeeringConnectionAccepterAConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#auto_accept VpcPeeringConnectionAccepterA#auto_accept}.
     */
    readonly autoAccept?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#tags VpcPeeringConnectionAccepterA#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#tags_all VpcPeeringConnectionAccepterA#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}.
     */
    readonly vpcPeeringConnectionId: string;
    /**
     * accepter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#accepter VpcPeeringConnectionAccepterA#accepter}
     */
    readonly accepter?: VpcPeeringConnectionAccepterAccepter[];
    /**
     * requester block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#requester VpcPeeringConnectionAccepterA#requester}
     */
    readonly requester?: VpcPeeringConnectionAccepterRequester[];
}
export interface VpcPeeringConnectionAccepterAccepter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.
     */
    readonly allowClassicLinkToRemoteVpc?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.
     */
    readonly allowRemoteVpcDnsResolution?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.
     */
    readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionAccepterRequester {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}.
     */
    readonly allowClassicLinkToRemoteVpc?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}.
     */
    readonly allowRemoteVpcDnsResolution?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}.
     */
    readonly allowVpcToRemoteClassicLink?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter}.
 */
export declare class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter.html aws_vpc_peering_connection_accepter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig);
    get acceptStatus(): string;
    private _autoAccept?;
    get autoAccept(): boolean;
    set autoAccept(value: boolean);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | undefined;
    get id(): string;
    get peerOwnerId(): string;
    get peerRegion(): string;
    get peerVpcId(): string;
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
    get vpcId(): string;
    private _vpcPeeringConnectionId;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    get vpcPeeringConnectionIdInput(): string;
    private _accepter?;
    get accepter(): VpcPeeringConnectionAccepterAccepter[];
    set accepter(value: VpcPeeringConnectionAccepterAccepter[]);
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionAccepterAccepter[] | undefined;
    private _requester?;
    get requester(): VpcPeeringConnectionAccepterRequester[];
    set requester(value: VpcPeeringConnectionAccepterRequester[]);
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionAccepterRequester[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
