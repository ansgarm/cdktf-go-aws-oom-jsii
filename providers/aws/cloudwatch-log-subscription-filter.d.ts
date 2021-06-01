import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogSubscriptionFilterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}.
     */
    readonly destinationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#distribution CloudwatchLogSubscriptionFilter#distribution}.
     */
    readonly distribution?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}.
     */
    readonly filterPattern: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}.
     */
    readonly logGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#name CloudwatchLogSubscriptionFilter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html#role_arn CloudwatchLogSubscriptionFilter#role_arn}.
     */
    readonly roleArn?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter}.
 */
export declare class CloudwatchLogSubscriptionFilter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchLogSubscriptionFilterConfig);
    private _destinationArn;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string;
    private _distribution?;
    get distribution(): string;
    set distribution(value: string);
    resetDistribution(): void;
    get distributionInput(): string | undefined;
    private _filterPattern;
    get filterPattern(): string;
    set filterPattern(value: string);
    get filterPatternInput(): string;
    get id(): string;
    private _logGroupName;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
