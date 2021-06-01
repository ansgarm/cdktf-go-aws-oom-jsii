import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#directory_id DataAwsWorkspacesDirectory#directory_id}.
     */
    readonly directoryId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#tags DataAwsWorkspacesDirectory#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsWorkspacesDirectorySelfServicePermissions extends cdktf.ComplexComputedList {
    get changeComputeType(): boolean;
    get increaseVolumeSize(): boolean;
    get rebuildWorkspace(): boolean;
    get restartWorkspace(): boolean;
    get switchRunningMode(): boolean;
}
export declare class DataAwsWorkspacesDirectoryWorkspaceAccessProperties extends cdktf.ComplexComputedList {
    get deviceTypeAndroid(): string;
    get deviceTypeChromeos(): string;
    get deviceTypeIos(): string;
    get deviceTypeOsx(): string;
    get deviceTypeWeb(): string;
    get deviceTypeWindows(): string;
    get deviceTypeZeroclient(): string;
}
export declare class DataAwsWorkspacesDirectoryWorkspaceCreationProperties extends cdktf.ComplexComputedList {
    get customSecurityGroupId(): string;
    get defaultOu(): string;
    get enableInternetAccess(): boolean;
    get enableMaintenanceMode(): boolean;
    get userEnabledAsLocalAdministrator(): boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory}.
 */
export declare class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWorkspacesDirectoryConfig);
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
    get ipGroupIds(): string[];
    get registrationCode(): string;
    selfServicePermissions(index: string): DataAwsWorkspacesDirectorySelfServicePermissions;
    get subnetIds(): string[];
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
    workspaceAccessProperties(index: string): DataAwsWorkspacesDirectoryWorkspaceAccessProperties;
    workspaceCreationProperties(index: string): DataAwsWorkspacesDirectoryWorkspaceCreationProperties;
    get workspaceSecurityGroupId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
