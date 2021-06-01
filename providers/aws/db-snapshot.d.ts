import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#db_instance_identifier DbSnapshot#db_instance_identifier}.
     */
    readonly dbInstanceIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}.
     */
    readonly dbSnapshotIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#tags DbSnapshot#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#tags_all DbSnapshot#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#timeouts DbSnapshot#timeouts}
     */
    readonly timeouts?: DbSnapshotTimeouts;
}
export interface DbSnapshotTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#read DbSnapshot#read}.
     */
    readonly read?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot}.
 */
export declare class DbSnapshot extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZone(): string;
    private _dbInstanceIdentifier;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    get dbInstanceIdentifierInput(): string;
    get dbSnapshotArn(): string;
    private _dbSnapshotIdentifier;
    get dbSnapshotIdentifier(): string;
    set dbSnapshotIdentifier(value: string);
    get dbSnapshotIdentifierInput(): string;
    get encrypted(): boolean;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    get optionGroupName(): string;
    get port(): number;
    get snapshotType(): string;
    get sourceDbSnapshotIdentifier(): string;
    get sourceRegion(): string;
    get status(): string;
    get storageType(): string;
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
    get vpcId(): string;
    private _timeouts?;
    get timeouts(): DbSnapshotTimeouts;
    set timeouts(value: DbSnapshotTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DbSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
