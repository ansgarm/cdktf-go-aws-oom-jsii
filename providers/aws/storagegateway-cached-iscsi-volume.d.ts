import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayCachedIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}.
     */
    readonly gatewayArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}.
     */
    readonly kmsEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#kms_key StoragegatewayCachedIscsiVolume#kms_key}.
     */
    readonly kmsKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}.
     */
    readonly networkInterfaceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}.
     */
    readonly sourceVolumeArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#tags StoragegatewayCachedIscsiVolume#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#tags_all StoragegatewayCachedIscsiVolume#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#target_name StoragegatewayCachedIscsiVolume#target_name}.
     */
    readonly targetName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}.
     */
    readonly volumeSizeInBytes: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html aws_storagegateway_cached_iscsi_volume}.
 */
export declare class StoragegatewayCachedIscsiVolume extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume.html aws_storagegateway_cached_iscsi_volume} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: StoragegatewayCachedIscsiVolumeConfig);
    get arn(): string;
    get chapEnabled(): boolean;
    private _gatewayArn;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string;
    get id(): string;
    private _kmsEncrypted?;
    get kmsEncrypted(): boolean;
    set kmsEncrypted(value: boolean);
    resetKmsEncrypted(): void;
    get kmsEncryptedInput(): boolean | undefined;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
    get lunNumber(): number;
    private _networkInterfaceId;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string;
    get networkInterfacePort(): number;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
    private _sourceVolumeArn?;
    get sourceVolumeArn(): string;
    set sourceVolumeArn(value: string);
    resetSourceVolumeArn(): void;
    get sourceVolumeArnInput(): string | undefined;
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
    get targetArn(): string;
    private _targetName;
    get targetName(): string;
    set targetName(value: string);
    get targetNameInput(): string;
    get volumeArn(): string;
    get volumeId(): string;
    private _volumeSizeInBytes;
    get volumeSizeInBytes(): number;
    set volumeSizeInBytes(value: number);
    get volumeSizeInBytesInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
