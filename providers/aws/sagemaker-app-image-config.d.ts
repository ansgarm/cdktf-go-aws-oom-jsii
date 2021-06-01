import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#app_image_config_name SagemakerAppImageConfig#app_image_config_name}.
     */
    readonly appImageConfigName: string;
    /**
     * kernel_gateway_image_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
     */
    readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig[];
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_gid SagemakerAppImageConfig#default_gid}.
     */
    readonly defaultGid?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_uid SagemakerAppImageConfig#default_uid}.
     */
    readonly defaultUid?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#mount_path SagemakerAppImageConfig#mount_path}.
     */
    readonly mountPath?: string;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#display_name SagemakerAppImageConfig#display_name}.
     */
    readonly displayName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#name SagemakerAppImageConfig#name}.
     */
    readonly name: string;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfig {
    /**
     * file_system_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#file_system_config SagemakerAppImageConfig#file_system_config}
     */
    readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig[];
    /**
     * kernel_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_spec SagemakerAppImageConfig#kernel_spec}
     */
    readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config}.
 */
export declare class SagemakerAppImageConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig);
    private _appImageConfigName;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string;
    get arn(): string;
    get id(): string;
    private _kernelGatewayImageConfig?;
    get kernelGatewayImageConfig(): SagemakerAppImageConfigKernelGatewayImageConfig[];
    set kernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig[]);
    resetKernelGatewayImageConfig(): void;
    get kernelGatewayImageConfigInput(): SagemakerAppImageConfigKernelGatewayImageConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
