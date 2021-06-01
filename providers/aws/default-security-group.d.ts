import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#egress DefaultSecurityGroup#egress}.
     */
    readonly egress?: DefaultSecurityGroupEgress[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ingress DefaultSecurityGroup#ingress}.
     */
    readonly ingress?: DefaultSecurityGroupIngress[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}.
     */
    readonly revokeRulesOnDelete?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags DefaultSecurityGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags_all DefaultSecurityGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#vpc_id DefaultSecurityGroup#vpc_id}.
     */
    readonly vpcId?: string;
}
export interface DefaultSecurityGroupEgress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}.
     */
    readonly cidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.
     */
    readonly ipv6CidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.
     */
    readonly prefixListIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}.
     */
    readonly selfAttribute?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}.
     */
    readonly toPort?: number;
}
export interface DefaultSecurityGroupIngress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}.
     */
    readonly cidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.
     */
    readonly ipv6CidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.
     */
    readonly prefixListIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}.
     */
    readonly selfAttribute?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}.
     */
    readonly toPort?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group}.
 */
export declare class DefaultSecurityGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DefaultSecurityGroupConfig);
    get arn(): string;
    get description(): string;
    private _egress?;
    get egress(): DefaultSecurityGroupEgress[];
    set egress(value: DefaultSecurityGroupEgress[]);
    resetEgress(): void;
    get egressInput(): DefaultSecurityGroupEgress[] | undefined;
    get id(): string;
    private _ingress?;
    get ingress(): DefaultSecurityGroupIngress[];
    set ingress(value: DefaultSecurityGroupIngress[]);
    resetIngress(): void;
    get ingressInput(): DefaultSecurityGroupIngress[] | undefined;
    get name(): string;
    get ownerId(): string;
    private _revokeRulesOnDelete?;
    get revokeRulesOnDelete(): boolean;
    set revokeRulesOnDelete(value: boolean);
    resetRevokeRulesOnDelete(): void;
    get revokeRulesOnDeleteInput(): boolean | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
