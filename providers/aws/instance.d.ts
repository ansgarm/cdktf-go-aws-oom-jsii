import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ami Instance#ami}.
     */
    readonly ami: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#associate_public_ip_address Instance#associate_public_ip_address}.
     */
    readonly associatePublicIpAddress?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#availability_zone Instance#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_core_count Instance#cpu_core_count}.
     */
    readonly cpuCoreCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_threads_per_core Instance#cpu_threads_per_core}.
     */
    readonly cpuThreadsPerCore?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#disable_api_termination Instance#disable_api_termination}.
     */
    readonly disableApiTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_optimized Instance#ebs_optimized}.
     */
    readonly ebsOptimized?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#get_password_data Instance#get_password_data}.
     */
    readonly fetchPasswordData?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#hibernation Instance#hibernation}.
     */
    readonly hibernation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#host_id Instance#host_id}.
     */
    readonly hostId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iam_instance_profile Instance#iam_instance_profile}.
     */
    readonly iamInstanceProfile?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.
     */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#instance_type Instance#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_address_count Instance#ipv6_address_count}.
     */
    readonly ipv6AddressCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ipv6_addresses Instance#ipv6_addresses}.
     */
    readonly ipv6Addresses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#key_name Instance#key_name}.
     */
    readonly keyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#monitoring Instance#monitoring}.
     */
    readonly monitoring?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#placement_group Instance#placement_group}.
     */
    readonly placementGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#private_ip Instance#private_ip}.
     */
    readonly privateIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#secondary_private_ips Instance#secondary_private_ips}.
     */
    readonly secondaryPrivateIps?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#security_groups Instance#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#source_dest_check Instance#source_dest_check}.
     */
    readonly sourceDestCheck?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#subnet_id Instance#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags_all Instance#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tenancy Instance#tenancy}.
     */
    readonly tenancy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data Instance#user_data}.
     */
    readonly userData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#user_data_base64 Instance#user_data_base64}.
     */
    readonly userDataBase64?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_tags Instance#volume_tags}.
     */
    readonly volumeTags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#vpc_security_group_ids Instance#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * credit_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#credit_specification Instance#credit_specification}
     */
    readonly creditSpecification?: InstanceCreditSpecification[];
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ebs_block_device Instance#ebs_block_device}
     */
    readonly ebsBlockDevice?: InstanceEbsBlockDevice[];
    /**
     * enclave_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enclave_options Instance#enclave_options}
     */
    readonly enclaveOptions?: InstanceEnclaveOptions[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#ephemeral_block_device Instance#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: InstanceEphemeralBlockDevice[];
    /**
     * metadata_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#metadata_options Instance#metadata_options}
     */
    readonly metadataOptions?: InstanceMetadataOptions[];
    /**
     * network_interface block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface Instance#network_interface}
     */
    readonly networkInterface?: InstanceNetworkInterface[];
    /**
     * root_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#root_block_device Instance#root_block_device}
     */
    readonly rootBlockDevice?: InstanceRootBlockDevice[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#timeouts Instance#timeouts}
     */
    readonly timeouts?: InstanceTimeouts;
}
export interface InstanceCreditSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#cpu_credits Instance#cpu_credits}.
     */
    readonly cpuCredits?: string;
}
export interface InstanceEbsBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#snapshot_id Instance#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}.
     */
    readonly volumeType?: string;
}
export interface InstanceEnclaveOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#enabled Instance#enabled}.
     */
    readonly enabled?: boolean;
}
export interface InstanceEphemeralBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_name Instance#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#no_device Instance#no_device}.
     */
    readonly noDevice?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#virtual_name Instance#virtual_name}.
     */
    readonly virtualName?: string;
}
export interface InstanceMetadataOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_endpoint Instance#http_endpoint}.
     */
    readonly httpEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_put_response_hop_limit Instance#http_put_response_hop_limit}.
     */
    readonly httpPutResponseHopLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#http_tokens Instance#http_tokens}.
     */
    readonly httpTokens?: string;
}
export interface InstanceNetworkInterface {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#device_index Instance#device_index}.
     */
    readonly deviceIndex: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#network_interface_id Instance#network_interface_id}.
     */
    readonly networkInterfaceId: string;
}
export interface InstanceRootBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete_on_termination Instance#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#encrypted Instance#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#iops Instance#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#kms_key_id Instance#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#tags Instance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#throughput Instance#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_size Instance#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#volume_type Instance#volume_type}.
     */
    readonly volumeType?: string;
}
export interface InstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#create Instance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#delete Instance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/instance.html#update Instance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance}.
 */
export declare class Instance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: InstanceConfig);
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
    private _creditSpecification?;
    get creditSpecification(): InstanceCreditSpecification[];
    set creditSpecification(value: InstanceCreditSpecification[]);
    resetCreditSpecification(): void;
    get creditSpecificationInput(): InstanceCreditSpecification[] | undefined;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): InstanceEbsBlockDevice[];
    set ebsBlockDevice(value: InstanceEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): InstanceEbsBlockDevice[] | undefined;
    private _enclaveOptions?;
    get enclaveOptions(): InstanceEnclaveOptions[];
    set enclaveOptions(value: InstanceEnclaveOptions[]);
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): InstanceEnclaveOptions[] | undefined;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): InstanceEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: InstanceEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): InstanceEphemeralBlockDevice[] | undefined;
    private _metadataOptions?;
    get metadataOptions(): InstanceMetadataOptions[];
    set metadataOptions(value: InstanceMetadataOptions[]);
    resetMetadataOptions(): void;
    get metadataOptionsInput(): InstanceMetadataOptions[] | undefined;
    private _networkInterface?;
    get networkInterface(): InstanceNetworkInterface[];
    set networkInterface(value: InstanceNetworkInterface[]);
    resetNetworkInterface(): void;
    get networkInterfaceInput(): InstanceNetworkInterface[] | undefined;
    private _rootBlockDevice?;
    get rootBlockDevice(): InstanceRootBlockDevice[];
    set rootBlockDevice(value: InstanceRootBlockDevice[]);
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): InstanceRootBlockDevice[] | undefined;
    private _timeouts?;
    get timeouts(): InstanceTimeouts;
    set timeouts(value: InstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): InstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
