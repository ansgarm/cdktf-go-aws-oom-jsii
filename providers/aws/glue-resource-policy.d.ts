import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html#policy GlueResourcePolicy#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy}.
 */
export declare class GlueResourcePolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_resource_policy.html aws_glue_resource_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueResourcePolicyConfig);
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
