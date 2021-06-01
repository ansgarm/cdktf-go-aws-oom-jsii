import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FlowLogConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#eni_id FlowLog#eni_id}.
     */
    readonly eniId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#iam_role_arn FlowLog#iam_role_arn}.
     */
    readonly iamRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination FlowLog#log_destination}.
     */
    readonly logDestination?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination_type FlowLog#log_destination_type}.
     */
    readonly logDestinationType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_format FlowLog#log_format}.
     */
    readonly logFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_group_name FlowLog#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#max_aggregation_interval FlowLog#max_aggregation_interval}.
     */
    readonly maxAggregationInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#subnet_id FlowLog#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags FlowLog#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags_all FlowLog#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#traffic_type FlowLog#traffic_type}.
     */
    readonly trafficType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#vpc_id FlowLog#vpc_id}.
     */
    readonly vpcId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log}.
 */
export declare class FlowLog extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: FlowLogConfig);
    get arn(): string;
    private _eniId?;
    get eniId(): string;
    set eniId(value: string);
    resetEniId(): void;
    get eniIdInput(): string | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string | undefined;
    get id(): string;
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    resetLogDestination(): void;
    get logDestinationInput(): string | undefined;
    private _logDestinationType?;
    get logDestinationType(): string;
    set logDestinationType(value: string);
    resetLogDestinationType(): void;
    get logDestinationTypeInput(): string | undefined;
    private _logFormat?;
    get logFormat(): string;
    set logFormat(value: string);
    resetLogFormat(): void;
    get logFormatInput(): string | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _maxAggregationInterval?;
    get maxAggregationInterval(): number;
    set maxAggregationInterval(value: number);
    resetMaxAggregationInterval(): void;
    get maxAggregationIntervalInput(): number | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _trafficType;
    get trafficType(): string;
    set trafficType(value: string);
    get trafficTypeInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
