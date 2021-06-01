import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSfnStateMachineConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sfn_state_machine.html#name DataAwsSfnStateMachine#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/sfn_state_machine.html aws_sfn_state_machine}.
 */
export declare class DataAwsSfnStateMachine extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sfn_state_machine.html aws_sfn_state_machine} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSfnStateMachineConfig);
    get arn(): string;
    get creationDate(): string;
    get definition(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get roleArn(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
