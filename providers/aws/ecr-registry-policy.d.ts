import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_policy.html#policy EcrRegistryPolicy#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_policy.html aws_ecr_registry_policy}.
 */
export declare class EcrRegistryPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_policy.html aws_ecr_registry_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcrRegistryPolicyConfig);
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    get registryId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
