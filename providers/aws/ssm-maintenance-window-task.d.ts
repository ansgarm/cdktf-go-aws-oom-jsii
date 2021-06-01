import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmMaintenanceWindowTaskConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#description SsmMaintenanceWindowTask#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_concurrency SsmMaintenanceWindowTask#max_concurrency}.
     */
    readonly maxConcurrency: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_errors SsmMaintenanceWindowTask#max_errors}.
     */
    readonly maxErrors: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#priority SsmMaintenanceWindowTask#priority}.
     */
    readonly priority?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.
     */
    readonly serviceRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_arn SsmMaintenanceWindowTask#task_arn}.
     */
    readonly taskArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_type SsmMaintenanceWindowTask#task_type}.
     */
    readonly taskType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#window_id SsmMaintenanceWindowTask#window_id}.
     */
    readonly windowId: string;
    /**
     * targets block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#targets SsmMaintenanceWindowTask#targets}
     */
    readonly targets?: SsmMaintenanceWindowTaskTargets[];
    /**
     * task_invocation_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
     */
    readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters[];
}
export interface SsmMaintenanceWindowTaskTargets {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#key SsmMaintenanceWindowTask#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}.
     */
    readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}.
     */
    readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}.
     */
    readonly documentVersion?: string;
    /**
     * parameter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
     */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#client_context SsmMaintenanceWindowTask#client_context}.
     */
    readonly clientContext?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#payload SsmMaintenanceWindowTask#payload}.
     */
    readonly payload?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#qualifier SsmMaintenanceWindowTask#qualifier}.
     */
    readonly qualifier?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}.
     */
    readonly cloudwatchLogGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}.
     */
    readonly cloudwatchOutputEnabled?: boolean;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_arn SsmMaintenanceWindowTask#notification_arn}.
     */
    readonly notificationArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_events SsmMaintenanceWindowTask#notification_events}.
     */
    readonly notificationEvents?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_type SsmMaintenanceWindowTask#notification_type}.
     */
    readonly notificationType?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}.
     */
    readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#comment SsmMaintenanceWindowTask#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash SsmMaintenanceWindowTask#document_hash}.
     */
    readonly documentHash?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash_type SsmMaintenanceWindowTask#document_hash_type}.
     */
    readonly documentHashType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}.
     */
    readonly documentVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}.
     */
    readonly outputS3Bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}.
     */
    readonly outputS3KeyPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.
     */
    readonly serviceRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}.
     */
    readonly timeoutSeconds?: number;
    /**
     * cloudwatch_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}
     */
    readonly cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig[];
    /**
     * notification_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_config SsmMaintenanceWindowTask#notification_config}
     */
    readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig[];
    /**
     * parameter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
     */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#input SsmMaintenanceWindowTask#input}.
     */
    readonly input?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}.
     */
    readonly name?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
    /**
     * automation_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#automation_parameters SsmMaintenanceWindowTask#automation_parameters}
     */
    readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters[];
    /**
     * lambda_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}
     */
    readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters[];
    /**
     * run_command_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}
     */
    readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters[];
    /**
     * step_functions_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}
     */
    readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task}.
 */
export declare class SsmMaintenanceWindowTask extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _maxConcurrency;
    get maxConcurrency(): string;
    set maxConcurrency(value: string);
    get maxConcurrencyInput(): string;
    private _maxErrors;
    get maxErrors(): string;
    set maxErrors(value: string);
    get maxErrorsInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string | undefined;
    private _taskArn;
    get taskArn(): string;
    set taskArn(value: string);
    get taskArnInput(): string;
    private _taskType;
    get taskType(): string;
    set taskType(value: string);
    get taskTypeInput(): string;
    private _windowId;
    get windowId(): string;
    set windowId(value: string);
    get windowIdInput(): string;
    private _targets?;
    get targets(): SsmMaintenanceWindowTaskTargets[];
    set targets(value: SsmMaintenanceWindowTaskTargets[]);
    resetTargets(): void;
    get targetsInput(): SsmMaintenanceWindowTaskTargets[] | undefined;
    private _taskInvocationParameters?;
    get taskInvocationParameters(): SsmMaintenanceWindowTaskTaskInvocationParameters[];
    set taskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters[]);
    resetTaskInvocationParameters(): void;
    get taskInvocationParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParameters[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
