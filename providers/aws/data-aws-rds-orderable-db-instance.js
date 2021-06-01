"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsRdsOrderableDbInstance = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance}.
 */
class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_orderable_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._availabilityZoneGroup = config.availabilityZoneGroup;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._instanceClass = config.instanceClass;
        this._licenseModel = config.licenseModel;
        this._preferredEngineVersions = config.preferredEngineVersions;
        this._preferredInstanceClasses = config.preferredInstanceClasses;
        this._storageType = config.storageType;
        this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
        this._supportsGlobalDatabases = config.supportsGlobalDatabases;
        this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
        this._supportsIops = config.supportsIops;
        this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
        this._supportsPerformanceInsights = config.supportsPerformanceInsights;
        this._supportsStorageAutoscaling = config.supportsStorageAutoscaling;
        this._supportsStorageEncryption = config.supportsStorageEncryption;
        this._vpc = config.vpc;
    }
    get availabilityZoneGroup() {
        return this.getStringAttribute('availability_zone_group');
    }
    set availabilityZoneGroup(value) {
        this._availabilityZoneGroup = value;
    }
    resetAvailabilityZoneGroup() {
        this._availabilityZoneGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneGroupInput() {
        return this._availabilityZoneGroup;
    }
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    get engine() {
        return this.getStringAttribute('engine');
    }
    set engine(value) {
        this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    get engineInput() {
        return this._engine;
    }
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    set engineVersion(value) {
        this._engineVersion = value;
    }
    resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get engineVersionInput() {
        return this._engineVersion;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get instanceClass() {
        return this.getStringAttribute('instance_class');
    }
    set instanceClass(value) {
        this._instanceClass = value;
    }
    resetInstanceClass() {
        this._instanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceClassInput() {
        return this._instanceClass;
    }
    get licenseModel() {
        return this.getStringAttribute('license_model');
    }
    set licenseModel(value) {
        this._licenseModel = value;
    }
    resetLicenseModel() {
        this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get licenseModelInput() {
        return this._licenseModel;
    }
    // max_iops_per_db_instance - computed: true, optional: false, required: false
    get maxIopsPerDbInstance() {
        return this.getNumberAttribute('max_iops_per_db_instance');
    }
    // max_iops_per_gib - computed: true, optional: false, required: false
    get maxIopsPerGib() {
        return this.getNumberAttribute('max_iops_per_gib');
    }
    // max_storage_size - computed: true, optional: false, required: false
    get maxStorageSize() {
        return this.getNumberAttribute('max_storage_size');
    }
    // min_iops_per_db_instance - computed: true, optional: false, required: false
    get minIopsPerDbInstance() {
        return this.getNumberAttribute('min_iops_per_db_instance');
    }
    // min_iops_per_gib - computed: true, optional: false, required: false
    get minIopsPerGib() {
        return this.getNumberAttribute('min_iops_per_gib');
    }
    // min_storage_size - computed: true, optional: false, required: false
    get minStorageSize() {
        return this.getNumberAttribute('min_storage_size');
    }
    // multi_az_capable - computed: true, optional: false, required: false
    get multiAzCapable() {
        return this.getBooleanAttribute('multi_az_capable');
    }
    // outpost_capable - computed: true, optional: false, required: false
    get outpostCapable() {
        return this.getBooleanAttribute('outpost_capable');
    }
    get preferredEngineVersions() {
        return this.getListAttribute('preferred_engine_versions');
    }
    set preferredEngineVersions(value) {
        this._preferredEngineVersions = value;
    }
    resetPreferredEngineVersions() {
        this._preferredEngineVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredEngineVersionsInput() {
        return this._preferredEngineVersions;
    }
    get preferredInstanceClasses() {
        return this.getListAttribute('preferred_instance_classes');
    }
    set preferredInstanceClasses(value) {
        this._preferredInstanceClasses = value;
    }
    resetPreferredInstanceClasses() {
        this._preferredInstanceClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredInstanceClassesInput() {
        return this._preferredInstanceClasses;
    }
    // read_replica_capable - computed: true, optional: false, required: false
    get readReplicaCapable() {
        return this.getBooleanAttribute('read_replica_capable');
    }
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    set storageType(value) {
        this._storageType = value;
    }
    resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageTypeInput() {
        return this._storageType;
    }
    // supported_engine_modes - computed: true, optional: false, required: false
    get supportedEngineModes() {
        return this.getListAttribute('supported_engine_modes');
    }
    get supportsEnhancedMonitoring() {
        return this.getBooleanAttribute('supports_enhanced_monitoring');
    }
    set supportsEnhancedMonitoring(value) {
        this._supportsEnhancedMonitoring = value;
    }
    resetSupportsEnhancedMonitoring() {
        this._supportsEnhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsEnhancedMonitoringInput() {
        return this._supportsEnhancedMonitoring;
    }
    get supportsGlobalDatabases() {
        return this.getBooleanAttribute('supports_global_databases');
    }
    set supportsGlobalDatabases(value) {
        this._supportsGlobalDatabases = value;
    }
    resetSupportsGlobalDatabases() {
        this._supportsGlobalDatabases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsGlobalDatabasesInput() {
        return this._supportsGlobalDatabases;
    }
    get supportsIamDatabaseAuthentication() {
        return this.getBooleanAttribute('supports_iam_database_authentication');
    }
    set supportsIamDatabaseAuthentication(value) {
        this._supportsIamDatabaseAuthentication = value;
    }
    resetSupportsIamDatabaseAuthentication() {
        this._supportsIamDatabaseAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsIamDatabaseAuthenticationInput() {
        return this._supportsIamDatabaseAuthentication;
    }
    get supportsIops() {
        return this.getBooleanAttribute('supports_iops');
    }
    set supportsIops(value) {
        this._supportsIops = value;
    }
    resetSupportsIops() {
        this._supportsIops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsIopsInput() {
        return this._supportsIops;
    }
    get supportsKerberosAuthentication() {
        return this.getBooleanAttribute('supports_kerberos_authentication');
    }
    set supportsKerberosAuthentication(value) {
        this._supportsKerberosAuthentication = value;
    }
    resetSupportsKerberosAuthentication() {
        this._supportsKerberosAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsKerberosAuthenticationInput() {
        return this._supportsKerberosAuthentication;
    }
    get supportsPerformanceInsights() {
        return this.getBooleanAttribute('supports_performance_insights');
    }
    set supportsPerformanceInsights(value) {
        this._supportsPerformanceInsights = value;
    }
    resetSupportsPerformanceInsights() {
        this._supportsPerformanceInsights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsPerformanceInsightsInput() {
        return this._supportsPerformanceInsights;
    }
    get supportsStorageAutoscaling() {
        return this.getBooleanAttribute('supports_storage_autoscaling');
    }
    set supportsStorageAutoscaling(value) {
        this._supportsStorageAutoscaling = value;
    }
    resetSupportsStorageAutoscaling() {
        this._supportsStorageAutoscaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsStorageAutoscalingInput() {
        return this._supportsStorageAutoscaling;
    }
    get supportsStorageEncryption() {
        return this.getBooleanAttribute('supports_storage_encryption');
    }
    set supportsStorageEncryption(value) {
        this._supportsStorageEncryption = value;
    }
    resetSupportsStorageEncryption() {
        this._supportsStorageEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsStorageEncryptionInput() {
        return this._supportsStorageEncryption;
    }
    get vpc() {
        return this.getBooleanAttribute('vpc');
    }
    set vpc(value) {
        this._vpc = value;
    }
    resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcInput() {
        return this._vpc;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredEngineVersions),
            preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
            storage_type: cdktf.stringToTerraform(this._storageType),
            supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
            supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
            supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
            supports_iops: cdktf.booleanToTerraform(this._supportsIops),
            supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
            supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
            supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
            supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
            vpc: cdktf.booleanToTerraform(this._vpc),
        };
    }
}
exports.DataAwsRdsOrderableDbInstance = DataAwsRdsOrderableDbInstance;
_a = JSII_RTTI_SYMBOL_1;
DataAwsRdsOrderableDbInstance[_a] = { fqn: "hashicorp_aws.DataAwsRdsOrderableDbInstance", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmRzLW9yZGVyYWJsZS1kYi1pbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzLXJkcy1vcmRlcmFibGUtZGItaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7Ozs7QUE4RS9CLE1BQWEsNkJBQThCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUxRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7SUFTZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEyQztRQUMxRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLCtCQUErQjtZQUN0RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztRQUMvRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFD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LEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztZQUMxRiw0QkFBNEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hGLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7WUFDdEYsR0FBRyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3pDLENBQUM7SUFDSixDQUFDOztBQWhaSCxzRUFpWkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL2QvcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c1Jkc09yZGVyYWJsZURiSW5zdGFuY2VDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZUdyb3VwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmdpbmVWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGljZW5zZU1vZGVsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZmVycmVkRW5naW5lVmVyc2lvbnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0c0VuaGFuY2VkTW9uaXRvcmluZz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0c0dsb2JhbERhdGFiYXNlcz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1cHBvcnRzSW9wcz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjPzogYm9vbGVhbjtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NSZHNPcmRlcmFibGVEYkluc3RhbmNlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfcmRzX29yZGVyYWJsZV9kYl9pbnN0YW5jZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lR3JvdXAgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZUdyb3VwO1xuICAgIHRoaXMuX2VuZ2luZSA9IGNvbmZpZy5lbmdpbmU7XG4gICAgdGhpcy5fZW5naW5lVmVyc2lvbiA9IGNvbmZpZy5lbmdpbmVWZXJzaW9uO1xuICAgIHRoaXMuX2luc3RhbmNlQ2xhc3MgPSBjb25maWcuaW5zdGFuY2VDbGFzcztcbiAgICB0aGlzLl9saWNlbnNlTW9kZWwgPSBjb25maWcubGljZW5zZU1vZGVsO1xuICAgIHRoaXMuX3ByZWZlcnJlZEVuZ2luZVZlcnNpb25zID0gY29uZmlnLnByZWZlcnJlZEVuZ2luZVZlcnNpb25zO1xuICAgIHRoaXMuX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3NlcyA9IGNvbmZpZy5wcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXM7XG4gICAgdGhpcy5fc3RvcmFnZVR5cGUgPSBjb25maWcuc3RvcmFnZVR5cGU7XG4gICAgdGhpcy5fc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcgPSBjb25maWcuc3VwcG9ydHNFbmhhbmNlZE1vbml0b3Jpbmc7XG4gICAgdGhpcy5fc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMgPSBjb25maWcuc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXM7XG4gICAgdGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uID0gY29uZmlnLnN1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbjtcbiAgICB0aGlzLl9zdXBwb3J0c0lvcHMgPSBjb25maWcuc3VwcG9ydHNJb3BzO1xuICAgIHRoaXMuX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbiA9IGNvbmZpZy5zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb247XG4gICAgdGhpcy5fc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzID0gY29uZmlnLnN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cztcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZyA9IGNvbmZpZy5zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZztcbiAgICB0aGlzLl9zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uID0gY29uZmlnLnN1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb247XG4gICAgdGhpcy5fdnBjID0gY29uZmlnLnZwYztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVfZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lR3JvdXA/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmVfZ3JvdXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF2YWlsYWJpbGl0eVpvbmVHcm91cCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZUdyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZhaWxhYmlsaXR5Wm9uZUdyb3VwKCkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVHcm91cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZUdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVHcm91cFxuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmVzJyk7XG4gIH1cblxuICAvLyBlbmdpbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5naW5lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmdpbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZ2luZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lXG4gIH1cblxuICAvLyBlbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuZ2luZVZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZW5naW5lVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmdpbmVWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5naW5lVmVyc2lvbigpIHtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZVZlcnNpb25cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9jbGFzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlQ2xhc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2NsYXNzJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZUNsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VDbGFzcygpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUNsYXNzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlQ2xhc3NcbiAgfVxuXG4gIC8vIGxpY2Vuc2VfbW9kZWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9saWNlbnNlTW9kZWw/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbGljZW5zZU1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGljZW5zZV9tb2RlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGljZW5zZU1vZGVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saWNlbnNlTW9kZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWNlbnNlTW9kZWwoKSB7XG4gICAgdGhpcy5fbGljZW5zZU1vZGVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWNlbnNlTW9kZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGljZW5zZU1vZGVsXG4gIH1cblxuICAvLyBtYXhfaW9wc19wZXJfZGJfaW5zdGFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhJb3BzUGVyRGJJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9pb3BzX3Blcl9kYl9pbnN0YW5jZScpO1xuICB9XG5cbiAgLy8gbWF4X2lvcHNfcGVyX2dpYiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heElvcHNQZXJHaWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfaW9wc19wZXJfZ2liJyk7XG4gIH1cblxuICAvLyBtYXhfc3RvcmFnZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4U3RvcmFnZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfc3RvcmFnZV9zaXplJyk7XG4gIH1cblxuICAvLyBtaW5faW9wc19wZXJfZGJfaW5zdGFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5Jb3BzUGVyRGJJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9pb3BzX3Blcl9kYl9pbnN0YW5jZScpO1xuICB9XG5cbiAgLy8gbWluX2lvcHNfcGVyX2dpYiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pbklvcHNQZXJHaWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5faW9wc19wZXJfZ2liJyk7XG4gIH1cblxuICAvLyBtaW5fc3RvcmFnZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWluU3RvcmFnZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fc3RvcmFnZV9zaXplJyk7XG4gIH1cblxuICAvLyBtdWx0aV9hel9jYXBhYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbXVsdGlBekNhcGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbXVsdGlfYXpfY2FwYWJsZScpO1xuICB9XG5cbiAgLy8gb3V0cG9zdF9jYXBhYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3V0cG9zdENhcGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3V0cG9zdF9jYXBhYmxlJyk7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfZW5naW5lX3ZlcnNpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZlcnJlZEVuZ2luZVZlcnNpb25zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkRW5naW5lVmVyc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncHJlZmVycmVkX2VuZ2luZV92ZXJzaW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZmVycmVkRW5naW5lVmVyc2lvbnModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3ByZWZlcnJlZEVuZ2luZVZlcnNpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZmVycmVkRW5naW5lVmVyc2lvbnMoKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkRW5naW5lVmVyc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZEVuZ2luZVZlcnNpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcnJlZEVuZ2luZVZlcnNpb25zXG4gIH1cblxuICAvLyBwcmVmZXJyZWRfaW5zdGFuY2VfY2xhc3NlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBwcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncHJlZmVycmVkX2luc3RhbmNlX2NsYXNzZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZlcnJlZEluc3RhbmNlQ2xhc3Nlcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzKCkge1xuICAgIHRoaXMuX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3NlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkSW5zdGFuY2VDbGFzc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcnJlZEluc3RhbmNlQ2xhc3Nlc1xuICB9XG5cbiAgLy8gcmVhZF9yZXBsaWNhX2NhcGFibGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWFkUmVwbGljYUNhcGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVhZF9yZXBsaWNhX2NhcGFibGUnKTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHN0b3JhZ2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RvcmFnZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yYWdlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdG9yYWdlVHlwZSgpIHtcbiAgICB0aGlzLl9zdG9yYWdlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZVR5cGVcbiAgfVxuXG4gIC8vIHN1cHBvcnRlZF9lbmdpbmVfbW9kZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRFbmdpbmVNb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXBwb3J0ZWRfZW5naW5lX21vZGVzJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0c19lbmhhbmNlZF9tb25pdG9yaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VwcG9ydHNFbmhhbmNlZE1vbml0b3Jpbmc/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHN1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX2VuaGFuY2VkX21vbml0b3JpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1cHBvcnRzRW5oYW5jZWRNb25pdG9yaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdXBwb3J0c0VuaGFuY2VkTW9uaXRvcmluZygpIHtcbiAgICB0aGlzLl9zdXBwb3J0c0VuaGFuY2VkTW9uaXRvcmluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmdcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX2dsb2JhbF9kYXRhYmFzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c0dsb2JhbERhdGFiYXNlcz86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfZ2xvYmFsX2RhdGFiYXNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdXBwb3J0c0dsb2JhbERhdGFiYXNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRzR2xvYmFsRGF0YWJhc2VzKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzR2xvYmFsRGF0YWJhc2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0c0dsb2JhbERhdGFiYXNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c0dsb2JhbERhdGFiYXNlc1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBzdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0c0lhbURhdGFiYXNlQXV0aGVudGljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uXG4gIH1cblxuICAvLyBzdXBwb3J0c19pb3BzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VwcG9ydHNJb3BzPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBzdXBwb3J0c0lvcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfaW9wcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNJb3BzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNJb3BzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNJb3BzKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzSW9wcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNJb3BzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzSW9wc1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfa2VyYmVyb3NfYXV0aGVudGljYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c0tlcmJlcm9zQXV0aGVudGljYXRpb24/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHN1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19rZXJiZXJvc19hdXRoZW50aWNhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzS2VyYmVyb3NBdXRoZW50aWNhdGlvblxuICB9XG5cbiAgLy8gc3VwcG9ydHNfcGVyZm9ybWFuY2VfaW5zaWdodHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c1BlcmZvcm1hbmNlSW5zaWdodHM/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHN1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19wZXJmb3JtYW5jZV9pbnNpZ2h0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzUGVyZm9ybWFuY2VJbnNpZ2h0c1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfc3RvcmFnZV9hdXRvc2NhbGluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBzdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19zdG9yYWdlX2F1dG9zY2FsaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmcoKSB7XG4gICAgdGhpcy5fc3VwcG9ydHNTdG9yYWdlQXV0b3NjYWxpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzU3RvcmFnZUF1dG9zY2FsaW5nXG4gIH1cblxuICAvLyBzdXBwb3J0c19zdG9yYWdlX2VuY3J5cHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBzdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX3N0b3JhZ2VfZW5jcnlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3N1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uKCkge1xuICAgIHRoaXMuX3N1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzU3RvcmFnZUVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNTdG9yYWdlRW5jcnlwdGlvblxuICB9XG5cbiAgLy8gdnBjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCB2cGMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndnBjJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92cGMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGMoKSB7XG4gICAgdGhpcy5fdnBjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lX2dyb3VwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdmFpbGFiaWxpdHlab25lR3JvdXApLFxuICAgICAgZW5naW5lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmUpLFxuICAgICAgZW5naW5lX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZ2luZVZlcnNpb24pLFxuICAgICAgaW5zdGFuY2VfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlQ2xhc3MpLFxuICAgICAgbGljZW5zZV9tb2RlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGljZW5zZU1vZGVsKSxcbiAgICAgIHByZWZlcnJlZF9lbmdpbmVfdmVyc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3ByZWZlcnJlZEVuZ2luZVZlcnNpb25zKSxcbiAgICAgIHByZWZlcnJlZF9pbnN0YW5jZV9jbGFzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9wcmVmZXJyZWRJbnN0YW5jZUNsYXNzZXMpLFxuICAgICAgc3RvcmFnZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlVHlwZSksXG4gICAgICBzdXBwb3J0c19lbmhhbmNlZF9tb25pdG9yaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNFbmhhbmNlZE1vbml0b3JpbmcpLFxuICAgICAgc3VwcG9ydHNfZ2xvYmFsX2RhdGFiYXNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzR2xvYmFsRGF0YWJhc2VzKSxcbiAgICAgIHN1cHBvcnRzX2lhbV9kYXRhYmFzZV9hdXRoZW50aWNhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N1cHBvcnRzSWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbiksXG4gICAgICBzdXBwb3J0c19pb3BzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNJb3BzKSxcbiAgICAgIHN1cHBvcnRzX2tlcmJlcm9zX2F1dGhlbnRpY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNLZXJiZXJvc0F1dGhlbnRpY2F0aW9uKSxcbiAgICAgIHN1cHBvcnRzX3BlcmZvcm1hbmNlX2luc2lnaHRzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3VwcG9ydHNQZXJmb3JtYW5jZUluc2lnaHRzKSxcbiAgICAgIHN1cHBvcnRzX3N0b3JhZ2VfYXV0b3NjYWxpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c1N0b3JhZ2VBdXRvc2NhbGluZyksXG4gICAgICBzdXBwb3J0c19zdG9yYWdlX2VuY3J5cHRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdXBwb3J0c1N0b3JhZ2VFbmNyeXB0aW9uKSxcbiAgICAgIHZwYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3ZwYyksXG4gICAgfTtcbiAgfVxufVxuIl19