import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#deregistration_delay AlbTargetGroup#deregistration_delay}.
     */
    readonly deregistrationDelay?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}.
     */
    readonly lambdaMultiValueHeadersEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}.
     */
    readonly loadBalancingAlgorithmType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#name AlbTargetGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#name_prefix AlbTargetGroup#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#port AlbTargetGroup#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#preserve_client_ip AlbTargetGroup#preserve_client_ip}.
     */
    readonly preserveClientIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol AlbTargetGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol_version AlbTargetGroup#protocol_version}.
     */
    readonly protocolVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}.
     */
    readonly proxyProtocolV2?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#slow_start AlbTargetGroup#slow_start}.
     */
    readonly slowStart?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#tags AlbTargetGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#tags_all AlbTargetGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#target_type AlbTargetGroup#target_type}.
     */
    readonly targetType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#vpc_id AlbTargetGroup#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * health_check block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#health_check AlbTargetGroup#health_check}
     */
    readonly healthCheck?: AlbTargetGroupHealthCheck[];
    /**
     * stickiness block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#stickiness AlbTargetGroup#stickiness}
     */
    readonly stickiness?: AlbTargetGroupStickiness[];
}
export interface AlbTargetGroupHealthCheck {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#enabled AlbTargetGroup#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#healthy_threshold AlbTargetGroup#healthy_threshold}.
     */
    readonly healthyThreshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#interval AlbTargetGroup#interval}.
     */
    readonly interval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#matcher AlbTargetGroup#matcher}.
     */
    readonly matcher?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#path AlbTargetGroup#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#port AlbTargetGroup#port}.
     */
    readonly port?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol AlbTargetGroup#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#timeout AlbTargetGroup#timeout}.
     */
    readonly timeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}.
     */
    readonly unhealthyThreshold?: number;
}
export interface AlbTargetGroupStickiness {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#cookie_duration AlbTargetGroup#cookie_duration}.
     */
    readonly cookieDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#enabled AlbTargetGroup#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#type AlbTargetGroup#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group}.
 */
export declare class AlbTargetGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: AlbTargetGroupConfig);
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
    get healthCheck(): AlbTargetGroupHealthCheck[];
    set healthCheck(value: AlbTargetGroupHealthCheck[]);
    resetHealthCheck(): void;
    get healthCheckInput(): AlbTargetGroupHealthCheck[] | undefined;
    private _stickiness?;
    get stickiness(): AlbTargetGroupStickiness[];
    set stickiness(value: AlbTargetGroupStickiness[]);
    resetStickiness(): void;
    get stickinessInput(): AlbTargetGroupStickiness[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
