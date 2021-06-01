import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#auto_accept VpcPeeringConnection#auto_accept}.
     */
    readonly autoAccept?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_owner_id VpcPeeringConnection#peer_owner_id}.
     */
    readonly peerOwnerId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_region VpcPeeringConnection#peer_region}.
     */
    readonly peerRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_vpc_id VpcPeeringConnection#peer_vpc_id}.
     */
    readonly peerVpcId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags VpcPeeringConnection#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags_all VpcPeeringConnection#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#vpc_id VpcPeeringConnection#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * accepter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#accepter VpcPeeringConnection#accepter}
     */
    readonly accepter?: VpcPeeringConnectionAccepter[];
    /**
     * requester block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#requester VpcPeeringConnection#requester}
     */
    readonly requester?: VpcPeeringConnectionRequester[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#timeouts VpcPeeringConnection#timeouts}
     */
    readonly timeouts?: VpcPeeringConnectionTimeouts;
}
export interface VpcPeeringConnectionAccepter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.
     */
    readonly allowClassicLinkToRemoteVpc?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.
     */
    readonly allowRemoteVpcDnsResolution?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.
     */
    readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionRequester {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.
     */
    readonly allowClassicLinkToRemoteVpc?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.
     */
    readonly allowRemoteVpcDnsResolution?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.
     */
    readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#create VpcPeeringConnection#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#delete VpcPeeringConnection#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#update VpcPeeringConnection#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection}.
 */
export declare class VpcPeeringConnection extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionConfig);
    get acceptStatus(): string;
    private _autoAccept?;
    get autoAccept(): boolean;
    set autoAccept(value: boolean);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | undefined;
    get id(): string;
    private _peerOwnerId?;
    get peerOwnerId(): string;
    set peerOwnerId(value: string);
    resetPeerOwnerId(): void;
    get peerOwnerIdInput(): string | undefined;
    private _peerRegion?;
    get peerRegion(): string;
    set peerRegion(value: string);
    resetPeerRegion(): void;
    get peerRegionInput(): string | undefined;
    private _peerVpcId;
    get peerVpcId(): string;
    set peerVpcId(value: string);
    get peerVpcIdInput(): string;
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
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _accepter?;
    get accepter(): VpcPeeringConnectionAccepter[];
    set accepter(value: VpcPeeringConnectionAccepter[]);
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionAccepter[] | undefined;
    private _requester?;
    get requester(): VpcPeeringConnectionRequester[];
    set requester(value: VpcPeeringConnectionRequester[]);
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionRequester[] | undefined;
    private _timeouts?;
    get timeouts(): VpcPeeringConnectionTimeouts;
    set timeouts(value: VpcPeeringConnectionTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): VpcPeeringConnectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
