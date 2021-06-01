import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkAclRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#cidr_block NetworkAclRule#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#egress NetworkAclRule#egress}.
     */
    readonly egress?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#from_port NetworkAclRule#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#icmp_code NetworkAclRule#icmp_code}.
     */
    readonly icmpCode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#icmp_type NetworkAclRule#icmp_type}.
     */
    readonly icmpType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#network_acl_id NetworkAclRule#network_acl_id}.
     */
    readonly networkAclId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#protocol NetworkAclRule#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#rule_action NetworkAclRule#rule_action}.
     */
    readonly ruleAction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#rule_number NetworkAclRule#rule_number}.
     */
    readonly ruleNumber: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#to_port NetworkAclRule#to_port}.
     */
    readonly toPort?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule}.
 */
export declare class NetworkAclRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkAclRuleConfig);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _egress?;
    get egress(): boolean;
    set egress(value: boolean);
    resetEgress(): void;
    get egressInput(): boolean | undefined;
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    resetFromPort(): void;
    get fromPortInput(): number | undefined;
    private _icmpCode?;
    get icmpCode(): string;
    set icmpCode(value: string);
    resetIcmpCode(): void;
    get icmpCodeInput(): string | undefined;
    private _icmpType?;
    get icmpType(): string;
    set icmpType(value: string);
    resetIcmpType(): void;
    get icmpTypeInput(): string | undefined;
    get id(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _networkAclId;
    get networkAclId(): string;
    set networkAclId(value: string);
    get networkAclIdInput(): string;
    private _protocol;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _ruleAction;
    get ruleAction(): string;
    set ruleAction(value: string);
    get ruleActionInput(): string;
    private _ruleNumber;
    get ruleNumber(): number;
    set ruleNumber(value: number);
    get ruleNumberInput(): number;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
