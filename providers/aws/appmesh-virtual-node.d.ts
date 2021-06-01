import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_name AppmeshVirtualNode#mesh_name}.
     */
    readonly meshName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_owner AppmeshVirtualNode#mesh_owner}.
     */
    readonly meshOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#name AppmeshVirtualNode#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags AppmeshVirtualNode#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags_all AppmeshVirtualNode#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#spec AppmeshVirtualNode#spec}
     */
    readonly spec: AppmeshVirtualNodeSpec[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}.
     */
    readonly certificateChain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}.
     */
    readonly privateKey: string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
     */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
     */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}.
     */
    readonly exact: string[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
     */
    readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}.
     */
    readonly certificateAuthorityArns: string[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}.
     */
    readonly certificateChain: string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
    /**
     * acm block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
     */
    readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm[];
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
     */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
     */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
    /**
     * subject_alternative_names block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
     */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames[];
    /**
     * trust block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
     */
    readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}.
     */
    readonly enforce?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}.
     */
    readonly ports?: number[];
    /**
     * certificate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
     */
    readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate[];
    /**
     * validation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
     */
    readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
    /**
     * tls block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
     */
    readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls[];
}
export interface AppmeshVirtualNodeSpecBackendVirtualService {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service_name AppmeshVirtualNode#virtual_service_name}.
     */
    readonly virtualServiceName: string;
    /**
     * client_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
     */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy[];
}
export interface AppmeshVirtualNodeSpecBackend {
    /**
     * virtual_service block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service AppmeshVirtualNode#virtual_service}
     */
    readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}.
     */
    readonly certificateChain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}.
     */
    readonly privateKey: string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
     */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
     */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}.
     */
    readonly exact: string[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
     */
    readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}.
     */
    readonly certificateAuthorityArns: string[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}.
     */
    readonly certificateChain: string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
     * acm block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
     */
    readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
     */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
     */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
    /**
     * subject_alternative_names block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
     */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames[];
    /**
     * trust block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
     */
    readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}.
     */
    readonly enforce?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}.
     */
    readonly ports?: number[];
    /**
     * certificate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
     */
    readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate[];
    /**
     * validation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
     */
    readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation[];
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
    /**
     * tls block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
     */
    readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls[];
}
export interface AppmeshVirtualNodeSpecBackendDefaults {
    /**
     * client_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
     */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy[];
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}.
     */
    readonly maxRequests: number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}.
     */
    readonly maxConnections: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_pending_requests AppmeshVirtualNode#max_pending_requests}.
     */
    readonly maxPendingRequests?: number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}.
     */
    readonly maxRequests: number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}.
     */
    readonly maxConnections: number;
}
export interface AppmeshVirtualNodeSpecListenerConnectionPool {
    /**
     * grpc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
     */
    readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc[];
    /**
     * http block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
     */
    readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[];
    /**
     * http2 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
     */
    readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[];
    /**
     * tcp block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
     */
    readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[];
}
export interface AppmeshVirtualNodeSpecListenerHealthCheck {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#healthy_threshold AppmeshVirtualNode#healthy_threshold}.
     */
    readonly healthyThreshold: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval_millis AppmeshVirtualNode#interval_millis}.
     */
    readonly intervalMillis: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout_millis AppmeshVirtualNode#timeout_millis}.
     */
    readonly timeoutMillis: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}.
     */
    readonly unhealthyThreshold: number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}.
     */
    readonly maxEjectionPercent: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_server_errors AppmeshVirtualNode#max_server_errors}.
     */
    readonly maxServerErrors: number;
    /**
     * base_ejection_duration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
     */
    readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration[];
    /**
     * interval block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval AppmeshVirtualNode#interval}
     */
    readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval[];
}
export interface AppmeshVirtualNodeSpecListenerPortMapping {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}.
     */
    readonly port: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}.
     */
    readonly protocol: string;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
     */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle[];
    /**
     * per_request block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
     */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest[];
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
     */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle[];
    /**
     * per_request block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
     */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest[];
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
     */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle[];
    /**
     * per_request block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
     */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest[];
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}.
     */
    readonly value: number;
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
     */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle[];
}
export interface AppmeshVirtualNodeSpecListenerTimeout {
    /**
     * grpc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
     */
    readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc[];
    /**
     * http block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
     */
    readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp[];
    /**
     * http2 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
     */
    readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2[];
    /**
     * tcp block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
     */
    readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp[];
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_arn AppmeshVirtualNode#certificate_arn}.
     */
    readonly certificateArn: string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}.
     */
    readonly certificateChain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}.
     */
    readonly privateKey: string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
    /**
     * acm block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
     */
    readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm[];
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
     */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
     */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds[];
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}.
     */
    readonly exact: string[];
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
     */
    readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch[];
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}.
     */
    readonly certificateChain: string;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
     */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
     */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds[];
}
export interface AppmeshVirtualNodeSpecListenerTlsValidation {
    /**
     * subject_alternative_names block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
     */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames[];
    /**
     * trust block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
     */
    readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust[];
}
export interface AppmeshVirtualNodeSpecListenerTls {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mode AppmeshVirtualNode#mode}.
     */
    readonly mode: string;
    /**
     * certificate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
     */
    readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate[];
    /**
     * validation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
     */
    readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation[];
}
export interface AppmeshVirtualNodeSpecListener {
    /**
     * connection_pool block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#connection_pool AppmeshVirtualNode#connection_pool}
     */
    readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool[];
    /**
     * health_check block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#health_check AppmeshVirtualNode#health_check}
     */
    readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck[];
    /**
     * outlier_detection block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#outlier_detection AppmeshVirtualNode#outlier_detection}
     */
    readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection[];
    /**
     * port_mapping block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port_mapping AppmeshVirtualNode#port_mapping}
     */
    readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping[];
    /**
     * timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout AppmeshVirtualNode#timeout}
     */
    readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout[];
    /**
     * tls block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
     */
    readonly tls?: AppmeshVirtualNodeSpecListenerTls[];
}
export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}.
     */
    readonly path: string;
}
export interface AppmeshVirtualNodeSpecLoggingAccessLog {
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
     */
    readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile[];
}
export interface AppmeshVirtualNodeSpecLogging {
    /**
     * access_log block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#access_log AppmeshVirtualNode#access_log}
     */
    readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog[];
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#attributes AppmeshVirtualNode#attributes}.
     */
    readonly attributes?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#namespace_name AppmeshVirtualNode#namespace_name}.
     */
    readonly namespaceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_name AppmeshVirtualNode#service_name}.
     */
    readonly serviceName: string;
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#hostname AppmeshVirtualNode#hostname}.
     */
    readonly hostname: string;
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
    /**
     * aws_cloud_map block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
     */
    readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap[];
    /**
     * dns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#dns AppmeshVirtualNode#dns}
     */
    readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns[];
}
export interface AppmeshVirtualNodeSpec {
    /**
     * backend block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend AppmeshVirtualNode#backend}
     */
    readonly backend?: AppmeshVirtualNodeSpecBackend[];
    /**
     * backend_defaults block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend_defaults AppmeshVirtualNode#backend_defaults}
     */
    readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults[];
    /**
     * listener block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#listener AppmeshVirtualNode#listener}
     */
    readonly listener?: AppmeshVirtualNodeSpecListener[];
    /**
     * logging block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#logging AppmeshVirtualNode#logging}
     */
    readonly logging?: AppmeshVirtualNodeSpecLogging[];
    /**
     * service_discovery block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_discovery AppmeshVirtualNode#service_discovery}
     */
    readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}.
 */
export declare class AppmeshVirtualNode extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig);
    get arn(): string;
    get createdDate(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _meshName;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get resourceOwner(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _spec;
    get spec(): AppmeshVirtualNodeSpec[];
    set spec(value: AppmeshVirtualNodeSpec[]);
    get specInput(): AppmeshVirtualNodeSpec[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
