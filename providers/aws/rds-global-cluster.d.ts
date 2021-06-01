import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsGlobalClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#database_name RdsGlobalCluster#database_name}.
     */
    readonly databaseName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#deletion_protection RdsGlobalCluster#deletion_protection}.
     */
    readonly deletionProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine RdsGlobalCluster#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#engine_version RdsGlobalCluster#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#force_destroy RdsGlobalCluster#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}.
     */
    readonly globalClusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}.
     */
    readonly sourceDbClusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html#storage_encrypted RdsGlobalCluster#storage_encrypted}.
     */
    readonly storageEncrypted?: boolean;
}
export declare class RdsGlobalClusterGlobalClusterMembers extends cdktf.ComplexComputedList {
    get dbClusterArn(): string;
    get isWriter(): boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster}.
 */
export declare class RdsGlobalCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RdsGlobalClusterConfig);
    get arn(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _deletionProtection?;
    get deletionProtection(): boolean;
    set deletionProtection(value: boolean);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    private _globalClusterIdentifier;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    get globalClusterIdentifierInput(): string;
    globalClusterMembers(index: string): RdsGlobalClusterGlobalClusterMembers;
    get globalClusterResourceId(): string;
    get id(): string;
    private _sourceDbClusterIdentifier?;
    get sourceDbClusterIdentifier(): string;
    set sourceDbClusterIdentifier(value: string);
    resetSourceDbClusterIdentifier(): void;
    get sourceDbClusterIdentifierInput(): string | undefined;
    private _storageEncrypted?;
    get storageEncrypted(): boolean;
    set storageEncrypted(value: boolean);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
