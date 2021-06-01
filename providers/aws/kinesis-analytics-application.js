"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KinesisAnalyticsApplication = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_stream_arn: cdktf.stringToTerraform(struct.logStreamArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        count: cdktf.numberToTerraform(struct.count),
    };
}
function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lambda: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform)(struct.lambda),
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType),
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter),
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath),
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform)(struct.csv),
        json: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform)(struct.json),
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform)(struct.mappingParameters),
    };
}
function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform)(struct.recordColumns),
        record_format: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform)(struct.recordFormat),
    };
}
function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        starting_position: cdktf.stringToTerraform(struct.startingPosition),
    };
}
function kinesisAnalyticsApplicationInputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name_prefix: cdktf.stringToTerraform(struct.namePrefix),
        kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform)(struct.kinesisFirehose),
        kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisStreamToTerraform)(struct.kinesisStream),
        parallelism: cdktf.listMapper(kinesisAnalyticsApplicationInputsParallelismToTerraform)(struct.parallelism),
        processing_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform)(struct.processingConfiguration),
        schema: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaToTerraform)(struct.schema),
        starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform)(struct.startingPositionConfiguration),
    };
}
function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
    };
}
function kinesisAnalyticsApplicationOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform)(struct.kinesisFirehose),
        kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform)(struct.kinesisStream),
        lambda: cdktf.listMapper(kinesisAnalyticsApplicationOutputsLambdaToTerraform)(struct.lambda),
        schema: cdktf.listMapper(kinesisAnalyticsApplicationOutputsSchemaToTerraform)(struct.schema),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform)(struct.csv),
        json: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform)(struct.json),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform)(struct.mappingParameters),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform)(struct.recordColumns),
        record_format: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform)(struct.recordFormat),
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        s3: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform)(struct.s3),
        schema: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform)(struct.schema),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application}.
 */
class KinesisAnalyticsApplication extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_kinesis_analytics_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._code = config.code;
        this._description = config.description;
        this._name = config.name;
        this._startApplication = config.startApplication;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
        this._inputs = config.inputs;
        this._outputs = config.outputs;
        this._referenceDataSources = config.referenceDataSources;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get code() {
        return this.getStringAttribute('code');
    }
    set code(value) {
        this._code = value;
    }
    resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get codeInput() {
        return this._code;
    }
    // create_timestamp - computed: true, optional: false, required: false
    get createTimestamp() {
        return this.getStringAttribute('create_timestamp');
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_update_timestamp - computed: true, optional: false, required: false
    get lastUpdateTimestamp() {
        return this.getStringAttribute('last_update_timestamp');
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
    get startApplication() {
        return this.getBooleanAttribute('start_application');
    }
    set startApplication(value) {
        this._startApplication = value;
    }
    resetStartApplication() {
        this._startApplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startApplicationInput() {
        return this._startApplication;
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
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    set cloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions;
    }
    get inputs() {
        return this.interpolationForAttribute('inputs');
    }
    set inputs(value) {
        this._inputs = value;
    }
    resetInputs() {
        this._inputs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inputsInput() {
        return this._inputs;
    }
    get outputs() {
        return this.interpolationForAttribute('outputs');
    }
    set outputs(value) {
        this._outputs = value;
    }
    resetOutputs() {
        this._outputs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputsInput() {
        return this._outputs;
    }
    get referenceDataSources() {
        return this.interpolationForAttribute('reference_data_sources');
    }
    set referenceDataSources(value) {
        this._referenceDataSources = value;
    }
    resetReferenceDataSources() {
        this._referenceDataSources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get referenceDataSourcesInput() {
        return this._referenceDataSources;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            code: cdktf.stringToTerraform(this._code),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            start_application: cdktf.booleanToTerraform(this._startApplication),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cloudwatch_logging_options: cdktf.listMapper(kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
            inputs: cdktf.listMapper(kinesisAnalyticsApplicationInputsToTerraform)(this._inputs),
            outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
            reference_data_sources: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesToTerraform)(this._referenceDataSources),
        };
    }
}
exports.KinesisAnalyticsApplication = KinesisAnalyticsApplication;
_a = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplication[_a] = { fqn: "hashicorp_aws.KinesisAnalyticsApplication", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2luZXNpcy1hbmFseXRpY3MtYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJraW5lc2lzLWFuYWx5dGljcy1hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQWlFL0IsU0FBUyw4REFBOEQsQ0FBQyxNQUE0RDtJQUNsSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFhRCxTQUFTLDJEQUEyRCxDQUFDLE1BQXlEO0lBQzVILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNuRCxDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMseURBQXlELENBQUMsTUFBdUQ7SUFDeEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ25ELENB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QXFQQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9raW5lc2lzX2FuYWx5dGljc19hcHBsaWNhdGlvbi5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydEFwcGxpY2F0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5wdXRzPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3V0cHV0cz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWZlcmVuY2VEYXRhU291cmNlcz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nU3RyZWFtQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbG9nX3N0cmVhbV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtQXJuKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c0tpbmVzaXNGaXJlaG9zZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc0ZpcmVob3NlVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc0ZpcmVob3NlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc1N0cmVhbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUGFyYWxsZWxpc20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvdW50PzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQYXJhbGxlbGlzbVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1BhcmFsbGVsaXNtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvdW50KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uTGFtYmRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbkxhbWJkYVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uTGFtYmRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbkxhbWJkYVtdO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxhbWJkYTogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbkxhbWJkYVRvVGVycmFmb3JtKShzdHJ1Y3QhLmxhbWJkYSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRDb2x1bW5zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFwcGluZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNxbFR5cGU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkQ29sdW1uc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZENvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWFwcGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXBwaW5nKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHNxbF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3Yge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZENvbHVtbkRlbGltaXRlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZFJvd0RlbGltaXRlcjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0NzdlRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9jb2x1bW5fZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZENvbHVtbkRlbGltaXRlciksXG4gICAgcmVjb3JkX3Jvd19kZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93RGVsaW1pdGVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRSb3dQYXRoOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfcm93X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3N2PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqc29uPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uW107XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3N2OiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2VG9UZXJyYWZvcm0pKHN0cnVjdCEuY3N2KSxcbiAgICBqc29uOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmpzb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXBwaW5nUGFyYW1ldGVycz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzW107XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXBwaW5nX3BhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5tYXBwaW5nUGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkRW5jb2Rpbmc/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkQ29sdW1uczogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkQ29sdW1uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZEZvcm1hdDogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0W107XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRW5jb2RpbmcpLFxuICAgIHJlY29yZF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZENvbHVtbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWNvcmRDb2x1bW5zKSxcbiAgICByZWNvcmRfZm9ybWF0OiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlY29yZEZvcm1hdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnRpbmdQb3NpdGlvbj86IHN0cmluZztcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdGFydGluZ19wb3NpdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydGluZ1Bvc2l0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZVByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtpbmVzaXNGaXJlaG9zZT86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c0tpbmVzaXNGaXJlaG9zZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtpbmVzaXNTdHJlYW0/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYWxsZWxpc20/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQYXJhbGxlbGlzbVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2Nlc3NpbmdDb25maWd1cmF0aW9uPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWE6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25bXTtcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG5hbWVfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWVQcmVmaXgpLFxuICAgIGtpbmVzaXNfZmlyZWhvc2U6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc0ZpcmVob3NlVG9UZXJyYWZvcm0pKHN0cnVjdCEua2luZXNpc0ZpcmVob3NlKSxcbiAgICBraW5lc2lzX3N0cmVhbTogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtVG9UZXJyYWZvcm0pKHN0cnVjdCEua2luZXNpc1N0cmVhbSksXG4gICAgcGFyYWxsZWxpc206IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUGFyYWxsZWxpc21Ub1RlcnJhZm9ybSkoc3RydWN0IS5wYXJhbGxlbGlzbSksXG4gICAgcHJvY2Vzc2luZ19jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pLFxuICAgIHNjaGVtYTogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFUb1RlcnJhZm9ybSkoc3RydWN0IS5zY2hlbWEpLFxuICAgIHN0YXJ0aW5nX3Bvc2l0aW9uX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5zdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc0ZpcmVob3NlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc0ZpcmVob3NlVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNGaXJlaG9zZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNTdHJlYW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNLaW5lc2lzU3RyZWFtVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNTdHJlYW0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNMYW1iZGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNMYW1iZGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzTGFtYmRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzU2NoZW1hIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZEZvcm1hdFR5cGU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1NjaGVtYVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2Zvcm1hdF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBraW5lc2lzRmlyZWhvc2U/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc0ZpcmVob3NlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc1N0cmVhbT86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNLaW5lc2lzU3RyZWFtW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0xhbWJkYVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtYTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1NjaGVtYVtdO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIGtpbmVzaXNfZmlyZWhvc2U6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNGaXJlaG9zZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmtpbmVzaXNGaXJlaG9zZSksXG4gICAga2luZXNpc19zdHJlYW06IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNTdHJlYW1Ub1RlcnJhZm9ybSkoc3RydWN0IS5raW5lc2lzU3RyZWFtKSxcbiAgICBsYW1iZGE6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0xhbWJkYVRvVGVycmFmb3JtKShzdHJ1Y3QhLmxhbWJkYSksXG4gICAgc2NoZW1hOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNTY2hlbWFUb1RlcnJhZm9ybSkoc3RydWN0IS5zY2hlbWEpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldEFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGVLZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzUzNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1MzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QXJuKSxcbiAgICBmaWxlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlS2V5KSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkQ29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hcHBpbmc/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcWxUeXBlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkQ29sdW1uc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkQ29sdW1ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXBwaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmcpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc3FsX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3FsVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRDb2x1bW5EZWxpbWl0ZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRSb3dEZWxpbWl0ZXI6IHN0cmluZztcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0NzdlRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3YpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2NvbHVtbl9kZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkQ29sdW1uRGVsaW1pdGVyKSxcbiAgICByZWNvcmRfcm93X2RlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRSb3dEZWxpbWl0ZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkUm93UGF0aDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9yb3dfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRSb3dQYXRoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNzdj86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqc29uPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25bXTtcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3N2OiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZUb1RlcnJhZm9ybSkoc3RydWN0IS5jc3YpLFxuICAgIGpzb246IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5qc29uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXBwaW5nUGFyYW1ldGVycz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNbXTtcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXBwaW5nX3BhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLm1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZEVuY29kaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZENvbHVtbnM6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkQ29sdW1uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZEZvcm1hdDogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRbXTtcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRW5jb2RpbmcpLFxuICAgIHJlY29yZF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkQ29sdW1uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnJlY29yZENvbHVtbnMpLFxuICAgIHJlY29yZF9mb3JtYXQ6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWNvcmRGb3JtYXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWJsZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzMzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTM1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtYTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFbXTtcbn1cblxuZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhYmxlTmFtZSksXG4gICAgczM6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTM1RvVGVycmFmb3JtKShzdHJ1Y3QhLnMzKSxcbiAgICBzY2hlbWE6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFUb1RlcnJhZm9ybSkoc3RydWN0IS5zY2hlbWEpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19raW5lc2lzX2FuYWx5dGljc19hcHBsaWNhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb2RlID0gY29uZmlnLmNvZGU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3N0YXJ0QXBwbGljYXRpb24gPSBjb25maWcuc3RhcnRBcHBsaWNhdGlvbjtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IGNvbmZpZy5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gICAgdGhpcy5faW5wdXRzID0gY29uZmlnLmlucHV0cztcbiAgICB0aGlzLl9vdXRwdXRzID0gY29uZmlnLm91dHB1dHM7XG4gICAgdGhpcy5fcmVmZXJlbmNlRGF0YVNvdXJjZXMgPSBjb25maWcucmVmZXJlbmNlRGF0YVNvdXJjZXM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb2RlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fY29kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvZGUoKSB7XG4gICAgdGhpcy5fY29kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlXG4gIH1cblxuICAvLyBjcmVhdGVfdGltZXN0YW1wIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlVGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlX3RpbWVzdGFtcCcpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlX3RpbWVzdGFtcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVUaW1lc3RhbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZV90aW1lc3RhbXAnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gc3RhcnRfYXBwbGljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhcnRBcHBsaWNhdGlvbj86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgc3RhcnRBcHBsaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdGFydF9hcHBsaWNhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhcnRBcHBsaWNhdGlvbih2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhcnRBcHBsaWNhdGlvbigpIHtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydEFwcGxpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXBwbGljYXRpb25cbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zW107XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNbXSApIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zXG4gIH1cblxuICAvLyBpbnB1dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5wdXRzPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzW107XG4gIHB1YmxpYyBnZXQgaW5wdXRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2lucHV0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGlucHV0cyh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzW10gKSB7XG4gICAgdGhpcy5faW5wdXRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRzKCkge1xuICAgIHRoaXMuX2lucHV0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0c1xuICB9XG5cbiAgLy8gb3V0cHV0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRzPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1tdO1xuICBwdWJsaWMgZ2V0IG91dHB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dHB1dHModmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNbXSApIHtcbiAgICB0aGlzLl9vdXRwdXRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3V0cHV0cygpIHtcbiAgICB0aGlzLl9vdXRwdXRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdXRwdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dHNcbiAgfVxuXG4gIC8vIHJlZmVyZW5jZV9kYXRhX3NvdXJjZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVmZXJlbmNlRGF0YVNvdXJjZXM/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1tdO1xuICBwdWJsaWMgZ2V0IHJlZmVyZW5jZURhdGFTb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlZmVyZW5jZV9kYXRhX3NvdXJjZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZWZlcmVuY2VEYXRhU291cmNlcyh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNbXSApIHtcbiAgICB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZmVyZW5jZURhdGFTb3VyY2VzKCkge1xuICAgIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWZlcmVuY2VEYXRhU291cmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb2RlKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHN0YXJ0X2FwcGxpY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc3RhcnRBcHBsaWNhdGlvbiksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICAgICAgaW5wdXRzOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1RvVGVycmFmb3JtKSh0aGlzLl9pbnB1dHMpLFxuICAgICAgb3V0cHV0czogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzVG9UZXJyYWZvcm0pKHRoaXMuX291dHB1dHMpLFxuICAgICAgcmVmZXJlbmNlX2RhdGFfc291cmNlczogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1RvVGVycmFmb3JtKSh0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlcyksXG4gICAgfTtcbiAgfVxufVxuIl19