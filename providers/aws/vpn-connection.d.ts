import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#customer_gateway_id VpnConnection#customer_gateway_id}.
     */
    readonly customerGatewayId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#enable_acceleration VpnConnection#enable_acceleration}.
     */
    readonly enableAcceleration?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.
     */
    readonly localIpv4NetworkCidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.
     */
    readonly localIpv6NetworkCidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.
     */
    readonly remoteIpv4NetworkCidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.
     */
    readonly remoteIpv6NetworkCidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#static_routes_only VpnConnection#static_routes_only}.
     */
    readonly staticRoutesOnly?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tags VpnConnection#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tags_all VpnConnection#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#transit_gateway_id VpnConnection#transit_gateway_id}.
     */
    readonly transitGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.
     */
    readonly tunnel1DpdTimeoutAction?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.
     */
    readonly tunnel1DpdTimeoutSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.
     */
    readonly tunnel1IkeVersions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.
     */
    readonly tunnel1InsideCidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.
     */
    readonly tunnel1InsideIpv6Cidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.
     */
    readonly tunnel1Phase1DhGroupNumbers?: number[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.
     */
    readonly tunnel1Phase1EncryptionAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.
     */
    readonly tunnel1Phase1IntegrityAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.
     */
    readonly tunnel1Phase1LifetimeSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.
     */
    readonly tunnel1Phase2DhGroupNumbers?: number[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.
     */
    readonly tunnel1Phase2EncryptionAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.
     */
    readonly tunnel1Phase2IntegrityAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.
     */
    readonly tunnel1Phase2LifetimeSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.
     */
    readonly tunnel1PresharedKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.
     */
    readonly tunnel1RekeyFuzzPercentage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.
     */
    readonly tunnel1RekeyMarginTimeSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.
     */
    readonly tunnel1ReplayWindowSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.
     */
    readonly tunnel1StartupAction?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.
     */
    readonly tunnel2DpdTimeoutAction?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.
     */
    readonly tunnel2DpdTimeoutSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.
     */
    readonly tunnel2IkeVersions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.
     */
    readonly tunnel2InsideCidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.
     */
    readonly tunnel2InsideIpv6Cidr?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.
     */
    readonly tunnel2Phase1DhGroupNumbers?: number[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.
     */
    readonly tunnel2Phase1EncryptionAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.
     */
    readonly tunnel2Phase1IntegrityAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.
     */
    readonly tunnel2Phase1LifetimeSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.
     */
    readonly tunnel2Phase2DhGroupNumbers?: number[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.
     */
    readonly tunnel2Phase2EncryptionAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.
     */
    readonly tunnel2Phase2IntegrityAlgorithms?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.
     */
    readonly tunnel2Phase2LifetimeSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.
     */
    readonly tunnel2PresharedKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.
     */
    readonly tunnel2RekeyFuzzPercentage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.
     */
    readonly tunnel2RekeyMarginTimeSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.
     */
    readonly tunnel2ReplayWindowSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.
     */
    readonly tunnel2StartupAction?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.
     */
    readonly tunnelInsideIpVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#type VpnConnection#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html#vpn_gateway_id VpnConnection#vpn_gateway_id}.
     */
    readonly vpnGatewayId?: string;
}
export declare class VpnConnectionRoutes extends cdktf.ComplexComputedList {
    get destinationCidrBlock(): string;
    get source(): string;
    get state(): string;
}
export declare class VpnConnectionVgwTelemetry extends cdktf.ComplexComputedList {
    get acceptedRouteCount(): number;
    get lastStatusChange(): string;
    get outsideIpAddress(): string;
    get status(): string;
    get statusMessage(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection}.
 */
export declare class VpnConnection extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpnConnectionConfig);
    get arn(): string;
    get customerGatewayConfiguration(): string;
    private _customerGatewayId;
    get customerGatewayId(): string;
    set customerGatewayId(value: string);
    get customerGatewayIdInput(): string;
    private _enableAcceleration?;
    get enableAcceleration(): boolean;
    set enableAcceleration(value: boolean);
    resetEnableAcceleration(): void;
    get enableAccelerationInput(): boolean | undefined;
    get id(): string;
    private _localIpv4NetworkCidr?;
    get localIpv4NetworkCidr(): string;
    set localIpv4NetworkCidr(value: string);
    resetLocalIpv4NetworkCidr(): void;
    get localIpv4NetworkCidrInput(): string | undefined;
    private _localIpv6NetworkCidr?;
    get localIpv6NetworkCidr(): string;
    set localIpv6NetworkCidr(value: string);
    resetLocalIpv6NetworkCidr(): void;
    get localIpv6NetworkCidrInput(): string | undefined;
    private _remoteIpv4NetworkCidr?;
    get remoteIpv4NetworkCidr(): string;
    set remoteIpv4NetworkCidr(value: string);
    resetRemoteIpv4NetworkCidr(): void;
    get remoteIpv4NetworkCidrInput(): string | undefined;
    private _remoteIpv6NetworkCidr?;
    get remoteIpv6NetworkCidr(): string;
    set remoteIpv6NetworkCidr(value: string);
    resetRemoteIpv6NetworkCidr(): void;
    get remoteIpv6NetworkCidrInput(): string | undefined;
    routes(index: string): VpnConnectionRoutes;
    private _staticRoutesOnly?;
    get staticRoutesOnly(): boolean;
    set staticRoutesOnly(value: boolean);
    resetStaticRoutesOnly(): void;
    get staticRoutesOnlyInput(): boolean | undefined;
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
    get transitGatewayAttachmentId(): string;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    get tunnel1Address(): string;
    get tunnel1BgpAsn(): string;
    get tunnel1BgpHoldtime(): number;
    get tunnel1CgwInsideAddress(): string;
    private _tunnel1DpdTimeoutAction?;
    get tunnel1DpdTimeoutAction(): string;
    set tunnel1DpdTimeoutAction(value: string);
    resetTunnel1DpdTimeoutAction(): void;
    get tunnel1DpdTimeoutActionInput(): string | undefined;
    private _tunnel1DpdTimeoutSeconds?;
    get tunnel1DpdTimeoutSeconds(): number;
    set tunnel1DpdTimeoutSeconds(value: number);
    resetTunnel1DpdTimeoutSeconds(): void;
    get tunnel1DpdTimeoutSecondsInput(): number | undefined;
    private _tunnel1IkeVersions?;
    get tunnel1IkeVersions(): string[];
    set tunnel1IkeVersions(value: string[]);
    resetTunnel1IkeVersions(): void;
    get tunnel1IkeVersionsInput(): string[] | undefined;
    private _tunnel1InsideCidr?;
    get tunnel1InsideCidr(): string;
    set tunnel1InsideCidr(value: string);
    resetTunnel1InsideCidr(): void;
    get tunnel1InsideCidrInput(): string | undefined;
    private _tunnel1InsideIpv6Cidr?;
    get tunnel1InsideIpv6Cidr(): string;
    set tunnel1InsideIpv6Cidr(value: string);
    resetTunnel1InsideIpv6Cidr(): void;
    get tunnel1InsideIpv6CidrInput(): string | undefined;
    private _tunnel1Phase1DhGroupNumbers?;
    get tunnel1Phase1DhGroupNumbers(): number[];
    set tunnel1Phase1DhGroupNumbers(value: number[]);
    resetTunnel1Phase1DhGroupNumbers(): void;
    get tunnel1Phase1DhGroupNumbersInput(): number[] | undefined;
    private _tunnel1Phase1EncryptionAlgorithms?;
    get tunnel1Phase1EncryptionAlgorithms(): string[];
    set tunnel1Phase1EncryptionAlgorithms(value: string[]);
    resetTunnel1Phase1EncryptionAlgorithms(): void;
    get tunnel1Phase1EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase1IntegrityAlgorithms?;
    get tunnel1Phase1IntegrityAlgorithms(): string[];
    set tunnel1Phase1IntegrityAlgorithms(value: string[]);
    resetTunnel1Phase1IntegrityAlgorithms(): void;
    get tunnel1Phase1IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase1LifetimeSeconds?;
    get tunnel1Phase1LifetimeSeconds(): number;
    set tunnel1Phase1LifetimeSeconds(value: number);
    resetTunnel1Phase1LifetimeSeconds(): void;
    get tunnel1Phase1LifetimeSecondsInput(): number | undefined;
    private _tunnel1Phase2DhGroupNumbers?;
    get tunnel1Phase2DhGroupNumbers(): number[];
    set tunnel1Phase2DhGroupNumbers(value: number[]);
    resetTunnel1Phase2DhGroupNumbers(): void;
    get tunnel1Phase2DhGroupNumbersInput(): number[] | undefined;
    private _tunnel1Phase2EncryptionAlgorithms?;
    get tunnel1Phase2EncryptionAlgorithms(): string[];
    set tunnel1Phase2EncryptionAlgorithms(value: string[]);
    resetTunnel1Phase2EncryptionAlgorithms(): void;
    get tunnel1Phase2EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase2IntegrityAlgorithms?;
    get tunnel1Phase2IntegrityAlgorithms(): string[];
    set tunnel1Phase2IntegrityAlgorithms(value: string[]);
    resetTunnel1Phase2IntegrityAlgorithms(): void;
    get tunnel1Phase2IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel1Phase2LifetimeSeconds?;
    get tunnel1Phase2LifetimeSeconds(): number;
    set tunnel1Phase2LifetimeSeconds(value: number);
    resetTunnel1Phase2LifetimeSeconds(): void;
    get tunnel1Phase2LifetimeSecondsInput(): number | undefined;
    private _tunnel1PresharedKey?;
    get tunnel1PresharedKey(): string;
    set tunnel1PresharedKey(value: string);
    resetTunnel1PresharedKey(): void;
    get tunnel1PresharedKeyInput(): string | undefined;
    private _tunnel1RekeyFuzzPercentage?;
    get tunnel1RekeyFuzzPercentage(): number;
    set tunnel1RekeyFuzzPercentage(value: number);
    resetTunnel1RekeyFuzzPercentage(): void;
    get tunnel1RekeyFuzzPercentageInput(): number | undefined;
    private _tunnel1RekeyMarginTimeSeconds?;
    get tunnel1RekeyMarginTimeSeconds(): number;
    set tunnel1RekeyMarginTimeSeconds(value: number);
    resetTunnel1RekeyMarginTimeSeconds(): void;
    get tunnel1RekeyMarginTimeSecondsInput(): number | undefined;
    private _tunnel1ReplayWindowSize?;
    get tunnel1ReplayWindowSize(): number;
    set tunnel1ReplayWindowSize(value: number);
    resetTunnel1ReplayWindowSize(): void;
    get tunnel1ReplayWindowSizeInput(): number | undefined;
    private _tunnel1StartupAction?;
    get tunnel1StartupAction(): string;
    set tunnel1StartupAction(value: string);
    resetTunnel1StartupAction(): void;
    get tunnel1StartupActionInput(): string | undefined;
    get tunnel1VgwInsideAddress(): string;
    get tunnel2Address(): string;
    get tunnel2BgpAsn(): string;
    get tunnel2BgpHoldtime(): number;
    get tunnel2CgwInsideAddress(): string;
    private _tunnel2DpdTimeoutAction?;
    get tunnel2DpdTimeoutAction(): string;
    set tunnel2DpdTimeoutAction(value: string);
    resetTunnel2DpdTimeoutAction(): void;
    get tunnel2DpdTimeoutActionInput(): string | undefined;
    private _tunnel2DpdTimeoutSeconds?;
    get tunnel2DpdTimeoutSeconds(): number;
    set tunnel2DpdTimeoutSeconds(value: number);
    resetTunnel2DpdTimeoutSeconds(): void;
    get tunnel2DpdTimeoutSecondsInput(): number | undefined;
    private _tunnel2IkeVersions?;
    get tunnel2IkeVersions(): string[];
    set tunnel2IkeVersions(value: string[]);
    resetTunnel2IkeVersions(): void;
    get tunnel2IkeVersionsInput(): string[] | undefined;
    private _tunnel2InsideCidr?;
    get tunnel2InsideCidr(): string;
    set tunnel2InsideCidr(value: string);
    resetTunnel2InsideCidr(): void;
    get tunnel2InsideCidrInput(): string | undefined;
    private _tunnel2InsideIpv6Cidr?;
    get tunnel2InsideIpv6Cidr(): string;
    set tunnel2InsideIpv6Cidr(value: string);
    resetTunnel2InsideIpv6Cidr(): void;
    get tunnel2InsideIpv6CidrInput(): string | undefined;
    private _tunnel2Phase1DhGroupNumbers?;
    get tunnel2Phase1DhGroupNumbers(): number[];
    set tunnel2Phase1DhGroupNumbers(value: number[]);
    resetTunnel2Phase1DhGroupNumbers(): void;
    get tunnel2Phase1DhGroupNumbersInput(): number[] | undefined;
    private _tunnel2Phase1EncryptionAlgorithms?;
    get tunnel2Phase1EncryptionAlgorithms(): string[];
    set tunnel2Phase1EncryptionAlgorithms(value: string[]);
    resetTunnel2Phase1EncryptionAlgorithms(): void;
    get tunnel2Phase1EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase1IntegrityAlgorithms?;
    get tunnel2Phase1IntegrityAlgorithms(): string[];
    set tunnel2Phase1IntegrityAlgorithms(value: string[]);
    resetTunnel2Phase1IntegrityAlgorithms(): void;
    get tunnel2Phase1IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase1LifetimeSeconds?;
    get tunnel2Phase1LifetimeSeconds(): number;
    set tunnel2Phase1LifetimeSeconds(value: number);
    resetTunnel2Phase1LifetimeSeconds(): void;
    get tunnel2Phase1LifetimeSecondsInput(): number | undefined;
    private _tunnel2Phase2DhGroupNumbers?;
    get tunnel2Phase2DhGroupNumbers(): number[];
    set tunnel2Phase2DhGroupNumbers(value: number[]);
    resetTunnel2Phase2DhGroupNumbers(): void;
    get tunnel2Phase2DhGroupNumbersInput(): number[] | undefined;
    private _tunnel2Phase2EncryptionAlgorithms?;
    get tunnel2Phase2EncryptionAlgorithms(): string[];
    set tunnel2Phase2EncryptionAlgorithms(value: string[]);
    resetTunnel2Phase2EncryptionAlgorithms(): void;
    get tunnel2Phase2EncryptionAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase2IntegrityAlgorithms?;
    get tunnel2Phase2IntegrityAlgorithms(): string[];
    set tunnel2Phase2IntegrityAlgorithms(value: string[]);
    resetTunnel2Phase2IntegrityAlgorithms(): void;
    get tunnel2Phase2IntegrityAlgorithmsInput(): string[] | undefined;
    private _tunnel2Phase2LifetimeSeconds?;
    get tunnel2Phase2LifetimeSeconds(): number;
    set tunnel2Phase2LifetimeSeconds(value: number);
    resetTunnel2Phase2LifetimeSeconds(): void;
    get tunnel2Phase2LifetimeSecondsInput(): number | undefined;
    private _tunnel2PresharedKey?;
    get tunnel2PresharedKey(): string;
    set tunnel2PresharedKey(value: string);
    resetTunnel2PresharedKey(): void;
    get tunnel2PresharedKeyInput(): string | undefined;
    private _tunnel2RekeyFuzzPercentage?;
    get tunnel2RekeyFuzzPercentage(): number;
    set tunnel2RekeyFuzzPercentage(value: number);
    resetTunnel2RekeyFuzzPercentage(): void;
    get tunnel2RekeyFuzzPercentageInput(): number | undefined;
    private _tunnel2RekeyMarginTimeSeconds?;
    get tunnel2RekeyMarginTimeSeconds(): number;
    set tunnel2RekeyMarginTimeSeconds(value: number);
    resetTunnel2RekeyMarginTimeSeconds(): void;
    get tunnel2RekeyMarginTimeSecondsInput(): number | undefined;
    private _tunnel2ReplayWindowSize?;
    get tunnel2ReplayWindowSize(): number;
    set tunnel2ReplayWindowSize(value: number);
    resetTunnel2ReplayWindowSize(): void;
    get tunnel2ReplayWindowSizeInput(): number | undefined;
    private _tunnel2StartupAction?;
    get tunnel2StartupAction(): string;
    set tunnel2StartupAction(value: string);
    resetTunnel2StartupAction(): void;
    get tunnel2StartupActionInput(): string | undefined;
    get tunnel2VgwInsideAddress(): string;
    private _tunnelInsideIpVersion?;
    get tunnelInsideIpVersion(): string;
    set tunnelInsideIpVersion(value: string);
    resetTunnelInsideIpVersion(): void;
    get tunnelInsideIpVersionInput(): string | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    vgwTelemetry(index: string): VpnConnectionVgwTelemetry;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
