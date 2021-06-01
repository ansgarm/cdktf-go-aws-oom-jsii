import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#batch_size LambdaEventSourceMapping#batch_size}.
     */
    readonly batchSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}.
     */
    readonly bisectBatchOnFunctionError?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#enabled LambdaEventSourceMapping#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#event_source_arn LambdaEventSourceMapping#event_source_arn}.
     */
    readonly eventSourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#function_name LambdaEventSourceMapping#function_name}.
     */
    readonly functionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}.
     */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}.
     */
    readonly maximumRecordAgeInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}.
     */
    readonly maximumRetryAttempts?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#parallelization_factor LambdaEventSourceMapping#parallelization_factor}.
     */
    readonly parallelizationFactor?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position LambdaEventSourceMapping#starting_position}.
     */
    readonly startingPosition?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}.
     */
    readonly startingPositionTimestamp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#topics LambdaEventSourceMapping#topics}.
     */
    readonly topics?: string[];
    /**
     * destination_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_config LambdaEventSourceMapping#destination_config}
     */
    readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig[];
}
export interface LambdaEventSourceMappingDestinationConfigOnFailure {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_arn LambdaEventSourceMapping#destination_arn}.
     */
    readonly destinationArn: string;
}
export interface LambdaEventSourceMappingDestinationConfig {
    /**
     * on_failure block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#on_failure LambdaEventSourceMapping#on_failure}
     */
    readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping}.
 */
export declare class LambdaEventSourceMapping extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LambdaEventSourceMappingConfig);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _bisectBatchOnFunctionError?;
    get bisectBatchOnFunctionError(): boolean;
    set bisectBatchOnFunctionError(value: boolean);
    resetBisectBatchOnFunctionError(): void;
    get bisectBatchOnFunctionErrorInput(): boolean | undefined;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    private _eventSourceArn;
    get eventSourceArn(): string;
    set eventSourceArn(value: string);
    get eventSourceArnInput(): string;
    get functionArn(): string;
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get id(): string;
    get lastModified(): string;
    get lastProcessingResult(): string;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _maximumRecordAgeInSeconds?;
    get maximumRecordAgeInSeconds(): number;
    set maximumRecordAgeInSeconds(value: number);
    resetMaximumRecordAgeInSeconds(): void;
    get maximumRecordAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
    private _parallelizationFactor?;
    get parallelizationFactor(): number;
    set parallelizationFactor(value: number);
    resetParallelizationFactor(): void;
    get parallelizationFactorInput(): number | undefined;
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    resetStartingPosition(): void;
    get startingPositionInput(): string | undefined;
    private _startingPositionTimestamp?;
    get startingPositionTimestamp(): string;
    set startingPositionTimestamp(value: string);
    resetStartingPositionTimestamp(): void;
    get startingPositionTimestampInput(): string | undefined;
    get state(): string;
    get stateTransitionReason(): string;
    private _topics?;
    get topics(): string[];
    set topics(value: string[]);
    resetTopics(): void;
    get topicsInput(): string[] | undefined;
    get uuid(): string;
    private _destinationConfig?;
    get destinationConfig(): LambdaEventSourceMappingDestinationConfig[];
    set destinationConfig(value: LambdaEventSourceMappingDestinationConfig[]);
    resetDestinationConfig(): void;
    get destinationConfigInput(): LambdaEventSourceMappingDestinationConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
