import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#encryption_type KinesisStream#encryption_type}.
     */
    readonly encryptionType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}.
     */
    readonly enforceConsumerDeletion?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#kms_key_id KinesisStream#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#name KinesisStream#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#retention_period KinesisStream#retention_period}.
     */
    readonly retentionPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_count KinesisStream#shard_count}.
     */
    readonly shardCount: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_level_metrics KinesisStream#shard_level_metrics}.
     */
    readonly shardLevelMetrics?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags KinesisStream#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags_all KinesisStream#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#timeouts KinesisStream#timeouts}
     */
    readonly timeouts?: KinesisStreamTimeouts;
}
export interface KinesisStreamTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#create KinesisStream#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#delete KinesisStream#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#update KinesisStream#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream}.
 */
export declare class KinesisStream extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: KinesisStreamConfig);
    get arn(): string;
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    resetEncryptionType(): void;
    get encryptionTypeInput(): string | undefined;
    private _enforceConsumerDeletion?;
    get enforceConsumerDeletion(): boolean;
    set enforceConsumerDeletion(value: boolean);
    resetEnforceConsumerDeletion(): void;
    get enforceConsumerDeletionInput(): boolean | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number | undefined;
    private _shardCount;
    get shardCount(): number;
    set shardCount(value: number);
    get shardCountInput(): number;
    private _shardLevelMetrics?;
    get shardLevelMetrics(): string[];
    set shardLevelMetrics(value: string[]);
    resetShardLevelMetrics(): void;
    get shardLevelMetricsInput(): string[] | undefined;
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
    private _timeouts?;
    get timeouts(): KinesisStreamTimeouts;
    set timeouts(value: KinesisStreamTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): KinesisStreamTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
