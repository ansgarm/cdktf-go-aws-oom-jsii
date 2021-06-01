import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayNfsFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#client_list StoragegatewayNfsFileShare#client_list}.
     */
    readonly clientList: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#default_storage_class StoragegatewayNfsFileShare#default_storage_class}.
     */
    readonly defaultStorageClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#file_share_name StoragegatewayNfsFileShare#file_share_name}.
     */
    readonly fileShareName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#gateway_arn StoragegatewayNfsFileShare#gateway_arn}.
     */
    readonly gatewayArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}.
     */
    readonly guessMimeTypeEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}.
     */
    readonly kmsEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#location_arn StoragegatewayNfsFileShare#location_arn}.
     */
    readonly locationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#notification_policy StoragegatewayNfsFileShare#notification_policy}.
     */
    readonly notificationPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#object_acl StoragegatewayNfsFileShare#object_acl}.
     */
    readonly objectAcl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#read_only StoragegatewayNfsFileShare#read_only}.
     */
    readonly readOnly?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#requester_pays StoragegatewayNfsFileShare#requester_pays}.
     */
    readonly requesterPays?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#role_arn StoragegatewayNfsFileShare#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#squash StoragegatewayNfsFileShare#squash}.
     */
    readonly squash?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#tags StoragegatewayNfsFileShare#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#tags_all StoragegatewayNfsFileShare#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * cache_attributes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#cache_attributes StoragegatewayNfsFileShare#cache_attributes}
     */
    readonly cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes[];
    /**
     * nfs_file_share_defaults block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}
     */
    readonly nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#timeouts StoragegatewayNfsFileShare#timeouts}
     */
    readonly timeouts?: StoragegatewayNfsFileShareTimeouts;
}
export interface StoragegatewayNfsFileShareCacheAttributes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}.
     */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export interface StoragegatewayNfsFileShareNfsFileShareDefaults {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#directory_mode StoragegatewayNfsFileShare#directory_mode}.
     */
    readonly directoryMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#file_mode StoragegatewayNfsFileShare#file_mode}.
     */
    readonly fileMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#group_id StoragegatewayNfsFileShare#group_id}.
     */
    readonly groupId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#owner_id StoragegatewayNfsFileShare#owner_id}.
     */
    readonly ownerId?: string;
}
export interface StoragegatewayNfsFileShareTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#create StoragegatewayNfsFileShare#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#delete StoragegatewayNfsFileShare#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html#update StoragegatewayNfsFileShare#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share}.
 */
export declare class StoragegatewayNfsFileShare extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig);
    get arn(): string;
    private _clientList;
    get clientList(): string[];
    set clientList(value: string[]);
    get clientListInput(): string[];
    private _defaultStorageClass?;
    get defaultStorageClass(): string;
    set defaultStorageClass(value: string);
    resetDefaultStorageClass(): void;
    get defaultStorageClassInput(): string | undefined;
    private _fileShareName?;
    get fileShareName(): string;
    set fileShareName(value: string);
    resetFileShareName(): void;
    get fileShareNameInput(): string | undefined;
    get fileshareId(): string;
    private _gatewayArn;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string;
    private _guessMimeTypeEnabled?;
    get guessMimeTypeEnabled(): boolean;
    set guessMimeTypeEnabled(value: boolean);
    resetGuessMimeTypeEnabled(): void;
    get guessMimeTypeEnabledInput(): boolean | undefined;
    get id(): string;
    private _kmsEncrypted?;
    get kmsEncrypted(): boolean;
    set kmsEncrypted(value: boolean);
    resetKmsEncrypted(): void;
    get kmsEncryptedInput(): boolean | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _locationArn;
    get locationArn(): string;
    set locationArn(value: string);
    get locationArnInput(): string;
    private _notificationPolicy?;
    get notificationPolicy(): string;
    set notificationPolicy(value: string);
    resetNotificationPolicy(): void;
    get notificationPolicyInput(): string | undefined;
    private _objectAcl?;
    get objectAcl(): string;
    set objectAcl(value: string);
    resetObjectAcl(): void;
    get objectAclInput(): string | undefined;
    get path(): string;
    private _readOnly?;
    get readOnly(): boolean;
    set readOnly(value: boolean);
    resetReadOnly(): void;
    get readOnlyInput(): boolean | undefined;
    private _requesterPays?;
    get requesterPays(): boolean;
    set requesterPays(value: boolean);
    resetRequesterPays(): void;
    get requesterPaysInput(): boolean | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _squash?;
    get squash(): string;
    set squash(value: string);
    resetSquash(): void;
    get squashInput(): string | undefined;
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
    private _cacheAttributes?;
    get cacheAttributes(): StoragegatewayNfsFileShareCacheAttributes[];
    set cacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes[]);
    resetCacheAttributes(): void;
    get cacheAttributesInput(): StoragegatewayNfsFileShareCacheAttributes[] | undefined;
    private _nfsFileShareDefaults?;
    get nfsFileShareDefaults(): StoragegatewayNfsFileShareNfsFileShareDefaults[];
    set nfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults[]);
    resetNfsFileShareDefaults(): void;
    get nfsFileShareDefaultsInput(): StoragegatewayNfsFileShareNfsFileShareDefaults[] | undefined;
    private _timeouts?;
    get timeouts(): StoragegatewayNfsFileShareTimeouts;
    set timeouts(value: StoragegatewayNfsFileShareTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): StoragegatewayNfsFileShareTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
