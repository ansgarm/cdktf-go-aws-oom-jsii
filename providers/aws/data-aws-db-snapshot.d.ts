import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}.
     */
    readonly dbInstanceIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}.
     */
    readonly dbSnapshotIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#include_public DataAwsDbSnapshot#include_public}.
     */
    readonly includePublic?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#include_shared DataAwsDbSnapshot#include_shared}.
     */
    readonly includeShared?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#most_recent DataAwsDbSnapshot#most_recent}.
     */
    readonly mostRecent?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#snapshot_type DataAwsDbSnapshot#snapshot_type}.
     */
    readonly snapshotType?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot}.
 */
export declare class DataAwsDbSnapshot extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsDbSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZone(): string;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    resetDbInstanceIdentifier(): void;
    get dbInstanceIdentifierInput(): string | undefined;
    get dbSnapshotArn(): string;
    private _dbSnapshotIdentifier?;
    get dbSnapshotIdentifier(): string;
    set dbSnapshotIdentifier(value: string);
    resetDbSnapshotIdentifier(): void;
    get dbSnapshotIdentifierInput(): string | undefined;
    get encrypted(): boolean;
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
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    private _mostRecent?;
    get mostRecent(): boolean;
    set mostRecent(value: boolean);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | undefined;
    get optionGroupName(): string;
    get port(): number;
    get snapshotCreateTime(): string;
    private _snapshotType?;
    get snapshotType(): string;
    set snapshotType(value: string);
    resetSnapshotType(): void;
    get snapshotTypeInput(): string | undefined;
    get sourceDbSnapshotIdentifier(): string;
    get sourceRegion(): string;
    get status(): string;
    get storageType(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
