import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpotInstanceRequestConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ami SpotInstanceRequest#ami}.
     */
    readonly ami: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}.
     */
    readonly associatePublicIpAddress?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#availability_zone SpotInstanceRequest#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#block_duration_minutes SpotInstanceRequest#block_duration_minutes}.
     */
    readonly blockDurationMinutes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_core_count SpotInstanceRequest#cpu_core_count}.
     */
    readonly cpuCoreCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}.
     */
    readonly cpuThreadsPerCore?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#disable_api_termination SpotInstanceRequest#disable_api_termination}.
     */
    readonly disableApiTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_optimized SpotInstanceRequest#ebs_optimized}.
     */
    readonly ebsOptimized?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#get_password_data SpotInstanceRequest#get_password_data}.
     */
    readonly fetchPasswordData?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#hibernation SpotInstanceRequest#hibernation}.
     */
    readonly hibernation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#host_id SpotInstanceRequest#host_id}.
     */
    readonly hostId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iam_instance_profile SpotInstanceRequest#iam_instance_profile}.
     */
    readonly iamInstanceProfile?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}.
     */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_interruption_behaviour SpotInstanceRequest#instance_interruption_behaviour}.
     */
    readonly instanceInterruptionBehaviour?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#instance_type SpotInstanceRequest#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_address_count SpotInstanceRequest#ipv6_address_count}.
     */
    readonly ipv6AddressCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ipv6_addresses SpotInstanceRequest#ipv6_addresses}.
     */
    readonly ipv6Addresses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#key_name SpotInstanceRequest#key_name}.
     */
    readonly keyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#launch_group SpotInstanceRequest#launch_group}.
     */
    readonly launchGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#monitoring SpotInstanceRequest#monitoring}.
     */
    readonly monitoring?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#placement_group SpotInstanceRequest#placement_group}.
     */
    readonly placementGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#private_ip SpotInstanceRequest#private_ip}.
     */
    readonly privateIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#secondary_private_ips SpotInstanceRequest#secondary_private_ips}.
     */
    readonly secondaryPrivateIps?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#security_groups SpotInstanceRequest#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#source_dest_check SpotInstanceRequest#source_dest_check}.
     */
    readonly sourceDestCheck?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_price SpotInstanceRequest#spot_price}.
     */
    readonly spotPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#spot_type SpotInstanceRequest#spot_type}.
     */
    readonly spotType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#subnet_id SpotInstanceRequest#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags_all SpotInstanceRequest#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tenancy SpotInstanceRequest#tenancy}.
     */
    readonly tenancy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data SpotInstanceRequest#user_data}.
     */
    readonly userData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#user_data_base64 SpotInstanceRequest#user_data_base64}.
     */
    readonly userDataBase64?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_from SpotInstanceRequest#valid_from}.
     */
    readonly validFrom?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#valid_until SpotInstanceRequest#valid_until}.
     */
    readonly validUntil?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_tags SpotInstanceRequest#volume_tags}.
     */
    readonly volumeTags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}.
     */
    readonly waitForFulfillment?: boolean;
    /**
     * credit_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#credit_specification SpotInstanceRequest#credit_specification}
     */
    readonly creditSpecification?: SpotInstanceRequestCreditSpecification[];
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ebs_block_device SpotInstanceRequest#ebs_block_device}
     */
    readonly ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[];
    /**
     * enclave_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enclave_options SpotInstanceRequest#enclave_options}
     */
    readonly enclaveOptions?: SpotInstanceRequestEnclaveOptions[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[];
    /**
     * metadata_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#metadata_options SpotInstanceRequest#metadata_options}
     */
    readonly metadataOptions?: SpotInstanceRequestMetadataOptions[];
    /**
     * network_interface block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface SpotInstanceRequest#network_interface}
     */
    readonly networkInterface?: SpotInstanceRequestNetworkInterface[];
    /**
     * root_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#root_block_device SpotInstanceRequest#root_block_device}
     */
    readonly rootBlockDevice?: SpotInstanceRequestRootBlockDevice[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#timeouts SpotInstanceRequest#timeouts}
     */
    readonly timeouts?: SpotInstanceRequestTimeouts;
}
export interface SpotInstanceRequestCreditSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#cpu_credits SpotInstanceRequest#cpu_credits}.
     */
    readonly cpuCredits?: string;
}
export interface SpotInstanceRequestEbsBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#snapshot_id SpotInstanceRequest#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}.
     */
    readonly volumeType?: string;
}
export interface SpotInstanceRequestEnclaveOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#enabled SpotInstanceRequest#enabled}.
     */
    readonly enabled?: boolean;
}
export interface SpotInstanceRequestEphemeralBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_name SpotInstanceRequest#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#no_device SpotInstanceRequest#no_device}.
     */
    readonly noDevice?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#virtual_name SpotInstanceRequest#virtual_name}.
     */
    readonly virtualName?: string;
}
export interface SpotInstanceRequestMetadataOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_endpoint SpotInstanceRequest#http_endpoint}.
     */
    readonly httpEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}.
     */
    readonly httpPutResponseHopLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#http_tokens SpotInstanceRequest#http_tokens}.
     */
    readonly httpTokens?: string;
}
export interface SpotInstanceRequestNetworkInterface {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#device_index SpotInstanceRequest#device_index}.
     */
    readonly deviceIndex: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#network_interface_id SpotInstanceRequest#network_interface_id}.
     */
    readonly networkInterfaceId: string;
}
export interface SpotInstanceRequestRootBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete_on_termination SpotInstanceRequest#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#encrypted SpotInstanceRequest#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#iops SpotInstanceRequest#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#kms_key_id SpotInstanceRequest#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#tags SpotInstanceRequest#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#throughput SpotInstanceRequest#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_size SpotInstanceRequest#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#volume_type SpotInstanceRequest#volume_type}.
     */
    readonly volumeType?: string;
}
export interface SpotInstanceRequestTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#create SpotInstanceRequest#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html#delete SpotInstanceRequest#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request}.
 */
export declare class SpotInstanceRequest extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SpotInstanceRequestConfig);
    private _ami;
    get ami(): string;
    set ami(value: string);
    get amiInput(): string;
    get arn(): string;
    private _associatePublicIpAddress?;
    get associatePublicIpAddress(): boolean;
    set associatePublicIpAddress(value: boolean);
    resetAssociatePublicIpAddress(): void;
    get associatePublicIpAddressInput(): boolean | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number | undefined;
    private _cpuCoreCount?;
    get cpuCoreCount(): number;
    set cpuCoreCount(value: number);
    resetCpuCoreCount(): void;
    get cpuCoreCountInput(): number | undefined;
    private _cpuThreadsPerCore?;
    get cpuThreadsPerCore(): number;
    set cpuThreadsPerCore(value: number);
    resetCpuThreadsPerCore(): void;
    get cpuThreadsPerCoreInput(): number | undefined;
    private _disableApiTermination?;
    get disableApiTermination(): boolean;
    set disableApiTermination(value: boolean);
    resetDisableApiTermination(): void;
    get disableApiTerminationInput(): boolean | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean;
    set ebsOptimized(value: boolean);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | undefined;
    private _getPasswordData?;
    get fetchPasswordData(): boolean;
    set fetchPasswordData(value: boolean);
    resetFetchPasswordData(): void;
    get fetchPasswordDataInput(): boolean | undefined;
    private _hibernation?;
    get hibernation(): boolean;
    set hibernation(value: boolean);
    resetHibernation(): void;
    get hibernationInput(): boolean | undefined;
    private _hostId?;
    get hostId(): string;
    set hostId(value: string);
    resetHostId(): void;
    get hostIdInput(): string | undefined;
    private _iamInstanceProfile?;
    get iamInstanceProfile(): string;
    set iamInstanceProfile(value: string);
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): string | undefined;
    get id(): string;
    private _instanceInitiatedShutdownBehavior?;
    get instanceInitiatedShutdownBehavior(): string;
    set instanceInitiatedShutdownBehavior(value: string);
    resetInstanceInitiatedShutdownBehavior(): void;
    get instanceInitiatedShutdownBehaviorInput(): string | undefined;
    private _instanceInterruptionBehaviour?;
    get instanceInterruptionBehaviour(): string;
    set instanceInterruptionBehaviour(value: string);
    resetInstanceInterruptionBehaviour(): void;
    get instanceInterruptionBehaviourInput(): string | undefined;
    get instanceState(): string;
    private _instanceType;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _ipv6AddressCount?;
    get ipv6AddressCount(): number;
    set ipv6AddressCount(value: number);
    resetIpv6AddressCount(): void;
    get ipv6AddressCountInput(): number | undefined;
    private _ipv6Addresses?;
    get ipv6Addresses(): string[];
    set ipv6Addresses(value: string[]);
    resetIpv6Addresses(): void;
    get ipv6AddressesInput(): string[] | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    private _launchGroup?;
    get launchGroup(): string;
    set launchGroup(value: string);
    resetLaunchGroup(): void;
    get launchGroupInput(): string | undefined;
    private _monitoring?;
    get monitoring(): boolean;
    set monitoring(value: boolean);
    resetMonitoring(): void;
    get monitoringInput(): boolean | undefined;
    get outpostArn(): string;
    get passwordData(): string;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    get primaryNetworkInterfaceId(): string;
    get privateDns(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string | undefined;
    get publicDns(): string;
    get publicIp(): string;
    private _secondaryPrivateIps?;
    get secondaryPrivateIps(): string[];
    set secondaryPrivateIps(value: string[]);
    resetSecondaryPrivateIps(): void;
    get secondaryPrivateIpsInput(): string[] | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _sourceDestCheck?;
    get sourceDestCheck(): boolean;
    set sourceDestCheck(value: boolean);
    resetSourceDestCheck(): void;
    get sourceDestCheckInput(): boolean | undefined;
    get spotBidStatus(): string;
    get spotInstanceId(): string;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
    get spotRequestState(): string;
    private _spotType?;
    get spotType(): string;
    set spotType(value: string);
    resetSpotType(): void;
    get spotTypeInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string | undefined;
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string | undefined;
    private _userDataBase64?;
    get userDataBase64(): string;
    set userDataBase64(value: string);
    resetUserDataBase64(): void;
    get userDataBase64Input(): string | undefined;
    private _validFrom?;
    get validFrom(): string;
    set validFrom(value: string);
    resetValidFrom(): void;
    get validFromInput(): string | undefined;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string | undefined;
    private _volumeTags?;
    get volumeTags(): {
        [key: string]: string;
    };
    set volumeTags(value: {
        [key: string]: string;
    });
    resetVolumeTags(): void;
    get volumeTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _waitForFulfillment?;
    get waitForFulfillment(): boolean;
    set waitForFulfillment(value: boolean);
    resetWaitForFulfillment(): void;
    get waitForFulfillmentInput(): boolean | undefined;
    private _creditSpecification?;
    get creditSpecification(): SpotInstanceRequestCreditSpecification[];
    set creditSpecification(value: SpotInstanceRequestCreditSpecification[]);
    resetCreditSpecification(): void;
    get creditSpecificationInput(): SpotInstanceRequestCreditSpecification[] | undefined;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): SpotInstanceRequestEbsBlockDevice[];
    set ebsBlockDevice(value: SpotInstanceRequestEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): SpotInstanceRequestEbsBlockDevice[] | undefined;
    private _enclaveOptions?;
    get enclaveOptions(): SpotInstanceRequestEnclaveOptions[];
    set enclaveOptions(value: SpotInstanceRequestEnclaveOptions[]);
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): SpotInstanceRequestEnclaveOptions[] | undefined;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): SpotInstanceRequestEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: SpotInstanceRequestEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): SpotInstanceRequestEphemeralBlockDevice[] | undefined;
    private _metadataOptions?;
    get metadataOptions(): SpotInstanceRequestMetadataOptions[];
    set metadataOptions(value: SpotInstanceRequestMetadataOptions[]);
    resetMetadataOptions(): void;
    get metadataOptionsInput(): SpotInstanceRequestMetadataOptions[] | undefined;
    private _networkInterface?;
    get networkInterface(): SpotInstanceRequestNetworkInterface[];
    set networkInterface(value: SpotInstanceRequestNetworkInterface[]);
    resetNetworkInterface(): void;
    get networkInterfaceInput(): SpotInstanceRequestNetworkInterface[] | undefined;
    private _rootBlockDevice?;
    get rootBlockDevice(): SpotInstanceRequestRootBlockDevice[];
    set rootBlockDevice(value: SpotInstanceRequestRootBlockDevice[]);
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): SpotInstanceRequestRootBlockDevice[] | undefined;
    private _timeouts?;
    get timeouts(): SpotInstanceRequestTimeouts;
    set timeouts(value: SpotInstanceRequestTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): SpotInstanceRequestTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
