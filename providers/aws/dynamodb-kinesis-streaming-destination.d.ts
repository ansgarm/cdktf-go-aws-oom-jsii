import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbKinesisStreamingDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html#stream_arn DynamodbKinesisStreamingDestination#stream_arn}.
     */
    readonly streamArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html#table_name DynamodbKinesisStreamingDestination#table_name}.
     */
    readonly tableName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html aws_dynamodb_kinesis_streaming_destination}.
 */
export declare class DynamodbKinesisStreamingDestination extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html aws_dynamodb_kinesis_streaming_destination} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DynamodbKinesisStreamingDestinationConfig);
    get id(): string;
    private _streamArn;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string;
    private _tableName;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
