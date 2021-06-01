import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#cidr_blocks SecurityGroupRule#cidr_blocks}.
     */
    readonly cidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#description SecurityGroupRule#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#from_port SecurityGroupRule#from_port}.
     */
    readonly fromPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}.
     */
    readonly ipv6CidrBlocks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#prefix_list_ids SecurityGroupRule#prefix_list_ids}.
     */
    readonly prefixListIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#protocol SecurityGroupRule#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#security_group_id SecurityGroupRule#security_group_id}.
     */
    readonly securityGroupId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#self SecurityGroupRule#self}.
     */
    readonly selfAttribute?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#source_security_group_id SecurityGroupRule#source_security_group_id}.
     */
    readonly sourceSecurityGroupId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#to_port SecurityGroupRule#to_port}.
     */
    readonly toPort: number;
    /**
     * Type of rule, ingress (inbound) or egress (outbound).
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html#type SecurityGroupRule#type}
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule}.
 */
export declare class SecurityGroupRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecurityGroupRuleConfig);
    private _cidrBlocks?;
    get cidrBlocks(): string[];
    set cidrBlocks(value: string[]);
    resetCidrBlocks(): void;
    get cidrBlocksInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _fromPort;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number;
    get id(): string;
    private _ipv6CidrBlocks?;
    get ipv6CidrBlocks(): string[];
    set ipv6CidrBlocks(value: string[]);
    resetIpv6CidrBlocks(): void;
    get ipv6CidrBlocksInput(): string[] | undefined;
    private _prefixListIds?;
    get prefixListIds(): string[];
    set prefixListIds(value: string[]);
    resetPrefixListIds(): void;
    get prefixListIdsInput(): string[] | undefined;
    private _protocol;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _securityGroupId;
    get securityGroupId(): string;
    set securityGroupId(value: string);
    get securityGroupIdInput(): string;
    private _self?;
    get selfAttribute(): boolean;
    set selfAttribute(value: boolean);
    resetSelfAttribute(): void;
    get selfAttributeInput(): boolean | undefined;
    private _sourceSecurityGroupId?;
    get sourceSecurityGroupId(): string;
    set sourceSecurityGroupId(value: string);
    resetSourceSecurityGroupId(): void;
    get sourceSecurityGroupIdInput(): string | undefined;
    private _toPort;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
