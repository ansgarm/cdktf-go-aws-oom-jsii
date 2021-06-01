import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SubnetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#assign_ipv6_address_on_creation Subnet#assign_ipv6_address_on_creation}.
     */
    readonly assignIpv6AddressOnCreation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone Subnet#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#availability_zone_id Subnet#availability_zone_id}.
     */
    readonly availabilityZoneId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#cidr_block Subnet#cidr_block}.
     */
    readonly cidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#customer_owned_ipv4_pool Subnet#customer_owned_ipv4_pool}.
     */
    readonly customerOwnedIpv4Pool?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#ipv6_cidr_block Subnet#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_customer_owned_ip_on_launch Subnet#map_customer_owned_ip_on_launch}.
     */
    readonly mapCustomerOwnedIpOnLaunch?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#map_public_ip_on_launch Subnet#map_public_ip_on_launch}.
     */
    readonly mapPublicIpOnLaunch?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#outpost_arn Subnet#outpost_arn}.
     */
    readonly outpostArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags Subnet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#tags_all Subnet#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#vpc_id Subnet#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#timeouts Subnet#timeouts}
     */
    readonly timeouts?: SubnetTimeouts;
}
export interface SubnetTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#create Subnet#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/subnet.html#delete Subnet#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet}.
 */
export declare class Subnet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SubnetConfig);
    get arn(): string;
    private _assignIpv6AddressOnCreation?;
    get assignIpv6AddressOnCreation(): boolean;
    set assignIpv6AddressOnCreation(value: boolean);
    resetAssignIpv6AddressOnCreation(): void;
    get assignIpv6AddressOnCreationInput(): boolean | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string | undefined;
    private _cidrBlock;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    get cidrBlockInput(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string | undefined;
    get id(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    get ipv6CidrBlockAssociationId(): string;
    private _mapCustomerOwnedIpOnLaunch?;
    get mapCustomerOwnedIpOnLaunch(): boolean;
    set mapCustomerOwnedIpOnLaunch(value: boolean);
    resetMapCustomerOwnedIpOnLaunch(): void;
    get mapCustomerOwnedIpOnLaunchInput(): boolean | undefined;
    private _mapPublicIpOnLaunch?;
    get mapPublicIpOnLaunch(): boolean;
    set mapPublicIpOnLaunch(value: boolean);
    resetMapPublicIpOnLaunch(): void;
    get mapPublicIpOnLaunchInput(): boolean | undefined;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string | undefined;
    get ownerId(): string;
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
    private _timeouts?;
    get timeouts(): SubnetTimeouts;
    set timeouts(value: SubnetTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): SubnetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
