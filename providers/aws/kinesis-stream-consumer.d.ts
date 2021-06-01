import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisStreamConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html#name KinesisStreamConsumer#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html#stream_arn KinesisStreamConsumer#stream_arn}.
     */
    readonly streamArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer}.
 */
export declare class KinesisStreamConsumer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: KinesisStreamConsumerConfig);
    get arn(): string;
    get creationTimestamp(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _streamArn;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
