import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#domain_name VpcDhcpOptions#domain_name}.
     */
    readonly domainName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#domain_name_servers VpcDhcpOptions#domain_name_servers}.
     */
    readonly domainNameServers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#netbios_name_servers VpcDhcpOptions#netbios_name_servers}.
     */
    readonly netbiosNameServers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#netbios_node_type VpcDhcpOptions#netbios_node_type}.
     */
    readonly netbiosNodeType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#ntp_servers VpcDhcpOptions#ntp_servers}.
     */
    readonly ntpServers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#tags VpcDhcpOptions#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html#tags_all VpcDhcpOptions#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options}.
 */
export declare class VpcDhcpOptions extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: VpcDhcpOptionsConfig);
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    private _domainNameServers?;
    get domainNameServers(): string[];
    set domainNameServers(value: string[]);
    resetDomainNameServers(): void;
    get domainNameServersInput(): string[] | undefined;
    get id(): string;
    private _netbiosNameServers?;
    get netbiosNameServers(): string[];
    set netbiosNameServers(value: string[]);
    resetNetbiosNameServers(): void;
    get netbiosNameServersInput(): string[] | undefined;
    private _netbiosNodeType?;
    get netbiosNodeType(): string;
    set netbiosNodeType(value: string);
    resetNetbiosNodeType(): void;
    get netbiosNodeTypeInput(): string | undefined;
    private _ntpServers?;
    get ntpServers(): string[];
    set ntpServers(value: string[]);
    resetNtpServers(): void;
    get ntpServersInput(): string[] | undefined;
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
