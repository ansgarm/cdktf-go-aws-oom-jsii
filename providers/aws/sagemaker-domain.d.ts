import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_network_access_type SagemakerDomain#app_network_access_type}.
     */
    readonly appNetworkAccessType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#auth_mode SagemakerDomain#auth_mode}.
     */
    readonly authMode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#domain_name SagemakerDomain#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kms_key_id SagemakerDomain#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#subnet_ids SagemakerDomain#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags SagemakerDomain#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags_all SagemakerDomain#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#vpc_id SagemakerDomain#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * default_user_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_user_settings SagemakerDomain#default_user_settings}
     */
    readonly defaultUserSettings: SagemakerDomainDefaultUserSettings[];
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.
     */
    readonly sagemakerImageArn?: string;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
    /**
     * default_resource_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
     */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec[];
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_image_config_name SagemakerDomain#app_image_config_name}.
     */
    readonly appImageConfigName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_name SagemakerDomain#image_name}.
     */
    readonly imageName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_version_number SagemakerDomain#image_version_number}.
     */
    readonly imageVersionNumber?: number;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.
     */
    readonly sagemakerImageArn?: string;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
    /**
     * custom_image block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#custom_image SagemakerDomain#custom_image}
     */
    readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[];
    /**
     * default_resource_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
     */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec[];
}
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#notebook_output_option SagemakerDomain#notebook_output_option}.
     */
    readonly notebookOutputOption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_kms_key_id SagemakerDomain#s3_kms_key_id}.
     */
    readonly s3KmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_output_path SagemakerDomain#s3_output_path}.
     */
    readonly s3OutputPath?: string;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.
     */
    readonly sagemakerImageArn?: string;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
    /**
     * default_resource_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
     */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec[];
}
export interface SagemakerDomainDefaultUserSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#execution_role SagemakerDomain#execution_role}.
     */
    readonly executionRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#security_groups SagemakerDomain#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * jupyter_server_app_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
     */
    readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings[];
    /**
     * kernel_gateway_app_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
     */
    readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings[];
    /**
     * sharing_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sharing_settings SagemakerDomain#sharing_settings}
     */
    readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings[];
    /**
     * tensor_board_app_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
     */
    readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain}.
 */
export declare class SagemakerDomain extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerDomainConfig);
    private _appNetworkAccessType?;
    get appNetworkAccessType(): string;
    set appNetworkAccessType(value: string);
    resetAppNetworkAccessType(): void;
    get appNetworkAccessTypeInput(): string | undefined;
    get arn(): string;
    private _authMode;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get homeEfsFileSystemId(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get singleSignOnManagedApplicationInstanceId(): string;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    get url(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _defaultUserSettings;
    get defaultUserSettings(): SagemakerDomainDefaultUserSettings[];
    set defaultUserSettings(value: SagemakerDomainDefaultUserSettings[]);
    get defaultUserSettingsInput(): SagemakerDomainDefaultUserSettings[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
