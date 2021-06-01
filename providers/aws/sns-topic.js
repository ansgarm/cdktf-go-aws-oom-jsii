"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsTopic = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}.
 */
class SnsTopic extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_topic',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
        this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
        this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._deliveryPolicy = config.deliveryPolicy;
        this._displayName = config.displayName;
        this._fifoTopic = config.fifoTopic;
        this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
        this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
        this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
        this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
        this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._policy = config.policy;
        this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
        this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
        this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    get applicationFailureFeedbackRoleArn() {
        return this.getStringAttribute('application_failure_feedback_role_arn');
    }
    set applicationFailureFeedbackRoleArn(value) {
        this._applicationFailureFeedbackRoleArn = value;
    }
    resetApplicationFailureFeedbackRoleArn() {
        this._applicationFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationFailureFeedbackRoleArnInput() {
        return this._applicationFailureFeedbackRoleArn;
    }
    get applicationSuccessFeedbackRoleArn() {
        return this.getStringAttribute('application_success_feedback_role_arn');
    }
    set applicationSuccessFeedbackRoleArn(value) {
        this._applicationSuccessFeedbackRoleArn = value;
    }
    resetApplicationSuccessFeedbackRoleArn() {
        this._applicationSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSuccessFeedbackRoleArnInput() {
        return this._applicationSuccessFeedbackRoleArn;
    }
    get applicationSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('application_success_feedback_sample_rate');
    }
    set applicationSuccessFeedbackSampleRate(value) {
        this._applicationSuccessFeedbackSampleRate = value;
    }
    resetApplicationSuccessFeedbackSampleRate() {
        this._applicationSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationSuccessFeedbackSampleRateInput() {
        return this._applicationSuccessFeedbackSampleRate;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get contentBasedDeduplication() {
        return this.getBooleanAttribute('content_based_deduplication');
    }
    set contentBasedDeduplication(value) {
        this._contentBasedDeduplication = value;
    }
    resetContentBasedDeduplication() {
        this._contentBasedDeduplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentBasedDeduplicationInput() {
        return this._contentBasedDeduplication;
    }
    get deliveryPolicy() {
        return this.getStringAttribute('delivery_policy');
    }
    set deliveryPolicy(value) {
        this._deliveryPolicy = value;
    }
    resetDeliveryPolicy() {
        this._deliveryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryPolicyInput() {
        return this._deliveryPolicy;
    }
    get displayName() {
        return this.getStringAttribute('display_name');
    }
    set displayName(value) {
        this._displayName = value;
    }
    resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get displayNameInput() {
        return this._displayName;
    }
    get fifoTopic() {
        return this.getBooleanAttribute('fifo_topic');
    }
    set fifoTopic(value) {
        this._fifoTopic = value;
    }
    resetFifoTopic() {
        this._fifoTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fifoTopicInput() {
        return this._fifoTopic;
    }
    get httpFailureFeedbackRoleArn() {
        return this.getStringAttribute('http_failure_feedback_role_arn');
    }
    set httpFailureFeedbackRoleArn(value) {
        this._httpFailureFeedbackRoleArn = value;
    }
    resetHttpFailureFeedbackRoleArn() {
        this._httpFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpFailureFeedbackRoleArnInput() {
        return this._httpFailureFeedbackRoleArn;
    }
    get httpSuccessFeedbackRoleArn() {
        return this.getStringAttribute('http_success_feedback_role_arn');
    }
    set httpSuccessFeedbackRoleArn(value) {
        this._httpSuccessFeedbackRoleArn = value;
    }
    resetHttpSuccessFeedbackRoleArn() {
        this._httpSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpSuccessFeedbackRoleArnInput() {
        return this._httpSuccessFeedbackRoleArn;
    }
    get httpSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('http_success_feedback_sample_rate');
    }
    set httpSuccessFeedbackSampleRate(value) {
        this._httpSuccessFeedbackSampleRate = value;
    }
    resetHttpSuccessFeedbackSampleRate() {
        this._httpSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpSuccessFeedbackSampleRateInput() {
        return this._httpSuccessFeedbackSampleRate;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
    set kmsMasterKeyId(value) {
        this._kmsMasterKeyId = value;
    }
    resetKmsMasterKeyId() {
        this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsMasterKeyIdInput() {
        return this._kmsMasterKeyId;
    }
    get lambdaFailureFeedbackRoleArn() {
        return this.getStringAttribute('lambda_failure_feedback_role_arn');
    }
    set lambdaFailureFeedbackRoleArn(value) {
        this._lambdaFailureFeedbackRoleArn = value;
    }
    resetLambdaFailureFeedbackRoleArn() {
        this._lambdaFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaFailureFeedbackRoleArnInput() {
        return this._lambdaFailureFeedbackRoleArn;
    }
    get lambdaSuccessFeedbackRoleArn() {
        return this.getStringAttribute('lambda_success_feedback_role_arn');
    }
    set lambdaSuccessFeedbackRoleArn(value) {
        this._lambdaSuccessFeedbackRoleArn = value;
    }
    resetLambdaSuccessFeedbackRoleArn() {
        this._lambdaSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaSuccessFeedbackRoleArnInput() {
        return this._lambdaSuccessFeedbackRoleArn;
    }
    get lambdaSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('lambda_success_feedback_sample_rate');
    }
    set lambdaSuccessFeedbackSampleRate(value) {
        this._lambdaSuccessFeedbackSampleRate = value;
    }
    resetLambdaSuccessFeedbackSampleRate() {
        this._lambdaSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaSuccessFeedbackSampleRateInput() {
        return this._lambdaSuccessFeedbackSampleRate;
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
    get policy() {
        return this.getStringAttribute('policy');
    }
    set policy(value) {
        this._policy = value;
    }
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyInput() {
        return this._policy;
    }
    get sqsFailureFeedbackRoleArn() {
        return this.getStringAttribute('sqs_failure_feedback_role_arn');
    }
    set sqsFailureFeedbackRoleArn(value) {
        this._sqsFailureFeedbackRoleArn = value;
    }
    resetSqsFailureFeedbackRoleArn() {
        this._sqsFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsFailureFeedbackRoleArnInput() {
        return this._sqsFailureFeedbackRoleArn;
    }
    get sqsSuccessFeedbackRoleArn() {
        return this.getStringAttribute('sqs_success_feedback_role_arn');
    }
    set sqsSuccessFeedbackRoleArn(value) {
        this._sqsSuccessFeedbackRoleArn = value;
    }
    resetSqsSuccessFeedbackRoleArn() {
        this._sqsSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsSuccessFeedbackRoleArnInput() {
        return this._sqsSuccessFeedbackRoleArn;
    }
    get sqsSuccessFeedbackSampleRate() {
        return this.getNumberAttribute('sqs_success_feedback_sample_rate');
    }
    set sqsSuccessFeedbackSampleRate(value) {
        this._sqsSuccessFeedbackSampleRate = value;
    }
    resetSqsSuccessFeedbackSampleRate() {
        this._sqsSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqsSuccessFeedbackSampleRateInput() {
        return this._sqsSuccessFeedbackSampleRate;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
            application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
            application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
            display_name: cdktf.stringToTerraform(this._displayName),
            fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
            http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
            http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
            http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
            lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
            lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
            sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
            sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
exports.SnsTopic = SnsTopic;
_a = JSII_RTTI_SYMBOL_1;
SnsTopic[_a] = { fqn: "hashicorp_aws.SnsTopic", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXRvcGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic25zLXRvcGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCOzs7O0FBa0cvQixNQUFhLFFBQVMsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRW5ELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7OztJQVNkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQXlCLEVBQUU7UUFDMUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxlQUFlO1lBQ3RDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0NBQWtDLEdBQUcsTUFBTSxDQUFDLGlDQUFpQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLHFDQUFxQyxHQUFHLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQztRQUN6RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1B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LEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUN2Riw2QkFBNkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZGLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUM7WUFDN0YsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEUsQ0FBQztJQUNKLENBQUM7O0FBM2JILDRCQTRiQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9zbnNfdG9waWMuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIFNuc1RvcGljQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50QmFzZWREZWR1cGxpY2F0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGl2ZXJ5UG9saWN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpZm9Ub3BpYz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zTWFzdGVyS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZVByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgU25zVG9waWMgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNuc1RvcGljQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zbnNfdG9waWMnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IGNvbmZpZy5hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gICAgdGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiA9IGNvbmZpZy5jb250ZW50QmFzZWREZWR1cGxpY2F0aW9uO1xuICAgIHRoaXMuX2RlbGl2ZXJ5UG9saWN5ID0gY29uZmlnLmRlbGl2ZXJ5UG9saWN5O1xuICAgIHRoaXMuX2Rpc3BsYXlOYW1lID0gY29uZmlnLmRpc3BsYXlOYW1lO1xuICAgIHRoaXMuX2ZpZm9Ub3BpYyA9IGNvbmZpZy5maWZvVG9waWM7XG4gICAgdGhpcy5faHR0cEZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuaHR0cEZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuaHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSBjb25maWcuaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gICAgdGhpcy5fa21zTWFzdGVyS2V5SWQgPSBjb25maWcua21zTWFzdGVyS2V5SWQ7XG4gICAgdGhpcy5fbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IGNvbmZpZy5sYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSBjb25maWcubGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlID0gY29uZmlnLmxhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSBjb25maWcubmFtZVByZWZpeDtcbiAgICB0aGlzLl9wb2xpY3kgPSBjb25maWcucG9saWN5O1xuICAgIHRoaXMuX3Nxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSBjb25maWcuc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgICB0aGlzLl9zcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLnNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IGNvbmZpZy5zcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwcGxpY2F0aW9uX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uRmFpbHVyZUZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvbkZhaWx1cmVGZWVkYmFja1JvbGVBcm5cbiAgfVxuXG4gIC8vIGFwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5cbiAgfVxuXG4gIC8vIGFwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25TdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGVcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50QmFzZWREZWR1cGxpY2F0aW9uKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250ZW50QmFzZWREZWR1cGxpY2F0aW9uKCkge1xuICAgIHRoaXMuX2NvbnRlbnRCYXNlZERlZHVwbGljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRCYXNlZERlZHVwbGljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvblxuICB9XG5cbiAgLy8gZGVsaXZlcnlfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGl2ZXJ5UG9saWN5Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlbGl2ZXJ5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxpdmVyeVBvbGljeSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2RlbGl2ZXJ5UG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsaXZlcnlQb2xpY3koKSB7XG4gICAgdGhpcy5fZGVsaXZlcnlQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGl2ZXJ5UG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGl2ZXJ5UG9saWN5XG4gIH1cblxuICAvLyBkaXNwbGF5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXNwbGF5X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3BsYXlOYW1lKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGlzcGxheU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXNwbGF5TmFtZSgpIHtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlzcGxheU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheU5hbWVcbiAgfVxuXG4gIC8vIGZpZm9fdG9waWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlmb1RvcGljPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBmaWZvVG9waWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZmlmb190b3BpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlmb1RvcGljKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2ZpZm9Ub3BpYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpZm9Ub3BpYygpIHtcbiAgICB0aGlzLl9maWZvVG9waWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpZm9Ub3BpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWZvVG9waWNcbiAgfVxuXG4gIC8vIGh0dHBfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBodHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h0dHBfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaHR0cEZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwRmFpbHVyZUZlZWRiYWNrUm9sZUFyblxuICB9XG5cbiAgLy8gaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2h0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBTdWNjZXNzRmVlZGJhY2tSb2xlQXJuXG4gIH1cblxuICAvLyBodHRwX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICB0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGVcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfbWFzdGVyX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNNYXN0ZXJLZXlJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBrbXNNYXN0ZXJLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19tYXN0ZXJfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNNYXN0ZXJLZXlJZCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2ttc01hc3RlcktleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zTWFzdGVyS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zTWFzdGVyS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc01hc3RlcktleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc01hc3RlcktleUlkXG4gIH1cblxuICAvLyBsYW1iZGFfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGxhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYW1iZGFfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFybih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhRmFpbHVyZUZlZWRiYWNrUm9sZUFyblxuICB9XG5cbiAgLy8gbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBsYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFtYmRhU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFTdWNjZXNzRmVlZGJhY2tSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5cbiAgfVxuXG4gIC8vIGxhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGU/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2xhbWJkYV9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgdGhpcy5fbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFtYmRhU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlXG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBuYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZVByZWZpeCgpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVQcmVmaXhcbiAgfVxuXG4gIC8vIHBvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvbGljeT86IHN0cmluZztcbiAgcHVibGljIGdldCBwb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9saWN5KCkge1xuICAgIHRoaXMuX3BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGljeVxuICB9XG5cbiAgLy8gc3FzX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBzcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3FzX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9zcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICB0aGlzLl9zcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcXNGYWlsdXJlRmVlZGJhY2tSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nxc0ZhaWx1cmVGZWVkYmFja1JvbGVBcm5cbiAgfVxuXG4gIC8vIHNxc19zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nxc19zdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNxc1N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcXNTdWNjZXNzRmVlZGJhY2tSb2xlQXJuXG4gIH1cblxuICAvLyBzcXNfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHNxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzcXNfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcXNTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX3Nxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNxc1N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZVxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBwbGljYXRpb25fZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwbGljYXRpb25GYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGFwcGxpY2F0aW9uX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwcGxpY2F0aW9uU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICBhcHBsaWNhdGlvbl9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9hcHBsaWNhdGlvblN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgY29udGVudF9iYXNlZF9kZWR1cGxpY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY29udGVudEJhc2VkRGVkdXBsaWNhdGlvbiksXG4gICAgICBkZWxpdmVyeV9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlbGl2ZXJ5UG9saWN5KSxcbiAgICAgIGRpc3BsYXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGlzcGxheU5hbWUpLFxuICAgICAgZmlmb190b3BpYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZpZm9Ub3BpYyksXG4gICAgICBodHRwX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2h0dHBGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIGh0dHBfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faHR0cFN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgaHR0cF9zdWNjZXNzX2ZlZWRiYWNrX3NhbXBsZV9yYXRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9odHRwU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICBrbXNfbWFzdGVyX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zTWFzdGVyS2V5SWQpLFxuICAgICAgbGFtYmRhX2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xhbWJkYUZhaWx1cmVGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4pLFxuICAgICAgbGFtYmRhX3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2xhbWJkYVN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBuYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZVByZWZpeCksXG4gICAgICBwb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BvbGljeSksXG4gICAgICBzcXNfZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3FzRmFpbHVyZUZlZWRiYWNrUm9sZUFybiksXG4gICAgICBzcXNfc3VjY2Vzc19mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiksXG4gICAgICBzcXNfc3VjY2Vzc19mZWVkYmFja19zYW1wbGVfcmF0ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fc3FzU3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICB9O1xuICB9XG59XG4iXX0=