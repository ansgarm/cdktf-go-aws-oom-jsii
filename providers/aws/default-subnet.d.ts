import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#availability_zone DefaultSubnet#availability_zone}.
     */
    readonly availabilityZone: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}.
     */
    readonly customerOwnedIpv4Pool?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}.
     */
    readonly mapCustomerOwnedIpOnLaunch?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}.
     */
    readonly mapPublicIpOnLaunch?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#outpost_arn DefaultSubnet#outpost_arn}.
     */
    readonly outpostArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#tags DefaultSubnet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#tags_all DefaultSubnet#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#timeouts DefaultSubnet#timeouts}
     */
    readonly timeouts?: DefaultSubnetTimeouts;
}
export interface DefaultSubnetTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#create DefaultSubnet#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html#delete DefaultSubnet#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet}.
 */
export declare class DefaultSubnet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DefaultSubnetConfig);
    get arn(): string;
    get assignIpv6AddressOnCreation(): boolean;
    private _availabilityZone;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string;
    get availabilityZoneId(): string;
    get cidrBlock(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string | undefined;
    get id(): string;
    get ipv6CidrBlock(): string;
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
    get vpcId(): string;
    private _timeouts?;
    get timeouts(): DefaultSubnetTimeouts;
    set timeouts(value: DefaultSubnetTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DefaultSubnetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
