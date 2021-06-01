import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination KinesisFirehoseDeliveryStream#destination}.
     */
    readonly destination: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination_id KinesisFirehoseDeliveryStream#destination_id}.
     */
    readonly destinationId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags KinesisFirehoseDeliveryStream#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags_all KinesisFirehoseDeliveryStream#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}.
     */
    readonly versionId?: string;
    /**
     * elasticsearch_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#elasticsearch_configuration KinesisFirehoseDeliveryStream#elasticsearch_configuration}
     */
    readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
    /**
     * extended_s3_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
     */
    readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
    /**
     * http_endpoint_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
     */
    readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[];
    /**
     * kinesis_source_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
     */
    readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
    /**
     * redshift_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
     */
    readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
    /**
     * s3_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
     */
    readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
    /**
     * server_side_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
     */
    readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
    /**
     * splunk_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
     */
    readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}.
     */
    readonly parameterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}.
     */
    readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}.
     */
    readonly type: string;
    /**
     * parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
     */
    readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * processors block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
     */
    readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}.
     */
    readonly subnetIds: string[];
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}.
     */
    readonly bufferingInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}.
     */
    readonly bufferingSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}.
     */
    readonly clusterEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#domain_arn KinesisFirehoseDeliveryStream#domain_arn}.
     */
    readonly domainArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_name KinesisFirehoseDeliveryStream#index_name}.
     */
    readonly indexName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}.
     */
    readonly indexRotationPeriod?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}.
     */
    readonly retryDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}.
     */
    readonly s3BackupMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type_name KinesisFirehoseDeliveryStream#type_name}.
     */
    readonly typeName?: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions[];
    /**
     * processing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
     */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration[];
    /**
     * vpc_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
     */
    readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}.
     */
    readonly timestampFormats?: string[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#case_insensitive KinesisFirehoseDeliveryStream#case_insensitive}.
     */
    readonly caseInsensitive?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#column_to_json_key_mappings KinesisFirehoseDeliveryStream#column_to_json_key_mappings}.
     */
    readonly columnToJsonKeyMappings?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#convert_dots_in_json_keys_to_underscores KinesisFirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}.
     */
    readonly convertDotsInJsonKeysToUnderscores?: boolean;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
    /**
     * hive_json_ser_de block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
     */
    readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe[];
    /**
     * open_x_json_ser_de block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
     */
    readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
    /**
     * deserializer block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#deserializer KinesisFirehoseDeliveryStream#deserializer}
     */
    readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}.
     */
    readonly blockSizeBytes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_columns KinesisFirehoseDeliveryStream#bloom_filter_columns}.
     */
    readonly bloomFilterColumns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_false_positive_probability KinesisFirehoseDeliveryStream#bloom_filter_false_positive_probability}.
     */
    readonly bloomFilterFalsePositiveProbability?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}.
     */
    readonly compression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#dictionary_key_threshold KinesisFirehoseDeliveryStream#dictionary_key_threshold}.
     */
    readonly dictionaryKeyThreshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_padding KinesisFirehoseDeliveryStream#enable_padding}.
     */
    readonly enablePadding?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#format_version KinesisFirehoseDeliveryStream#format_version}.
     */
    readonly formatVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#padding_tolerance KinesisFirehoseDeliveryStream#padding_tolerance}.
     */
    readonly paddingTolerance?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#row_index_stride KinesisFirehoseDeliveryStream#row_index_stride}.
     */
    readonly rowIndexStride?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#stripe_size_bytes KinesisFirehoseDeliveryStream#stripe_size_bytes}.
     */
    readonly stripeSizeBytes?: number;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}.
     */
    readonly blockSizeBytes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}.
     */
    readonly compression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_dictionary_compression KinesisFirehoseDeliveryStream#enable_dictionary_compression}.
     */
    readonly enableDictionaryCompression?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#max_padding_bytes KinesisFirehoseDeliveryStream#max_padding_bytes}.
     */
    readonly maxPaddingBytes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#page_size_bytes KinesisFirehoseDeliveryStream#page_size_bytes}.
     */
    readonly pageSizeBytes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#writer_version KinesisFirehoseDeliveryStream#writer_version}.
     */
    readonly writerVersion?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
    /**
     * orc_ser_de block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
     */
    readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe[];
    /**
     * parquet_ser_de block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
     */
    readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
    /**
     * serializer block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#serializer KinesisFirehoseDeliveryStream#serializer}
     */
    readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#catalog_id KinesisFirehoseDeliveryStream#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#database_name KinesisFirehoseDeliveryStream#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#region KinesisFirehoseDeliveryStream#region}.
     */
    readonly region?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#table_name KinesisFirehoseDeliveryStream#table_name}.
     */
    readonly tableName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}.
     */
    readonly versionId?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * input_format_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#input_format_configuration KinesisFirehoseDeliveryStream#input_format_configuration}
     */
    readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration[];
    /**
     * output_format_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
     */
    readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration[];
    /**
     * schema_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
     */
    readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}.
     */
    readonly parameterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}.
     */
    readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}.
     */
    readonly type: string;
    /**
     * parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
     */
    readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * processors block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
     */
    readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}.
     */
    readonly bufferInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}.
     */
    readonly bufferSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}.
     */
    readonly compressionFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
}
export interface KinesisFirehoseDeliveryStreamExtendedS3Configuration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}.
     */
    readonly bufferInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}.
     */
    readonly bufferSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}.
     */
    readonly compressionFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}.
     */
    readonly errorOutputPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}.
     */
    readonly s3BackupMode?: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions[];
    /**
     * data_format_conversion_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
     */
    readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration[];
    /**
     * processing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
     */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration[];
    /**
     * s3_backup_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
     */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}.
     */
    readonly parameterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}.
     */
    readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}.
     */
    readonly type: string;
    /**
     * parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
     */
    readonly parameters?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * processors block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
     */
    readonly processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#value KinesisFirehoseDeliveryStream#value}.
     */
    readonly value: string;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#content_encoding KinesisFirehoseDeliveryStream#content_encoding}.
     */
    readonly contentEncoding?: string;
    /**
     * common_attributes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#common_attributes KinesisFirehoseDeliveryStream#common_attributes}
     */
    readonly commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[];
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#access_key KinesisFirehoseDeliveryStream#access_key}.
     */
    readonly accessKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}.
     */
    readonly bufferingInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}.
     */
    readonly bufferingSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}.
     */
    readonly retryDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}.
     */
    readonly s3BackupMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#url KinesisFirehoseDeliveryStream#url}.
     */
    readonly url: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions[];
    /**
     * processing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
     */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration[];
    /**
     * request_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
     */
    readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_stream_arn KinesisFirehoseDeliveryStream#kinesis_stream_arn}.
     */
    readonly kinesisStreamArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}.
     */
    readonly parameterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}.
     */
    readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}.
     */
    readonly type: string;
    /**
     * parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
     */
    readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * processors block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
     */
    readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}.
     */
    readonly bufferInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}.
     */
    readonly bufferSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}.
     */
    readonly compressionFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_jdbcurl KinesisFirehoseDeliveryStream#cluster_jdbcurl}.
     */
    readonly clusterJdbcurl: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#copy_options KinesisFirehoseDeliveryStream#copy_options}.
     */
    readonly copyOptions?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_columns KinesisFirehoseDeliveryStream#data_table_columns}.
     */
    readonly dataTableColumns?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_name KinesisFirehoseDeliveryStream#data_table_name}.
     */
    readonly dataTableName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#password KinesisFirehoseDeliveryStream#password}.
     */
    readonly password: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}.
     */
    readonly retryDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}.
     */
    readonly s3BackupMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#username KinesisFirehoseDeliveryStream#username}.
     */
    readonly username: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions[];
    /**
     * processing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
     */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration[];
    /**
     * s3_backup_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
     */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration[];
}
export interface KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamS3Configuration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}.
     */
    readonly bufferInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}.
     */
    readonly bufferSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}.
     */
    readonly compressionFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}.
     */
    readonly roleArn: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions[];
}
export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_arn KinesisFirehoseDeliveryStream#key_arn}.
     */
    readonly keyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_type KinesisFirehoseDeliveryStream#key_type}.
     */
    readonly keyType?: string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}.
     */
    readonly logGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}.
     */
    readonly logStreamName?: string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}.
     */
    readonly parameterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}.
     */
    readonly parameterValue: string;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}.
     */
    readonly type: string;
    /**
     * parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
     */
    readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[];
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * processors block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
     */
    readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
}
export interface KinesisFirehoseDeliveryStreamSplunkConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_acknowledgment_timeout KinesisFirehoseDeliveryStream#hec_acknowledgment_timeout}.
     */
    readonly hecAcknowledgmentTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint KinesisFirehoseDeliveryStream#hec_endpoint}.
     */
    readonly hecEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint_type KinesisFirehoseDeliveryStream#hec_endpoint_type}.
     */
    readonly hecEndpointType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_token KinesisFirehoseDeliveryStream#hec_token}.
     */
    readonly hecToken: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}.
     */
    readonly retryDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}.
     */
    readonly s3BackupMode?: string;
    /**
     * cloudwatch_logging_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
     */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions[];
    /**
     * processing_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
     */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}.
 */
export declare class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: KinesisFirehoseDeliveryStreamConfig);
    get arn(): string;
    private _destination;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string;
    private _destinationId?;
    get destinationId(): string;
    set destinationId(value: string);
    resetDestinationId(): void;
    get destinationIdInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    private _elasticsearchConfiguration?;
    get elasticsearchConfiguration(): KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
    set elasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[]);
    resetElasticsearchConfiguration(): void;
    get elasticsearchConfigurationInput(): KinesisFirehoseDeliveryStreamElasticsearchConfiguration[] | undefined;
    private _extendedS3Configuration?;
    get extendedS3Configuration(): KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
    set extendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration[]);
    resetExtendedS3Configuration(): void;
    get extendedS3ConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3Configuration[] | undefined;
    private _httpEndpointConfiguration?;
    get httpEndpointConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[];
    set httpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[]);
    resetHttpEndpointConfiguration(): void;
    get httpEndpointConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[] | undefined;
    private _kinesisSourceConfiguration?;
    get kinesisSourceConfiguration(): KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
    set kinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[]);
    resetKinesisSourceConfiguration(): void;
    get kinesisSourceConfigurationInput(): KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[] | undefined;
    private _redshiftConfiguration?;
    get redshiftConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
    set redshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration[]);
    resetRedshiftConfiguration(): void;
    get redshiftConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfiguration[] | undefined;
    private _s3Configuration?;
    get s3Configuration(): KinesisFirehoseDeliveryStreamS3Configuration[];
    set s3Configuration(value: KinesisFirehoseDeliveryStreamS3Configuration[]);
    resetS3Configuration(): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamS3Configuration[] | undefined;
    private _serverSideEncryption?;
    get serverSideEncryption(): KinesisFirehoseDeliveryStreamServerSideEncryption[];
    set serverSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption[]);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): KinesisFirehoseDeliveryStreamServerSideEncryption[] | undefined;
    private _splunkConfiguration?;
    get splunkConfiguration(): KinesisFirehoseDeliveryStreamSplunkConfiguration[];
    set splunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration[]);
    resetSplunkConfiguration(): void;
    get splunkConfigurationInput(): KinesisFirehoseDeliveryStreamSplunkConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
