import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}.
     */
    readonly availabilityZoneGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#engine DataAwsRdsOrderableDbInstance#engine}.
     */
    readonly engine: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#engine_version DataAwsRdsOrderableDbInstance#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#instance_class DataAwsRdsOrderableDbInstance#instance_class}.
     */
    readonly instanceClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#license_model DataAwsRdsOrderableDbInstance#license_model}.
     */
    readonly licenseModel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}.
     */
    readonly preferredEngineVersions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}.
     */
    readonly preferredInstanceClasses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#storage_type DataAwsRdsOrderableDbInstance#storage_type}.
     */
    readonly storageType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}.
     */
    readonly supportsEnhancedMonitoring?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}.
     */
    readonly supportsGlobalDatabases?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}.
     */
    readonly supportsIamDatabaseAuthentication?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}.
     */
    readonly supportsIops?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}.
     */
    readonly supportsKerberosAuthentication?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}.
     */
    readonly supportsPerformanceInsights?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}.
     */
    readonly supportsStorageAutoscaling?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}.
     */
    readonly supportsStorageEncryption?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#vpc DataAwsRdsOrderableDbInstance#vpc}.
     */
    readonly vpc?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance}.
 */
export declare class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsRdsOrderableDbInstanceConfig);
    private _availabilityZoneGroup?;
    get availabilityZoneGroup(): string;
    set availabilityZoneGroup(value: string);
    resetAvailabilityZoneGroup(): void;
    get availabilityZoneGroupInput(): string | undefined;
    get availabilityZones(): string[];
    private _engine;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get id(): string;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    resetInstanceClass(): void;
    get instanceClassInput(): string | undefined;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string | undefined;
    get maxIopsPerDbInstance(): number;
    get maxIopsPerGib(): number;
    get maxStorageSize(): number;
    get minIopsPerDbInstance(): number;
    get minIopsPerGib(): number;
    get minStorageSize(): number;
    get multiAzCapable(): boolean;
    get outpostCapable(): boolean;
    private _preferredEngineVersions?;
    get preferredEngineVersions(): string[];
    set preferredEngineVersions(value: string[]);
    resetPreferredEngineVersions(): void;
    get preferredEngineVersionsInput(): string[] | undefined;
    private _preferredInstanceClasses?;
    get preferredInstanceClasses(): string[];
    set preferredInstanceClasses(value: string[]);
    resetPreferredInstanceClasses(): void;
    get preferredInstanceClassesInput(): string[] | undefined;
    get readReplicaCapable(): boolean;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    get supportedEngineModes(): string[];
    private _supportsEnhancedMonitoring?;
    get supportsEnhancedMonitoring(): boolean;
    set supportsEnhancedMonitoring(value: boolean);
    resetSupportsEnhancedMonitoring(): void;
    get supportsEnhancedMonitoringInput(): boolean | undefined;
    private _supportsGlobalDatabases?;
    get supportsGlobalDatabases(): boolean;
    set supportsGlobalDatabases(value: boolean);
    resetSupportsGlobalDatabases(): void;
    get supportsGlobalDatabasesInput(): boolean | undefined;
    private _supportsIamDatabaseAuthentication?;
    get supportsIamDatabaseAuthentication(): boolean;
    set supportsIamDatabaseAuthentication(value: boolean);
    resetSupportsIamDatabaseAuthentication(): void;
    get supportsIamDatabaseAuthenticationInput(): boolean | undefined;
    private _supportsIops?;
    get supportsIops(): boolean;
    set supportsIops(value: boolean);
    resetSupportsIops(): void;
    get supportsIopsInput(): boolean | undefined;
    private _supportsKerberosAuthentication?;
    get supportsKerberosAuthentication(): boolean;
    set supportsKerberosAuthentication(value: boolean);
    resetSupportsKerberosAuthentication(): void;
    get supportsKerberosAuthenticationInput(): boolean | undefined;
    private _supportsPerformanceInsights?;
    get supportsPerformanceInsights(): boolean;
    set supportsPerformanceInsights(value: boolean);
    resetSupportsPerformanceInsights(): void;
    get supportsPerformanceInsightsInput(): boolean | undefined;
    private _supportsStorageAutoscaling?;
    get supportsStorageAutoscaling(): boolean;
    set supportsStorageAutoscaling(value: boolean);
    resetSupportsStorageAutoscaling(): void;
    get supportsStorageAutoscalingInput(): boolean | undefined;
    private _supportsStorageEncryption?;
    get supportsStorageEncryption(): boolean;
    set supportsStorageEncryption(value: boolean);
    resetSupportsStorageEncryption(): void;
    get supportsStorageEncryptionInput(): boolean | undefined;
    private _vpc?;
    get vpc(): boolean;
    set vpc(value: boolean);
    resetVpc(): void;
    get vpcInput(): boolean | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
