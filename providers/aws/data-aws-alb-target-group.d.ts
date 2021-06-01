import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAlbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html#name DataAwsAlbTargetGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html#tags DataAwsAlbTargetGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsAlbTargetGroupHealthCheck extends cdktf.ComplexComputedList {
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
export declare class DataAwsAlbTargetGroupStickiness extends cdktf.ComplexComputedList {
    get cookieDuration(): number;
    get enabled(): boolean;
    get type(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group}.
 */
export declare class DataAwsAlbTargetGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsAlbTargetGroupConfig);
    get arn(): string;
    get arnSuffix(): string;
    get deregistrationDelay(): number;
    healthCheck(index: string): DataAwsAlbTargetGroupHealthCheck;
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
    stickiness(index: string): DataAwsAlbTargetGroupStickiness;
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
