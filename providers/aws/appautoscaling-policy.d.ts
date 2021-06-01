import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppautoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#policy_type AppautoscalingPolicy#policy_type}.
     */
    readonly policyType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_id AppautoscalingPolicy#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scalable_dimension AppautoscalingPolicy#scalable_dimension}.
     */
    readonly scalableDimension: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#service_namespace AppautoscalingPolicy#service_namespace}.
     */
    readonly serviceNamespace: string;
    /**
     * step_scaling_policy_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}
     */
    readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration[];
    /**
     * target_tracking_scaling_policy_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}
     */
    readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
}
export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}.
     */
    readonly metricIntervalLowerBound?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}.
     */
    readonly metricIntervalUpperBound?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}.
     */
    readonly scalingAdjustment: number;
}
export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#adjustment_type AppautoscalingPolicy#adjustment_type}.
     */
    readonly adjustmentType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#cooldown AppautoscalingPolicy#cooldown}.
     */
    readonly cooldown?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}.
     */
    readonly metricAggregationType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}.
     */
    readonly minAdjustmentMagnitude?: number;
    /**
     * step_adjustment block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_adjustment AppautoscalingPolicy#step_adjustment}
     */
    readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#value AppautoscalingPolicy#value}.
     */
    readonly value: string;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_name AppautoscalingPolicy#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#namespace AppautoscalingPolicy#namespace}.
     */
    readonly namespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#statistic AppautoscalingPolicy#statistic}.
     */
    readonly statistic: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#unit AppautoscalingPolicy#unit}.
     */
    readonly unit?: string;
    /**
     * dimensions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#dimensions AppautoscalingPolicy#dimensions}
     */
    readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}.
     */
    readonly predefinedMetricType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_label AppautoscalingPolicy#resource_label}.
     */
    readonly resourceLabel?: string;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#disable_scale_in AppautoscalingPolicy#disable_scale_in}.
     */
    readonly disableScaleIn?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}.
     */
    readonly scaleInCooldown?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}.
     */
    readonly scaleOutCooldown?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_value AppautoscalingPolicy#target_value}.
     */
    readonly targetValue: number;
    /**
     * customized_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}
     */
    readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification[];
    /**
     * predefined_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}
     */
    readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy}.
 */
export declare class AppautoscalingPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policyType?;
    get policyType(): string;
    set policyType(value: string);
    resetPolicyType(): void;
    get policyTypeInput(): string | undefined;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _scalableDimension;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string;
    private _serviceNamespace;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string;
    private _stepScalingPolicyConfiguration?;
    get stepScalingPolicyConfiguration(): AppautoscalingPolicyStepScalingPolicyConfiguration[];
    set stepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration[]);
    resetStepScalingPolicyConfiguration(): void;
    get stepScalingPolicyConfigurationInput(): AppautoscalingPolicyStepScalingPolicyConfiguration[] | undefined;
    private _targetTrackingScalingPolicyConfiguration?;
    get targetTrackingScalingPolicyConfiguration(): AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
    set targetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[]);
    resetTargetTrackingScalingPolicyConfiguration(): void;
    get targetTrackingScalingPolicyConfigurationInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
