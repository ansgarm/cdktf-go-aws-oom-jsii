import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}.
     */
    readonly dbClusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}.
     */
    readonly dbClusterSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_public DataAwsDbClusterSnapshot#include_public}.
     */
    readonly includePublic?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#include_shared DataAwsDbClusterSnapshot#include_shared}.
     */
    readonly includeShared?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#most_recent DataAwsDbClusterSnapshot#most_recent}.
     */
    readonly mostRecent?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}.
     */
    readonly snapshotType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html#tags DataAwsDbClusterSnapshot#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot}.
 */
export declare class DataAwsDbClusterSnapshot extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot.html aws_db_cluster_snapshot} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsDbClusterSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZones(): string[];
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    resetDbClusterIdentifier(): void;
    get dbClusterIdentifierInput(): string | undefined;
    get dbClusterSnapshotArn(): string;
    private _dbClusterSnapshotIdentifier?;
    get dbClusterSnapshotIdentifier(): string;
    set dbClusterSnapshotIdentifier(value: string);
    resetDbClusterSnapshotIdentifier(): void;
    get dbClusterSnapshotIdentifierInput(): string | undefined;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    private _includePublic?;
    get includePublic(): boolean;
    set includePublic(value: boolean);
    resetIncludePublic(): void;
    get includePublicInput(): boolean | undefined;
    private _includeShared?;
    get includeShared(): boolean;
    set includeShared(value: boolean);
    resetIncludeShared(): void;
    get includeSharedInput(): boolean | undefined;
    get kmsKeyId(): string;
    get licenseModel(): string;
    private _mostRecent?;
    get mostRecent(): boolean;
    set mostRecent(value: boolean);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | undefined;
    get port(): number;
    get snapshotCreateTime(): string;
    private _snapshotType?;
    get snapshotType(): string;
    set snapshotType(value: string);
    resetSnapshotType(): void;
    get snapshotTypeInput(): string | undefined;
    get sourceDbClusterSnapshotArn(): string;
    get status(): string;
    get storageEncrypted(): boolean;
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
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
