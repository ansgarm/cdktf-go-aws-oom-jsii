import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminManagedPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html#instance_arn SsoadminManagedPolicyAttachment#instance_arn}.
     */
    readonly instanceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html#managed_policy_arn SsoadminManagedPolicyAttachment#managed_policy_arn}.
     */
    readonly managedPolicyArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html#permission_set_arn SsoadminManagedPolicyAttachment#permission_set_arn}.
     */
    readonly permissionSetArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html aws_ssoadmin_managed_policy_attachment}.
 */
export declare class SsoadminManagedPolicyAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html aws_ssoadmin_managed_policy_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsoadminManagedPolicyAttachmentConfig);
    get id(): string;
    private _instanceArn;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _managedPolicyArn;
    get managedPolicyArn(): string;
    set managedPolicyArn(value: string);
    get managedPolicyArnInput(): string;
    get managedPolicyName(): string;
    private _permissionSetArn;
    get permissionSetArn(): string;
    set permissionSetArn(value: string);
    get permissionSetArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
