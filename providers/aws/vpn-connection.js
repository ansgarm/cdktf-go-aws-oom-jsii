"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpnConnection = exports.VpnConnectionVgwTelemetry = exports.VpnConnectionRoutes = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
class VpnConnectionRoutes extends cdktf.ComplexComputedList {
    // destination_cidr_block - computed: true, optional: false, required: false
    get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
}
exports.VpnConnectionRoutes = VpnConnectionRoutes;
_a = JSII_RTTI_SYMBOL_1;
VpnConnectionRoutes[_a] = { fqn: "hashicorp_aws.VpnConnectionRoutes", version: "0.0.0" };
class VpnConnectionVgwTelemetry extends cdktf.ComplexComputedList {
    // accepted_route_count - computed: true, optional: false, required: false
    get acceptedRouteCount() {
        return this.getNumberAttribute('accepted_route_count');
    }
    // last_status_change - computed: true, optional: false, required: false
    get lastStatusChange() {
        return this.getStringAttribute('last_status_change');
    }
    // outside_ip_address - computed: true, optional: false, required: false
    get outsideIpAddress() {
        return this.getStringAttribute('outside_ip_address');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // status_message - computed: true, optional: false, required: false
    get statusMessage() {
        return this.getStringAttribute('status_message');
    }
}
exports.VpnConnectionVgwTelemetry = VpnConnectionVgwTelemetry;
_b = JSII_RTTI_SYMBOL_1;
VpnConnectionVgwTelemetry[_b] = { fqn: "hashicorp_aws.VpnConnectionVgwTelemetry", version: "0.0.0" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection}.
 */
class VpnConnection extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpn_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._customerGatewayId = config.customerGatewayId;
        this._enableAcceleration = config.enableAcceleration;
        this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
        this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
        this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
        this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
        this._staticRoutesOnly = config.staticRoutesOnly;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transitGatewayId = config.transitGatewayId;
        this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
        this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
        this._tunnel1IkeVersions = config.tunnel1IkeVersions;
        this._tunnel1InsideCidr = config.tunnel1InsideCidr;
        this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
        this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
        this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
        this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
        this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
        this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
        this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
        this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
        this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
        this._tunnel1PresharedKey = config.tunnel1PresharedKey;
        this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
        this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
        this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
        this._tunnel1StartupAction = config.tunnel1StartupAction;
        this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
        this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
        this._tunnel2IkeVersions = config.tunnel2IkeVersions;
        this._tunnel2InsideCidr = config.tunnel2InsideCidr;
        this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
        this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
        this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
        this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
        this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
        this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
        this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
        this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
        this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
        this._tunnel2PresharedKey = config.tunnel2PresharedKey;
        this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
        this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
        this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
        this._tunnel2StartupAction = config.tunnel2StartupAction;
        this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
        this._type = config.type;
        this._vpnGatewayId = config.vpnGatewayId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // customer_gateway_configuration - computed: true, optional: false, required: false
    get customerGatewayConfiguration() {
        return this.getStringAttribute('customer_gateway_configuration');
    }
    get customerGatewayId() {
        return this.getStringAttribute('customer_gateway_id');
    }
    set customerGatewayId(value) {
        this._customerGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get customerGatewayIdInput() {
        return this._customerGatewayId;
    }
    get enableAcceleration() {
        return this.getBooleanAttribute('enable_acceleration');
    }
    set enableAcceleration(value) {
        this._enableAcceleration = value;
    }
    resetEnableAcceleration() {
        this._enableAcceleration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAccelerationInput() {
        return this._enableAcceleration;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get localIpv4NetworkCidr() {
        return this.getStringAttribute('local_ipv4_network_cidr');
    }
    set localIpv4NetworkCidr(value) {
        this._localIpv4NetworkCidr = value;
    }
    resetLocalIpv4NetworkCidr() {
        this._localIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localIpv4NetworkCidrInput() {
        return this._localIpv4NetworkCidr;
    }
    get localIpv6NetworkCidr() {
        return this.getStringAttribute('local_ipv6_network_cidr');
    }
    set localIpv6NetworkCidr(value) {
        this._localIpv6NetworkCidr = value;
    }
    resetLocalIpv6NetworkCidr() {
        this._localIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localIpv6NetworkCidrInput() {
        return this._localIpv6NetworkCidr;
    }
    get remoteIpv4NetworkCidr() {
        return this.getStringAttribute('remote_ipv4_network_cidr');
    }
    set remoteIpv4NetworkCidr(value) {
        this._remoteIpv4NetworkCidr = value;
    }
    resetRemoteIpv4NetworkCidr() {
        this._remoteIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteIpv4NetworkCidrInput() {
        return this._remoteIpv4NetworkCidr;
    }
    get remoteIpv6NetworkCidr() {
        return this.getStringAttribute('remote_ipv6_network_cidr');
    }
    set remoteIpv6NetworkCidr(value) {
        this._remoteIpv6NetworkCidr = value;
    }
    resetRemoteIpv6NetworkCidr() {
        this._remoteIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteIpv6NetworkCidrInput() {
        return this._remoteIpv6NetworkCidr;
    }
    // routes - computed: true, optional: false, required: false
    routes(index) {
        return new VpnConnectionRoutes(this, 'routes', index);
    }
    get staticRoutesOnly() {
        return this.getBooleanAttribute('static_routes_only');
    }
    set staticRoutesOnly(value) {
        this._staticRoutesOnly = value;
    }
    resetStaticRoutesOnly() {
        this._staticRoutesOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticRoutesOnlyInput() {
        return this._staticRoutesOnly;
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
    // transit_gateway_attachment_id - computed: true, optional: false, required: false
    get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    set transitGatewayId(value) {
        this._transitGatewayId = value;
    }
    resetTransitGatewayId() {
        this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayIdInput() {
        return this._transitGatewayId;
    }
    // tunnel1_address - computed: true, optional: false, required: false
    get tunnel1Address() {
        return this.getStringAttribute('tunnel1_address');
    }
    // tunnel1_bgp_asn - computed: true, optional: false, required: false
    get tunnel1BgpAsn() {
        return this.getStringAttribute('tunnel1_bgp_asn');
    }
    // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
    get tunnel1BgpHoldtime() {
        return this.getNumberAttribute('tunnel1_bgp_holdtime');
    }
    // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
    get tunnel1CgwInsideAddress() {
        return this.getStringAttribute('tunnel1_cgw_inside_address');
    }
    get tunnel1DpdTimeoutAction() {
        return this.getStringAttribute('tunnel1_dpd_timeout_action');
    }
    set tunnel1DpdTimeoutAction(value) {
        this._tunnel1DpdTimeoutAction = value;
    }
    resetTunnel1DpdTimeoutAction() {
        this._tunnel1DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1DpdTimeoutActionInput() {
        return this._tunnel1DpdTimeoutAction;
    }
    get tunnel1DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
    }
    set tunnel1DpdTimeoutSeconds(value) {
        this._tunnel1DpdTimeoutSeconds = value;
    }
    resetTunnel1DpdTimeoutSeconds() {
        this._tunnel1DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1DpdTimeoutSecondsInput() {
        return this._tunnel1DpdTimeoutSeconds;
    }
    get tunnel1IkeVersions() {
        return this.getListAttribute('tunnel1_ike_versions');
    }
    set tunnel1IkeVersions(value) {
        this._tunnel1IkeVersions = value;
    }
    resetTunnel1IkeVersions() {
        this._tunnel1IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1IkeVersionsInput() {
        return this._tunnel1IkeVersions;
    }
    get tunnel1InsideCidr() {
        return this.getStringAttribute('tunnel1_inside_cidr');
    }
    set tunnel1InsideCidr(value) {
        this._tunnel1InsideCidr = value;
    }
    resetTunnel1InsideCidr() {
        this._tunnel1InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1InsideCidrInput() {
        return this._tunnel1InsideCidr;
    }
    get tunnel1InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
    }
    set tunnel1InsideIpv6Cidr(value) {
        this._tunnel1InsideIpv6Cidr = value;
    }
    resetTunnel1InsideIpv6Cidr() {
        this._tunnel1InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1InsideIpv6CidrInput() {
        return this._tunnel1InsideIpv6Cidr;
    }
    get tunnel1Phase1DhGroupNumbers() {
        return this.interpolationForAttribute('tunnel1_phase1_dh_group_numbers');
    }
    set tunnel1Phase1DhGroupNumbers(value) {
        this._tunnel1Phase1DhGroupNumbers = value;
    }
    resetTunnel1Phase1DhGroupNumbers() {
        this._tunnel1Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1DhGroupNumbersInput() {
        return this._tunnel1Phase1DhGroupNumbers;
    }
    get tunnel1Phase1EncryptionAlgorithms() {
        return this.getListAttribute('tunnel1_phase1_encryption_algorithms');
    }
    set tunnel1Phase1EncryptionAlgorithms(value) {
        this._tunnel1Phase1EncryptionAlgorithms = value;
    }
    resetTunnel1Phase1EncryptionAlgorithms() {
        this._tunnel1Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1EncryptionAlgorithmsInput() {
        return this._tunnel1Phase1EncryptionAlgorithms;
    }
    get tunnel1Phase1IntegrityAlgorithms() {
        return this.getListAttribute('tunnel1_phase1_integrity_algorithms');
    }
    set tunnel1Phase1IntegrityAlgorithms(value) {
        this._tunnel1Phase1IntegrityAlgorithms = value;
    }
    resetTunnel1Phase1IntegrityAlgorithms() {
        this._tunnel1Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1IntegrityAlgorithmsInput() {
        return this._tunnel1Phase1IntegrityAlgorithms;
    }
    get tunnel1Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
    }
    set tunnel1Phase1LifetimeSeconds(value) {
        this._tunnel1Phase1LifetimeSeconds = value;
    }
    resetTunnel1Phase1LifetimeSeconds() {
        this._tunnel1Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1LifetimeSecondsInput() {
        return this._tunnel1Phase1LifetimeSeconds;
    }
    get tunnel1Phase2DhGroupNumbers() {
        return this.interpolationForAttribute('tunnel1_phase2_dh_group_numbers');
    }
    set tunnel1Phase2DhGroupNumbers(value) {
        this._tunnel1Phase2DhGroupNumbers = value;
    }
    resetTunnel1Phase2DhGroupNumbers() {
        this._tunnel1Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2DhGroupNumbersInput() {
        return this._tunnel1Phase2DhGroupNumbers;
    }
    get tunnel1Phase2EncryptionAlgorithms() {
        return this.getListAttribute('tunnel1_phase2_encryption_algorithms');
    }
    set tunnel1Phase2EncryptionAlgorithms(value) {
        this._tunnel1Phase2EncryptionAlgorithms = value;
    }
    resetTunnel1Phase2EncryptionAlgorithms() {
        this._tunnel1Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2EncryptionAlgorithmsInput() {
        return this._tunnel1Phase2EncryptionAlgorithms;
    }
    get tunnel1Phase2IntegrityAlgorithms() {
        return this.getListAttribute('tunnel1_phase2_integrity_algorithms');
    }
    set tunnel1Phase2IntegrityAlgorithms(value) {
        this._tunnel1Phase2IntegrityAlgorithms = value;
    }
    resetTunnel1Phase2IntegrityAlgorithms() {
        this._tunnel1Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2IntegrityAlgorithmsInput() {
        return this._tunnel1Phase2IntegrityAlgorithms;
    }
    get tunnel1Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
    }
    set tunnel1Phase2LifetimeSeconds(value) {
        this._tunnel1Phase2LifetimeSeconds = value;
    }
    resetTunnel1Phase2LifetimeSeconds() {
        this._tunnel1Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2LifetimeSecondsInput() {
        return this._tunnel1Phase2LifetimeSeconds;
    }
    get tunnel1PresharedKey() {
        return this.getStringAttribute('tunnel1_preshared_key');
    }
    set tunnel1PresharedKey(value) {
        this._tunnel1PresharedKey = value;
    }
    resetTunnel1PresharedKey() {
        this._tunnel1PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1PresharedKeyInput() {
        return this._tunnel1PresharedKey;
    }
    get tunnel1RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
    }
    set tunnel1RekeyFuzzPercentage(value) {
        this._tunnel1RekeyFuzzPercentage = value;
    }
    resetTunnel1RekeyFuzzPercentage() {
        this._tunnel1RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1RekeyFuzzPercentageInput() {
        return this._tunnel1RekeyFuzzPercentage;
    }
    get tunnel1RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
    }
    set tunnel1RekeyMarginTimeSeconds(value) {
        this._tunnel1RekeyMarginTimeSeconds = value;
    }
    resetTunnel1RekeyMarginTimeSeconds() {
        this._tunnel1RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1RekeyMarginTimeSecondsInput() {
        return this._tunnel1RekeyMarginTimeSeconds;
    }
    get tunnel1ReplayWindowSize() {
        return this.getNumberAttribute('tunnel1_replay_window_size');
    }
    set tunnel1ReplayWindowSize(value) {
        this._tunnel1ReplayWindowSize = value;
    }
    resetTunnel1ReplayWindowSize() {
        this._tunnel1ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1ReplayWindowSizeInput() {
        return this._tunnel1ReplayWindowSize;
    }
    get tunnel1StartupAction() {
        return this.getStringAttribute('tunnel1_startup_action');
    }
    set tunnel1StartupAction(value) {
        this._tunnel1StartupAction = value;
    }
    resetTunnel1StartupAction() {
        this._tunnel1StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1StartupActionInput() {
        return this._tunnel1StartupAction;
    }
    // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
    get tunnel1VgwInsideAddress() {
        return this.getStringAttribute('tunnel1_vgw_inside_address');
    }
    // tunnel2_address - computed: true, optional: false, required: false
    get tunnel2Address() {
        return this.getStringAttribute('tunnel2_address');
    }
    // tunnel2_bgp_asn - computed: true, optional: false, required: false
    get tunnel2BgpAsn() {
        return this.getStringAttribute('tunnel2_bgp_asn');
    }
    // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
    get tunnel2BgpHoldtime() {
        return this.getNumberAttribute('tunnel2_bgp_holdtime');
    }
    // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
    get tunnel2CgwInsideAddress() {
        return this.getStringAttribute('tunnel2_cgw_inside_address');
    }
    get tunnel2DpdTimeoutAction() {
        return this.getStringAttribute('tunnel2_dpd_timeout_action');
    }
    set tunnel2DpdTimeoutAction(value) {
        this._tunnel2DpdTimeoutAction = value;
    }
    resetTunnel2DpdTimeoutAction() {
        this._tunnel2DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2DpdTimeoutActionInput() {
        return this._tunnel2DpdTimeoutAction;
    }
    get tunnel2DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
    }
    set tunnel2DpdTimeoutSeconds(value) {
        this._tunnel2DpdTimeoutSeconds = value;
    }
    resetTunnel2DpdTimeoutSeconds() {
        this._tunnel2DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2DpdTimeoutSecondsInput() {
        return this._tunnel2DpdTimeoutSeconds;
    }
    get tunnel2IkeVersions() {
        return this.getListAttribute('tunnel2_ike_versions');
    }
    set tunnel2IkeVersions(value) {
        this._tunnel2IkeVersions = value;
    }
    resetTunnel2IkeVersions() {
        this._tunnel2IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2IkeVersionsInput() {
        return this._tunnel2IkeVersions;
    }
    get tunnel2InsideCidr() {
        return this.getStringAttribute('tunnel2_inside_cidr');
    }
    set tunnel2InsideCidr(value) {
        this._tunnel2InsideCidr = value;
    }
    resetTunnel2InsideCidr() {
        this._tunnel2InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2InsideCidrInput() {
        return this._tunnel2InsideCidr;
    }
    get tunnel2InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
    }
    set tunnel2InsideIpv6Cidr(value) {
        this._tunnel2InsideIpv6Cidr = value;
    }
    resetTunnel2InsideIpv6Cidr() {
        this._tunnel2InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2InsideIpv6CidrInput() {
        return this._tunnel2InsideIpv6Cidr;
    }
    get tunnel2Phase1DhGroupNumbers() {
        return this.interpolationForAttribute('tunnel2_phase1_dh_group_numbers');
    }
    set tunnel2Phase1DhGroupNumbers(value) {
        this._tunnel2Phase1DhGroupNumbers = value;
    }
    resetTunnel2Phase1DhGroupNumbers() {
        this._tunnel2Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1DhGroupNumbersInput() {
        return this._tunnel2Phase1DhGroupNumbers;
    }
    get tunnel2Phase1EncryptionAlgorithms() {
        return this.getListAttribute('tunnel2_phase1_encryption_algorithms');
    }
    set tunnel2Phase1EncryptionAlgorithms(value) {
        this._tunnel2Phase1EncryptionAlgorithms = value;
    }
    resetTunnel2Phase1EncryptionAlgorithms() {
        this._tunnel2Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1EncryptionAlgorithmsInput() {
        return this._tunnel2Phase1EncryptionAlgorithms;
    }
    get tunnel2Phase1IntegrityAlgorithms() {
        return this.getListAttribute('tunnel2_phase1_integrity_algorithms');
    }
    set tunnel2Phase1IntegrityAlgorithms(value) {
        this._tunnel2Phase1IntegrityAlgorithms = value;
    }
    resetTunnel2Phase1IntegrityAlgorithms() {
        this._tunnel2Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1IntegrityAlgorithmsInput() {
        return this._tunnel2Phase1IntegrityAlgorithms;
    }
    get tunnel2Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
    }
    set tunnel2Phase1LifetimeSeconds(value) {
        this._tunnel2Phase1LifetimeSeconds = value;
    }
    resetTunnel2Phase1LifetimeSeconds() {
        this._tunnel2Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1LifetimeSecondsInput() {
        return this._tunnel2Phase1LifetimeSeconds;
    }
    get tunnel2Phase2DhGroupNumbers() {
        return this.interpolationForAttribute('tunnel2_phase2_dh_group_numbers');
    }
    set tunnel2Phase2DhGroupNumbers(value) {
        this._tunnel2Phase2DhGroupNumbers = value;
    }
    resetTunnel2Phase2DhGroupNumbers() {
        this._tunnel2Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2DhGroupNumbersInput() {
        return this._tunnel2Phase2DhGroupNumbers;
    }
    get tunnel2Phase2EncryptionAlgorithms() {
        return this.getListAttribute('tunnel2_phase2_encryption_algorithms');
    }
    set tunnel2Phase2EncryptionAlgorithms(value) {
        this._tunnel2Phase2EncryptionAlgorithms = value;
    }
    resetTunnel2Phase2EncryptionAlgorithms() {
        this._tunnel2Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2EncryptionAlgorithmsInput() {
        return this._tunnel2Phase2EncryptionAlgorithms;
    }
    get tunnel2Phase2IntegrityAlgorithms() {
        return this.getListAttribute('tunnel2_phase2_integrity_algorithms');
    }
    set tunnel2Phase2IntegrityAlgorithms(value) {
        this._tunnel2Phase2IntegrityAlgorithms = value;
    }
    resetTunnel2Phase2IntegrityAlgorithms() {
        this._tunnel2Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2IntegrityAlgorithmsInput() {
        return this._tunnel2Phase2IntegrityAlgorithms;
    }
    get tunnel2Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
    }
    set tunnel2Phase2LifetimeSeconds(value) {
        this._tunnel2Phase2LifetimeSeconds = value;
    }
    resetTunnel2Phase2LifetimeSeconds() {
        this._tunnel2Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2LifetimeSecondsInput() {
        return this._tunnel2Phase2LifetimeSeconds;
    }
    get tunnel2PresharedKey() {
        return this.getStringAttribute('tunnel2_preshared_key');
    }
    set tunnel2PresharedKey(value) {
        this._tunnel2PresharedKey = value;
    }
    resetTunnel2PresharedKey() {
        this._tunnel2PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2PresharedKeyInput() {
        return this._tunnel2PresharedKey;
    }
    get tunnel2RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
    }
    set tunnel2RekeyFuzzPercentage(value) {
        this._tunnel2RekeyFuzzPercentage = value;
    }
    resetTunnel2RekeyFuzzPercentage() {
        this._tunnel2RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2RekeyFuzzPercentageInput() {
        return this._tunnel2RekeyFuzzPercentage;
    }
    get tunnel2RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
    }
    set tunnel2RekeyMarginTimeSeconds(value) {
        this._tunnel2RekeyMarginTimeSeconds = value;
    }
    resetTunnel2RekeyMarginTimeSeconds() {
        this._tunnel2RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2RekeyMarginTimeSecondsInput() {
        return this._tunnel2RekeyMarginTimeSeconds;
    }
    get tunnel2ReplayWindowSize() {
        return this.getNumberAttribute('tunnel2_replay_window_size');
    }
    set tunnel2ReplayWindowSize(value) {
        this._tunnel2ReplayWindowSize = value;
    }
    resetTunnel2ReplayWindowSize() {
        this._tunnel2ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2ReplayWindowSizeInput() {
        return this._tunnel2ReplayWindowSize;
    }
    get tunnel2StartupAction() {
        return this.getStringAttribute('tunnel2_startup_action');
    }
    set tunnel2StartupAction(value) {
        this._tunnel2StartupAction = value;
    }
    resetTunnel2StartupAction() {
        this._tunnel2StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2StartupActionInput() {
        return this._tunnel2StartupAction;
    }
    // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
    get tunnel2VgwInsideAddress() {
        return this.getStringAttribute('tunnel2_vgw_inside_address');
    }
    get tunnelInsideIpVersion() {
        return this.getStringAttribute('tunnel_inside_ip_version');
    }
    set tunnelInsideIpVersion(value) {
        this._tunnelInsideIpVersion = value;
    }
    resetTunnelInsideIpVersion() {
        this._tunnelInsideIpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelInsideIpVersionInput() {
        return this._tunnelInsideIpVersion;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // vgw_telemetry - computed: true, optional: false, required: false
    vgwTelemetry(index) {
        return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
    }
    get vpnGatewayId() {
        return this.getStringAttribute('vpn_gateway_id');
    }
    set vpnGatewayId(value) {
        this._vpnGatewayId = value;
    }
    resetVpnGatewayId() {
        this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpnGatewayIdInput() {
        return this._vpnGatewayId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
            enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
            local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
            local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
            remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
            remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
            static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
            tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
            tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1IkeVersions),
            tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
            tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
            tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase1DhGroupNumbers),
            tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1EncryptionAlgorithms),
            tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1IntegrityAlgorithms),
            tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
            tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase2DhGroupNumbers),
            tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2EncryptionAlgorithms),
            tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2IntegrityAlgorithms),
            tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
            tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
            tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
            tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
            tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
            tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
            tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
            tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
            tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2IkeVersions),
            tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
            tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
            tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase1DhGroupNumbers),
            tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1EncryptionAlgorithms),
            tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1IntegrityAlgorithms),
            tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
            tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase2DhGroupNumbers),
            tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2EncryptionAlgorithms),
            tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2IntegrityAlgorithms),
            tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
            tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
            tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
            tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
            tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
            tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
            tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
            type: cdktf.stringToTerraform(this._type),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        };
    }
}
exports.VpnConnection = VpnConnection;
_c = JSII_RTTI_SYMBOL_1;
VpnConnection[_c] = { fqn: "hashicorp_aws.VpnConnection", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBuLWNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2cG4tY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQTBNL0IsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWhFLDRFQUE0RTtJQUM1RSxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOztBQWZILGtEQWdCQzs7O0FBQ0QsTUFBYSx5QkFBMEIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRFLDBFQUEwRTtJQUMxRSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFB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S0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzRSx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzlFLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDNUQsQ0FBQztJQUNKLENBQUM7O0FBaitCSCxzQ0FrK0JDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL3Zwbl9jb25uZWN0aW9uLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBWcG5Db25uZWN0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21lckdhdGV3YXlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlQWNjZWxlcmF0aW9uPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9jYWxJcHY0TmV0d29ya0NpZHI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvY2FsSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlbW90ZUlwdjROZXR3b3JrQ2lkcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZW1vdGVJcHY2TmV0d29ya0NpZHI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGljUm91dGVzT25seT86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJhbnNpdEdhdGV3YXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMURwZFRpbWVvdXRBY3Rpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxSWtlVmVyc2lvbnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFJbnNpZGVDaWRyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFJbnNpZGVJcHY2Q2lkcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycz86IG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycz86IG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUHJlc2hhcmVkS2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMVJlcGxheVdpbmRvd1NpemU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwxU3RhcnR1cEFjdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwySWtlVmVyc2lvbnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJJbnNpZGVDaWRyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJJbnNpZGVJcHY2Q2lkcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycz86IG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycz86IG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUHJlc2hhcmVkS2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUmVrZXlGdXp6UGVyY2VudGFnZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVubmVsMlJlcGxheVdpbmRvd1NpemU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWwyU3RhcnR1cEFjdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0dW5uZWxJbnNpZGVJcFZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwbkdhdGV3YXlJZD86IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBWcG5Db25uZWN0aW9uUm91dGVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVzdGluYXRpb25fY2lkcl9ibG9jayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQ2lkckJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzdGluYXRpb25fY2lkcl9ibG9jaycpO1xuICB9XG5cbiAgLy8gc291cmNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlJyk7XG4gIH1cblxuICAvLyBzdGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGUnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFZwbkNvbm5lY3Rpb25WZ3dUZWxlbWV0cnkgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2NlcHRlZF9yb3V0ZV9jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2VwdGVkUm91dGVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2FjY2VwdGVkX3JvdXRlX2NvdW50Jyk7XG4gIH1cblxuICAvLyBsYXN0X3N0YXR1c19jaGFuZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0U3RhdHVzQ2hhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9zdGF0dXNfY2hhbmdlJyk7XG4gIH1cblxuICAvLyBvdXRzaWRlX2lwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdXRzaWRlSXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3V0c2lkZV9pcF9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHN0YXR1c19tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19tZXNzYWdlJyk7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgVnBuQ29ubmVjdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFZwbkNvbm5lY3Rpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c192cG5fY29ubmVjdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jdXN0b21lckdhdGV3YXlJZCA9IGNvbmZpZy5jdXN0b21lckdhdGV3YXlJZDtcbiAgICB0aGlzLl9lbmFibGVBY2NlbGVyYXRpb24gPSBjb25maWcuZW5hYmxlQWNjZWxlcmF0aW9uO1xuICAgIHRoaXMuX2xvY2FsSXB2NE5ldHdvcmtDaWRyID0gY29uZmlnLmxvY2FsSXB2NE5ldHdvcmtDaWRyO1xuICAgIHRoaXMuX2xvY2FsSXB2Nk5ldHdvcmtDaWRyID0gY29uZmlnLmxvY2FsSXB2Nk5ldHdvcmtDaWRyO1xuICAgIHRoaXMuX3JlbW90ZUlwdjROZXR3b3JrQ2lkciA9IGNvbmZpZy5yZW1vdGVJcHY0TmV0d29ya0NpZHI7XG4gICAgdGhpcy5fcmVtb3RlSXB2Nk5ldHdvcmtDaWRyID0gY29uZmlnLnJlbW90ZUlwdjZOZXR3b3JrQ2lkcjtcbiAgICB0aGlzLl9zdGF0aWNSb3V0ZXNPbmx5ID0gY29uZmlnLnN0YXRpY1JvdXRlc09ubHk7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90cmFuc2l0R2F0ZXdheUlkID0gY29uZmlnLnRyYW5zaXRHYXRld2F5SWQ7XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb24gPSBjb25maWcudHVubmVsMURwZFRpbWVvdXRBY3Rpb247XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzID0gY29uZmlnLnR1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcztcbiAgICB0aGlzLl90dW5uZWwxSWtlVmVyc2lvbnMgPSBjb25maWcudHVubmVsMUlrZVZlcnNpb25zO1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyID0gY29uZmlnLnR1bm5lbDFJbnNpZGVDaWRyO1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVJcHY2Q2lkciA9IGNvbmZpZy50dW5uZWwxSW5zaWRlSXB2NkNpZHI7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzID0gY29uZmlnLnR1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycztcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zID0gY29uZmlnLnR1bm5lbDFQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHMgPSBjb25maWcudHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcztcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMgPSBjb25maWcudHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzO1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcyA9IGNvbmZpZy50dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDFQcmVzaGFyZWRLZXkgPSBjb25maWcudHVubmVsMVByZXNoYXJlZEtleTtcbiAgICB0aGlzLl90dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZSA9IGNvbmZpZy50dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZTtcbiAgICB0aGlzLl90dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyA9IGNvbmZpZy50dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcztcbiAgICB0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZSA9IGNvbmZpZy50dW5uZWwxUmVwbGF5V2luZG93U2l6ZTtcbiAgICB0aGlzLl90dW5uZWwxU3RhcnR1cEFjdGlvbiA9IGNvbmZpZy50dW5uZWwxU3RhcnR1cEFjdGlvbjtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dEFjdGlvbiA9IGNvbmZpZy50dW5uZWwyRHBkVGltZW91dEFjdGlvbjtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHMgPSBjb25maWcudHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucyA9IGNvbmZpZy50dW5uZWwySWtlVmVyc2lvbnM7XG4gICAgdGhpcy5fdHVubmVsMkluc2lkZUNpZHIgPSBjb25maWcudHVubmVsMkluc2lkZUNpZHI7XG4gICAgdGhpcy5fdHVubmVsMkluc2lkZUlwdjZDaWRyID0gY29uZmlnLnR1bm5lbDJJbnNpZGVJcHY2Q2lkcjtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMgPSBjb25maWcudHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzO1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSBjb25maWcudHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcyA9IGNvbmZpZy50dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycyA9IGNvbmZpZy50dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnM7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gY29uZmlnLnR1bm5lbDJQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyA9IGNvbmZpZy50dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcztcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gY29uZmlnLnR1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHM7XG4gICAgdGhpcy5fdHVubmVsMlByZXNoYXJlZEtleSA9IGNvbmZpZy50dW5uZWwyUHJlc2hhcmVkS2V5O1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlID0gY29uZmlnLnR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlO1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gY29uZmlnLnR1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzO1xuICAgIHRoaXMuX3R1bm5lbDJSZXBsYXlXaW5kb3dTaXplID0gY29uZmlnLnR1bm5lbDJSZXBsYXlXaW5kb3dTaXplO1xuICAgIHRoaXMuX3R1bm5lbDJTdGFydHVwQWN0aW9uID0gY29uZmlnLnR1bm5lbDJTdGFydHVwQWN0aW9uO1xuICAgIHRoaXMuX3R1bm5lbEluc2lkZUlwVmVyc2lvbiA9IGNvbmZpZy50dW5uZWxJbnNpZGVJcFZlcnNpb247XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX3ZwbkdhdGV3YXlJZCA9IGNvbmZpZy52cG5HYXRld2F5SWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfZ2F0ZXdheV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJHYXRld2F5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbWVyX2dhdGV3YXlfY29uZmlndXJhdGlvbicpO1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfZ2F0ZXdheV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jdXN0b21lckdhdGV3YXlJZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGN1c3RvbWVyR2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfZ2F0ZXdheV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tZXJHYXRld2F5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbWVyR2F0ZXdheUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbWVyR2F0ZXdheUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbWVyR2F0ZXdheUlkXG4gIH1cblxuICAvLyBlbmFibGVfYWNjZWxlcmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQWNjZWxlcmF0aW9uPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBlbmFibGVBY2NlbGVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2FjY2VsZXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlQWNjZWxlcmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZW5hYmxlQWNjZWxlcmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQWNjZWxlcmF0aW9uKCkge1xuICAgIHRoaXMuX2VuYWJsZUFjY2VsZXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQWNjZWxlcmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUFjY2VsZXJhdGlvblxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxvY2FsX2lwdjRfbmV0d29ya19jaWRyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9jYWxJcHY0TmV0d29ya0NpZHI/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbG9jYWxJcHY0TmV0d29ya0NpZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2NhbF9pcHY0X25ldHdvcmtfY2lkcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9jYWxJcHY0TmV0d29ya0NpZHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvY2FsSXB2NE5ldHdvcmtDaWRyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9jYWxJcHY0TmV0d29ya0NpZHIoKSB7XG4gICAgdGhpcy5fbG9jYWxJcHY0TmV0d29ya0NpZHIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvY2FsSXB2NE5ldHdvcmtDaWRySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsSXB2NE5ldHdvcmtDaWRyXG4gIH1cblxuICAvLyBsb2NhbF9pcHY2X25ldHdvcmtfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2FsSXB2Nk5ldHdvcmtDaWRyPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGxvY2FsSXB2Nk5ldHdvcmtDaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9jYWxfaXB2Nl9uZXR3b3JrX2NpZHInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvY2FsSXB2Nk5ldHdvcmtDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2NhbElwdjZOZXR3b3JrQ2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvY2FsSXB2Nk5ldHdvcmtDaWRyKCkge1xuICAgIHRoaXMuX2xvY2FsSXB2Nk5ldHdvcmtDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2NhbElwdjZOZXR3b3JrQ2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbElwdjZOZXR3b3JrQ2lkclxuICB9XG5cbiAgLy8gcmVtb3RlX2lwdjRfbmV0d29ya19jaWRyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVtb3RlSXB2NE5ldHdvcmtDaWRyPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHJlbW90ZUlwdjROZXR3b3JrQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlbW90ZV9pcHY0X25ldHdvcmtfY2lkcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVtb3RlSXB2NE5ldHdvcmtDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZW1vdGVJcHY0TmV0d29ya0NpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZW1vdGVJcHY0TmV0d29ya0NpZHIoKSB7XG4gICAgdGhpcy5fcmVtb3RlSXB2NE5ldHdvcmtDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZW1vdGVJcHY0TmV0d29ya0NpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3RlSXB2NE5ldHdvcmtDaWRyXG4gIH1cblxuICAvLyByZW1vdGVfaXB2Nl9uZXR3b3JrX2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZW1vdGVJcHY2TmV0d29ya0NpZHI/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVtb3RlSXB2Nk5ldHdvcmtDaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVtb3RlX2lwdjZfbmV0d29ya19jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCByZW1vdGVJcHY2TmV0d29ya0NpZHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbW90ZUlwdjZOZXR3b3JrQ2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlbW90ZUlwdjZOZXR3b3JrQ2lkcigpIHtcbiAgICB0aGlzLl9yZW1vdGVJcHY2TmV0d29ya0NpZHIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlbW90ZUlwdjZOZXR3b3JrQ2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdGVJcHY2TmV0d29ya0NpZHJcbiAgfVxuXG4gIC8vIHJvdXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgcm91dGVzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFZwbkNvbm5lY3Rpb25Sb3V0ZXModGhpcywgJ3JvdXRlcycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHN0YXRpY19yb3V0ZXNfb25seSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRpY1JvdXRlc09ubHk/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHN0YXRpY1JvdXRlc09ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3RhdGljX3JvdXRlc19vbmx5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0aWNSb3V0ZXNPbmx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhdGljUm91dGVzT25seSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRpY1JvdXRlc09ubHkoKSB7XG4gICAgdGhpcy5fc3RhdGljUm91dGVzT25seSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGljUm91dGVzT25seUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0aWNSb3V0ZXNPbmx5XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTsgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbFxuICB9XG5cbiAgLy8gdHJhbnNpdF9nYXRld2F5X2F0dGFjaG1lbnRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUF0dGFjaG1lbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RyYW5zaXRfZ2F0ZXdheV9hdHRhY2htZW50X2lkJyk7XG4gIH1cblxuICAvLyB0cmFuc2l0X2dhdGV3YXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJhbnNpdEdhdGV3YXlJZD86IHN0cmluZztcbiAgcHVibGljIGdldCB0cmFuc2l0R2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2l0R2F0ZXdheUlkKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdHJhbnNpdEdhdGV3YXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRyYW5zaXRHYXRld2F5SWQoKSB7XG4gICAgdGhpcy5fdHJhbnNpdEdhdGV3YXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEdhdGV3YXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2l0R2F0ZXdheUlkXG4gIH1cblxuICAvLyB0dW5uZWwxX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gdHVubmVsMV9iZ3BfYXNuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHVubmVsMUJncEFzbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfYmdwX2FzbicpO1xuICB9XG5cbiAgLy8gdHVubmVsMV9iZ3BfaG9sZHRpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxQmdwSG9sZHRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX2JncF9ob2xkdGltZScpO1xuICB9XG5cbiAgLy8gdHVubmVsMV9jZ3dfaW5zaWRlX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwxQ2d3SW5zaWRlQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfY2d3X2luc2lkZV9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwxX2RwZF90aW1lb3V0X2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxRHBkVGltZW91dEFjdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCB0dW5uZWwxRHBkVGltZW91dEFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfZHBkX3RpbWVvdXRfYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxRHBkVGltZW91dEFjdGlvbih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0QWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMURwZFRpbWVvdXRBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFEcGRUaW1lb3V0QWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0QWN0aW9uXG4gIH1cblxuICAvLyB0dW5uZWwxX2RwZF90aW1lb3V0X3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDFfZHBkX3RpbWVvdXRfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMURwZFRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMURwZFRpbWVvdXRTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kc1xuICB9XG5cbiAgLy8gdHVubmVsMV9pa2VfdmVyc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMUlrZVZlcnNpb25zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgdHVubmVsMUlrZVZlcnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfaWtlX3ZlcnNpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxSWtlVmVyc2lvbnModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3R1bm5lbDFJa2VWZXJzaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFJa2VWZXJzaW9ucygpIHtcbiAgICB0aGlzLl90dW5uZWwxSWtlVmVyc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFJa2VWZXJzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxSWtlVmVyc2lvbnNcbiAgfVxuXG4gIC8vIHR1bm5lbDFfaW5zaWRlX2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxSW5zaWRlQ2lkcj86IHN0cmluZztcbiAgcHVibGljIGdldCB0dW5uZWwxSW5zaWRlQ2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfaW5zaWRlX2NpZHInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFJbnNpZGVDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwxSW5zaWRlQ2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFJbnNpZGVDaWRyKCkge1xuICAgIHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxSW5zaWRlQ2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxSW5zaWRlQ2lkclxuICB9XG5cbiAgLy8gdHVubmVsMV9pbnNpZGVfaXB2Nl9jaWRyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMUluc2lkZUlwdjZDaWRyPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDFJbnNpZGVJcHY2Q2lkcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfaW5zaWRlX2lwdjZfY2lkcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMUluc2lkZUlwdjZDaWRyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwxSW5zaWRlSXB2NkNpZHIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxSW5zaWRlSXB2NkNpZHIoKSB7XG4gICAgdGhpcy5fdHVubmVsMUluc2lkZUlwdjZDaWRyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxSW5zaWRlSXB2NkNpZHJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMUluc2lkZUlwdjZDaWRyXG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycz86IG51bWJlcltdO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzKHZhbHVlOiBudW1iZXJbXSApIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxRGhHcm91cE51bWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMURoR3JvdXBOdW1iZXJzXG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9lbmNyeXB0aW9uX2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMUVuY3J5cHRpb25BbGdvcml0aG1zXG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UxX2ludGVncml0eV9hbGdvcml0aG1zJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXNcbiAgfVxuXG4gIC8vIHR1bm5lbDFfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcz86IG51bWJlcjtcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMV9waGFzZTFfbGlmZXRpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUGhhc2UxTGlmZXRpbWVTZWNvbmRzKCkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTFMaWZldGltZVNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kc1xuICB9XG5cbiAgLy8gdHVubmVsMV9waGFzZTJfZGhfZ3JvdXBfbnVtYmVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnM/OiBudW1iZXJbXTtcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndHVubmVsMV9waGFzZTJfZGhfZ3JvdXBfbnVtYmVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycyh2YWx1ZTogbnVtYmVyW10gKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzKCkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkRoR3JvdXBOdW1iZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTJEaEdyb3VwTnVtYmVyc1xuICB9XG5cbiAgLy8gdHVubmVsMV9waGFzZTJfZW5jcnlwdGlvbl9hbGdvcml0aG1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMl9lbmNyeXB0aW9uX2FsZ29yaXRobXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKCkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTJFbmNyeXB0aW9uQWxnb3JpdGhtc1xuICB9XG5cbiAgLy8gdHVubmVsMV9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0dW5uZWwxX3BoYXNlMl9pbnRlZ3JpdHlfYWxnb3JpdGhtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3R1bm5lbDFQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMVBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zXG4gIH1cblxuICAvLyB0dW5uZWwxX3BoYXNlMl9saWZldGltZV9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDFfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVBoYXNlMkxpZmV0aW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwxUGhhc2UyTGlmZXRpbWVTZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHNcbiAgfVxuXG4gIC8vIHR1bm5lbDFfcHJlc2hhcmVkX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFQcmVzaGFyZWRLZXk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHVubmVsMVByZXNoYXJlZEtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDFfcHJlc2hhcmVkX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMVByZXNoYXJlZEtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHVubmVsMVByZXNoYXJlZEtleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDFQcmVzaGFyZWRLZXkoKSB7XG4gICAgdGhpcy5fdHVubmVsMVByZXNoYXJlZEtleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVByZXNoYXJlZEtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwxUHJlc2hhcmVkS2V5XG4gIH1cblxuICAvLyB0dW5uZWwxX3Jla2V5X2Z1enpfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZT86IG51bWJlcjtcbiAgcHVibGljIGdldCB0dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDFfcmVrZXlfZnV6el9wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UoKSB7XG4gICAgdGhpcy5fdHVubmVsMVJla2V5RnV6elBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFSZWtleUZ1enpQZXJjZW50YWdlXG4gIH1cblxuICAvLyB0dW5uZWwxX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwxX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW5uZWwxUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVJla2V5TWFyZ2luVGltZVNlY29uZHNcbiAgfVxuXG4gIC8vIHR1bm5lbDFfcmVwbGF5X3dpbmRvd19zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDFSZXBsYXlXaW5kb3dTaXplPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMV9yZXBsYXlfd2luZG93X3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDFSZXBsYXlXaW5kb3dTaXplKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fdHVubmVsMVJlcGxheVdpbmRvd1NpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwxUmVwbGF5V2luZG93U2l6ZSgpIHtcbiAgICB0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMVJlcGxheVdpbmRvd1NpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMVJlcGxheVdpbmRvd1NpemVcbiAgfVxuXG4gIC8vIHR1bm5lbDFfc3RhcnR1cF9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMVN0YXJ0dXBBY3Rpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHVubmVsMVN0YXJ0dXBBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWwxX3N0YXJ0dXBfYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwxU3RhcnR1cEFjdGlvbih2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMVN0YXJ0dXBBY3Rpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsMVN0YXJ0dXBBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDFTdGFydHVwQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDFTdGFydHVwQWN0aW9uXG4gIH1cblxuICAvLyB0dW5uZWwxX3Znd19pbnNpZGVfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bm5lbDFWZ3dJbnNpZGVBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMV92Z3dfaW5zaWRlX2FkZHJlc3MnKTtcbiAgfVxuXG4gIC8vIHR1bm5lbDJfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bm5lbDJBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyB0dW5uZWwyX2JncF9hc24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0dW5uZWwyQmdwQXNuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9iZ3BfYXNuJyk7XG4gIH1cblxuICAvLyB0dW5uZWwyX2JncF9ob2xkdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bm5lbDJCZ3BIb2xkdGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDJfYmdwX2hvbGR0aW1lJyk7XG4gIH1cblxuICAvLyB0dW5uZWwyX2Nnd19pbnNpZGVfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR1bm5lbDJDZ3dJbnNpZGVBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9jZ3dfaW5zaWRlX2FkZHJlc3MnKTtcbiAgfVxuXG4gIC8vIHR1bm5lbDJfZHBkX3RpbWVvdXRfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJEcGRUaW1lb3V0QWN0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDJEcGRUaW1lb3V0QWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9kcGRfdGltZW91dF9hY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJEcGRUaW1lb3V0QWN0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyRHBkVGltZW91dEFjdGlvbigpIHtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMkRwZFRpbWVvdXRBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMkRwZFRpbWVvdXRBY3Rpb25cbiAgfVxuXG4gIC8vIHR1bm5lbDJfZHBkX3RpbWVvdXRfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyRHBkVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyRHBkVGltZW91dFNlY29uZHModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyRHBkVGltZW91dFNlY29uZHMoKSB7XG4gICAgdGhpcy5fdHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyRHBkVGltZW91dFNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMkRwZFRpbWVvdXRTZWNvbmRzXG4gIH1cblxuICAvLyB0dW5uZWwyX2lrZV92ZXJzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwySWtlVmVyc2lvbnM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCB0dW5uZWwySWtlVmVyc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHVubmVsMl9pa2VfdmVyc2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJJa2VWZXJzaW9ucyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fdHVubmVsMklrZVZlcnNpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMklrZVZlcnNpb25zKCkge1xuICAgIHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMklrZVZlcnNpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9uc1xuICB9XG5cbiAgLy8gdHVubmVsMl9pbnNpZGVfY2lkciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJJbnNpZGVDaWRyPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDJJbnNpZGVDaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9pbnNpZGVfY2lkcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMkluc2lkZUNpZHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDJJbnNpZGVDaWRyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMkluc2lkZUNpZHIoKSB7XG4gICAgdGhpcy5fdHVubmVsMkluc2lkZUNpZHIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJJbnNpZGVDaWRySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJJbnNpZGVDaWRyXG4gIH1cblxuICAvLyB0dW5uZWwyX2luc2lkZV9pcHY2X2NpZHIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwySW5zaWRlSXB2NkNpZHI/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdHVubmVsMkluc2lkZUlwdjZDaWRyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9pbnNpZGVfaXB2Nl9jaWRyJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwySW5zaWRlSXB2NkNpZHIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R1bm5lbDJJbnNpZGVJcHY2Q2lkciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJJbnNpZGVJcHY2Q2lkcigpIHtcbiAgICB0aGlzLl90dW5uZWwySW5zaWRlSXB2NkNpZHIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJJbnNpZGVJcHY2Q2lkcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwySW5zaWRlSXB2NkNpZHJcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcGhhc2UxX2RoX2dyb3VwX251bWJlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzPzogbnVtYmVyW107XG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMURoR3JvdXBOdW1iZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3R1bm5lbDJfcGhhc2UxX2RoX2dyb3VwX251bWJlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnModmFsdWU6IG51bWJlcltdICkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVycygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTFEaEdyb3VwTnVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnNcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcGhhc2UxX2VuY3J5cHRpb25fYWxnb3JpdGhtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHVubmVsMl9waGFzZTFfZW5jcnlwdGlvbl9hbGdvcml0aG1zJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXModmFsdWU6IHN0cmluZ1tdICkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXNcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcGhhc2UxX2ludGVncml0eV9hbGdvcml0aG1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMUludGVncml0eUFsZ29yaXRobXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHVubmVsMl9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKCkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UxSW50ZWdyaXR5QWxnb3JpdGhtc1xuICB9XG5cbiAgLy8gdHVubmVsMl9waGFzZTFfbGlmZXRpbWVfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMV9saWZldGltZV9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMUxpZmV0aW1lU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUGhhc2UxTGlmZXRpbWVTZWNvbmRzXG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycz86IG51bWJlcltdO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTJEaEdyb3VwTnVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0dW5uZWwyX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzKHZhbHVlOiBudW1iZXJbXSApIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyRGhHcm91cE51bWJlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzXG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMl9lbmNyeXB0aW9uX2FsZ29yaXRobXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDJfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMoKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zXG4gIH1cblxuICAvLyB0dW5uZWwyX3BoYXNlMl9pbnRlZ3JpdHlfYWxnb3JpdGhtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3R1bm5lbDJfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyh2YWx1ZTogc3RyaW5nW10gKSB7XG4gICAgdGhpcy5fdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcygpIHtcbiAgICB0aGlzLl90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkludGVncml0eUFsZ29yaXRobXNcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcz86IG51bWJlcjtcbiAgcHVibGljIGdldCB0dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9waGFzZTJfbGlmZXRpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kcyh2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzKCkge1xuICAgIHRoaXMuX3R1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR1bm5lbDJQaGFzZTJMaWZldGltZVNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlBoYXNlMkxpZmV0aW1lU2Vjb25kc1xuICB9XG5cbiAgLy8gdHVubmVsMl9wcmVzaGFyZWRfa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlByZXNoYXJlZEtleT86IHN0cmluZztcbiAgcHVibGljIGdldCB0dW5uZWwyUHJlc2hhcmVkS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHVubmVsMl9wcmVzaGFyZWRfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW5uZWwyUHJlc2hhcmVkS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWwyUHJlc2hhcmVkS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHVubmVsMlByZXNoYXJlZEtleSgpIHtcbiAgICB0aGlzLl90dW5uZWwyUHJlc2hhcmVkS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUHJlc2hhcmVkS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R1bm5lbDJQcmVzaGFyZWRLZXlcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcmVrZXlfZnV6el9wZXJjZW50YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndHVubmVsMl9yZWtleV9mdXp6X3BlcmNlbnRhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJSZWtleUZ1enpQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyUmVrZXlGdXp6UGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl90dW5uZWwyUmVrZXlGdXp6UGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2VcbiAgfVxuXG4gIC8vIHR1bm5lbDJfcmVrZXlfbWFyZ2luX3RpbWVfc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcz86IG51bWJlcjtcbiAgcHVibGljIGdldCB0dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bm5lbDJfcmVrZXlfbWFyZ2luX3RpbWVfc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlJla2V5TWFyZ2luVGltZVNlY29uZHModmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzKCkge1xuICAgIHRoaXMuX3R1bm5lbDJSZWtleU1hcmdpblRpbWVTZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kc1xuICB9XG5cbiAgLy8gdHVubmVsMl9yZXBsYXlfd2luZG93X3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsMlJlcGxheVdpbmRvd1NpemU/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgdHVubmVsMlJlcGxheVdpbmRvd1NpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0dW5uZWwyX3JlcGxheV93aW5kb3dfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsMlJlcGxheVdpbmRvd1NpemUodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl90dW5uZWwyUmVwbGF5V2luZG93U2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR1bm5lbDJSZXBsYXlXaW5kb3dTaXplKCkge1xuICAgIHRoaXMuX3R1bm5lbDJSZXBsYXlXaW5kb3dTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWwyUmVwbGF5V2luZG93U2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90dW5uZWwyUmVwbGF5V2luZG93U2l6ZVxuICB9XG5cbiAgLy8gdHVubmVsMl9zdGFydHVwX2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90dW5uZWwyU3RhcnR1cEFjdGlvbj86IHN0cmluZztcbiAgcHVibGljIGdldCB0dW5uZWwyU3RhcnR1cEFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbDJfc3RhcnR1cF9hY3Rpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR1bm5lbDJTdGFydHVwQWN0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWwyU3RhcnR1cEFjdGlvbigpIHtcbiAgICB0aGlzLl90dW5uZWwyU3RhcnR1cEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVubmVsMlN0YXJ0dXBBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb25cbiAgfVxuXG4gIC8vIHR1bm5lbDJfdmd3X2luc2lkZV9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHVubmVsMlZnd0luc2lkZUFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0dW5uZWwyX3Znd19pbnNpZGVfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gdHVubmVsX2luc2lkZV9pcF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHVubmVsSW5zaWRlSXBWZXJzaW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHR1bm5lbEluc2lkZUlwVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R1bm5lbF9pbnNpZGVfaXBfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHVubmVsSW5zaWRlSXBWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90dW5uZWxJbnNpZGVJcFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW5uZWxJbnNpZGVJcFZlcnNpb24oKSB7XG4gICAgdGhpcy5fdHVubmVsSW5zaWRlSXBWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0dW5uZWxJbnNpZGVJcFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVubmVsSW5zaWRlSXBWZXJzaW9uXG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVcbiAgfVxuXG4gIC8vIHZnd190ZWxlbWV0cnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHZnd1RlbGVtZXRyeShpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBWcG5Db25uZWN0aW9uVmd3VGVsZW1ldHJ5KHRoaXMsICd2Z3dfdGVsZW1ldHJ5JywgaW5kZXgpO1xuICB9XG5cbiAgLy8gdnBuX2dhdGV3YXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBuR2F0ZXdheUlkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHZwbkdhdGV3YXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Zwbl9nYXRld2F5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cG5HYXRld2F5SWQodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl92cG5HYXRld2F5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcG5HYXRld2F5SWQoKSB7XG4gICAgdGhpcy5fdnBuR2F0ZXdheUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cG5HYXRld2F5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBuR2F0ZXdheUlkXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1c3RvbWVyX2dhdGV3YXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbWVyR2F0ZXdheUlkKSxcbiAgICAgIGVuYWJsZV9hY2NlbGVyYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmFibGVBY2NlbGVyYXRpb24pLFxuICAgICAgbG9jYWxfaXB2NF9uZXR3b3JrX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xvY2FsSXB2NE5ldHdvcmtDaWRyKSxcbiAgICAgIGxvY2FsX2lwdjZfbmV0d29ya19jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sb2NhbElwdjZOZXR3b3JrQ2lkciksXG4gICAgICByZW1vdGVfaXB2NF9uZXR3b3JrX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlbW90ZUlwdjROZXR3b3JrQ2lkciksXG4gICAgICByZW1vdGVfaXB2Nl9uZXR3b3JrX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlbW90ZUlwdjZOZXR3b3JrQ2lkciksXG4gICAgICBzdGF0aWNfcm91dGVzX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdGF0aWNSb3V0ZXNPbmx5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdHJhbnNpdF9nYXRld2F5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90cmFuc2l0R2F0ZXdheUlkKSxcbiAgICAgIHR1bm5lbDFfZHBkX3RpbWVvdXRfYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxRHBkVGltZW91dEFjdGlvbiksXG4gICAgICB0dW5uZWwxX2RwZF90aW1lb3V0X3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFEcGRUaW1lb3V0U2Vjb25kcyksXG4gICAgICB0dW5uZWwxX2lrZV92ZXJzaW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMUlrZVZlcnNpb25zKSxcbiAgICAgIHR1bm5lbDFfaW5zaWRlX2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFJbnNpZGVDaWRyKSxcbiAgICAgIHR1bm5lbDFfaW5zaWRlX2lwdjZfY2lkcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMUluc2lkZUlwdjZDaWRyKSxcbiAgICAgIHR1bm5lbDFfcGhhc2UxX2RoX2dyb3VwX251bWJlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDFQaGFzZTFEaEdyb3VwTnVtYmVycyksXG4gICAgICB0dW5uZWwxX3BoYXNlMV9lbmNyeXB0aW9uX2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDFQaGFzZTFFbmNyeXB0aW9uQWxnb3JpdGhtcyksXG4gICAgICB0dW5uZWwxX3BoYXNlMV9pbnRlZ3JpdHlfYWxnb3JpdGhtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMVBoYXNlMUludGVncml0eUFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMV9waGFzZTFfbGlmZXRpbWVfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMVBoYXNlMUxpZmV0aW1lU2Vjb25kcyksXG4gICAgICB0dW5uZWwxX3BoYXNlMl9kaF9ncm91cF9udW1iZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwxUGhhc2UyRGhHcm91cE51bWJlcnMpLFxuICAgICAgdHVubmVsMV9waGFzZTJfZW5jcnlwdGlvbl9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwxUGhhc2UyRW5jcnlwdGlvbkFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMV9waGFzZTJfaW50ZWdyaXR5X2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDFQaGFzZTJJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDFfcGhhc2UyX2xpZmV0aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFQaGFzZTJMaWZldGltZVNlY29uZHMpLFxuICAgICAgdHVubmVsMV9wcmVzaGFyZWRfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxUHJlc2hhcmVkS2V5KSxcbiAgICAgIHR1bm5lbDFfcmVrZXlfZnV6el9wZXJjZW50YWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxUmVrZXlGdXp6UGVyY2VudGFnZSksXG4gICAgICB0dW5uZWwxX3Jla2V5X21hcmdpbl90aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDFSZWtleU1hcmdpblRpbWVTZWNvbmRzKSxcbiAgICAgIHR1bm5lbDFfcmVwbGF5X3dpbmRvd19zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxUmVwbGF5V2luZG93U2l6ZSksXG4gICAgICB0dW5uZWwxX3N0YXJ0dXBfYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwxU3RhcnR1cEFjdGlvbiksXG4gICAgICB0dW5uZWwyX2RwZF90aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMkRwZFRpbWVvdXRBY3Rpb24pLFxuICAgICAgdHVubmVsMl9kcGRfdGltZW91dF9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyRHBkVGltZW91dFNlY29uZHMpLFxuICAgICAgdHVubmVsMl9pa2VfdmVyc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDJJa2VWZXJzaW9ucyksXG4gICAgICB0dW5uZWwyX2luc2lkZV9jaWRyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwySW5zaWRlQ2lkciksXG4gICAgICB0dW5uZWwyX2luc2lkZV9pcHY2X2NpZHI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJJbnNpZGVJcHY2Q2lkciksXG4gICAgICB0dW5uZWwyX3BoYXNlMV9kaF9ncm91cF9udW1iZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwyUGhhc2UxRGhHcm91cE51bWJlcnMpLFxuICAgICAgdHVubmVsMl9waGFzZTFfZW5jcnlwdGlvbl9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwyUGhhc2UxRW5jcnlwdGlvbkFsZ29yaXRobXMpLFxuICAgICAgdHVubmVsMl9waGFzZTFfaW50ZWdyaXR5X2FsZ29yaXRobXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3R1bm5lbDJQaGFzZTFJbnRlZ3JpdHlBbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UxX2xpZmV0aW1lX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3R1bm5lbDJQaGFzZTFMaWZldGltZVNlY29uZHMpLFxuICAgICAgdHVubmVsMl9waGFzZTJfZGhfZ3JvdXBfbnVtYmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMlBoYXNlMkRoR3JvdXBOdW1iZXJzKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UyX2VuY3J5cHRpb25fYWxnb3JpdGhtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdHVubmVsMlBoYXNlMkVuY3J5cHRpb25BbGdvcml0aG1zKSxcbiAgICAgIHR1bm5lbDJfcGhhc2UyX2ludGVncml0eV9hbGdvcml0aG1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl90dW5uZWwyUGhhc2UySW50ZWdyaXR5QWxnb3JpdGhtcyksXG4gICAgICB0dW5uZWwyX3BoYXNlMl9saWZldGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyUGhhc2UyTGlmZXRpbWVTZWNvbmRzKSxcbiAgICAgIHR1bm5lbDJfcHJlc2hhcmVkX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlByZXNoYXJlZEtleSksXG4gICAgICB0dW5uZWwyX3Jla2V5X2Z1enpfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlJla2V5RnV6elBlcmNlbnRhZ2UpLFxuICAgICAgdHVubmVsMl9yZWtleV9tYXJnaW5fdGltZV9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWwyUmVrZXlNYXJnaW5UaW1lU2Vjb25kcyksXG4gICAgICB0dW5uZWwyX3JlcGxheV93aW5kb3dfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlJlcGxheVdpbmRvd1NpemUpLFxuICAgICAgdHVubmVsMl9zdGFydHVwX2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHVubmVsMlN0YXJ0dXBBY3Rpb24pLFxuICAgICAgdHVubmVsX2luc2lkZV9pcF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90dW5uZWxJbnNpZGVJcFZlcnNpb24pLFxuICAgICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHlwZSksXG4gICAgICB2cG5fZ2F0ZXdheV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdnBuR2F0ZXdheUlkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=