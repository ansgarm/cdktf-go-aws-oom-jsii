"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchTemplate = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function launchTemplateBlockDeviceMappingsEbsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.stringToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
function launchTemplateBlockDeviceMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.stringToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
        ebs: cdktf.listMapper(launchTemplateBlockDeviceMappingsEbsToTerraform)(struct.ebs),
    };
}
function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_id: cdktf.stringToTerraform(struct.capacityReservationId),
    };
}
function launchTemplateCapacityReservationSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_preference: cdktf.stringToTerraform(struct.capacityReservationPreference),
        capacity_reservation_target: cdktf.listMapper(launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform)(struct.capacityReservationTarget),
    };
}
function launchTemplateCpuOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        core_count: cdktf.numberToTerraform(struct.coreCount),
        threads_per_core: cdktf.numberToTerraform(struct.threadsPerCore),
    };
}
function launchTemplateCreditSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cpu_credits: cdktf.stringToTerraform(struct.cpuCredits),
    };
}
function launchTemplateElasticGpuSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
function launchTemplateElasticInferenceAcceleratorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
function launchTemplateEnclaveOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function launchTemplateHibernationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configured: cdktf.booleanToTerraform(struct.configured),
    };
}
function launchTemplateIamInstanceProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        max_price: cdktf.stringToTerraform(struct.maxPrice),
        spot_instance_type: cdktf.stringToTerraform(struct.spotInstanceType),
        valid_until: cdktf.stringToTerraform(struct.validUntil),
    };
}
function launchTemplateInstanceMarketOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        market_type: cdktf.stringToTerraform(struct.marketType),
        spot_options: cdktf.listMapper(launchTemplateInstanceMarketOptionsSpotOptionsToTerraform)(struct.spotOptions),
    };
}
function launchTemplateLicenseSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        license_configuration_arn: cdktf.stringToTerraform(struct.licenseConfigurationArn),
    };
}
function launchTemplateMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens),
    };
}
function launchTemplateMonitoringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function launchTemplateNetworkInterfacesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        associate_carrier_ip_address: cdktf.stringToTerraform(struct.associateCarrierIpAddress),
        associate_public_ip_address: cdktf.stringToTerraform(struct.associatePublicIpAddress),
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        description: cdktf.stringToTerraform(struct.description),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        ipv4_address_count: cdktf.numberToTerraform(struct.ipv4AddressCount),
        ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv4Addresses),
        ipv6_address_count: cdktf.numberToTerraform(struct.ipv6AddressCount),
        ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6Addresses),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        private_ip_address: cdktf.stringToTerraform(struct.privateIpAddress),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
    };
}
function launchTemplatePlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        affinity: cdktf.stringToTerraform(struct.affinity),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        group_name: cdktf.stringToTerraform(struct.groupName),
        host_id: cdktf.stringToTerraform(struct.hostId),
        host_resource_group_arn: cdktf.stringToTerraform(struct.hostResourceGroupArn),
        partition_number: cdktf.numberToTerraform(struct.partitionNumber),
        spread_domain: cdktf.stringToTerraform(struct.spreadDomain),
        tenancy: cdktf.stringToTerraform(struct.tenancy),
    };
}
function launchTemplateTagSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_type: cdktf.stringToTerraform(struct.resourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template}.
 */
class LaunchTemplate extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_launch_template',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._defaultVersion = config.defaultVersion;
        this._description = config.description;
        this._disableApiTermination = config.disableApiTermination;
        this._ebsOptimized = config.ebsOptimized;
        this._imageId = config.imageId;
        this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        this._instanceType = config.instanceType;
        this._kernelId = config.kernelId;
        this._keyName = config.keyName;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._ramDiskId = config.ramDiskId;
        this._securityGroupNames = config.securityGroupNames;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._updateDefaultVersion = config.updateDefaultVersion;
        this._userData = config.userData;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._blockDeviceMappings = config.blockDeviceMappings;
        this._capacityReservationSpecification = config.capacityReservationSpecification;
        this._cpuOptions = config.cpuOptions;
        this._creditSpecification = config.creditSpecification;
        this._elasticGpuSpecifications = config.elasticGpuSpecifications;
        this._elasticInferenceAccelerator = config.elasticInferenceAccelerator;
        this._enclaveOptions = config.enclaveOptions;
        this._hibernationOptions = config.hibernationOptions;
        this._iamInstanceProfile = config.iamInstanceProfile;
        this._instanceMarketOptions = config.instanceMarketOptions;
        this._licenseSpecification = config.licenseSpecification;
        this._metadataOptions = config.metadataOptions;
        this._monitoring = config.monitoring;
        this._networkInterfaces = config.networkInterfaces;
        this._placement = config.placement;
        this._tagSpecifications = config.tagSpecifications;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get defaultVersion() {
        return this.getNumberAttribute('default_version');
    }
    set defaultVersion(value) {
        this._defaultVersion = value;
    }
    resetDefaultVersion() {
        this._defaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultVersionInput() {
        return this._defaultVersion;
    }
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    get disableApiTermination() {
        return this.getBooleanAttribute('disable_api_termination');
    }
    set disableApiTermination(value) {
        this._disableApiTermination = value;
    }
    resetDisableApiTermination() {
        this._disableApiTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableApiTerminationInput() {
        return this._disableApiTermination;
    }
    get ebsOptimized() {
        return this.getStringAttribute('ebs_optimized');
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
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    set imageId(value) {
        this._imageId = value;
    }
    resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageIdInput() {
        return this._imageId;
    }
    get instanceInitiatedShutdownBehavior() {
        return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    set instanceInitiatedShutdownBehavior(value) {
        this._instanceInitiatedShutdownBehavior = value;
    }
    resetInstanceInitiatedShutdownBehavior() {
        this._instanceInitiatedShutdownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceInitiatedShutdownBehaviorInput() {
        return this._instanceInitiatedShutdownBehavior;
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
    get kernelId() {
        return this.getStringAttribute('kernel_id');
    }
    set kernelId(value) {
        this._kernelId = value;
    }
    resetKernelId() {
        this._kernelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kernelIdInput() {
        return this._kernelId;
    }
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    set keyName(value) {
        this._keyName = value;
    }
    resetKeyName() {
        this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyNameInput() {
        return this._keyName;
    }
    // latest_version - computed: true, optional: false, required: false
    get latestVersion() {
        return this.getNumberAttribute('latest_version');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    set namePrefix(value) {
        this._namePrefix = value;
    }
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namePrefixInput() {
        return this._namePrefix;
    }
    get ramDiskId() {
        return this.getStringAttribute('ram_disk_id');
    }
    set ramDiskId(value) {
        this._ramDiskId = value;
    }
    resetRamDiskId() {
        this._ramDiskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ramDiskIdInput() {
        return this._ramDiskId;
    }
    get securityGroupNames() {
        return this.getListAttribute('security_group_names');
    }
    set securityGroupNames(value) {
        this._securityGroupNames = value;
    }
    resetSecurityGroupNames() {
        this._securityGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupNamesInput() {
        return this._securityGroupNames;
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
    get updateDefaultVersion() {
        return this.getBooleanAttribute('update_default_version');
    }
    set updateDefaultVersion(value) {
        this._updateDefaultVersion = value;
    }
    resetUpdateDefaultVersion() {
        this._updateDefaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateDefaultVersionInput() {
        return this._updateDefaultVersion;
    }
    get userData() {
        return this.getStringAttribute('user_data');
    }
    set userData(value) {
        this._userData = value;
    }
    resetUserData() {
        this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userDataInput() {
        return this._userData;
    }
    get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    set vpcSecurityGroupIds(value) {
        this._vpcSecurityGroupIds = value;
    }
    resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }
    get blockDeviceMappings() {
        return this.interpolationForAttribute('block_device_mappings');
    }
    set blockDeviceMappings(value) {
        this._blockDeviceMappings = value;
    }
    resetBlockDeviceMappings() {
        this._blockDeviceMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockDeviceMappingsInput() {
        return this._blockDeviceMappings;
    }
    get capacityReservationSpecification() {
        return this.interpolationForAttribute('capacity_reservation_specification');
    }
    set capacityReservationSpecification(value) {
        this._capacityReservationSpecification = value;
    }
    resetCapacityReservationSpecification() {
        this._capacityReservationSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get capacityReservationSpecificationInput() {
        return this._capacityReservationSpecification;
    }
    get cpuOptions() {
        return this.interpolationForAttribute('cpu_options');
    }
    set cpuOptions(value) {
        this._cpuOptions = value;
    }
    resetCpuOptions() {
        this._cpuOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuOptionsInput() {
        return this._cpuOptions;
    }
    get creditSpecification() {
        return this.interpolationForAttribute('credit_specification');
    }
    set creditSpecification(value) {
        this._creditSpecification = value;
    }
    resetCreditSpecification() {
        this._creditSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get creditSpecificationInput() {
        return this._creditSpecification;
    }
    get elasticGpuSpecifications() {
        return this.interpolationForAttribute('elastic_gpu_specifications');
    }
    set elasticGpuSpecifications(value) {
        this._elasticGpuSpecifications = value;
    }
    resetElasticGpuSpecifications() {
        this._elasticGpuSpecifications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticGpuSpecificationsInput() {
        return this._elasticGpuSpecifications;
    }
    get elasticInferenceAccelerator() {
        return this.interpolationForAttribute('elastic_inference_accelerator');
    }
    set elasticInferenceAccelerator(value) {
        this._elasticInferenceAccelerator = value;
    }
    resetElasticInferenceAccelerator() {
        this._elasticInferenceAccelerator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticInferenceAcceleratorInput() {
        return this._elasticInferenceAccelerator;
    }
    get enclaveOptions() {
        return this.interpolationForAttribute('enclave_options');
    }
    set enclaveOptions(value) {
        this._enclaveOptions = value;
    }
    resetEnclaveOptions() {
        this._enclaveOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enclaveOptionsInput() {
        return this._enclaveOptions;
    }
    get hibernationOptions() {
        return this.interpolationForAttribute('hibernation_options');
    }
    set hibernationOptions(value) {
        this._hibernationOptions = value;
    }
    resetHibernationOptions() {
        this._hibernationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hibernationOptionsInput() {
        return this._hibernationOptions;
    }
    get iamInstanceProfile() {
        return this.interpolationForAttribute('iam_instance_profile');
    }
    set iamInstanceProfile(value) {
        this._iamInstanceProfile = value;
    }
    resetIamInstanceProfile() {
        this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamInstanceProfileInput() {
        return this._iamInstanceProfile;
    }
    get instanceMarketOptions() {
        return this.interpolationForAttribute('instance_market_options');
    }
    set instanceMarketOptions(value) {
        this._instanceMarketOptions = value;
    }
    resetInstanceMarketOptions() {
        this._instanceMarketOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceMarketOptionsInput() {
        return this._instanceMarketOptions;
    }
    get licenseSpecification() {
        return this.interpolationForAttribute('license_specification');
    }
    set licenseSpecification(value) {
        this._licenseSpecification = value;
    }
    resetLicenseSpecification() {
        this._licenseSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get licenseSpecificationInput() {
        return this._licenseSpecification;
    }
    get metadataOptions() {
        return this.interpolationForAttribute('metadata_options');
    }
    set metadataOptions(value) {
        this._metadataOptions = value;
    }
    resetMetadataOptions() {
        this._metadataOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataOptionsInput() {
        return this._metadataOptions;
    }
    get monitoring() {
        return this.interpolationForAttribute('monitoring');
    }
    set monitoring(value) {
        this._monitoring = value;
    }
    resetMonitoring() {
        this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitoringInput() {
        return this._monitoring;
    }
    get networkInterfaces() {
        return this.interpolationForAttribute('network_interfaces');
    }
    set networkInterfaces(value) {
        this._networkInterfaces = value;
    }
    resetNetworkInterfaces() {
        this._networkInterfaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkInterfacesInput() {
        return this._networkInterfaces;
    }
    get placement() {
        return this.interpolationForAttribute('placement');
    }
    set placement(value) {
        this._placement = value;
    }
    resetPlacement() {
        this._placement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementInput() {
        return this._placement;
    }
    get tagSpecifications() {
        return this.interpolationForAttribute('tag_specifications');
    }
    set tagSpecifications(value) {
        this._tagSpecifications = value;
    }
    resetTagSpecifications() {
        this._tagSpecifications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagSpecificationsInput() {
        return this._tagSpecifications;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            default_version: cdktf.numberToTerraform(this._defaultVersion),
            description: cdktf.stringToTerraform(this._description),
            disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktf.stringToTerraform(this._ebsOptimized),
            image_id: cdktf.stringToTerraform(this._imageId),
            instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            kernel_id: cdktf.stringToTerraform(this._kernelId),
            key_name: cdktf.stringToTerraform(this._keyName),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            ram_disk_id: cdktf.stringToTerraform(this._ramDiskId),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
            user_data: cdktf.stringToTerraform(this._userData),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
            capacity_reservation_specification: cdktf.listMapper(launchTemplateCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
            cpu_options: cdktf.listMapper(launchTemplateCpuOptionsToTerraform)(this._cpuOptions),
            credit_specification: cdktf.listMapper(launchTemplateCreditSpecificationToTerraform)(this._creditSpecification),
            elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform)(this._elasticGpuSpecifications),
            elastic_inference_accelerator: cdktf.listMapper(launchTemplateElasticInferenceAcceleratorToTerraform)(this._elasticInferenceAccelerator),
            enclave_options: cdktf.listMapper(launchTemplateEnclaveOptionsToTerraform)(this._enclaveOptions),
            hibernation_options: cdktf.listMapper(launchTemplateHibernationOptionsToTerraform)(this._hibernationOptions),
            iam_instance_profile: cdktf.listMapper(launchTemplateIamInstanceProfileToTerraform)(this._iamInstanceProfile),
            instance_market_options: cdktf.listMapper(launchTemplateInstanceMarketOptionsToTerraform)(this._instanceMarketOptions),
            license_specification: cdktf.listMapper(launchTemplateLicenseSpecificationToTerraform)(this._licenseSpecification),
            metadata_options: cdktf.listMapper(launchTemplateMetadataOptionsToTerraform)(this._metadataOptions),
            monitoring: cdktf.listMapper(launchTemplateMonitoringToTerraform)(this._monitoring),
            network_interfaces: cdktf.listMapper(launchTemplateNetworkInterfacesToTerraform)(this._networkInterfaces),
            placement: cdktf.listMapper(launchTemplatePlacementToTerraform)(this._placement),
            tag_specifications: cdktf.listMapper(launchTemplateTagSpecificationsToTerraform)(this._tagSpecifications),
        };
    }
}
exports.LaunchTemplate = LaunchTemplate;
_a = JSII_RTTI_SYMBOL_1;
LaunchTemplate[_a] = { fqn: "hashicorp_aws.LaunchTemplate", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGF1bmNoLXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCO0FBaU4vQixTQUFTLCtDQUErQyxDQUFDLE1BQTZDO0lBQ3BHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDekQsQ0FBQTtBQUNILENBQUM7QUF1QkQsU0FBUyw0Q0FBNEMsQ0FBQyxNQUEwQztJQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVB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cEJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL2xhdW5jaF90ZW1wbGF0ZS5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRWZXJzaW9uPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc2FibGVBcGlUZXJtaW5hdGlvbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic09wdGltaXplZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXJuZWxJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXlOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWVQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmFtRGlza0lkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBOYW1lcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXBkYXRlRGVmYXVsdFZlcnNpb24/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlckRhdGE/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY1NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9ja0RldmljZU1hcHBpbmdzPzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3B1T3B0aW9ucz86IExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWRpdFNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbGFzdGljR3B1U3BlY2lmaWNhdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcj86IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jbGF2ZU9wdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGliZXJuYXRpb25PcHRpb25zPzogTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1JbnN0YW5jZVByb2ZpbGU/OiBMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlTWFya2V0T3B0aW9ucz86IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGljZW5zZVNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0YWRhdGFPcHRpb25zPzogTGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb25pdG9yaW5nPzogTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZXM/OiBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGxhY2VtZW50PzogTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdTcGVjaWZpY2F0aW9ucz86IExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZU9uVGVybWluYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmNyeXB0ZWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNuYXBzaG90SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm91Z2hwdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVUeXBlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0ZWQpLFxuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgc25hcHNob3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RJZCksXG4gICAgdGhyb3VnaHB1dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aHJvdWdocHV0KSxcbiAgICB2b2x1bWVfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVTaXplKSxcbiAgICB2b2x1bWVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vRGV2aWNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzPzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzW107XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICBub19kZXZpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm9EZXZpY2UpLFxuICAgIHZpcnR1YWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTmFtZSksXG4gICAgZWJzOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0Vic1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVicyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlSZXNlcnZhdGlvbklkPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldFRvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmVzZXJ2YXRpb25JZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldD86IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0W107XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3ByZWZlcmVuY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UpLFxuICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3RhcmdldDogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldFRvVGVycmFmb3JtKShzdHJ1Y3QhLmNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29yZUNvdW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJlYWRzUGVyQ29yZT86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvcmVfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29yZUNvdW50KSxcbiAgICB0aHJlYWRzX3Blcl9jb3JlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRocmVhZHNQZXJDb3JlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3B1Q3JlZGl0cz86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNwdV9jcmVkaXRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdUNyZWRpdHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvclRvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmVkOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyZWQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZVRvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcm4pLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tEdXJhdGlvbk1pbnV0ZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4UHJpY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcG90SW5zdGFuY2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbGlkVW50aWw/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJsb2NrX2R1cmF0aW9uX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tEdXJhdGlvbk1pbnV0ZXMpLFxuICAgIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yKSxcbiAgICBtYXhfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4UHJpY2UpLFxuICAgIHNwb3RfaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90SW5zdGFuY2VUeXBlKSxcbiAgICB2YWxpZF91bnRpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWxpZFVudGlsKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXJrZXRUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RPcHRpb25zPzogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9uc1tdO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1hcmtldF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcmtldFR5cGUpLFxuICAgIHNwb3Rfb3B0aW9uczogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3BvdE9wdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxpY2Vuc2VDb25maWd1cmF0aW9uQXJuOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTGljZW5zZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGxpY2Vuc2VfY29uZmlndXJhdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGljZW5zZUNvbmZpZ3VyYXRpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwRW5kcG9pbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwVG9rZW5zPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGh0dHBfZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaHR0cEVuZHBvaW50KSxcbiAgICBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaHR0cFB1dFJlc3BvbnNlSG9wTGltaXQpLFxuICAgIGh0dHBfdG9rZW5zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBUb2tlbnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhc3NvY2lhdGVDYXJyaWVySXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlT25UZXJtaW5hdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZUluZGV4PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXB2NEFkZHJlc3NDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcHY0QWRkcmVzc2VzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcHY2QWRkcmVzc0NvdW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlwdjZBZGRyZXNzZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrSW50ZXJmYWNlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1Ym5ldElkPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhc3NvY2lhdGVfY2Fycmllcl9pcF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFzc29jaWF0ZUNhcnJpZXJJcEFkZHJlc3MpLFxuICAgIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MpLFxuICAgIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZGV2aWNlX2luZGV4OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZUluZGV4KSxcbiAgICBpcHY0X2FkZHJlc3NfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaXB2NEFkZHJlc3NDb3VudCksXG4gICAgaXB2NF9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXB2NEFkZHJlc3NlcyksXG4gICAgaXB2Nl9hZGRyZXNzX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwdjZBZGRyZXNzQ291bnQpLFxuICAgIGlwdjZfYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmlwdjZBZGRyZXNzZXMpLFxuICAgIG5ldHdvcmtfaW50ZXJmYWNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtJbnRlcmZhY2VJZCksXG4gICAgcHJpdmF0ZV9pcF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaXZhdGVJcEFkZHJlc3MpLFxuICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwcyksXG4gICAgc3VibmV0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlUGxhY2VtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZmZpbml0eT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncm91cE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvc3RJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0UmVzb3VyY2VHcm91cEFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFydGl0aW9uTnVtYmVyPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcHJlYWREb21haW4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlbmFuY3k/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlUGxhY2VtZW50VG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWZmaW5pdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWZmaW5pdHkpLFxuICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmUpLFxuICAgIGdyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBOYW1lKSxcbiAgICBob3N0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RJZCksXG4gICAgaG9zdF9yZXNvdXJjZV9ncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdFJlc291cmNlR3JvdXBBcm4pLFxuICAgIHBhcnRpdGlvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGFydGl0aW9uTnVtYmVyKSxcbiAgICBzcHJlYWRfZG9tYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwcmVhZERvbWFpbiksXG4gICAgdGVuYW5jeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50ZW5hbmN5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5mdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlVHlwZSksXG4gICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IExhdW5jaFRlbXBsYXRlQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19sYXVuY2hfdGVtcGxhdGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGVmYXVsdFZlcnNpb24gPSBjb25maWcuZGVmYXVsdFZlcnNpb247XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uID0gY29uZmlnLmRpc2FibGVBcGlUZXJtaW5hdGlvbjtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSBjb25maWcuZWJzT3B0aW1pemVkO1xuICAgIHRoaXMuX2ltYWdlSWQgPSBjb25maWcuaW1hZ2VJZDtcbiAgICB0aGlzLl9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IgPSBjb25maWcuaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yO1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IGNvbmZpZy5pbnN0YW5jZVR5cGU7XG4gICAgdGhpcy5fa2VybmVsSWQgPSBjb25maWcua2VybmVsSWQ7XG4gICAgdGhpcy5fa2V5TmFtZSA9IGNvbmZpZy5rZXlOYW1lO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gY29uZmlnLm5hbWVQcmVmaXg7XG4gICAgdGhpcy5fcmFtRGlza0lkID0gY29uZmlnLnJhbURpc2tJZDtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwTmFtZXMgPSBjb25maWcuc2VjdXJpdHlHcm91cE5hbWVzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdXBkYXRlRGVmYXVsdFZlcnNpb24gPSBjb25maWcudXBkYXRlRGVmYXVsdFZlcnNpb247XG4gICAgdGhpcy5fdXNlckRhdGEgPSBjb25maWcudXNlckRhdGE7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy52cGNTZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX2Jsb2NrRGV2aWNlTWFwcGluZ3MgPSBjb25maWcuYmxvY2tEZXZpY2VNYXBwaW5ncztcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiA9IGNvbmZpZy5jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLl9jcHVPcHRpb25zID0gY29uZmlnLmNwdU9wdGlvbnM7XG4gICAgdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbiA9IGNvbmZpZy5jcmVkaXRTcGVjaWZpY2F0aW9uO1xuICAgIHRoaXMuX2VsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyA9IGNvbmZpZy5lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnM7XG4gICAgdGhpcy5fZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yID0gY29uZmlnLmVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcjtcbiAgICB0aGlzLl9lbmNsYXZlT3B0aW9ucyA9IGNvbmZpZy5lbmNsYXZlT3B0aW9ucztcbiAgICB0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMgPSBjb25maWcuaGliZXJuYXRpb25PcHRpb25zO1xuICAgIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZSA9IGNvbmZpZy5pYW1JbnN0YW5jZVByb2ZpbGU7XG4gICAgdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zID0gY29uZmlnLmluc3RhbmNlTWFya2V0T3B0aW9ucztcbiAgICB0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbiA9IGNvbmZpZy5saWNlbnNlU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLl9tZXRhZGF0YU9wdGlvbnMgPSBjb25maWcubWV0YWRhdGFPcHRpb25zO1xuICAgIHRoaXMuX21vbml0b3JpbmcgPSBjb25maWcubW9uaXRvcmluZztcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlcyA9IGNvbmZpZy5uZXR3b3JrSW50ZXJmYWNlcztcbiAgICB0aGlzLl9wbGFjZW1lbnQgPSBjb25maWcucGxhY2VtZW50O1xuICAgIHRoaXMuX3RhZ1NwZWNpZmljYXRpb25zID0gY29uZmlnLnRhZ1NwZWNpZmljYXRpb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRWZXJzaW9uPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0VmVyc2lvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0VmVyc2lvbigpIHtcbiAgICB0aGlzLl9kZWZhdWx0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZlcnNpb25cbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25cbiAgfVxuXG4gIC8vIGRpc2FibGVfYXBpX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc2FibGVBcGlUZXJtaW5hdGlvbj86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgZGlzYWJsZUFwaVRlcm1pbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfYXBpX3Rlcm1pbmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaXNhYmxlQXBpVGVybWluYXRpb24odmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGlzYWJsZUFwaVRlcm1pbmF0aW9uKCkge1xuICAgIHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUFwaVRlcm1pbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvblxuICB9XG5cbiAgLy8gZWJzX29wdGltaXplZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNPcHRpbWl6ZWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgZWJzT3B0aW1pemVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWJzX29wdGltaXplZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZWJzT3B0aW1pemVkKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fZWJzT3B0aW1pemVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWJzT3B0aW1pemVkKCkge1xuICAgIHRoaXMuX2Vic09wdGltaXplZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWJzT3B0aW1pemVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic09wdGltaXplZFxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGltYWdlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltYWdlSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW1hZ2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ltYWdlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbWFnZUlkKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faW1hZ2VJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEltYWdlSWQoKSB7XG4gICAgdGhpcy5faW1hZ2VJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW1hZ2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZUlkXG4gIH1cblxuICAvLyBpbnN0YW5jZV9pbml0aWF0ZWRfc2h1dGRvd25fYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKCkge1xuICAgIHRoaXMuX2luc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvclxuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZVxuICB9XG5cbiAgLy8ga2VybmVsX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tlcm5lbElkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGtlcm5lbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2VybmVsX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXJuZWxJZCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2tlcm5lbElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2VybmVsSWQoKSB7XG4gICAgdGhpcy5fa2VybmVsSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtlcm5lbElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlcm5lbElkXG4gIH1cblxuICAvLyBrZXlfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXlOYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGtleU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5TmFtZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2tleU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXlOYW1lKCkge1xuICAgIHRoaXMuX2tleU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TmFtZVxuICB9XG5cbiAgLy8gbGF0ZXN0X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXRlc3RWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbGF0ZXN0X3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIC8vIG5hbWVfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lUHJlZml4KHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWVQcmVmaXgoKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lUHJlZml4XG4gIH1cblxuICAvLyByYW1fZGlza19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yYW1EaXNrSWQ/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgcmFtRGlza0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFtX2Rpc2tfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJhbURpc2tJZCh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX3JhbURpc2tJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJhbURpc2tJZCgpIHtcbiAgICB0aGlzLl9yYW1EaXNrSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJhbURpc2tJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yYW1EaXNrSWRcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX25hbWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBOYW1lcz86IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9uYW1lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cE5hbWVzKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwTmFtZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eUdyb3VwTmFtZXMoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cE5hbWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwTmFtZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cE5hbWVzXG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzXG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTsgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbFxuICB9XG5cbiAgLy8gdXBkYXRlX2RlZmF1bHRfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91cGRhdGVEZWZhdWx0VmVyc2lvbj86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgdXBkYXRlRGVmYXVsdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXBkYXRlX2RlZmF1bHRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXBkYXRlRGVmYXVsdFZlcnNpb24odmFsdWU6IGJvb2xlYW4gKSB7XG4gICAgdGhpcy5fdXBkYXRlRGVmYXVsdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcGRhdGVEZWZhdWx0VmVyc2lvbigpIHtcbiAgICB0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXBkYXRlRGVmYXVsdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlRGVmYXVsdFZlcnNpb25cbiAgfVxuXG4gIC8vIHVzZXJfZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VyRGF0YT86IHN0cmluZztcbiAgcHVibGljIGdldCB1c2VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfZGF0YScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlckRhdGEodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl91c2VyRGF0YSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJEYXRhKCkge1xuICAgIHRoaXMuX3VzZXJEYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyRGF0YUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyRGF0YVxuICB9XG5cbiAgLy8gdnBjX3NlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNTZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgdnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNTZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNTZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHNcbiAgfVxuXG4gIC8vIGJsb2NrX2RldmljZV9tYXBwaW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ibG9ja0RldmljZU1hcHBpbmdzPzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzW107XG4gIHB1YmxpYyBnZXQgYmxvY2tEZXZpY2VNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdibG9ja19kZXZpY2VfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBibG9ja0RldmljZU1hcHBpbmdzKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NbXSApIHtcbiAgICB0aGlzLl9ibG9ja0RldmljZU1hcHBpbmdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmxvY2tEZXZpY2VNYXBwaW5ncygpIHtcbiAgICB0aGlzLl9ibG9ja0RldmljZU1hcHBpbmdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibG9ja0RldmljZU1hcHBpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2NrRGV2aWNlTWFwcGluZ3NcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uW107XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2FwYWNpdHlfcmVzZXJ2YXRpb25fc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uW10gKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25cbiAgfVxuXG4gIC8vIGNwdV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdU9wdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnNbXTtcbiAgcHVibGljIGdldCBjcHVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NwdV9vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1T3B0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zW10gKSB7XG4gICAgdGhpcy5fY3B1T3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fY3B1T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1T3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVPcHRpb25zXG4gIH1cblxuICAvLyBjcmVkaXRfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVkaXRTcGVjaWZpY2F0aW9uPzogTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uW107XG4gIHB1YmxpYyBnZXQgY3JlZGl0U3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjcmVkaXRfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWRpdFNwZWNpZmljYXRpb24odmFsdWU6IExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbltdICkge1xuICAgIHRoaXMuX2NyZWRpdFNwZWNpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVkaXRTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX2NyZWRpdFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWRpdFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvblxuICB9XG5cbiAgLy8gZWxhc3RpY19ncHVfc3BlY2lmaWNhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zPzogTGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnNbXTtcbiAgcHVibGljIGdldCBlbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWxhc3RpY19ncHVfc3BlY2lmaWNhdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbGFzdGljR3B1U3BlY2lmaWNhdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zW10gKSB7XG4gICAgdGhpcy5fZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWxhc3RpY0dwdVNwZWNpZmljYXRpb25zKCkge1xuICAgIHRoaXMuX2VsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc1xuICB9XG5cbiAgLy8gZWxhc3RpY19pbmZlcmVuY2VfYWNjZWxlcmF0b3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yPzogTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3JbXTtcbiAgcHVibGljIGdldCBlbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWxhc3RpY19pbmZlcmVuY2VfYWNjZWxlcmF0b3InKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IodmFsdWU6IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yW10gKSB7XG4gICAgdGhpcy5fZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yKCkge1xuICAgIHRoaXMuX2VsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvclxuICB9XG5cbiAgLy8gZW5jbGF2ZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY2xhdmVPcHRpb25zPzogTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IGVuY2xhdmVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY2xhdmVfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY2xhdmVPcHRpb25zKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zW10gKSB7XG4gICAgdGhpcy5fZW5jbGF2ZU9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNsYXZlT3B0aW9ucygpIHtcbiAgICB0aGlzLl9lbmNsYXZlT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jbGF2ZU9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jbGF2ZU9wdGlvbnNcbiAgfVxuXG4gIC8vIGhpYmVybmF0aW9uX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGliZXJuYXRpb25PcHRpb25zPzogTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNbXTtcbiAgcHVibGljIGdldCBoaWJlcm5hdGlvbk9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaGliZXJuYXRpb25fb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGhpYmVybmF0aW9uT3B0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNbXSApIHtcbiAgICB0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIaWJlcm5hdGlvbk9wdGlvbnMoKSB7XG4gICAgdGhpcy5faGliZXJuYXRpb25PcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoaWJlcm5hdGlvbk9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGliZXJuYXRpb25PcHRpb25zXG4gIH1cblxuICAvLyBpYW1faW5zdGFuY2VfcHJvZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pYW1JbnN0YW5jZVByb2ZpbGU/OiBMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZVtdO1xuICBwdWJsaWMgZ2V0IGlhbUluc3RhbmNlUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpYW1faW5zdGFuY2VfcHJvZmlsZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbUluc3RhbmNlUHJvZmlsZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVbXSApIHtcbiAgICB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYW1JbnN0YW5jZVByb2ZpbGUoKSB7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYW1JbnN0YW5jZVByb2ZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlXG4gIH1cblxuICAvLyBpbnN0YW5jZV9tYXJrZXRfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZU1hcmtldE9wdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IGluc3RhbmNlTWFya2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnN0YW5jZV9tYXJrZXRfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlTWFya2V0T3B0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNbXSApIHtcbiAgICB0aGlzLl9pbnN0YW5jZU1hcmtldE9wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZU1hcmtldE9wdGlvbnMoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZU1hcmtldE9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zXG4gIH1cblxuICAvLyBsaWNlbnNlX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGljZW5zZVNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uW107XG4gIHB1YmxpYyBnZXQgbGljZW5zZVNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbGljZW5zZV9zcGVjaWZpY2F0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbGljZW5zZVNwZWNpZmljYXRpb24odmFsdWU6IExhdW5jaFRlbXBsYXRlTGljZW5zZVNwZWNpZmljYXRpb25bXSApIHtcbiAgICB0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExpY2Vuc2VTcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX2xpY2Vuc2VTcGVjaWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsaWNlbnNlU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvblxuICB9XG5cbiAgLy8gbWV0YWRhdGFfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXRhZGF0YU9wdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IG1ldGFkYXRhT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtZXRhZGF0YV9vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0YWRhdGFPcHRpb25zKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc1tdICkge1xuICAgIHRoaXMuX21ldGFkYXRhT3B0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldGFkYXRhT3B0aW9ucygpIHtcbiAgICB0aGlzLl9tZXRhZGF0YU9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YU9wdGlvbnNcbiAgfVxuXG4gIC8vIG1vbml0b3JpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9uaXRvcmluZz86IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ1tdO1xuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbW9uaXRvcmluZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vbml0b3JpbmcodmFsdWU6IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ1tdICkge1xuICAgIHRoaXMuX21vbml0b3JpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb25pdG9yaW5nKCkge1xuICAgIHRoaXMuX21vbml0b3JpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9uaXRvcmluZ1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnRlcmZhY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtJbnRlcmZhY2VzPzogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlc1tdO1xuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnRlcmZhY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ25ldHdvcmtfaW50ZXJmYWNlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtJbnRlcmZhY2VzKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzW10gKSB7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrSW50ZXJmYWNlcygpIHtcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0ludGVyZmFjZXNcbiAgfVxuXG4gIC8vIHBsYWNlbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGFjZW1lbnQ/OiBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudFtdO1xuICBwdWJsaWMgZ2V0IHBsYWNlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwbGFjZW1lbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwbGFjZW1lbnQodmFsdWU6IExhdW5jaFRlbXBsYXRlUGxhY2VtZW50W10gKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50KCkge1xuICAgIHRoaXMuX3BsYWNlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudFxuICB9XG5cbiAgLy8gdGFnX3NwZWNpZmljYXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ1NwZWNpZmljYXRpb25zPzogTGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9uc1tdO1xuICBwdWJsaWMgZ2V0IHRhZ1NwZWNpZmljYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ19zcGVjaWZpY2F0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ1NwZWNpZmljYXRpb25zKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zW10gKSB7XG4gICAgdGhpcy5fdGFnU3BlY2lmaWNhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdTcGVjaWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl90YWdTcGVjaWZpY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnU3BlY2lmaWNhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnU3BlY2lmaWNhdGlvbnNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdF92ZXJzaW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0VmVyc2lvbiksXG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZGlzYWJsZV9hcGlfdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9kaXNhYmxlQXBpVGVybWluYXRpb24pLFxuICAgICAgZWJzX29wdGltaXplZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZWJzT3B0aW1pemVkKSxcbiAgICAgIGltYWdlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbWFnZUlkKSxcbiAgICAgIGluc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKSxcbiAgICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlVHlwZSksXG4gICAgICBrZXJuZWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2tlcm5lbElkKSxcbiAgICAgIGtleV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rZXlOYW1lKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgcmFtX2Rpc2tfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JhbURpc2tJZCksXG4gICAgICBzZWN1cml0eV9ncm91cF9uYW1lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc2VjdXJpdHlHcm91cE5hbWVzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdXBkYXRlX2RlZmF1bHRfdmVyc2lvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3VwZGF0ZURlZmF1bHRWZXJzaW9uKSxcbiAgICAgIHVzZXJfZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdXNlckRhdGEpLFxuICAgICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyksXG4gICAgICBibG9ja19kZXZpY2VfbWFwcGluZ3M6IGNka3RmLmxpc3RNYXBwZXIobGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzVG9UZXJyYWZvcm0pKHRoaXMuX2Jsb2NrRGV2aWNlTWFwcGluZ3MpLFxuICAgICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25fc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKSxcbiAgICAgIGNwdV9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlQ3B1T3B0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl9jcHVPcHRpb25zKSxcbiAgICAgIGNyZWRpdF9zcGVjaWZpY2F0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9jcmVkaXRTcGVjaWZpY2F0aW9uKSxcbiAgICAgIGVsYXN0aWNfZ3B1X3NwZWNpZmljYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zVG9UZXJyYWZvcm0pKHRoaXMuX2VsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyksXG4gICAgICBlbGFzdGljX2luZmVyZW5jZV9hY2NlbGVyYXRvcjogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvclRvVGVycmFmb3JtKSh0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IpLFxuICAgICAgZW5jbGF2ZV9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnNUb1RlcnJhZm9ybSkodGhpcy5fZW5jbGF2ZU9wdGlvbnMpLFxuICAgICAgaGliZXJuYXRpb25fb3B0aW9uczogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMpLFxuICAgICAgaWFtX2luc3RhbmNlX3Byb2ZpbGU6IGNka3RmLmxpc3RNYXBwZXIobGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVUb1RlcnJhZm9ybSkodGhpcy5faWFtSW5zdGFuY2VQcm9maWxlKSxcbiAgICAgIGluc3RhbmNlX21hcmtldF9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zVG9UZXJyYWZvcm0pKHRoaXMuX2luc3RhbmNlTWFya2V0T3B0aW9ucyksXG4gICAgICBsaWNlbnNlX3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIobGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbiksXG4gICAgICBtZXRhZGF0YV9vcHRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zVG9UZXJyYWZvcm0pKHRoaXMuX21ldGFkYXRhT3B0aW9ucyksXG4gICAgICBtb25pdG9yaW5nOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ1RvVGVycmFmb3JtKSh0aGlzLl9tb25pdG9yaW5nKSxcbiAgICAgIG5ldHdvcmtfaW50ZXJmYWNlczogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzVG9UZXJyYWZvcm0pKHRoaXMuX25ldHdvcmtJbnRlcmZhY2VzKSxcbiAgICAgIHBsYWNlbWVudDogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZVBsYWNlbWVudFRvVGVycmFmb3JtKSh0aGlzLl9wbGFjZW1lbnQpLFxuICAgICAgdGFnX3NwZWNpZmljYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybSkodGhpcy5fdGFnU3BlY2lmaWNhdGlvbnMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==