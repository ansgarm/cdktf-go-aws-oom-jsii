import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#netbios_name_servers DefaultVpcDhcpOptions#netbios_name_servers}.
     */
    readonly netbiosNameServers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#netbios_node_type DefaultVpcDhcpOptions#netbios_node_type}.
     */
    readonly netbiosNodeType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#tags DefaultVpcDhcpOptions#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html#tags_all DefaultVpcDhcpOptions#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options}.
 */
export declare class DefaultVpcDhcpOptions extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DefaultVpcDhcpOptionsConfig);
    get arn(): string;
    get domainName(): string;
    get domainNameServers(): string;
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
    get ntpServers(): string;
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
