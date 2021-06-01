import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#assign_generated_ipv6_cidr_block Vpc#assign_generated_ipv6_cidr_block}.
     */
    readonly assignGeneratedIpv6CidrBlock?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#cidr_block Vpc#cidr_block}.
     */
    readonly cidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_classiclink Vpc#enable_classiclink}.
     */
    readonly enableClassiclink?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_classiclink_dns_support Vpc#enable_classiclink_dns_support}.
     */
    readonly enableClassiclinkDnsSupport?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_dns_hostnames Vpc#enable_dns_hostnames}.
     */
    readonly enableDnsHostnames?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#enable_dns_support Vpc#enable_dns_support}.
     */
    readonly enableDnsSupport?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#instance_tenancy Vpc#instance_tenancy}.
     */
    readonly instanceTenancy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#tags Vpc#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc.html#tags_all Vpc#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc}.
 */
export declare class Vpc extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcConfig);
    get arn(): string;
    private _assignGeneratedIpv6CidrBlock?;
    get assignGeneratedIpv6CidrBlock(): boolean;
    set assignGeneratedIpv6CidrBlock(value: boolean);
    resetAssignGeneratedIpv6CidrBlock(): void;
    get assignGeneratedIpv6CidrBlockInput(): boolean | undefined;
    private _cidrBlock;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    get cidrBlockInput(): string;
    get defaultNetworkAclId(): string;
    get defaultRouteTableId(): string;
    get defaultSecurityGroupId(): string;
    get dhcpOptionsId(): string;
    private _enableClassiclink?;
    get enableClassiclink(): boolean;
    set enableClassiclink(value: boolean);
    resetEnableClassiclink(): void;
    get enableClassiclinkInput(): boolean | undefined;
    private _enableClassiclinkDnsSupport?;
    get enableClassiclinkDnsSupport(): boolean;
    set enableClassiclinkDnsSupport(value: boolean);
    resetEnableClassiclinkDnsSupport(): void;
    get enableClassiclinkDnsSupportInput(): boolean | undefined;
    private _enableDnsHostnames?;
    get enableDnsHostnames(): boolean;
    set enableDnsHostnames(value: boolean);
    resetEnableDnsHostnames(): void;
    get enableDnsHostnamesInput(): boolean | undefined;
    private _enableDnsSupport?;
    get enableDnsSupport(): boolean;
    set enableDnsSupport(value: boolean);
    resetEnableDnsSupport(): void;
    get enableDnsSupportInput(): boolean | undefined;
    get id(): string;
    private _instanceTenancy?;
    get instanceTenancy(): string;
    set instanceTenancy(value: string);
    resetInstanceTenancy(): void;
    get instanceTenancyInput(): string | undefined;
    get ipv6AssociationId(): string;
    get ipv6CidrBlock(): string;
    get mainRouteTableId(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
