import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html#policy NetworkfirewallResourcePolicy#policy}.
     */
    readonly policy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html#resource_arn NetworkfirewallResourcePolicy#resource_arn}.
     */
    readonly resourceArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html aws_networkfirewall_resource_policy}.
 */
export declare class NetworkfirewallResourcePolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html aws_networkfirewall_resource_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NetworkfirewallResourcePolicyConfig);
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _resourceArn;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
