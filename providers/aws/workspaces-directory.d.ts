import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#directory_id WorkspacesDirectory#directory_id}.
     */
    readonly directoryId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#ip_group_ids WorkspacesDirectory#ip_group_ids}.
     */
    readonly ipGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#subnet_ids WorkspacesDirectory#subnet_ids}.
     */
    readonly subnetIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags WorkspacesDirectory#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags_all WorkspacesDirectory#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * self_service_permissions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#self_service_permissions WorkspacesDirectory#self_service_permissions}
     */
    readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
    /**
     * workspace_access_properties block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_access_properties WorkspacesDirectory#workspace_access_properties}
     */
    readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties[];
    /**
     * workspace_creation_properties block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}
     */
    readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties[];
}
export interface WorkspacesDirectorySelfServicePermissions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#change_compute_type WorkspacesDirectory#change_compute_type}.
     */
    readonly changeComputeType?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#increase_volume_size WorkspacesDirectory#increase_volume_size}.
     */
    readonly increaseVolumeSize?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#rebuild_workspace WorkspacesDirectory#rebuild_workspace}.
     */
    readonly rebuildWorkspace?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#restart_workspace WorkspacesDirectory#restart_workspace}.
     */
    readonly restartWorkspace?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#switch_running_mode WorkspacesDirectory#switch_running_mode}.
     */
    readonly switchRunningMode?: boolean;
}
export interface WorkspacesDirectoryWorkspaceAccessProperties {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_android WorkspacesDirectory#device_type_android}.
     */
    readonly deviceTypeAndroid?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_chromeos WorkspacesDirectory#device_type_chromeos}.
     */
    readonly deviceTypeChromeos?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_ios WorkspacesDirectory#device_type_ios}.
     */
    readonly deviceTypeIos?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_osx WorkspacesDirectory#device_type_osx}.
     */
    readonly deviceTypeOsx?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_web WorkspacesDirectory#device_type_web}.
     */
    readonly deviceTypeWeb?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_windows WorkspacesDirectory#device_type_windows}.
     */
    readonly deviceTypeWindows?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}.
     */
    readonly deviceTypeZeroclient?: string;
}
export interface WorkspacesDirectoryWorkspaceCreationProperties {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#custom_security_group_id WorkspacesDirectory#custom_security_group_id}.
     */
    readonly customSecurityGroupId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#default_ou WorkspacesDirectory#default_ou}.
     */
    readonly defaultOu?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_internet_access WorkspacesDirectory#enable_internet_access}.
     */
    readonly enableInternetAccess?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}.
     */
    readonly enableMaintenanceMode?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}.
     */
    readonly userEnabledAsLocalAdministrator?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory}.
 */
export declare class WorkspacesDirectory extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WorkspacesDirectoryConfig);
    get alias(): string;
    get customerUserName(): string;
    private _directoryId;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string;
    get directoryName(): string;
    get directoryType(): string;
    get dnsIpAddresses(): string[];
    get iamRoleId(): string;
    get id(): string;
    private _ipGroupIds?;
    get ipGroupIds(): string[];
    set ipGroupIds(value: string[]);
    resetIpGroupIds(): void;
    get ipGroupIdsInput(): string[] | undefined;
    get registrationCode(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    get workspaceSecurityGroupId(): string;
    private _selfServicePermissions?;
    get selfServicePermissions(): WorkspacesDirectorySelfServicePermissions[];
    set selfServicePermissions(value: WorkspacesDirectorySelfServicePermissions[]);
    resetSelfServicePermissions(): void;
    get selfServicePermissionsInput(): WorkspacesDirectorySelfServicePermissions[] | undefined;
    private _workspaceAccessProperties?;
    get workspaceAccessProperties(): WorkspacesDirectoryWorkspaceAccessProperties[];
    set workspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties[]);
    resetWorkspaceAccessProperties(): void;
    get workspaceAccessPropertiesInput(): WorkspacesDirectoryWorkspaceAccessProperties[] | undefined;
    private _workspaceCreationProperties?;
    get workspaceCreationProperties(): WorkspacesDirectoryWorkspaceCreationProperties[];
    set workspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties[]);
    resetWorkspaceCreationProperties(): void;
    get workspaceCreationPropertiesInput(): WorkspacesDirectoryWorkspaceCreationProperties[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
