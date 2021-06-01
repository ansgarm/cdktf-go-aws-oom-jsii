import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html#name CloudwatchLogDestination#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html#role_arn CloudwatchLogDestination#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html#target_arn CloudwatchLogDestination#target_arn}.
     */
    readonly targetArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html aws_cloudwatch_log_destination}.
 */
export declare class CloudwatchLogDestination extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html aws_cloudwatch_log_destination} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchLogDestinationConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _targetArn;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
