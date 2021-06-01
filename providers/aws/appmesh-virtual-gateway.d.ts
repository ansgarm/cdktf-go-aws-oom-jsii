import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_name AppmeshVirtualGateway#mesh_name}.
     */
    readonly meshName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_owner AppmeshVirtualGateway#mesh_owner}.
     */
    readonly meshOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#name AppmeshVirtualGateway#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags AppmeshVirtualGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags_all AppmeshVirtualGateway#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#spec AppmeshVirtualGateway#spec}
     */
    readonly spec: AppmeshVirtualGatewaySpec[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}.
     */
    readonly certificateChain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}.
     */
    readonly privateKey: string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
     */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
     */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}.
     */
    readonly exact: string[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
     */
    readonly match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}.
     */
    readonly certificateAuthorityArns: string[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}.
     */
    readonly certificateChain: string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
     * acm block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
     */
    readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
     */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
     */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
    /**
     * subject_alternative_names block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
     */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames[];
    /**
     * trust block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
     */
    readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#enforce AppmeshVirtualGateway#enforce}.
     */
    readonly enforce?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#ports AppmeshVirtualGateway#ports}.
     */
    readonly ports?: number[];
    /**
     * certificate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
     */
    readonly certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate[];
    /**
     * validation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
     */
    readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
    /**
     * tls block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
     */
    readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls[];
}
export interface AppmeshVirtualGatewaySpecBackendDefaults {
    /**
     * client_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#client_policy AppmeshVirtualGateway#client_policy}
     */
    readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy[];
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}.
     */
    readonly maxRequests: number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_connections AppmeshVirtualGateway#max_connections}.
     */
    readonly maxConnections: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_pending_requests AppmeshVirtualGateway#max_pending_requests}.
     */
    readonly maxPendingRequests?: number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}.
     */
    readonly maxRequests: number;
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
    /**
     * grpc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#grpc AppmeshVirtualGateway#grpc}
     */
    readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc[];
    /**
     * http block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http AppmeshVirtualGateway#http}
     */
    readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp[];
    /**
     * http2 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http2 AppmeshVirtualGateway#http2}
     */
    readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2[];
}
export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#healthy_threshold AppmeshVirtualGateway#healthy_threshold}.
     */
    readonly healthyThreshold: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#interval_millis AppmeshVirtualGateway#interval_millis}.
     */
    readonly intervalMillis: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#timeout_millis AppmeshVirtualGateway#timeout_millis}.
     */
    readonly timeoutMillis: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}.
     */
    readonly unhealthyThreshold: number;
}
export interface AppmeshVirtualGatewaySpecListenerPortMapping {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}.
     */
    readonly port: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}.
     */
    readonly protocol: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_arn AppmeshVirtualGateway#certificate_arn}.
     */
    readonly certificateArn: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}.
     */
    readonly certificateChain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}.
     */
    readonly privateKey: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
    /**
     * acm block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
     */
    readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm[];
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
     */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
     */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds[];
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}.
     */
    readonly exact: string[];
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
     */
    readonly match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch[];
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}.
     */
    readonly certificateChain: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}.
     */
    readonly secretName: string;
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
     */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile[];
    /**
     * sds block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
     */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds[];
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidation {
    /**
     * subject_alternative_names block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
     */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames[];
    /**
     * trust block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
     */
    readonly trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust[];
}
export interface AppmeshVirtualGatewaySpecListenerTls {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mode AppmeshVirtualGateway#mode}.
     */
    readonly mode: string;
    /**
     * certificate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
     */
    readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate[];
    /**
     * validation block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
     */
    readonly validation?: AppmeshVirtualGatewaySpecListenerTlsValidation[];
}
export interface AppmeshVirtualGatewaySpecListener {
    /**
     * connection_pool block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#connection_pool AppmeshVirtualGateway#connection_pool}
     */
    readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool[];
    /**
     * health_check block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#health_check AppmeshVirtualGateway#health_check}
     */
    readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck[];
    /**
     * port_mapping block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port_mapping AppmeshVirtualGateway#port_mapping}
     */
    readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping[];
    /**
     * tls block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
     */
    readonly tls?: AppmeshVirtualGatewaySpecListenerTls[];
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}.
     */
    readonly path: string;
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
    /**
     * file block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
     */
    readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile[];
}
export interface AppmeshVirtualGatewaySpecLogging {
    /**
     * access_log block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#access_log AppmeshVirtualGateway#access_log}
     */
    readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog[];
}
export interface AppmeshVirtualGatewaySpec {
    /**
     * backend_defaults block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#backend_defaults AppmeshVirtualGateway#backend_defaults}
     */
    readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults[];
    /**
     * listener block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#listener AppmeshVirtualGateway#listener}
     */
    readonly listener: AppmeshVirtualGatewaySpecListener[];
    /**
     * logging block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#logging AppmeshVirtualGateway#logging}
     */
    readonly logging?: AppmeshVirtualGatewaySpecLogging[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}.
 */
export declare class AppmeshVirtualGateway extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig);
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
    get spec(): AppmeshVirtualGatewaySpec[];
    set spec(value: AppmeshVirtualGatewaySpec[]);
    get specInput(): AppmeshVirtualGatewaySpec[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
