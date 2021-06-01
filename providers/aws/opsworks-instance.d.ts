import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#agent_version OpsworksInstance#agent_version}.
     */
    readonly agentVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ami_id OpsworksInstance#ami_id}.
     */
    readonly amiId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#architecture OpsworksInstance#architecture}.
     */
    readonly architecture?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#auto_scaling_type OpsworksInstance#auto_scaling_type}.
     */
    readonly autoScalingType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#availability_zone OpsworksInstance#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#created_at OpsworksInstance#created_at}.
     */
    readonly createdAt?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_ebs OpsworksInstance#delete_ebs}.
     */
    readonly deleteEbs?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_eip OpsworksInstance#delete_eip}.
     */
    readonly deleteEip?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ebs_optimized OpsworksInstance#ebs_optimized}.
     */
    readonly ebsOptimized?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}.
     */
    readonly ecsClusterArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#elastic_ip OpsworksInstance#elastic_ip}.
     */
    readonly elasticIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#hostname OpsworksInstance#hostname}.
     */
    readonly hostname?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#infrastructure_class OpsworksInstance#infrastructure_class}.
     */
    readonly infrastructureClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#install_updates_on_boot OpsworksInstance#install_updates_on_boot}.
     */
    readonly installUpdatesOnBoot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#instance_profile_arn OpsworksInstance#instance_profile_arn}.
     */
    readonly instanceProfileArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#instance_type OpsworksInstance#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#last_service_error_id OpsworksInstance#last_service_error_id}.
     */
    readonly lastServiceErrorId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#layer_ids OpsworksInstance#layer_ids}.
     */
    readonly layerIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#os OpsworksInstance#os}.
     */
    readonly os?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#platform OpsworksInstance#platform}.
     */
    readonly platform?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#private_dns OpsworksInstance#private_dns}.
     */
    readonly privateDns?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#private_ip OpsworksInstance#private_ip}.
     */
    readonly privateIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#public_dns OpsworksInstance#public_dns}.
     */
    readonly publicDns?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#public_ip OpsworksInstance#public_ip}.
     */
    readonly publicIp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#registered_by OpsworksInstance#registered_by}.
     */
    readonly registeredBy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_agent_version OpsworksInstance#reported_agent_version}.
     */
    readonly reportedAgentVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_family OpsworksInstance#reported_os_family}.
     */
    readonly reportedOsFamily?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_name OpsworksInstance#reported_os_name}.
     */
    readonly reportedOsName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#reported_os_version OpsworksInstance#reported_os_version}.
     */
    readonly reportedOsVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_device_type OpsworksInstance#root_device_type}.
     */
    readonly rootDeviceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_device_volume_id OpsworksInstance#root_device_volume_id}.
     */
    readonly rootDeviceVolumeId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#security_group_ids OpsworksInstance#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_host_dsa_key_fingerprint OpsworksInstance#ssh_host_dsa_key_fingerprint}.
     */
    readonly sshHostDsaKeyFingerprint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_host_rsa_key_fingerprint OpsworksInstance#ssh_host_rsa_key_fingerprint}.
     */
    readonly sshHostRsaKeyFingerprint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ssh_key_name OpsworksInstance#ssh_key_name}.
     */
    readonly sshKeyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#stack_id OpsworksInstance#stack_id}.
     */
    readonly stackId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#state OpsworksInstance#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#status OpsworksInstance#status}.
     */
    readonly status?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#subnet_id OpsworksInstance#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#tenancy OpsworksInstance#tenancy}.
     */
    readonly tenancy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#virtualization_type OpsworksInstance#virtualization_type}.
     */
    readonly virtualizationType?: string;
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ebs_block_device OpsworksInstance#ebs_block_device}
     */
    readonly ebsBlockDevice?: OpsworksInstanceEbsBlockDevice[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#ephemeral_block_device OpsworksInstance#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: OpsworksInstanceEphemeralBlockDevice[];
    /**
     * root_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#root_block_device OpsworksInstance#root_block_device}
     */
    readonly rootBlockDevice?: OpsworksInstanceRootBlockDevice[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#timeouts OpsworksInstance#timeouts}
     */
    readonly timeouts?: OpsworksInstanceTimeouts;
}
export interface OpsworksInstanceEbsBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_on_termination OpsworksInstance#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#device_name OpsworksInstance#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#iops OpsworksInstance#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#snapshot_id OpsworksInstance#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_size OpsworksInstance#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_type OpsworksInstance#volume_type}.
     */
    readonly volumeType?: string;
}
export interface OpsworksInstanceEphemeralBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#device_name OpsworksInstance#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#virtual_name OpsworksInstance#virtual_name}.
     */
    readonly virtualName: string;
}
export interface OpsworksInstanceRootBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete_on_termination OpsworksInstance#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#iops OpsworksInstance#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_size OpsworksInstance#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#volume_type OpsworksInstance#volume_type}.
     */
    readonly volumeType?: string;
}
export interface OpsworksInstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#create OpsworksInstance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#delete OpsworksInstance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html#update OpsworksInstance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance}.
 */
export declare class OpsworksInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OpsworksInstanceConfig);
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string | undefined;
    private _amiId?;
    get amiId(): string;
    set amiId(value: string);
    resetAmiId(): void;
    get amiIdInput(): string | undefined;
    private _architecture?;
    get architecture(): string;
    set architecture(value: string);
    resetArchitecture(): void;
    get architectureInput(): string | undefined;
    private _autoScalingType?;
    get autoScalingType(): string;
    set autoScalingType(value: string);
    resetAutoScalingType(): void;
    get autoScalingTypeInput(): string | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _createdAt?;
    get createdAt(): string;
    set createdAt(value: string);
    resetCreatedAt(): void;
    get createdAtInput(): string | undefined;
    private _deleteEbs?;
    get deleteEbs(): boolean;
    set deleteEbs(value: boolean);
    resetDeleteEbs(): void;
    get deleteEbsInput(): boolean | undefined;
    private _deleteEip?;
    get deleteEip(): boolean;
    set deleteEip(value: boolean);
    resetDeleteEip(): void;
    get deleteEipInput(): boolean | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean;
    set ebsOptimized(value: boolean);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | undefined;
    get ec2InstanceId(): string;
    private _ecsClusterArn?;
    get ecsClusterArn(): string;
    set ecsClusterArn(value: string);
    resetEcsClusterArn(): void;
    get ecsClusterArnInput(): string | undefined;
    private _elasticIp?;
    get elasticIp(): string;
    set elasticIp(value: string);
    resetElasticIp(): void;
    get elasticIpInput(): string | undefined;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string | undefined;
    get id(): string;
    private _infrastructureClass?;
    get infrastructureClass(): string;
    set infrastructureClass(value: string);
    resetInfrastructureClass(): void;
    get infrastructureClassInput(): string | undefined;
    private _installUpdatesOnBoot?;
    get installUpdatesOnBoot(): boolean;
    set installUpdatesOnBoot(value: boolean);
    resetInstallUpdatesOnBoot(): void;
    get installUpdatesOnBootInput(): boolean | undefined;
    private _instanceProfileArn?;
    get instanceProfileArn(): string;
    set instanceProfileArn(value: string);
    resetInstanceProfileArn(): void;
    get instanceProfileArnInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lastServiceErrorId?;
    get lastServiceErrorId(): string;
    set lastServiceErrorId(value: string);
    resetLastServiceErrorId(): void;
    get lastServiceErrorIdInput(): string | undefined;
    private _layerIds;
    get layerIds(): string[];
    set layerIds(value: string[]);
    get layerIdsInput(): string[];
    private _os?;
    get os(): string;
    set os(value: string);
    resetOs(): void;
    get osInput(): string | undefined;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string | undefined;
    private _privateDns?;
    get privateDns(): string;
    set privateDns(value: string);
    resetPrivateDns(): void;
    get privateDnsInput(): string | undefined;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string | undefined;
    private _publicDns?;
    get publicDns(): string;
    set publicDns(value: string);
    resetPublicDns(): void;
    get publicDnsInput(): string | undefined;
    private _publicIp?;
    get publicIp(): string;
    set publicIp(value: string);
    resetPublicIp(): void;
    get publicIpInput(): string | undefined;
    private _registeredBy?;
    get registeredBy(): string;
    set registeredBy(value: string);
    resetRegisteredBy(): void;
    get registeredByInput(): string | undefined;
    private _reportedAgentVersion?;
    get reportedAgentVersion(): string;
    set reportedAgentVersion(value: string);
    resetReportedAgentVersion(): void;
    get reportedAgentVersionInput(): string | undefined;
    private _reportedOsFamily?;
    get reportedOsFamily(): string;
    set reportedOsFamily(value: string);
    resetReportedOsFamily(): void;
    get reportedOsFamilyInput(): string | undefined;
    private _reportedOsName?;
    get reportedOsName(): string;
    set reportedOsName(value: string);
    resetReportedOsName(): void;
    get reportedOsNameInput(): string | undefined;
    private _reportedOsVersion?;
    get reportedOsVersion(): string;
    set reportedOsVersion(value: string);
    resetReportedOsVersion(): void;
    get reportedOsVersionInput(): string | undefined;
    private _rootDeviceType?;
    get rootDeviceType(): string;
    set rootDeviceType(value: string);
    resetRootDeviceType(): void;
    get rootDeviceTypeInput(): string | undefined;
    private _rootDeviceVolumeId?;
    get rootDeviceVolumeId(): string;
    set rootDeviceVolumeId(value: string);
    resetRootDeviceVolumeId(): void;
    get rootDeviceVolumeIdInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _sshHostDsaKeyFingerprint?;
    get sshHostDsaKeyFingerprint(): string;
    set sshHostDsaKeyFingerprint(value: string);
    resetSshHostDsaKeyFingerprint(): void;
    get sshHostDsaKeyFingerprintInput(): string | undefined;
    private _sshHostRsaKeyFingerprint?;
    get sshHostRsaKeyFingerprint(): string;
    set sshHostRsaKeyFingerprint(value: string);
    resetSshHostRsaKeyFingerprint(): void;
    get sshHostRsaKeyFingerprintInput(): string | undefined;
    private _sshKeyName?;
    get sshKeyName(): string;
    set sshKeyName(value: string);
    resetSshKeyName(): void;
    get sshKeyNameInput(): string | undefined;
    private _stackId;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string | undefined;
    private _virtualizationType?;
    get virtualizationType(): string;
    set virtualizationType(value: string);
    resetVirtualizationType(): void;
    get virtualizationTypeInput(): string | undefined;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): OpsworksInstanceEbsBlockDevice[];
    set ebsBlockDevice(value: OpsworksInstanceEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): OpsworksInstanceEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): OpsworksInstanceEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: OpsworksInstanceEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): OpsworksInstanceEphemeralBlockDevice[] | undefined;
    private _rootBlockDevice?;
    get rootBlockDevice(): OpsworksInstanceRootBlockDevice[];
    set rootBlockDevice(value: OpsworksInstanceRootBlockDevice[]);
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): OpsworksInstanceRootBlockDevice[] | undefined;
    private _timeouts?;
    get timeouts(): OpsworksInstanceTimeouts;
    set timeouts(value: OpsworksInstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): OpsworksInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
