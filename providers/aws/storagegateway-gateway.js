"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragegatewayGateway = exports.StoragegatewayGatewayGatewayNetworkInterface = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class StoragegatewayGatewayGatewayNetworkInterface extends cdktf.ComplexComputedList {
    // ipv4_address - computed: true, optional: false, required: false
    get ipv4Address() {
        return this.getStringAttribute('ipv4_address');
    }
}
exports.StoragegatewayGatewayGatewayNetworkInterface = StoragegatewayGatewayGatewayNetworkInterface;
_a = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewayGatewayNetworkInterface[_a] = { fqn: "hashicorp_aws.StoragegatewayGatewayGatewayNetworkInterface", version: "0.0.0" };
function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain_controllers: cdktf.listMapper(cdktf.stringToTerraform)(struct.domainControllers),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        organizational_unit: cdktf.stringToTerraform(struct.organizationalUnit),
        password: cdktf.stringToTerraform(struct.password),
        timeout_in_seconds: cdktf.numberToTerraform(struct.timeoutInSeconds),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function storagegatewayGatewayTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway}.
 */
class StoragegatewayGateway extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_storagegateway_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._activationKey = config.activationKey;
        this._averageDownloadRateLimitInBitsPerSec = config.averageDownloadRateLimitInBitsPerSec;
        this._averageUploadRateLimitInBitsPerSec = config.averageUploadRateLimitInBitsPerSec;
        this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        this._gatewayIpAddress = config.gatewayIpAddress;
        this._gatewayName = config.gatewayName;
        this._gatewayTimezone = config.gatewayTimezone;
        this._gatewayType = config.gatewayType;
        this._gatewayVpcEndpoint = config.gatewayVpcEndpoint;
        this._mediumChangerType = config.mediumChangerType;
        this._smbFileShareVisibility = config.smbFileShareVisibility;
        this._smbGuestPassword = config.smbGuestPassword;
        this._smbSecurityStrategy = config.smbSecurityStrategy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._tapeDriveType = config.tapeDriveType;
        this._smbActiveDirectorySettings = config.smbActiveDirectorySettings;
        this._timeouts = config.timeouts;
    }
    get activationKey() {
        return this.getStringAttribute('activation_key');
    }
    set activationKey(value) {
        this._activationKey = value;
    }
    resetActivationKey() {
        this._activationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activationKeyInput() {
        return this._activationKey;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get averageDownloadRateLimitInBitsPerSec() {
        return this.getNumberAttribute('average_download_rate_limit_in_bits_per_sec');
    }
    set averageDownloadRateLimitInBitsPerSec(value) {
        this._averageDownloadRateLimitInBitsPerSec = value;
    }
    resetAverageDownloadRateLimitInBitsPerSec() {
        this._averageDownloadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get averageDownloadRateLimitInBitsPerSecInput() {
        return this._averageDownloadRateLimitInBitsPerSec;
    }
    get averageUploadRateLimitInBitsPerSec() {
        return this.getNumberAttribute('average_upload_rate_limit_in_bits_per_sec');
    }
    set averageUploadRateLimitInBitsPerSec(value) {
        this._averageUploadRateLimitInBitsPerSec = value;
    }
    resetAverageUploadRateLimitInBitsPerSec() {
        this._averageUploadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get averageUploadRateLimitInBitsPerSecInput() {
        return this._averageUploadRateLimitInBitsPerSec;
    }
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    set cloudwatchLogGroupArn(value) {
        this._cloudwatchLogGroupArn = value;
    }
    resetCloudwatchLogGroupArn() {
        this._cloudwatchLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLogGroupArnInput() {
        return this._cloudwatchLogGroupArn;
    }
    // ec2_instance_id - computed: true, optional: false, required: false
    get ec2InstanceId() {
        return this.getStringAttribute('ec2_instance_id');
    }
    // endpoint_type - computed: true, optional: false, required: false
    get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    // gateway_id - computed: true, optional: false, required: false
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    get gatewayIpAddress() {
        return this.getStringAttribute('gateway_ip_address');
    }
    set gatewayIpAddress(value) {
        this._gatewayIpAddress = value;
    }
    resetGatewayIpAddress() {
        this._gatewayIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIpAddressInput() {
        return this._gatewayIpAddress;
    }
    get gatewayName() {
        return this.getStringAttribute('gateway_name');
    }
    set gatewayName(value) {
        this._gatewayName = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayNameInput() {
        return this._gatewayName;
    }
    // gateway_network_interface - computed: true, optional: false, required: false
    gatewayNetworkInterface(index) {
        return new StoragegatewayGatewayGatewayNetworkInterface(this, 'gateway_network_interface', index);
    }
    get gatewayTimezone() {
        return this.getStringAttribute('gateway_timezone');
    }
    set gatewayTimezone(value) {
        this._gatewayTimezone = value;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayTimezoneInput() {
        return this._gatewayTimezone;
    }
    get gatewayType() {
        return this.getStringAttribute('gateway_type');
    }
    set gatewayType(value) {
        this._gatewayType = value;
    }
    resetGatewayType() {
        this._gatewayType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayTypeInput() {
        return this._gatewayType;
    }
    get gatewayVpcEndpoint() {
        return this.getStringAttribute('gateway_vpc_endpoint');
    }
    set gatewayVpcEndpoint(value) {
        this._gatewayVpcEndpoint = value;
    }
    resetGatewayVpcEndpoint() {
        this._gatewayVpcEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayVpcEndpointInput() {
        return this._gatewayVpcEndpoint;
    }
    // host_environment - computed: true, optional: false, required: false
    get hostEnvironment() {
        return this.getStringAttribute('host_environment');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get mediumChangerType() {
        return this.getStringAttribute('medium_changer_type');
    }
    set mediumChangerType(value) {
        this._mediumChangerType = value;
    }
    resetMediumChangerType() {
        this._mediumChangerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mediumChangerTypeInput() {
        return this._mediumChangerType;
    }
    get smbFileShareVisibility() {
        return this.getBooleanAttribute('smb_file_share_visibility');
    }
    set smbFileShareVisibility(value) {
        this._smbFileShareVisibility = value;
    }
    resetSmbFileShareVisibility() {
        this._smbFileShareVisibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbFileShareVisibilityInput() {
        return this._smbFileShareVisibility;
    }
    get smbGuestPassword() {
        return this.getStringAttribute('smb_guest_password');
    }
    set smbGuestPassword(value) {
        this._smbGuestPassword = value;
    }
    resetSmbGuestPassword() {
        this._smbGuestPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbGuestPasswordInput() {
        return this._smbGuestPassword;
    }
    get smbSecurityStrategy() {
        return this.getStringAttribute('smb_security_strategy');
    }
    set smbSecurityStrategy(value) {
        this._smbSecurityStrategy = value;
    }
    resetSmbSecurityStrategy() {
        this._smbSecurityStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbSecurityStrategyInput() {
        return this._smbSecurityStrategy;
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
    get tapeDriveType() {
        return this.getStringAttribute('tape_drive_type');
    }
    set tapeDriveType(value) {
        this._tapeDriveType = value;
    }
    resetTapeDriveType() {
        this._tapeDriveType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tapeDriveTypeInput() {
        return this._tapeDriveType;
    }
    get smbActiveDirectorySettings() {
        return this.interpolationForAttribute('smb_active_directory_settings');
    }
    set smbActiveDirectorySettings(value) {
        this._smbActiveDirectorySettings = value;
    }
    resetSmbActiveDirectorySettings() {
        this._smbActiveDirectorySettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get smbActiveDirectorySettingsInput() {
        return this._smbActiveDirectorySettings;
    }
    get timeouts() {
        return this.interpolationForAttribute('timeouts');
    }
    set timeouts(value) {
        this._timeouts = value;
    }
    resetTimeouts() {
        this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            activation_key: cdktf.stringToTerraform(this._activationKey),
            average_download_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageDownloadRateLimitInBitsPerSec),
            average_upload_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageUploadRateLimitInBitsPerSec),
            cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
            gateway_ip_address: cdktf.stringToTerraform(this._gatewayIpAddress),
            gateway_name: cdktf.stringToTerraform(this._gatewayName),
            gateway_timezone: cdktf.stringToTerraform(this._gatewayTimezone),
            gateway_type: cdktf.stringToTerraform(this._gatewayType),
            gateway_vpc_endpoint: cdktf.stringToTerraform(this._gatewayVpcEndpoint),
            medium_changer_type: cdktf.stringToTerraform(this._mediumChangerType),
            smb_file_share_visibility: cdktf.booleanToTerraform(this._smbFileShareVisibility),
            smb_guest_password: cdktf.stringToTerraform(this._smbGuestPassword),
            smb_security_strategy: cdktf.stringToTerraform(this._smbSecurityStrategy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tape_drive_type: cdktf.stringToTerraform(this._tapeDriveType),
            smb_active_directory_settings: cdktf.listMapper(storagegatewayGatewaySmbActiveDirectorySettingsToTerraform)(this._smbActiveDirectorySettings),
            timeouts: storagegatewayGatewayTimeoutsToTerraform(this._timeouts),
        };
    }
}
exports.StoragegatewayGateway = StoragegatewayGateway;
_b = JSII_RTTI_SYMBOL_1;
StoragegatewayGateway[_b] = { fqn: "hashicorp_aws.StoragegatewayGateway", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZWdhdGV3YXktZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b3JhZ2VnYXRld2F5LWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUFrRi9CLE1BQWEsNENBQTZDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV6RixrRUFBa0U7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O0FBTEgsb0dBTUM7OztBQTRCRCxTQUFTLDBEQUEwRCxDQUFDLE1BQXdEO0lBQzFILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDeEYsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDeEUsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25ELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3BELENBQUE7QUFDSCxDQUFDO0FBU0QsU0FBUyx3Q0FBd0MsQ0FBQyxNQUFzQztJQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFB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QUFJLENBQUMsMkJBQTJCLENBQUM7WUFDN0ksUUFBUSxFQUFFLHdDQUF3QyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbkUsQ0FBQztJQUNKLENBQUM7O0FBdFlILHNEQXVZQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9zdG9yYWdlZ2F0ZXdheV9nYXRld2F5Lmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGl2YXRpb25LZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ0dyb3VwQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnYXRld2F5SXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnYXRld2F5TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdhdGV3YXlUaW1lem9uZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnYXRld2F5VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdhdGV3YXlWcGNFbmRwb2ludD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZWRpdW1DaGFuZ2VyVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbWJGaWxlU2hhcmVWaXNpYmlsaXR5PzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21iR3Vlc3RQYXNzd29yZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21iU2VjdXJpdHlTdHJhdGVneT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXBlRHJpdmVUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3M/OiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0cztcbn1cbmV4cG9ydCBjbGFzcyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlHYXRld2F5TmV0d29ya0ludGVyZmFjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGlwdjRfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwdjRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaXB2NF9hZGRyZXNzJyk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZWdhdGV3YXlHYXRld2F5U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkb21haW5Db250cm9sbGVycz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yZ2FuaXphdGlvbmFsVW5pdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRJblNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRvbWFpbl9jb250cm9sbGVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kb21haW5Db250cm9sbGVycyksXG4gICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluTmFtZSksXG4gICAgb3JnYW5pemF0aW9uYWxfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXQpLFxuICAgIHBhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhc3N3b3JkKSxcbiAgICB0aW1lb3V0X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dEluU2Vjb25kcyksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZWdhdGV3YXlHYXRld2F5VGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogU3RvcmFnZWdhdGV3YXlHYXRld2F5VGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgU3RvcmFnZWdhdGV3YXlHYXRld2F5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU3RvcmFnZWdhdGV3YXlHYXRld2F5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc3RvcmFnZWdhdGV3YXlfZ2F0ZXdheScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hY3RpdmF0aW9uS2V5ID0gY29uZmlnLmFjdGl2YXRpb25LZXk7XG4gICAgdGhpcy5fYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gY29uZmlnLmF2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYztcbiAgICB0aGlzLl9hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gY29uZmlnLmF2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWM7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwQXJuID0gY29uZmlnLmNsb3Vkd2F0Y2hMb2dHcm91cEFybjtcbiAgICB0aGlzLl9nYXRld2F5SXBBZGRyZXNzID0gY29uZmlnLmdhdGV3YXlJcEFkZHJlc3M7XG4gICAgdGhpcy5fZ2F0ZXdheU5hbWUgPSBjb25maWcuZ2F0ZXdheU5hbWU7XG4gICAgdGhpcy5fZ2F0ZXdheVRpbWV6b25lID0gY29uZmlnLmdhdGV3YXlUaW1lem9uZTtcbiAgICB0aGlzLl9nYXRld2F5VHlwZSA9IGNvbmZpZy5nYXRld2F5VHlwZTtcbiAgICB0aGlzLl9nYXRld2F5VnBjRW5kcG9pbnQgPSBjb25maWcuZ2F0ZXdheVZwY0VuZHBvaW50O1xuICAgIHRoaXMuX21lZGl1bUNoYW5nZXJUeXBlID0gY29uZmlnLm1lZGl1bUNoYW5nZXJUeXBlO1xuICAgIHRoaXMuX3NtYkZpbGVTaGFyZVZpc2liaWxpdHkgPSBjb25maWcuc21iRmlsZVNoYXJlVmlzaWJpbGl0eTtcbiAgICB0aGlzLl9zbWJHdWVzdFBhc3N3b3JkID0gY29uZmlnLnNtYkd1ZXN0UGFzc3dvcmQ7XG4gICAgdGhpcy5fc21iU2VjdXJpdHlTdHJhdGVneSA9IGNvbmZpZy5zbWJTZWN1cml0eVN0cmF0ZWd5O1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdGFwZURyaXZlVHlwZSA9IGNvbmZpZy50YXBlRHJpdmVUeXBlO1xuICAgIHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzID0gY29uZmlnLnNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzO1xuICAgIHRoaXMuX3RpbWVvdXRzID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY3RpdmF0aW9uX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjdGl2YXRpb25LZXk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYWN0aXZhdGlvbktleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGl2YXRpb25fa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3RpdmF0aW9uS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3RpdmF0aW9uS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWN0aXZhdGlvbktleSgpIHtcbiAgICB0aGlzLl9hY3RpdmF0aW9uS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3RpdmF0aW9uS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRpb25LZXlcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXZlcmFnZV9kb3dubG9hZF9yYXRlX2xpbWl0X2luX2JpdHNfcGVyX3NlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYXZlcmFnZV9kb3dubG9hZF9yYXRlX2xpbWl0X2luX2JpdHNfcGVyX3NlYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKCkge1xuICAgIHRoaXMuX2F2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlY1xuICB9XG5cbiAgLy8gYXZlcmFnZV91cGxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYz86IG51bWJlcjtcbiAgcHVibGljIGdldCBhdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYXZlcmFnZV91cGxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYygpIHtcbiAgICB0aGlzLl9hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWNcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoTG9nR3JvdXBBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ0dyb3VwQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbG91ZHdhdGNoTG9nR3JvdXBBcm4odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nR3JvdXBBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwQXJuXG4gIH1cblxuICAvLyBlYzJfaW5zdGFuY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYzJJbnN0YW5jZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWMyX2luc3RhbmNlX2lkJyk7XG4gIH1cblxuICAvLyBlbmRwb2ludF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnRfdHlwZScpO1xuICB9XG5cbiAgLy8gZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfaWQnKTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfaXBfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dhdGV3YXlJcEFkZHJlc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfaXBfYWRkcmVzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheUlwQWRkcmVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2F0ZXdheUlwQWRkcmVzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdhdGV3YXlJcEFkZHJlc3MoKSB7XG4gICAgdGhpcy5fZ2F0ZXdheUlwQWRkcmVzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlwQWRkcmVzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nYXRld2F5SXBBZGRyZXNzXG4gIH1cblxuICAvLyBnYXRld2F5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZ2F0ZXdheU5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBnYXRld2F5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dhdGV3YXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdhdGV3YXlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlOYW1lXG4gIH1cblxuICAvLyBnYXRld2F5X25ldHdvcmtfaW50ZXJmYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnYXRld2F5TmV0d29ya0ludGVyZmFjZShpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlHYXRld2F5TmV0d29ya0ludGVyZmFjZSh0aGlzLCAnZ2F0ZXdheV9uZXR3b3JrX2ludGVyZmFjZScsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfdGltZXpvbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZ2F0ZXdheVRpbWV6b25lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVRpbWV6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV90aW1lem9uZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheVRpbWV6b25lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nYXRld2F5VGltZXpvbmUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVRpbWV6b25lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlUaW1lem9uZVxuICB9XG5cbiAgLy8gZ2F0ZXdheV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dhdGV3YXlUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGdhdGV3YXlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBnYXRld2F5VHlwZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2dhdGV3YXlUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2F0ZXdheVR5cGUoKSB7XG4gICAgdGhpcy5fZ2F0ZXdheVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdhdGV3YXlUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlUeXBlXG4gIH1cblxuICAvLyBnYXRld2F5X3ZwY19lbmRwb2ludCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9nYXRld2F5VnBjRW5kcG9pbnQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVZwY0VuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV92cGNfZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdhdGV3YXlWcGNFbmRwb2ludCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2dhdGV3YXlWcGNFbmRwb2ludCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdhdGV3YXlWcGNFbmRwb2ludCgpIHtcbiAgICB0aGlzLl9nYXRld2F5VnBjRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdhdGV3YXlWcGNFbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nYXRld2F5VnBjRW5kcG9pbnRcbiAgfVxuXG4gIC8vIGhvc3RfZW52aXJvbm1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0RW52aXJvbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X2Vudmlyb25tZW50Jyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbWVkaXVtX2NoYW5nZXJfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZWRpdW1DaGFuZ2VyVHlwZT86IHN0cmluZztcbiAgcHVibGljIGdldCBtZWRpdW1DaGFuZ2VyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lZGl1bV9jaGFuZ2VyX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lZGl1bUNoYW5nZXJUeXBlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbWVkaXVtQ2hhbmdlclR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZWRpdW1DaGFuZ2VyVHlwZSgpIHtcbiAgICB0aGlzLl9tZWRpdW1DaGFuZ2VyVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVkaXVtQ2hhbmdlclR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVkaXVtQ2hhbmdlclR5cGVcbiAgfVxuXG4gIC8vIHNtYl9maWxlX3NoYXJlX3Zpc2liaWxpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc21iRmlsZVNoYXJlVmlzaWJpbGl0eT86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgc21iRmlsZVNoYXJlVmlzaWJpbGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzbWJfZmlsZV9zaGFyZV92aXNpYmlsaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzbWJGaWxlU2hhcmVWaXNpYmlsaXR5KHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX3NtYkZpbGVTaGFyZVZpc2liaWxpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbWJGaWxlU2hhcmVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuX3NtYkZpbGVTaGFyZVZpc2liaWxpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtYkZpbGVTaGFyZVZpc2liaWxpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21iRmlsZVNoYXJlVmlzaWJpbGl0eVxuICB9XG5cbiAgLy8gc21iX2d1ZXN0X3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NtYkd1ZXN0UGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc21iR3Vlc3RQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NtYl9ndWVzdF9wYXNzd29yZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc21iR3Vlc3RQYXNzd29yZCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbWJHdWVzdFBhc3N3b3JkKCkge1xuICAgIHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtYkd1ZXN0UGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21iR3Vlc3RQYXNzd29yZFxuICB9XG5cbiAgLy8gc21iX3NlY3VyaXR5X3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc21iU2VjdXJpdHlTdHJhdGVneT86IHN0cmluZztcbiAgcHVibGljIGdldCBzbWJTZWN1cml0eVN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21iX3NlY3VyaXR5X3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzbWJTZWN1cml0eVN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21iU2VjdXJpdHlTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbWJTZWN1cml0eVN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NtYlNlY3VyaXR5U3RyYXRlZ3lcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzQWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsXG4gIH1cblxuICAvLyB0YXBlX2RyaXZlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFwZURyaXZlVHlwZT86IHN0cmluZztcbiAgcHVibGljIGdldCB0YXBlRHJpdmVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFwZV9kcml2ZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXBlRHJpdmVUeXBlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdGFwZURyaXZlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcGVEcml2ZVR5cGUoKSB7XG4gICAgdGhpcy5fdGFwZURyaXZlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFwZURyaXZlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXBlRHJpdmVUeXBlXG4gIH1cblxuICAvLyBzbWJfYWN0aXZlX2RpcmVjdG9yeV9zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncz86IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzW107XG4gIHB1YmxpYyBnZXQgc21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc21iX2FjdGl2ZV9kaXJlY3Rvcnlfc2V0dGluZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncyh2YWx1ZTogU3RvcmFnZWdhdGV3YXlHYXRld2F5U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3NbXSApIHtcbiAgICB0aGlzLl9zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKCkge1xuICAgIHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHM/OiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0cztcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aW1lb3V0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRzKHZhbHVlOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0cyApIHtcbiAgICB0aGlzLl90aW1lb3V0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0c1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmF0aW9uX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWN0aXZhdGlvbktleSksXG4gICAgICBhdmVyYWdlX2Rvd25sb2FkX3JhdGVfbGltaXRfaW5fYml0c19wZXJfc2VjOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMpLFxuICAgICAgYXZlcmFnZV91cGxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2F2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMpLFxuICAgICAgY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgICAgZ2F0ZXdheV9pcF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nYXRld2F5SXBBZGRyZXNzKSxcbiAgICAgIGdhdGV3YXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheU5hbWUpLFxuICAgICAgZ2F0ZXdheV90aW1lem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheVRpbWV6b25lKSxcbiAgICAgIGdhdGV3YXlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheVR5cGUpLFxuICAgICAgZ2F0ZXdheV92cGNfZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2dhdGV3YXlWcGNFbmRwb2ludCksXG4gICAgICBtZWRpdW1fY2hhbmdlcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZWRpdW1DaGFuZ2VyVHlwZSksXG4gICAgICBzbWJfZmlsZV9zaGFyZV92aXNpYmlsaXR5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc21iRmlsZVNoYXJlVmlzaWJpbGl0eSksXG4gICAgICBzbWJfZ3Vlc3RfcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQpLFxuICAgICAgc21iX3NlY3VyaXR5X3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGFwZV9kcml2ZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXBlRHJpdmVUeXBlKSxcbiAgICAgIHNtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKHN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzVG9UZXJyYWZvcm0pKHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKSxcbiAgICAgIHRpbWVvdXRzOiBzdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=