import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultNetworkAclConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.
     */
    readonly defaultNetworkAclId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#subnet_ids DefaultNetworkAcl#subnet_ids}.
     */
    readonly subnetIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#tags DefaultNetworkAcl#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#tags_all DefaultNetworkAcl#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * egress block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#egress DefaultNetworkAcl#egress}
     */
    readonly egress?: DefaultNetworkAclEgress[];
    /**
     * ingress block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ingress DefaultNetworkAcl#ingress}
     */
    readonly ingress?: DefaultNetworkAclIngress[];
}
export interface DefaultNetworkAclEgress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#action DefaultNetworkAcl#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#cidr_block DefaultNetworkAcl#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#from_port DefaultNetworkAcl#from_port}.
     */
    readonly fromPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_code DefaultNetworkAcl#icmp_code}.
     */
    readonly icmpCode?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_type DefaultNetworkAcl#icmp_type}.
     */
    readonly icmpType?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#protocol DefaultNetworkAcl#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#rule_no DefaultNetworkAcl#rule_no}.
     */
    readonly ruleNo: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#to_port DefaultNetworkAcl#to_port}.
     */
    readonly toPort: number;
}
export interface DefaultNetworkAclIngress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#action DefaultNetworkAcl#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#cidr_block DefaultNetworkAcl#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#from_port DefaultNetworkAcl#from_port}.
     */
    readonly fromPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_code DefaultNetworkAcl#icmp_code}.
     */
    readonly icmpCode?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#icmp_type DefaultNetworkAcl#icmp_type}.
     */
    readonly icmpType?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#protocol DefaultNetworkAcl#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#rule_no DefaultNetworkAcl#rule_no}.
     */
    readonly ruleNo: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html#to_port DefaultNetworkAcl#to_port}.
     */
    readonly toPort: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl}.
 */
export declare class DefaultNetworkAcl extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl.html aws_default_network_acl} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DefaultNetworkAclConfig);
    get arn(): string;
    private _defaultNetworkAclId;
    get defaultNetworkAclId(): string;
    set defaultNetworkAclId(value: string);
    get defaultNetworkAclIdInput(): string;
    get id(): string;
    get ownerId(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _egress?;
    get egress(): DefaultNetworkAclEgress[];
    set egress(value: DefaultNetworkAclEgress[]);
    resetEgress(): void;
    get egressInput(): DefaultNetworkAclEgress[] | undefined;
    private _ingress?;
    get ingress(): DefaultNetworkAclIngress[];
    set ingress(value: DefaultNetworkAclIngress[]);
    resetIngress(): void;
    get ingressInput(): DefaultNetworkAclIngress[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
