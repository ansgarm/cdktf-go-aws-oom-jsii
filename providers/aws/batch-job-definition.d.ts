import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#container_properties BatchJobDefinition#container_properties}.
     */
    readonly containerProperties?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#name BatchJobDefinition#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#parameters BatchJobDefinition#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#platform_capabilities BatchJobDefinition#platform_capabilities}.
     */
    readonly platformCapabilities?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#propagate_tags BatchJobDefinition#propagate_tags}.
     */
    readonly propagateTags?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags BatchJobDefinition#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags_all BatchJobDefinition#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#type BatchJobDefinition#type}.
     */
    readonly type: string;
    /**
     * retry_strategy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#retry_strategy BatchJobDefinition#retry_strategy}
     */
    readonly retryStrategy?: BatchJobDefinitionRetryStrategy[];
    /**
     * timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#timeout BatchJobDefinition#timeout}
     */
    readonly timeout?: BatchJobDefinitionTimeout[];
}
export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#action BatchJobDefinition#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_exit_code BatchJobDefinition#on_exit_code}.
     */
    readonly onExitCode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_reason BatchJobDefinition#on_reason}.
     */
    readonly onReason?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_status_reason BatchJobDefinition#on_status_reason}.
     */
    readonly onStatusReason?: string;
}
export interface BatchJobDefinitionRetryStrategy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempts BatchJobDefinition#attempts}.
     */
    readonly attempts?: number;
    /**
     * evaluate_on_exit block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}
     */
    readonly evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[];
}
export interface BatchJobDefinitionTimeout {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}.
     */
    readonly attemptDurationSeconds?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition}.
 */
export declare class BatchJobDefinition extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig);
    get arn(): string;
    private _containerProperties?;
    get containerProperties(): string;
    set containerProperties(value: string);
    resetContainerProperties(): void;
    get containerPropertiesInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _platformCapabilities?;
    get platformCapabilities(): string[];
    set platformCapabilities(value: string[]);
    resetPlatformCapabilities(): void;
    get platformCapabilitiesInput(): string[] | undefined;
    private _propagateTags?;
    get propagateTags(): boolean;
    set propagateTags(value: boolean);
    resetPropagateTags(): void;
    get propagateTagsInput(): boolean | undefined;
    get revision(): number;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _retryStrategy?;
    get retryStrategy(): BatchJobDefinitionRetryStrategy[];
    set retryStrategy(value: BatchJobDefinitionRetryStrategy[]);
    resetRetryStrategy(): void;
    get retryStrategyInput(): BatchJobDefinitionRetryStrategy[] | undefined;
    private _timeout?;
    get timeout(): BatchJobDefinitionTimeout[];
    set timeout(value: BatchJobDefinitionTimeout[]);
    resetTimeout(): void;
    get timeoutInput(): BatchJobDefinitionTimeout[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
