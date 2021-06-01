import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaFunctionEventInvokeConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#function_name LambdaFunctionEventInvokeConfig#function_name}.
     */
    readonly functionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}.
     */
    readonly maximumEventAgeInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}.
     */
    readonly maximumRetryAttempts?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#qualifier LambdaFunctionEventInvokeConfig#qualifier}.
     */
    readonly qualifier?: string;
    /**
     * destination_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination_config LambdaFunctionEventInvokeConfig#destination_config}
     */
    readonly destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig[];
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}.
     */
    readonly destination: string;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}.
     */
    readonly destination: string;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfig {
    /**
     * on_failure block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_failure LambdaFunctionEventInvokeConfig#on_failure}
     */
    readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure[];
    /**
     * on_success block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_success LambdaFunctionEventInvokeConfig#on_success}
     */
    readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config}.
 */
export declare class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LambdaFunctionEventInvokeConfigConfig);
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get id(): string;
    private _maximumEventAgeInSeconds?;
    get maximumEventAgeInSeconds(): number;
    set maximumEventAgeInSeconds(value: number);
    resetMaximumEventAgeInSeconds(): void;
    get maximumEventAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    private _destinationConfig?;
    get destinationConfig(): LambdaFunctionEventInvokeConfigDestinationConfig[];
    set destinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig[]);
    resetDestinationConfig(): void;
    get destinationConfigInput(): LambdaFunctionEventInvokeConfigDestinationConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
