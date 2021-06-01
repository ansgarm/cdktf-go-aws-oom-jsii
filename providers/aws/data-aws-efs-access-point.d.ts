import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html#access_point_id DataAwsEfsAccessPoint#access_point_id}.
     */
    readonly accessPointId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html#tags DataAwsEfsAccessPoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsEfsAccessPointPosixUser extends cdktf.ComplexComputedList {
    get gid(): number;
    get secondaryGids(): any;
    get uid(): number;
}
export declare class DataAwsEfsAccessPointRootDirectoryCreationInfo extends cdktf.ComplexComputedList {
    get ownerGid(): number;
    get ownerUid(): number;
    get permissions(): string;
}
export declare class DataAwsEfsAccessPointRootDirectory extends cdktf.ComplexComputedList {
    get creationInfo(): any;
    get path(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point}.
 */
export declare class DataAwsEfsAccessPoint extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointConfig);
    private _accessPointId;
    get accessPointId(): string;
    set accessPointId(value: string);
    get accessPointIdInput(): string;
    get arn(): string;
    get fileSystemArn(): string;
    get fileSystemId(): string;
    get id(): string;
    get ownerId(): string;
    posixUser(index: string): DataAwsEfsAccessPointPosixUser;
    rootDirectory(index: string): DataAwsEfsAccessPointRootDirectory;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
