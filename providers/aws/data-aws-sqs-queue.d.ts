import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSqsQueueConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sqs_queue.html#name DataAwsSqsQueue#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sqs_queue.html#tags DataAwsSqsQueue#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/sqs_queue.html aws_sqs_queue}.
 */
export declare class DataAwsSqsQueue extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sqs_queue.html aws_sqs_queue} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSqsQueueConfig);
    get arn(): string;
    get id(): string;
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
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
