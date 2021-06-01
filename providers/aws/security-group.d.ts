import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#egress SecurityGroup#egress}.
     */
    readonly egress?: SecurityGroupEgress[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ingress SecurityGroup#ingress}.
     */
    readonly ingress?: SecurityGroupIngress[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name SecurityGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name_prefix SecurityGroup#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.
     */
    readonly revokeRulesOnDelete?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags SecurityGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags_all SecurityGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#vpc_id SecurityGroup#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#timeouts SecurityGroup#timeouts}
     */
    readonly timeouts?: SecurityGroupTimeouts;
}
export interface SecurityGroupEgress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}.
     */
    readonly cidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.
     */
    readonly ipv6CidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}.
     */
    readonly prefixListIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}.
     */
    readonly selfAttribute?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}.
     */
    readonly toPort?: number;
}
export interface SecurityGroupIngress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}.
     */
    readonly cidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.
     */
    readonly ipv6CidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}.
     */
    readonly prefixListIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}.
     */
    readonly selfAttribute?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}.
     */
    readonly toPort?: number;
}
export interface SecurityGroupTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#create SecurityGroup#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#delete SecurityGroup#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group}.
 */
export declare class SecurityGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: SecurityGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _egress?;
    get egress(): SecurityGroupEgress[];
    set egress(value: SecurityGroupEgress[]);
    resetEgress(): void;
    get egressInput(): SecurityGroupEgress[] | undefined;
    get id(): string;
    private _ingress?;
    get ingress(): SecurityGroupIngress[];
    set ingress(value: SecurityGroupIngress[]);
    resetIngress(): void;
    get ingressInput(): SecurityGroupIngress[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
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
    private _timeouts?;
    get timeouts(): SecurityGroupTimeouts;
    set timeouts(value: SecurityGroupTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): SecurityGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
