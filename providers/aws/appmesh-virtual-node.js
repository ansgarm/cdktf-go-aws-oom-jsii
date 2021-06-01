"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppmeshVirtualNode = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform)(struct.trust),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform)(struct.validation),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform)(struct.tls),
    };
}
function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service_name: cdktf.stringToTerraform(struct.virtualServiceName),
        client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform)(struct.clientPolicy),
    };
}
function appmeshVirtualNodeSpecBackendToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceToTerraform)(struct.virtualService),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct.trust),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct.validation),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform)(struct.tls),
    };
}
function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform)(struct.clientPolicy),
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
        max_pending_requests: cdktf.numberToTerraform(struct.maxPendingRequests),
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests),
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
    };
}
function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform)(struct.grpc),
        http: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform)(struct.http),
        http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform)(struct.http2),
        tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform)(struct.tcp),
    };
}
function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct) {
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
function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_ejection_percent: cdktf.numberToTerraform(struct.maxEjectionPercent),
        max_server_errors: cdktf.numberToTerraform(struct.maxServerErrors),
        base_ejection_duration: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform)(struct.baseEjectionDuration),
        interval: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform)(struct.interval),
    };
}
function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform)(struct.perRequest),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform)(struct.perRequest),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform)(struct.perRequest),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform)(struct.idle),
    };
}
function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform)(struct.grpc),
        http: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform)(struct.http),
        http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform)(struct.http2),
        tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform)(struct.tcp),
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey),
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact),
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match),
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName),
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform)(struct.sds),
    };
}
function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform)(struct.trust),
    };
}
function appmeshVirtualNodeSpecListenerTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        certificate: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationToTerraform)(struct.validation),
    };
}
function appmeshVirtualNodeSpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_pool: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolToTerraform)(struct.connectionPool),
        health_check: cdktf.listMapper(appmeshVirtualNodeSpecListenerHealthCheckToTerraform)(struct.healthCheck),
        outlier_detection: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform)(struct.outlierDetection),
        port_mapping: cdktf.listMapper(appmeshVirtualNodeSpecListenerPortMappingToTerraform)(struct.portMapping),
        timeout: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutToTerraform)(struct.timeout),
        tls: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsToTerraform)(struct.tls),
    };
}
function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
    };
}
function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform)(struct.file),
    };
}
function appmeshVirtualNodeSpecLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_log: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogToTerraform)(struct.accessLog),
    };
}
function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct.attributes),
        namespace_name: cdktf.stringToTerraform(struct.namespaceName),
        service_name: cdktf.stringToTerraform(struct.serviceName),
    };
}
function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname),
    };
}
function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_cloud_map: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform)(struct.awsCloudMap),
        dns: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform)(struct.dns),
    };
}
function appmeshVirtualNodeSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct.backend),
        backend_defaults: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsToTerraform)(struct.backendDefaults),
        listener: cdktf.listMapper(appmeshVirtualNodeSpecListenerToTerraform)(struct.listener),
        logging: cdktf.listMapper(appmeshVirtualNodeSpecLoggingToTerraform)(struct.logging),
        service_discovery: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryToTerraform)(struct.serviceDiscovery),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}.
 */
class AppmeshVirtualNode extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_node',
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
            spec: cdktf.listMapper(appmeshVirtualNodeSpecToTerraform)(this._spec),
        };
    }
}
exports.AppmeshVirtualNode = AppmeshVirtualNode;
_a = JSII_RTTI_SYMBOL_1;
AppmeshVirtualNode[_a] = { fqn: "hashicorp_aws.AppmeshVirtualNode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbWVzaC12aXJ0dWFsLW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBtZXNoLXZpcnR1YWwtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQTJDL0IsU0FBUyxvRkFBb0YsQ0FBQyxNQUFrRjtJQUM5SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7QUFDSCxDQUFDO0FBU0QsU0FBUyxtRkFBbUYsQ0FBQyxNQUFpRjtJQUM1SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQWlCRCxTQUFTLGdGQUFnRixDQUFDLE1BQThFO0lBQ3RLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0ZBQW9GLENBQUMsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzFILEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG1GQUFtRixDQUFDLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztLQUN4SCxDQUFBO0FBQ0gsQ0FBQztBQVNELFNBQVMsMkdBQTJHLENBQUMsTUFBeUc7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QVEsQ0FBQTtJQUN0QixDQUFDO0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQStCO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdEUsQ0FBQztJQUNKLENBQUM7O0FBaktILGdEQWtLQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9hcHBtZXNoX3ZpcnR1YWxfbm9kZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNoTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNoT3duZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BlYzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgICBwcml2YXRlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcml2YXRlS2V5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjcmV0TmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VjcmV0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VjcmV0TmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGU/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2RzPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybSkoc3RydWN0IS5maWxlKSxcbiAgICBzZHM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhhY3Q6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXhhY3Q6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXhhY3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzTWF0Y2hUb1RlcnJhZm9ybSkoc3RydWN0IS5tYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnM6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hdXRob3JpdHlfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jZXJ0aWZpY2F0ZUF1dGhvcml0eUFybnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQ2hhaW46IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9jaGFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VjcmV0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VjcmV0TmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY20/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2RzPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkc1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY206IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEFjbVRvVGVycmFmb3JtKShzdHJ1Y3QhLmFjbSksXG4gICAgZmlsZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbGUpLFxuICAgIHNkczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2RzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cnVzdDogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHN1YmplY3RfYWx0ZXJuYXRpdmVfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKSxcbiAgICB0cnVzdDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEudHJ1c3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZm9yY2U/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnRzPzogbnVtYmVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGU/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWxpZGF0aW9uOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvbltdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlQ2xpZW50UG9saWN5VGxzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmZvcmNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmZvcmNlKSxcbiAgICBwb3J0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5wb3J0cyksXG4gICAgY2VydGlmaWNhdGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS52YWxpZGF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRscz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdGxzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VDbGllbnRQb2xpY3lUbHNUb1RlcnJhZm9ybSkoc3RydWN0IS50bHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbFNlcnZpY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xpZW50UG9saWN5PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFZpcnR1YWxTZXJ2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX3NlcnZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsU2VydmljZU5hbWUpLFxuICAgIGNsaWVudF9wb2xpY3k6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZUNsaWVudFBvbGljeVRvVGVycmFmb3JtKShzdHJ1Y3QhLmNsaWVudFBvbGljeSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbFNlcnZpY2U6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVmlydHVhbFNlcnZpY2VbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX3NlcnZpY2U6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmRWaXJ0dWFsU2VydmljZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnZpcnR1YWxTZXJ2aWNlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQ2hhaW46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2YXRlS2V5OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2NoYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNlcnRpZmljYXRlQ2hhaW4pLFxuICAgIHByaXZhdGVfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaXZhdGVLZXkpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlU2RzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWNyZXROYW1lOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWNyZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZUZpbGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZpbGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbGUpLFxuICAgIHNkczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVTZHNUb1RlcnJhZm9ybSkoc3RydWN0IS5zZHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGFjdDogc3RyaW5nW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleGFjdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5leGFjdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXRjaDogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1hdGNoOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXV0aG9yaXR5QXJuczogc3RyaW5nW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2F1dGhvcml0eV9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNlcnRpZmljYXRlQXV0aG9yaXR5QXJucyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVDaGFpbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNlcnRpZmljYXRlX2NoYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNlcnRpZmljYXRlQ2hhaW4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjcmV0TmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdFNkcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWNyZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXROYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjbT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RBY21bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25UcnVzdEZpbGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0U2RzW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjbTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0QWNtVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RTZHNUb1RlcnJhZm9ybSkoc3RydWN0IS5zZHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRydXN0W107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1ZhbGlkYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3ViamVjdEFsdGVybmF0aXZlTmFtZXMpLFxuICAgIHRydXN0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybSkoc3RydWN0IS50cnVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5mb3JjZT86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydHM/OiBudW1iZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNDZXJ0aWZpY2F0ZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbGlkYXRpb246IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNWYWxpZGF0aW9uW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNDbGllbnRQb2xpY3lUbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuZm9yY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuZm9yY2UpLFxuICAgIHBvcnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnBvcnRzKSxcbiAgICBjZXJ0aWZpY2F0ZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzQ2VydGlmaWNhdGVUb1RlcnJhZm9ybSkoc3RydWN0IS5jZXJ0aWZpY2F0ZSksXG4gICAgdmFsaWRhdGlvbjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbGlkYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGxzPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0bHM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRsc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRscyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbGllbnRQb2xpY3k/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzQ2xpZW50UG9saWN5W107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsaWVudF9wb2xpY3k6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0JhY2tlbmREZWZhdWx0c0NsaWVudFBvbGljeVRvVGVycmFmb3JtKShzdHJ1Y3QhLmNsaWVudFBvbGljeSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEdycGMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4UmVxdWVzdHM6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9yZXF1ZXN0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhSZXF1ZXN0cyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q29ubmVjdGlvbnM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhQZW5kaW5nUmVxdWVzdHM/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfY29ubmVjdGlvbnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q29ubmVjdGlvbnMpLFxuICAgIG1heF9wZW5kaW5nX3JlcXVlc3RzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFBlbmRpbmdSZXF1ZXN0cyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFJlcXVlc3RzOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9yZXF1ZXN0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhSZXF1ZXN0cyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRjcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhDb25uZWN0aW9uczogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRjcFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sVGNwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1heF9jb25uZWN0aW9uczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDb25uZWN0aW9ucyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JwYz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sR3JwY1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHA/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwMj86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sSHR0cDJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0Y3A/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRjcFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGdycGM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyQ29ubmVjdGlvblBvb2xHcnBjVG9UZXJyYWZvcm0pKHN0cnVjdCEuZ3JwYyksXG4gICAgaHR0cDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHBUb1RlcnJhZm9ybSkoc3RydWN0IS5odHRwKSxcbiAgICBodHRwMjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbEh0dHAyVG9UZXJyYWZvcm0pKHN0cnVjdCEuaHR0cDIpLFxuICAgIHRjcDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRjcFRvVGVycmFmb3JtKShzdHJ1Y3QhLnRjcCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVjayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoeVRocmVzaG9sZDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZXJ2YWxNaWxsaXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90b2NvbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRNaWxsaXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5oZWFsdGh5VGhyZXNob2xkOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckhlYWx0aENoZWNrVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVySGVhbHRoQ2hlY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaGVhbHRoeV90aHJlc2hvbGQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaGVhbHRoeVRocmVzaG9sZCksXG4gICAgaW50ZXJ2YWxfbWlsbGlzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsTWlsbGlzKSxcbiAgICBwYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGgpLFxuICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9ydCksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHRpbWVvdXRfbWlsbGlzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXRNaWxsaXMpLFxuICAgIHVuaGVhbHRoeV90aHJlc2hvbGQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudW5oZWFsdGh5VGhyZXNob2xkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25CYXNlRWplY3Rpb25EdXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uQmFzZUVqZWN0aW9uRHVyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uQmFzZUVqZWN0aW9uRHVyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uSW50ZXJ2YWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkludGVydmFsVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkludGVydmFsKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4RWplY3Rpb25QZXJjZW50OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4U2VydmVyRXJyb3JzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmFzZUVqZWN0aW9uRHVyYXRpb246IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25CYXNlRWplY3Rpb25EdXJhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uSW50ZXJ2YWxbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgbWF4X2VqZWN0aW9uX3BlcmNlbnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4RWplY3Rpb25QZXJjZW50KSxcbiAgICBtYXhfc2VydmVyX2Vycm9yczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhTZXJ2ZXJFcnJvcnMpLFxuICAgIGJhc2VfZWplY3Rpb25fZHVyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvbkJhc2VFamVjdGlvbkR1cmF0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuYmFzZUVqZWN0aW9uRHVyYXRpb24pLFxuICAgIGludGVydmFsOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lck91dGxpZXJEZXRlY3Rpb25JbnRlcnZhbFRvVGVycmFmb3JtKShzdHJ1Y3QhLmludGVydmFsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyUG9ydE1hcHBpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90b2NvbCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY0lkbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNQZXJSZXF1ZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjUGVyUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjUGVyUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyUmVxdWVzdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjUGVyUmVxdWVzdFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRHcnBjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGlkbGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNJZGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNQZXJSZXF1ZXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEucGVyUmVxdWVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cElkbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBQZXJSZXF1ZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwUGVyUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwUGVyUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyUmVxdWVzdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwUGVyUmVxdWVzdFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGlkbGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBJZGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBQZXJSZXF1ZXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEucGVyUmVxdWVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMklkbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJJZGxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJQZXJSZXF1ZXN0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWRsZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMklkbGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZXJSZXF1ZXN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaWRsZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJJZGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHAyUGVyUmVxdWVzdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnBlclJlcXVlc3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcElkbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcElkbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwSWRsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3Age1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkbGU/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwSWRsZVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0VGNwVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRjcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpZGxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BJZGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncnBjPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEdycGNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwMj86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRIdHRwMltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRjcD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZ3JwYzogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0R3JwY1RvVGVycmFmb3JtKShzdHJ1Y3QhLmdycGMpLFxuICAgIGh0dHA6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGltZW91dEh0dHBUb1RlcnJhZm9ybSkoc3RydWN0IS5odHRwKSxcbiAgICBodHRwMjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUaW1lb3V0SHR0cDJUb1RlcnJhZm9ybSkoc3RydWN0IS5odHRwMiksXG4gICAgdGNwOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUY3BUb1RlcnJhZm9ybSkoc3RydWN0IS50Y3ApLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBcm46IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVBY21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUFjbSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGVGaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUNoYWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUtleTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZUZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gICAgcHJpdmF0ZV9rZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJpdmF0ZUtleSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjcmV0TmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjbT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlU2RzW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzQ2VydGlmaWNhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNtOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlQWNtVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWNtKSxcbiAgICBmaWxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlRmlsZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmZpbGUpLFxuICAgIHNkczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVNkc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhhY3Q6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4YWN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV4YWN0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc01hdGNoW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNNYXRjaFRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQ2hhaW46IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdEZpbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2VydGlmaWNhdGVfY2hhaW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2VydGlmaWNhdGVDaGFpbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RTZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldE5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0U2RzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHNlY3JldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0RmlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNkcz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1tdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZmlsZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RGaWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlsZSksXG4gICAgc2RzOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25UcnVzdFNkc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNkcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb25TdWJqZWN0QWx0ZXJuYXRpdmVOYW1lc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uVHJ1c3RbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1ZhbGlkYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc3ViamVjdF9hbHRlcm5hdGl2ZV9uYW1lczogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uU3ViamVjdEFsdGVybmF0aXZlTmFtZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJqZWN0QWx0ZXJuYXRpdmVOYW1lcyksXG4gICAgdHJ1c3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRydXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEudHJ1c3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNDZXJ0aWZpY2F0ZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbGlkYXRpb24/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNWYWxpZGF0aW9uW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRscyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGUpLFxuICAgIGNlcnRpZmljYXRlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRsc0NlcnRpZmljYXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2VydGlmaWNhdGUpLFxuICAgIHZhbGlkYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVmFsaWRhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbGlkYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25uZWN0aW9uUG9vbD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lckNvbm5lY3Rpb25Qb29sW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhbHRoQ2hlY2s/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJIZWFsdGhDaGVja1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG91dGxpZXJEZXRlY3Rpb24/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJPdXRsaWVyRGV0ZWN0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydE1hcHBpbmc6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclBvcnRNYXBwaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHM/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUbHNbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rpb25fcG9vbDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJDb25uZWN0aW9uUG9vbFRvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbm5lY3Rpb25Qb29sKSxcbiAgICBoZWFsdGhfY2hlY2s6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVySGVhbHRoQ2hlY2tUb1RlcnJhZm9ybSkoc3RydWN0IS5oZWFsdGhDaGVjayksXG4gICAgb3V0bGllcl9kZXRlY3Rpb246IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyT3V0bGllckRldGVjdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLm91dGxpZXJEZXRlY3Rpb24pLFxuICAgIHBvcnRfbWFwcGluZzogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJQb3J0TWFwcGluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBvcnRNYXBwaW5nKSxcbiAgICB0aW1lb3V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lclRpbWVvdXRUb1RlcnJhZm9ybSkoc3RydWN0IS50aW1lb3V0KSxcbiAgICB0bHM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xpc3RlbmVyVGxzVG9UZXJyYWZvcm0pKHN0cnVjdCEudGxzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZT86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nRmlsZVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ0FjY2Vzc0xvZ1RvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGZpbGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dGaWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXNzTG9nPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdBY2Nlc3NMb2dbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY0xvZ2dpbmdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfbG9nOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMb2dnaW5nQWNjZXNzTG9nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWNjZXNzTG9nKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5QXdzQ2xvdWRNYXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lc3BhY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeUF3c0Nsb3VkTWFwVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlBd3NDbG91ZE1hcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLmF0dHJpYnV0ZXMpLFxuICAgIG5hbWVzcGFjZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWVzcGFjZU5hbWUpLFxuICAgIHNlcnZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeURucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdG5hbWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeURucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBob3N0bmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ob3N0bmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXdzQ2xvdWRNYXA/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeUF3c0Nsb3VkTWFwW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG5zPzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlEbnNbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFZpcnR1YWxOb2RlU3BlY1NlcnZpY2VEaXNjb3ZlcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhd3NfY2xvdWRfbWFwOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5QXdzQ2xvdWRNYXBUb1RlcnJhZm9ybSkoc3RydWN0IS5hd3NDbG91ZE1hcCksXG4gICAgZG5zOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5RG5zVG9UZXJyYWZvcm0pKHN0cnVjdCEuZG5zKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhY2tlbmQ/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhY2tlbmREZWZhdWx0cz86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kRGVmYXVsdHNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaXN0ZW5lcj86IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNMaXN0ZW5lcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ2dpbmc/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VEaXNjb3Zlcnk/OiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjU2VydmljZURpc2NvdmVyeVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoVmlydHVhbE5vZGVTcGVjVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFZpcnR1YWxOb2RlU3BlYyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBiYWNrZW5kOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNCYWNrZW5kVG9UZXJyYWZvcm0pKHN0cnVjdCEuYmFja2VuZCksXG4gICAgYmFja2VuZF9kZWZhdWx0czogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjQmFja2VuZERlZmF1bHRzVG9UZXJyYWZvcm0pKHN0cnVjdCEuYmFja2VuZERlZmF1bHRzKSxcbiAgICBsaXN0ZW5lcjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTGlzdGVuZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5saXN0ZW5lciksXG4gICAgbG9nZ2luZzogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjTG9nZ2luZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxvZ2dpbmcpLFxuICAgIHNlcnZpY2VfZGlzY292ZXJ5OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNTZXJ2aWNlRGlzY292ZXJ5VG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VydmljZURpc2NvdmVyeSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBtZXNoVmlydHVhbE5vZGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcG1lc2hWaXJ0dWFsTm9kZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwcG1lc2hfdmlydHVhbF9ub2RlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX21lc2hOYW1lID0gY29uZmlnLm1lc2hOYW1lO1xuICAgIHRoaXMuX21lc2hPd25lciA9IGNvbmZpZy5tZXNoT3duZXI7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fc3BlYyA9IGNvbmZpZy5zcGVjO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGFzdF91cGRhdGVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZWRfZGF0ZScpO1xuICB9XG5cbiAgLy8gbWVzaF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc2hOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbWVzaE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNoX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc2hOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNoTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNoTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNoTmFtZVxuICB9XG5cbiAgLy8gbWVzaF9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc2hPd25lcj86IHN0cmluZztcbiAgcHVibGljIGdldCBtZXNoT3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNoX293bmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNoT3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc2hPd25lciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc2hPd25lcigpIHtcbiAgICB0aGlzLl9tZXNoT3duZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc2hPd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNoT3duZXJcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVxuICB9XG5cbiAgLy8gcmVzb3VyY2Vfb3duZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXNvdXJjZU93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2Vfb3duZXInKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSApIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHVibGljIGdldCB0YWdzQWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsXG4gIH1cblxuICAvLyBzcGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NwZWM6IEFwcG1lc2hWaXJ0dWFsTm9kZVNwZWNbXTtcbiAgcHVibGljIGdldCBzcGVjKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NwZWMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzcGVjKHZhbHVlOiBBcHBtZXNoVmlydHVhbE5vZGVTcGVjW10pIHtcbiAgICB0aGlzLl9zcGVjID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNoX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hOYW1lKSxcbiAgICAgIG1lc2hfb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21lc2hPd25lciksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgc3BlYzogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoVmlydHVhbE5vZGVTcGVjVG9UZXJyYWZvcm0pKHRoaXMuX3NwZWMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==