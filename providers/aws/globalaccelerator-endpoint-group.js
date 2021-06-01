"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalacceleratorEndpointGroup = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function globalacceleratorEndpointGroupEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_ip_preservation_enabled: cdktf.booleanToTerraform(struct.clientIpPreservationEnabled),
        endpoint_id: cdktf.stringToTerraform(struct.endpointId),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function globalacceleratorEndpointGroupPortOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_port: cdktf.numberToTerraform(struct.endpointPort),
        listener_port: cdktf.numberToTerraform(struct.listenerPort),
    };
}
function globalacceleratorEndpointGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group}.
 */
class GlobalacceleratorEndpointGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_globalaccelerator_endpoint_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._endpointGroupRegion = config.endpointGroupRegion;
        this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
        this._healthCheckPath = config.healthCheckPath;
        this._healthCheckPort = config.healthCheckPort;
        this._healthCheckProtocol = config.healthCheckProtocol;
        this._listenerArn = config.listenerArn;
        this._thresholdCount = config.thresholdCount;
        this._trafficDialPercentage = config.trafficDialPercentage;
        this._endpointConfiguration = config.endpointConfiguration;
        this._portOverride = config.portOverride;
        this._timeouts = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get endpointGroupRegion() {
        return this.getStringAttribute('endpoint_group_region');
    }
    set endpointGroupRegion(value) {
        this._endpointGroupRegion = value;
    }
    resetEndpointGroupRegion() {
        this._endpointGroupRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointGroupRegionInput() {
        return this._endpointGroupRegion;
    }
    get healthCheckIntervalSeconds() {
        return this.getNumberAttribute('health_check_interval_seconds');
    }
    set healthCheckIntervalSeconds(value) {
        this._healthCheckIntervalSeconds = value;
    }
    resetHealthCheckIntervalSeconds() {
        this._healthCheckIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckIntervalSecondsInput() {
        return this._healthCheckIntervalSeconds;
    }
    get healthCheckPath() {
        return this.getStringAttribute('health_check_path');
    }
    set healthCheckPath(value) {
        this._healthCheckPath = value;
    }
    resetHealthCheckPath() {
        this._healthCheckPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckPathInput() {
        return this._healthCheckPath;
    }
    get healthCheckPort() {
        return this.getNumberAttribute('health_check_port');
    }
    set healthCheckPort(value) {
        this._healthCheckPort = value;
    }
    resetHealthCheckPort() {
        this._healthCheckPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckPortInput() {
        return this._healthCheckPort;
    }
    get healthCheckProtocol() {
        return this.getStringAttribute('health_check_protocol');
    }
    set healthCheckProtocol(value) {
        this._healthCheckProtocol = value;
    }
    resetHealthCheckProtocol() {
        this._healthCheckProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get healthCheckProtocolInput() {
        return this._healthCheckProtocol;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get listenerArn() {
        return this.getStringAttribute('listener_arn');
    }
    set listenerArn(value) {
        this._listenerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get listenerArnInput() {
        return this._listenerArn;
    }
    get thresholdCount() {
        return this.getNumberAttribute('threshold_count');
    }
    set thresholdCount(value) {
        this._thresholdCount = value;
    }
    resetThresholdCount() {
        this._thresholdCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get thresholdCountInput() {
        return this._thresholdCount;
    }
    get trafficDialPercentage() {
        return this.getNumberAttribute('traffic_dial_percentage');
    }
    set trafficDialPercentage(value) {
        this._trafficDialPercentage = value;
    }
    resetTrafficDialPercentage() {
        this._trafficDialPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trafficDialPercentageInput() {
        return this._trafficDialPercentage;
    }
    get endpointConfiguration() {
        return this.interpolationForAttribute('endpoint_configuration');
    }
    set endpointConfiguration(value) {
        this._endpointConfiguration = value;
    }
    resetEndpointConfiguration() {
        this._endpointConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointConfigurationInput() {
        return this._endpointConfiguration;
    }
    get portOverride() {
        return this.interpolationForAttribute('port_override');
    }
    set portOverride(value) {
        this._portOverride = value;
    }
    resetPortOverride() {
        this._portOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portOverrideInput() {
        return this._portOverride;
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
            endpoint_group_region: cdktf.stringToTerraform(this._endpointGroupRegion),
            health_check_interval_seconds: cdktf.numberToTerraform(this._healthCheckIntervalSeconds),
            health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
            health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
            health_check_protocol: cdktf.stringToTerraform(this._healthCheckProtocol),
            listener_arn: cdktf.stringToTerraform(this._listenerArn),
            threshold_count: cdktf.numberToTerraform(this._thresholdCount),
            traffic_dial_percentage: cdktf.numberToTerraform(this._trafficDialPercentage),
            endpoint_configuration: cdktf.listMapper(globalacceleratorEndpointGroupEndpointConfigurationToTerraform)(this._endpointConfiguration),
            port_override: cdktf.listMapper(globalacceleratorEndpointGroupPortOverrideToTerraform)(this._portOverride),
            timeouts: globalacceleratorEndpointGroupTimeoutsToTerraform(this._timeouts),
        };
    }
}
exports.GlobalacceleratorEndpointGroup = GlobalacceleratorEndpointGroup;
_a = JSII_RTTI_SYMBOL_1;
GlobalacceleratorEndpointGroup[_a] = { fqn: "hashicorp_aws.GlobalacceleratorEndpointGroup", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsYWNjZWxlcmF0b3ItZW5kcG9pbnQtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnbG9iYWxhY2NlbGVyYXRvci1lbmRwb2ludC1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQXVFL0IsU0FBUyw4REFBOEQsQ0FBQyxNQUE0RDtJQUNsSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDN0YsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMscURBQXFELENBQUMsTUFBbUQ7SUFDaEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO0tBQzdELENBQUE7QUFDSCxDQUFDO0FBaUJELFNBQVMsaURBQWlELENBQUMsTUFBK0M7SUFDeEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENB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QUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDekUsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM5RCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzdFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOERBQThELENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDckksYUFBYSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscURBQXFELENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFHLFFBQVEsRUFBRSxpREFBaUQsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzVFLENBQUM7SUFDSixDQUFDOztBQWxQSCx3RUFtUEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvZ2xvYmFsYWNjZWxlcmF0b3JfZW5kcG9pbnRfZ3JvdXAuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRHcm91cFJlZ2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFsdGhDaGVja0ludGVydmFsU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFsdGhDaGVja1BhdGg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tQb3J0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tQcm90b2NvbD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxpc3RlbmVyQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJlc2hvbGRDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmFmZmljRGlhbFBlcmNlbnRhZ2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRDb25maWd1cmF0aW9uPzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwRW5kcG9pbnRDb25maWd1cmF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydE92ZXJyaWRlPzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwUG9ydE92ZXJyaWRlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBHbG9iYWxhY2NlbGVyYXRvckVuZHBvaW50R3JvdXBUaW1lb3V0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwRW5kcG9pbnRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudElwUHJlc2VydmF0aW9uRW5hYmxlZD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlaWdodD86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZ2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwRW5kcG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwRW5kcG9pbnRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsaWVudF9pcF9wcmVzZXJ2YXRpb25fZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50SXBQcmVzZXJ2YXRpb25FbmFibGVkKSxcbiAgICBlbmRwb2ludF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludElkKSxcbiAgICB3ZWlnaHQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cFBvcnRPdmVycmlkZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZHBvaW50UG9ydDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaXN0ZW5lclBvcnQ6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZ2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwUG9ydE92ZXJyaWRlVG9UZXJyYWZvcm0oc3RydWN0PzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwUG9ydE92ZXJyaWRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuZHBvaW50X3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnRQb3J0KSxcbiAgICBsaXN0ZW5lcl9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpc3RlbmVyUG9ydCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxhY2NlbGVyYXRvckVuZHBvaW50R3JvdXBUaW1lb3V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1cGRhdGU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cFRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwVGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgZGVsZXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gICAgdXBkYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVwZGF0ZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBHbG9iYWxhY2NlbGVyYXRvckVuZHBvaW50R3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2dsb2JhbGFjY2VsZXJhdG9yX2VuZHBvaW50X2dyb3VwJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2VuZHBvaW50R3JvdXBSZWdpb24gPSBjb25maWcuZW5kcG9pbnRHcm91cFJlZ2lvbjtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0ludGVydmFsU2Vjb25kcyA9IGNvbmZpZy5oZWFsdGhDaGVja0ludGVydmFsU2Vjb25kcztcbiAgICB0aGlzLl9oZWFsdGhDaGVja1BhdGggPSBjb25maWcuaGVhbHRoQ2hlY2tQYXRoO1xuICAgIHRoaXMuX2hlYWx0aENoZWNrUG9ydCA9IGNvbmZpZy5oZWFsdGhDaGVja1BvcnQ7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tQcm90b2NvbCA9IGNvbmZpZy5oZWFsdGhDaGVja1Byb3RvY29sO1xuICAgIHRoaXMuX2xpc3RlbmVyQXJuID0gY29uZmlnLmxpc3RlbmVyQXJuO1xuICAgIHRoaXMuX3RocmVzaG9sZENvdW50ID0gY29uZmlnLnRocmVzaG9sZENvdW50O1xuICAgIHRoaXMuX3RyYWZmaWNEaWFsUGVyY2VudGFnZSA9IGNvbmZpZy50cmFmZmljRGlhbFBlcmNlbnRhZ2U7XG4gICAgdGhpcy5fZW5kcG9pbnRDb25maWd1cmF0aW9uID0gY29uZmlnLmVuZHBvaW50Q29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9wb3J0T3ZlcnJpZGUgPSBjb25maWcucG9ydE92ZXJyaWRlO1xuICAgIHRoaXMuX3RpbWVvdXRzID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50X2dyb3VwX3JlZ2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuZHBvaW50R3JvdXBSZWdpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRHcm91cFJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50X2dyb3VwX3JlZ2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5kcG9pbnRHcm91cFJlZ2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5kcG9pbnRHcm91cFJlZ2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZHBvaW50R3JvdXBSZWdpb24oKSB7XG4gICAgdGhpcy5fZW5kcG9pbnRHcm91cFJlZ2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRHcm91cFJlZ2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludEdyb3VwUmVnaW9uXG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfaW50ZXJ2YWxfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFsdGhDaGVja0ludGVydmFsU2Vjb25kcz86IG51bWJlcjtcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja0ludGVydmFsU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2hlYWx0aF9jaGVja19pbnRlcnZhbF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFsdGhDaGVja0ludGVydmFsU2Vjb25kcyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrSW50ZXJ2YWxTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhbHRoQ2hlY2tJbnRlcnZhbFNlY29uZHMoKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tJbnRlcnZhbFNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrSW50ZXJ2YWxTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrSW50ZXJ2YWxTZWNvbmRzXG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfcGF0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWx0aENoZWNrUGF0aD86IHN0cmluZztcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWFsdGhfY2hlY2tfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoQ2hlY2tQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVja1BhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja1BhdGgoKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFsdGhDaGVja1BhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2tQYXRoXG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWx0aENoZWNrUG9ydD86IG51bWJlcjtcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja1BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWFsdGhfY2hlY2tfcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoQ2hlY2tQb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVja1BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja1BvcnQoKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tQb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFsdGhDaGVja1BvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoQ2hlY2tQb3J0XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfcHJvdG9jb2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhbHRoQ2hlY2tQcm90b2NvbD86IHN0cmluZztcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja1Byb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGVhbHRoX2NoZWNrX3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFsdGhDaGVja1Byb3RvY29sKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tQcm90b2NvbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhlYWx0aENoZWNrUHJvdG9jb2woKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tQcm90b2NvbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tQcm90b2NvbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGhDaGVja1Byb3RvY29sXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGlzdGVuZXJfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xpc3RlbmVyQXJuOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbGlzdGVuZXJBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsaXN0ZW5lcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxpc3RlbmVyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9saXN0ZW5lckFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaXN0ZW5lckFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lckFyblxuICB9XG5cbiAgLy8gdGhyZXNob2xkX2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RocmVzaG9sZENvdW50PzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHRocmVzaG9sZENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGhyZXNob2xkX2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aHJlc2hvbGRDb3VudCh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3RocmVzaG9sZENvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZXNob2xkQ291bnQoKSB7XG4gICAgdGhpcy5fdGhyZXNob2xkQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVzaG9sZENvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZENvdW50XG4gIH1cblxuICAvLyB0cmFmZmljX2RpYWxfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90cmFmZmljRGlhbFBlcmNlbnRhZ2U/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdHJhZmZpY0RpYWxQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHJhZmZpY19kaWFsX3BlcmNlbnRhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyYWZmaWNEaWFsUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3RyYWZmaWNEaWFsUGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRyYWZmaWNEaWFsUGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl90cmFmZmljRGlhbFBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYWZmaWNEaWFsUGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFmZmljRGlhbFBlcmNlbnRhZ2VcbiAgfVxuXG4gIC8vIGVuZHBvaW50X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5kcG9pbnRDb25maWd1cmF0aW9uPzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwRW5kcG9pbnRDb25maWd1cmF0aW9uW107XG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuZHBvaW50X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmRwb2ludENvbmZpZ3VyYXRpb24odmFsdWU6IEdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cEVuZHBvaW50Q29uZmlndXJhdGlvbltdICkge1xuICAgIHRoaXMuX2VuZHBvaW50Q29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZHBvaW50Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9lbmRwb2ludENvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZHBvaW50Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludENvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIC8vIHBvcnRfb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydE92ZXJyaWRlPzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwUG9ydE92ZXJyaWRlW107XG4gIHB1YmxpYyBnZXQgcG9ydE92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BvcnRfb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0T3ZlcnJpZGUodmFsdWU6IEdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cFBvcnRPdmVycmlkZVtdICkge1xuICAgIHRoaXMuX3BvcnRPdmVycmlkZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnRPdmVycmlkZSgpIHtcbiAgICB0aGlzLl9wb3J0T3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRPdmVycmlkZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0T3ZlcnJpZGVcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzPzogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwVGltZW91dHM7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGltZW91dHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0cyh2YWx1ZTogR2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwVGltZW91dHMgKSB7XG4gICAgdGhpcy5fdGltZW91dHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZW5kcG9pbnRfZ3JvdXBfcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmRwb2ludEdyb3VwUmVnaW9uKSxcbiAgICAgIGhlYWx0aF9jaGVja19pbnRlcnZhbF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja0ludGVydmFsU2Vjb25kcyksXG4gICAgICBoZWFsdGhfY2hlY2tfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faGVhbHRoQ2hlY2tQYXRoKSxcbiAgICAgIGhlYWx0aF9jaGVja19wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja1BvcnQpLFxuICAgICAgaGVhbHRoX2NoZWNrX3Byb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja1Byb3RvY29sKSxcbiAgICAgIGxpc3RlbmVyX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGlzdGVuZXJBcm4pLFxuICAgICAgdGhyZXNob2xkX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aHJlc2hvbGRDb3VudCksXG4gICAgICB0cmFmZmljX2RpYWxfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHJhZmZpY0RpYWxQZXJjZW50YWdlKSxcbiAgICAgIGVuZHBvaW50X2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoZ2xvYmFsYWNjZWxlcmF0b3JFbmRwb2ludEdyb3VwRW5kcG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2VuZHBvaW50Q29uZmlndXJhdGlvbiksXG4gICAgICBwb3J0X292ZXJyaWRlOiBjZGt0Zi5saXN0TWFwcGVyKGdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cFBvcnRPdmVycmlkZVRvVGVycmFmb3JtKSh0aGlzLl9wb3J0T3ZlcnJpZGUpLFxuICAgICAgdGltZW91dHM6IGdsb2JhbGFjY2VsZXJhdG9yRW5kcG9pbnRHcm91cFRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==