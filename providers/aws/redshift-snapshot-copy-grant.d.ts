import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftSnapshotCopyGrantConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}.
     */
    readonly snapshotCopyGrantName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#tags RedshiftSnapshotCopyGrant#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html#tags_all RedshiftSnapshotCopyGrant#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html aws_redshift_snapshot_copy_grant}.
 */
export declare class RedshiftSnapshotCopyGrant extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html aws_redshift_snapshot_copy_grant} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RedshiftSnapshotCopyGrantConfig);
    get arn(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _snapshotCopyGrantName;
    get snapshotCopyGrantName(): string;
    set snapshotCopyGrantName(value: string);
    get snapshotCopyGrantNameInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
