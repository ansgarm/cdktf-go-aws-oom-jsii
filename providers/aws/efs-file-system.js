"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EfsFileSystem = exports.EfsFileSystemSizeInBytes = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class EfsFileSystemSizeInBytes extends cdktf.ComplexComputedList {
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getNumberAttribute('value');
    }
    // value_in_ia - computed: true, optional: false, required: false
    get valueInIa() {
        return this.getNumberAttribute('value_in_ia');
    }
    // value_in_standard - computed: true, optional: false, required: false
    get valueInStandard() {
        return this.getNumberAttribute('value_in_standard');
    }
}
exports.EfsFileSystemSizeInBytes = EfsFileSystemSizeInBytes;
_a = JSII_RTTI_SYMBOL_1;
EfsFileSystemSizeInBytes[_a] = { fqn: "hashicorp_aws.EfsFileSystemSizeInBytes", version: "0.0.0" };
function efsFileSystemLifecyclePolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        transition_to_ia: cdktf.stringToTerraform(struct.transitionToIa),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system}.
 */
class EfsFileSystem extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_efs_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._availabilityZoneName = config.availabilityZoneName;
        this._creationToken = config.creationToken;
        this._encrypted = config.encrypted;
        this._kmsKeyId = config.kmsKeyId;
        this._performanceMode = config.performanceMode;
        this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._throughputMode = config.throughputMode;
        this._lifecyclePolicy = config.lifecyclePolicy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // availability_zone_id - computed: true, optional: false, required: false
    get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    get availabilityZoneName() {
        return this.getStringAttribute('availability_zone_name');
    }
    set availabilityZoneName(value) {
        this._availabilityZoneName = value;
    }
    resetAvailabilityZoneName() {
        this._availabilityZoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneNameInput() {
        return this._availabilityZoneName;
    }
    get creationToken() {
        return this.getStringAttribute('creation_token');
    }
    set creationToken(value) {
        this._creationToken = value;
    }
    resetCreationToken() {
        this._creationToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get creationTokenInput() {
        return this._creationToken;
    }
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    set encrypted(value) {
        this._encrypted = value;
    }
    resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptedInput() {
        return this._encrypted;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    // number_of_mount_targets - computed: true, optional: false, required: false
    get numberOfMountTargets() {
        return this.getNumberAttribute('number_of_mount_targets');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    get performanceMode() {
        return this.getStringAttribute('performance_mode');
    }
    set performanceMode(value) {
        this._performanceMode = value;
    }
    resetPerformanceMode() {
        this._performanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get performanceModeInput() {
        return this._performanceMode;
    }
    get provisionedThroughputInMibps() {
        return this.getNumberAttribute('provisioned_throughput_in_mibps');
    }
    set provisionedThroughputInMibps(value) {
        this._provisionedThroughputInMibps = value;
    }
    resetProvisionedThroughputInMibps() {
        this._provisionedThroughputInMibps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get provisionedThroughputInMibpsInput() {
        return this._provisionedThroughputInMibps;
    }
    // size_in_bytes - computed: true, optional: false, required: false
    sizeInBytes(index) {
        return new EfsFileSystemSizeInBytes(this, 'size_in_bytes', index);
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
    get throughputMode() {
        return this.getStringAttribute('throughput_mode');
    }
    set throughputMode(value) {
        this._throughputMode = value;
    }
    resetThroughputMode() {
        this._throughputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get throughputModeInput() {
        return this._throughputMode;
    }
    get lifecyclePolicy() {
        return this.interpolationForAttribute('lifecycle_policy');
    }
    set lifecyclePolicy(value) {
        this._lifecyclePolicy = value;
    }
    resetLifecyclePolicy() {
        this._lifecyclePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecyclePolicyInput() {
        return this._lifecyclePolicy;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
            creation_token: cdktf.stringToTerraform(this._creationToken),
            encrypted: cdktf.booleanToTerraform(this._encrypted),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            performance_mode: cdktf.stringToTerraform(this._performanceMode),
            provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            throughput_mode: cdktf.stringToTerraform(this._throughputMode),
            lifecycle_policy: cdktf.listMapper(efsFileSystemLifecyclePolicyToTerraform)(this._lifecyclePolicy),
        };
    }
}
exports.EfsFileSystem = EfsFileSystem;
_b = JSII_RTTI_SYMBOL_1;
EfsFileSystem[_b] = { fqn: "hashicorp_aws.EfsFileSystem", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZzLWZpbGUtc3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWZzLWZpbGUtc3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBZ0QvQixNQUFhLHdCQUF5QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckUsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7QUFmSCw0REFnQkM7OztBQVFELFNBQVMsdUNBQXVDLENBQUMsTUFBcUM7SUFDcEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQzs7OztBQU1ELE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFeEQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBOEIsRUFBRTtRQUMvRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFCQUFxQjtZQUM1QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7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Q0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDbkcsQ0FBQztJQUNKLENBQUM7O0FBNVBILHNDQTZQQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9lZnNfZmlsZV9zeXN0ZW0uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEVmc0ZpbGVTeXN0ZW1Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0aW9uVG9rZW4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyZm9ybWFuY2VNb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlicHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGhyb3VnaHB1dE1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaWZlY3ljbGVQb2xpY3k/OiBFZnNGaWxlU3lzdGVtTGlmZWN5Y2xlUG9saWN5W107XG59XG5leHBvcnQgY2xhc3MgRWZzRmlsZVN5c3RlbVNpemVJbkJ5dGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cblxuICAvLyB2YWx1ZV9pbl9pYSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlSW5JYSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlX2luX2lhJyk7XG4gIH1cblxuICAvLyB2YWx1ZV9pbl9zdGFuZGFyZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlSW5TdGFuZGFyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZhbHVlX2luX3N0YW5kYXJkJyk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWZzRmlsZVN5c3RlbUxpZmVjeWNsZVBvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJhbnNpdGlvblRvSWE6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZWZzRmlsZVN5c3RlbUxpZmVjeWNsZVBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IEVmc0ZpbGVTeXN0ZW1MaWZlY3ljbGVQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHJhbnNpdGlvbl90b19pYTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2l0aW9uVG9JYSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVmc0ZpbGVTeXN0ZW0gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWZzRmlsZVN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWZzX2ZpbGVfc3lzdGVtJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVOYW1lID0gY29uZmlnLmF2YWlsYWJpbGl0eVpvbmVOYW1lO1xuICAgIHRoaXMuX2NyZWF0aW9uVG9rZW4gPSBjb25maWcuY3JlYXRpb25Ub2tlbjtcbiAgICB0aGlzLl9lbmNyeXB0ZWQgPSBjb25maWcuZW5jcnlwdGVkO1xuICAgIHRoaXMuX2ttc0tleUlkID0gY29uZmlnLmttc0tleUlkO1xuICAgIHRoaXMuX3BlcmZvcm1hbmNlTW9kZSA9IGNvbmZpZy5wZXJmb3JtYW5jZU1vZGU7XG4gICAgdGhpcy5fcHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaWJwcyA9IGNvbmZpZy5wcm92aXNpb25lZFRocm91Z2hwdXRJbk1pYnBzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdGhyb3VnaHB1dE1vZGUgPSBjb25maWcudGhyb3VnaHB1dE1vZGU7XG4gICAgdGhpcy5fbGlmZWN5Y2xlUG9saWN5ID0gY29uZmlnLmxpZmVjeWNsZVBvbGljeTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lX2lkJyk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZhaWxhYmlsaXR5Wm9uZU5hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lTmFtZSgpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZU5hbWVcbiAgfVxuXG4gIC8vIGNyZWF0aW9uX3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRpb25Ub2tlbj86IHN0cmluZztcbiAgcHVibGljIGdldCBjcmVhdGlvblRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRpb25fdG9rZW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0aW9uVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0aW9uVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGlvblRva2VuKCkge1xuICAgIHRoaXMuX2NyZWF0aW9uVG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0aW9uVG9rZW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRpb25Ub2tlblxuICB9XG5cbiAgLy8gZG5zX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkbnNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG5zX25hbWUnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgZW5jcnlwdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuY3J5cHRlZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5jcnlwdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jcnlwdGVkKCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZztcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZFxuICB9XG5cbiAgLy8gbnVtYmVyX29mX21vdW50X3RhcmdldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBudW1iZXJPZk1vdW50VGFyZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ251bWJlcl9vZl9tb3VudF90YXJnZXRzJyk7XG4gIH1cblxuICAvLyBvd25lcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG93bmVySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvd25lcl9pZCcpO1xuICB9XG5cbiAgLy8gcGVyZm9ybWFuY2VfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BlcmZvcm1hbmNlTW9kZT86IHN0cmluZztcbiAgcHVibGljIGdldCBwZXJmb3JtYW5jZU1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwZXJmb3JtYW5jZV9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBwZXJmb3JtYW5jZU1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BlcmZvcm1hbmNlTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBlcmZvcm1hbmNlTW9kZSgpIHtcbiAgICB0aGlzLl9wZXJmb3JtYW5jZU1vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBlcmZvcm1hbmNlTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJmb3JtYW5jZU1vZGVcbiAgfVxuXG4gIC8vIHByb3Zpc2lvbmVkX3Rocm91Z2hwdXRfaW5fbWlicHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaWJwcz86IG51bWJlcjtcbiAgcHVibGljIGdldCBwcm92aXNpb25lZFRocm91Z2hwdXRJbk1pYnBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncHJvdmlzaW9uZWRfdGhyb3VnaHB1dF9pbl9taWJwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaWJwcyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3Byb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlicHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm92aXNpb25lZFRocm91Z2hwdXRJbk1pYnBzKCkge1xuICAgIHRoaXMuX3Byb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlicHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3Zpc2lvbmVkVGhyb3VnaHB1dEluTWlicHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaWJwc1xuICB9XG5cbiAgLy8gc2l6ZV9pbl9ieXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgc2l6ZUluQnl0ZXMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRWZzRmlsZVN5c3RlbVNpemVJbkJ5dGVzKHRoaXMsICdzaXplX2luX2J5dGVzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vIHRocm91Z2hwdXRfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJvdWdocHV0TW9kZT86IHN0cmluZztcbiAgcHVibGljIGdldCB0aHJvdWdocHV0TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rocm91Z2hwdXRfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyb3VnaHB1dE1vZGUodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl90aHJvdWdocHV0TW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRocm91Z2hwdXRNb2RlKCkge1xuICAgIHRoaXMuX3Rocm91Z2hwdXRNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aHJvdWdocHV0TW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJvdWdocHV0TW9kZVxuICB9XG5cbiAgLy8gbGlmZWN5Y2xlX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9saWZlY3ljbGVQb2xpY3k/OiBFZnNGaWxlU3lzdGVtTGlmZWN5Y2xlUG9saWN5W107XG4gIHB1YmxpYyBnZXQgbGlmZWN5Y2xlUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xpZmVjeWNsZV9wb2xpY3knKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsaWZlY3ljbGVQb2xpY3kodmFsdWU6IEVmc0ZpbGVTeXN0ZW1MaWZlY3ljbGVQb2xpY3lbXSApIHtcbiAgICB0aGlzLl9saWZlY3ljbGVQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWZlY3ljbGVQb2xpY3koKSB7XG4gICAgdGhpcy5fbGlmZWN5Y2xlUG9saWN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWZlY3ljbGVQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlmZWN5Y2xlUG9saWN5XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVOYW1lKSxcbiAgICAgIGNyZWF0aW9uX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jcmVhdGlvblRva2VuKSxcbiAgICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuY3J5cHRlZCksXG4gICAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXlJZCksXG4gICAgICBwZXJmb3JtYW5jZV9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wZXJmb3JtYW5jZU1vZGUpLFxuICAgICAgcHJvdmlzaW9uZWRfdGhyb3VnaHB1dF9pbl9taWJwczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcHJvdmlzaW9uZWRUaHJvdWdocHV0SW5NaWJwcyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHRocm91Z2hwdXRfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGhyb3VnaHB1dE1vZGUpLFxuICAgICAgbGlmZWN5Y2xlX3BvbGljeTogY2RrdGYubGlzdE1hcHBlcihlZnNGaWxlU3lzdGVtTGlmZWN5Y2xlUG9saWN5VG9UZXJyYWZvcm0pKHRoaXMuX2xpZmVjeWNsZVBvbGljeSksXG4gICAgfTtcbiAgfVxufVxuIl19