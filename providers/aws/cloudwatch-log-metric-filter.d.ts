import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogMetricFilterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#log_group_name CloudwatchLogMetricFilter#log_group_name}.
     */
    readonly logGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#pattern CloudwatchLogMetricFilter#pattern}.
     */
    readonly pattern: string;
    /**
     * metric_transformation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#metric_transformation CloudwatchLogMetricFilter#metric_transformation}
     */
    readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformation[];
}
export interface CloudwatchLogMetricFilterMetricTransformation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#default_value CloudwatchLogMetricFilter#default_value}.
     */
    readonly defaultValue?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#name CloudwatchLogMetricFilter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#namespace CloudwatchLogMetricFilter#namespace}.
     */
    readonly namespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html#value CloudwatchLogMetricFilter#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter}.
 */
export declare class CloudwatchLogMetricFilter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html aws_cloudwatch_log_metric_filter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchLogMetricFilterConfig);
    get id(): string;
    private _logGroupName;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pattern;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
    private _metricTransformation;
    get metricTransformation(): CloudwatchLogMetricFilterMetricTransformation[];
    set metricTransformation(value: CloudwatchLogMetricFilterMetricTransformation[]);
    get metricTransformationInput(): CloudwatchLogMetricFilterMetricTransformation[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
