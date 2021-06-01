import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#deregistration_delay LbTargetGroup#deregistration_delay}.
     */
    readonly deregistrationDelay?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}.
     */
    readonly lambdaMultiValueHeadersEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}.
     */
    readonly loadBalancingAlgorithmType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name LbTargetGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name_prefix LbTargetGroup#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#preserve_client_ip LbTargetGroup#preserve_client_ip}.
     */
    readonly preserveClientIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol_version LbTargetGroup#protocol_version}.
     */
    readonly protocolVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}.
     */
    readonly proxyProtocolV2?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#slow_start LbTargetGroup#slow_start}.
     */
    readonly slowStart?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags LbTargetGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags_all LbTargetGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#target_type LbTargetGroup#target_type}.
     */
    readonly targetType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#vpc_id LbTargetGroup#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * health_check block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#health_check LbTargetGroup#health_check}
     */
    readonly healthCheck?: LbTargetGroupHealthCheck[];
    /**
     * stickiness block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#stickiness LbTargetGroup#stickiness}
     */
    readonly stickiness?: LbTargetGroupStickiness[];
}
export interface LbTargetGroupHealthCheck {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#healthy_threshold LbTargetGroup#healthy_threshold}.
     */
    readonly healthyThreshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#interval LbTargetGroup#interval}.
     */
    readonly interval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#matcher LbTargetGroup#matcher}.
     */
    readonly matcher?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#path LbTargetGroup#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}.
     */
    readonly port?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#timeout LbTargetGroup#timeout}.
     */
    readonly timeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#unhealthy_threshold LbTargetGroup#unhealthy_threshold}.
     */
    readonly unhealthyThreshold?: number;
}
export interface LbTargetGroupStickiness {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#cookie_duration LbTargetGroup#cookie_duration}.
     */
    readonly cookieDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#type LbTargetGroup#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group}.
 */
export declare class LbTargetGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: LbTargetGroupConfig);
    get arn(): string;
    get arnSuffix(): string;
    private _deregistrationDelay?;
    get deregistrationDelay(): number;
    set deregistrationDelay(value: number);
    resetDeregistrationDelay(): void;
    get deregistrationDelayInput(): number | undefined;
    get id(): string;
    private _lambdaMultiValueHeadersEnabled?;
    get lambdaMultiValueHeadersEnabled(): boolean;
    set lambdaMultiValueHeadersEnabled(value: boolean);
    resetLambdaMultiValueHeadersEnabled(): void;
    get lambdaMultiValueHeadersEnabledInput(): boolean | undefined;
    private _loadBalancingAlgorithmType?;
    get loadBalancingAlgorithmType(): string;
    set loadBalancingAlgorithmType(value: string);
    resetLoadBalancingAlgorithmType(): void;
    get loadBalancingAlgorithmTypeInput(): string | undefined;
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
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _preserveClientIp?;
    get preserveClientIp(): string;
    set preserveClientIp(value: string);
    resetPreserveClientIp(): void;
    get preserveClientIpInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _protocolVersion?;
    get protocolVersion(): string;
    set protocolVersion(value: string);
    resetProtocolVersion(): void;
    get protocolVersionInput(): string | undefined;
    private _proxyProtocolV2?;
    get proxyProtocolV2(): boolean;
    set proxyProtocolV2(value: boolean);
    resetProxyProtocolV2(): void;
    get proxyProtocolV2Input(): boolean | undefined;
    private _slowStart?;
    get slowStart(): number;
    set slowStart(value: number);
    resetSlowStart(): void;
    get slowStartInput(): number | undefined;
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
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _healthCheck?;
    get healthCheck(): LbTargetGroupHealthCheck[];
    set healthCheck(value: LbTargetGroupHealthCheck[]);
    resetHealthCheck(): void;
    get healthCheckInput(): LbTargetGroupHealthCheck[] | undefined;
    private _stickiness?;
    get stickiness(): LbTargetGroupStickiness[];
    set stickiness(value: LbTargetGroupStickiness[]);
    resetStickiness(): void;
    get stickinessInput(): LbTargetGroupStickiness[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
