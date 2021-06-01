import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminPermissionSetInlinePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}.
     */
    readonly inlinePolicy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}.
     */
    readonly instanceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}.
     */
    readonly permissionSetArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html aws_ssoadmin_permission_set_inline_policy}.
 */
export declare class SsoadminPermissionSetInlinePolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html aws_ssoadmin_permission_set_inline_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsoadminPermissionSetInlinePolicyConfig);
    get id(): string;
    private _inlinePolicy;
    get inlinePolicy(): string;
    set inlinePolicy(value: string);
    get inlinePolicyInput(): string;
    private _instanceArn;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _permissionSetArn;
    get permissionSetArn(): string;
    set permissionSetArn(value: string);
    get permissionSetArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
