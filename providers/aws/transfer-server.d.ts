import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#certificate TransferServer#certificate}.
     */
    readonly certificate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#endpoint_type TransferServer#endpoint_type}.
     */
    readonly endpointType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#force_destroy TransferServer#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#host_key TransferServer#host_key}.
     */
    readonly hostKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#identity_provider_type TransferServer#identity_provider_type}.
     */
    readonly identityProviderType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#invocation_role TransferServer#invocation_role}.
     */
    readonly invocationRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#logging_role TransferServer#logging_role}.
     */
    readonly loggingRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#protocols TransferServer#protocols}.
     */
    readonly protocols?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#security_policy_name TransferServer#security_policy_name}.
     */
    readonly securityPolicyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#tags TransferServer#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#tags_all TransferServer#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#url TransferServer#url}.
     */
    readonly url?: string;
    /**
     * endpoint_details block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#endpoint_details TransferServer#endpoint_details}
     */
    readonly endpointDetails?: TransferServerEndpointDetails[];
}
export interface TransferServerEndpointDetails {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#address_allocation_ids TransferServer#address_allocation_ids}.
     */
    readonly addressAllocationIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#subnet_ids TransferServer#subnet_ids}.
     */
    readonly subnetIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#vpc_endpoint_id TransferServer#vpc_endpoint_id}.
     */
    readonly vpcEndpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html#vpc_id TransferServer#vpc_id}.
     */
    readonly vpcId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server}.
 */
export declare class TransferServer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_server.html aws_transfer_server} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: TransferServerConfig);
    get arn(): string;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string | undefined;
    get endpoint(): string;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    resetEndpointType(): void;
    get endpointTypeInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    private _hostKey?;
    get hostKey(): string;
    set hostKey(value: string);
    resetHostKey(): void;
    get hostKeyInput(): string | undefined;
    get hostKeyFingerprint(): string;
    get id(): string;
    private _identityProviderType?;
    get identityProviderType(): string;
    set identityProviderType(value: string);
    resetIdentityProviderType(): void;
    get identityProviderTypeInput(): string | undefined;
    private _invocationRole?;
    get invocationRole(): string;
    set invocationRole(value: string);
    resetInvocationRole(): void;
    get invocationRoleInput(): string | undefined;
    private _loggingRole?;
    get loggingRole(): string;
    set loggingRole(value: string);
    resetLoggingRole(): void;
    get loggingRoleInput(): string | undefined;
    private _protocols?;
    get protocols(): string[];
    set protocols(value: string[]);
    resetProtocols(): void;
    get protocolsInput(): string[] | undefined;
    private _securityPolicyName?;
    get securityPolicyName(): string;
    set securityPolicyName(value: string);
    resetSecurityPolicyName(): void;
    get securityPolicyNameInput(): string | undefined;
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
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
    private _endpointDetails?;
    get endpointDetails(): TransferServerEndpointDetails[];
    set endpointDetails(value: TransferServerEndpointDetails[]);
    resetEndpointDetails(): void;
    get endpointDetailsInput(): TransferServerEndpointDetails[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
