import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecordConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#allow_overwrite Route53Record#allow_overwrite}.
     */
    readonly allowOverwrite?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#health_check_id Route53Record#health_check_id}.
     */
    readonly healthCheckId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}.
     */
    readonly multivalueAnswerRoutingPolicy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#name Route53Record#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#records Route53Record#records}.
     */
    readonly records?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#set_identifier Route53Record#set_identifier}.
     */
    readonly setIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#ttl Route53Record#ttl}.
     */
    readonly ttl?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#type Route53Record#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#zone_id Route53Record#zone_id}.
     */
    readonly zoneId: string;
    /**
     * alias block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#alias Route53Record#alias}
     */
    readonly alias?: Route53RecordAlias[];
    /**
     * failover_routing_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#failover_routing_policy Route53Record#failover_routing_policy}
     */
    readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[];
    /**
     * geolocation_routing_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#geolocation_routing_policy Route53Record#geolocation_routing_policy}
     */
    readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[];
    /**
     * latency_routing_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#latency_routing_policy Route53Record#latency_routing_policy}
     */
    readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[];
    /**
     * weighted_routing_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#weighted_routing_policy Route53Record#weighted_routing_policy}
     */
    readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[];
}
export interface Route53RecordAlias {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#evaluate_target_health Route53Record#evaluate_target_health}.
     */
    readonly evaluateTargetHealth: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#name Route53Record#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#zone_id Route53Record#zone_id}.
     */
    readonly zoneId: string;
}
export interface Route53RecordFailoverRoutingPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#type Route53Record#type}.
     */
    readonly type: string;
}
export interface Route53RecordGeolocationRoutingPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#continent Route53Record#continent}.
     */
    readonly continent?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#country Route53Record#country}.
     */
    readonly country?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#subdivision Route53Record#subdivision}.
     */
    readonly subdivision?: string;
}
export interface Route53RecordLatencyRoutingPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#region Route53Record#region}.
     */
    readonly region: string;
}
export interface Route53RecordWeightedRoutingPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#weight Route53Record#weight}.
     */
    readonly weight: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record}.
 */
export declare class Route53Record extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53RecordConfig);
    private _allowOverwrite?;
    get allowOverwrite(): boolean;
    set allowOverwrite(value: boolean);
    resetAllowOverwrite(): void;
    get allowOverwriteInput(): boolean | undefined;
    get fqdn(): string;
    private _healthCheckId?;
    get healthCheckId(): string;
    set healthCheckId(value: string);
    resetHealthCheckId(): void;
    get healthCheckIdInput(): string | undefined;
    get id(): string;
    private _multivalueAnswerRoutingPolicy?;
    get multivalueAnswerRoutingPolicy(): boolean;
    set multivalueAnswerRoutingPolicy(value: boolean);
    resetMultivalueAnswerRoutingPolicy(): void;
    get multivalueAnswerRoutingPolicyInput(): boolean | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _records?;
    get records(): string[];
    set records(value: string[]);
    resetRecords(): void;
    get recordsInput(): string[] | undefined;
    private _setIdentifier?;
    get setIdentifier(): string;
    set setIdentifier(value: string);
    resetSetIdentifier(): void;
    get setIdentifierInput(): string | undefined;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _zoneId;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    private _alias?;
    get alias(): Route53RecordAlias[];
    set alias(value: Route53RecordAlias[]);
    resetAlias(): void;
    get aliasInput(): Route53RecordAlias[] | undefined;
    private _failoverRoutingPolicy?;
    get failoverRoutingPolicy(): Route53RecordFailoverRoutingPolicy[];
    set failoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy[]);
    resetFailoverRoutingPolicy(): void;
    get failoverRoutingPolicyInput(): Route53RecordFailoverRoutingPolicy[] | undefined;
    private _geolocationRoutingPolicy?;
    get geolocationRoutingPolicy(): Route53RecordGeolocationRoutingPolicy[];
    set geolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy[]);
    resetGeolocationRoutingPolicy(): void;
    get geolocationRoutingPolicyInput(): Route53RecordGeolocationRoutingPolicy[] | undefined;
    private _latencyRoutingPolicy?;
    get latencyRoutingPolicy(): Route53RecordLatencyRoutingPolicy[];
    set latencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy[]);
    resetLatencyRoutingPolicy(): void;
    get latencyRoutingPolicyInput(): Route53RecordLatencyRoutingPolicy[] | undefined;
    private _weightedRoutingPolicy?;
    get weightedRoutingPolicy(): Route53RecordWeightedRoutingPolicy[];
    set weightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy[]);
    resetWeightedRoutingPolicy(): void;
    get weightedRoutingPolicyInput(): Route53RecordWeightedRoutingPolicy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
