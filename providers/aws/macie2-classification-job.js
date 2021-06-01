"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macie2ClassificationJob = exports.Macie2ClassificationJobUserPausedDetails = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class Macie2ClassificationJobUserPausedDetails extends cdktf.ComplexComputedList {
    // job_expires_at - computed: true, optional: false, required: false
    get jobExpiresAt() {
        return this.getStringAttribute('job_expires_at');
    }
    // job_imminent_expiration_health_event_arn - computed: true, optional: false, required: false
    get jobImminentExpirationHealthEventArn() {
        return this.getStringAttribute('job_imminent_expiration_health_event_arn');
    }
    // job_paused_at - computed: true, optional: false, required: false
    get jobPausedAt() {
        return this.getStringAttribute('job_paused_at');
    }
}
exports.Macie2ClassificationJobUserPausedDetails = Macie2ClassificationJobUserPausedDetails;
_a = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJobUserPausedDetails[_a] = { fqn: "hashicorp_aws.Macie2ClassificationJobUserPausedDetails", version: "0.0.0" };
function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct.buckets),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform)(struct.tagValues),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform)(struct.simpleScopeTerm),
        tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform)(struct.tagScopeTerm),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform)(struct.and),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform)(struct.tagValues),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform)(struct.simpleScopeTerm),
        tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform)(struct.tagScopeTerm),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform)(struct.and),
    };
}
function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        excludes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform)(struct.excludes),
        includes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform)(struct.includes),
    };
}
function macie2ClassificationJobS3JobDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform)(struct.bucketDefinitions),
        scoping: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingToTerraform)(struct.scoping),
    };
}
function macie2ClassificationJobScheduleFrequencyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        daily_schedule: cdktf.booleanToTerraform(struct.dailySchedule),
        monthly_schedule: cdktf.numberToTerraform(struct.monthlySchedule),
        weekly_schedule: cdktf.stringToTerraform(struct.weeklySchedule),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job}.
 */
class Macie2ClassificationJob extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_macie2_classification_job',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._customDataIdentifierIds = config.customDataIdentifierIds;
        this._description = config.description;
        this._initialRun = config.initialRun;
        this._jobStatus = config.jobStatus;
        this._jobType = config.jobType;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._samplingPercentage = config.samplingPercentage;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._s3JobDefinition = config.s3JobDefinition;
        this._scheduleFrequency = config.scheduleFrequency;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    get customDataIdentifierIds() {
        return this.getListAttribute('custom_data_identifier_ids');
    }
    set customDataIdentifierIds(value) {
        this._customDataIdentifierIds = value;
    }
    resetCustomDataIdentifierIds() {
        this._customDataIdentifierIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customDataIdentifierIdsInput() {
        return this._customDataIdentifierIds;
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
    get initialRun() {
        return this.getBooleanAttribute('initial_run');
    }
    set initialRun(value) {
        this._initialRun = value;
    }
    resetInitialRun() {
        this._initialRun = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initialRunInput() {
        return this._initialRun;
    }
    // job_arn - computed: true, optional: false, required: false
    get jobArn() {
        return this.getStringAttribute('job_arn');
    }
    // job_id - computed: true, optional: false, required: false
    get jobId() {
        return this.getStringAttribute('job_id');
    }
    get jobStatus() {
        return this.getStringAttribute('job_status');
    }
    set jobStatus(value) {
        this._jobStatus = value;
    }
    resetJobStatus() {
        this._jobStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jobStatusInput() {
        return this._jobStatus;
    }
    get jobType() {
        return this.getStringAttribute('job_type');
    }
    set jobType(value) {
        this._jobType = value;
    }
    // Temporarily expose input value. Use with caution.
    get jobTypeInput() {
        return this._jobType;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    set namePrefix(value) {
        this._namePrefix = value;
    }
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namePrefixInput() {
        return this._namePrefix;
    }
    get samplingPercentage() {
        return this.getNumberAttribute('sampling_percentage');
    }
    set samplingPercentage(value) {
        this._samplingPercentage = value;
    }
    resetSamplingPercentage() {
        this._samplingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get samplingPercentageInput() {
        return this._samplingPercentage;
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
    // user_paused_details - computed: true, optional: false, required: false
    userPausedDetails(index) {
        return new Macie2ClassificationJobUserPausedDetails(this, 'user_paused_details', index);
    }
    get s3JobDefinition() {
        return this.interpolationForAttribute('s3_job_definition');
    }
    set s3JobDefinition(value) {
        this._s3JobDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    get s3JobDefinitionInput() {
        return this._s3JobDefinition;
    }
    get scheduleFrequency() {
        return this.interpolationForAttribute('schedule_frequency');
    }
    set scheduleFrequency(value) {
        this._scheduleFrequency = value;
    }
    resetScheduleFrequency() {
        this._scheduleFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scheduleFrequencyInput() {
        return this._scheduleFrequency;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            custom_data_identifier_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customDataIdentifierIds),
            description: cdktf.stringToTerraform(this._description),
            initial_run: cdktf.booleanToTerraform(this._initialRun),
            job_status: cdktf.stringToTerraform(this._jobStatus),
            job_type: cdktf.stringToTerraform(this._jobType),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            s3_job_definition: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionToTerraform)(this._s3JobDefinition),
            schedule_frequency: cdktf.listMapper(macie2ClassificationJobScheduleFrequencyToTerraform)(this._scheduleFrequency),
        };
    }
}
exports.Macie2ClassificationJob = Macie2ClassificationJob;
_b = JSII_RTTI_SYMBOL_1;
Macie2ClassificationJob[_b] = { fqn: "hashicorp_aws.Macie2ClassificationJob", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFjaWUyLWNsYXNzaWZpY2F0aW9uLWpvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hY2llMi1jbGFzc2lmaWNhdGlvbi1qb2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUEwRC9CLE1BQWEsd0NBQXlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVyRixvRUFBb0U7SUFDcEUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDhGQUE4RjtJQUM5RixJQUFXLG1DQUFtQztRQUM1QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O0FBZkgsNEZBZ0JDOzs7QUFZRCxTQUFTLGtFQUFrRSxDQUFDLE1BQWdFO0lBQzFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFpQkQsU0FBUyxrRkFBa0YsQ0FBQyxNQUFnRjtJQUMxSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENB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LElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3RyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG1EQUFtRCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ25ILENBQUM7SUFDSixDQUFDOztBQWhSSCwwREFpUkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYi5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tRGF0YUlkZW50aWZpZXJJZHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluaXRpYWxSdW4/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgam9iU3RhdHVzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqb2JUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2FtcGxpbmdQZXJjZW50YWdlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0pvYkRlZmluaXRpb246IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVkdWxlRnJlcXVlbmN5PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeVtdO1xufVxuZXhwb3J0IGNsYXNzIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iVXNlclBhdXNlZERldGFpbHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBqb2JfZXhwaXJlc19hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGpvYkV4cGlyZXNBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9leHBpcmVzX2F0Jyk7XG4gIH1cblxuICAvLyBqb2JfaW1taW5lbnRfZXhwaXJhdGlvbl9oZWFsdGhfZXZlbnRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iSW1taW5lbnRFeHBpcmF0aW9uSGVhbHRoRXZlbnRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfaW1taW5lbnRfZXhwaXJhdGlvbl9oZWFsdGhfZXZlbnRfYXJuJyk7XG4gIH1cblxuICAvLyBqb2JfcGF1c2VkX2F0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgam9iUGF1c2VkQXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfcGF1c2VkX2F0Jyk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldHM6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY291bnRJZCksXG4gICAgYnVja2V0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5idWNrZXRzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmF0b3I/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlcz86IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyYXRvciksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRhZ1Njb3BlVGVybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJhdG9yPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ1ZhbHVlcz86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzW107XG59XG5cbmZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29tcGFyYXRvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wYXJhdG9yKSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB0YXJnZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0KSxcbiAgICB0YWdfdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFnVmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzQW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2ltcGxlU2NvcGVUZXJtPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnU2NvcGVUZXJtPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1bXTtcbn1cblxuZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzaW1wbGVfc2NvcGVfdGVybTogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybVRvVGVycmFmb3JtKShzdHJ1Y3QhLnNpbXBsZVNjb3BlVGVybSksXG4gICAgdGFnX3Njb3BlX3Rlcm06IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXNBbmRUYWdTY29wZVRlcm1Ub1RlcnJhZm9ybSkoc3RydWN0IS50YWdTY29wZVRlcm0pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nRXhjbHVkZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbmQ/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFtdO1xufVxuXG5mdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0V4Y2x1ZGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFuZDogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc0FuZFRvVGVycmFmb3JtKShzdHJ1Y3QhLmFuZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wYXJhdG9yPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZXM/OiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFNpbXBsZVNjb3BlVGVybSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmF0b3IpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVGFnVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm1UYWdWYWx1ZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUYWdTY29wZVRlcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcGFyYXRvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdWYWx1ZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1tdO1xufVxuXG5mdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyYXRvciksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdGFyZ2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldCksXG4gICAgdGFnX3ZhbHVlczogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZFRhZ1Njb3BlVGVybVRhZ1ZhbHVlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ1ZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc0FuZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpbXBsZVNjb3BlVGVybT86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kU2ltcGxlU2NvcGVUZXJtW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ1Njb3BlVGVybT86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtW107XG59XG5cbmZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2ltcGxlX3Njb3BlX3Rlcm06IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRTaW1wbGVTY29wZVRlcm1Ub1RlcnJhZm9ybSkoc3RydWN0IS5zaW1wbGVTY29wZVRlcm0pLFxuICAgIHRhZ19zY29wZV90ZXJtOiBjZGt0Zi5saXN0TWFwcGVyKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzQW5kVGFnU2NvcGVUZXJtVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFnU2NvcGVUZXJtKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYW5kPzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRbXTtcbn1cblxuZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbmQ6IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nSW5jbHVkZXNBbmRUb1RlcnJhZm9ybSkoc3RydWN0IS5hbmQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25TY29waW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhjbHVkZXM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlcz86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ0luY2x1ZGVzW107XG59XG5cbmZ1bmN0aW9uIG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ1RvVGVycmFmb3JtKHN0cnVjdD86IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleGNsdWRlczogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdFeGNsdWRlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4Y2x1ZGVzKSxcbiAgICBpbmNsdWRlczogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdJbmNsdWRlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluY2x1ZGVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0RGVmaW5pdGlvbnM/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbkJ1Y2tldERlZmluaXRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjb3Bpbmc/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvblNjb3BpbmdbXTtcbn1cblxuZnVuY3Rpb24gbWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlMzSm9iRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfZGVmaW5pdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25CdWNrZXREZWZpbml0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmJ1Y2tldERlZmluaXRpb25zKSxcbiAgICBzY29waW5nOiBjZGt0Zi5saXN0TWFwcGVyKG1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uU2NvcGluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNjb3BpbmcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhaWx5U2NoZWR1bGU/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9udGhseVNjaGVkdWxlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlZWtseVNjaGVkdWxlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5VG9UZXJyYWZvcm0oc3RydWN0PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYWlseV9zY2hlZHVsZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGFpbHlTY2hlZHVsZSksXG4gICAgbW9udGhseV9zY2hlZHVsZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tb250aGx5U2NoZWR1bGUpLFxuICAgIHdlZWtseV9zY2hlZHVsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53ZWVrbHlTY2hlZHVsZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2IgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbWFjaWUyX2NsYXNzaWZpY2F0aW9uX2pvYicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jdXN0b21EYXRhSWRlbnRpZmllcklkcyA9IGNvbmZpZy5jdXN0b21EYXRhSWRlbnRpZmllcklkcztcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9pbml0aWFsUnVuID0gY29uZmlnLmluaXRpYWxSdW47XG4gICAgdGhpcy5fam9iU3RhdHVzID0gY29uZmlnLmpvYlN0YXR1cztcbiAgICB0aGlzLl9qb2JUeXBlID0gY29uZmlnLmpvYlR5cGU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSBjb25maWcubmFtZVByZWZpeDtcbiAgICB0aGlzLl9zYW1wbGluZ1BlcmNlbnRhZ2UgPSBjb25maWcuc2FtcGxpbmdQZXJjZW50YWdlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fczNKb2JEZWZpbml0aW9uID0gY29uZmlnLnMzSm9iRGVmaW5pdGlvbjtcbiAgICB0aGlzLl9zY2hlZHVsZUZyZXF1ZW5jeSA9IGNvbmZpZy5zY2hlZHVsZUZyZXF1ZW5jeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY3JlYXRlZF9hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfYXQnKTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9kYXRhX2lkZW50aWZpZXJfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tRGF0YUlkZW50aWZpZXJJZHM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBjdXN0b21EYXRhSWRlbnRpZmllcklkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjdXN0b21fZGF0YV9pZGVudGlmaWVyX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tRGF0YUlkZW50aWZpZXJJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY3VzdG9tRGF0YUlkZW50aWZpZXJJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21EYXRhSWRlbnRpZmllcklkcygpIHtcbiAgICB0aGlzLl9jdXN0b21EYXRhSWRlbnRpZmllcklkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tRGF0YUlkZW50aWZpZXJJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRGF0YUlkZW50aWZpZXJJZHNcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5pdGlhbF9ydW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5pdGlhbFJ1bj86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgaW5pdGlhbFJ1bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbml0aWFsX3J1bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5pdGlhbFJ1bih2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9pbml0aWFsUnVuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5pdGlhbFJ1bigpIHtcbiAgICB0aGlzLl9pbml0aWFsUnVuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbml0aWFsUnVuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxSdW5cbiAgfVxuXG4gIC8vIGpvYl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfYXJuJyk7XG4gIH1cblxuICAvLyBqb2JfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBqb2JJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9pZCcpO1xuICB9XG5cbiAgLy8gam9iX3N0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2pvYlN0YXR1cz86IHN0cmluZztcbiAgcHVibGljIGdldCBqb2JTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2Jfc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBqb2JTdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2pvYlN0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEpvYlN0YXR1cygpIHtcbiAgICB0aGlzLl9qb2JTdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpvYlN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qb2JTdGF0dXNcbiAgfVxuXG4gIC8vIGpvYl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2pvYlR5cGU6IHN0cmluZztcbiAgcHVibGljIGdldCBqb2JUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnam9iX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGpvYlR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2pvYlR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgam9iVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qb2JUeXBlXG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBuYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZVByZWZpeCgpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVQcmVmaXhcbiAgfVxuXG4gIC8vIHNhbXBsaW5nX3BlcmNlbnRhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYW1wbGluZ1BlcmNlbnRhZ2U/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgc2FtcGxpbmdQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2FtcGxpbmdfcGVyY2VudGFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2FtcGxpbmdQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zYW1wbGluZ1BlcmNlbnRhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYW1wbGluZ1BlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fc2FtcGxpbmdQZXJjZW50YWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYW1wbGluZ1BlcmNlbnRhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxpbmdQZXJjZW50YWdlXG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTsgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbFxuICB9XG5cbiAgLy8gdXNlcl9wYXVzZWRfZGV0YWlscyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgdXNlclBhdXNlZERldGFpbHMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JVc2VyUGF1c2VkRGV0YWlscyh0aGlzLCAndXNlcl9wYXVzZWRfZGV0YWlscycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHMzX2pvYl9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzSm9iRGVmaW5pdGlvbjogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25bXTtcbiAgcHVibGljIGdldCBzM0pvYkRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfam9iX2RlZmluaXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzM0pvYkRlZmluaXRpb24odmFsdWU6IE1hY2llMkNsYXNzaWZpY2F0aW9uSm9iUzNKb2JEZWZpbml0aW9uW10pIHtcbiAgICB0aGlzLl9zM0pvYkRlZmluaXRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNKb2JEZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzSm9iRGVmaW5pdGlvblxuICB9XG5cbiAgLy8gc2NoZWR1bGVfZnJlcXVlbmN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjaGVkdWxlRnJlcXVlbmN5PzogTWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTY2hlZHVsZUZyZXF1ZW5jeVtdO1xuICBwdWJsaWMgZ2V0IHNjaGVkdWxlRnJlcXVlbmN5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NjaGVkdWxlX2ZyZXF1ZW5jeScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjaGVkdWxlRnJlcXVlbmN5KHZhbHVlOiBNYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5W10gKSB7XG4gICAgdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlZHVsZUZyZXF1ZW5jeSgpIHtcbiAgICB0aGlzLl9zY2hlZHVsZUZyZXF1ZW5jeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGVGcmVxdWVuY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVGcmVxdWVuY3lcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VzdG9tX2RhdGFfaWRlbnRpZmllcl9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbURhdGFJZGVudGlmaWVySWRzKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBpbml0aWFsX3J1bjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2luaXRpYWxSdW4pLFxuICAgICAgam9iX3N0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fam9iU3RhdHVzKSxcbiAgICAgIGpvYl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9qb2JUeXBlKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgc2FtcGxpbmdfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fc2FtcGxpbmdQZXJjZW50YWdlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgczNfam9iX2RlZmluaXRpb246IGNka3RmLmxpc3RNYXBwZXIobWFjaWUyQ2xhc3NpZmljYXRpb25Kb2JTM0pvYkRlZmluaXRpb25Ub1RlcnJhZm9ybSkodGhpcy5fczNKb2JEZWZpbml0aW9uKSxcbiAgICAgIHNjaGVkdWxlX2ZyZXF1ZW5jeTogY2RrdGYubGlzdE1hcHBlcihtYWNpZTJDbGFzc2lmaWNhdGlvbkpvYlNjaGVkdWxlRnJlcXVlbmN5VG9UZXJyYWZvcm0pKHRoaXMuX3NjaGVkdWxlRnJlcXVlbmN5KSxcbiAgICB9O1xuICB9XG59XG4iXX0=