import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#availability_zone_name EfsFileSystem#availability_zone_name}.
     */
    readonly availabilityZoneName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#creation_token EfsFileSystem#creation_token}.
     */
    readonly creationToken?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#encrypted EfsFileSystem#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#kms_key_id EfsFileSystem#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#performance_mode EfsFileSystem#performance_mode}.
     */
    readonly performanceMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}.
     */
    readonly provisionedThroughputInMibps?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags EfsFileSystem#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#tags_all EfsFileSystem#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#throughput_mode EfsFileSystem#throughput_mode}.
     */
    readonly throughputMode?: string;
    /**
     * lifecycle_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#lifecycle_policy EfsFileSystem#lifecycle_policy}
     */
    readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[];
}
export declare class EfsFileSystemSizeInBytes extends cdktf.ComplexComputedList {
    get value(): number;
    get valueInIa(): number;
    get valueInStandard(): number;
}
export interface EfsFileSystemLifecyclePolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html#transition_to_ia EfsFileSystem#transition_to_ia}.
     */
    readonly transitionToIa: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system}.
 */
export declare class EfsFileSystem extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: EfsFileSystemConfig);
    get arn(): string;
    get availabilityZoneId(): string;
    private _availabilityZoneName?;
    get availabilityZoneName(): string;
    set availabilityZoneName(value: string);
    resetAvailabilityZoneName(): void;
    get availabilityZoneNameInput(): string | undefined;
    private _creationToken?;
    get creationToken(): string;
    set creationToken(value: string);
    resetCreationToken(): void;
    get creationTokenInput(): string | undefined;
    get dnsName(): string;
    private _encrypted?;
    get encrypted(): boolean;
    set encrypted(value: boolean);
    resetEncrypted(): void;
    get encryptedInput(): boolean | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get numberOfMountTargets(): number;
    get ownerId(): string;
    private _performanceMode?;
    get performanceMode(): string;
    set performanceMode(value: string);
    resetPerformanceMode(): void;
    get performanceModeInput(): string | undefined;
    private _provisionedThroughputInMibps?;
    get provisionedThroughputInMibps(): number;
    set provisionedThroughputInMibps(value: number);
    resetProvisionedThroughputInMibps(): void;
    get provisionedThroughputInMibpsInput(): number | undefined;
    sizeInBytes(index: string): EfsFileSystemSizeInBytes;
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
    private _throughputMode?;
    get throughputMode(): string;
    set throughputMode(value: string);
    resetThroughputMode(): void;
    get throughputModeInput(): string | undefined;
    private _lifecyclePolicy?;
    get lifecyclePolicy(): EfsFileSystemLifecyclePolicy[];
    set lifecyclePolicy(value: EfsFileSystemLifecyclePolicy[]);
    resetLifecyclePolicy(): void;
    get lifecyclePolicyInput(): EfsFileSystemLifecyclePolicy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
