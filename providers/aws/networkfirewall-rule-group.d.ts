import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#capacity NetworkfirewallRuleGroup#capacity}.
     */
    readonly capacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#description NetworkfirewallRuleGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#name NetworkfirewallRuleGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules NetworkfirewallRuleGroup#rules}.
     */
    readonly rules?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags NetworkfirewallRuleGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags_all NetworkfirewallRuleGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#type NetworkfirewallRuleGroup#type}.
     */
    readonly type: string;
    /**
     * rule_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_group NetworkfirewallRuleGroup#rule_group}
     */
    readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}.
     */
    readonly definition: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}.
     */
    readonly key: string;
    /**
     * ip_set block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_set NetworkfirewallRuleGroup#ip_set}
     */
    readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}.
     */
    readonly definition: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}.
     */
    readonly key: string;
    /**
     * port_set block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_set NetworkfirewallRuleGroup#port_set}
     */
    readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
    /**
     * ip_sets block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_sets NetworkfirewallRuleGroup#ip_sets}
     */
    readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
    /**
     * port_sets block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_sets NetworkfirewallRuleGroup#port_sets}
     */
    readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}.
     */
    readonly generatedRulesType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#target_types NetworkfirewallRuleGroup#target_types}.
     */
    readonly targetTypes: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#targets NetworkfirewallRuleGroup#targets}.
     */
    readonly targets: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}.
     */
    readonly destination: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}.
     */
    readonly destinationPort: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#direction NetworkfirewallRuleGroup#direction}.
     */
    readonly direction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocol NetworkfirewallRuleGroup#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}.
     */
    readonly source: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}.
     */
    readonly sourcePort: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#keyword NetworkfirewallRuleGroup#keyword}.
     */
    readonly keyword: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#settings NetworkfirewallRuleGroup#settings}.
     */
    readonly settings?: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action NetworkfirewallRuleGroup#action}.
     */
    readonly action: string;
    /**
     * header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#header NetworkfirewallRuleGroup#header}
     */
    readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader[];
    /**
     * rule_option block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_option NetworkfirewallRuleGroup#rule_option}
     */
    readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#value NetworkfirewallRuleGroup#value}.
     */
    readonly value: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
    /**
     * dimension block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#dimension NetworkfirewallRuleGroup#dimension}
     */
    readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
    /**
     * publish_metric_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
     */
    readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_name NetworkfirewallRuleGroup#action_name}.
     */
    readonly actionName: string;
    /**
     * action_definition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_definition NetworkfirewallRuleGroup#action_definition}
     */
    readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}.
     */
    readonly addressDefinition: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}.
     */
    readonly fromPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}.
     */
    readonly toPort?: number;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}.
     */
    readonly addressDefinition: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}.
     */
    readonly fromPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}.
     */
    readonly toPort?: number;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#flags NetworkfirewallRuleGroup#flags}.
     */
    readonly flags: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#masks NetworkfirewallRuleGroup#masks}.
     */
    readonly masks?: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocols NetworkfirewallRuleGroup#protocols}.
     */
    readonly protocols?: number[];
    /**
     * destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
     */
    readonly destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
    /**
     * destination_port block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
     */
    readonly destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
    /**
     * source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
     */
    readonly source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
    /**
     * source_port block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
     */
    readonly sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
    /**
     * tcp_flag block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tcp_flag NetworkfirewallRuleGroup#tcp_flag}
     */
    readonly tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#actions NetworkfirewallRuleGroup#actions}.
     */
    readonly actions: string[];
    /**
     * match_attributes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#match_attributes NetworkfirewallRuleGroup#match_attributes}
     */
    readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#priority NetworkfirewallRuleGroup#priority}.
     */
    readonly priority: number;
    /**
     * rule_definition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_definition NetworkfirewallRuleGroup#rule_definition}
     */
    readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    /**
     * custom_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#custom_action NetworkfirewallRuleGroup#custom_action}
     */
    readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
    /**
     * stateless_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rule NetworkfirewallRuleGroup#stateless_rule}
     */
    readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_string NetworkfirewallRuleGroup#rules_string}.
     */
    readonly rulesString?: string;
    /**
     * rules_source_list block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
     */
    readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList[];
    /**
     * stateful_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateful_rule NetworkfirewallRuleGroup#stateful_rule}
     */
    readonly statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[];
    /**
     * stateless_rules_and_custom_actions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
     */
    readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions[];
}
export interface NetworkfirewallRuleGroupRuleGroup {
    /**
     * rule_variables block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_variables NetworkfirewallRuleGroup#rule_variables}
     */
    readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables[];
    /**
     * rules_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source NetworkfirewallRuleGroup#rules_source}
     */
    readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group}.
 */
export declare class NetworkfirewallRuleGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig);
    get arn(): string;
    private _capacity;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number;
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
    private _rules?;
    get rules(): string;
    set rules(value: string);
    resetRules(): void;
    get rulesInput(): string | undefined;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    get updateToken(): string;
    private _ruleGroup?;
    get ruleGroup(): NetworkfirewallRuleGroupRuleGroup[];
    set ruleGroup(value: NetworkfirewallRuleGroupRuleGroup[]);
    resetRuleGroup(): void;
    get ruleGroupInput(): NetworkfirewallRuleGroupRuleGroup[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
