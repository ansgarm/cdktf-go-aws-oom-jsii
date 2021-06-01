import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchMetricAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#actions_enabled CloudwatchMetricAlarm#actions_enabled}.
     */
    readonly actionsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_actions CloudwatchMetricAlarm#alarm_actions}.
     */
    readonly alarmActions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_description CloudwatchMetricAlarm#alarm_description}.
     */
    readonly alarmDescription?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#alarm_name CloudwatchMetricAlarm#alarm_name}.
     */
    readonly alarmName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#comparison_operator CloudwatchMetricAlarm#comparison_operator}.
     */
    readonly comparisonOperator: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.
     */
    readonly datapointsToAlarm?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#dimensions CloudwatchMetricAlarm#dimensions}.
     */
    readonly dimensions?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.
     */
    readonly evaluateLowSampleCountPercentiles?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.
     */
    readonly evaluationPeriods: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#extended_statistic CloudwatchMetricAlarm#extended_statistic}.
     */
    readonly extendedStatistic?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.
     */
    readonly insufficientDataActions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_name CloudwatchMetricAlarm#metric_name}.
     */
    readonly metricName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#namespace CloudwatchMetricAlarm#namespace}.
     */
    readonly namespace?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#ok_actions CloudwatchMetricAlarm#ok_actions}.
     */
    readonly okActions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#period CloudwatchMetricAlarm#period}.
     */
    readonly period?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#statistic CloudwatchMetricAlarm#statistic}.
     */
    readonly statistic?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#tags CloudwatchMetricAlarm#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#tags_all CloudwatchMetricAlarm#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#threshold CloudwatchMetricAlarm#threshold}.
     */
    readonly threshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.
     */
    readonly thresholdMetricId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.
     */
    readonly treatMissingData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#unit CloudwatchMetricAlarm#unit}.
     */
    readonly unit?: string;
    /**
     * metric_query block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_query CloudwatchMetricAlarm#metric_query}
     */
    readonly metricQuery?: CloudwatchMetricAlarmMetricQuery[];
}
export interface CloudwatchMetricAlarmMetricQueryMetric {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#dimensions CloudwatchMetricAlarm#dimensions}.
     */
    readonly dimensions?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric_name CloudwatchMetricAlarm#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#namespace CloudwatchMetricAlarm#namespace}.
     */
    readonly namespace?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#period CloudwatchMetricAlarm#period}.
     */
    readonly period: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#stat CloudwatchMetricAlarm#stat}.
     */
    readonly stat: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#unit CloudwatchMetricAlarm#unit}.
     */
    readonly unit?: string;
}
export interface CloudwatchMetricAlarmMetricQuery {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#expression CloudwatchMetricAlarm#expression}.
     */
    readonly expression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#id CloudwatchMetricAlarm#id}.
     */
    readonly id: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#label CloudwatchMetricAlarm#label}.
     */
    readonly label?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#return_data CloudwatchMetricAlarm#return_data}.
     */
    readonly returnData?: boolean;
    /**
     * metric block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html#metric CloudwatchMetricAlarm#metric}
     */
    readonly metric?: CloudwatchMetricAlarmMetricQueryMetric[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm}.
 */
export declare class CloudwatchMetricAlarm extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html aws_cloudwatch_metric_alarm} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchMetricAlarmConfig);
    private _actionsEnabled?;
    get actionsEnabled(): boolean;
    set actionsEnabled(value: boolean);
    resetActionsEnabled(): void;
    get actionsEnabledInput(): boolean | undefined;
    private _alarmActions?;
    get alarmActions(): string[];
    set alarmActions(value: string[]);
    resetAlarmActions(): void;
    get alarmActionsInput(): string[] | undefined;
    private _alarmDescription?;
    get alarmDescription(): string;
    set alarmDescription(value: string);
    resetAlarmDescription(): void;
    get alarmDescriptionInput(): string | undefined;
    private _alarmName;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string;
    get arn(): string;
    private _comparisonOperator;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _datapointsToAlarm?;
    get datapointsToAlarm(): number;
    set datapointsToAlarm(value: number);
    resetDatapointsToAlarm(): void;
    get datapointsToAlarmInput(): number | undefined;
    private _dimensions?;
    get dimensions(): {
        [key: string]: string;
    };
    set dimensions(value: {
        [key: string]: string;
    });
    resetDimensions(): void;
    get dimensionsInput(): {
        [key: string]: string;
    } | undefined;
    private _evaluateLowSampleCountPercentiles?;
    get evaluateLowSampleCountPercentiles(): string;
    set evaluateLowSampleCountPercentiles(value: string);
    resetEvaluateLowSampleCountPercentiles(): void;
    get evaluateLowSampleCountPercentilesInput(): string | undefined;
    private _evaluationPeriods;
    get evaluationPeriods(): number;
    set evaluationPeriods(value: number);
    get evaluationPeriodsInput(): number;
    private _extendedStatistic?;
    get extendedStatistic(): string;
    set extendedStatistic(value: string);
    resetExtendedStatistic(): void;
    get extendedStatisticInput(): string | undefined;
    get id(): string;
    private _insufficientDataActions?;
    get insufficientDataActions(): string[];
    set insufficientDataActions(value: string[]);
    resetInsufficientDataActions(): void;
    get insufficientDataActionsInput(): string[] | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    resetMetricName(): void;
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _okActions?;
    get okActions(): string[];
    set okActions(value: string[]);
    resetOkActions(): void;
    get okActionsInput(): string[] | undefined;
    private _period?;
    get period(): number;
    set period(value: number);
    resetPeriod(): void;
    get periodInput(): number | undefined;
    private _statistic?;
    get statistic(): string;
    set statistic(value: string);
    resetStatistic(): void;
    get statisticInput(): string | undefined;
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
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    resetThreshold(): void;
    get thresholdInput(): number | undefined;
    private _thresholdMetricId?;
    get thresholdMetricId(): string;
    set thresholdMetricId(value: string);
    resetThresholdMetricId(): void;
    get thresholdMetricIdInput(): string | undefined;
    private _treatMissingData?;
    get treatMissingData(): string;
    set treatMissingData(value: string);
    resetTreatMissingData(): void;
    get treatMissingDataInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _metricQuery?;
    get metricQuery(): CloudwatchMetricAlarmMetricQuery[];
    set metricQuery(value: CloudwatchMetricAlarmMetricQuery[]);
    resetMetricQuery(): void;
    get metricQueryInput(): CloudwatchMetricAlarmMetricQuery[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
