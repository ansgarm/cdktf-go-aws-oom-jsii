import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}.
     */
    readonly firewallRuleGroupId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}.
     */
    readonly mutationProtection?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#name Route53ResolverFirewallRuleGroupAssociation#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#priority Route53ResolverFirewallRuleGroupAssociation#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags Route53ResolverFirewallRuleGroupAssociation#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association}.
 */
export declare class Route53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupAssociationConfig);
    get arn(): string;
    private _firewallRuleGroupId;
    get firewallRuleGroupId(): string;
    set firewallRuleGroupId(value: string);
    get firewallRuleGroupIdInput(): string;
    get id(): string;
    private _mutationProtection?;
    get mutationProtection(): string;
    set mutationProtection(value: string);
    resetMutationProtection(): void;
    get mutationProtectionInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _priority;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
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
