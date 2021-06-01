import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisVideoStreamConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}.
     */
    readonly dataRetentionInHours?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#device_name KinesisVideoStream#device_name}.
     */
    readonly deviceName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#kms_key_id KinesisVideoStream#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#media_type KinesisVideoStream#media_type}.
     */
    readonly mediaType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#name KinesisVideoStream#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags KinesisVideoStream#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags_all KinesisVideoStream#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#timeouts KinesisVideoStream#timeouts}
     */
    readonly timeouts?: KinesisVideoStreamTimeouts;
}
export interface KinesisVideoStreamTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#create KinesisVideoStream#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#delete KinesisVideoStream#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#update KinesisVideoStream#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream}.
 */
export declare class KinesisVideoStream extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: KinesisVideoStreamConfig);
    get arn(): string;
    get creationTime(): string;
    private _dataRetentionInHours?;
    get dataRetentionInHours(): number;
    set dataRetentionInHours(value: number);
    resetDataRetentionInHours(): void;
    get dataRetentionInHoursInput(): number | undefined;
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    resetDeviceName(): void;
    get deviceNameInput(): string | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _mediaType?;
    get mediaType(): string;
    set mediaType(value: string);
    resetMediaType(): void;
    get mediaTypeInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    get version(): string;
    private _timeouts?;
    get timeouts(): KinesisVideoStreamTimeouts;
    set timeouts(value: KinesisVideoStreamTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): KinesisVideoStreamTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
