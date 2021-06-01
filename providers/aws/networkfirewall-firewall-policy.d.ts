import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#description NetworkfirewallFirewallPolicy#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#name NetworkfirewallFirewallPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags NetworkfirewallFirewallPolicy#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags_all NetworkfirewallFirewallPolicy#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * firewall_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}
     */
    readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#value NetworkfirewallFirewallPolicy#value}.
     */
    readonly value: string;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
    /**
     * dimension block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#dimension NetworkfirewallFirewallPolicy#dimension}
     */
    readonly dimension: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
    /**
     * publish_metric_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
     */
    readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_name NetworkfirewallFirewallPolicy#action_name}.
     */
    readonly actionName: string;
    /**
     * action_definition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_definition NetworkfirewallFirewallPolicy#action_definition}
     */
    readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#priority NetworkfirewallFirewallPolicy#priority}.
     */
    readonly priority: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}.
     */
    readonly statelessDefaultActions: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}.
     */
    readonly statelessFragmentDefaultActions: string[];
    /**
     * stateful_rule_group_reference block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateful_rule_group_reference NetworkfirewallFirewallPolicy#stateful_rule_group_reference}
     */
    readonly statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[];
    /**
     * stateless_custom_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_custom_action NetworkfirewallFirewallPolicy#stateless_custom_action}
     */
    readonly statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[];
    /**
     * stateless_rule_group_reference block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_rule_group_reference NetworkfirewallFirewallPolicy#stateless_rule_group_reference}
     */
    readonly statelessRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy}.
 */
export declare class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkfirewallFirewallPolicyConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    get updateToken(): string;
    private _firewallPolicy;
    get firewallPolicy(): NetworkfirewallFirewallPolicyFirewallPolicy[];
    set firewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy[]);
    get firewallPolicyInput(): NetworkfirewallFirewallPolicyFirewallPolicy[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
