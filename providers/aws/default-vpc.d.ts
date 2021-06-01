import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultVpcConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_classiclink DefaultVpc#enable_classiclink}.
     */
    readonly enableClassiclink?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_classiclink_dns_support DefaultVpc#enable_classiclink_dns_support}.
     */
    readonly enableClassiclinkDnsSupport?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_dns_hostnames DefaultVpc#enable_dns_hostnames}.
     */
    readonly enableDnsHostnames?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#enable_dns_support DefaultVpc#enable_dns_support}.
     */
    readonly enableDnsSupport?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#tags DefaultVpc#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html#tags_all DefaultVpc#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc}.
 */
export declare class DefaultVpc extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DefaultVpcConfig);
    get arn(): string;
    get assignGeneratedIpv6CidrBlock(): boolean;
    get cidrBlock(): string;
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
    get instanceTenancy(): string;
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
