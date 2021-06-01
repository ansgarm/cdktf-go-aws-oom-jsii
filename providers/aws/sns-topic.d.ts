import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsTopicConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.
     */
    readonly applicationFailureFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.
     */
    readonly applicationSuccessFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.
     */
    readonly applicationSuccessFeedbackSampleRate?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#content_based_deduplication SnsTopic#content_based_deduplication}.
     */
    readonly contentBasedDeduplication?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#delivery_policy SnsTopic#delivery_policy}.
     */
    readonly deliveryPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#display_name SnsTopic#display_name}.
     */
    readonly displayName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#fifo_topic SnsTopic#fifo_topic}.
     */
    readonly fifoTopic?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.
     */
    readonly httpFailureFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.
     */
    readonly httpSuccessFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.
     */
    readonly httpSuccessFeedbackSampleRate?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#kms_master_key_id SnsTopic#kms_master_key_id}.
     */
    readonly kmsMasterKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.
     */
    readonly lambdaFailureFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.
     */
    readonly lambdaSuccessFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.
     */
    readonly lambdaSuccessFeedbackSampleRate?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name SnsTopic#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name_prefix SnsTopic#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#policy SnsTopic#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.
     */
    readonly sqsFailureFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.
     */
    readonly sqsSuccessFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.
     */
    readonly sqsSuccessFeedbackSampleRate?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags SnsTopic#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags_all SnsTopic#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}.
 */
export declare class SnsTopic extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: SnsTopicConfig);
    private _applicationFailureFeedbackRoleArn?;
    get applicationFailureFeedbackRoleArn(): string;
    set applicationFailureFeedbackRoleArn(value: string);
    resetApplicationFailureFeedbackRoleArn(): void;
    get applicationFailureFeedbackRoleArnInput(): string | undefined;
    private _applicationSuccessFeedbackRoleArn?;
    get applicationSuccessFeedbackRoleArn(): string;
    set applicationSuccessFeedbackRoleArn(value: string);
    resetApplicationSuccessFeedbackRoleArn(): void;
    get applicationSuccessFeedbackRoleArnInput(): string | undefined;
    private _applicationSuccessFeedbackSampleRate?;
    get applicationSuccessFeedbackSampleRate(): number;
    set applicationSuccessFeedbackSampleRate(value: number);
    resetApplicationSuccessFeedbackSampleRate(): void;
    get applicationSuccessFeedbackSampleRateInput(): number | undefined;
    get arn(): string;
    private _contentBasedDeduplication?;
    get contentBasedDeduplication(): boolean;
    set contentBasedDeduplication(value: boolean);
    resetContentBasedDeduplication(): void;
    get contentBasedDeduplicationInput(): boolean | undefined;
    private _deliveryPolicy?;
    get deliveryPolicy(): string;
    set deliveryPolicy(value: string);
    resetDeliveryPolicy(): void;
    get deliveryPolicyInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _fifoTopic?;
    get fifoTopic(): boolean;
    set fifoTopic(value: boolean);
    resetFifoTopic(): void;
    get fifoTopicInput(): boolean | undefined;
    private _httpFailureFeedbackRoleArn?;
    get httpFailureFeedbackRoleArn(): string;
    set httpFailureFeedbackRoleArn(value: string);
    resetHttpFailureFeedbackRoleArn(): void;
    get httpFailureFeedbackRoleArnInput(): string | undefined;
    private _httpSuccessFeedbackRoleArn?;
    get httpSuccessFeedbackRoleArn(): string;
    set httpSuccessFeedbackRoleArn(value: string);
    resetHttpSuccessFeedbackRoleArn(): void;
    get httpSuccessFeedbackRoleArnInput(): string | undefined;
    private _httpSuccessFeedbackSampleRate?;
    get httpSuccessFeedbackSampleRate(): number;
    set httpSuccessFeedbackSampleRate(value: number);
    resetHttpSuccessFeedbackSampleRate(): void;
    get httpSuccessFeedbackSampleRateInput(): number | undefined;
    get id(): string;
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string | undefined;
    private _lambdaFailureFeedbackRoleArn?;
    get lambdaFailureFeedbackRoleArn(): string;
    set lambdaFailureFeedbackRoleArn(value: string);
    resetLambdaFailureFeedbackRoleArn(): void;
    get lambdaFailureFeedbackRoleArnInput(): string | undefined;
    private _lambdaSuccessFeedbackRoleArn?;
    get lambdaSuccessFeedbackRoleArn(): string;
    set lambdaSuccessFeedbackRoleArn(value: string);
    resetLambdaSuccessFeedbackRoleArn(): void;
    get lambdaSuccessFeedbackRoleArnInput(): string | undefined;
    private _lambdaSuccessFeedbackSampleRate?;
    get lambdaSuccessFeedbackSampleRate(): number;
    set lambdaSuccessFeedbackSampleRate(value: number);
    resetLambdaSuccessFeedbackSampleRate(): void;
    get lambdaSuccessFeedbackSampleRateInput(): number | undefined;
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
    private _sqsFailureFeedbackRoleArn?;
    get sqsFailureFeedbackRoleArn(): string;
    set sqsFailureFeedbackRoleArn(value: string);
    resetSqsFailureFeedbackRoleArn(): void;
    get sqsFailureFeedbackRoleArnInput(): string | undefined;
    private _sqsSuccessFeedbackRoleArn?;
    get sqsSuccessFeedbackRoleArn(): string;
    set sqsSuccessFeedbackRoleArn(value: string);
    resetSqsSuccessFeedbackRoleArn(): void;
    get sqsSuccessFeedbackRoleArnInput(): string | undefined;
    private _sqsSuccessFeedbackSampleRate?;
    get sqsSuccessFeedbackSampleRate(): number;
    set sqsSuccessFeedbackSampleRate(value: number);
    resetSqsSuccessFeedbackSampleRate(): void;
    get sqsSuccessFeedbackSampleRateInput(): number | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
