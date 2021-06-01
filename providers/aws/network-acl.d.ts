import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkAclConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#egress NetworkAcl#egress}.
     */
    readonly egress?: NetworkAclEgress[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ingress NetworkAcl#ingress}.
     */
    readonly ingress?: NetworkAclIngress[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#subnet_ids NetworkAcl#subnet_ids}.
     */
    readonly subnetIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#tags NetworkAcl#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#tags_all NetworkAcl#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#vpc_id NetworkAcl#vpc_id}.
     */
    readonly vpcId: string;
}
export interface NetworkAclEgress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#action NetworkAcl#action}.
     */
    readonly action?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#cidr_block NetworkAcl#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#from_port NetworkAcl#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_code NetworkAcl#icmp_code}.
     */
    readonly icmpCode?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_type NetworkAcl#icmp_type}.
     */
    readonly icmpType?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#protocol NetworkAcl#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#rule_no NetworkAcl#rule_no}.
     */
    readonly ruleNo?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#to_port NetworkAcl#to_port}.
     */
    readonly toPort?: number;
}
export interface NetworkAclIngress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#action NetworkAcl#action}.
     */
    readonly action?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#cidr_block NetworkAcl#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#from_port NetworkAcl#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_code NetworkAcl#icmp_code}.
     */
    readonly icmpCode?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#icmp_type NetworkAcl#icmp_type}.
     */
    readonly icmpType?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#protocol NetworkAcl#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#rule_no NetworkAcl#rule_no}.
     */
    readonly ruleNo?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html#to_port NetworkAcl#to_port}.
     */
    readonly toPort?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl}.
 */
export declare class NetworkAcl extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl.html aws_network_acl} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkAclConfig);
    get arn(): string;
    private _egress?;
    get egress(): NetworkAclEgress[];
    set egress(value: NetworkAclEgress[]);
    resetEgress(): void;
    get egressInput(): NetworkAclEgress[] | undefined;
    get id(): string;
    private _ingress?;
    get ingress(): NetworkAclIngress[];
    set ingress(value: NetworkAclIngress[]);
    resetIngress(): void;
    get ingressInput(): NetworkAclIngress[] | undefined;
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
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
