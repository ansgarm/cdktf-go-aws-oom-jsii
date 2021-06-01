import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html#policy_document CloudwatchLogResourcePolicy#policy_document}.
     */
    readonly policyDocument: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html#policy_name CloudwatchLogResourcePolicy#policy_name}.
     */
    readonly policyName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html aws_cloudwatch_log_resource_policy}.
 */
export declare class CloudwatchLogResourcePolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html aws_cloudwatch_log_resource_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchLogResourcePolicyConfig);
    get id(): string;
    private _policyDocument;
    get policyDocument(): string;
    set policyDocument(value: string);
    get policyDocumentInput(): string;
    private _policyName;
    get policyName(): string;
    set policyName(value: string);
    get policyNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
