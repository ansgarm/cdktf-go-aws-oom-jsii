import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#bucket S3BucketNotification#bucket}.
     */
    readonly bucket: string;
    /**
     * lambda_function block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#lambda_function S3BucketNotification#lambda_function}
     */
    readonly lambdaFunction?: S3BucketNotificationLambdaFunction[];
    /**
     * queue block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#queue S3BucketNotification#queue}
     */
    readonly queue?: S3BucketNotificationQueue[];
    /**
     * topic block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#topic S3BucketNotification#topic}
     */
    readonly topic?: S3BucketNotificationTopic[];
}
export interface S3BucketNotificationLambdaFunction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}.
     */
    readonly events: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}.
     */
    readonly filterPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}.
     */
    readonly filterSuffix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#lambda_function_arn S3BucketNotification#lambda_function_arn}.
     */
    readonly lambdaFunctionArn?: string;
}
export interface S3BucketNotificationQueue {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}.
     */
    readonly events: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}.
     */
    readonly filterPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}.
     */
    readonly filterSuffix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#queue_arn S3BucketNotification#queue_arn}.
     */
    readonly queueArn: string;
}
export interface S3BucketNotificationTopic {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}.
     */
    readonly events: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}.
     */
    readonly filterPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}.
     */
    readonly filterSuffix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#topic_arn S3BucketNotification#topic_arn}.
     */
    readonly topicArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification}.
 */
export declare class S3BucketNotification extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3BucketNotificationConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _lambdaFunction?;
    get lambdaFunction(): S3BucketNotificationLambdaFunction[];
    set lambdaFunction(value: S3BucketNotificationLambdaFunction[]);
    resetLambdaFunction(): void;
    get lambdaFunctionInput(): S3BucketNotificationLambdaFunction[] | undefined;
    private _queue?;
    get queue(): S3BucketNotificationQueue[];
    set queue(value: S3BucketNotificationQueue[]);
    resetQueue(): void;
    get queueInput(): S3BucketNotificationQueue[] | undefined;
    private _topic?;
    get topic(): S3BucketNotificationTopic[];
    set topic(value: S3BucketNotificationTopic[]);
    resetTopic(): void;
    get topicInput(): S3BucketNotificationTopic[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
