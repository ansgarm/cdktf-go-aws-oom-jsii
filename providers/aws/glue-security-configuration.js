"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueSecurityConfiguration = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_encryption_mode: cdktf.stringToTerraform(struct.cloudwatchEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
    };
}
function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct.jobBookmarksEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
    };
}
function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        s3_encryption_mode: cdktf.stringToTerraform(struct.s3EncryptionMode),
    };
}
function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform)(struct.cloudwatchEncryption),
        job_bookmarks_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform)(struct.jobBookmarksEncryption),
        s3_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform)(struct.s3Encryption),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration}.
 */
class GlueSecurityConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_security_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._encryptionConfiguration = config.encryptionConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
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
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    set encryptionConfiguration(value) {
        this._encryptionConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionConfigurationInput() {
        return this._encryptionConfiguration;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            encryption_configuration: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
        };
    }
}
exports.GlueSecurityConfiguration = GlueSecurityConfiguration;
_a = JSII_RTTI_SYMBOL_1;
GlueSecurityConfiguration[_a] = { fqn: "hashicorp_aws.GlueSecurityConfiguration", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1zZWN1cml0eS1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2x1ZS1zZWN1cml0eS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBMkIvQixTQUFTLCtFQUErRSxDQUFDLE1BQTZFO0lBQ3BLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUNyRixXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDeEQsQ0FBQTtBQUNILENBQUM7QUFhRCxTQUFTLGlGQUFpRixDQUFDLE1BQStFO0lBQ3hLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUMxRixXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDeEQsQ0FBQTtBQUNILENBQUM7QUFhRCxTQUFTLHVFQUF1RSxDQUFDLE1BQXFFO0lBQ3BKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDdEUsQ0FBQTtBQUNILENBQUM7QUF1QkQsU0FBUywyREFBMkQsQ0FBQyxNQUF5RDtJQUM1SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0VBQStFLENBQUMsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDdEosd0JBQXdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3SixhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7S0FDL0gsQ0FBQTtBQUNILENBQUM7Ozs7QUFNRCxNQUFhLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFcEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBdUM7UUFDdEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxpQ0FBaUM7WUFDeEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO0lBQ2pFLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQVEsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUF5RDtRQUMxRixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUE7SUFDdEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMkRBQTJELENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7U0FDdkksQ0FBQztJQUNKLENBQUM7O0FBeEVILDhEQXlFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24uaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbjogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUFybj86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2VuY3J5cHRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoRW5jcnlwdGlvbk1vZGUpLFxuICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBqb2JfYm9va21hcmtzX2VuY3J5cHRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5qb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZSksXG4gICAga21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5QXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzRW5jcnlwdGlvbk1vZGU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgIHMzX2VuY3J5cHRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0VuY3J5cHRpb25Nb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZHdhdGNoRW5jcnlwdGlvbjogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpvYkJvb2ttYXJrc0VuY3J5cHRpb246IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzRW5jcnlwdGlvbjogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uW107XG59XG5cbmZ1bmN0aW9uIGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2VuY3J5cHRpb246IGNka3RmLmxpc3RNYXBwZXIoZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5jbG91ZHdhdGNoRW5jcnlwdGlvbiksXG4gICAgam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5qb2JCb29rbWFya3NFbmNyeXB0aW9uKSxcbiAgICBzM19lbmNyeXB0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnMzRW5jcnlwdGlvbiksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19nbHVlX3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uID0gY29uZmlnLmVuY3J5cHRpb25Db25maWd1cmF0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbltdO1xuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25bXSkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgfTtcbiAgfVxufVxuIl19