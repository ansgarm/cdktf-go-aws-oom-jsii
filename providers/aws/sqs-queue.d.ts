import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SqsQueueConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#content_based_deduplication SqsQueue#content_based_deduplication}.
     */
    readonly contentBasedDeduplication?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#delay_seconds SqsQueue#delay_seconds}.
     */
    readonly delaySeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#fifo_queue SqsQueue#fifo_queue}.
     */
    readonly fifoQueue?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.
     */
    readonly kmsDataKeyReusePeriodSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#kms_master_key_id SqsQueue#kms_master_key_id}.
     */
    readonly kmsMasterKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#max_message_size SqsQueue#max_message_size}.
     */
    readonly maxMessageSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#message_retention_seconds SqsQueue#message_retention_seconds}.
     */
    readonly messageRetentionSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#name SqsQueue#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#name_prefix SqsQueue#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#policy SqsQueue#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.
     */
    readonly receiveWaitTimeSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#redrive_policy SqsQueue#redrive_policy}.
     */
    readonly redrivePolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#tags SqsQueue#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#tags_all SqsQueue#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.
     */
    readonly visibilityTimeoutSeconds?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue}.
 */
export declare class SqsQueue extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: SqsQueueConfig);
    get arn(): string;
    private _contentBasedDeduplication?;
    get contentBasedDeduplication(): boolean;
    set contentBasedDeduplication(value: boolean);
    resetContentBasedDeduplication(): void;
    get contentBasedDeduplicationInput(): boolean | undefined;
    private _delaySeconds?;
    get delaySeconds(): number;
    set delaySeconds(value: number);
    resetDelaySeconds(): void;
    get delaySecondsInput(): number | undefined;
    private _fifoQueue?;
    get fifoQueue(): boolean;
    set fifoQueue(value: boolean);
    resetFifoQueue(): void;
    get fifoQueueInput(): boolean | undefined;
    get id(): string;
    private _kmsDataKeyReusePeriodSeconds?;
    get kmsDataKeyReusePeriodSeconds(): number;
    set kmsDataKeyReusePeriodSeconds(value: number);
    resetKmsDataKeyReusePeriodSeconds(): void;
    get kmsDataKeyReusePeriodSecondsInput(): number | undefined;
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string | undefined;
    private _maxMessageSize?;
    get maxMessageSize(): number;
    set maxMessageSize(value: number);
    resetMaxMessageSize(): void;
    get maxMessageSizeInput(): number | undefined;
    private _messageRetentionSeconds?;
    get messageRetentionSeconds(): number;
    set messageRetentionSeconds(value: number);
    resetMessageRetentionSeconds(): void;
    get messageRetentionSecondsInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _receiveWaitTimeSeconds?;
    get receiveWaitTimeSeconds(): number;
    set receiveWaitTimeSeconds(value: number);
    resetReceiveWaitTimeSeconds(): void;
    get receiveWaitTimeSecondsInput(): number | undefined;
    private _redrivePolicy?;
    get redrivePolicy(): string;
    set redrivePolicy(value: string);
    resetRedrivePolicy(): void;
    get redrivePolicyInput(): string | undefined;
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
    private _visibilityTimeoutSeconds?;
    get visibilityTimeoutSeconds(): number;
    set visibilityTimeoutSeconds(value: number);
    resetVisibilityTimeoutSeconds(): void;
    get visibilityTimeoutSecondsInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
