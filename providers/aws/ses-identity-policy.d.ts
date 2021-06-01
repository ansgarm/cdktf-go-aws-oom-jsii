import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesIdentityPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html#identity SesIdentityPolicy#identity}.
     */
    readonly identity: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html#name SesIdentityPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html#policy SesIdentityPolicy#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html aws_ses_identity_policy}.
 */
export declare class SesIdentityPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_policy.html aws_ses_identity_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesIdentityPolicyConfig);
    get id(): string;
    private _identity;
    get identity(): string;
    set identity(value: string);
    get identityInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
