import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewaySmbFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}.
     */
    readonly accessBasedEnumeration?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#admin_user_list StoragegatewaySmbFileShare#admin_user_list}.
     */
    readonly adminUserList?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}.
     */
    readonly auditDestinationArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#authentication StoragegatewaySmbFileShare#authentication}.
     */
    readonly authentication?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}.
     */
    readonly caseSensitivity?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#default_storage_class StoragegatewaySmbFileShare#default_storage_class}.
     */
    readonly defaultStorageClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#file_share_name StoragegatewaySmbFileShare#file_share_name}.
     */
    readonly fileShareName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#gateway_arn StoragegatewaySmbFileShare#gateway_arn}.
     */
    readonly gatewayArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}.
     */
    readonly guessMimeTypeEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}.
     */
    readonly invalidUserList?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}.
     */
    readonly kmsEncrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#location_arn StoragegatewaySmbFileShare#location_arn}.
     */
    readonly locationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#notification_policy StoragegatewaySmbFileShare#notification_policy}.
     */
    readonly notificationPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#object_acl StoragegatewaySmbFileShare#object_acl}.
     */
    readonly objectAcl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#read_only StoragegatewaySmbFileShare#read_only}.
     */
    readonly readOnly?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#requester_pays StoragegatewaySmbFileShare#requester_pays}.
     */
    readonly requesterPays?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#role_arn StoragegatewaySmbFileShare#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}.
     */
    readonly smbAclEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags StoragegatewaySmbFileShare#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#tags_all StoragegatewaySmbFileShare#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#valid_user_list StoragegatewaySmbFileShare#valid_user_list}.
     */
    readonly validUserList?: string[];
    /**
     * cache_attributes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_attributes StoragegatewaySmbFileShare#cache_attributes}
     */
    readonly cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#timeouts StoragegatewaySmbFileShare#timeouts}
     */
    readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
}
export interface StoragegatewaySmbFileShareCacheAttributes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}.
     */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export interface StoragegatewaySmbFileShareTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#create StoragegatewaySmbFileShare#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#delete StoragegatewaySmbFileShare#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html#update StoragegatewaySmbFileShare#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share}.
 */
export declare class StoragegatewaySmbFileShare extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: StoragegatewaySmbFileShareConfig);
    private _accessBasedEnumeration?;
    get accessBasedEnumeration(): boolean;
    set accessBasedEnumeration(value: boolean);
    resetAccessBasedEnumeration(): void;
    get accessBasedEnumerationInput(): boolean | undefined;
    private _adminUserList?;
    get adminUserList(): string[];
    set adminUserList(value: string[]);
    resetAdminUserList(): void;
    get adminUserListInput(): string[] | undefined;
    get arn(): string;
    private _auditDestinationArn?;
    get auditDestinationArn(): string;
    set auditDestinationArn(value: string);
    resetAuditDestinationArn(): void;
    get auditDestinationArnInput(): string | undefined;
    private _authentication?;
    get authentication(): string;
    set authentication(value: string);
    resetAuthentication(): void;
    get authenticationInput(): string | undefined;
    private _caseSensitivity?;
    get caseSensitivity(): string;
    set caseSensitivity(value: string);
    resetCaseSensitivity(): void;
    get caseSensitivityInput(): string | undefined;
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
    private _invalidUserList?;
    get invalidUserList(): string[];
    set invalidUserList(value: string[]);
    resetInvalidUserList(): void;
    get invalidUserListInput(): string[] | undefined;
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
    private _smbAclEnabled?;
    get smbAclEnabled(): boolean;
    set smbAclEnabled(value: boolean);
    resetSmbAclEnabled(): void;
    get smbAclEnabledInput(): boolean | undefined;
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
    private _validUserList?;
    get validUserList(): string[];
    set validUserList(value: string[]);
    resetValidUserList(): void;
    get validUserListInput(): string[] | undefined;
    private _cacheAttributes?;
    get cacheAttributes(): StoragegatewaySmbFileShareCacheAttributes[];
    set cacheAttributes(value: StoragegatewaySmbFileShareCacheAttributes[]);
    resetCacheAttributes(): void;
    get cacheAttributesInput(): StoragegatewaySmbFileShareCacheAttributes[] | undefined;
    private _timeouts?;
    get timeouts(): StoragegatewaySmbFileShareTimeouts;
    set timeouts(value: StoragegatewaySmbFileShareTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): StoragegatewaySmbFileShareTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
