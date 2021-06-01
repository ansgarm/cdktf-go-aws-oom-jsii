import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogDestinationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html#access_policy CloudwatchLogDestinationPolicy#access_policy}.
     */
    readonly accessPolicy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html#destination_name CloudwatchLogDestinationPolicy#destination_name}.
     */
    readonly destinationName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html aws_cloudwatch_log_destination_policy}.
 */
export declare class CloudwatchLogDestinationPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html aws_cloudwatch_log_destination_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchLogDestinationPolicyConfig);
    private _accessPolicy;
    get accessPolicy(): string;
    set accessPolicy(value: string);
    get accessPolicyInput(): string;
    private _destinationName;
    get destinationName(): string;
    set destinationName(value: string);
    get destinationNameInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
