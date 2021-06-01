import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#adjustment_type AutoscalingPolicy#adjustment_type}.
     */
    readonly adjustmentType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}.
     */
    readonly autoscalingGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#cooldown AutoscalingPolicy#cooldown}.
     */
    readonly cooldown?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}.
     */
    readonly estimatedInstanceWarmup?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}.
     */
    readonly metricAggregationType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}.
     */
    readonly minAdjustmentMagnitude?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#policy_type AutoscalingPolicy#policy_type}.
     */
    readonly policyType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}.
     */
    readonly scalingAdjustment?: number;
    /**
     * step_adjustment block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#step_adjustment AutoscalingPolicy#step_adjustment}
     */
    readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[];
    /**
     * target_tracking_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_tracking_configuration AutoscalingPolicy#target_tracking_configuration}
     */
    readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
}
export interface AutoscalingPolicyStepAdjustment {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}.
     */
    readonly metricIntervalLowerBound?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}.
     */
    readonly metricIntervalUpperBound?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}.
     */
    readonly scalingAdjustment: number;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#value AutoscalingPolicy#value}.
     */
    readonly value: string;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_name AutoscalingPolicy#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#namespace AutoscalingPolicy#namespace}.
     */
    readonly namespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#statistic AutoscalingPolicy#statistic}.
     */
    readonly statistic: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#unit AutoscalingPolicy#unit}.
     */
    readonly unit?: string;
    /**
     * metric_dimension block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_dimension AutoscalingPolicy#metric_dimension}
     */
    readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
}
export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}.
     */
    readonly predefinedMetricType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}.
     */
    readonly resourceLabel?: string;
}
export interface AutoscalingPolicyTargetTrackingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#disable_scale_in AutoscalingPolicy#disable_scale_in}.
     */
    readonly disableScaleIn?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_value AutoscalingPolicy#target_value}.
     */
    readonly targetValue: number;
    /**
     * customized_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#customized_metric_specification AutoscalingPolicy#customized_metric_specification}
     */
    readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification[];
    /**
     * predefined_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_specification AutoscalingPolicy#predefined_metric_specification}
     */
    readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy}.
 */
export declare class AutoscalingPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig);
    private _adjustmentType?;
    get adjustmentType(): string;
    set adjustmentType(value: string);
    resetAdjustmentType(): void;
    get adjustmentTypeInput(): string | undefined;
    get arn(): string;
    private _autoscalingGroupName;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string;
    private _cooldown?;
    get cooldown(): number;
    set cooldown(value: number);
    resetCooldown(): void;
    get cooldownInput(): number | undefined;
    private _estimatedInstanceWarmup?;
    get estimatedInstanceWarmup(): number;
    set estimatedInstanceWarmup(value: number);
    resetEstimatedInstanceWarmup(): void;
    get estimatedInstanceWarmupInput(): number | undefined;
    get id(): string;
    private _metricAggregationType?;
    get metricAggregationType(): string;
    set metricAggregationType(value: string);
    resetMetricAggregationType(): void;
    get metricAggregationTypeInput(): string | undefined;
    private _minAdjustmentMagnitude?;
    get minAdjustmentMagnitude(): number;
    set minAdjustmentMagnitude(value: number);
    resetMinAdjustmentMagnitude(): void;
    get minAdjustmentMagnitudeInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policyType?;
    get policyType(): string;
    set policyType(value: string);
    resetPolicyType(): void;
    get policyTypeInput(): string | undefined;
    private _scalingAdjustment?;
    get scalingAdjustment(): number;
    set scalingAdjustment(value: number);
    resetScalingAdjustment(): void;
    get scalingAdjustmentInput(): number | undefined;
    private _stepAdjustment?;
    get stepAdjustment(): AutoscalingPolicyStepAdjustment[];
    set stepAdjustment(value: AutoscalingPolicyStepAdjustment[]);
    resetStepAdjustment(): void;
    get stepAdjustmentInput(): AutoscalingPolicyStepAdjustment[] | undefined;
    private _targetTrackingConfiguration?;
    get targetTrackingConfiguration(): AutoscalingPolicyTargetTrackingConfiguration[];
    set targetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration[]);
    resetTargetTrackingConfiguration(): void;
    get targetTrackingConfigurationInput(): AutoscalingPolicyTargetTrackingConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
