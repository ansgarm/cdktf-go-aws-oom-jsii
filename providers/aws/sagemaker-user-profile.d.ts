import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#domain_id SagemakerUserProfile#domain_id}.
     */
    readonly domainId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}.
     */
    readonly singleSignOnUserIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}.
     */
    readonly singleSignOnUserValue?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags SagemakerUserProfile#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags_all SagemakerUserProfile#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_profile_name SagemakerUserProfile#user_profile_name}.
     */
    readonly userProfileName: string;
    /**
     * user_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_settings SagemakerUserProfile#user_settings}
     */
    readonly userSettings?: SagemakerUserProfileUserSettings[];
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.
     */
    readonly sagemakerImageArn?: string;
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
    /**
     * default_resource_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
     */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec[];
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#app_image_config_name SagemakerUserProfile#app_image_config_name}.
     */
    readonly appImageConfigName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_name SagemakerUserProfile#image_name}.
     */
    readonly imageName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_version_number SagemakerUserProfile#image_version_number}.
     */
    readonly imageVersionNumber?: number;
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.
     */
    readonly sagemakerImageArn?: string;
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
    /**
     * custom_image block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#custom_image SagemakerUserProfile#custom_image}
     */
    readonly customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[];
    /**
     * default_resource_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
     */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec[];
}
export interface SagemakerUserProfileUserSettingsSharingSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#notebook_output_option SagemakerUserProfile#notebook_output_option}.
     */
    readonly notebookOutputOption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}.
     */
    readonly s3KmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_output_path SagemakerUserProfile#s3_output_path}.
     */
    readonly s3OutputPath?: string;
}
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.
     */
    readonly sagemakerImageArn?: string;
}
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettings {
    /**
     * default_resource_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
     */
    readonly defaultResourceSpec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec[];
}
export interface SagemakerUserProfileUserSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#execution_role SagemakerUserProfile#execution_role}.
     */
    readonly executionRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#security_groups SagemakerUserProfile#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * jupyter_server_app_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
     */
    readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings[];
    /**
     * kernel_gateway_app_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
     */
    readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings[];
    /**
     * sharing_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sharing_settings SagemakerUserProfile#sharing_settings}
     */
    readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings[];
    /**
     * tensor_board_app_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}
     */
    readonly tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile}.
 */
export declare class SagemakerUserProfile extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig);
    get arn(): string;
    private _domainId;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string;
    get homeEfsFileSystemUid(): string;
    get id(): string;
    private _singleSignOnUserIdentifier?;
    get singleSignOnUserIdentifier(): string;
    set singleSignOnUserIdentifier(value: string);
    resetSingleSignOnUserIdentifier(): void;
    get singleSignOnUserIdentifierInput(): string | undefined;
    private _singleSignOnUserValue?;
    get singleSignOnUserValue(): string;
    set singleSignOnUserValue(value: string);
    resetSingleSignOnUserValue(): void;
    get singleSignOnUserValueInput(): string | undefined;
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
    private _userProfileName;
    get userProfileName(): string;
    set userProfileName(value: string);
    get userProfileNameInput(): string;
    private _userSettings?;
    get userSettings(): SagemakerUserProfileUserSettings[];
    set userSettings(value: SagemakerUserProfileUserSettings[]);
    resetUserSettings(): void;
    get userSettingsInput(): SagemakerUserProfileUserSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
