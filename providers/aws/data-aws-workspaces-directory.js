"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsWorkspacesDirectory = exports.DataAwsWorkspacesDirectoryWorkspaceCreationProperties = exports.DataAwsWorkspacesDirectoryWorkspaceAccessProperties = exports.DataAwsWorkspacesDirectorySelfServicePermissions = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class DataAwsWorkspacesDirectorySelfServicePermissions extends cdktf.ComplexComputedList {
    // change_compute_type - computed: true, optional: false, required: false
    get changeComputeType() {
        return this.getBooleanAttribute('change_compute_type');
    }
    // increase_volume_size - computed: true, optional: false, required: false
    get increaseVolumeSize() {
        return this.getBooleanAttribute('increase_volume_size');
    }
    // rebuild_workspace - computed: true, optional: false, required: false
    get rebuildWorkspace() {
        return this.getBooleanAttribute('rebuild_workspace');
    }
    // restart_workspace - computed: true, optional: false, required: false
    get restartWorkspace() {
        return this.getBooleanAttribute('restart_workspace');
    }
    // switch_running_mode - computed: true, optional: false, required: false
    get switchRunningMode() {
        return this.getBooleanAttribute('switch_running_mode');
    }
}
exports.DataAwsWorkspacesDirectorySelfServicePermissions = DataAwsWorkspacesDirectorySelfServicePermissions;
_a = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectorySelfServicePermissions[_a] = { fqn: "hashicorp_aws.DataAwsWorkspacesDirectorySelfServicePermissions", version: "0.0.0" };
class DataAwsWorkspacesDirectoryWorkspaceAccessProperties extends cdktf.ComplexComputedList {
    // device_type_android - computed: true, optional: false, required: false
    get deviceTypeAndroid() {
        return this.getStringAttribute('device_type_android');
    }
    // device_type_chromeos - computed: true, optional: false, required: false
    get deviceTypeChromeos() {
        return this.getStringAttribute('device_type_chromeos');
    }
    // device_type_ios - computed: true, optional: false, required: false
    get deviceTypeIos() {
        return this.getStringAttribute('device_type_ios');
    }
    // device_type_osx - computed: true, optional: false, required: false
    get deviceTypeOsx() {
        return this.getStringAttribute('device_type_osx');
    }
    // device_type_web - computed: true, optional: false, required: false
    get deviceTypeWeb() {
        return this.getStringAttribute('device_type_web');
    }
    // device_type_windows - computed: true, optional: false, required: false
    get deviceTypeWindows() {
        return this.getStringAttribute('device_type_windows');
    }
    // device_type_zeroclient - computed: true, optional: false, required: false
    get deviceTypeZeroclient() {
        return this.getStringAttribute('device_type_zeroclient');
    }
}
exports.DataAwsWorkspacesDirectoryWorkspaceAccessProperties = DataAwsWorkspacesDirectoryWorkspaceAccessProperties;
_b = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectoryWorkspaceAccessProperties[_b] = { fqn: "hashicorp_aws.DataAwsWorkspacesDirectoryWorkspaceAccessProperties", version: "0.0.0" };
class DataAwsWorkspacesDirectoryWorkspaceCreationProperties extends cdktf.ComplexComputedList {
    // custom_security_group_id - computed: true, optional: false, required: false
    get customSecurityGroupId() {
        return this.getStringAttribute('custom_security_group_id');
    }
    // default_ou - computed: true, optional: false, required: false
    get defaultOu() {
        return this.getStringAttribute('default_ou');
    }
    // enable_internet_access - computed: true, optional: false, required: false
    get enableInternetAccess() {
        return this.getBooleanAttribute('enable_internet_access');
    }
    // enable_maintenance_mode - computed: true, optional: false, required: false
    get enableMaintenanceMode() {
        return this.getBooleanAttribute('enable_maintenance_mode');
    }
    // user_enabled_as_local_administrator - computed: true, optional: false, required: false
    get userEnabledAsLocalAdministrator() {
        return this.getBooleanAttribute('user_enabled_as_local_administrator');
    }
}
exports.DataAwsWorkspacesDirectoryWorkspaceCreationProperties = DataAwsWorkspacesDirectoryWorkspaceCreationProperties;
_c = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectoryWorkspaceCreationProperties[_c] = { fqn: "hashicorp_aws.DataAwsWorkspacesDirectoryWorkspaceCreationProperties", version: "0.0.0" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory}.
 */
class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_workspaces_directory',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._directoryId = config.directoryId;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alias - computed: true, optional: false, required: false
    get alias() {
        return this.getStringAttribute('alias');
    }
    // customer_user_name - computed: true, optional: false, required: false
    get customerUserName() {
        return this.getStringAttribute('customer_user_name');
    }
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    set directoryId(value) {
        this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    get directoryIdInput() {
        return this._directoryId;
    }
    // directory_name - computed: true, optional: false, required: false
    get directoryName() {
        return this.getStringAttribute('directory_name');
    }
    // directory_type - computed: true, optional: false, required: false
    get directoryType() {
        return this.getStringAttribute('directory_type');
    }
    // dns_ip_addresses - computed: true, optional: false, required: false
    get dnsIpAddresses() {
        return this.getListAttribute('dns_ip_addresses');
    }
    // iam_role_id - computed: true, optional: false, required: false
    get iamRoleId() {
        return this.getStringAttribute('iam_role_id');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ip_group_ids - computed: true, optional: false, required: false
    get ipGroupIds() {
        return this.getListAttribute('ip_group_ids');
    }
    // registration_code - computed: true, optional: false, required: false
    get registrationCode() {
        return this.getStringAttribute('registration_code');
    }
    // self_service_permissions - computed: true, optional: false, required: false
    selfServicePermissions(index) {
        return new DataAwsWorkspacesDirectorySelfServicePermissions(this, 'self_service_permissions', index);
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
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
    // workspace_access_properties - computed: true, optional: false, required: false
    workspaceAccessProperties(index) {
        return new DataAwsWorkspacesDirectoryWorkspaceAccessProperties(this, 'workspace_access_properties', index);
    }
    // workspace_creation_properties - computed: true, optional: false, required: false
    workspaceCreationProperties(index) {
        return new DataAwsWorkspacesDirectoryWorkspaceCreationProperties(this, 'workspace_creation_properties', index);
    }
    // workspace_security_group_id - computed: true, optional: false, required: false
    get workspaceSecurityGroupId() {
        return this.getStringAttribute('workspace_security_group_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsWorkspacesDirectory = DataAwsWorkspacesDirectory;
_d = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectory[_d] = { fqn: "hashicorp_aws.DataAwsWorkspacesDirectory", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtd29ya3NwYWNlcy1kaXJlY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3cy13b3Jrc3BhY2VzLWRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQWMvQixNQUFhLGdEQUFpRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0YseUVBQXlFO0lBQ3pFLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O0FBekJILDRHQTBCQzs7O0FBQ0QsTUFBYSxtREFBb0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWhHLHlFQUF5RTtJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUVB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QUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFnQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBRUQsaUZBQWlGO0lBQzFFLHlCQUF5QixDQUFDLEtBQWE7UUFDNUMsT0FBTyxJQUFJLG1EQUFtRCxDQUFDLElBQUksRUFBRSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBRUQsbUZBQW1GO0lBQzVFLDJCQUEyQixDQUFDLEtBQWE7UUFDOUMsT0FBTyxJQUFJLHFEQUFxRCxDQUFDLElBQUksRUFBRSwrQkFBK0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQsaUZBQWlGO0lBQ2pGLElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDOztBQTVJSCxnRUE2SUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL2Qvd29ya3NwYWNlc19kaXJlY3RvcnkuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NXb3Jrc3BhY2VzRGlyZWN0b3J5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c1dvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2hhbmdlX2NvbXB1dGVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNoYW5nZUNvbXB1dGVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NoYW5nZV9jb21wdXRlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGluY3JlYXNlX3ZvbHVtZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jcmVhc2VWb2x1bWVTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY3JlYXNlX3ZvbHVtZV9zaXplJyk7XG4gIH1cblxuICAvLyByZWJ1aWxkX3dvcmtzcGFjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlYnVpbGRXb3Jrc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVidWlsZF93b3Jrc3BhY2UnKTtcbiAgfVxuXG4gIC8vIHJlc3RhcnRfd29ya3NwYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVzdGFydFdvcmtzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXN0YXJ0X3dvcmtzcGFjZScpO1xuICB9XG5cbiAgLy8gc3dpdGNoX3J1bm5pbmdfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN3aXRjaFJ1bm5pbmdNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N3aXRjaF9ydW5uaW5nX21vZGUnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRldmljZV90eXBlX2FuZHJvaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlQW5kcm9pZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX2FuZHJvaWQnKTtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX2Nocm9tZW9zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZUNocm9tZW9zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfY2hyb21lb3MnKTtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX2lvcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVJb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV9pb3MnKTtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX29zeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVPc3goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV9vc3gnKTtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX3dlYiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVXZWIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV93ZWInKTtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX3dpbmRvd3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlV2luZG93cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX3dpbmRvd3MnKTtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX3plcm9jbGllbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlWmVyb2NsaWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX3plcm9jbGllbnQnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3VzdG9tX3NlY3VyaXR5X2dyb3VwX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX3NlY3VyaXR5X2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyBkZWZhdWx0X291IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmYXVsdE91KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9vdScpO1xuICB9XG5cbiAgLy8gZW5hYmxlX2ludGVybmV0X2FjY2VzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZUludGVybmV0QWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9pbnRlcm5ldF9hY2Nlc3MnKTtcbiAgfVxuXG4gIC8vIGVuYWJsZV9tYWludGVuYW5jZV9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlTWFpbnRlbmFuY2VNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9tYWludGVuYW5jZV9tb2RlJyk7XG4gIH1cblxuICAvLyB1c2VyX2VuYWJsZWRfYXNfbG9jYWxfYWRtaW5pc3RyYXRvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJFbmFibGVkQXNMb2NhbEFkbWluaXN0cmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlcl9lbmFibGVkX2FzX2xvY2FsX2FkbWluaXN0cmF0b3InKTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzV29ya3NwYWNlc0RpcmVjdG9yeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NXb3Jrc3BhY2VzRGlyZWN0b3J5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfd29ya3NwYWNlc19kaXJlY3RvcnknLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGlyZWN0b3J5SWQgPSBjb25maWcuZGlyZWN0b3J5SWQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGlhcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFsaWFzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxpYXMnKTtcbiAgfVxuXG4gIC8vIGN1c3RvbWVyX3VzZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyVXNlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21lcl91c2VyX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRpcmVjdG9yeV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kaXJlY3RvcnlJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlyZWN0b3J5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaXJlY3RvcnlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlyZWN0b3J5SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0b3J5SWRcbiAgfVxuXG4gIC8vIGRpcmVjdG9yeV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpcmVjdG9yeV9uYW1lJyk7XG4gIH1cblxuICAvLyBkaXJlY3RvcnlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3RvcnlfdHlwZScpO1xuICB9XG5cbiAgLy8gZG5zX2lwX2FkZHJlc3NlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRuc0lwQWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2Ruc19pcF9hZGRyZXNzZXMnKTtcbiAgfVxuXG4gIC8vIGlhbV9yb2xlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWFtUm9sZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtX3JvbGVfaWQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpcF9ncm91cF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcEdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lwX2dyb3VwX2lkcycpO1xuICB9XG5cbiAgLy8gcmVnaXN0cmF0aW9uX2NvZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWdpc3RyYXRpb25Db2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaXN0cmF0aW9uX2NvZGUnKTtcbiAgfVxuXG4gIC8vIHNlbGZfc2VydmljZV9wZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgc2VsZlNlcnZpY2VQZXJtaXNzaW9ucyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnModGhpcywgJ3NlbGZfc2VydmljZV9wZXJtaXNzaW9ucycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gd29ya3NwYWNlX2FjY2Vzc19wcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyB3b3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyh0aGlzLCAnd29ya3NwYWNlX2FjY2Vzc19wcm9wZXJ0aWVzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gd29ya3NwYWNlX2NyZWF0aW9uX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcyh0aGlzLCAnd29ya3NwYWNlX2NyZWF0aW9uX3Byb3BlcnRpZXMnLCBpbmRleCk7XG4gIH1cblxuICAvLyB3b3Jrc3BhY2Vfc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3b3Jrc3BhY2VTZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3b3Jrc3BhY2Vfc2VjdXJpdHlfZ3JvdXBfaWQnKTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0b3J5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kaXJlY3RvcnlJZCksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=