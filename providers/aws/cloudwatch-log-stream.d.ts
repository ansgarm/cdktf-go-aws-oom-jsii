import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogStreamConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html#log_group_name CloudwatchLogStream#log_group_name}.
     */
    readonly logGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html#name CloudwatchLogStream#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html aws_cloudwatch_log_stream}.
 */
export declare class CloudwatchLogStream extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html aws_cloudwatch_log_stream} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchLogStreamConfig);
    get arn(): string;
    get id(): string;
    private _logGroupName;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
