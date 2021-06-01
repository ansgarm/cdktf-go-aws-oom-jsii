import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingplansScalingPlanConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#name AutoscalingplansScalingPlan#name}.
     */
    readonly name: string;
    /**
     * application_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#application_source AutoscalingplansScalingPlan#application_source}
     */
    readonly applicationSource: AutoscalingplansScalingPlanApplicationSource[];
    /**
     * scaling_instruction block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scaling_instruction AutoscalingplansScalingPlan#scaling_instruction}
     */
    readonly scalingInstruction: AutoscalingplansScalingPlanScalingInstruction[];
}
export interface AutoscalingplansScalingPlanApplicationSourceTagFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#key AutoscalingplansScalingPlan#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#values AutoscalingplansScalingPlan#values}.
     */
    readonly values?: string[];
}
export interface AutoscalingplansScalingPlanApplicationSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}.
     */
    readonly cloudformationStackArn?: string;
    /**
     * tag_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#tag_filter AutoscalingplansScalingPlan#tag_filter}
     */
    readonly tagFilter?: AutoscalingplansScalingPlanApplicationSourceTagFilter[];
}
export interface AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#dimensions AutoscalingplansScalingPlan#dimensions}.
     */
    readonly dimensions?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#metric_name AutoscalingplansScalingPlan#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#namespace AutoscalingplansScalingPlan#namespace}.
     */
    readonly namespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#statistic AutoscalingplansScalingPlan#statistic}.
     */
    readonly statistic: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#unit AutoscalingplansScalingPlan#unit}.
     */
    readonly unit?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}.
     */
    readonly predefinedLoadMetricType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#resource_label AutoscalingplansScalingPlan#resource_label}.
     */
    readonly resourceLabel?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#dimensions AutoscalingplansScalingPlan#dimensions}.
     */
    readonly dimensions?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#metric_name AutoscalingplansScalingPlan#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#namespace AutoscalingplansScalingPlan#namespace}.
     */
    readonly namespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#statistic AutoscalingplansScalingPlan#statistic}.
     */
    readonly statistic: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#unit AutoscalingplansScalingPlan#unit}.
     */
    readonly unit?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}.
     */
    readonly predefinedScalingMetricType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#resource_label AutoscalingplansScalingPlan#resource_label}.
     */
    readonly resourceLabel?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}.
     */
    readonly disableScaleIn?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}.
     */
    readonly estimatedInstanceWarmup?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}.
     */
    readonly scaleInCooldown?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}.
     */
    readonly scaleOutCooldown?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#target_value AutoscalingplansScalingPlan#target_value}.
     */
    readonly targetValue: number;
    /**
     * customized_scaling_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#customized_scaling_metric_specification AutoscalingplansScalingPlan#customized_scaling_metric_specification}
     */
    readonly customizedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification[];
    /**
     * predefined_scaling_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_scaling_metric_specification AutoscalingplansScalingPlan#predefined_scaling_metric_specification}
     */
    readonly predefinedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification[];
}
export interface AutoscalingplansScalingPlanScalingInstruction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}.
     */
    readonly disableDynamicScaling?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#max_capacity AutoscalingplansScalingPlan#max_capacity}.
     */
    readonly maxCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#min_capacity AutoscalingplansScalingPlan#min_capacity}.
     */
    readonly minCapacity: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}.
     */
    readonly predictiveScalingMaxCapacityBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}.
     */
    readonly predictiveScalingMaxCapacityBuffer?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}.
     */
    readonly predictiveScalingMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#resource_id AutoscalingplansScalingPlan#resource_id}.
     */
    readonly resourceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}.
     */
    readonly scalableDimension: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}.
     */
    readonly scalingPolicyUpdateBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}.
     */
    readonly scheduledActionBufferTime?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#service_namespace AutoscalingplansScalingPlan#service_namespace}.
     */
    readonly serviceNamespace: string;
    /**
     * customized_load_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#customized_load_metric_specification AutoscalingplansScalingPlan#customized_load_metric_specification}
     */
    readonly customizedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification[];
    /**
     * predefined_load_metric_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_load_metric_specification AutoscalingplansScalingPlan#predefined_load_metric_specification}
     */
    readonly predefinedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification[];
    /**
     * target_tracking_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#target_tracking_configuration AutoscalingplansScalingPlan#target_tracking_configuration}
     */
    readonly targetTrackingConfiguration: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan}.
 */
export declare class AutoscalingplansScalingPlan extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AutoscalingplansScalingPlanConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get scalingPlanVersion(): number;
    private _applicationSource;
    get applicationSource(): AutoscalingplansScalingPlanApplicationSource[];
    set applicationSource(value: AutoscalingplansScalingPlanApplicationSource[]);
    get applicationSourceInput(): AutoscalingplansScalingPlanApplicationSource[];
    private _scalingInstruction;
    get scalingInstruction(): AutoscalingplansScalingPlanScalingInstruction[];
    set scalingInstruction(value: AutoscalingplansScalingPlanScalingInstruction[]);
    get scalingInstructionInput(): AutoscalingplansScalingPlanScalingInstruction[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
