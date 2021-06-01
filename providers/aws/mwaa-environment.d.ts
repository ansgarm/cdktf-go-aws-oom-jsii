import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}.
     */
    readonly airflowConfigurationOptions?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#airflow_version MwaaEnvironment#airflow_version}.
     */
    readonly airflowVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#dag_s3_path MwaaEnvironment#dag_s3_path}.
     */
    readonly dagS3Path: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#environment_class MwaaEnvironment#environment_class}.
     */
    readonly environmentClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#execution_role_arn MwaaEnvironment#execution_role_arn}.
     */
    readonly executionRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#kms_key MwaaEnvironment#kms_key}.
     */
    readonly kmsKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#max_workers MwaaEnvironment#max_workers}.
     */
    readonly maxWorkers?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#min_workers MwaaEnvironment#min_workers}.
     */
    readonly minWorkers?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#name MwaaEnvironment#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}.
     */
    readonly pluginsS3ObjectVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#plugins_s3_path MwaaEnvironment#plugins_s3_path}.
     */
    readonly pluginsS3Path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}.
     */
    readonly requirementsS3ObjectVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#requirements_s3_path MwaaEnvironment#requirements_s3_path}.
     */
    readonly requirementsS3Path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#source_bucket_arn MwaaEnvironment#source_bucket_arn}.
     */
    readonly sourceBucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#tags MwaaEnvironment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#tags_all MwaaEnvironment#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#webserver_access_mode MwaaEnvironment#webserver_access_mode}.
     */
    readonly webserverAccessMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}.
     */
    readonly weeklyMaintenanceWindowStart?: string;
    /**
     * logging_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#logging_configuration MwaaEnvironment#logging_configuration}
     */
    readonly loggingConfiguration?: MwaaEnvironmentLoggingConfiguration[];
    /**
     * network_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#network_configuration MwaaEnvironment#network_configuration}
     */
    readonly networkConfiguration: MwaaEnvironmentNetworkConfiguration[];
}
export declare class MwaaEnvironmentLastUpdatedError extends cdktf.ComplexComputedList {
    get errorCode(): string;
    get errorMessage(): string;
}
export declare class MwaaEnvironmentLastUpdated extends cdktf.ComplexComputedList {
    get createdAt(): string;
    get error(): any;
    get status(): string;
}
export interface MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}.
     */
    readonly logLevel?: string;
}
export interface MwaaEnvironmentLoggingConfigurationSchedulerLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}.
     */
    readonly logLevel?: string;
}
export interface MwaaEnvironmentLoggingConfigurationTaskLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}.
     */
    readonly logLevel?: string;
}
export interface MwaaEnvironmentLoggingConfigurationWebserverLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}.
     */
    readonly logLevel?: string;
}
export interface MwaaEnvironmentLoggingConfigurationWorkerLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#enabled MwaaEnvironment#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#log_level MwaaEnvironment#log_level}.
     */
    readonly logLevel?: string;
}
export interface MwaaEnvironmentLoggingConfiguration {
    /**
     * dag_processing_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#dag_processing_logs MwaaEnvironment#dag_processing_logs}
     */
    readonly dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs[];
    /**
     * scheduler_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#scheduler_logs MwaaEnvironment#scheduler_logs}
     */
    readonly schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs[];
    /**
     * task_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#task_logs MwaaEnvironment#task_logs}
     */
    readonly taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs[];
    /**
     * webserver_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#webserver_logs MwaaEnvironment#webserver_logs}
     */
    readonly webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs[];
    /**
     * worker_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#worker_logs MwaaEnvironment#worker_logs}
     */
    readonly workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs[];
}
export interface MwaaEnvironmentNetworkConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#security_group_ids MwaaEnvironment#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html#subnet_ids MwaaEnvironment#subnet_ids}.
     */
    readonly subnetIds: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment}.
 */
export declare class MwaaEnvironment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MwaaEnvironmentConfig);
    private _airflowConfigurationOptions?;
    get airflowConfigurationOptions(): {
        [key: string]: string;
    };
    set airflowConfigurationOptions(value: {
        [key: string]: string;
    });
    resetAirflowConfigurationOptions(): void;
    get airflowConfigurationOptionsInput(): {
        [key: string]: string;
    } | undefined;
    private _airflowVersion?;
    get airflowVersion(): string;
    set airflowVersion(value: string);
    resetAirflowVersion(): void;
    get airflowVersionInput(): string | undefined;
    get arn(): string;
    get createdAt(): string;
    private _dagS3Path;
    get dagS3Path(): string;
    set dagS3Path(value: string);
    get dagS3PathInput(): string;
    private _environmentClass?;
    get environmentClass(): string;
    set environmentClass(value: string);
    resetEnvironmentClass(): void;
    get environmentClassInput(): string | undefined;
    private _executionRoleArn;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
    lastUpdated(index: string): MwaaEnvironmentLastUpdated;
    private _maxWorkers?;
    get maxWorkers(): number;
    set maxWorkers(value: number);
    resetMaxWorkers(): void;
    get maxWorkersInput(): number | undefined;
    private _minWorkers?;
    get minWorkers(): number;
    set minWorkers(value: number);
    resetMinWorkers(): void;
    get minWorkersInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pluginsS3ObjectVersion?;
    get pluginsS3ObjectVersion(): string;
    set pluginsS3ObjectVersion(value: string);
    resetPluginsS3ObjectVersion(): void;
    get pluginsS3ObjectVersionInput(): string | undefined;
    private _pluginsS3Path?;
    get pluginsS3Path(): string;
    set pluginsS3Path(value: string);
    resetPluginsS3Path(): void;
    get pluginsS3PathInput(): string | undefined;
    private _requirementsS3ObjectVersion?;
    get requirementsS3ObjectVersion(): string;
    set requirementsS3ObjectVersion(value: string);
    resetRequirementsS3ObjectVersion(): void;
    get requirementsS3ObjectVersionInput(): string | undefined;
    private _requirementsS3Path?;
    get requirementsS3Path(): string;
    set requirementsS3Path(value: string);
    resetRequirementsS3Path(): void;
    get requirementsS3PathInput(): string | undefined;
    get serviceRoleArn(): string;
    private _sourceBucketArn;
    get sourceBucketArn(): string;
    set sourceBucketArn(value: string);
    get sourceBucketArnInput(): string;
    get status(): string;
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
    private _webserverAccessMode?;
    get webserverAccessMode(): string;
    set webserverAccessMode(value: string);
    resetWebserverAccessMode(): void;
    get webserverAccessModeInput(): string | undefined;
    get webserverUrl(): string;
    private _weeklyMaintenanceWindowStart?;
    get weeklyMaintenanceWindowStart(): string;
    set weeklyMaintenanceWindowStart(value: string);
    resetWeeklyMaintenanceWindowStart(): void;
    get weeklyMaintenanceWindowStartInput(): string | undefined;
    private _loggingConfiguration?;
    get loggingConfiguration(): MwaaEnvironmentLoggingConfiguration[];
    set loggingConfiguration(value: MwaaEnvironmentLoggingConfiguration[]);
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): MwaaEnvironmentLoggingConfiguration[] | undefined;
    private _networkConfiguration;
    get networkConfiguration(): MwaaEnvironmentNetworkConfiguration[];
    set networkConfiguration(value: MwaaEnvironmentNetworkConfiguration[]);
    get networkConfigurationInput(): MwaaEnvironmentNetworkConfiguration[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
