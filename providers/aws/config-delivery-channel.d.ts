import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#name ConfigDeliveryChannel#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}.
     */
    readonly s3BucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}.
     */
    readonly s3KeyPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}.
     */
    readonly snsTopicArn?: string;
    /**
     * snapshot_delivery_properties block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}
     */
    readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties[];
}
export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#delivery_frequency ConfigDeliveryChannel#delivery_frequency}.
     */
    readonly deliveryFrequency?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel}.
 */
export declare class ConfigDeliveryChannel extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _s3BucketName;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string | undefined;
    private _snapshotDeliveryProperties?;
    get snapshotDeliveryProperties(): ConfigDeliveryChannelSnapshotDeliveryProperties[];
    set snapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties[]);
    resetSnapshotDeliveryProperties(): void;
    get snapshotDeliveryPropertiesInput(): ConfigDeliveryChannelSnapshotDeliveryProperties[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
