import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#name ConfigConfigurationRecorder#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#role_arn ConfigConfigurationRecorder#role_arn}.
     */
    readonly roleArn: string;
    /**
     * recording_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#recording_group ConfigConfigurationRecorder#recording_group}
     */
    readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup[];
}
export interface ConfigConfigurationRecorderRecordingGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#all_supported ConfigConfigurationRecorder#all_supported}.
     */
    readonly allSupported?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}.
     */
    readonly includeGlobalResourceTypes?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#resource_types ConfigConfigurationRecorder#resource_types}.
     */
    readonly resourceTypes?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder}.
 */
export declare class ConfigConfigurationRecorder extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _recordingGroup?;
    get recordingGroup(): ConfigConfigurationRecorderRecordingGroup[];
    set recordingGroup(value: ConfigConfigurationRecorderRecordingGroup[]);
    resetRecordingGroup(): void;
    get recordingGroupInput(): ConfigConfigurationRecorderRecordingGroup[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
