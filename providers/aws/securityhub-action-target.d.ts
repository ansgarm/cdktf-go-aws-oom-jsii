import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubActionTargetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_action_target.html#description SecurityhubActionTarget#description}.
     */
    readonly description: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_action_target.html#identifier SecurityhubActionTarget#identifier}.
     */
    readonly identifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_action_target.html#name SecurityhubActionTarget#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_action_target.html aws_securityhub_action_target}.
 */
export declare class SecurityhubActionTarget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_action_target.html aws_securityhub_action_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecurityhubActionTargetConfig);
    get arn(): string;
    private _description;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    get id(): string;
    private _identifier;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
