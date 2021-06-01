"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsMqBroker = exports.DataAwsMqBrokerUser = exports.DataAwsMqBrokerMaintenanceWindowStartTime = exports.DataAwsMqBrokerLdapServerMetadata = exports.DataAwsMqBrokerInstances = exports.DataAwsMqBrokerEncryptionOptions = exports.DataAwsMqBrokerConfiguration = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class DataAwsMqBrokerConfiguration extends cdktf.ComplexComputedList {
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // revision - computed: true, optional: false, required: false
    get revision() {
        return this.getNumberAttribute('revision');
    }
}
exports.DataAwsMqBrokerConfiguration = DataAwsMqBrokerConfiguration;
_a = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerConfiguration[_a] = { fqn: "hashicorp_aws.DataAwsMqBrokerConfiguration", version: "0.0.0" };
class DataAwsMqBrokerEncryptionOptions extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // use_aws_owned_key - computed: true, optional: false, required: false
    get useAwsOwnedKey() {
        return this.getBooleanAttribute('use_aws_owned_key');
    }
}
exports.DataAwsMqBrokerEncryptionOptions = DataAwsMqBrokerEncryptionOptions;
_b = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerEncryptionOptions[_b] = { fqn: "hashicorp_aws.DataAwsMqBrokerEncryptionOptions", version: "0.0.0" };
class DataAwsMqBrokerInstances extends cdktf.ComplexComputedList {
    // console_url - computed: true, optional: false, required: false
    get consoleUrl() {
        return this.getStringAttribute('console_url');
    }
    // endpoints - computed: true, optional: false, required: false
    get endpoints() {
        return this.getListAttribute('endpoints');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
}
exports.DataAwsMqBrokerInstances = DataAwsMqBrokerInstances;
_c = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerInstances[_c] = { fqn: "hashicorp_aws.DataAwsMqBrokerInstances", version: "0.0.0" };
class DataAwsMqBrokerLdapServerMetadata extends cdktf.ComplexComputedList {
    // hosts - computed: true, optional: false, required: false
    get hosts() {
        return this.getListAttribute('hosts');
    }
    // role_base - computed: true, optional: false, required: false
    get roleBase() {
        return this.getStringAttribute('role_base');
    }
    // role_name - computed: true, optional: false, required: false
    get roleName() {
        return this.getStringAttribute('role_name');
    }
    // role_search_matching - computed: true, optional: false, required: false
    get roleSearchMatching() {
        return this.getStringAttribute('role_search_matching');
    }
    // role_search_subtree - computed: true, optional: false, required: false
    get roleSearchSubtree() {
        return this.getBooleanAttribute('role_search_subtree');
    }
    // service_account_password - computed: true, optional: false, required: false
    get serviceAccountPassword() {
        return this.getStringAttribute('service_account_password');
    }
    // service_account_username - computed: true, optional: false, required: false
    get serviceAccountUsername() {
        return this.getStringAttribute('service_account_username');
    }
    // user_base - computed: true, optional: false, required: false
    get userBase() {
        return this.getStringAttribute('user_base');
    }
    // user_role_name - computed: true, optional: false, required: false
    get userRoleName() {
        return this.getStringAttribute('user_role_name');
    }
    // user_search_matching - computed: true, optional: false, required: false
    get userSearchMatching() {
        return this.getStringAttribute('user_search_matching');
    }
    // user_search_subtree - computed: true, optional: false, required: false
    get userSearchSubtree() {
        return this.getBooleanAttribute('user_search_subtree');
    }
}
exports.DataAwsMqBrokerLdapServerMetadata = DataAwsMqBrokerLdapServerMetadata;
_d = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerLdapServerMetadata[_d] = { fqn: "hashicorp_aws.DataAwsMqBrokerLdapServerMetadata", version: "0.0.0" };
class DataAwsMqBrokerMaintenanceWindowStartTime extends cdktf.ComplexComputedList {
    // day_of_week - computed: true, optional: false, required: false
    get dayOfWeek() {
        return this.getStringAttribute('day_of_week');
    }
    // time_of_day - computed: true, optional: false, required: false
    get timeOfDay() {
        return this.getStringAttribute('time_of_day');
    }
    // time_zone - computed: true, optional: false, required: false
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
}
exports.DataAwsMqBrokerMaintenanceWindowStartTime = DataAwsMqBrokerMaintenanceWindowStartTime;
_e = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerMaintenanceWindowStartTime[_e] = { fqn: "hashicorp_aws.DataAwsMqBrokerMaintenanceWindowStartTime", version: "0.0.0" };
class DataAwsMqBrokerUser extends cdktf.ComplexComputedList {
    // console_access - computed: true, optional: false, required: false
    get consoleAccess() {
        return this.getBooleanAttribute('console_access');
    }
    // groups - computed: true, optional: false, required: false
    get groups() {
        return this.getListAttribute('groups');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsMqBrokerUser = DataAwsMqBrokerUser;
_f = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerUser[_f] = { fqn: "hashicorp_aws.DataAwsMqBrokerUser", version: "0.0.0" };
function dataAwsMqBrokerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker}.
 */
class DataAwsMqBroker extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_mq_broker',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._brokerId = config.brokerId;
        this._brokerName = config.brokerName;
        this._tags = config.tags;
        this._logs = config.logs;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // authentication_strategy - computed: true, optional: false, required: false
    get authenticationStrategy() {
        return this.getStringAttribute('authentication_strategy');
    }
    // auto_minor_version_upgrade - computed: true, optional: false, required: false
    get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }
    get brokerId() {
        return this.getStringAttribute('broker_id');
    }
    set brokerId(value) {
        this._brokerId = value;
    }
    resetBrokerId() {
        this._brokerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get brokerIdInput() {
        return this._brokerId;
    }
    get brokerName() {
        return this.getStringAttribute('broker_name');
    }
    set brokerName(value) {
        this._brokerName = value;
    }
    resetBrokerName() {
        this._brokerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get brokerNameInput() {
        return this._brokerName;
    }
    // configuration - computed: true, optional: false, required: false
    configuration(index) {
        return new DataAwsMqBrokerConfiguration(this, 'configuration', index);
    }
    // deployment_mode - computed: true, optional: false, required: false
    get deploymentMode() {
        return this.getStringAttribute('deployment_mode');
    }
    // encryption_options - computed: true, optional: false, required: false
    encryptionOptions(index) {
        return new DataAwsMqBrokerEncryptionOptions(this, 'encryption_options', index);
    }
    // engine_type - computed: true, optional: false, required: false
    get engineType() {
        return this.getStringAttribute('engine_type');
    }
    // engine_version - computed: true, optional: false, required: false
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    // host_instance_type - computed: true, optional: false, required: false
    get hostInstanceType() {
        return this.getStringAttribute('host_instance_type');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instances - computed: true, optional: false, required: false
    instances(index) {
        return new DataAwsMqBrokerInstances(this, 'instances', index);
    }
    // ldap_server_metadata - computed: true, optional: false, required: false
    ldapServerMetadata(index) {
        return new DataAwsMqBrokerLdapServerMetadata(this, 'ldap_server_metadata', index);
    }
    // maintenance_window_start_time - computed: true, optional: false, required: false
    maintenanceWindowStartTime(index) {
        return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index);
    }
    // publicly_accessible - computed: true, optional: false, required: false
    get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // storage_type - computed: true, optional: false, required: false
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    get tags() {
        return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
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
    // user - computed: true, optional: false, required: false
    user(index) {
        return new DataAwsMqBrokerUser(this, 'user', index);
    }
    get logs() {
        return this.interpolationForAttribute('logs');
    }
    set logs(value) {
        this._logs = value;
    }
    resetLogs() {
        this._logs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logsInput() {
        return this._logs;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            broker_id: cdktf.stringToTerraform(this._brokerId),
            broker_name: cdktf.stringToTerraform(this._brokerName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            logs: cdktf.listMapper(dataAwsMqBrokerLogsToTerraform)(this._logs),
        };
    }
}
exports.DataAwsMqBroker = DataAwsMqBroker;
_g = JSII_RTTI_SYMBOL_1;
DataAwsMqBroker[_g] = { fqn: "hashicorp_aws.DataAwsMqBroker", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbXEtYnJva2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3MtbXEtYnJva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBd0IvQixNQUFhLDRCQUE2QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFekUsd0RBQXdEO0lBQ3hELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0FBVkgsb0VBV0M7OztBQUNELE1BQWEsZ0NBQWlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3RSxnRUFBZ0U7SUFDaEUsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx1RUFBdUU7SUFDdkUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7QUFWSCw0RUFXQzs7O0FBQ0QsTUFBYSx3QkFBeUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXJFLGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7QUFm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QUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7O0FBdk1ILDBDQXdNQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3MvZC9tcV9icm9rZXIuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NNcUJyb2tlckNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJyb2tlcklkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBicm9rZXJOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ3M/OiBEYXRhQXdzTXFCcm9rZXJMb2dzW107XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c01xQnJva2VyQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcmV2aXNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXZpc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JldmlzaW9uJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTXFCcm9rZXJFbmNyeXB0aW9uT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuXG4gIC8vIHVzZV9hd3Nfb3duZWRfa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlQXdzT3duZWRLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2F3c19vd25lZF9rZXknKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NNcUJyb2tlckluc3RhbmNlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbnNvbGVfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uc29sZVVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnNvbGVfdXJsJyk7XG4gIH1cblxuICAvLyBlbmRwb2ludHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZW5kcG9pbnRzJyk7XG4gIH1cblxuICAvLyBpcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXBfYWRkcmVzcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c01xQnJva2VyTGRhcFNlcnZlck1ldGFkYXRhIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaG9zdHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdob3N0cycpO1xuICB9XG5cbiAgLy8gcm9sZV9iYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2Jhc2UnKTtcbiAgfVxuXG4gIC8vIHJvbGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9uYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX3NlYXJjaF9tYXRjaGluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVTZWFyY2hNYXRjaGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfc2VhcmNoX21hdGNoaW5nJyk7XG4gIH1cblxuICAvLyByb2xlX3NlYXJjaF9zdWJ0cmVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZVNlYXJjaFN1YnRyZWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncm9sZV9zZWFyY2hfc3VidHJlZScpO1xuICB9XG5cbiAgLy8gc2VydmljZV9hY2NvdW50X3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY291bnRQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfYWNjb3VudF9wYXNzd29yZCcpO1xuICB9XG5cbiAgLy8gc2VydmljZV9hY2NvdW50X3VzZXJuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY291bnRVc2VybmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfYWNjb3VudF91c2VybmFtZScpO1xuICB9XG5cbiAgLy8gdXNlcl9iYXNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlckJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX2Jhc2UnKTtcbiAgfVxuXG4gIC8vIHVzZXJfcm9sZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlclJvbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9yb2xlX25hbWUnKTtcbiAgfVxuXG4gIC8vIHVzZXJfc2VhcmNoX21hdGNoaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlclNlYXJjaE1hdGNoaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9zZWFyY2hfbWF0Y2hpbmcnKTtcbiAgfVxuXG4gIC8vIHVzZXJfc2VhcmNoX3N1YnRyZWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyU2VhcmNoU3VidHJlZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VyX3NlYXJjaF9zdWJ0cmVlJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTXFCcm9rZXJNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRheV9vZl93ZWVrIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF5T2ZXZWVrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF5X29mX3dlZWsnKTtcbiAgfVxuXG4gIC8vIHRpbWVfb2ZfZGF5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZU9mRGF5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZV9vZl9kYXknKTtcbiAgfVxuXG4gIC8vIHRpbWVfem9uZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWVab25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZV96b25lJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTXFCcm9rZXJVc2VyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29uc29sZV9hY2Nlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25zb2xlQWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvbnNvbGVfYWNjZXNzJyk7XG4gIH1cblxuICAvLyBncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBncm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZ3JvdXBzJyk7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcm5hbWUnKTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzTXFCcm9rZXJMb2dzIHtcbn1cblxuZnVuY3Rpb24gZGF0YUF3c01xQnJva2VyTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NNcUJyb2tlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NNcUJyb2tlciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c01xQnJva2VyQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19tcV9icm9rZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYnJva2VySWQgPSBjb25maWcuYnJva2VySWQ7XG4gICAgdGhpcy5fYnJva2VyTmFtZSA9IGNvbmZpZy5icm9rZXJOYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl9sb2dzID0gY29uZmlnLmxvZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0aGVudGljYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aGVudGljYXRpb25fc3RyYXRlZ3knKTtcbiAgfVxuXG4gIC8vIGF1dG9fbWlub3JfdmVyc2lvbl91cGdyYWRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0b01pbm9yVmVyc2lvblVwZ3JhZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19taW5vcl92ZXJzaW9uX3VwZ3JhZGUnKTtcbiAgfVxuXG4gIC8vIGJyb2tlcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jyb2tlcklkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGJyb2tlcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnJva2VyX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBicm9rZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnJva2VySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCcm9rZXJJZCgpIHtcbiAgICB0aGlzLl9icm9rZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnJva2VySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnJva2VySWRcbiAgfVxuXG4gIC8vIGJyb2tlcl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnJva2VyTmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBicm9rZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnJva2VyX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJyb2tlck5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Jyb2tlck5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCcm9rZXJOYW1lKCkge1xuICAgIHRoaXMuX2Jyb2tlck5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJyb2tlck5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnJva2VyTmFtZVxuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgY29uZmlndXJhdGlvbihpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTXFCcm9rZXJDb25maWd1cmF0aW9uKHRoaXMsICdjb25maWd1cmF0aW9uJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gZGVwbG95bWVudF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXBsb3ltZW50X21vZGUnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZW5jcnlwdGlvbk9wdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c01xQnJva2VyRW5jcnlwdGlvbk9wdGlvbnModGhpcywgJ2VuY3J5cHRpb25fb3B0aW9ucycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGVuZ2luZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5naW5lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZV90eXBlJyk7XG4gIH1cblxuICAvLyBlbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gaG9zdF9pbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdEluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfaW5zdGFuY2VfdHlwZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgaW5zdGFuY2VzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NNcUJyb2tlckluc3RhbmNlcyh0aGlzLCAnaW5zdGFuY2VzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gbGRhcF9zZXJ2ZXJfbWV0YWRhdGEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGxkYXBTZXJ2ZXJNZXRhZGF0YShpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTXFCcm9rZXJMZGFwU2VydmVyTWV0YWRhdGEodGhpcywgJ2xkYXBfc2VydmVyX21ldGFkYXRhJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0X3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIG1haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NNcUJyb2tlck1haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lKHRoaXMsICdtYWludGVuYW5jZV93aW5kb3dfc3RhcnRfdGltZScsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHB1YmxpY2x5X2FjY2Vzc2libGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwdWJsaWNseUFjY2Vzc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHVibGljbHlfYWNjZXNzaWJsZScpO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBzJyk7XG4gIH1cblxuICAvLyBzdG9yYWdlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdG9yYWdlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfdHlwZScpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHVzZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHVzZXIoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c01xQnJva2VyVXNlcih0aGlzLCAndXNlcicsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGxvZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9ncz86IERhdGFBd3NNcUJyb2tlckxvZ3NbXTtcbiAgcHVibGljIGdldCBsb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dzKHZhbHVlOiBEYXRhQXdzTXFCcm9rZXJMb2dzW10gKSB7XG4gICAgdGhpcy5fbG9ncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ3MoKSB7XG4gICAgdGhpcy5fbG9ncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb2tlcl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnJva2VySWQpLFxuICAgICAgYnJva2VyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Jyb2tlck5hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICBsb2dzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NNcUJyb2tlckxvZ3NUb1RlcnJhZm9ybSkodGhpcy5fbG9ncyksXG4gICAgfTtcbiAgfVxufVxuIl19