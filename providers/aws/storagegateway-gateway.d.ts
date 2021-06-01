import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#activation_key StoragegatewayGateway#activation_key}.
     */
    readonly activationKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}.
     */
    readonly averageDownloadRateLimitInBitsPerSec?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}.
     */
    readonly averageUploadRateLimitInBitsPerSec?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}.
     */
    readonly cloudwatchLogGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_ip_address StoragegatewayGateway#gateway_ip_address}.
     */
    readonly gatewayIpAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_name StoragegatewayGateway#gateway_name}.
     */
    readonly gatewayName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_timezone StoragegatewayGateway#gateway_timezone}.
     */
    readonly gatewayTimezone: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_type StoragegatewayGateway#gateway_type}.
     */
    readonly gatewayType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}.
     */
    readonly gatewayVpcEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#medium_changer_type StoragegatewayGateway#medium_changer_type}.
     */
    readonly mediumChangerType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}.
     */
    readonly smbFileShareVisibility?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_guest_password StoragegatewayGateway#smb_guest_password}.
     */
    readonly smbGuestPassword?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_security_strategy StoragegatewayGateway#smb_security_strategy}.
     */
    readonly smbSecurityStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags StoragegatewayGateway#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags_all StoragegatewayGateway#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tape_drive_type StoragegatewayGateway#tape_drive_type}.
     */
    readonly tapeDriveType?: string;
    /**
     * smb_active_directory_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}
     */
    readonly smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeouts StoragegatewayGateway#timeouts}
     */
    readonly timeouts?: StoragegatewayGatewayTimeouts;
}
export declare class StoragegatewayGatewayGatewayNetworkInterface extends cdktf.ComplexComputedList {
    get ipv4Address(): string;
}
export interface StoragegatewayGatewaySmbActiveDirectorySettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_controllers StoragegatewayGateway#domain_controllers}.
     */
    readonly domainControllers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_name StoragegatewayGateway#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#organizational_unit StoragegatewayGateway#organizational_unit}.
     */
    readonly organizationalUnit?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#password StoragegatewayGateway#password}.
     */
    readonly password: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}.
     */
    readonly timeoutInSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#username StoragegatewayGateway#username}.
     */
    readonly username: string;
}
export interface StoragegatewayGatewayTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#create StoragegatewayGateway#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway}.
 */
export declare class StoragegatewayGateway extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: StoragegatewayGatewayConfig);
    private _activationKey?;
    get activationKey(): string;
    set activationKey(value: string);
    resetActivationKey(): void;
    get activationKeyInput(): string | undefined;
    get arn(): string;
    private _averageDownloadRateLimitInBitsPerSec?;
    get averageDownloadRateLimitInBitsPerSec(): number;
    set averageDownloadRateLimitInBitsPerSec(value: number);
    resetAverageDownloadRateLimitInBitsPerSec(): void;
    get averageDownloadRateLimitInBitsPerSecInput(): number | undefined;
    private _averageUploadRateLimitInBitsPerSec?;
    get averageUploadRateLimitInBitsPerSec(): number;
    set averageUploadRateLimitInBitsPerSec(value: number);
    resetAverageUploadRateLimitInBitsPerSec(): void;
    get averageUploadRateLimitInBitsPerSecInput(): number | undefined;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    resetCloudwatchLogGroupArn(): void;
    get cloudwatchLogGroupArnInput(): string | undefined;
    get ec2InstanceId(): string;
    get endpointType(): string;
    get gatewayId(): string;
    private _gatewayIpAddress?;
    get gatewayIpAddress(): string;
    set gatewayIpAddress(value: string);
    resetGatewayIpAddress(): void;
    get gatewayIpAddressInput(): string | undefined;
    private _gatewayName;
    get gatewayName(): string;
    set gatewayName(value: string);
    get gatewayNameInput(): string;
    gatewayNetworkInterface(index: string): StoragegatewayGatewayGatewayNetworkInterface;
    private _gatewayTimezone;
    get gatewayTimezone(): string;
    set gatewayTimezone(value: string);
    get gatewayTimezoneInput(): string;
    private _gatewayType?;
    get gatewayType(): string;
    set gatewayType(value: string);
    resetGatewayType(): void;
    get gatewayTypeInput(): string | undefined;
    private _gatewayVpcEndpoint?;
    get gatewayVpcEndpoint(): string;
    set gatewayVpcEndpoint(value: string);
    resetGatewayVpcEndpoint(): void;
    get gatewayVpcEndpointInput(): string | undefined;
    get hostEnvironment(): string;
    get id(): string;
    private _mediumChangerType?;
    get mediumChangerType(): string;
    set mediumChangerType(value: string);
    resetMediumChangerType(): void;
    get mediumChangerTypeInput(): string | undefined;
    private _smbFileShareVisibility?;
    get smbFileShareVisibility(): boolean;
    set smbFileShareVisibility(value: boolean);
    resetSmbFileShareVisibility(): void;
    get smbFileShareVisibilityInput(): boolean | undefined;
    private _smbGuestPassword?;
    get smbGuestPassword(): string;
    set smbGuestPassword(value: string);
    resetSmbGuestPassword(): void;
    get smbGuestPasswordInput(): string | undefined;
    private _smbSecurityStrategy?;
    get smbSecurityStrategy(): string;
    set smbSecurityStrategy(value: string);
    resetSmbSecurityStrategy(): void;
    get smbSecurityStrategyInput(): string | undefined;
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
    private _tapeDriveType?;
    get tapeDriveType(): string;
    set tapeDriveType(value: string);
    resetTapeDriveType(): void;
    get tapeDriveTypeInput(): string | undefined;
    private _smbActiveDirectorySettings?;
    get smbActiveDirectorySettings(): StoragegatewayGatewaySmbActiveDirectorySettings[];
    set smbActiveDirectorySettings(value: StoragegatewayGatewaySmbActiveDirectorySettings[]);
    resetSmbActiveDirectorySettings(): void;
    get smbActiveDirectorySettingsInput(): StoragegatewayGatewaySmbActiveDirectorySettings[] | undefined;
    private _timeouts?;
    get timeouts(): StoragegatewayGatewayTimeouts;
    set timeouts(value: StoragegatewayGatewayTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): StoragegatewayGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
