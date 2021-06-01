"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MwaaEnvironment = exports.MwaaEnvironmentLastUpdated = exports.MwaaEnvironmentLastUpdatedError = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class MwaaEnvironmentLastUpdatedError extends cdktf.ComplexComputedList {
    // error_code - computed: true, optional: false, required: false
    get errorCode() {
        return this.getStringAttribute('error_code');
    }
    // error_message - computed: true, optional: false, required: false
    get errorMessage() {
        return this.getStringAttribute('error_message');
    }
}
exports.MwaaEnvironmentLastUpdatedError = MwaaEnvironmentLastUpdatedError;
_a = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLastUpdatedError[_a] = { fqn: "hashicorp_aws.MwaaEnvironmentLastUpdatedError", version: "0.0.0" };
class MwaaEnvironmentLastUpdated extends cdktf.ComplexComputedList {
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // error - computed: true, optional: false, required: false
    get error() {
        return this.interpolationForAttribute('error');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
exports.MwaaEnvironmentLastUpdated = MwaaEnvironmentLastUpdated;
_b = JSII_RTTI_SYMBOL_1;
MwaaEnvironmentLastUpdated[_b] = { fqn: "hashicorp_aws.MwaaEnvironmentLastUpdated", version: "0.0.0" };
function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
function mwaaEnvironmentLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dag_processing_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform)(struct.dagProcessingLogs),
        scheduler_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform)(struct.schedulerLogs),
        task_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform)(struct.taskLogs),
        webserver_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform)(struct.webserverLogs),
        worker_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform)(struct.workerLogs),
    };
}
function mwaaEnvironmentNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment}.
 */
class MwaaEnvironment extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_mwaa_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._airflowConfigurationOptions = config.airflowConfigurationOptions;
        this._airflowVersion = config.airflowVersion;
        this._dagS3Path = config.dagS3Path;
        this._environmentClass = config.environmentClass;
        this._executionRoleArn = config.executionRoleArn;
        this._kmsKey = config.kmsKey;
        this._maxWorkers = config.maxWorkers;
        this._minWorkers = config.minWorkers;
        this._name = config.name;
        this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
        this._pluginsS3Path = config.pluginsS3Path;
        this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
        this._requirementsS3Path = config.requirementsS3Path;
        this._sourceBucketArn = config.sourceBucketArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._webserverAccessMode = config.webserverAccessMode;
        this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
        this._loggingConfiguration = config.loggingConfiguration;
        this._networkConfiguration = config.networkConfiguration;
    }
    get airflowConfigurationOptions() {
        return this.interpolationForAttribute('airflow_configuration_options');
    }
    set airflowConfigurationOptions(value) {
        this._airflowConfigurationOptions = value;
    }
    resetAirflowConfigurationOptions() {
        this._airflowConfigurationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowConfigurationOptionsInput() {
        return this._airflowConfigurationOptions;
    }
    get airflowVersion() {
        return this.getStringAttribute('airflow_version');
    }
    set airflowVersion(value) {
        this._airflowVersion = value;
    }
    resetAirflowVersion() {
        this._airflowVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowVersionInput() {
        return this._airflowVersion;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    get dagS3Path() {
        return this.getStringAttribute('dag_s3_path');
    }
    set dagS3Path(value) {
        this._dagS3Path = value;
    }
    // Temporarily expose input value. Use with caution.
    get dagS3PathInput() {
        return this._dagS3Path;
    }
    get environmentClass() {
        return this.getStringAttribute('environment_class');
    }
    set environmentClass(value) {
        this._environmentClass = value;
    }
    resetEnvironmentClass() {
        this._environmentClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentClassInput() {
        return this._environmentClass;
    }
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleArnInput() {
        return this._executionRoleArn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    set kmsKey(value) {
        this._kmsKey = value;
    }
    resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyInput() {
        return this._kmsKey;
    }
    // last_updated - computed: true, optional: false, required: false
    lastUpdated(index) {
        return new MwaaEnvironmentLastUpdated(this, 'last_updated', index);
    }
    get maxWorkers() {
        return this.getNumberAttribute('max_workers');
    }
    set maxWorkers(value) {
        this._maxWorkers = value;
    }
    resetMaxWorkers() {
        this._maxWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWorkersInput() {
        return this._maxWorkers;
    }
    get minWorkers() {
        return this.getNumberAttribute('min_workers');
    }
    set minWorkers(value) {
        this._minWorkers = value;
    }
    resetMinWorkers() {
        this._minWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minWorkersInput() {
        return this._minWorkers;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get pluginsS3ObjectVersion() {
        return this.getStringAttribute('plugins_s3_object_version');
    }
    set pluginsS3ObjectVersion(value) {
        this._pluginsS3ObjectVersion = value;
    }
    resetPluginsS3ObjectVersion() {
        this._pluginsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3ObjectVersionInput() {
        return this._pluginsS3ObjectVersion;
    }
    get pluginsS3Path() {
        return this.getStringAttribute('plugins_s3_path');
    }
    set pluginsS3Path(value) {
        this._pluginsS3Path = value;
    }
    resetPluginsS3Path() {
        this._pluginsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3PathInput() {
        return this._pluginsS3Path;
    }
    get requirementsS3ObjectVersion() {
        return this.getStringAttribute('requirements_s3_object_version');
    }
    set requirementsS3ObjectVersion(value) {
        this._requirementsS3ObjectVersion = value;
    }
    resetRequirementsS3ObjectVersion() {
        this._requirementsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3ObjectVersionInput() {
        return this._requirementsS3ObjectVersion;
    }
    get requirementsS3Path() {
        return this.getStringAttribute('requirements_s3_path');
    }
    set requirementsS3Path(value) {
        this._requirementsS3Path = value;
    }
    resetRequirementsS3Path() {
        this._requirementsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3PathInput() {
        return this._requirementsS3Path;
    }
    // service_role_arn - computed: true, optional: false, required: false
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    get sourceBucketArn() {
        return this.getStringAttribute('source_bucket_arn');
    }
    set sourceBucketArn(value) {
        this._sourceBucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceBucketArnInput() {
        return this._sourceBucketArn;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get tagsAll() {
        return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    get webserverAccessMode() {
        return this.getStringAttribute('webserver_access_mode');
    }
    set webserverAccessMode(value) {
        this._webserverAccessMode = value;
    }
    resetWebserverAccessMode() {
        this._webserverAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webserverAccessModeInput() {
        return this._webserverAccessMode;
    }
    // webserver_url - computed: true, optional: false, required: false
    get webserverUrl() {
        return this.getStringAttribute('webserver_url');
    }
    get weeklyMaintenanceWindowStart() {
        return this.getStringAttribute('weekly_maintenance_window_start');
    }
    set weeklyMaintenanceWindowStart(value) {
        this._weeklyMaintenanceWindowStart = value;
    }
    resetWeeklyMaintenanceWindowStart() {
        this._weeklyMaintenanceWindowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weeklyMaintenanceWindowStartInput() {
        return this._weeklyMaintenanceWindowStart;
    }
    get loggingConfiguration() {
        return this.interpolationForAttribute('logging_configuration');
    }
    set loggingConfiguration(value) {
        this._loggingConfiguration = value;
    }
    resetLoggingConfiguration() {
        this._loggingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingConfigurationInput() {
        return this._loggingConfiguration;
    }
    get networkConfiguration() {
        return this.interpolationForAttribute('network_configuration');
    }
    set networkConfiguration(value) {
        this._networkConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkConfigurationInput() {
        return this._networkConfiguration;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            airflow_configuration_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._airflowConfigurationOptions),
            airflow_version: cdktf.stringToTerraform(this._airflowVersion),
            dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
            environment_class: cdktf.stringToTerraform(this._environmentClass),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            kms_key: cdktf.stringToTerraform(this._kmsKey),
            max_workers: cdktf.numberToTerraform(this._maxWorkers),
            min_workers: cdktf.numberToTerraform(this._minWorkers),
            name: cdktf.stringToTerraform(this._name),
            plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
            plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
            requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
            requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
            source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
            weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
            logging_configuration: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationToTerraform)(this._loggingConfiguration),
            network_configuration: cdktf.listMapper(mwaaEnvironmentNetworkConfigurationToTerraform)(this._networkConfiguration),
        };
    }
}
exports.MwaaEnvironment = MwaaEnvironment;
_c = JSII_RTTI_SYMBOL_1;
MwaaEnvironment[_c] = { fqn: "hashicorp_aws.MwaaEnvironment", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXdhYS1lbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm13YWEtZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUEwRi9CLE1BQWEsK0JBQWdDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU1RSxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O0FBVkgsMEVBV0M7OztBQUNELE1BQWEsMEJBQTJCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV2RSxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFRLENBQUM7SUFDeEQsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOztBQWZILGdFQWdCQzs7O0FBWUQsU0FBUywrREFBK0QsQ0FBQyxNQUE2RDtJQUNwSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFR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QThCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztZQUMxRixvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDakUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN6RSwrQkFBK0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzVGLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDbkgscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUNwSCxDQUFDO0lBQ0osQ0FBQzs7QUFqYUgsMENBa2FDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL213YWFfZW52aXJvbm1lbnQuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWlyZmxvd1ZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYWdTM1BhdGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudmlyb25tZW50Q2xhc3M/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4ZWN1dGlvblJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhXb3JrZXJzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluV29ya2Vycz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGx1Z2luc1MzT2JqZWN0VmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGx1Z2luc1MzUGF0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWlyZW1lbnRzUzNQYXRoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlQnVja2V0QXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2Vic2VydmVyQWNjZXNzTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nZ2luZ0NvbmZpZ3VyYXRpb24/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0NvbmZpZ3VyYXRpb246IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uW107XG59XG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWRFcnJvciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVycm9yX2NvZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvckNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlcnJvcl9jb2RlJyk7XG4gIH1cblxuICAvLyBlcnJvcl9tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXJyb3JfbWVzc2FnZScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50TGFzdFVwZGF0ZWQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcmVhdGVkX2F0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZEF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9hdCcpO1xuICB9XG5cbiAgLy8gZXJyb3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlcnJvcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uRGFnUHJvY2Vzc2luZ0xvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uU2NoZWR1bGVyTG9ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0xldmVsPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblNjaGVkdWxlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gbXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25UYXNrTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVGFza0xvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0xldmVsPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldlYnNlcnZlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0xldmVsPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldvcmtlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbldvcmtlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhZ1Byb2Nlc3NpbmdMb2dzPzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25EYWdQcm9jZXNzaW5nTG9nc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NoZWR1bGVyTG9ncz86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uU2NoZWR1bGVyTG9nc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFza0xvZ3M/OiBNd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWJzZXJ2ZXJMb2dzPzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25XZWJzZXJ2ZXJMb2dzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3b3JrZXJMb2dzPzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Xb3JrZXJMb2dzW107XG59XG5cbmZ1bmN0aW9uIG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGFnX3Byb2Nlc3NpbmdfbG9nczogY2RrdGYubGlzdE1hcHBlcihtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvbkRhZ1Byb2Nlc3NpbmdMb2dzVG9UZXJyYWZvcm0pKHN0cnVjdCEuZGFnUHJvY2Vzc2luZ0xvZ3MpLFxuICAgIHNjaGVkdWxlcl9sb2dzOiBjZGt0Zi5saXN0TWFwcGVyKG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uU2NoZWR1bGVyTG9nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNjaGVkdWxlckxvZ3MpLFxuICAgIHRhc2tfbG9nczogY2RrdGYubGlzdE1hcHBlcihtd2FhRW52aXJvbm1lbnRMb2dnaW5nQ29uZmlndXJhdGlvblRhc2tMb2dzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFza0xvZ3MpLFxuICAgIHdlYnNlcnZlcl9sb2dzOiBjZGt0Zi5saXN0TWFwcGVyKG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV2Vic2VydmVyTG9nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLndlYnNlcnZlckxvZ3MpLFxuICAgIHdvcmtlcl9sb2dzOiBjZGt0Zi5saXN0TWFwcGVyKG13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uV29ya2VyTG9nc1RvVGVycmFmb3JtKShzdHJ1Y3QhLndvcmtlckxvZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBtd2FhRW52aXJvbm1lbnROZXR3b3JrQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwSWRzKSxcbiAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgTXdhYUVudmlyb25tZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTXdhYUVudmlyb25tZW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbXdhYV9lbnZpcm9ubWVudCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMgPSBjb25maWcuYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zO1xuICAgIHRoaXMuX2FpcmZsb3dWZXJzaW9uID0gY29uZmlnLmFpcmZsb3dWZXJzaW9uO1xuICAgIHRoaXMuX2RhZ1MzUGF0aCA9IGNvbmZpZy5kYWdTM1BhdGg7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRDbGFzcyA9IGNvbmZpZy5lbnZpcm9ubWVudENsYXNzO1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSBjb25maWcuZXhlY3V0aW9uUm9sZUFybjtcbiAgICB0aGlzLl9rbXNLZXkgPSBjb25maWcua21zS2V5O1xuICAgIHRoaXMuX21heFdvcmtlcnMgPSBjb25maWcubWF4V29ya2VycztcbiAgICB0aGlzLl9taW5Xb3JrZXJzID0gY29uZmlnLm1pbldvcmtlcnM7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BsdWdpbnNTM09iamVjdFZlcnNpb24gPSBjb25maWcucGx1Z2luc1MzT2JqZWN0VmVyc2lvbjtcbiAgICB0aGlzLl9wbHVnaW5zUzNQYXRoID0gY29uZmlnLnBsdWdpbnNTM1BhdGg7XG4gICAgdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uID0gY29uZmlnLnJlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbjtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM1BhdGggPSBjb25maWcucmVxdWlyZW1lbnRzUzNQYXRoO1xuICAgIHRoaXMuX3NvdXJjZUJ1Y2tldEFybiA9IGNvbmZpZy5zb3VyY2VCdWNrZXRBcm47XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl93ZWJzZXJ2ZXJBY2Nlc3NNb2RlID0gY29uZmlnLndlYnNlcnZlckFjY2Vzc01vZGU7XG4gICAgdGhpcy5fd2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydCA9IGNvbmZpZy53ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0O1xuICAgIHRoaXMuX2xvZ2dpbmdDb25maWd1cmF0aW9uID0gY29uZmlnLmxvZ2dpbmdDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uID0gY29uZmlnLm5ldHdvcmtDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhaXJmbG93X2NvbmZpZ3VyYXRpb25fb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IGFpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhaXJmbG93X2NvbmZpZ3VyYXRpb25fb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFpcmZsb3dDb25maWd1cmF0aW9uT3B0aW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBaXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMoKSB7XG4gICAgdGhpcy5fYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhaXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWlyZmxvd0NvbmZpZ3VyYXRpb25PcHRpb25zXG4gIH1cblxuICAvLyBhaXJmbG93X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9haXJmbG93VmVyc2lvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBhaXJmbG93VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FpcmZsb3dfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWlyZmxvd1ZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FpcmZsb3dWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWlyZmxvd1ZlcnNpb24oKSB7XG4gICAgdGhpcy5fYWlyZmxvd1ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFpcmZsb3dWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FpcmZsb3dWZXJzaW9uXG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVkQXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX2F0Jyk7XG4gIH1cblxuICAvLyBkYWdfczNfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYWdTM1BhdGg6IHN0cmluZztcbiAgcHVibGljIGdldCBkYWdTM1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYWdfczNfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGFnUzNQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYWdTM1BhdGggPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGFnUzNQYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhZ1MzUGF0aFxuICB9XG5cbiAgLy8gZW52aXJvbm1lbnRfY2xhc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbnZpcm9ubWVudENsYXNzPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGVudmlyb25tZW50Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbnZpcm9ubWVudF9jbGFzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW52aXJvbm1lbnRDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRDbGFzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVudmlyb25tZW50Q2xhc3MoKSB7XG4gICAgdGhpcy5fZW52aXJvbm1lbnRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW52aXJvbm1lbnRDbGFzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudENsYXNzXG4gIH1cblxuICAvLyBleGVjdXRpb25fcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uUm9sZUFybjogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleGVjdXRpb25fcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4ZWN1dGlvblJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Sb2xlQXJuXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8ga21zX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQga21zS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fa21zS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5KCkge1xuICAgIHRoaXMuX2ttc0tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleVxuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBsYXN0VXBkYXRlZChpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBNd2FhRW52aXJvbm1lbnRMYXN0VXBkYXRlZCh0aGlzLCAnbGFzdF91cGRhdGVkJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gbWF4X3dvcmtlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhXb3JrZXJzPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IG1heFdvcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfd29ya2VycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4V29ya2Vycyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4V29ya2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFdvcmtlcnMoKSB7XG4gICAgdGhpcy5fbWF4V29ya2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4V29ya2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhXb3JrZXJzXG4gIH1cblxuICAvLyBtaW5fd29ya2VycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pbldvcmtlcnM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgbWluV29ya2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl93b3JrZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5Xb3JrZXJzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5Xb3JrZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluV29ya2VycygpIHtcbiAgICB0aGlzLl9taW5Xb3JrZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5Xb3JrZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbldvcmtlcnNcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gcGx1Z2luc19zM19vYmplY3RfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsdWdpbnNTM09iamVjdFZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcGx1Z2luc1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsdWdpbnNfczNfb2JqZWN0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsdWdpbnNTM09iamVjdFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsdWdpbnNTM09iamVjdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbHVnaW5zUzNPYmplY3RWZXJzaW9uKCkge1xuICAgIHRoaXMuX3BsdWdpbnNTM09iamVjdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsdWdpbnNTM09iamVjdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGx1Z2luc1MzT2JqZWN0VmVyc2lvblxuICB9XG5cbiAgLy8gcGx1Z2luc19zM19wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsdWdpbnNTM1BhdGg/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcGx1Z2luc1MzUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsdWdpbnNfczNfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGx1Z2luc1MzUGF0aCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3BsdWdpbnNTM1BhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbHVnaW5zUzNQYXRoKCkge1xuICAgIHRoaXMuX3BsdWdpbnNTM1BhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsdWdpbnNTM1BhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGx1Z2luc1MzUGF0aFxuICB9XG5cbiAgLy8gcmVxdWlyZW1lbnRzX3MzX29iamVjdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHJlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcXVpcmVtZW50c19zM19vYmplY3RfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb24oKSB7XG4gICAgdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlbWVudHNTM09iamVjdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZW1lbnRzUzNPYmplY3RWZXJzaW9uXG4gIH1cblxuICAvLyByZXF1aXJlbWVudHNfczNfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlbWVudHNTM1BhdGg/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVxdWlyZW1lbnRzUzNQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVxdWlyZW1lbnRzX3MzX3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVtZW50c1MzUGF0aCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3JlcXVpcmVtZW50c1MzUGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVtZW50c1MzUGF0aCgpIHtcbiAgICB0aGlzLl9yZXF1aXJlbWVudHNTM1BhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVtZW50c1MzUGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlbWVudHNTM1BhdGhcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2Vfcm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9idWNrZXRfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZUJ1Y2tldEFybjogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNvdXJjZUJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9idWNrZXRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VCdWNrZXRBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NvdXJjZUJ1Y2tldEFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VCdWNrZXRBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQnVja2V0QXJuXG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzQWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsXG4gIH1cblxuICAvLyB3ZWJzZXJ2ZXJfYWNjZXNzX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWJzZXJ2ZXJBY2Nlc3NNb2RlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHdlYnNlcnZlckFjY2Vzc01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWJzZXJ2ZXJfYWNjZXNzX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdlYnNlcnZlckFjY2Vzc01vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWJzZXJ2ZXJBY2Nlc3NNb2RlKCkge1xuICAgIHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlYnNlcnZlckFjY2Vzc01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vic2VydmVyQWNjZXNzTW9kZVxuICB9XG5cbiAgLy8gd2Vic2VydmVyX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdlYnNlcnZlclVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dlYnNlcnZlcl91cmwnKTtcbiAgfVxuXG4gIC8vIHdlZWtseV9tYWludGVuYW5jZV93aW5kb3dfc3RhcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHdlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWVrbHlfbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydCgpIHtcbiAgICB0aGlzLl93ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3ZWVrbHlNYWludGVuYW5jZVdpbmRvd1N0YXJ0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlV2luZG93U3RhcnRcbiAgfVxuXG4gIC8vIGxvZ2dpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dnaW5nQ29uZmlndXJhdGlvbj86IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uW107XG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nZ2luZ19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nZ2luZ0NvbmZpZ3VyYXRpb24odmFsdWU6IE13YWFFbnZpcm9ubWVudExvZ2dpbmdDb25maWd1cmF0aW9uW10gKSB7XG4gICAgdGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dnaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9sb2dnaW5nQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIG5ldHdvcmtfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uZXR3b3JrQ29uZmlndXJhdGlvbjogTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb25bXTtcbiAgcHVibGljIGdldCBuZXR3b3JrQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrQ29uZmlndXJhdGlvbih2YWx1ZTogTXdhYUVudmlyb25tZW50TmV0d29ya0NvbmZpZ3VyYXRpb25bXSkge1xuICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFpcmZsb3dfY29uZmlndXJhdGlvbl9vcHRpb25zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl9haXJmbG93Q29uZmlndXJhdGlvbk9wdGlvbnMpLFxuICAgICAgYWlyZmxvd192ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9haXJmbG93VmVyc2lvbiksXG4gICAgICBkYWdfczNfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGFnUzNQYXRoKSxcbiAgICAgIGVudmlyb25tZW50X2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbnZpcm9ubWVudENsYXNzKSxcbiAgICAgIGV4ZWN1dGlvbl9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhlY3V0aW9uUm9sZUFybiksXG4gICAgICBrbXNfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXkpLFxuICAgICAgbWF4X3dvcmtlcnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heFdvcmtlcnMpLFxuICAgICAgbWluX3dvcmtlcnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21pbldvcmtlcnMpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwbHVnaW5zX3MzX29iamVjdF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wbHVnaW5zUzNPYmplY3RWZXJzaW9uKSxcbiAgICAgIHBsdWdpbnNfczNfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGx1Z2luc1MzUGF0aCksXG4gICAgICByZXF1aXJlbWVudHNfczNfb2JqZWN0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcXVpcmVtZW50c1MzT2JqZWN0VmVyc2lvbiksXG4gICAgICByZXF1aXJlbWVudHNfczNfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVxdWlyZW1lbnRzUzNQYXRoKSxcbiAgICAgIHNvdXJjZV9idWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VCdWNrZXRBcm4pLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB3ZWJzZXJ2ZXJfYWNjZXNzX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dlYnNlcnZlckFjY2Vzc01vZGUpLFxuICAgICAgd2Vla2x5X21haW50ZW5hbmNlX3dpbmRvd19zdGFydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fd2Vla2x5TWFpbnRlbmFuY2VXaW5kb3dTdGFydCksXG4gICAgICBsb2dnaW5nX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIobXdhYUVudmlyb25tZW50TG9nZ2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSkodGhpcy5fbG9nZ2luZ0NvbmZpZ3VyYXRpb24pLFxuICAgICAgbmV0d29ya19jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKG13YWFFbnZpcm9ubWVudE5ldHdvcmtDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uKSxcbiAgICB9O1xuICB9XG59XG4iXX0=