import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_definitions EcsTaskDefinition#container_definitions}.
     */
    readonly containerDefinitions: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#cpu EcsTaskDefinition#cpu}.
     */
    readonly cpu?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#execution_role_arn EcsTaskDefinition#execution_role_arn}.
     */
    readonly executionRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#family EcsTaskDefinition#family}.
     */
    readonly family: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ipc_mode EcsTaskDefinition#ipc_mode}.
     */
    readonly ipcMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#memory EcsTaskDefinition#memory}.
     */
    readonly memory?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#network_mode EcsTaskDefinition#network_mode}.
     */
    readonly networkMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#pid_mode EcsTaskDefinition#pid_mode}.
     */
    readonly pidMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#requires_compatibilities EcsTaskDefinition#requires_compatibilities}.
     */
    readonly requiresCompatibilities?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags EcsTaskDefinition#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags_all EcsTaskDefinition#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#task_role_arn EcsTaskDefinition#task_role_arn}.
     */
    readonly taskRoleArn?: string;
    /**
     * inference_accelerator block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#inference_accelerator EcsTaskDefinition#inference_accelerator}
     */
    readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
    /**
     * placement_constraints block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#placement_constraints EcsTaskDefinition#placement_constraints}
     */
    readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
    /**
     * proxy_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#proxy_configuration EcsTaskDefinition#proxy_configuration}
     */
    readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration[];
    /**
     * volume block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#volume EcsTaskDefinition#volume}
     */
    readonly volume?: EcsTaskDefinitionVolume[];
}
export interface EcsTaskDefinitionInferenceAccelerator {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_name EcsTaskDefinition#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_type EcsTaskDefinition#device_type}.
     */
    readonly deviceType: string;
}
export interface EcsTaskDefinitionPlacementConstraints {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#expression EcsTaskDefinition#expression}.
     */
    readonly expression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}.
     */
    readonly type: string;
}
export interface EcsTaskDefinitionProxyConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_name EcsTaskDefinition#container_name}.
     */
    readonly containerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#properties EcsTaskDefinition#properties}.
     */
    readonly properties?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}.
     */
    readonly type?: string;
}
export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#autoprovision EcsTaskDefinition#autoprovision}.
     */
    readonly autoprovision?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver EcsTaskDefinition#driver}.
     */
    readonly driver?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver_opts EcsTaskDefinition#driver_opts}.
     */
    readonly driverOpts?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#labels EcsTaskDefinition#labels}.
     */
    readonly labels?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#scope EcsTaskDefinition#scope}.
     */
    readonly scope?: string;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#access_point_id EcsTaskDefinition#access_point_id}.
     */
    readonly accessPointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#iam EcsTaskDefinition#iam}.
     */
    readonly iam?: string;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}.
     */
    readonly fileSystemId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}.
     */
    readonly rootDirectory?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption EcsTaskDefinition#transit_encryption}.
     */
    readonly transitEncryption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption_port EcsTaskDefinition#transit_encryption_port}.
     */
    readonly transitEncryptionPort?: number;
    /**
     * authorization_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
     */
    readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig[];
}
export interface EcsTaskDefinitionVolume {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#host_path EcsTaskDefinition#host_path}.
     */
    readonly hostPath?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#name EcsTaskDefinition#name}.
     */
    readonly name: string;
    /**
     * docker_volume_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
     */
    readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration[];
    /**
     * efs_volume_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
     */
    readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition}.
 */
export declare class EcsTaskDefinition extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig);
    get arn(): string;
    private _containerDefinitions;
    get containerDefinitions(): string;
    set containerDefinitions(value: string);
    get containerDefinitionsInput(): string;
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _family;
    get family(): string;
    set family(value: string);
    get familyInput(): string;
    get id(): string;
    private _ipcMode?;
    get ipcMode(): string;
    set ipcMode(value: string);
    resetIpcMode(): void;
    get ipcModeInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string | undefined;
    private _networkMode?;
    get networkMode(): string;
    set networkMode(value: string);
    resetNetworkMode(): void;
    get networkModeInput(): string | undefined;
    private _pidMode?;
    get pidMode(): string;
    set pidMode(value: string);
    resetPidMode(): void;
    get pidModeInput(): string | undefined;
    private _requiresCompatibilities?;
    get requiresCompatibilities(): string[];
    set requiresCompatibilities(value: string[]);
    resetRequiresCompatibilities(): void;
    get requiresCompatibilitiesInput(): string[] | undefined;
    get revision(): number;
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
    private _taskRoleArn?;
    get taskRoleArn(): string;
    set taskRoleArn(value: string);
    resetTaskRoleArn(): void;
    get taskRoleArnInput(): string | undefined;
    private _inferenceAccelerator?;
    get inferenceAccelerator(): EcsTaskDefinitionInferenceAccelerator[];
    set inferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[]);
    resetInferenceAccelerator(): void;
    get inferenceAcceleratorInput(): EcsTaskDefinitionInferenceAccelerator[] | undefined;
    private _placementConstraints?;
    get placementConstraints(): EcsTaskDefinitionPlacementConstraints[];
    set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[]);
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): EcsTaskDefinitionPlacementConstraints[] | undefined;
    private _proxyConfiguration?;
    get proxyConfiguration(): EcsTaskDefinitionProxyConfiguration[];
    set proxyConfiguration(value: EcsTaskDefinitionProxyConfiguration[]);
    resetProxyConfiguration(): void;
    get proxyConfigurationInput(): EcsTaskDefinitionProxyConfiguration[] | undefined;
    private _volume?;
    get volume(): EcsTaskDefinitionVolume[];
    set volume(value: EcsTaskDefinitionVolume[]);
    resetVolume(): void;
    get volumeInput(): EcsTaskDefinitionVolume[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
