import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html#policy IotPolicyAttachment#policy}.
     */
    readonly policy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html#target IotPolicyAttachment#target}.
     */
    readonly target: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html aws_iot_policy_attachment}.
 */
export declare class IotPolicyAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html aws_iot_policy_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotPolicyAttachmentConfig);
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _target;
    get target(): string;
    set target(value: string);
    get targetInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
