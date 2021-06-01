"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueDataCatalogEncryptionSettings = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        return_connection_password_encrypted: cdktf.booleanToTerraform(struct.returnConnectionPasswordEncrypted),
    };
}
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_encryption_mode: cdktf.stringToTerraform(struct.catalogEncryptionMode),
        sse_aws_kms_key_id: cdktf.stringToTerraform(struct.sseAwsKmsKeyId),
    };
}
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_password_encryption: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform)(struct.connectionPasswordEncryption),
        encryption_at_rest: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform)(struct.encryptionAtRest),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}.
 */
class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._catalogId = config.catalogId;
        this._dataCatalogEncryptionSettings = config.dataCatalogEncryptionSettings;
    }
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    set catalogId(value) {
        this._catalogId = value;
    }
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get catalogIdInput() {
        return this._catalogId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get dataCatalogEncryptionSettings() {
        return this.interpolationForAttribute('data_catalog_encryption_settings');
    }
    set dataCatalogEncryptionSettings(value) {
        this._dataCatalogEncryptionSettings = value;
    }
    // Temporarily expose input value. Use with caution.
    get dataCatalogEncryptionSettingsInput() {
        return this._dataCatalogEncryptionSettings;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            data_catalog_encryption_settings: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform)(this._dataCatalogEncryptionSettings),
        };
    }
}
exports.GlueDataCatalogEncryptionSettings = GlueDataCatalogEncryptionSettings;
_a = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettings[_a] = { fqn: "hashicorp_aws.GlueDataCatalogEncryptionSettings", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1kYXRhLWNhdGFsb2ctZW5jcnlwdGlvbi1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsdWUtZGF0YS1jYXRhbG9nLWVuY3J5cHRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUEyQi9CLFNBQVMscUdBQXFHLENBQUMsTUFBbUc7SUFDaE4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDNUQsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztLQUMxRyxDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMseUZBQXlGLENBQUMsTUFBdUY7SUFDeEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQy9FLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQ3BFLENBQUE7QUFDSCxDQUFDO0FBaUJELFNBQVMseUVBQXlFLENBQUMsTUFBdUU7SUFDeEosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCw4QkFBOEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHFHQUFxRyxDQUFDLENBQUMsTUFBTyxDQUFDLDRCQUE0QixDQUFDO1FBQzdMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMseUZBQXlGLENBQUMsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDMUosQ0FBQTtBQUNILENBQUM7Ozs7QUFNRCxNQUFhLGlDQUFrQyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFNUUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBK0M7UUFDOUYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwyQ0FBMkM7WUFDbEUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsOEJBQThCLEdBQUcsTUFBTSxDQUFDLDZCQUE2QixDQUFDO0lBQzdFLENBQUM7SUFRRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtDQUFrQyxDQUFRLENBQUM7SUFDbkYsQ0FBQztJQUNELElBQVcsNkJBQTZCLENBQUMsS0FBdUU7UUFDOUcsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0NBQWtDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFBO0lBQzVDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHlFQUF5RSxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1NBQ25LLENBQUM7SUFDSixDQUFDOztBQTNFSCw4RUE0RUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncy5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3M6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhd3NLbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXdzX2ttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXdzS21zS2V5SWQpLFxuICAgIHJldHVybl9jb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXRhbG9nRW5jcnlwdGlvbk1vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NlQXdzS21zS2V5SWQ/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjYXRhbG9nX2VuY3J5cHRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXRhbG9nRW5jcnlwdGlvbk1vZGUpLFxuICAgIHNzZV9hd3Nfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc2VBd3NLbXNLZXlJZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uOiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRpb25BdFJlc3Q6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdFtdO1xufVxuXG5mdW5jdGlvbiBnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGlvbjogY2RrdGYubGlzdE1hcHBlcihnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uKSxcbiAgICBlbmNyeXB0aW9uX2F0X3Jlc3Q6IGNka3RmLmxpc3RNYXBwZXIoZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEuZW5jcnlwdGlvbkF0UmVzdCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSBjb25maWcuY2F0YWxvZ0lkO1xuICAgIHRoaXMuX2RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzID0gY29uZmlnLmRhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjYXRhbG9nX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2F0YWxvZ0lkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhdGFsb2dfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhdGFsb2dJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2F0YWxvZ0lkKCkge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGFsb2dJZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGRhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzOiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc1tdO1xuICBwdWJsaWMgZ2V0IGRhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3ModmFsdWU6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzW10pIHtcbiAgICB0aGlzLl9kYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRhbG9nX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jYXRhbG9nSWQpLFxuICAgICAgZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3M6IGNka3RmLmxpc3RNYXBwZXIoZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NUb1RlcnJhZm9ybSkodGhpcy5fZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==