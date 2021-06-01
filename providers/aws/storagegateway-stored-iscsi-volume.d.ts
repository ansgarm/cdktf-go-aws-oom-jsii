import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayStoredIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#disk_id StoragegatewayStoredIscsiVolume#disk_id}.
     */
    readonly diskId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}.
     */
    readonly gatewayArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}.
     */
    readonly kmsEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#kms_key StoragegatewayStoredIscsiVolume#kms_key}.
     */
    readonly kmsKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}.
     */
    readonly networkInterfaceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}.
     */
    readonly preserveExistingData: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#tags StoragegatewayStoredIscsiVolume#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#tags_all StoragegatewayStoredIscsiVolume#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html#target_name StoragegatewayStoredIscsiVolume#target_name}.
     */
    readonly targetName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume}.
 */
export declare class StoragegatewayStoredIscsiVolume extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume.html aws_storagegateway_stored_iscsi_volume} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: StoragegatewayStoredIscsiVolumeConfig);
    get arn(): string;
    get chapEnabled(): boolean;
    private _diskId;
    get diskId(): string;
    set diskId(value: string);
    get diskIdInput(): string;
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
    private _preserveExistingData;
    get preserveExistingData(): boolean;
    set preserveExistingData(value: boolean);
    get preserveExistingDataInput(): boolean;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
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
    get volumeAttachmentStatus(): string;
    get volumeId(): string;
    get volumeSizeInBytes(): number;
    get volumeStatus(): string;
    get volumeType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
