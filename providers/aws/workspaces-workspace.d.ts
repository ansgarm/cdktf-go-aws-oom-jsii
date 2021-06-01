import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#bundle_id WorkspacesWorkspace#bundle_id}.
     */
    readonly bundleId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#directory_id WorkspacesWorkspace#directory_id}.
     */
    readonly directoryId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}.
     */
    readonly rootVolumeEncryptionEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags WorkspacesWorkspace#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags_all WorkspacesWorkspace#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_name WorkspacesWorkspace#user_name}.
     */
    readonly userName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}.
     */
    readonly userVolumeEncryptionEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}.
     */
    readonly volumeEncryptionKey?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#timeouts WorkspacesWorkspace#timeouts}
     */
    readonly timeouts?: WorkspacesWorkspaceTimeouts;
    /**
     * workspace_properties block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#workspace_properties WorkspacesWorkspace#workspace_properties}
     */
    readonly workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties[];
}
export interface WorkspacesWorkspaceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#create WorkspacesWorkspace#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#delete WorkspacesWorkspace#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#update WorkspacesWorkspace#update}.
     */
    readonly update?: string;
}
export interface WorkspacesWorkspaceWorkspaceProperties {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#compute_type_name WorkspacesWorkspace#compute_type_name}.
     */
    readonly computeTypeName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}.
     */
    readonly rootVolumeSizeGib?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode WorkspacesWorkspace#running_mode}.
     */
    readonly runningMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}.
     */
    readonly runningModeAutoStopTimeoutInMinutes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}.
     */
    readonly userVolumeSizeGib?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace}.
 */
export declare class WorkspacesWorkspace extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WorkspacesWorkspaceConfig);
    private _bundleId;
    get bundleId(): string;
    set bundleId(value: string);
    get bundleIdInput(): string;
    get computerName(): string;
    private _directoryId;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string;
    get id(): string;
    get ipAddress(): string;
    private _rootVolumeEncryptionEnabled?;
    get rootVolumeEncryptionEnabled(): boolean;
    set rootVolumeEncryptionEnabled(value: boolean);
    resetRootVolumeEncryptionEnabled(): void;
    get rootVolumeEncryptionEnabledInput(): boolean | undefined;
    get state(): string;
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
    private _userName;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    private _userVolumeEncryptionEnabled?;
    get userVolumeEncryptionEnabled(): boolean;
    set userVolumeEncryptionEnabled(value: boolean);
    resetUserVolumeEncryptionEnabled(): void;
    get userVolumeEncryptionEnabledInput(): boolean | undefined;
    private _volumeEncryptionKey?;
    get volumeEncryptionKey(): string;
    set volumeEncryptionKey(value: string);
    resetVolumeEncryptionKey(): void;
    get volumeEncryptionKeyInput(): string | undefined;
    private _timeouts?;
    get timeouts(): WorkspacesWorkspaceTimeouts;
    set timeouts(value: WorkspacesWorkspaceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): WorkspacesWorkspaceTimeouts | undefined;
    private _workspaceProperties?;
    get workspaceProperties(): WorkspacesWorkspaceWorkspaceProperties[];
    set workspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties[]);
    resetWorkspaceProperties(): void;
    get workspacePropertiesInput(): WorkspacesWorkspaceWorkspaceProperties[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
