import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html#policy EcrLifecyclePolicy#policy}.
     */
    readonly policy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html#repository EcrLifecyclePolicy#repository}.
     */
    readonly repository: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html aws_ecr_lifecycle_policy}.
 */
export declare class EcrLifecyclePolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html aws_ecr_lifecycle_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcrLifecyclePolicyConfig);
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    get registryId(): string;
    private _repository;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
