"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsEc2InstanceType = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dataAwsEc2InstanceTypeFpgasToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function dataAwsEc2InstanceTypeGpusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type}.
 */
class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_instance_type',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._defaultCores = config.defaultCores;
        this._defaultThreadsPerCore = config.defaultThreadsPerCore;
        this._hypervisor = config.hypervisor;
        this._instanceType = config.instanceType;
        this._maximumIpv6AddressesPerInterface = config.maximumIpv6AddressesPerInterface;
        this._totalFpgaMemory = config.totalFpgaMemory;
        this._totalGpuMemory = config.totalGpuMemory;
        this._totalInstanceStorage = config.totalInstanceStorage;
        this._fpgas = config.fpgas;
        this._gpus = config.gpus;
        this._inferenceAccelerators = config.inferenceAccelerators;
        this._instanceDisks = config.instanceDisks;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // auto_recovery_supported - computed: true, optional: false, required: false
    get autoRecoverySupported() {
        return this.getBooleanAttribute('auto_recovery_supported');
    }
    // bare_metal - computed: true, optional: false, required: false
    get bareMetal() {
        return this.getBooleanAttribute('bare_metal');
    }
    // burstable_performance_supported - computed: true, optional: false, required: false
    get burstablePerformanceSupported() {
        return this.getBooleanAttribute('burstable_performance_supported');
    }
    // current_generation - computed: true, optional: false, required: false
    get currentGeneration() {
        return this.getBooleanAttribute('current_generation');
    }
    // dedicated_hosts_supported - computed: true, optional: false, required: false
    get dedicatedHostsSupported() {
        return this.getBooleanAttribute('dedicated_hosts_supported');
    }
    get defaultCores() {
        return this.getNumberAttribute('default_cores');
    }
    set defaultCores(value) {
        this._defaultCores = value;
    }
    resetDefaultCores() {
        this._defaultCores = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultCoresInput() {
        return this._defaultCores;
    }
    get defaultThreadsPerCore() {
        return this.getNumberAttribute('default_threads_per_core');
    }
    set defaultThreadsPerCore(value) {
        this._defaultThreadsPerCore = value;
    }
    resetDefaultThreadsPerCore() {
        this._defaultThreadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultThreadsPerCoreInput() {
        return this._defaultThreadsPerCore;
    }
    // default_vcpus - computed: true, optional: false, required: false
    get defaultVcpus() {
        return this.getNumberAttribute('default_vcpus');
    }
    // ebs_encryption_support - computed: true, optional: false, required: false
    get ebsEncryptionSupport() {
        return this.getStringAttribute('ebs_encryption_support');
    }
    // ebs_nvme_support - computed: true, optional: false, required: false
    get ebsNvmeSupport() {
        return this.getStringAttribute('ebs_nvme_support');
    }
    // ebs_optimized_support - computed: true, optional: false, required: false
    get ebsOptimizedSupport() {
        return this.getStringAttribute('ebs_optimized_support');
    }
    // ebs_performance_baseline_bandwidth - computed: true, optional: false, required: false
    get ebsPerformanceBaselineBandwidth() {
        return this.getNumberAttribute('ebs_performance_baseline_bandwidth');
    }
    // ebs_performance_baseline_iops - computed: true, optional: false, required: false
    get ebsPerformanceBaselineIops() {
        return this.getNumberAttribute('ebs_performance_baseline_iops');
    }
    // ebs_performance_baseline_throughput - computed: true, optional: false, required: false
    get ebsPerformanceBaselineThroughput() {
        return this.getNumberAttribute('ebs_performance_baseline_throughput');
    }
    // ebs_performance_maximum_bandwidth - computed: true, optional: false, required: false
    get ebsPerformanceMaximumBandwidth() {
        return this.getNumberAttribute('ebs_performance_maximum_bandwidth');
    }
    // ebs_performance_maximum_iops - computed: true, optional: false, required: false
    get ebsPerformanceMaximumIops() {
        return this.getNumberAttribute('ebs_performance_maximum_iops');
    }
    // ebs_performance_maximum_throughput - computed: true, optional: false, required: false
    get ebsPerformanceMaximumThroughput() {
        return this.getNumberAttribute('ebs_performance_maximum_throughput');
    }
    // efa_supported - computed: true, optional: false, required: false
    get efaSupported() {
        return this.getBooleanAttribute('efa_supported');
    }
    // ena_support - computed: true, optional: false, required: false
    get enaSupport() {
        return this.getStringAttribute('ena_support');
    }
    // free_tier_eligible - computed: true, optional: false, required: false
    get freeTierEligible() {
        return this.getBooleanAttribute('free_tier_eligible');
    }
    // hibernation_supported - computed: true, optional: false, required: false
    get hibernationSupported() {
        return this.getBooleanAttribute('hibernation_supported');
    }
    get hypervisor() {
        return this.getStringAttribute('hypervisor');
    }
    set hypervisor(value) {
        this._hypervisor = value;
    }
    resetHypervisor() {
        this._hypervisor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hypervisorInput() {
        return this._hypervisor;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_storage_supported - computed: true, optional: false, required: false
    get instanceStorageSupported() {
        return this.getBooleanAttribute('instance_storage_supported');
    }
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    // ipv6_supported - computed: true, optional: false, required: false
    get ipv6Supported() {
        return this.getBooleanAttribute('ipv6_supported');
    }
    // maximum_ipv4_addresses_per_interface - computed: true, optional: false, required: false
    get maximumIpv4AddressesPerInterface() {
        return this.getNumberAttribute('maximum_ipv4_addresses_per_interface');
    }
    get maximumIpv6AddressesPerInterface() {
        return this.getNumberAttribute('maximum_ipv6_addresses_per_interface');
    }
    set maximumIpv6AddressesPerInterface(value) {
        this._maximumIpv6AddressesPerInterface = value;
    }
    resetMaximumIpv6AddressesPerInterface() {
        this._maximumIpv6AddressesPerInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maximumIpv6AddressesPerInterfaceInput() {
        return this._maximumIpv6AddressesPerInterface;
    }
    // maximum_network_interfaces - computed: true, optional: false, required: false
    get maximumNetworkInterfaces() {
        return this.getNumberAttribute('maximum_network_interfaces');
    }
    // memory_size - computed: true, optional: false, required: false
    get memorySize() {
        return this.getNumberAttribute('memory_size');
    }
    // network_performance - computed: true, optional: false, required: false
    get networkPerformance() {
        return this.getStringAttribute('network_performance');
    }
    // supported_architectures - computed: true, optional: false, required: false
    get supportedArchitectures() {
        return this.getListAttribute('supported_architectures');
    }
    // supported_placement_strategies - computed: true, optional: false, required: false
    get supportedPlacementStrategies() {
        return this.getListAttribute('supported_placement_strategies');
    }
    // supported_root_device_types - computed: true, optional: false, required: false
    get supportedRootDeviceTypes() {
        return this.getListAttribute('supported_root_device_types');
    }
    // supported_usages_classes - computed: true, optional: false, required: false
    get supportedUsagesClasses() {
        return this.getListAttribute('supported_usages_classes');
    }
    // supported_virtualization_types - computed: true, optional: false, required: false
    get supportedVirtualizationTypes() {
        return this.getListAttribute('supported_virtualization_types');
    }
    // sustained_clock_speed - computed: true, optional: false, required: false
    get sustainedClockSpeed() {
        return this.getNumberAttribute('sustained_clock_speed');
    }
    get totalFpgaMemory() {
        return this.getNumberAttribute('total_fpga_memory');
    }
    set totalFpgaMemory(value) {
        this._totalFpgaMemory = value;
    }
    resetTotalFpgaMemory() {
        this._totalFpgaMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get totalFpgaMemoryInput() {
        return this._totalFpgaMemory;
    }
    get totalGpuMemory() {
        return this.getNumberAttribute('total_gpu_memory');
    }
    set totalGpuMemory(value) {
        this._totalGpuMemory = value;
    }
    resetTotalGpuMemory() {
        this._totalGpuMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get totalGpuMemoryInput() {
        return this._totalGpuMemory;
    }
    get totalInstanceStorage() {
        return this.getNumberAttribute('total_instance_storage');
    }
    set totalInstanceStorage(value) {
        this._totalInstanceStorage = value;
    }
    resetTotalInstanceStorage() {
        this._totalInstanceStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get totalInstanceStorageInput() {
        return this._totalInstanceStorage;
    }
    // valid_cores - computed: true, optional: false, required: false
    get validCores() {
        return this.interpolationForAttribute('valid_cores');
    }
    // valid_threads_per_core - computed: true, optional: false, required: false
    get validThreadsPerCore() {
        return this.interpolationForAttribute('valid_threads_per_core');
    }
    get fpgas() {
        return this.interpolationForAttribute('fpgas');
    }
    set fpgas(value) {
        this._fpgas = value;
    }
    resetFpgas() {
        this._fpgas = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fpgasInput() {
        return this._fpgas;
    }
    get gpus() {
        return this.interpolationForAttribute('gpus');
    }
    set gpus(value) {
        this._gpus = value;
    }
    resetGpus() {
        this._gpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gpusInput() {
        return this._gpus;
    }
    get inferenceAccelerators() {
        return this.interpolationForAttribute('inference_accelerators');
    }
    set inferenceAccelerators(value) {
        this._inferenceAccelerators = value;
    }
    resetInferenceAccelerators() {
        this._inferenceAccelerators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inferenceAcceleratorsInput() {
        return this._inferenceAccelerators;
    }
    get instanceDisks() {
        return this.interpolationForAttribute('instance_disks');
    }
    set instanceDisks(value) {
        this._instanceDisks = value;
    }
    resetInstanceDisks() {
        this._instanceDisks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceDisksInput() {
        return this._instanceDisks;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            default_cores: cdktf.numberToTerraform(this._defaultCores),
            default_threads_per_core: cdktf.numberToTerraform(this._defaultThreadsPerCore),
            hypervisor: cdktf.stringToTerraform(this._hypervisor),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            maximum_ipv6_addresses_per_interface: cdktf.numberToTerraform(this._maximumIpv6AddressesPerInterface),
            total_fpga_memory: cdktf.numberToTerraform(this._totalFpgaMemory),
            total_gpu_memory: cdktf.numberToTerraform(this._totalGpuMemory),
            total_instance_storage: cdktf.numberToTerraform(this._totalInstanceStorage),
            fpgas: cdktf.listMapper(dataAwsEc2InstanceTypeFpgasToTerraform)(this._fpgas),
            gpus: cdktf.listMapper(dataAwsEc2InstanceTypeGpusToTerraform)(this._gpus),
            inference_accelerators: cdktf.listMapper(dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform)(this._inferenceAccelerators),
            instance_disks: cdktf.listMapper(dataAwsEc2InstanceTypeInstanceDisksToTerraform)(this._instanceDisks),
        };
    }
}
exports.DataAwsEc2InstanceType = DataAwsEc2InstanceType;
_a = JSII_RTTI_SYMBOL_1;
DataAwsEc2InstanceType[_a] = { fqn: "hashicorp_aws.DataAwsEc2InstanceType", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWMyLWluc3RhbmNlLXR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3cy1lYzItaW5zdGFuY2UtdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQWlFL0IsU0FBUyxzQ0FBc0MsQ0FBQyxNQUFvQztJQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTyxFQUNOLENBQUE7QUFDSCxDQUFDO0FBS0QsU0FBUyxxQ0FBcUMsQ0FBQyxNQUFtQztJQUNoRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTyxFQUNOLENBQUE7QUFDSCxDQUFDO0FBS0QsU0FBUyxzREFBc0QsQ0FBQyxNQUFvRDtJQUNsSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTyxFQUNOLENBQUE7QUFDSCxDQUFDO0FBS0QsU0FBUyw4Q0FBOEMsQ0FBQyxNQUE0QztJQUNsRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTyxFQUNOLENBQUE7QUFDSCxDQUFDOzs7O0FBTUQsTUFBYSxzQkFBdUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5FLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7OztJQVNkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQW9DO1FBQ25GLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsdUJBQXVCO1lBQzlDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZ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QWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzlFLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNyRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztZQUNyRyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDM0UsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzVFLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6RSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHNEQUFzRCxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzdILGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN0RyxDQUFDO0lBQ0osQ0FBQzs7QUFwYUgsd0RBcWFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9kL2VjMl9pbnN0YW5jZV90eXBlLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzRWMySW5zdGFuY2VUeXBlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0Q29yZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFRocmVhZHNQZXJDb3JlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHlwZXJ2aXNvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3RhbEZwZ2FNZW1vcnk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3RhbEdwdU1lbW9yeT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRvdGFsSW5zdGFuY2VTdG9yYWdlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmcGdhcz86IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVGcGdhc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncHVzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUdwdXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5mZXJlbmNlQWNjZWxlcmF0b3JzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluZmVyZW5jZUFjY2VsZXJhdG9yc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZURpc2tzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUZwZ2FzIHtcbn1cblxuZnVuY3Rpb24gZGF0YUF3c0VjMkluc3RhbmNlVHlwZUZwZ2FzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUZwZ2FzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUdwdXMge1xufVxuXG5mdW5jdGlvbiBkYXRhQXdzRWMySW5zdGFuY2VUeXBlR3B1c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVHcHVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluZmVyZW5jZUFjY2VsZXJhdG9ycyB7XG59XG5cbmZ1bmN0aW9uIGRhdGFBd3NFYzJJbnN0YW5jZVR5cGVJbmZlcmVuY2VBY2NlbGVyYXRvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlSW5mZXJlbmNlQWNjZWxlcmF0b3JzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3Mge1xufVxuXG5mdW5jdGlvbiBkYXRhQXdzRWMySW5zdGFuY2VUeXBlSW5zdGFuY2VEaXNrc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVJbnN0YW5jZURpc2tzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0VjMkluc3RhbmNlVHlwZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2VjMl9pbnN0YW5jZV90eXBlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RlZmF1bHRDb3JlcyA9IGNvbmZpZy5kZWZhdWx0Q29yZXM7XG4gICAgdGhpcy5fZGVmYXVsdFRocmVhZHNQZXJDb3JlID0gY29uZmlnLmRlZmF1bHRUaHJlYWRzUGVyQ29yZTtcbiAgICB0aGlzLl9oeXBlcnZpc29yID0gY29uZmlnLmh5cGVydmlzb3I7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gY29uZmlnLmluc3RhbmNlVHlwZTtcbiAgICB0aGlzLl9tYXhpbXVtSXB2NkFkZHJlc3Nlc1BlckludGVyZmFjZSA9IGNvbmZpZy5tYXhpbXVtSXB2NkFkZHJlc3Nlc1BlckludGVyZmFjZTtcbiAgICB0aGlzLl90b3RhbEZwZ2FNZW1vcnkgPSBjb25maWcudG90YWxGcGdhTWVtb3J5O1xuICAgIHRoaXMuX3RvdGFsR3B1TWVtb3J5ID0gY29uZmlnLnRvdGFsR3B1TWVtb3J5O1xuICAgIHRoaXMuX3RvdGFsSW5zdGFuY2VTdG9yYWdlID0gY29uZmlnLnRvdGFsSW5zdGFuY2VTdG9yYWdlO1xuICAgIHRoaXMuX2ZwZ2FzID0gY29uZmlnLmZwZ2FzO1xuICAgIHRoaXMuX2dwdXMgPSBjb25maWcuZ3B1cztcbiAgICB0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvcnMgPSBjb25maWcuaW5mZXJlbmNlQWNjZWxlcmF0b3JzO1xuICAgIHRoaXMuX2luc3RhbmNlRGlza3MgPSBjb25maWcuaW5zdGFuY2VEaXNrcztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXV0b19yZWNvdmVyeV9zdXBwb3J0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRvUmVjb3ZlcnlTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19yZWNvdmVyeV9zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIC8vIGJhcmVfbWV0YWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBiYXJlTWV0YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYmFyZV9tZXRhbCcpO1xuICB9XG5cbiAgLy8gYnVyc3RhYmxlX3BlcmZvcm1hbmNlX3N1cHBvcnRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1cnN0YWJsZVBlcmZvcm1hbmNlU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2J1cnN0YWJsZV9wZXJmb3JtYW5jZV9zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIC8vIGN1cnJlbnRfZ2VuZXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGN1cnJlbnRHZW5lcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2N1cnJlbnRfZ2VuZXJhdGlvbicpO1xuICB9XG5cbiAgLy8gZGVkaWNhdGVkX2hvc3RzX3N1cHBvcnRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZGljYXRlZEhvc3RzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlZGljYXRlZF9ob3N0c19zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfY29yZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0Q29yZXM/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgZGVmYXVsdENvcmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF9jb3JlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdENvcmVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q29yZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0Q29yZXMoKSB7XG4gICAgdGhpcy5fZGVmYXVsdENvcmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0Q29yZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENvcmVzXG4gIH1cblxuICAvLyBkZWZhdWx0X3RocmVhZHNfcGVyX2NvcmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0VGhyZWFkc1BlckNvcmU/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgZGVmYXVsdFRocmVhZHNQZXJDb3JlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF90aHJlYWRzX3Blcl9jb3JlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0VGhyZWFkc1BlckNvcmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlZmF1bHRUaHJlYWRzUGVyQ29yZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRUaHJlYWRzUGVyQ29yZSgpIHtcbiAgICB0aGlzLl9kZWZhdWx0VGhyZWFkc1BlckNvcmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRUaHJlYWRzUGVyQ29yZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VGhyZWFkc1BlckNvcmVcbiAgfVxuXG4gIC8vIGRlZmF1bHRfdmNwdXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWZhdWx0VmNwdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZWZhdWx0X3ZjcHVzJyk7XG4gIH1cblxuICAvLyBlYnNfZW5jcnlwdGlvbl9zdXBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWJzRW5jcnlwdGlvblN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlYnNfZW5jcnlwdGlvbl9zdXBwb3J0Jyk7XG4gIH1cblxuICAvLyBlYnNfbnZtZV9zdXBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWJzTnZtZVN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlYnNfbnZtZV9zdXBwb3J0Jyk7XG4gIH1cblxuICAvLyBlYnNfb3B0aW1pemVkX3N1cHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNPcHRpbWl6ZWRTdXBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWJzX29wdGltaXplZF9zdXBwb3J0Jyk7XG4gIH1cblxuICAvLyBlYnNfcGVyZm9ybWFuY2VfYmFzZWxpbmVfYmFuZHdpZHRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWJzUGVyZm9ybWFuY2VCYXNlbGluZUJhbmR3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Vic19wZXJmb3JtYW5jZV9iYXNlbGluZV9iYW5kd2lkdGgnKTtcbiAgfVxuXG4gIC8vIGVic19wZXJmb3JtYW5jZV9iYXNlbGluZV9pb3BzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWJzUGVyZm9ybWFuY2VCYXNlbGluZUlvcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlYnNfcGVyZm9ybWFuY2VfYmFzZWxpbmVfaW9wcycpO1xuICB9XG5cbiAgLy8gZWJzX3BlcmZvcm1hbmNlX2Jhc2VsaW5lX3Rocm91Z2hwdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNQZXJmb3JtYW5jZUJhc2VsaW5lVGhyb3VnaHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Vic19wZXJmb3JtYW5jZV9iYXNlbGluZV90aHJvdWdocHV0Jyk7XG4gIH1cblxuICAvLyBlYnNfcGVyZm9ybWFuY2VfbWF4aW11bV9iYW5kd2lkdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNQZXJmb3JtYW5jZU1heGltdW1CYW5kd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlYnNfcGVyZm9ybWFuY2VfbWF4aW11bV9iYW5kd2lkdGgnKTtcbiAgfVxuXG4gIC8vIGVic19wZXJmb3JtYW5jZV9tYXhpbXVtX2lvcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNQZXJmb3JtYW5jZU1heGltdW1Jb3BzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZWJzX3BlcmZvcm1hbmNlX21heGltdW1faW9wcycpO1xuICB9XG5cbiAgLy8gZWJzX3BlcmZvcm1hbmNlX21heGltdW1fdGhyb3VnaHB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic1BlcmZvcm1hbmNlTWF4aW11bVRocm91Z2hwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlYnNfcGVyZm9ybWFuY2VfbWF4aW11bV90aHJvdWdocHV0Jyk7XG4gIH1cblxuICAvLyBlZmFfc3VwcG9ydGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWZhU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VmYV9zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIC8vIGVuYV9zdXBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hU3VwcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuYV9zdXBwb3J0Jyk7XG4gIH1cblxuICAvLyBmcmVlX3RpZXJfZWxpZ2libGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmcmVlVGllckVsaWdpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZyZWVfdGllcl9lbGlnaWJsZScpO1xuICB9XG5cbiAgLy8gaGliZXJuYXRpb25fc3VwcG9ydGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGliZXJuYXRpb25TdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaGliZXJuYXRpb25fc3VwcG9ydGVkJyk7XG4gIH1cblxuICAvLyBoeXBlcnZpc29yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHlwZXJ2aXNvcj86IHN0cmluZztcbiAgcHVibGljIGdldCBoeXBlcnZpc29yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHlwZXJ2aXNvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaHlwZXJ2aXNvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faHlwZXJ2aXNvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh5cGVydmlzb3IoKSB7XG4gICAgdGhpcy5faHlwZXJ2aXNvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHlwZXJ2aXNvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oeXBlcnZpc29yXG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2Vfc3RvcmFnZV9zdXBwb3J0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnN0YW5jZVN0b3JhZ2VTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5zdGFuY2Vfc3RvcmFnZV9zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZVxuICB9XG5cbiAgLy8gaXB2Nl9zdXBwb3J0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcHY2U3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2lwdjZfc3VwcG9ydGVkJyk7XG4gIH1cblxuICAvLyBtYXhpbXVtX2lwdjRfYWRkcmVzc2VzX3Blcl9pbnRlcmZhY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhpbXVtSXB2NEFkZHJlc3Nlc1BlckludGVyZmFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1faXB2NF9hZGRyZXNzZXNfcGVyX2ludGVyZmFjZScpO1xuICB9XG5cbiAgLy8gbWF4aW11bV9pcHY2X2FkZHJlc3Nlc19wZXJfaW50ZXJmYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4aW11bUlwdjZBZGRyZXNzZXNQZXJJbnRlcmZhY2U/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgbWF4aW11bUlwdjZBZGRyZXNzZXNQZXJJbnRlcmZhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX2lwdjZfYWRkcmVzc2VzX3Blcl9pbnRlcmZhY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhpbXVtSXB2NkFkZHJlc3Nlc1BlckludGVyZmFjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlKCkge1xuICAgIHRoaXMuX21heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhpbXVtSXB2NkFkZHJlc3Nlc1BlckludGVyZmFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhpbXVtSXB2NkFkZHJlc3Nlc1BlckludGVyZmFjZVxuICB9XG5cbiAgLy8gbWF4aW11bV9uZXR3b3JrX2ludGVyZmFjZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhpbXVtTmV0d29ya0ludGVyZmFjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX25ldHdvcmtfaW50ZXJmYWNlcycpO1xuICB9XG5cbiAgLy8gbWVtb3J5X3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZW1vcnlTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWVtb3J5X3NpemUnKTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfcGVyZm9ybWFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrUGVyZm9ybWFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX3BlcmZvcm1hbmNlJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfYXJjaGl0ZWN0dXJlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEFyY2hpdGVjdHVyZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX2FyY2hpdGVjdHVyZXMnKTtcbiAgfVxuXG4gIC8vIHN1cHBvcnRlZF9wbGFjZW1lbnRfc3RyYXRlZ2llcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZFBsYWNlbWVudFN0cmF0ZWdpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX3BsYWNlbWVudF9zdHJhdGVnaWVzJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfcm9vdF9kZXZpY2VfdHlwZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRSb290RGV2aWNlVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX3Jvb3RfZGV2aWNlX3R5cGVzJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfdXNhZ2VzX2NsYXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRVc2FnZXNDbGFzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1cHBvcnRlZF91c2FnZXNfY2xhc3NlcycpO1xuICB9XG5cbiAgLy8gc3VwcG9ydGVkX3ZpcnR1YWxpemF0aW9uX3R5cGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkVmlydHVhbGl6YXRpb25UeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXBwb3J0ZWRfdmlydHVhbGl6YXRpb25fdHlwZXMnKTtcbiAgfVxuXG4gIC8vIHN1c3RhaW5lZF9jbG9ja19zcGVlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1c3RhaW5lZENsb2NrU3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzdXN0YWluZWRfY2xvY2tfc3BlZWQnKTtcbiAgfVxuXG4gIC8vIHRvdGFsX2ZwZ2FfbWVtb3J5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdG90YWxGcGdhTWVtb3J5PzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHRvdGFsRnBnYU1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvdGFsX2ZwZ2FfbWVtb3J5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0b3RhbEZwZ2FNZW1vcnkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsRnBnYU1lbW9yeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRvdGFsRnBnYU1lbW9yeSgpIHtcbiAgICB0aGlzLl90b3RhbEZwZ2FNZW1vcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRvdGFsRnBnYU1lbW9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEZwZ2FNZW1vcnlcbiAgfVxuXG4gIC8vIHRvdGFsX2dwdV9tZW1vcnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90b3RhbEdwdU1lbW9yeT86IG51bWJlcjtcbiAgcHVibGljIGdldCB0b3RhbEdwdU1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvdGFsX2dwdV9tZW1vcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRvdGFsR3B1TWVtb3J5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbEdwdU1lbW9yeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRvdGFsR3B1TWVtb3J5KCkge1xuICAgIHRoaXMuX3RvdGFsR3B1TWVtb3J5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0b3RhbEdwdU1lbW9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEdwdU1lbW9yeVxuICB9XG5cbiAgLy8gdG90YWxfaW5zdGFuY2Vfc3RvcmFnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RvdGFsSW5zdGFuY2VTdG9yYWdlPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHRvdGFsSW5zdGFuY2VTdG9yYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndG90YWxfaW5zdGFuY2Vfc3RvcmFnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdG90YWxJbnN0YW5jZVN0b3JhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsSW5zdGFuY2VTdG9yYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VG90YWxJbnN0YW5jZVN0b3JhZ2UoKSB7XG4gICAgdGhpcy5fdG90YWxJbnN0YW5jZVN0b3JhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRvdGFsSW5zdGFuY2VTdG9yYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSW5zdGFuY2VTdG9yYWdlXG4gIH1cblxuICAvLyB2YWxpZF9jb3JlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbGlkQ29yZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndmFsaWRfY29yZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2YWxpZF90aHJlYWRzX3Blcl9jb3JlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsaWRUaHJlYWRzUGVyQ29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2YWxpZF90aHJlYWRzX3Blcl9jb3JlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZnBnYXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZnBnYXM/OiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlRnBnYXNbXTtcbiAgcHVibGljIGdldCBmcGdhcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmcGdhcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZwZ2FzKHZhbHVlOiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlRnBnYXNbXSApIHtcbiAgICB0aGlzLl9mcGdhcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZwZ2FzKCkge1xuICAgIHRoaXMuX2ZwZ2FzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmcGdhc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mcGdhc1xuICB9XG5cbiAgLy8gZ3B1cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncHVzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUdwdXNbXTtcbiAgcHVibGljIGdldCBncHVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dwdXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBncHVzKHZhbHVlOiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlR3B1c1tdICkge1xuICAgIHRoaXMuX2dwdXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHcHVzKCkge1xuICAgIHRoaXMuX2dwdXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdwdXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3B1c1xuICB9XG5cbiAgLy8gaW5mZXJlbmNlX2FjY2VsZXJhdG9ycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmZlcmVuY2VBY2NlbGVyYXRvcnM/OiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlSW5mZXJlbmNlQWNjZWxlcmF0b3JzW107XG4gIHB1YmxpYyBnZXQgaW5mZXJlbmNlQWNjZWxlcmF0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luZmVyZW5jZV9hY2NlbGVyYXRvcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmZlcmVuY2VBY2NlbGVyYXRvcnModmFsdWU6IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVJbmZlcmVuY2VBY2NlbGVyYXRvcnNbXSApIHtcbiAgICB0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmZlcmVuY2VBY2NlbGVyYXRvcnMoKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlQWNjZWxlcmF0b3JzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmZlcmVuY2VBY2NlbGVyYXRvcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mZXJlbmNlQWNjZWxlcmF0b3JzXG4gIH1cblxuICAvLyBpbnN0YW5jZV9kaXNrcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZURpc2tzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3NbXTtcbiAgcHVibGljIGdldCBpbnN0YW5jZURpc2tzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luc3RhbmNlX2Rpc2tzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VEaXNrcyh2YWx1ZTogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3NbXSApIHtcbiAgICB0aGlzLl9pbnN0YW5jZURpc2tzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VEaXNrcygpIHtcbiAgICB0aGlzLl9pbnN0YW5jZURpc2tzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZURpc2tzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlRGlza3NcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdF9jb3JlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdENvcmVzKSxcbiAgICAgIGRlZmF1bHRfdGhyZWFkc19wZXJfY29yZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdFRocmVhZHNQZXJDb3JlKSxcbiAgICAgIGh5cGVydmlzb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2h5cGVydmlzb3IpLFxuICAgICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VUeXBlKSxcbiAgICAgIG1heGltdW1faXB2Nl9hZGRyZXNzZXNfcGVyX2ludGVyZmFjZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4aW11bUlwdjZBZGRyZXNzZXNQZXJJbnRlcmZhY2UpLFxuICAgICAgdG90YWxfZnBnYV9tZW1vcnk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3RvdGFsRnBnYU1lbW9yeSksXG4gICAgICB0b3RhbF9ncHVfbWVtb3J5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90b3RhbEdwdU1lbW9yeSksXG4gICAgICB0b3RhbF9pbnN0YW5jZV9zdG9yYWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90b3RhbEluc3RhbmNlU3RvcmFnZSksXG4gICAgICBmcGdhczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzRWMySW5zdGFuY2VUeXBlRnBnYXNUb1RlcnJhZm9ybSkodGhpcy5fZnBnYXMpLFxuICAgICAgZ3B1czogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzRWMySW5zdGFuY2VUeXBlR3B1c1RvVGVycmFmb3JtKSh0aGlzLl9ncHVzKSxcbiAgICAgIGluZmVyZW5jZV9hY2NlbGVyYXRvcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c0VjMkluc3RhbmNlVHlwZUluZmVyZW5jZUFjY2VsZXJhdG9yc1RvVGVycmFmb3JtKSh0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvcnMpLFxuICAgICAgaW5zdGFuY2VfZGlza3M6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3NUb1RlcnJhZm9ybSkodGhpcy5faW5zdGFuY2VEaXNrcyksXG4gICAgfTtcbiAgfVxufVxuIl19