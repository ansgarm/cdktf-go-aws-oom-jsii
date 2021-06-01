import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKinesisStreamConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html#name DataAwsKinesisStreamConsumer#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html#stream_arn DataAwsKinesisStreamConsumer#stream_arn}.
     */
    readonly streamArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer}.
 */
export declare class DataAwsKinesisStreamConsumer extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsKinesisStreamConsumerConfig);
    get arn(): string;
    get creationTimestamp(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get status(): string;
    private _streamArn;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
