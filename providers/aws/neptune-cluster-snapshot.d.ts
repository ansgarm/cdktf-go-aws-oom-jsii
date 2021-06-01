import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NeptuneClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#db_cluster_identifier NeptuneClusterSnapshot#db_cluster_identifier}.
     */
    readonly dbClusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#db_cluster_snapshot_identifier NeptuneClusterSnapshot#db_cluster_snapshot_identifier}.
     */
    readonly dbClusterSnapshotIdentifier: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#timeouts NeptuneClusterSnapshot#timeouts}
     */
    readonly timeouts?: NeptuneClusterSnapshotTimeouts;
}
export interface NeptuneClusterSnapshotTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#create NeptuneClusterSnapshot#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html aws_neptune_cluster_snapshot}.
 */
export declare class NeptuneClusterSnapshot extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html aws_neptune_cluster_snapshot} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: NeptuneClusterSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZones(): string[];
    private _dbClusterIdentifier;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    get dbClusterIdentifierInput(): string;
    get dbClusterSnapshotArn(): string;
    private _dbClusterSnapshotIdentifier;
    get dbClusterSnapshotIdentifier(): string;
    set dbClusterSnapshotIdentifier(value: string);
    get dbClusterSnapshotIdentifierInput(): string;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    get kmsKeyId(): string;
    get licenseModel(): string;
    get port(): number;
    get snapshotType(): string;
    get sourceDbClusterSnapshotArn(): string;
    get status(): string;
    get storageEncrypted(): boolean;
    get vpcId(): string;
    private _timeouts?;
    get timeouts(): NeptuneClusterSnapshotTimeouts;
    set timeouts(value: NeptuneClusterSnapshotTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): NeptuneClusterSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
