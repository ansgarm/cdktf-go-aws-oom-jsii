"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksInstance = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function opsworksInstanceEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        iops: cdktf.numberToTerraform(struct.iops),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
function opsworksInstanceEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
    };
}
function opsworksInstanceRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        iops: cdktf.numberToTerraform(struct.iops),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
function opsworksInstanceTimeoutsToTerraform(struct) {
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
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance}.
 */
class OpsworksInstance extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._agentVersion = config.agentVersion;
        this._amiId = config.amiId;
        this._architecture = config.architecture;
        this._autoScalingType = config.autoScalingType;
        this._availabilityZone = config.availabilityZone;
        this._createdAt = config.createdAt;
        this._deleteEbs = config.deleteEbs;
        this._deleteEip = config.deleteEip;
        this._ebsOptimized = config.ebsOptimized;
        this._ecsClusterArn = config.ecsClusterArn;
        this._elasticIp = config.elasticIp;
        this._hostname = config.hostname;
        this._infrastructureClass = config.infrastructureClass;
        this._installUpdatesOnBoot = config.installUpdatesOnBoot;
        this._instanceProfileArn = config.instanceProfileArn;
        this._instanceType = config.instanceType;
        this._lastServiceErrorId = config.lastServiceErrorId;
        this._layerIds = config.layerIds;
        this._os = config.os;
        this._platform = config.platform;
        this._privateDns = config.privateDns;
        this._privateIp = config.privateIp;
        this._publicDns = config.publicDns;
        this._publicIp = config.publicIp;
        this._registeredBy = config.registeredBy;
        this._reportedAgentVersion = config.reportedAgentVersion;
        this._reportedOsFamily = config.reportedOsFamily;
        this._reportedOsName = config.reportedOsName;
        this._reportedOsVersion = config.reportedOsVersion;
        this._rootDeviceType = config.rootDeviceType;
        this._rootDeviceVolumeId = config.rootDeviceVolumeId;
        this._securityGroupIds = config.securityGroupIds;
        this._sshHostDsaKeyFingerprint = config.sshHostDsaKeyFingerprint;
        this._sshHostRsaKeyFingerprint = config.sshHostRsaKeyFingerprint;
        this._sshKeyName = config.sshKeyName;
        this._stackId = config.stackId;
        this._state = config.state;
        this._status = config.status;
        this._subnetId = config.subnetId;
        this._tenancy = config.tenancy;
        this._virtualizationType = config.virtualizationType;
        this._ebsBlockDevice = config.ebsBlockDevice;
        this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        this._rootBlockDevice = config.rootBlockDevice;
        this._timeouts = config.timeouts;
    }
    get agentVersion() {
        return this.getStringAttribute('agent_version');
    }
    set agentVersion(value) {
        this._agentVersion = value;
    }
    resetAgentVersion() {
        this._agentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get agentVersionInput() {
        return this._agentVersion;
    }
    get amiId() {
        return this.getStringAttribute('ami_id');
    }
    set amiId(value) {
        this._amiId = value;
    }
    resetAmiId() {
        this._amiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get amiIdInput() {
        return this._amiId;
    }
    get architecture() {
        return this.getStringAttribute('architecture');
    }
    set architecture(value) {
        this._architecture = value;
    }
    resetArchitecture() {
        this._architecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get architectureInput() {
        return this._architecture;
    }
    get autoScalingType() {
        return this.getStringAttribute('auto_scaling_type');
    }
    set autoScalingType(value) {
        this._autoScalingType = value;
    }
    resetAutoScalingType() {
        this._autoScalingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoScalingTypeInput() {
        return this._autoScalingType;
    }
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    set availabilityZone(value) {
        this._availabilityZone = value;
    }
    resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneInput() {
        return this._availabilityZone;
    }
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdAtInput() {
        return this._createdAt;
    }
    get deleteEbs() {
        return this.getBooleanAttribute('delete_ebs');
    }
    set deleteEbs(value) {
        this._deleteEbs = value;
    }
    resetDeleteEbs() {
        this._deleteEbs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteEbsInput() {
        return this._deleteEbs;
    }
    get deleteEip() {
        return this.getBooleanAttribute('delete_eip');
    }
    set deleteEip(value) {
        this._deleteEip = value;
    }
    resetDeleteEip() {
        this._deleteEip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteEipInput() {
        return this._deleteEip;
    }
    get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    set ebsOptimized(value) {
        this._ebsOptimized = value;
    }
    resetEbsOptimized() {
        this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsOptimizedInput() {
        return this._ebsOptimized;
    }
    // ec2_instance_id - computed: true, optional: false, required: false
    get ec2InstanceId() {
        return this.getStringAttribute('ec2_instance_id');
    }
    get ecsClusterArn() {
        return this.getStringAttribute('ecs_cluster_arn');
    }
    set ecsClusterArn(value) {
        this._ecsClusterArn = value;
    }
    resetEcsClusterArn() {
        this._ecsClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ecsClusterArnInput() {
        return this._ecsClusterArn;
    }
    get elasticIp() {
        return this.getStringAttribute('elastic_ip');
    }
    set elasticIp(value) {
        this._elasticIp = value;
    }
    resetElasticIp() {
        this._elasticIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticIpInput() {
        return this._elasticIp;
    }
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get infrastructureClass() {
        return this.getStringAttribute('infrastructure_class');
    }
    set infrastructureClass(value) {
        this._infrastructureClass = value;
    }
    resetInfrastructureClass() {
        this._infrastructureClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get infrastructureClassInput() {
        return this._infrastructureClass;
    }
    get installUpdatesOnBoot() {
        return this.getBooleanAttribute('install_updates_on_boot');
    }
    set installUpdatesOnBoot(value) {
        this._installUpdatesOnBoot = value;
    }
    resetInstallUpdatesOnBoot() {
        this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get installUpdatesOnBootInput() {
        return this._installUpdatesOnBoot;
    }
    get instanceProfileArn() {
        return this.getStringAttribute('instance_profile_arn');
    }
    set instanceProfileArn(value) {
        this._instanceProfileArn = value;
    }
    resetInstanceProfileArn() {
        this._instanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceProfileArnInput() {
        return this._instanceProfileArn;
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    get lastServiceErrorId() {
        return this.getStringAttribute('last_service_error_id');
    }
    set lastServiceErrorId(value) {
        this._lastServiceErrorId = value;
    }
    resetLastServiceErrorId() {
        this._lastServiceErrorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lastServiceErrorIdInput() {
        return this._lastServiceErrorId;
    }
    get layerIds() {
        return this.getListAttribute('layer_ids');
    }
    set layerIds(value) {
        this._layerIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get layerIdsInput() {
        return this._layerIds;
    }
    get os() {
        return this.getStringAttribute('os');
    }
    set os(value) {
        this._os = value;
    }
    resetOs() {
        this._os = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get osInput() {
        return this._os;
    }
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    get privateDns() {
        return this.getStringAttribute('private_dns');
    }
    set privateDns(value) {
        this._privateDns = value;
    }
    resetPrivateDns() {
        this._privateDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateDnsInput() {
        return this._privateDns;
    }
    get privateIp() {
        return this.getStringAttribute('private_ip');
    }
    set privateIp(value) {
        this._privateIp = value;
    }
    resetPrivateIp() {
        this._privateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateIpInput() {
        return this._privateIp;
    }
    get publicDns() {
        return this.getStringAttribute('public_dns');
    }
    set publicDns(value) {
        this._publicDns = value;
    }
    resetPublicDns() {
        this._publicDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicDnsInput() {
        return this._publicDns;
    }
    get publicIp() {
        return this.getStringAttribute('public_ip');
    }
    set publicIp(value) {
        this._publicIp = value;
    }
    resetPublicIp() {
        this._publicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicIpInput() {
        return this._publicIp;
    }
    get registeredBy() {
        return this.getStringAttribute('registered_by');
    }
    set registeredBy(value) {
        this._registeredBy = value;
    }
    resetRegisteredBy() {
        this._registeredBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registeredByInput() {
        return this._registeredBy;
    }
    get reportedAgentVersion() {
        return this.getStringAttribute('reported_agent_version');
    }
    set reportedAgentVersion(value) {
        this._reportedAgentVersion = value;
    }
    resetReportedAgentVersion() {
        this._reportedAgentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reportedAgentVersionInput() {
        return this._reportedAgentVersion;
    }
    get reportedOsFamily() {
        return this.getStringAttribute('reported_os_family');
    }
    set reportedOsFamily(value) {
        this._reportedOsFamily = value;
    }
    resetReportedOsFamily() {
        this._reportedOsFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reportedOsFamilyInput() {
        return this._reportedOsFamily;
    }
    get reportedOsName() {
        return this.getStringAttribute('reported_os_name');
    }
    set reportedOsName(value) {
        this._reportedOsName = value;
    }
    resetReportedOsName() {
        this._reportedOsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reportedOsNameInput() {
        return this._reportedOsName;
    }
    get reportedOsVersion() {
        return this.getStringAttribute('reported_os_version');
    }
    set reportedOsVersion(value) {
        this._reportedOsVersion = value;
    }
    resetReportedOsVersion() {
        this._reportedOsVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reportedOsVersionInput() {
        return this._reportedOsVersion;
    }
    get rootDeviceType() {
        return this.getStringAttribute('root_device_type');
    }
    set rootDeviceType(value) {
        this._rootDeviceType = value;
    }
    resetRootDeviceType() {
        this._rootDeviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootDeviceTypeInput() {
        return this._rootDeviceType;
    }
    get rootDeviceVolumeId() {
        return this.getStringAttribute('root_device_volume_id');
    }
    set rootDeviceVolumeId(value) {
        this._rootDeviceVolumeId = value;
    }
    resetRootDeviceVolumeId() {
        this._rootDeviceVolumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootDeviceVolumeIdInput() {
        return this._rootDeviceVolumeId;
    }
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    get sshHostDsaKeyFingerprint() {
        return this.getStringAttribute('ssh_host_dsa_key_fingerprint');
    }
    set sshHostDsaKeyFingerprint(value) {
        this._sshHostDsaKeyFingerprint = value;
    }
    resetSshHostDsaKeyFingerprint() {
        this._sshHostDsaKeyFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshHostDsaKeyFingerprintInput() {
        return this._sshHostDsaKeyFingerprint;
    }
    get sshHostRsaKeyFingerprint() {
        return this.getStringAttribute('ssh_host_rsa_key_fingerprint');
    }
    set sshHostRsaKeyFingerprint(value) {
        this._sshHostRsaKeyFingerprint = value;
    }
    resetSshHostRsaKeyFingerprint() {
        this._sshHostRsaKeyFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshHostRsaKeyFingerprintInput() {
        return this._sshHostRsaKeyFingerprint;
    }
    get sshKeyName() {
        return this.getStringAttribute('ssh_key_name');
    }
    set sshKeyName(value) {
        this._sshKeyName = value;
    }
    resetSshKeyName() {
        this._sshKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshKeyNameInput() {
        return this._sshKeyName;
    }
    get stackId() {
        return this.getStringAttribute('stack_id');
    }
    set stackId(value) {
        this._stackId = value;
    }
    // Temporarily expose input value. Use with caution.
    get stackIdInput() {
        return this._stackId;
    }
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    set subnetId(value) {
        this._subnetId = value;
    }
    resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdInput() {
        return this._subnetId;
    }
    get tenancy() {
        return this.getStringAttribute('tenancy');
    }
    set tenancy(value) {
        this._tenancy = value;
    }
    resetTenancy() {
        this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tenancyInput() {
        return this._tenancy;
    }
    get virtualizationType() {
        return this.getStringAttribute('virtualization_type');
    }
    set virtualizationType(value) {
        this._virtualizationType = value;
    }
    resetVirtualizationType() {
        this._virtualizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get virtualizationTypeInput() {
        return this._virtualizationType;
    }
    get ebsBlockDevice() {
        return this.interpolationForAttribute('ebs_block_device');
    }
    set ebsBlockDevice(value) {
        this._ebsBlockDevice = value;
    }
    resetEbsBlockDevice() {
        this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsBlockDeviceInput() {
        return this._ebsBlockDevice;
    }
    get ephemeralBlockDevice() {
        return this.interpolationForAttribute('ephemeral_block_device');
    }
    set ephemeralBlockDevice(value) {
        this._ephemeralBlockDevice = value;
    }
    resetEphemeralBlockDevice() {
        this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ephemeralBlockDeviceInput() {
        return this._ephemeralBlockDevice;
    }
    get rootBlockDevice() {
        return this.interpolationForAttribute('root_block_device');
    }
    set rootBlockDevice(value) {
        this._rootBlockDevice = value;
    }
    resetRootBlockDevice() {
        this._rootBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootBlockDeviceInput() {
        return this._rootBlockDevice;
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
            agent_version: cdktf.stringToTerraform(this._agentVersion),
            ami_id: cdktf.stringToTerraform(this._amiId),
            architecture: cdktf.stringToTerraform(this._architecture),
            auto_scaling_type: cdktf.stringToTerraform(this._autoScalingType),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            created_at: cdktf.stringToTerraform(this._createdAt),
            delete_ebs: cdktf.booleanToTerraform(this._deleteEbs),
            delete_eip: cdktf.booleanToTerraform(this._deleteEip),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            ecs_cluster_arn: cdktf.stringToTerraform(this._ecsClusterArn),
            elastic_ip: cdktf.stringToTerraform(this._elasticIp),
            hostname: cdktf.stringToTerraform(this._hostname),
            infrastructure_class: cdktf.stringToTerraform(this._infrastructureClass),
            install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
            instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            last_service_error_id: cdktf.stringToTerraform(this._lastServiceErrorId),
            layer_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._layerIds),
            os: cdktf.stringToTerraform(this._os),
            platform: cdktf.stringToTerraform(this._platform),
            private_dns: cdktf.stringToTerraform(this._privateDns),
            private_ip: cdktf.stringToTerraform(this._privateIp),
            public_dns: cdktf.stringToTerraform(this._publicDns),
            public_ip: cdktf.stringToTerraform(this._publicIp),
            registered_by: cdktf.stringToTerraform(this._registeredBy),
            reported_agent_version: cdktf.stringToTerraform(this._reportedAgentVersion),
            reported_os_family: cdktf.stringToTerraform(this._reportedOsFamily),
            reported_os_name: cdktf.stringToTerraform(this._reportedOsName),
            reported_os_version: cdktf.stringToTerraform(this._reportedOsVersion),
            root_device_type: cdktf.stringToTerraform(this._rootDeviceType),
            root_device_volume_id: cdktf.stringToTerraform(this._rootDeviceVolumeId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            ssh_host_dsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostDsaKeyFingerprint),
            ssh_host_rsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostRsaKeyFingerprint),
            ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
            stack_id: cdktf.stringToTerraform(this._stackId),
            state: cdktf.stringToTerraform(this._state),
            status: cdktf.stringToTerraform(this._status),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tenancy: cdktf.stringToTerraform(this._tenancy),
            virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
            ebs_block_device: cdktf.listMapper(opsworksInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            ephemeral_block_device: cdktf.listMapper(opsworksInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            root_block_device: cdktf.listMapper(opsworksInstanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
            timeouts: opsworksInstanceTimeoutsToTerraform(this._timeouts),
        };
    }
}
exports.OpsworksInstance = OpsworksInstance;
_a = JSII_RTTI_SYMBOL_1;
OpsworksInstance[_a] = { fqn: "hashicorp_aws.OpsworksInstance", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Bzd29ya3MtaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcHN3b3Jrcy1pbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQTZOL0IsU0FBUyx5Q0FBeUMsQ0FBQyxNQUF1QztJQUN4RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMsK0NBQStDLENBQUMsTUFBNkM7SUFDcEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNELENBQUE7QUFDSCxDQUFDO0FBcUJELFNBQVMsMENBQTBDLENBQUMsTUFB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SyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9DLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdEUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDbkcsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUNySCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3RHLFFBQVEsRUFBRSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzlELENBQUM7SUFDSixDQUFDOztBQW4xQkgsNENBbzFCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9vcHN3b3Jrc19pbnN0YW5jZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NJbnN0YW5jZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWdlbnRWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFtaUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFyY2hpdGVjdHVyZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b1NjYWxpbmdUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlZEF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlRWJzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZUVpcD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNPcHRpbWl6ZWQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVjc0NsdXN0ZXJBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbGFzdGljSXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvc3RuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmZyYXN0cnVjdHVyZUNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YWxsVXBkYXRlc09uQm9vdD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlUHJvZmlsZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXN0U2VydmljZUVycm9ySWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF5ZXJJZHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGxhdGZvcm0/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaXZhdGVEbnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2YXRlSXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwdWJsaWNEbnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHVibGljSXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWdpc3RlcmVkQnk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRlZEFnZW50VmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRlZE9zRmFtaWx5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwb3J0ZWRPc05hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRlZE9zVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvb3REZXZpY2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvb3REZXZpY2VWb2x1bWVJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2hIb3N0UnNhS2V5RmluZ2VycHJpbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NoS2V5TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhY2tJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZW5hbmN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbGl6YXRpb25UeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VFYnNCbG9ja0RldmljZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcGhlbWVyYWxCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb290QmxvY2tEZXZpY2U/OiBPcHN3b3Jrc0luc3RhbmNlUm9vdEJsb2NrRGV2aWNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogT3Bzd29ya3NJbnN0YW5jZVRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZU9uVGVybWluYXRpb24/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbmFwc2hvdElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVUeXBlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBvcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHNuYXBzaG90X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNuYXBzaG90SWQpLFxuICAgIHZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgIHZvbHVtZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NJbnN0YW5jZUVwaGVtZXJhbEJsb2NrRGV2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZpcnR1YWxOYW1lOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZVRvVGVycmFmb3JtKHN0cnVjdD86IE9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICB2aXJ0dWFsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NJbnN0YW5jZVJvb3RCbG9ja0RldmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlT25UZXJtaW5hdGlvbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVUeXBlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBvcHN3b3Jrc0luc3RhbmNlUm9vdEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogT3Bzd29ya3NJbnN0YW5jZVJvb3RCbG9ja0RldmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgdm9sdW1lX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZSksXG4gICAgdm9sdW1lX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc0luc3RhbmNlVGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXBkYXRlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBvcHN3b3Jrc0luc3RhbmNlVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc0luc3RhbmNlVGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgZGVsZXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gICAgdXBkYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVwZGF0ZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBPcHN3b3Jrc0luc3RhbmNlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogT3Bzd29ya3NJbnN0YW5jZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX29wc3dvcmtzX2luc3RhbmNlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FnZW50VmVyc2lvbiA9IGNvbmZpZy5hZ2VudFZlcnNpb247XG4gICAgdGhpcy5fYW1pSWQgPSBjb25maWcuYW1pSWQ7XG4gICAgdGhpcy5fYXJjaGl0ZWN0dXJlID0gY29uZmlnLmFyY2hpdGVjdHVyZTtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ1R5cGUgPSBjb25maWcuYXV0b1NjYWxpbmdUeXBlO1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZTtcbiAgICB0aGlzLl9jcmVhdGVkQXQgPSBjb25maWcuY3JlYXRlZEF0O1xuICAgIHRoaXMuX2RlbGV0ZUVicyA9IGNvbmZpZy5kZWxldGVFYnM7XG4gICAgdGhpcy5fZGVsZXRlRWlwID0gY29uZmlnLmRlbGV0ZUVpcDtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSBjb25maWcuZWJzT3B0aW1pemVkO1xuICAgIHRoaXMuX2Vjc0NsdXN0ZXJBcm4gPSBjb25maWcuZWNzQ2x1c3RlckFybjtcbiAgICB0aGlzLl9lbGFzdGljSXAgPSBjb25maWcuZWxhc3RpY0lwO1xuICAgIHRoaXMuX2hvc3RuYW1lID0gY29uZmlnLmhvc3RuYW1lO1xuICAgIHRoaXMuX2luZnJhc3RydWN0dXJlQ2xhc3MgPSBjb25maWcuaW5mcmFzdHJ1Y3R1cmVDbGFzcztcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IGNvbmZpZy5pbnN0YWxsVXBkYXRlc09uQm9vdDtcbiAgICB0aGlzLl9pbnN0YW5jZVByb2ZpbGVBcm4gPSBjb25maWcuaW5zdGFuY2VQcm9maWxlQXJuO1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IGNvbmZpZy5pbnN0YW5jZVR5cGU7XG4gICAgdGhpcy5fbGFzdFNlcnZpY2VFcnJvcklkID0gY29uZmlnLmxhc3RTZXJ2aWNlRXJyb3JJZDtcbiAgICB0aGlzLl9sYXllcklkcyA9IGNvbmZpZy5sYXllcklkcztcbiAgICB0aGlzLl9vcyA9IGNvbmZpZy5vcztcbiAgICB0aGlzLl9wbGF0Zm9ybSA9IGNvbmZpZy5wbGF0Zm9ybTtcbiAgICB0aGlzLl9wcml2YXRlRG5zID0gY29uZmlnLnByaXZhdGVEbnM7XG4gICAgdGhpcy5fcHJpdmF0ZUlwID0gY29uZmlnLnByaXZhdGVJcDtcbiAgICB0aGlzLl9wdWJsaWNEbnMgPSBjb25maWcucHVibGljRG5zO1xuICAgIHRoaXMuX3B1YmxpY0lwID0gY29uZmlnLnB1YmxpY0lwO1xuICAgIHRoaXMuX3JlZ2lzdGVyZWRCeSA9IGNvbmZpZy5yZWdpc3RlcmVkQnk7XG4gICAgdGhpcy5fcmVwb3J0ZWRBZ2VudFZlcnNpb24gPSBjb25maWcucmVwb3J0ZWRBZ2VudFZlcnNpb247XG4gICAgdGhpcy5fcmVwb3J0ZWRPc0ZhbWlseSA9IGNvbmZpZy5yZXBvcnRlZE9zRmFtaWx5O1xuICAgIHRoaXMuX3JlcG9ydGVkT3NOYW1lID0gY29uZmlnLnJlcG9ydGVkT3NOYW1lO1xuICAgIHRoaXMuX3JlcG9ydGVkT3NWZXJzaW9uID0gY29uZmlnLnJlcG9ydGVkT3NWZXJzaW9uO1xuICAgIHRoaXMuX3Jvb3REZXZpY2VUeXBlID0gY29uZmlnLnJvb3REZXZpY2VUeXBlO1xuICAgIHRoaXMuX3Jvb3REZXZpY2VWb2x1bWVJZCA9IGNvbmZpZy5yb290RGV2aWNlVm9sdW1lSWQ7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy5zZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX3NzaEhvc3REc2FLZXlGaW5nZXJwcmludCA9IGNvbmZpZy5zc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQ7XG4gICAgdGhpcy5fc3NoSG9zdFJzYUtleUZpbmdlcnByaW50ID0gY29uZmlnLnNzaEhvc3RSc2FLZXlGaW5nZXJwcmludDtcbiAgICB0aGlzLl9zc2hLZXlOYW1lID0gY29uZmlnLnNzaEtleU5hbWU7XG4gICAgdGhpcy5fc3RhY2tJZCA9IGNvbmZpZy5zdGFja0lkO1xuICAgIHRoaXMuX3N0YXRlID0gY29uZmlnLnN0YXRlO1xuICAgIHRoaXMuX3N0YXR1cyA9IGNvbmZpZy5zdGF0dXM7XG4gICAgdGhpcy5fc3VibmV0SWQgPSBjb25maWcuc3VibmV0SWQ7XG4gICAgdGhpcy5fdGVuYW5jeSA9IGNvbmZpZy50ZW5hbmN5O1xuICAgIHRoaXMuX3ZpcnR1YWxpemF0aW9uVHlwZSA9IGNvbmZpZy52aXJ0dWFsaXphdGlvblR5cGU7XG4gICAgdGhpcy5fZWJzQmxvY2tEZXZpY2UgPSBjb25maWcuZWJzQmxvY2tEZXZpY2U7XG4gICAgdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2UgPSBjb25maWcuZXBoZW1lcmFsQmxvY2tEZXZpY2U7XG4gICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlID0gY29uZmlnLnJvb3RCbG9ja0RldmljZTtcbiAgICB0aGlzLl90aW1lb3V0cyA9IGNvbmZpZy50aW1lb3V0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWdlbnRfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZ2VudFZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYWdlbnRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWdlbnRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWdlbnRWZXJzaW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fYWdlbnRWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWdlbnRWZXJzaW9uKCkge1xuICAgIHRoaXMuX2FnZW50VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWdlbnRWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZW50VmVyc2lvblxuICB9XG5cbiAgLy8gYW1pX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYW1pSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgYW1pSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbWlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFtaUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbWlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFtaUlkKCkge1xuICAgIHRoaXMuX2FtaUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbWlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbWlJZFxuICB9XG5cbiAgLy8gYXJjaGl0ZWN0dXJlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FyY2hpdGVjdHVyZT86IHN0cmluZztcbiAgcHVibGljIGdldCBhcmNoaXRlY3R1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcmNoaXRlY3R1cmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFyY2hpdGVjdHVyZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FyY2hpdGVjdHVyZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFyY2hpdGVjdHVyZSgpIHtcbiAgICB0aGlzLl9hcmNoaXRlY3R1cmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFyY2hpdGVjdHVyZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcmNoaXRlY3R1cmVcbiAgfVxuXG4gIC8vIGF1dG9fc2NhbGluZ190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9TY2FsaW5nVHlwZT86IHN0cmluZztcbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRvX3NjYWxpbmdfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1NjYWxpbmdUeXBlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b1NjYWxpbmdUeXBlKCkge1xuICAgIHRoaXMuX2F1dG9TY2FsaW5nVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1NjYWxpbmdUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9TY2FsaW5nVHlwZVxuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2YWlsYWJpbGl0eVpvbmUoKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFiaWxpdHlab25lXG4gIH1cblxuICAvLyBjcmVhdGVkX2F0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlZEF0Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZWRfYXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZWRBdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlZEF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlZEF0KCkge1xuICAgIHRoaXMuX2NyZWF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlZEF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWRBdFxuICB9XG5cbiAgLy8gZGVsZXRlX2VicyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGVFYnM/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGRlbGV0ZUVicygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkZWxldGVfZWJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGVFYnModmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fZGVsZXRlRWJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlRWJzKCkge1xuICAgIHRoaXMuX2RlbGV0ZUVicyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlRWJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZUVic1xuICB9XG5cbiAgLy8gZGVsZXRlX2VpcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGVFaXA/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGRlbGV0ZUVpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkZWxldGVfZWlwJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGVFaXAodmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fZGVsZXRlRWlwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlRWlwKCkge1xuICAgIHRoaXMuX2RlbGV0ZUVpcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlRWlwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZUVpcFxuICB9XG5cbiAgLy8gZWJzX29wdGltaXplZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNPcHRpbWl6ZWQ/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlYnNfb3B0aW1pemVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlYnNPcHRpbWl6ZWQodmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fZWJzT3B0aW1pemVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWJzT3B0aW1pemVkKCkge1xuICAgIHRoaXMuX2Vic09wdGltaXplZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWJzT3B0aW1pemVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic09wdGltaXplZFxuICB9XG5cbiAgLy8gZWMyX2luc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWMySW5zdGFuY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VjMl9pbnN0YW5jZV9pZCcpO1xuICB9XG5cbiAgLy8gZWNzX2NsdXN0ZXJfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWNzQ2x1c3RlckFybj86IHN0cmluZztcbiAgcHVibGljIGdldCBlY3NDbHVzdGVyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWNzX2NsdXN0ZXJfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBlY3NDbHVzdGVyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lY3NDbHVzdGVyQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWNzQ2x1c3RlckFybigpIHtcbiAgICB0aGlzLl9lY3NDbHVzdGVyQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlY3NDbHVzdGVyQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vjc0NsdXN0ZXJBcm5cbiAgfVxuXG4gIC8vIGVsYXN0aWNfaXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbGFzdGljSXA/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZWxhc3RpY0lwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWxhc3RpY19pcCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZWxhc3RpY0lwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbGFzdGljSXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbGFzdGljSXAoKSB7XG4gICAgdGhpcy5fZWxhc3RpY0lwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbGFzdGljSXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxhc3RpY0lwXG4gIH1cblxuICAvLyBob3N0bmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3RuYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGhvc3RuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdG5hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3RuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0bmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhvc3RuYW1lKCkge1xuICAgIHRoaXMuX2hvc3RuYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0bmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0bmFtZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluZnJhc3RydWN0dXJlX2NsYXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5mcmFzdHJ1Y3R1cmVDbGFzcz86IHN0cmluZztcbiAgcHVibGljIGdldCBpbmZyYXN0cnVjdHVyZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5mcmFzdHJ1Y3R1cmVfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluZnJhc3RydWN0dXJlQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luZnJhc3RydWN0dXJlQ2xhc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmZyYXN0cnVjdHVyZUNsYXNzKCkge1xuICAgIHRoaXMuX2luZnJhc3RydWN0dXJlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluZnJhc3RydWN0dXJlQ2xhc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mcmFzdHJ1Y3R1cmVDbGFzc1xuICB9XG5cbiAgLy8gaW5zdGFsbF91cGRhdGVzX29uX2Jvb3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFsbFVwZGF0ZXNPbkJvb3Q/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IGluc3RhbGxVcGRhdGVzT25Cb290KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luc3RhbGxfdXBkYXRlc19vbl9ib290Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YWxsVXBkYXRlc09uQm9vdCh2YWx1ZTogYm9vbGVhbiApIHtcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbGxVcGRhdGVzT25Cb290KCkge1xuICAgIHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdFxuICB9XG5cbiAgLy8gaW5zdGFuY2VfcHJvZmlsZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVByb2ZpbGVBcm4/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VQcm9maWxlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfcHJvZmlsZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlUHJvZmlsZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VQcm9maWxlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VQcm9maWxlQXJuKCkge1xuICAgIHRoaXMuX2luc3RhbmNlUHJvZmlsZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VQcm9maWxlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlUHJvZmlsZUFyblxuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZVxuICB9XG5cbiAgLy8gbGFzdF9zZXJ2aWNlX2Vycm9yX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFzdFNlcnZpY2VFcnJvcklkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGxhc3RTZXJ2aWNlRXJyb3JJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3Rfc2VydmljZV9lcnJvcl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFzdFNlcnZpY2VFcnJvcklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXN0U2VydmljZUVycm9ySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXN0U2VydmljZUVycm9ySWQoKSB7XG4gICAgdGhpcy5fbGFzdFNlcnZpY2VFcnJvcklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXN0U2VydmljZUVycm9ySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFNlcnZpY2VFcnJvcklkXG4gIH1cblxuICAvLyBsYXllcl9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGF5ZXJJZHM6IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IGxheWVySWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2xheWVyX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF5ZXJJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbGF5ZXJJZHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF5ZXJJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5ZXJJZHNcbiAgfVxuXG4gIC8vIG9zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3MoKSB7XG4gICAgdGhpcy5fb3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29zXG4gIH1cblxuICAvLyBwbGF0Zm9ybSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYXRmb3JtPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHBsYXRmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxhdGZvcm0nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYXRmb3JtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYXRmb3JtKCkge1xuICAgIHRoaXMuX3BsYXRmb3JtID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGF0Zm9ybUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybVxuICB9XG5cbiAgLy8gcHJpdmF0ZV9kbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcml2YXRlRG5zPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHByaXZhdGVEbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcml2YXRlX2RucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpdmF0ZURucyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpdmF0ZURucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByaXZhdGVEbnMoKSB7XG4gICAgdGhpcy5fcHJpdmF0ZURucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZURuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcml2YXRlRG5zXG4gIH1cblxuICAvLyBwcml2YXRlX2lwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJpdmF0ZUlwPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHByaXZhdGVJcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfaXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaXZhdGVJcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpdmF0ZUlwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpdmF0ZUlwKCkge1xuICAgIHRoaXMuX3ByaXZhdGVJcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUlwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVJcFxuICB9XG5cbiAgLy8gcHVibGljX2RucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3B1YmxpY0Rucz86IHN0cmluZztcbiAgcHVibGljIGdldCBwdWJsaWNEbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwdWJsaWNfZG5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaWNEbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3B1YmxpY0RucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1YmxpY0RucygpIHtcbiAgICB0aGlzLl9wdWJsaWNEbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB1YmxpY0Ruc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaWNEbnNcbiAgfVxuXG4gIC8vIHB1YmxpY19pcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3B1YmxpY0lwPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHB1YmxpY0lwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHVibGljX2lwJyk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaWNJcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHVibGljSXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQdWJsaWNJcCgpIHtcbiAgICB0aGlzLl9wdWJsaWNJcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHVibGljSXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVibGljSXBcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyZWRfYnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWdpc3RlcmVkQnk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVnaXN0ZXJlZEJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaXN0ZXJlZF9ieScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnaXN0ZXJlZEJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWdpc3RlcmVkQnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWdpc3RlcmVkQnkoKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJlZEJ5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWdpc3RlcmVkQnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJlZEJ5XG4gIH1cblxuICAvLyByZXBvcnRlZF9hZ2VudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwb3J0ZWRBZ2VudFZlcnNpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRBZ2VudFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvcnRlZF9hZ2VudF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvcnRlZEFnZW50VmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwb3J0ZWRBZ2VudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBvcnRlZEFnZW50VmVyc2lvbigpIHtcbiAgICB0aGlzLl9yZXBvcnRlZEFnZW50VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRBZ2VudFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3J0ZWRBZ2VudFZlcnNpb25cbiAgfVxuXG4gIC8vIHJlcG9ydGVkX29zX2ZhbWlseSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcG9ydGVkT3NGYW1pbHk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRPc0ZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9ydGVkX29zX2ZhbWlseScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3J0ZWRPc0ZhbWlseSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwb3J0ZWRPc0ZhbWlseSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcG9ydGVkT3NGYW1pbHkoKSB7XG4gICAgdGhpcy5fcmVwb3J0ZWRPc0ZhbWlseSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRPc0ZhbWlseUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBvcnRlZE9zRmFtaWx5XG4gIH1cblxuICAvLyByZXBvcnRlZF9vc19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwb3J0ZWRPc05hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRPc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvcnRlZF9vc19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvcnRlZE9zTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwb3J0ZWRPc05hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBvcnRlZE9zTmFtZSgpIHtcbiAgICB0aGlzLl9yZXBvcnRlZE9zTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRPc05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3J0ZWRPc05hbWVcbiAgfVxuXG4gIC8vIHJlcG9ydGVkX29zX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBvcnRlZE9zVmVyc2lvbj86IHN0cmluZztcbiAgcHVibGljIGdldCByZXBvcnRlZE9zVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9ydGVkX29zX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcG9ydGVkT3NWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvcnRlZE9zVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcG9ydGVkT3NWZXJzaW9uKCkge1xuICAgIHRoaXMuX3JlcG9ydGVkT3NWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBvcnRlZE9zVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBvcnRlZE9zVmVyc2lvblxuICB9XG5cbiAgLy8gcm9vdF9kZXZpY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jvb3REZXZpY2VUeXBlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHJvb3REZXZpY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9vdF9kZXZpY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9vdERldmljZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jvb3REZXZpY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9vdERldmljZVR5cGUoKSB7XG4gICAgdGhpcy5fcm9vdERldmljZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvb3REZXZpY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3REZXZpY2VUeXBlXG4gIH1cblxuICAvLyByb290X2RldmljZV92b2x1bWVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb290RGV2aWNlVm9sdW1lSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcm9vdERldmljZVZvbHVtZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9vdF9kZXZpY2Vfdm9sdW1lX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCByb290RGV2aWNlVm9sdW1lSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jvb3REZXZpY2VWb2x1bWVJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvb3REZXZpY2VWb2x1bWVJZCgpIHtcbiAgICB0aGlzLl9yb290RGV2aWNlVm9sdW1lSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvb3REZXZpY2VWb2x1bWVJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290RGV2aWNlVm9sdW1lSWRcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTtcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHNcbiAgfVxuXG4gIC8vIHNzaF9ob3N0X2RzYV9rZXlfZmluZ2VycHJpbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3NoSG9zdERzYUtleUZpbmdlcnByaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3NoX2hvc3RfZHNhX2tleV9maW5nZXJwcmludCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3NoSG9zdERzYUtleUZpbmdlcnByaW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQoKSB7XG4gICAgdGhpcy5fc3NoSG9zdERzYUtleUZpbmdlcnByaW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzc2hIb3N0RHNhS2V5RmluZ2VycHJpbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3NoSG9zdERzYUtleUZpbmdlcnByaW50XG4gIH1cblxuICAvLyBzc2hfaG9zdF9yc2Ffa2V5X2ZpbmdlcnByaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NoSG9zdFJzYUtleUZpbmdlcnByaW50Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHNzaEhvc3RSc2FLZXlGaW5nZXJwcmludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NzaF9ob3N0X3JzYV9rZXlfZmluZ2VycHJpbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNzaEhvc3RSc2FLZXlGaW5nZXJwcmludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NoSG9zdFJzYUtleUZpbmdlcnByaW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NoSG9zdFJzYUtleUZpbmdlcnByaW50KCkge1xuICAgIHRoaXMuX3NzaEhvc3RSc2FLZXlGaW5nZXJwcmludCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NoSG9zdFJzYUtleUZpbmdlcnByaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzaEhvc3RSc2FLZXlGaW5nZXJwcmludFxuICB9XG5cbiAgLy8gc3NoX2tleV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NoS2V5TmFtZT86IHN0cmluZztcbiAgcHVibGljIGdldCBzc2hLZXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3NoX2tleV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2hLZXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zc2hLZXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NoS2V5TmFtZSgpIHtcbiAgICB0aGlzLl9zc2hLZXlOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzc2hLZXlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzaEtleU5hbWVcbiAgfVxuXG4gIC8vIHN0YWNrX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YWNrSWQ6IHN0cmluZztcbiAgcHVibGljIGdldCBzdGFja0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhY2tfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YWNrSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YWNrSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhY2tJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFja0lkXG4gIH1cblxuICAvLyBzdGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0ZT86IHN0cmluZztcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0ZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlXG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0dXM/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXR1cygpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXNcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldElkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHN1Ym5ldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VibmV0X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJuZXRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VibmV0SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJuZXRJZCgpIHtcbiAgICB0aGlzLl9zdWJuZXRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0SWRcbiAgfVxuXG4gIC8vIHRlbmFuY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZW5hbmN5Pzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHRlbmFuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0ZW5hbmN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZW5hbmN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZW5hbmN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVuYW5jeSgpIHtcbiAgICB0aGlzLl90ZW5hbmN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZW5hbmN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbmFuY3lcbiAgfVxuXG4gIC8vIHZpcnR1YWxpemF0aW9uX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92aXJ0dWFsaXphdGlvblR5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgdmlydHVhbGl6YXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlydHVhbGl6YXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlydHVhbGl6YXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aXJ0dWFsaXphdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWaXJ0dWFsaXphdGlvblR5cGUoKSB7XG4gICAgdGhpcy5fdmlydHVhbGl6YXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aXJ0dWFsaXphdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbGl6YXRpb25UeXBlXG4gIH1cblxuICAvLyBlYnNfYmxvY2tfZGV2aWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vic0Jsb2NrRGV2aWNlPzogT3Bzd29ya3NJbnN0YW5jZUVic0Jsb2NrRGV2aWNlW107XG4gIHB1YmxpYyBnZXQgZWJzQmxvY2tEZXZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWJzX2Jsb2NrX2RldmljZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic0Jsb2NrRGV2aWNlKHZhbHVlOiBPcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2VbXSApIHtcbiAgICB0aGlzLl9lYnNCbG9ja0RldmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic0Jsb2NrRGV2aWNlKCkge1xuICAgIHRoaXMuX2Vic0Jsb2NrRGV2aWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYnNCbG9ja0RldmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNCbG9ja0RldmljZVxuICB9XG5cbiAgLy8gZXBoZW1lcmFsX2Jsb2NrX2RldmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lcGhlbWVyYWxCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZVtdO1xuICBwdWJsaWMgZ2V0IGVwaGVtZXJhbEJsb2NrRGV2aWNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VwaGVtZXJhbF9ibG9ja19kZXZpY2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlcGhlbWVyYWxCbG9ja0RldmljZSh2YWx1ZTogT3Bzd29ya3NJbnN0YW5jZUVwaGVtZXJhbEJsb2NrRGV2aWNlW10gKSB7XG4gICAgdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFcGhlbWVyYWxCbG9ja0RldmljZSgpIHtcbiAgICB0aGlzLl9lcGhlbWVyYWxCbG9ja0RldmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXBoZW1lcmFsQmxvY2tEZXZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2VcbiAgfVxuXG4gIC8vIHJvb3RfYmxvY2tfZGV2aWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jvb3RCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VSb290QmxvY2tEZXZpY2VbXTtcbiAgcHVibGljIGdldCByb290QmxvY2tEZXZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncm9vdF9ibG9ja19kZXZpY2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByb290QmxvY2tEZXZpY2UodmFsdWU6IE9wc3dvcmtzSW5zdGFuY2VSb290QmxvY2tEZXZpY2VbXSApIHtcbiAgICB0aGlzLl9yb290QmxvY2tEZXZpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb290QmxvY2tEZXZpY2UoKSB7XG4gICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290QmxvY2tEZXZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdEJsb2NrRGV2aWNlXG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cz86IE9wc3dvcmtzSW5zdGFuY2VUaW1lb3V0cztcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0aW1lb3V0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRzKHZhbHVlOiBPcHN3b3Jrc0luc3RhbmNlVGltZW91dHMgKSB7XG4gICAgdGhpcy5fdGltZW91dHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWdlbnRfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWdlbnRWZXJzaW9uKSxcbiAgICAgIGFtaV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYW1pSWQpLFxuICAgICAgYXJjaGl0ZWN0dXJlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcmNoaXRlY3R1cmUpLFxuICAgICAgYXV0b19zY2FsaW5nX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dG9TY2FsaW5nVHlwZSksXG4gICAgICBhdmFpbGFiaWxpdHlfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgICBjcmVhdGVkX2F0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jcmVhdGVkQXQpLFxuICAgICAgZGVsZXRlX2ViczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2RlbGV0ZUVicyksXG4gICAgICBkZWxldGVfZWlwOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZGVsZXRlRWlwKSxcbiAgICAgIGVic19vcHRpbWl6ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lYnNPcHRpbWl6ZWQpLFxuICAgICAgZWNzX2NsdXN0ZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lY3NDbHVzdGVyQXJuKSxcbiAgICAgIGVsYXN0aWNfaXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VsYXN0aWNJcCksXG4gICAgICBob3N0bmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faG9zdG5hbWUpLFxuICAgICAgaW5mcmFzdHJ1Y3R1cmVfY2xhc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luZnJhc3RydWN0dXJlQ2xhc3MpLFxuICAgICAgaW5zdGFsbF91cGRhdGVzX29uX2Jvb3Q6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCksXG4gICAgICBpbnN0YW5jZV9wcm9maWxlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VQcm9maWxlQXJuKSxcbiAgICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlVHlwZSksXG4gICAgICBsYXN0X3NlcnZpY2VfZXJyb3JfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xhc3RTZXJ2aWNlRXJyb3JJZCksXG4gICAgICBsYXllcl9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2xheWVySWRzKSxcbiAgICAgIG9zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9vcyksXG4gICAgICBwbGF0Zm9ybTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhdGZvcm0pLFxuICAgICAgcHJpdmF0ZV9kbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByaXZhdGVEbnMpLFxuICAgICAgcHJpdmF0ZV9pcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJpdmF0ZUlwKSxcbiAgICAgIHB1YmxpY19kbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3B1YmxpY0RucyksXG4gICAgICBwdWJsaWNfaXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3B1YmxpY0lwKSxcbiAgICAgIHJlZ2lzdGVyZWRfYnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlZ2lzdGVyZWRCeSksXG4gICAgICByZXBvcnRlZF9hZ2VudF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXBvcnRlZEFnZW50VmVyc2lvbiksXG4gICAgICByZXBvcnRlZF9vc19mYW1pbHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcG9ydGVkT3NGYW1pbHkpLFxuICAgICAgcmVwb3J0ZWRfb3NfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVwb3J0ZWRPc05hbWUpLFxuICAgICAgcmVwb3J0ZWRfb3NfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVwb3J0ZWRPc1ZlcnNpb24pLFxuICAgICAgcm9vdF9kZXZpY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcm9vdERldmljZVR5cGUpLFxuICAgICAgcm9vdF9kZXZpY2Vfdm9sdW1lX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb290RGV2aWNlVm9sdW1lSWQpLFxuICAgICAgc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zZWN1cml0eUdyb3VwSWRzKSxcbiAgICAgIHNzaF9ob3N0X2RzYV9rZXlfZmluZ2VycHJpbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NzaEhvc3REc2FLZXlGaW5nZXJwcmludCksXG4gICAgICBzc2hfaG9zdF9yc2Ffa2V5X2ZpbmdlcnByaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zc2hIb3N0UnNhS2V5RmluZ2VycHJpbnQpLFxuICAgICAgc3NoX2tleV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zc2hLZXlOYW1lKSxcbiAgICAgIHN0YWNrX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGFja0lkKSxcbiAgICAgIHN0YXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGF0ZSksXG4gICAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0YXR1cyksXG4gICAgICBzdWJuZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N1Ym5ldElkKSxcbiAgICAgIHRlbmFuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RlbmFuY3kpLFxuICAgICAgdmlydHVhbGl6YXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmlydHVhbGl6YXRpb25UeXBlKSxcbiAgICAgIGVic19ibG9ja19kZXZpY2U6IGNka3RmLmxpc3RNYXBwZXIob3Bzd29ya3NJbnN0YW5jZUVic0Jsb2NrRGV2aWNlVG9UZXJyYWZvcm0pKHRoaXMuX2Vic0Jsb2NrRGV2aWNlKSxcbiAgICAgIGVwaGVtZXJhbF9ibG9ja19kZXZpY2U6IGNka3RmLmxpc3RNYXBwZXIob3Bzd29ya3NJbnN0YW5jZUVwaGVtZXJhbEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0pKHRoaXMuX2VwaGVtZXJhbEJsb2NrRGV2aWNlKSxcbiAgICAgIHJvb3RfYmxvY2tfZGV2aWNlOiBjZGt0Zi5saXN0TWFwcGVyKG9wc3dvcmtzSW5zdGFuY2VSb290QmxvY2tEZXZpY2VUb1RlcnJhZm9ybSkodGhpcy5fcm9vdEJsb2NrRGV2aWNlKSxcbiAgICAgIHRpbWVvdXRzOiBvcHN3b3Jrc0luc3RhbmNlVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cyksXG4gICAgfTtcbiAgfVxufVxuIl19