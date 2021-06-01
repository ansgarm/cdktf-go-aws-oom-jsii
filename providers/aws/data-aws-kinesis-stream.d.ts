import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html#name DataAwsKinesisStream#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html#tags DataAwsKinesisStream#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream}.
 */
export declare class DataAwsKinesisStream extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsKinesisStreamConfig);
    get arn(): string;
    get closedShards(): string[];
    get creationTimestamp(): number;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get openShards(): string[];
    get retentionPeriod(): number;
    get shardLevelMetrics(): string[];
    get status(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
