import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html#name DataAwsLbTargetGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html#tags DataAwsLbTargetGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsLbTargetGroupHealthCheck extends cdktf.ComplexComputedList {
    get enabled(): boolean;
    get healthyThreshold(): number;
    get interval(): number;
    get matcher(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get timeout(): number;
    get unhealthyThreshold(): number;
}
export declare class DataAwsLbTargetGroupStickiness extends cdktf.ComplexComputedList {
    get cookieDuration(): number;
    get enabled(): boolean;
    get type(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group}.
 */
export declare class DataAwsLbTargetGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsLbTargetGroupConfig);
    get arn(): string;
    get arnSuffix(): string;
    get deregistrationDelay(): number;
    healthCheck(index: string): DataAwsLbTargetGroupHealthCheck;
    get id(): string;
    get lambdaMultiValueHeadersEnabled(): boolean;
    get loadBalancingAlgorithmType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get port(): number;
    get preserveClientIp(): string;
    get protocol(): string;
    get protocolVersion(): string;
    get proxyProtocolV2(): boolean;
    get slowStart(): number;
    stickiness(index: string): DataAwsLbTargetGroupStickiness;
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
    get targetType(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
