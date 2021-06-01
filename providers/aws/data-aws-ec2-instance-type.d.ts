import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2InstanceTypeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#default_cores DataAwsEc2InstanceType#default_cores}.
     */
    readonly defaultCores?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#default_threads_per_core DataAwsEc2InstanceType#default_threads_per_core}.
     */
    readonly defaultThreadsPerCore?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#hypervisor DataAwsEc2InstanceType#hypervisor}.
     */
    readonly hypervisor?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#instance_type DataAwsEc2InstanceType#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#maximum_ipv6_addresses_per_interface DataAwsEc2InstanceType#maximum_ipv6_addresses_per_interface}.
     */
    readonly maximumIpv6AddressesPerInterface?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#total_fpga_memory DataAwsEc2InstanceType#total_fpga_memory}.
     */
    readonly totalFpgaMemory?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#total_gpu_memory DataAwsEc2InstanceType#total_gpu_memory}.
     */
    readonly totalGpuMemory?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#total_instance_storage DataAwsEc2InstanceType#total_instance_storage}.
     */
    readonly totalInstanceStorage?: number;
    /**
     * fpgas block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#fpgas DataAwsEc2InstanceType#fpgas}
     */
    readonly fpgas?: DataAwsEc2InstanceTypeFpgas[];
    /**
     * gpus block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#gpus DataAwsEc2InstanceType#gpus}
     */
    readonly gpus?: DataAwsEc2InstanceTypeGpus[];
    /**
     * inference_accelerators block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#inference_accelerators DataAwsEc2InstanceType#inference_accelerators}
     */
    readonly inferenceAccelerators?: DataAwsEc2InstanceTypeInferenceAccelerators[];
    /**
     * instance_disks block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html#instance_disks DataAwsEc2InstanceType#instance_disks}
     */
    readonly instanceDisks?: DataAwsEc2InstanceTypeInstanceDisks[];
}
export interface DataAwsEc2InstanceTypeFpgas {
}
export interface DataAwsEc2InstanceTypeGpus {
}
export interface DataAwsEc2InstanceTypeInferenceAccelerators {
}
export interface DataAwsEc2InstanceTypeInstanceDisks {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type}.
 */
export declare class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig);
    get autoRecoverySupported(): boolean;
    get bareMetal(): boolean;
    get burstablePerformanceSupported(): boolean;
    get currentGeneration(): boolean;
    get dedicatedHostsSupported(): boolean;
    private _defaultCores?;
    get defaultCores(): number;
    set defaultCores(value: number);
    resetDefaultCores(): void;
    get defaultCoresInput(): number | undefined;
    private _defaultThreadsPerCore?;
    get defaultThreadsPerCore(): number;
    set defaultThreadsPerCore(value: number);
    resetDefaultThreadsPerCore(): void;
    get defaultThreadsPerCoreInput(): number | undefined;
    get defaultVcpus(): number;
    get ebsEncryptionSupport(): string;
    get ebsNvmeSupport(): string;
    get ebsOptimizedSupport(): string;
    get ebsPerformanceBaselineBandwidth(): number;
    get ebsPerformanceBaselineIops(): number;
    get ebsPerformanceBaselineThroughput(): number;
    get ebsPerformanceMaximumBandwidth(): number;
    get ebsPerformanceMaximumIops(): number;
    get ebsPerformanceMaximumThroughput(): number;
    get efaSupported(): boolean;
    get enaSupport(): string;
    get freeTierEligible(): boolean;
    get hibernationSupported(): boolean;
    private _hypervisor?;
    get hypervisor(): string;
    set hypervisor(value: string);
    resetHypervisor(): void;
    get hypervisorInput(): string | undefined;
    get id(): string;
    get instanceStorageSupported(): boolean;
    private _instanceType;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    get ipv6Supported(): boolean;
    get maximumIpv4AddressesPerInterface(): number;
    private _maximumIpv6AddressesPerInterface?;
    get maximumIpv6AddressesPerInterface(): number;
    set maximumIpv6AddressesPerInterface(value: number);
    resetMaximumIpv6AddressesPerInterface(): void;
    get maximumIpv6AddressesPerInterfaceInput(): number | undefined;
    get maximumNetworkInterfaces(): number;
    get memorySize(): number;
    get networkPerformance(): string;
    get supportedArchitectures(): string[];
    get supportedPlacementStrategies(): string[];
    get supportedRootDeviceTypes(): string[];
    get supportedUsagesClasses(): string[];
    get supportedVirtualizationTypes(): string[];
    get sustainedClockSpeed(): number;
    private _totalFpgaMemory?;
    get totalFpgaMemory(): number;
    set totalFpgaMemory(value: number);
    resetTotalFpgaMemory(): void;
    get totalFpgaMemoryInput(): number | undefined;
    private _totalGpuMemory?;
    get totalGpuMemory(): number;
    set totalGpuMemory(value: number);
    resetTotalGpuMemory(): void;
    get totalGpuMemoryInput(): number | undefined;
    private _totalInstanceStorage?;
    get totalInstanceStorage(): number;
    set totalInstanceStorage(value: number);
    resetTotalInstanceStorage(): void;
    get totalInstanceStorageInput(): number | undefined;
    get validCores(): any;
    get validThreadsPerCore(): any;
    private _fpgas?;
    get fpgas(): DataAwsEc2InstanceTypeFpgas[];
    set fpgas(value: DataAwsEc2InstanceTypeFpgas[]);
    resetFpgas(): void;
    get fpgasInput(): DataAwsEc2InstanceTypeFpgas[] | undefined;
    private _gpus?;
    get gpus(): DataAwsEc2InstanceTypeGpus[];
    set gpus(value: DataAwsEc2InstanceTypeGpus[]);
    resetGpus(): void;
    get gpusInput(): DataAwsEc2InstanceTypeGpus[] | undefined;
    private _inferenceAccelerators?;
    get inferenceAccelerators(): DataAwsEc2InstanceTypeInferenceAccelerators[];
    set inferenceAccelerators(value: DataAwsEc2InstanceTypeInferenceAccelerators[]);
    resetInferenceAccelerators(): void;
    get inferenceAcceleratorsInput(): DataAwsEc2InstanceTypeInferenceAccelerators[] | undefined;
    private _instanceDisks?;
    get instanceDisks(): DataAwsEc2InstanceTypeInstanceDisks[];
    set instanceDisks(value: DataAwsEc2InstanceTypeInstanceDisks[]);
    resetInstanceDisks(): void;
    get instanceDisksInput(): DataAwsEc2InstanceTypeInstanceDisks[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
