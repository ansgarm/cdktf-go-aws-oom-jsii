import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudwatchLogGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html#name DataAwsCloudwatchLogGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html#tags DataAwsCloudwatchLogGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html aws_cloudwatch_log_group}.
 */
export declare class DataAwsCloudwatchLogGroup extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html aws_cloudwatch_log_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogGroupConfig);
    get arn(): string;
    get creationTime(): number;
    get id(): string;
    get kmsKeyId(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get retentionInDays(): number;
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
