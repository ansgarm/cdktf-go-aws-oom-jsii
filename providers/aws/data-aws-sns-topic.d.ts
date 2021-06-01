import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSnsTopicConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html#name DataAwsSnsTopic#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html aws_sns_topic}.
 */
export declare class DataAwsSnsTopic extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html aws_sns_topic} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSnsTopicConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
