import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#description EbsSnapshotCopy#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#encrypted EbsSnapshotCopy#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#kms_key_id EbsSnapshotCopy#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#source_region EbsSnapshotCopy#source_region}.
     */
    readonly sourceRegion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}.
     */
    readonly sourceSnapshotId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#tags EbsSnapshotCopy#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html#tags_all EbsSnapshotCopy#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy}.
 */
export declare class EbsSnapshotCopy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html aws_ebs_snapshot_copy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EbsSnapshotCopyConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    get ownerAlias(): string;
    get ownerId(): string;
    private _sourceRegion;
    get sourceRegion(): string;
    set sourceRegion(value: string);
    get sourceRegionInput(): string;
    private _sourceSnapshotId;
    get sourceSnapshotId(): string;
    set sourceSnapshotId(value: string);
    get sourceSnapshotIdInput(): string;
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
    get volumeId(): string;
    get volumeSize(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
