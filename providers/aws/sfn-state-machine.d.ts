import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SfnStateMachineConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#definition SfnStateMachine#definition}.
     */
    readonly definition: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#name SfnStateMachine#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#role_arn SfnStateMachine#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tags SfnStateMachine#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tags_all SfnStateMachine#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#type SfnStateMachine#type}.
     */
    readonly type?: string;
    /**
     * logging_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#logging_configuration SfnStateMachine#logging_configuration}
     */
    readonly loggingConfiguration?: SfnStateMachineLoggingConfiguration[];
    /**
     * tracing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tracing_configuration SfnStateMachine#tracing_configuration}
     */
    readonly tracingConfiguration?: SfnStateMachineTracingConfiguration[];
}
export interface SfnStateMachineLoggingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#include_execution_data SfnStateMachine#include_execution_data}.
     */
    readonly includeExecutionData?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#level SfnStateMachine#level}.
     */
    readonly level?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#log_destination SfnStateMachine#log_destination}.
     */
    readonly logDestination?: string;
}
export interface SfnStateMachineTracingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#enabled SfnStateMachine#enabled}.
     */
    readonly enabled?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine}.
 */
export declare class SfnStateMachine extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SfnStateMachineConfig);
    get arn(): string;
    get creationDate(): string;
    private _definition;
    get definition(): string;
    set definition(value: string);
    get definitionInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    get status(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _loggingConfiguration?;
    get loggingConfiguration(): SfnStateMachineLoggingConfiguration[];
    set loggingConfiguration(value: SfnStateMachineLoggingConfiguration[]);
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): SfnStateMachineLoggingConfiguration[] | undefined;
    private _tracingConfiguration?;
    get tracingConfiguration(): SfnStateMachineTracingConfiguration[];
    set tracingConfiguration(value: SfnStateMachineTracingConfiguration[]);
    resetTracingConfiguration(): void;
    get tracingConfigurationInput(): SfnStateMachineTracingConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
