import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#event_bus_name CloudwatchEventTarget#event_bus_name}.
     */
    readonly eventBusName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input CloudwatchEventTarget#input}.
     */
    readonly input?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_path CloudwatchEventTarget#input_path}.
     */
    readonly inputPath?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#role_arn CloudwatchEventTarget#role_arn}.
     */
    readonly roleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#rule CloudwatchEventTarget#rule}.
     */
    readonly rule: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#target_id CloudwatchEventTarget#target_id}.
     */
    readonly targetId?: string;
    /**
     * batch_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#batch_target CloudwatchEventTarget#batch_target}
     */
    readonly batchTarget?: CloudwatchEventTargetBatchTarget[];
    /**
     * dead_letter_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#dead_letter_config CloudwatchEventTarget#dead_letter_config}
     */
    readonly deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig[];
    /**
     * ecs_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#ecs_target CloudwatchEventTarget#ecs_target}
     */
    readonly ecsTarget?: CloudwatchEventTargetEcsTarget[];
    /**
     * http_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#http_target CloudwatchEventTarget#http_target}
     */
    readonly httpTarget?: CloudwatchEventTargetHttpTarget[];
    /**
     * input_transformer block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_transformer CloudwatchEventTarget#input_transformer}
     */
    readonly inputTransformer?: CloudwatchEventTargetInputTransformer[];
    /**
     * kinesis_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#kinesis_target CloudwatchEventTarget#kinesis_target}
     */
    readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
    /**
     * retry_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#retry_policy CloudwatchEventTarget#retry_policy}
     */
    readonly retryPolicy?: CloudwatchEventTargetRetryPolicy[];
    /**
     * run_command_targets block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#run_command_targets CloudwatchEventTarget#run_command_targets}
     */
    readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
    /**
     * sqs_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sqs_target CloudwatchEventTarget#sqs_target}
     */
    readonly sqsTarget?: CloudwatchEventTargetSqsTarget[];
}
export interface CloudwatchEventTargetBatchTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#array_size CloudwatchEventTarget#array_size}.
     */
    readonly arraySize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_attempts CloudwatchEventTarget#job_attempts}.
     */
    readonly jobAttempts?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_definition CloudwatchEventTarget#job_definition}.
     */
    readonly jobDefinition: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_name CloudwatchEventTarget#job_name}.
     */
    readonly jobName: string;
}
export interface CloudwatchEventTargetDeadLetterConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}.
     */
    readonly arn?: string;
}
export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#assign_public_ip CloudwatchEventTarget#assign_public_ip}.
     */
    readonly assignPublicIp?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#security_groups CloudwatchEventTarget#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#subnets CloudwatchEventTarget#subnets}.
     */
    readonly subnets: string[];
}
export interface CloudwatchEventTargetEcsTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#group CloudwatchEventTarget#group}.
     */
    readonly group?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#launch_type CloudwatchEventTarget#launch_type}.
     */
    readonly launchType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#platform_version CloudwatchEventTarget#platform_version}.
     */
    readonly platformVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_count CloudwatchEventTarget#task_count}.
     */
    readonly taskCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_definition_arn CloudwatchEventTarget#task_definition_arn}.
     */
    readonly taskDefinitionArn: string;
    /**
     * network_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#network_configuration CloudwatchEventTarget#network_configuration}
     */
    readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration[];
}
export interface CloudwatchEventTargetHttpTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#header_parameters CloudwatchEventTarget#header_parameters}.
     */
    readonly headerParameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#path_parameter_values CloudwatchEventTarget#path_parameter_values}.
     */
    readonly pathParameterValues?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#query_string_parameters CloudwatchEventTarget#query_string_parameters}.
     */
    readonly queryStringParameters?: {
        [key: string]: string;
    };
}
export interface CloudwatchEventTargetInputTransformer {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_paths CloudwatchEventTarget#input_paths}.
     */
    readonly inputPaths?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_template CloudwatchEventTarget#input_template}.
     */
    readonly inputTemplate: string;
}
export interface CloudwatchEventTargetKinesisTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#partition_key_path CloudwatchEventTarget#partition_key_path}.
     */
    readonly partitionKeyPath?: string;
}
export interface CloudwatchEventTargetRetryPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}.
     */
    readonly maximumEventAgeInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}.
     */
    readonly maximumRetryAttempts?: number;
}
export interface CloudwatchEventTargetRunCommandTargets {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#key CloudwatchEventTarget#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#values CloudwatchEventTarget#values}.
     */
    readonly values: string[];
}
export interface CloudwatchEventTargetSqsTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#message_group_id CloudwatchEventTarget#message_group_id}.
     */
    readonly messageGroupId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target}.
 */
export declare class CloudwatchEventTarget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string | undefined;
    get id(): string;
    private _input?;
    get input(): string;
    set input(value: string);
    resetInput(): void;
    get inputInput(): string | undefined;
    private _inputPath?;
    get inputPath(): string;
    set inputPath(value: string);
    resetInputPath(): void;
    get inputPathInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _rule;
    get rule(): string;
    set rule(value: string);
    get ruleInput(): string;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    resetTargetId(): void;
    get targetIdInput(): string | undefined;
    private _batchTarget?;
    get batchTarget(): CloudwatchEventTargetBatchTarget[];
    set batchTarget(value: CloudwatchEventTargetBatchTarget[]);
    resetBatchTarget(): void;
    get batchTargetInput(): CloudwatchEventTargetBatchTarget[] | undefined;
    private _deadLetterConfig?;
    get deadLetterConfig(): CloudwatchEventTargetDeadLetterConfig[];
    set deadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig[]);
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): CloudwatchEventTargetDeadLetterConfig[] | undefined;
    private _ecsTarget?;
    get ecsTarget(): CloudwatchEventTargetEcsTarget[];
    set ecsTarget(value: CloudwatchEventTargetEcsTarget[]);
    resetEcsTarget(): void;
    get ecsTargetInput(): CloudwatchEventTargetEcsTarget[] | undefined;
    private _httpTarget?;
    get httpTarget(): CloudwatchEventTargetHttpTarget[];
    set httpTarget(value: CloudwatchEventTargetHttpTarget[]);
    resetHttpTarget(): void;
    get httpTargetInput(): CloudwatchEventTargetHttpTarget[] | undefined;
    private _inputTransformer?;
    get inputTransformer(): CloudwatchEventTargetInputTransformer[];
    set inputTransformer(value: CloudwatchEventTargetInputTransformer[]);
    resetInputTransformer(): void;
    get inputTransformerInput(): CloudwatchEventTargetInputTransformer[] | undefined;
    private _kinesisTarget?;
    get kinesisTarget(): CloudwatchEventTargetKinesisTarget[];
    set kinesisTarget(value: CloudwatchEventTargetKinesisTarget[]);
    resetKinesisTarget(): void;
    get kinesisTargetInput(): CloudwatchEventTargetKinesisTarget[] | undefined;
    private _retryPolicy?;
    get retryPolicy(): CloudwatchEventTargetRetryPolicy[];
    set retryPolicy(value: CloudwatchEventTargetRetryPolicy[]);
    resetRetryPolicy(): void;
    get retryPolicyInput(): CloudwatchEventTargetRetryPolicy[] | undefined;
    private _runCommandTargets?;
    get runCommandTargets(): CloudwatchEventTargetRunCommandTargets[];
    set runCommandTargets(value: CloudwatchEventTargetRunCommandTargets[]);
    resetRunCommandTargets(): void;
    get runCommandTargetsInput(): CloudwatchEventTargetRunCommandTargets[] | undefined;
    private _sqsTarget?;
    get sqsTarget(): CloudwatchEventTargetSqsTarget[];
    set sqsTarget(value: CloudwatchEventTargetSqsTarget[]);
    resetSqsTarget(): void;
    get sqsTargetInput(): CloudwatchEventTargetSqsTarget[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
