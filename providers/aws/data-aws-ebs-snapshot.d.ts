import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#most_recent DataAwsEbsSnapshot#most_recent}.
     */
    readonly mostRecent?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#owners DataAwsEbsSnapshot#owners}.
     */
    readonly owners?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#restorable_by_user_ids DataAwsEbsSnapshot#restorable_by_user_ids}.
     */
    readonly restorableByUserIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#snapshot_ids DataAwsEbsSnapshot#snapshot_ids}.
     */
    readonly snapshotIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#tags DataAwsEbsSnapshot#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#filter DataAwsEbsSnapshot#filter}
     */
    readonly filter?: DataAwsEbsSnapshotFilter[];
}
export interface DataAwsEbsSnapshotFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#name DataAwsEbsSnapshot#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#values DataAwsEbsSnapshot#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot}.
 */
export declare class DataAwsEbsSnapshot extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEbsSnapshotConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    get description(): string;
    get encrypted(): boolean;
    get id(): string;
    get kmsKeyId(): string;
    private _mostRecent?;
    get mostRecent(): boolean;
    set mostRecent(value: boolean);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | undefined;
    get ownerAlias(): string;
    get ownerId(): string;
    private _owners?;
    get owners(): string[];
    set owners(value: string[]);
    resetOwners(): void;
    get ownersInput(): string[] | undefined;
    private _restorableByUserIds?;
    get restorableByUserIds(): string[];
    set restorableByUserIds(value: string[]);
    resetRestorableByUserIds(): void;
    get restorableByUserIdsInput(): string[] | undefined;
    get snapshotId(): string;
    private _snapshotIds?;
    get snapshotIds(): string[];
    set snapshotIds(value: string[]);
    resetSnapshotIds(): void;
    get snapshotIdsInput(): string[] | undefined;
    get state(): string;
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
    get volumeId(): string;
    get volumeSize(): number;
    private _filter?;
    get filter(): DataAwsEbsSnapshotFilter[];
    set filter(value: DataAwsEbsSnapshotFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEbsSnapshotFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
