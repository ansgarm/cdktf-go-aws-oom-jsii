import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#file_system_id EfsAccessPoint#file_system_id}.
     */
    readonly fileSystemId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags EfsAccessPoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#tags_all EfsAccessPoint#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * posix_user block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#posix_user EfsAccessPoint#posix_user}
     */
    readonly posixUser?: EfsAccessPointPosixUser[];
    /**
     * root_directory block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#root_directory EfsAccessPoint#root_directory}
     */
    readonly rootDirectory?: EfsAccessPointRootDirectory[];
}
export interface EfsAccessPointPosixUser {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#gid EfsAccessPoint#gid}.
     */
    readonly gid: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#secondary_gids EfsAccessPoint#secondary_gids}.
     */
    readonly secondaryGids?: number[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#uid EfsAccessPoint#uid}.
     */
    readonly uid: number;
}
export interface EfsAccessPointRootDirectoryCreationInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_gid EfsAccessPoint#owner_gid}.
     */
    readonly ownerGid: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#owner_uid EfsAccessPoint#owner_uid}.
     */
    readonly ownerUid: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#permissions EfsAccessPoint#permissions}.
     */
    readonly permissions: string;
}
export interface EfsAccessPointRootDirectory {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#path EfsAccessPoint#path}.
     */
    readonly path?: string;
    /**
     * creation_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html#creation_info EfsAccessPoint#creation_info}
     */
    readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point}.
 */
export declare class EfsAccessPoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_access_point.html aws_efs_access_point} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EfsAccessPointConfig);
    get arn(): string;
    get fileSystemArn(): string;
    private _fileSystemId;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    get ownerId(): string;
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
    private _posixUser?;
    get posixUser(): EfsAccessPointPosixUser[];
    set posixUser(value: EfsAccessPointPosixUser[]);
    resetPosixUser(): void;
    get posixUserInput(): EfsAccessPointPosixUser[] | undefined;
    private _rootDirectory?;
    get rootDirectory(): EfsAccessPointRootDirectory[];
    set rootDirectory(value: EfsAccessPointRootDirectory[]);
    resetRootDirectory(): void;
    get rootDirectoryInput(): EfsAccessPointRootDirectory[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
