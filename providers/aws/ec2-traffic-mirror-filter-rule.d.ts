import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TrafficMirrorFilterRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#description Ec2TrafficMirrorFilterRule#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#destination_cidr_block Ec2TrafficMirrorFilterRule#destination_cidr_block}.
     */
    readonly destinationCidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#protocol Ec2TrafficMirrorFilterRule#protocol}.
     */
    readonly protocol?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#rule_action Ec2TrafficMirrorFilterRule#rule_action}.
     */
    readonly ruleAction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#rule_number Ec2TrafficMirrorFilterRule#rule_number}.
     */
    readonly ruleNumber: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#source_cidr_block Ec2TrafficMirrorFilterRule#source_cidr_block}.
     */
    readonly sourceCidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#traffic_direction Ec2TrafficMirrorFilterRule#traffic_direction}.
     */
    readonly trafficDirection: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#traffic_mirror_filter_id Ec2TrafficMirrorFilterRule#traffic_mirror_filter_id}.
     */
    readonly trafficMirrorFilterId: string;
    /**
     * destination_port_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#destination_port_range Ec2TrafficMirrorFilterRule#destination_port_range}
     */
    readonly destinationPortRange?: Ec2TrafficMirrorFilterRuleDestinationPortRange[];
    /**
     * source_port_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#source_port_range Ec2TrafficMirrorFilterRule#source_port_range}
     */
    readonly sourcePortRange?: Ec2TrafficMirrorFilterRuleSourcePortRange[];
}
export interface Ec2TrafficMirrorFilterRuleDestinationPortRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#from_port Ec2TrafficMirrorFilterRule#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#to_port Ec2TrafficMirrorFilterRule#to_port}.
     */
    readonly toPort?: number;
}
export interface Ec2TrafficMirrorFilterRuleSourcePortRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#from_port Ec2TrafficMirrorFilterRule#from_port}.
     */
    readonly fromPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html#to_port Ec2TrafficMirrorFilterRule#to_port}.
     */
    readonly toPort?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule}.
 */
export declare class Ec2TrafficMirrorFilterRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2TrafficMirrorFilterRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destinationCidrBlock;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string;
    get id(): string;
    private _protocol?;
    get protocol(): number;
    set protocol(value: number);
    resetProtocol(): void;
    get protocolInput(): number | undefined;
    private _ruleAction;
    get ruleAction(): string;
    set ruleAction(value: string);
    get ruleActionInput(): string;
    private _ruleNumber;
    get ruleNumber(): number;
    set ruleNumber(value: number);
    get ruleNumberInput(): number;
    private _sourceCidrBlock;
    get sourceCidrBlock(): string;
    set sourceCidrBlock(value: string);
    get sourceCidrBlockInput(): string;
    private _trafficDirection;
    get trafficDirection(): string;
    set trafficDirection(value: string);
    get trafficDirectionInput(): string;
    private _trafficMirrorFilterId;
    get trafficMirrorFilterId(): string;
    set trafficMirrorFilterId(value: string);
    get trafficMirrorFilterIdInput(): string;
    private _destinationPortRange?;
    get destinationPortRange(): Ec2TrafficMirrorFilterRuleDestinationPortRange[];
    set destinationPortRange(value: Ec2TrafficMirrorFilterRuleDestinationPortRange[]);
    resetDestinationPortRange(): void;
    get destinationPortRangeInput(): Ec2TrafficMirrorFilterRuleDestinationPortRange[] | undefined;
    private _sourcePortRange?;
    get sourcePortRange(): Ec2TrafficMirrorFilterRuleSourcePortRange[];
    set sourcePortRange(value: Ec2TrafficMirrorFilterRuleSourcePortRange[]);
    resetSourcePortRange(): void;
    get sourcePortRangeInput(): Ec2TrafficMirrorFilterRuleSourcePortRange[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
