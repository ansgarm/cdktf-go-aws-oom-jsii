import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Kinesisanalyticsv2ApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#description Kinesisanalyticsv2Application#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#force_stop Kinesisanalyticsv2Application#force_stop}.
     */
    readonly forceStop?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#runtime_environment Kinesisanalyticsv2Application#runtime_environment}.
     */
    readonly runtimeEnvironment: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#service_execution_role Kinesisanalyticsv2Application#service_execution_role}.
     */
    readonly serviceExecutionRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#start_application Kinesisanalyticsv2Application#start_application}.
     */
    readonly startApplication?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags Kinesisanalyticsv2Application#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags_all Kinesisanalyticsv2Application#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * application_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_configuration Kinesisanalyticsv2Application#application_configuration}
     */
    readonly applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration[];
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#cloudwatch_logging_options Kinesisanalyticsv2Application#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}.
     */
    readonly fileKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#object_version Kinesisanalyticsv2Application#object_version}.
     */
    readonly objectVersion?: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#text_content Kinesisanalyticsv2Application#text_content}.
     */
    readonly textContent?: string;
    /**
     * s3_content_location block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_content_location Kinesisanalyticsv2Application#s3_content_location}
     */
    readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content_type Kinesisanalyticsv2Application#code_content_type}.
     */
    readonly codeContentType: string;
    /**
     * code_content block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content Kinesisanalyticsv2Application#code_content}
     */
    readonly codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshots_enabled Kinesisanalyticsv2Application#snapshots_enabled}.
     */
    readonly snapshotsEnabled: boolean;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group_id Kinesisanalyticsv2Application#property_group_id}.
     */
    readonly propertyGroupId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_map Kinesisanalyticsv2Application#property_map}.
     */
    readonly propertyMap: {
        [key: string]: string;
    };
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
    /**
     * property_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group Kinesisanalyticsv2Application#property_group}
     */
    readonly propertyGroup: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_interval Kinesisanalyticsv2Application#checkpoint_interval}.
     */
    readonly checkpointInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpointing_enabled Kinesisanalyticsv2Application#checkpointing_enabled}.
     */
    readonly checkpointingEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}.
     */
    readonly configurationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#min_pause_between_checkpoints Kinesisanalyticsv2Application#min_pause_between_checkpoints}.
     */
    readonly minPauseBetweenCheckpoints?: number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}.
     */
    readonly configurationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_level Kinesisanalyticsv2Application#log_level}.
     */
    readonly logLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#metrics_level Kinesisanalyticsv2Application#metrics_level}.
     */
    readonly metricsLevel?: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#auto_scaling_enabled Kinesisanalyticsv2Application#auto_scaling_enabled}.
     */
    readonly autoScalingEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}.
     */
    readonly configurationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism Kinesisanalyticsv2Application#parallelism}.
     */
    readonly parallelism?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_per_kpu Kinesisanalyticsv2Application#parallelism_per_kpu}.
     */
    readonly parallelismPerKpu?: number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
    /**
     * checkpoint_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_configuration Kinesisanalyticsv2Application#checkpoint_configuration}
     */
    readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration[];
    /**
     * monitoring_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}
     */
    readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration[];
    /**
     * parallelism_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_configuration Kinesisanalyticsv2Application#parallelism_configuration}
     */
    readonly parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_type Kinesisanalyticsv2Application#application_restore_type}.
     */
    readonly applicationRestoreType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshot_name Kinesisanalyticsv2Application#snapshot_name}.
     */
    readonly snapshotName?: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#allow_non_restored_state Kinesisanalyticsv2Application#allow_non_restored_state}.
     */
    readonly allowNonRestoredState?: boolean;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration {
    /**
     * application_restore_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_configuration Kinesisanalyticsv2Application#application_restore_configuration}
     */
    readonly applicationRestoreConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration[];
    /**
     * flink_run_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_run_configuration Kinesisanalyticsv2Application#flink_run_configuration}
     */
    readonly flinkRunConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#count Kinesisanalyticsv2Application#count}.
     */
    readonly count?: number;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
    /**
     * input_lambda_processor block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_lambda_processor Kinesisanalyticsv2Application#input_lambda_processor}
     */
    readonly inputLambdaProcessor: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}.
     */
    readonly mapping?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}.
     */
    readonly sqlType: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}.
     */
    readonly recordColumnDelimiter: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}.
     */
    readonly recordRowDelimiter: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}.
     */
    readonly recordRowPath: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
    /**
     * csv_mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
     */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters[];
    /**
     * json_mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
     */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}.
     */
    readonly recordFormatType: string;
    /**
     * mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
     */
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}.
     */
    readonly recordEncoding?: string;
    /**
     * record_column block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
     */
    readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
    /**
     * record_format block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
     */
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position Kinesisanalyticsv2Application#input_starting_position}.
     */
    readonly inputStartingPosition?: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name_prefix Kinesisanalyticsv2Application#name_prefix}.
     */
    readonly namePrefix: string;
    /**
     * input_parallelism block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_parallelism Kinesisanalyticsv2Application#input_parallelism}
     */
    readonly inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism[];
    /**
     * input_processing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_processing_configuration Kinesisanalyticsv2Application#input_processing_configuration}
     */
    readonly inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration[];
    /**
     * input_schema block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_schema Kinesisanalyticsv2Application#input_schema}
     */
    readonly inputSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema[];
    /**
     * input_starting_position_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position_configuration Kinesisanalyticsv2Application#input_starting_position_configuration}
     */
    readonly inputStartingPositionConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[];
    /**
     * kinesis_firehose_input block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_input Kinesisanalyticsv2Application#kinesis_firehose_input}
     */
    readonly kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput[];
    /**
     * kinesis_streams_input block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_input Kinesisanalyticsv2Application#kinesis_streams_input}
     */
    readonly kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}.
     */
    readonly recordFormatType: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}.
     */
    readonly resourceArn: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}.
     */
    readonly name: string;
    /**
     * destination_schema block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#destination_schema Kinesisanalyticsv2Application#destination_schema}
     */
    readonly destinationSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema[];
    /**
     * kinesis_firehose_output block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_output Kinesisanalyticsv2Application#kinesis_firehose_output}
     */
    readonly kinesisFirehoseOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput[];
    /**
     * kinesis_streams_output block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_output Kinesisanalyticsv2Application#kinesis_streams_output}
     */
    readonly kinesisStreamsOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput[];
    /**
     * lambda_output block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#lambda_output Kinesisanalyticsv2Application#lambda_output}
     */
    readonly lambdaOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}.
     */
    readonly mapping?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}.
     */
    readonly sqlType: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}.
     */
    readonly recordColumnDelimiter: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}.
     */
    readonly recordRowDelimiter: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}.
     */
    readonly recordRowPath: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
    /**
     * csv_mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
     */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters[];
    /**
     * json_mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
     */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}.
     */
    readonly recordFormatType: string;
    /**
     * mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
     */
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}.
     */
    readonly recordEncoding?: string;
    /**
     * record_column block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
     */
    readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
    /**
     * record_format block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
     */
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}.
     */
    readonly fileKey: string;
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#table_name Kinesisanalyticsv2Application#table_name}.
     */
    readonly tableName: string;
    /**
     * reference_schema block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_schema Kinesisanalyticsv2Application#reference_schema}
     */
    readonly referenceSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema[];
    /**
     * s3_reference_data_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_reference_data_source Kinesisanalyticsv2Application#s3_reference_data_source}
     */
    readonly s3ReferenceDataSource: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
    /**
     * input block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input Kinesisanalyticsv2Application#input}
     */
    readonly input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput[];
    /**
     * output block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#output Kinesisanalyticsv2Application#output}
     */
    readonly output?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
    /**
     * reference_data_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_data_source Kinesisanalyticsv2Application#reference_data_source}
     */
    readonly referenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#security_group_ids Kinesisanalyticsv2Application#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#subnet_ids Kinesisanalyticsv2Application#subnet_ids}.
     */
    readonly subnetIds: string[];
}
export interface Kinesisanalyticsv2ApplicationApplicationConfiguration {
    /**
     * application_code_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_code_configuration Kinesisanalyticsv2Application#application_code_configuration}
     */
    readonly applicationCodeConfiguration: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration[];
    /**
     * application_snapshot_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_snapshot_configuration Kinesisanalyticsv2Application#application_snapshot_configuration}
     */
    readonly applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration[];
    /**
     * environment_properties block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#environment_properties Kinesisanalyticsv2Application#environment_properties}
     */
    readonly environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties[];
    /**
     * flink_application_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_application_configuration Kinesisanalyticsv2Application#flink_application_configuration}
     */
    readonly flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration[];
    /**
     * run_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#run_configuration Kinesisanalyticsv2Application#run_configuration}
     */
    readonly runConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration[];
    /**
     * sql_application_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_application_configuration Kinesisanalyticsv2Application#sql_application_configuration}
     */
    readonly sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration[];
    /**
     * vpc_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#vpc_configuration Kinesisanalyticsv2Application#vpc_configuration}
     */
    readonly vpcConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration[];
}
export interface Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_stream_arn Kinesisanalyticsv2Application#log_stream_arn}.
     */
    readonly logStreamArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application}.
 */
export declare class Kinesisanalyticsv2Application extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationConfig);
    get arn(): string;
    get createTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceStop?;
    get forceStop(): boolean;
    set forceStop(value: boolean);
    resetForceStop(): void;
    get forceStopInput(): boolean | undefined;
    get id(): string;
    get lastUpdateTimestamp(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _runtimeEnvironment;
    get runtimeEnvironment(): string;
    set runtimeEnvironment(value: string);
    get runtimeEnvironmentInput(): string;
    private _serviceExecutionRole;
    get serviceExecutionRole(): string;
    set serviceExecutionRole(value: string);
    get serviceExecutionRoleInput(): string;
    private _startApplication?;
    get startApplication(): boolean;
    set startApplication(value: boolean);
    resetStartApplication(): void;
    get startApplicationInput(): boolean | undefined;
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
    get versionId(): number;
    private _applicationConfiguration?;
    get applicationConfiguration(): Kinesisanalyticsv2ApplicationApplicationConfiguration[];
    set applicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfiguration[]);
    resetApplicationConfiguration(): void;
    get applicationConfigurationInput(): Kinesisanalyticsv2ApplicationApplicationConfiguration[] | undefined;
    private _cloudwatchLoggingOptions?;
    get cloudwatchLoggingOptions(): Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
    set cloudwatchLoggingOptions(value: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[]);
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
