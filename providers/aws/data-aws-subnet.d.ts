import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#availability_zone DataAwsSubnet#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#availability_zone_id DataAwsSubnet#availability_zone_id}.
     */
    readonly availabilityZoneId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#cidr_block DataAwsSubnet#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#default_for_az DataAwsSubnet#default_for_az}.
     */
    readonly defaultForAz?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#state DataAwsSubnet#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#tags DataAwsSubnet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#vpc_id DataAwsSubnet#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#filter DataAwsSubnet#filter}
     */
    readonly filter?: DataAwsSubnetFilter[];
}
export interface DataAwsSubnetFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#name DataAwsSubnet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet.html#values DataAwsSubnet#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet}.
 */
export declare class DataAwsSubnet extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsSubnetConfig);
    get arn(): string;
    get assignIpv6AddressOnCreation(): boolean;
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
    get availableIpAddressCount(): number;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    get customerOwnedIpv4Pool(): string;
    private _defaultForAz?;
    get defaultForAz(): boolean;
    set defaultForAz(value: boolean);
    resetDefaultForAz(): void;
    get defaultForAzInput(): boolean | undefined;
    get id(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    get ipv6CidrBlockAssociationId(): string;
    get mapCustomerOwnedIpOnLaunch(): boolean;
    get mapPublicIpOnLaunch(): boolean;
    get outpostArn(): string;
    get ownerId(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter?;
    get filter(): DataAwsSubnetFilter[];
    set filter(value: DataAwsSubnetFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSubnetFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
