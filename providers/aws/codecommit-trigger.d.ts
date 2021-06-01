import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodecommitTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#repository_name CodecommitTrigger#repository_name}.
     */
    readonly repositoryName: string;
    /**
     * trigger block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#trigger CodecommitTrigger#trigger}
     */
    readonly trigger: CodecommitTriggerTrigger[];
}
export interface CodecommitTriggerTrigger {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#branches CodecommitTrigger#branches}.
     */
    readonly branches?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#custom_data CodecommitTrigger#custom_data}.
     */
    readonly customData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#destination_arn CodecommitTrigger#destination_arn}.
     */
    readonly destinationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#events CodecommitTrigger#events}.
     */
    readonly events: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#name CodecommitTrigger#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger}.
 */
export declare class CodecommitTrigger extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodecommitTriggerConfig);
    get configurationId(): string;
    get id(): string;
    private _repositoryName;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    private _trigger;
    get trigger(): CodecommitTriggerTrigger[];
    set trigger(value: CodecommitTriggerTrigger[]);
    get triggerInput(): CodecommitTriggerTrigger[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
