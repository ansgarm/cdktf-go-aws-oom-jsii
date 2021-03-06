import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverFirewallRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#action Route53ResolverFirewallRule#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}.
     */
    readonly blockOverrideDnsType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_override_domain Route53ResolverFirewallRule#block_override_domain}.
     */
    readonly blockOverrideDomain?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}.
     */
    readonly blockOverrideTtl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#block_response Route53ResolverFirewallRule#block_response}.
     */
    readonly blockResponse?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}.
     */
    readonly firewallDomainListId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}.
     */
    readonly firewallRuleGroupId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#name Route53ResolverFirewallRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html#priority Route53ResolverFirewallRule#priority}.
     */
    readonly priority: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule}.
 */
export declare class Route53ResolverFirewallRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleConfig);
    private _action;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    private _blockOverrideDnsType?;
    get blockOverrideDnsType(): string;
    set blockOverrideDnsType(value: string);
    resetBlockOverrideDnsType(): void;
    get blockOverrideDnsTypeInput(): string | undefined;
    private _blockOverrideDomain?;
    get blockOverrideDomain(): string;
    set blockOverrideDomain(value: string);
    resetBlockOverrideDomain(): void;
    get blockOverrideDomainInput(): string | undefined;
    private _blockOverrideTtl?;
    get blockOverrideTtl(): number;
    set blockOverrideTtl(value: number);
    resetBlockOverrideTtl(): void;
    get blockOverrideTtlInput(): number | undefined;
    private _blockResponse?;
    get blockResponse(): string;
    set blockResponse(value: string);
    resetBlockResponse(): void;
    get blockResponseInput(): string | undefined;
    private _firewallDomainListId;
    get firewallDomainListId(): string;
    set firewallDomainListId(value: string);
    get firewallDomainListIdInput(): string;
    private _firewallRuleGroupId;
    get firewallRuleGroupId(): string;
    set firewallRuleGroupId(value: string);
    get firewallRuleGroupIdInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _priority;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
