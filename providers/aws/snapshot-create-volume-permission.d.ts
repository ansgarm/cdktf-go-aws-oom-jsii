import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnapshotCreateVolumePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html#account_id SnapshotCreateVolumePermission#account_id}.
     */
    readonly accountId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html#snapshot_id SnapshotCreateVolumePermission#snapshot_id}.
     */
    readonly snapshotId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html aws_snapshot_create_volume_permission}.
 */
export declare class SnapshotCreateVolumePermission extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html aws_snapshot_create_volume_permission} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SnapshotCreateVolumePermissionConfig);
    private _accountId;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get id(): string;
    private _snapshotId;
    get snapshotId(): string;
    set snapshotId(value: string);
    get snapshotIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
