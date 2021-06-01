import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}.
     */
    readonly associatePublicIpAddress?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_optimized LaunchConfiguration#ebs_optimized}.
     */
    readonly ebsOptimized?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#enable_monitoring LaunchConfiguration#enable_monitoring}.
     */
    readonly enableMonitoring?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iam_instance_profile LaunchConfiguration#iam_instance_profile}.
     */
    readonly iamInstanceProfile?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#image_id LaunchConfiguration#image_id}.
     */
    readonly imageId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#instance_type LaunchConfiguration#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#key_name LaunchConfiguration#key_name}.
     */
    readonly keyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name LaunchConfiguration#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name_prefix LaunchConfiguration#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#placement_tenancy LaunchConfiguration#placement_tenancy}.
     */
    readonly placementTenancy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#security_groups LaunchConfiguration#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#spot_price LaunchConfiguration#spot_price}.
     */
    readonly spotPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data LaunchConfiguration#user_data}.
     */
    readonly userData?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data_base64 LaunchConfiguration#user_data_base64}.
     */
    readonly userDataBase64?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}.
     */
    readonly vpcClassicLinkId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}.
     */
    readonly vpcClassicLinkSecurityGroups?: string[];
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_block_device LaunchConfiguration#ebs_block_device}
     */
    readonly ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ephemeral_block_device LaunchConfiguration#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[];
    /**
     * metadata_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#metadata_options LaunchConfiguration#metadata_options}
     */
    readonly metadataOptions?: LaunchConfigurationMetadataOptions[];
    /**
     * root_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#root_block_device LaunchConfiguration#root_block_device}
     */
    readonly rootBlockDevice?: LaunchConfigurationRootBlockDevice[];
}
export interface LaunchConfigurationEbsBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#no_device LaunchConfiguration#no_device}.
     */
    readonly noDevice?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#snapshot_id LaunchConfiguration#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}.
     */
    readonly volumeType?: string;
}
export interface LaunchConfigurationEphemeralBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#virtual_name LaunchConfiguration#virtual_name}.
     */
    readonly virtualName: string;
}
export interface LaunchConfigurationMetadataOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_endpoint LaunchConfiguration#http_endpoint}.
     */
    readonly httpEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}.
     */
    readonly httpPutResponseHopLimit?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_tokens LaunchConfiguration#http_tokens}.
     */
    readonly httpTokens?: string;
}
export interface LaunchConfigurationRootBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}.
     */
    readonly volumeType?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration}.
 */
export declare class LaunchConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LaunchConfigurationConfig);
    get arn(): string;
    private _associatePublicIpAddress?;
    get associatePublicIpAddress(): boolean;
    set associatePublicIpAddress(value: boolean);
    resetAssociatePublicIpAddress(): void;
    get associatePublicIpAddressInput(): boolean | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean;
    set ebsOptimized(value: boolean);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | undefined;
    private _enableMonitoring?;
    get enableMonitoring(): boolean;
    set enableMonitoring(value: boolean);
    resetEnableMonitoring(): void;
    get enableMonitoringInput(): boolean | undefined;
    private _iamInstanceProfile?;
    get iamInstanceProfile(): string;
    set iamInstanceProfile(value: string);
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): string | undefined;
    get id(): string;
    private _imageId;
    get imageId(): string;
    set imageId(value: string);
    get imageIdInput(): string;
    private _instanceType;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
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
    private _placementTenancy?;
    get placementTenancy(): string;
    set placementTenancy(value: string);
    resetPlacementTenancy(): void;
    get placementTenancyInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
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
    private _vpcClassicLinkId?;
    get vpcClassicLinkId(): string;
    set vpcClassicLinkId(value: string);
    resetVpcClassicLinkId(): void;
    get vpcClassicLinkIdInput(): string | undefined;
    private _vpcClassicLinkSecurityGroups?;
    get vpcClassicLinkSecurityGroups(): string[];
    set vpcClassicLinkSecurityGroups(value: string[]);
    resetVpcClassicLinkSecurityGroups(): void;
    get vpcClassicLinkSecurityGroupsInput(): string[] | undefined;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): LaunchConfigurationEbsBlockDevice[];
    set ebsBlockDevice(value: LaunchConfigurationEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): LaunchConfigurationEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): LaunchConfigurationEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: LaunchConfigurationEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): LaunchConfigurationEphemeralBlockDevice[] | undefined;
    private _metadataOptions?;
    get metadataOptions(): LaunchConfigurationMetadataOptions[];
    set metadataOptions(value: LaunchConfigurationMetadataOptions[]);
    resetMetadataOptions(): void;
    get metadataOptionsInput(): LaunchConfigurationMetadataOptions[] | undefined;
    private _rootBlockDevice?;
    get rootBlockDevice(): LaunchConfigurationRootBlockDevice[];
    set rootBlockDevice(value: LaunchConfigurationRootBlockDevice[]);
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): LaunchConfigurationRootBlockDevice[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
