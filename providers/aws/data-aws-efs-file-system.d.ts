import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#creation_token DataAwsEfsFileSystem#creation_token}.
     */
    readonly creationToken?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#file_system_id DataAwsEfsFileSystem#file_system_id}.
     */
    readonly fileSystemId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html#tags DataAwsEfsFileSystem#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsEfsFileSystemLifecyclePolicy extends cdktf.ComplexComputedList {
    get transitionToIa(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system}.
 */
export declare class DataAwsEfsFileSystem extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEfsFileSystemConfig);
    get arn(): string;
    get availabilityZoneId(): string;
    get availabilityZoneName(): string;
    private _creationToken?;
    get creationToken(): string;
    set creationToken(value: string);
    resetCreationToken(): void;
    get creationTokenInput(): string | undefined;
    get dnsName(): string;
    get encrypted(): boolean;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    get id(): string;
    get kmsKeyId(): string;
    lifecyclePolicy(index: string): DataAwsEfsFileSystemLifecyclePolicy;
    get performanceMode(): string;
    get provisionedThroughputInMibps(): number;
    get sizeInBytes(): number;
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
    get throughputMode(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
