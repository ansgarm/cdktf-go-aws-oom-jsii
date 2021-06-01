"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppmeshVirtualGateway = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct.trust),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct.validation),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tls: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform)(struct.tls),
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_policy: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform)(struct.clientPolicy),
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
        max_pending_requests: cdktf.numberToTerraform(struct.maxPendingRequests),
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform)(struct.grpc),
        http: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform)(struct.http),
        http2: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform)(struct.http2),
    };
}
function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval_millis: cdktf.numberToTerraform(struct.intervalMillis),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout_millis: cdktf.numberToTerraform(struct.timeoutMillis),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold),
    };
}
function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match),
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform)(struct.trust),
    };
}
function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        certificate: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationToTerraform)(struct.validation),
    };
}
function appmeshVirtualGatewaySpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_pool: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform)(struct.connectionPool),
        health_check: cdktf.listMapper(appmeshVirtualGatewaySpecListenerHealthCheckToTerraform)(struct.healthCheck),
        port_mapping: cdktf.listMapper(appmeshVirtualGatewaySpecListenerPortMappingToTerraform)(struct.portMapping),
        tls: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsToTerraform)(struct.tls),
    };
}
function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
    };
}
function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform)(struct.file),
    };
}
function appmeshVirtualGatewaySpecLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_log: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogToTerraform)(struct.accessLog),
    };
}
function appmeshVirtualGatewaySpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        backend_defaults: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsToTerraform)(struct.backendDefaults),
        listener: cdktf.listMapper(appmeshVirtualGatewaySpecListenerToTerraform)(struct.listener),
        logging: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingToTerraform)(struct.logging),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}.
 */
class AppmeshVirtualGateway extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._meshName = config.meshName;
        this._meshOwner = config.meshOwner;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._spec = config.spec;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_date - computed: true, optional: false, required: false
    get createdDate() {
        return this.getStringAttribute('created_date');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated_date - computed: true, optional: false, required: false
    get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
    }
    get meshName() {
        return this.getStringAttribute('mesh_name');
    }
    set meshName(value) {
        this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    get meshNameInput() {
        return this._meshName;
    }
    get meshOwner() {
        return this.getStringAttribute('mesh_owner');
    }
    set meshOwner(value) {
        this._meshOwner = value;
    }
    resetMeshOwner() {
        this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get meshOwnerInput() {
        return this._meshOwner;
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
    // resource_owner - computed: true, optional: false, required: false
    get resourceOwner() {
        return this.getStringAttribute('resource_owner');
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
    get spec() {
        return this.interpolationForAttribute('spec');
    }
    set spec(value) {
        this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    get specInput() {
        return this._spec;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            spec: cdktf.listMapper(appmeshVirtualGatewaySpecToTerraform)(this._spec),
        };
    }
}
exports.AppmeshVirtualGateway = AppmeshVirtualGateway;
_a = JSII_RTTI_SYMBOL_1;
AppmeshVirtualGateway[_a] = { fqn: "hashicorp_aws.AppmeshVirtualGateway", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbWVzaC12aXJ0dWFsLWdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBtZXNoLXZpcnR1YWwtZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQTJDL0IsU0FBUyxpRkFBaUYsQ0FBQyxNQUErRTtJQUN4SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7QUFDSCxDQUFDO0FBU0QsU0FBUyxnRkFBZ0YsQ0FBQyxNQUE4RTtJQUN0SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQWlCRCxTQUFTLDZFQUE2RSxDQUFDLE1BQTJFO0lBQ2hLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaUZBQWlGLENBQUMsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3ZILEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGdGQUFnRixDQUFDLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUNySCxDQUFBO0FBQ0gsQ0FBQztBQVNELFNBQVMsd0dBQXdHLENBQUMs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QUNiLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFrQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pFLENBQUM7SUFDSixDQUFDOztBQWpLSCxzREFrS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzL3IvYXBwbWVzaF92aXJ0dWFsX2dhdGV3YXkuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzaE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzaE93bmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwZWM6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVDaGFpbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaXZhdGVLZXk6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZmlsZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4YWN0OiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4YWN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4YWN0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF0Y2g6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoVG9UZXJyYWZvcm0pKHN0cnVjdCEubWF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zOiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfYXV0aG9yaXR5X2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2VydGlmaWNhdGVBdXRob3JpdHlBcm5zKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWNyZXROYW1lOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNtPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGU/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNtOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21Ub1RlcnJhZm9ybSkoc3RydWN0IS5hY20pLFxuICAgIGZpbGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVUb1RlcnJhZm9ybSkoc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3ViamVjdEFsdGVybmF0aXZlTmFtZXM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3Q6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdWJqZWN0X2FsdGVybmF0aXZlX25hbWVzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyksXG4gICAgdHJ1c3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnRydXN0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmZvcmNlPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0cz86IG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRhdGlvbjogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25bXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5mb3JjZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5mb3JjZSksXG4gICAgcG9ydHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEucG9ydHMpLFxuICAgIGNlcnRpZmljYXRlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmNlcnRpZmljYXRlKSxcbiAgICB2YWxpZGF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsaWRhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHRsczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGxzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudFBvbGljeT86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0JhY2tlbmREZWZhdWx0c1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xpZW50X3BvbGljeTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VG9UZXJyYWZvcm0pKHN0cnVjdCEuY2xpZW50UG9saWN5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwYyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhSZXF1ZXN0czogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJlcXVlc3RzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhDb25uZWN0aW9uczogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFBlbmRpbmdSZXF1ZXN0cz86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9jb25uZWN0aW9uczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDb25uZWN0aW9ucyksXG4gICAgbWF4X3BlbmRpbmdfcmVxdWVzdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UGVuZGluZ1JlcXVlc3RzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4UmVxdWVzdHM6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMlRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJlcXVlc3RzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncnBjPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHAyPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xIdHRwMltdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGdycGM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjVG9UZXJyYWZvcm0pKHN0cnVjdCEuZ3JwYyksXG4gICAgaHR0cDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBUb1RlcnJhZm9ybSkoc3RydWN0IS5odHRwKSxcbiAgICBodHRwMjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyVG9UZXJyYWZvcm0pKHN0cnVjdCEuaHR0cDIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVySGVhbHRoQ2hlY2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWx0aHlUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsTWlsbGlzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhdGg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvdG9jb2w6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0TWlsbGlzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaGVhbHRoeVRocmVzaG9sZDogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVja1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGhlYWx0aHlfdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWx0aHlUaHJlc2hvbGQpLFxuICAgIGludGVydmFsX21pbGxpczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbE1pbGxpcyksXG4gICAgcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXRoKSxcbiAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICB0aW1lb3V0X21pbGxpczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0TWlsbGlzKSxcbiAgICB1bmhlYWx0aHlfdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaGVhbHRoeVRocmVzaG9sZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBcm46IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjcmV0TmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjbT86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZT86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNtOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbGUpLFxuICAgIHNkczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhhY3Q6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4YWN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4YWN0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQ2hhaW46IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZmlsZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyksXG4gICAgdHJ1c3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEudHJ1c3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbGlkYXRpb24/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGUpLFxuICAgIGNlcnRpZmljYXRlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbGlkYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25uZWN0aW9uUG9vbD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2s/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVja1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnRNYXBwaW5nOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRscz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY29ubmVjdGlvbl9wb29sOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29ubmVjdGlvblBvb2wpLFxuICAgIGhlYWx0aF9jaGVjazogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTGlzdGVuZXJIZWFsdGhDaGVja1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWx0aENoZWNrKSxcbiAgICBwb3J0X21hcHBpbmc6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xpc3RlbmVyUG9ydE1hcHBpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wb3J0TWFwcGluZyksXG4gICAgdGxzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRsc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRscyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGU/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ0ZpbGVbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmdBY2Nlc3NMb2dUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY2Vzc0xvZz86IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nQWNjZXNzTG9nW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlY0xvZ2dpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX2xvZzogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ0FjY2Vzc0xvZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFjY2Vzc0xvZyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiYWNrZW5kRGVmYXVsdHM/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjQmFja2VuZERlZmF1bHRzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGlzdGVuZXI6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ2dpbmc/OiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjTG9nZ2luZ1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxHYXRld2F5U3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBiYWNrZW5kX2RlZmF1bHRzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNCYWNrZW5kRGVmYXVsdHNUb1RlcnJhZm9ybSkoc3RydWN0IS5iYWNrZW5kRGVmYXVsdHMpLFxuICAgIGxpc3RlbmVyOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMaXN0ZW5lclRvVGVycmFmb3JtKShzdHJ1Y3QhLmxpc3RlbmVyKSxcbiAgICBsb2dnaW5nOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNMb2dnaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEubG9nZ2luZyksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbEdhdGV3YXkgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwcG1lc2hfdmlydHVhbF9nYXRld2F5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX21lc2hOYW1lID0gY29uZmlnLm1lc2hOYW1lO1xuICAgIHRoaXMuX21lc2hPd25lciA9IGNvbmZpZy5tZXNoT3duZXI7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fc3BlYyA9IGNvbmZpZy5zcGVjO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gbWVzaF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc2hOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbWVzaE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNoX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc2hOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNoTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNoTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNoTmFtZVxuICB9XG5cbiAgLy8gbWVzaF9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc2hPd25lcj86IHN0cmluZztcbiAgcHVibGljIGdldCBtZXNoT3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNoX293bmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNoT3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc2hPd25lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc2hPd25lcigpIHtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc2hPd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNoT3duZXJcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gcmVzb3VyY2Vfb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXNvdXJjZU93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2Vfb3duZXInKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzQWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsXG4gIH1cblxuICAvLyBzcGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NwZWM6IEFwcG1lc2hWaXJ0dWFsR2F0ZXdheVNwZWNbXTtcbiAgcHVibGljIGdldCBzcGVjKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NwZWMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzcGVjKHZhbHVlOiBBcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjW10pIHtcbiAgICB0aGlzLl9zcGVjID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNoX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hOYW1lKSxcbiAgICAgIG1lc2hfb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hPd25lciksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgc3BlYzogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbEdhdGV3YXlTcGVjVG9UZXJyYWZvcm0pKHRoaXMuX3NwZWMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==