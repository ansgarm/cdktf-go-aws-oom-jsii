import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsTopicPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html#arn SnsTopicPolicy#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html#policy SnsTopicPolicy#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html aws_sns_topic_policy}.
 */
export declare class SnsTopicPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html aws_sns_topic_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SnsTopicPolicyConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    get owner(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
