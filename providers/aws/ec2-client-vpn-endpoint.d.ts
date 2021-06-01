import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}.
     */
    readonly clientCidrBlock: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#description Ec2ClientVpnEndpoint#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#dns_servers Ec2ClientVpnEndpoint#dns_servers}.
     */
    readonly dnsServers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}.
     */
    readonly serverCertificateArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}.
     */
    readonly splitTunnel?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags Ec2ClientVpnEndpoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#tags_all Ec2ClientVpnEndpoint#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}.
     */
    readonly transportProtocol?: string;
    /**
     * authentication_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#authentication_options Ec2ClientVpnEndpoint#authentication_options}
     */
    readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[];
    /**
     * connection_log_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
     */
    readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions[];
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#active_directory_id Ec2ClientVpnEndpoint#active_directory_id}.
     */
    readonly activeDirectoryId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#root_certificate_chain_arn Ec2ClientVpnEndpoint#root_certificate_chain_arn}.
     */
    readonly rootCertificateChainArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}.
     */
    readonly samlProviderArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#type Ec2ClientVpnEndpoint#type}.
     */
    readonly type: string;
}
export interface Ec2ClientVpnEndpointConnectionLogOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}.
     */
    readonly cloudwatchLogGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}.
     */
    readonly cloudwatchLogStream?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html#enabled Ec2ClientVpnEndpoint#enabled}.
     */
    readonly enabled: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint}.
 */
export declare class Ec2ClientVpnEndpoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html aws_ec2_client_vpn_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig);
    get arn(): string;
    private _clientCidrBlock;
    get clientCidrBlock(): string;
    set clientCidrBlock(value: string);
    get clientCidrBlockInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get dnsName(): string;
    private _dnsServers?;
    get dnsServers(): string[];
    set dnsServers(value: string[]);
    resetDnsServers(): void;
    get dnsServersInput(): string[] | undefined;
    get id(): string;
    private _serverCertificateArn;
    get serverCertificateArn(): string;
    set serverCertificateArn(value: string);
    get serverCertificateArnInput(): string;
    private _splitTunnel?;
    get splitTunnel(): boolean;
    set splitTunnel(value: boolean);
    resetSplitTunnel(): void;
    get splitTunnelInput(): boolean | undefined;
    get status(): string;
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
    private _transportProtocol?;
    get transportProtocol(): string;
    set transportProtocol(value: string);
    resetTransportProtocol(): void;
    get transportProtocolInput(): string | undefined;
    private _authenticationOptions;
    get authenticationOptions(): Ec2ClientVpnEndpointAuthenticationOptions[];
    set authenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[]);
    get authenticationOptionsInput(): Ec2ClientVpnEndpointAuthenticationOptions[];
    private _connectionLogOptions;
    get connectionLogOptions(): Ec2ClientVpnEndpointConnectionLogOptions[];
    set connectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions[]);
    get connectionLogOptionsInput(): Ec2ClientVpnEndpointConnectionLogOptions[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
