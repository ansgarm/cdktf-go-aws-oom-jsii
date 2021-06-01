import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#default_version LaunchTemplate#default_version}.
     */
    readonly defaultVersion?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#disable_api_termination LaunchTemplate#disable_api_termination}.
     */
    readonly disableApiTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs_optimized LaunchTemplate#ebs_optimized}.
     */
    readonly ebsOptimized?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#image_id LaunchTemplate#image_id}.
     */
    readonly imageId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}.
     */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_type LaunchTemplate#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kernel_id LaunchTemplate#kernel_id}.
     */
    readonly kernelId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#key_name LaunchTemplate#key_name}.
     */
    readonly keyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name_prefix LaunchTemplate#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ram_disk_id LaunchTemplate#ram_disk_id}.
     */
    readonly ramDiskId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_group_names LaunchTemplate#security_group_names}.
     */
    readonly securityGroupNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags_all LaunchTemplate#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#update_default_version LaunchTemplate#update_default_version}.
     */
    readonly updateDefaultVersion?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#user_data LaunchTemplate#user_data}.
     */
    readonly userData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * block_device_mappings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_device_mappings LaunchTemplate#block_device_mappings}
     */
    readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[];
    /**
     * capacity_reservation_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}
     */
    readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification[];
    /**
     * cpu_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_options LaunchTemplate#cpu_options}
     */
    readonly cpuOptions?: LaunchTemplateCpuOptions[];
    /**
     * credit_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#credit_specification LaunchTemplate#credit_specification}
     */
    readonly creditSpecification?: LaunchTemplateCreditSpecification[];
    /**
     * elastic_gpu_specifications block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}
     */
    readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[];
    /**
     * elastic_inference_accelerator block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}
     */
    readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator[];
    /**
     * enclave_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enclave_options LaunchTemplate#enclave_options}
     */
    readonly enclaveOptions?: LaunchTemplateEnclaveOptions[];
    /**
     * hibernation_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#hibernation_options LaunchTemplate#hibernation_options}
     */
    readonly hibernationOptions?: LaunchTemplateHibernationOptions[];
    /**
     * iam_instance_profile block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iam_instance_profile LaunchTemplate#iam_instance_profile}
     */
    readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile[];
    /**
     * instance_market_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_market_options LaunchTemplate#instance_market_options}
     */
    readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions[];
    /**
     * license_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_specification LaunchTemplate#license_specification}
     */
    readonly licenseSpecification?: LaunchTemplateLicenseSpecification[];
    /**
     * metadata_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#metadata_options LaunchTemplate#metadata_options}
     */
    readonly metadataOptions?: LaunchTemplateMetadataOptions[];
    /**
     * monitoring block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#monitoring LaunchTemplate#monitoring}
     */
    readonly monitoring?: LaunchTemplateMonitoring[];
    /**
     * network_interfaces block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interfaces LaunchTemplate#network_interfaces}
     */
    readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[];
    /**
     * placement block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#placement LaunchTemplate#placement}
     */
    readonly placement?: LaunchTemplatePlacement[];
    /**
     * tag_specifications block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tag_specifications LaunchTemplate#tag_specifications}
     */
    readonly tagSpecifications?: LaunchTemplateTagSpecifications[];
}
export interface LaunchTemplateBlockDeviceMappingsEbs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}.
     */
    readonly deleteOnTermination?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#encrypted LaunchTemplate#encrypted}.
     */
    readonly encrypted?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#iops LaunchTemplate#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#kms_key_id LaunchTemplate#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#snapshot_id LaunchTemplate#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#throughput LaunchTemplate#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_size LaunchTemplate#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#volume_type LaunchTemplate#volume_type}.
     */
    readonly volumeType?: string;
}
export interface LaunchTemplateBlockDeviceMappings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_name LaunchTemplate#device_name}.
     */
    readonly deviceName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#no_device LaunchTemplate#no_device}.
     */
    readonly noDevice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#virtual_name LaunchTemplate#virtual_name}.
     */
    readonly virtualName?: string;
    /**
     * ebs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ebs LaunchTemplate#ebs}
     */
    readonly ebs?: LaunchTemplateBlockDeviceMappingsEbs[];
}
export interface LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_id LaunchTemplate#capacity_reservation_id}.
     */
    readonly capacityReservationId?: string;
}
export interface LaunchTemplateCapacityReservationSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}.
     */
    readonly capacityReservationPreference?: string;
    /**
     * capacity_reservation_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#capacity_reservation_target LaunchTemplate#capacity_reservation_target}
     */
    readonly capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget[];
}
export interface LaunchTemplateCpuOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#core_count LaunchTemplate#core_count}.
     */
    readonly coreCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#threads_per_core LaunchTemplate#threads_per_core}.
     */
    readonly threadsPerCore?: number;
}
export interface LaunchTemplateCreditSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#cpu_credits LaunchTemplate#cpu_credits}.
     */
    readonly cpuCredits?: string;
}
export interface LaunchTemplateElasticGpuSpecifications {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}.
     */
    readonly type: string;
}
export interface LaunchTemplateElasticInferenceAccelerator {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#type LaunchTemplate#type}.
     */
    readonly type: string;
}
export interface LaunchTemplateEnclaveOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}.
     */
    readonly enabled?: boolean;
}
export interface LaunchTemplateHibernationOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#configured LaunchTemplate#configured}.
     */
    readonly configured: boolean;
}
export interface LaunchTemplateIamInstanceProfile {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#arn LaunchTemplate#arn}.
     */
    readonly arn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#name LaunchTemplate#name}.
     */
    readonly name?: string;
}
export interface LaunchTemplateInstanceMarketOptionsSpotOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#block_duration_minutes LaunchTemplate#block_duration_minutes}.
     */
    readonly blockDurationMinutes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}.
     */
    readonly instanceInterruptionBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#max_price LaunchTemplate#max_price}.
     */
    readonly maxPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_instance_type LaunchTemplate#spot_instance_type}.
     */
    readonly spotInstanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#valid_until LaunchTemplate#valid_until}.
     */
    readonly validUntil?: string;
}
export interface LaunchTemplateInstanceMarketOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#market_type LaunchTemplate#market_type}.
     */
    readonly marketType?: string;
    /**
     * spot_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spot_options LaunchTemplate#spot_options}
     */
    readonly spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions[];
}
export interface LaunchTemplateLicenseSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#license_configuration_arn LaunchTemplate#license_configuration_arn}.
     */
    readonly licenseConfigurationArn: string;
}
export interface LaunchTemplateMetadataOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_endpoint LaunchTemplate#http_endpoint}.
     */
    readonly httpEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}.
     */
    readonly httpPutResponseHopLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#http_tokens LaunchTemplate#http_tokens}.
     */
    readonly httpTokens?: string;
}
export interface LaunchTemplateMonitoring {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#enabled LaunchTemplate#enabled}.
     */
    readonly enabled?: boolean;
}
export interface LaunchTemplateNetworkInterfaces {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}.
     */
    readonly associateCarrierIpAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#associate_public_ip_address LaunchTemplate#associate_public_ip_address}.
     */
    readonly associatePublicIpAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#delete_on_termination LaunchTemplate#delete_on_termination}.
     */
    readonly deleteOnTermination?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#description LaunchTemplate#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#device_index LaunchTemplate#device_index}.
     */
    readonly deviceIndex?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_address_count LaunchTemplate#ipv4_address_count}.
     */
    readonly ipv4AddressCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv4_addresses LaunchTemplate#ipv4_addresses}.
     */
    readonly ipv4Addresses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_address_count LaunchTemplate#ipv6_address_count}.
     */
    readonly ipv6AddressCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#ipv6_addresses LaunchTemplate#ipv6_addresses}.
     */
    readonly ipv6Addresses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#network_interface_id LaunchTemplate#network_interface_id}.
     */
    readonly networkInterfaceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#private_ip_address LaunchTemplate#private_ip_address}.
     */
    readonly privateIpAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#security_groups LaunchTemplate#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#subnet_id LaunchTemplate#subnet_id}.
     */
    readonly subnetId?: string;
}
export interface LaunchTemplatePlacement {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#affinity LaunchTemplate#affinity}.
     */
    readonly affinity?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#availability_zone LaunchTemplate#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#group_name LaunchTemplate#group_name}.
     */
    readonly groupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_id LaunchTemplate#host_id}.
     */
    readonly hostId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#host_resource_group_arn LaunchTemplate#host_resource_group_arn}.
     */
    readonly hostResourceGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#partition_number LaunchTemplate#partition_number}.
     */
    readonly partitionNumber?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#spread_domain LaunchTemplate#spread_domain}.
     */
    readonly spreadDomain?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tenancy LaunchTemplate#tenancy}.
     */
    readonly tenancy?: string;
}
export interface LaunchTemplateTagSpecifications {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#resource_type LaunchTemplate#resource_type}.
     */
    readonly resourceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html#tags LaunchTemplate#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template}.
 */
export declare class LaunchTemplate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: LaunchTemplateConfig);
    get arn(): string;
    private _defaultVersion?;
    get defaultVersion(): number;
    set defaultVersion(value: number);
    resetDefaultVersion(): void;
    get defaultVersionInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _disableApiTermination?;
    get disableApiTermination(): boolean;
    set disableApiTermination(value: boolean);
    resetDisableApiTermination(): void;
    get disableApiTerminationInput(): boolean | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): string;
    set ebsOptimized(value: string);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): string | undefined;
    get id(): string;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    resetImageId(): void;
    get imageIdInput(): string | undefined;
    private _instanceInitiatedShutdownBehavior?;
    get instanceInitiatedShutdownBehavior(): string;
    set instanceInitiatedShutdownBehavior(value: string);
    resetInstanceInitiatedShutdownBehavior(): void;
    get instanceInitiatedShutdownBehaviorInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _kernelId?;
    get kernelId(): string;
    set kernelId(value: string);
    resetKernelId(): void;
    get kernelIdInput(): string | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    get latestVersion(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _ramDiskId?;
    get ramDiskId(): string;
    set ramDiskId(value: string);
    resetRamDiskId(): void;
    get ramDiskIdInput(): string | undefined;
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[] | undefined;
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
    private _updateDefaultVersion?;
    get updateDefaultVersion(): boolean;
    set updateDefaultVersion(value: boolean);
    resetUpdateDefaultVersion(): void;
    get updateDefaultVersionInput(): boolean | undefined;
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _blockDeviceMappings?;
    get blockDeviceMappings(): LaunchTemplateBlockDeviceMappings[];
    set blockDeviceMappings(value: LaunchTemplateBlockDeviceMappings[]);
    resetBlockDeviceMappings(): void;
    get blockDeviceMappingsInput(): LaunchTemplateBlockDeviceMappings[] | undefined;
    private _capacityReservationSpecification?;
    get capacityReservationSpecification(): LaunchTemplateCapacityReservationSpecification[];
    set capacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification[]);
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): LaunchTemplateCapacityReservationSpecification[] | undefined;
    private _cpuOptions?;
    get cpuOptions(): LaunchTemplateCpuOptions[];
    set cpuOptions(value: LaunchTemplateCpuOptions[]);
    resetCpuOptions(): void;
    get cpuOptionsInput(): LaunchTemplateCpuOptions[] | undefined;
    private _creditSpecification?;
    get creditSpecification(): LaunchTemplateCreditSpecification[];
    set creditSpecification(value: LaunchTemplateCreditSpecification[]);
    resetCreditSpecification(): void;
    get creditSpecificationInput(): LaunchTemplateCreditSpecification[] | undefined;
    private _elasticGpuSpecifications?;
    get elasticGpuSpecifications(): LaunchTemplateElasticGpuSpecifications[];
    set elasticGpuSpecifications(value: LaunchTemplateElasticGpuSpecifications[]);
    resetElasticGpuSpecifications(): void;
    get elasticGpuSpecificationsInput(): LaunchTemplateElasticGpuSpecifications[] | undefined;
    private _elasticInferenceAccelerator?;
    get elasticInferenceAccelerator(): LaunchTemplateElasticInferenceAccelerator[];
    set elasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator[]);
    resetElasticInferenceAccelerator(): void;
    get elasticInferenceAcceleratorInput(): LaunchTemplateElasticInferenceAccelerator[] | undefined;
    private _enclaveOptions?;
    get enclaveOptions(): LaunchTemplateEnclaveOptions[];
    set enclaveOptions(value: LaunchTemplateEnclaveOptions[]);
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): LaunchTemplateEnclaveOptions[] | undefined;
    private _hibernationOptions?;
    get hibernationOptions(): LaunchTemplateHibernationOptions[];
    set hibernationOptions(value: LaunchTemplateHibernationOptions[]);
    resetHibernationOptions(): void;
    get hibernationOptionsInput(): LaunchTemplateHibernationOptions[] | undefined;
    private _iamInstanceProfile?;
    get iamInstanceProfile(): LaunchTemplateIamInstanceProfile[];
    set iamInstanceProfile(value: LaunchTemplateIamInstanceProfile[]);
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): LaunchTemplateIamInstanceProfile[] | undefined;
    private _instanceMarketOptions?;
    get instanceMarketOptions(): LaunchTemplateInstanceMarketOptions[];
    set instanceMarketOptions(value: LaunchTemplateInstanceMarketOptions[]);
    resetInstanceMarketOptions(): void;
    get instanceMarketOptionsInput(): LaunchTemplateInstanceMarketOptions[] | undefined;
    private _licenseSpecification?;
    get licenseSpecification(): LaunchTemplateLicenseSpecification[];
    set licenseSpecification(value: LaunchTemplateLicenseSpecification[]);
    resetLicenseSpecification(): void;
    get licenseSpecificationInput(): LaunchTemplateLicenseSpecification[] | undefined;
    private _metadataOptions?;
    get metadataOptions(): LaunchTemplateMetadataOptions[];
    set metadataOptions(value: LaunchTemplateMetadataOptions[]);
    resetMetadataOptions(): void;
    get metadataOptionsInput(): LaunchTemplateMetadataOptions[] | undefined;
    private _monitoring?;
    get monitoring(): LaunchTemplateMonitoring[];
    set monitoring(value: LaunchTemplateMonitoring[]);
    resetMonitoring(): void;
    get monitoringInput(): LaunchTemplateMonitoring[] | undefined;
    private _networkInterfaces?;
    get networkInterfaces(): LaunchTemplateNetworkInterfaces[];
    set networkInterfaces(value: LaunchTemplateNetworkInterfaces[]);
    resetNetworkInterfaces(): void;
    get networkInterfacesInput(): LaunchTemplateNetworkInterfaces[] | undefined;
    private _placement?;
    get placement(): LaunchTemplatePlacement[];
    set placement(value: LaunchTemplatePlacement[]);
    resetPlacement(): void;
    get placementInput(): LaunchTemplatePlacement[] | undefined;
    private _tagSpecifications?;
    get tagSpecifications(): LaunchTemplateTagSpecifications[];
    set tagSpecifications(value: LaunchTemplateTagSpecifications[]);
    resetTagSpecifications(): void;
    get tagSpecificationsInput(): LaunchTemplateTagSpecifications[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
