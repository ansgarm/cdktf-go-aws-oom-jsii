import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html#name IotPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html#policy IotPolicy#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html aws_iot_policy}.
 */
export declare class IotPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html aws_iot_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotPolicyConfig);
    get arn(): string;
    get defaultVersionId(): string;
    get id(): string;
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
