"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsSmsPreferences = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences}.
 */
class SnsSmsPreferences extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_sms_preferences',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._defaultSenderId = config.defaultSenderId;
        this._defaultSmsType = config.defaultSmsType;
        this._deliveryStatusIamRoleArn = config.deliveryStatusIamRoleArn;
        this._deliveryStatusSuccessSamplingRate = config.deliveryStatusSuccessSamplingRate;
        this._monthlySpendLimit = config.monthlySpendLimit;
        this._usageReportS3Bucket = config.usageReportS3Bucket;
    }
    get defaultSenderId() {
        return this.getStringAttribute('default_sender_id');
    }
    set defaultSenderId(value) {
        this._defaultSenderId = value;
    }
    resetDefaultSenderId() {
        this._defaultSenderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultSenderIdInput() {
        return this._defaultSenderId;
    }
    get defaultSmsType() {
        return this.getStringAttribute('default_sms_type');
    }
    set defaultSmsType(value) {
        this._defaultSmsType = value;
    }
    resetDefaultSmsType() {
        this._defaultSmsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultSmsTypeInput() {
        return this._defaultSmsType;
    }
    get deliveryStatusIamRoleArn() {
        return this.getStringAttribute('delivery_status_iam_role_arn');
    }
    set deliveryStatusIamRoleArn(value) {
        this._deliveryStatusIamRoleArn = value;
    }
    resetDeliveryStatusIamRoleArn() {
        this._deliveryStatusIamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryStatusIamRoleArnInput() {
        return this._deliveryStatusIamRoleArn;
    }
    get deliveryStatusSuccessSamplingRate() {
        return this.getStringAttribute('delivery_status_success_sampling_rate');
    }
    set deliveryStatusSuccessSamplingRate(value) {
        this._deliveryStatusSuccessSamplingRate = value;
    }
    resetDeliveryStatusSuccessSamplingRate() {
        this._deliveryStatusSuccessSamplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryStatusSuccessSamplingRateInput() {
        return this._deliveryStatusSuccessSamplingRate;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get monthlySpendLimit() {
        return this.getStringAttribute('monthly_spend_limit');
    }
    set monthlySpendLimit(value) {
        this._monthlySpendLimit = value;
    }
    resetMonthlySpendLimit() {
        this._monthlySpendLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monthlySpendLimitInput() {
        return this._monthlySpendLimit;
    }
    get usageReportS3Bucket() {
        return this.getStringAttribute('usage_report_s3_bucket');
    }
    set usageReportS3Bucket(value) {
        this._usageReportS3Bucket = value;
    }
    resetUsageReportS3Bucket() {
        this._usageReportS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usageReportS3BucketInput() {
        return this._usageReportS3Bucket;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            default_sender_id: cdktf.stringToTerraform(this._defaultSenderId),
            default_sms_type: cdktf.stringToTerraform(this._defaultSmsType),
            delivery_status_iam_role_arn: cdktf.stringToTerraform(this._deliveryStatusIamRoleArn),
            delivery_status_success_sampling_rate: cdktf.stringToTerraform(this._deliveryStatusSuccessSamplingRate),
            monthly_spend_limit: cdktf.stringToTerraform(this._monthlySpendLimit),
            usage_report_s3_bucket: cdktf.stringToTerraform(this._usageReportS3Bucket),
        };
    }
}
exports.SnsSmsPreferences = SnsSmsPreferences;
_a = JSII_RTTI_SYMBOL_1;
SnsSmsPreferences[_a] = { fqn: "hashicorp_aws.SnsSmsPreferences", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXNtcy1wcmVmZXJlbmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNucy1zbXMtcHJlZmVyZW5jZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7Ozs7QUFrQy9CLE1BQWEsaUJBQWtCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUU1RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7SUFTZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUFrQyxFQUFFO1FBQ25GLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUseUJBQXlCO1lBQ2hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNqRSxJQUFJLENBQUMsa0NBQWtDLEdBQUcsTUFBTSxDQUFDLGlDQUFpQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUN6RCxDQUFDO0lBUUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQVcsZUFB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QWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELDRCQUE0QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDckYscUNBQXFDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztZQUN2RyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3JFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDM0UsQ0FBQztJQUNKLENBQUM7O0FBdEpILDhDQXVKQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9zbnNfc21zX3ByZWZlcmVuY2VzLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTbnNTbXNQcmVmZXJlbmNlc0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0U2VuZGVySWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0U21zVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vbnRobHlTcGVuZExpbWl0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNhZ2VSZXBvcnRTM0J1Y2tldD86IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNuc1Ntc1ByZWZlcmVuY2VzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNuc1Ntc1ByZWZlcmVuY2VzQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zbnNfc21zX3ByZWZlcmVuY2VzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RlZmF1bHRTZW5kZXJJZCA9IGNvbmZpZy5kZWZhdWx0U2VuZGVySWQ7XG4gICAgdGhpcy5fZGVmYXVsdFNtc1R5cGUgPSBjb25maWcuZGVmYXVsdFNtc1R5cGU7XG4gICAgdGhpcy5fZGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuID0gY29uZmlnLmRlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybjtcbiAgICB0aGlzLl9kZWxpdmVyeVN0YXR1c1N1Y2Nlc3NTYW1wbGluZ1JhdGUgPSBjb25maWcuZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlO1xuICAgIHRoaXMuX21vbnRobHlTcGVuZExpbWl0ID0gY29uZmlnLm1vbnRobHlTcGVuZExpbWl0O1xuICAgIHRoaXMuX3VzYWdlUmVwb3J0UzNCdWNrZXQgPSBjb25maWcudXNhZ2VSZXBvcnRTM0J1Y2tldDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGVmYXVsdF9zZW5kZXJfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFNlbmRlcklkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRTZW5kZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfc2VuZGVyX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0U2VuZGVySWQodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZWZhdWx0U2VuZGVySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0U2VuZGVySWQoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFNlbmRlcklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0U2VuZGVySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFNlbmRlcklkXG4gIH1cblxuICAvLyBkZWZhdWx0X3Ntc190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRTbXNUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRTbXNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9zbXNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFNtc1R5cGUodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9kZWZhdWx0U21zVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRTbXNUeXBlKCkge1xuICAgIHRoaXMuX2RlZmF1bHRTbXNUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0U21zVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U21zVHlwZVxuICB9XG5cbiAgLy8gZGVsaXZlcnlfc3RhdHVzX2lhbV9yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxpdmVyeVN0YXR1c0lhbVJvbGVBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfc3RhdHVzX2lhbV9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuKCkge1xuICAgIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFyblxuICB9XG5cbiAgLy8gZGVsaXZlcnlfc3RhdHVzX3N1Y2Nlc3Nfc2FtcGxpbmdfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxpdmVyeVN0YXR1c1N1Y2Nlc3NTYW1wbGluZ1JhdGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfc3RhdHVzX3N1Y2Nlc3Nfc2FtcGxpbmdfcmF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlKCkge1xuICAgIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1vbnRobHlfc3BlbmRfbGltaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9udGhseVNwZW5kTGltaXQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbW9udGhseVNwZW5kTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtb250aGx5X3NwZW5kX2xpbWl0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtb250aGx5U3BlbmRMaW1pdCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX21vbnRobHlTcGVuZExpbWl0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TW9udGhseVNwZW5kTGltaXQoKSB7XG4gICAgdGhpcy5fbW9udGhseVNwZW5kTGltaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vbnRobHlTcGVuZExpbWl0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbnRobHlTcGVuZExpbWl0XG4gIH1cblxuICAvLyB1c2FnZV9yZXBvcnRfczNfYnVja2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzYWdlUmVwb3J0UzNCdWNrZXQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdXNhZ2VSZXBvcnRTM0J1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzYWdlX3JlcG9ydF9zM19idWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzYWdlUmVwb3J0UzNCdWNrZXQodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl91c2FnZVJlcG9ydFMzQnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNhZ2VSZXBvcnRTM0J1Y2tldCgpIHtcbiAgICB0aGlzLl91c2FnZVJlcG9ydFMzQnVja2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2FnZVJlcG9ydFMzQnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzYWdlUmVwb3J0UzNCdWNrZXRcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdF9zZW5kZXJfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRTZW5kZXJJZCksXG4gICAgICBkZWZhdWx0X3Ntc190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0U21zVHlwZSksXG4gICAgICBkZWxpdmVyeV9zdGF0dXNfaWFtX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWxpdmVyeVN0YXR1c0lhbVJvbGVBcm4pLFxuICAgICAgZGVsaXZlcnlfc3RhdHVzX3N1Y2Nlc3Nfc2FtcGxpbmdfcmF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlKSxcbiAgICAgIG1vbnRobHlfc3BlbmRfbGltaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21vbnRobHlTcGVuZExpbWl0KSxcbiAgICAgIHVzYWdlX3JlcG9ydF9zM19idWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VzYWdlUmVwb3J0UzNCdWNrZXQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==