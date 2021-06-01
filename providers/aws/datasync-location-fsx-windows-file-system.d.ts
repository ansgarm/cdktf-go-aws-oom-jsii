import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationFsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#domain DatasyncLocationFsxWindowsFileSystem#domain}.
     */
    readonly domain?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}.
     */
    readonly fsxFilesystemArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#password DatasyncLocationFsxWindowsFileSystem#password}.
     */
    readonly password: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}.
     */
    readonly securityGroupArns: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}.
     */
    readonly subdirectory?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#tags DatasyncLocationFsxWindowsFileSystem#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#user DatasyncLocationFsxWindowsFileSystem#user}.
     */
    readonly user: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system}.
 */
export declare class DatasyncLocationFsxWindowsFileSystem extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DatasyncLocationFsxWindowsFileSystemConfig);
    get arn(): string;
    get creationTime(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _fsxFilesystemArn;
    get fsxFilesystemArn(): string;
    set fsxFilesystemArn(value: string);
    get fsxFilesystemArnInput(): string;
    get id(): string;
    private _password;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _securityGroupArns;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    get securityGroupArnsInput(): string[];
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _user;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
