import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisAnalyticsApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#code KinesisAnalyticsApplication#code}.
     */
    readonly code?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#description KinesisAnalyticsApplication#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#start_application KinesisAnalyticsApplication#start_application}.
     */
    readonly startApplication?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags KinesisAnalyticsApplication#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags_all KinesisAnalyticsApplication#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
    /**
     * inputs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#inputs KinesisAnalyticsApplication#inputs}
     */
    readonly inputs?: KinesisAnalyticsApplicationInputs[];
    /**
     * outputs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#outputs KinesisAnalyticsApplication#outputs}
     */
    readonly outputs?: KinesisAnalyticsApplicationOutputs[];
    /**
     * reference_data_sources block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}
     */
    readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}.
     */
    readonly logStreamArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsKinesisStream {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsParallelism {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#count KinesisAnalyticsApplication#count}.
     */
    readonly count?: number;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
    /**
     * lambda block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
     */
    readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda[];
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}.
     */
    readonly mapping?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}.
     */
    readonly sqlType: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.
     */
    readonly recordColumnDelimiter: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.
     */
    readonly recordRowDelimiter: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}.
     */
    readonly recordRowPath: string;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
    /**
     * csv block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
     */
    readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv[];
    /**
     * json block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
     */
    readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson[];
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
    /**
     * mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
     */
    readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters[];
}
export interface KinesisAnalyticsApplicationInputsSchema {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}.
     */
    readonly recordEncoding?: string;
    /**
     * record_columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
     */
    readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
    /**
     * record_format block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
     */
    readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat[];
}
export interface KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position KinesisAnalyticsApplication#starting_position}.
     */
    readonly startingPosition?: string;
}
export interface KinesisAnalyticsApplicationInputs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name_prefix KinesisAnalyticsApplication#name_prefix}.
     */
    readonly namePrefix: string;
    /**
     * kinesis_firehose block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
     */
    readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose[];
    /**
     * kinesis_stream block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
     */
    readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream[];
    /**
     * parallelism block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#parallelism KinesisAnalyticsApplication#parallelism}
     */
    readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism[];
    /**
     * processing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#processing_configuration KinesisAnalyticsApplication#processing_configuration}
     */
    readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration[];
    /**
     * schema block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
     */
    readonly schema: KinesisAnalyticsApplicationInputsSchema[];
    /**
     * starting_position_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
     */
    readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
}
export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsKinesisStream {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsLambda {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}.
     */
    readonly resourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationOutputsSchema {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format_type KinesisAnalyticsApplication#record_format_type}.
     */
    readonly recordFormatType: string;
}
export interface KinesisAnalyticsApplicationOutputs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}.
     */
    readonly name: string;
    /**
     * kinesis_firehose block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
     */
    readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose[];
    /**
     * kinesis_stream block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
     */
    readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream[];
    /**
     * lambda block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
     */
    readonly lambda?: KinesisAnalyticsApplicationOutputsLambda[];
    /**
     * schema block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
     */
    readonly schema: KinesisAnalyticsApplicationOutputsSchema[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#bucket_arn KinesisAnalyticsApplication#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#file_key KinesisAnalyticsApplication#file_key}.
     */
    readonly fileKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}.
     */
    readonly mapping?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}.
     */
    readonly sqlType: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.
     */
    readonly recordColumnDelimiter: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.
     */
    readonly recordRowDelimiter: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}.
     */
    readonly recordRowPath: string;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
    /**
     * csv block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
     */
    readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv[];
    /**
     * json block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
     */
    readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
    /**
     * mapping_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
     */
    readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters[];
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}.
     */
    readonly recordEncoding?: string;
    /**
     * record_columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
     */
    readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
    /**
     * record_format block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
     */
    readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat[];
}
export interface KinesisAnalyticsApplicationReferenceDataSources {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#table_name KinesisAnalyticsApplication#table_name}.
     */
    readonly tableName: string;
    /**
     * s3 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#s3 KinesisAnalyticsApplication#s3}
     */
    readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3[];
    /**
     * schema block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
     */
    readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application}.
 */
export declare class KinesisAnalyticsApplication extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig);
    get arn(): string;
    private _code?;
    get code(): string;
    set code(value: string);
    resetCode(): void;
    get codeInput(): string | undefined;
    get createTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lastUpdateTimestamp(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    get version(): number;
    private _cloudwatchLoggingOptions?;
    get cloudwatchLoggingOptions(): KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
    set cloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions[]);
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisAnalyticsApplicationCloudwatchLoggingOptions[] | undefined;
    private _inputs?;
    get inputs(): KinesisAnalyticsApplicationInputs[];
    set inputs(value: KinesisAnalyticsApplicationInputs[]);
    resetInputs(): void;
    get inputsInput(): KinesisAnalyticsApplicationInputs[] | undefined;
    private _outputs?;
    get outputs(): KinesisAnalyticsApplicationOutputs[];
    set outputs(value: KinesisAnalyticsApplicationOutputs[]);
    resetOutputs(): void;
    get outputsInput(): KinesisAnalyticsApplicationOutputs[] | undefined;
    private _referenceDataSources?;
    get referenceDataSources(): KinesisAnalyticsApplicationReferenceDataSources[];
    set referenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources[]);
    resetReferenceDataSources(): void;
    get referenceDataSourcesInput(): KinesisAnalyticsApplicationReferenceDataSources[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
