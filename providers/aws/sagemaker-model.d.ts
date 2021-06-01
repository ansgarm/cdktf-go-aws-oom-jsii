import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#enable_network_isolation SagemakerModel#enable_network_isolation}.
     */
    readonly enableNetworkIsolation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#execution_role_arn SagemakerModel#execution_role_arn}.
     */
    readonly executionRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#name SagemakerModel#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags SagemakerModel#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags_all SagemakerModel#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * container block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container SagemakerModel#container}
     */
    readonly container?: SagemakerModelContainer[];
    /**
     * primary_container block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#primary_container SagemakerModel#primary_container}
     */
    readonly primaryContainer?: SagemakerModelPrimaryContainer[];
    /**
     * vpc_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#vpc_config SagemakerModel#vpc_config}
     */
    readonly vpcConfig?: SagemakerModelVpcConfig[];
}
export interface SagemakerModelContainerImageConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}.
     */
    readonly repositoryAccessMode: string;
}
export interface SagemakerModelContainer {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}.
     */
    readonly containerHostname?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}.
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}.
     */
    readonly image: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}.
     */
    readonly mode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}.
     */
    readonly modelDataUrl?: string;
    /**
     * image_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
     */
    readonly imageConfig?: SagemakerModelContainerImageConfig[];
}
export interface SagemakerModelPrimaryContainerImageConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}.
     */
    readonly repositoryAccessMode: string;
}
export interface SagemakerModelPrimaryContainer {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}.
     */
    readonly containerHostname?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}.
     */
    readonly environment?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}.
     */
    readonly image: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}.
     */
    readonly mode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}.
     */
    readonly modelDataUrl?: string;
    /**
     * image_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
     */
    readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig[];
}
export interface SagemakerModelVpcConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#security_group_ids SagemakerModel#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#subnets SagemakerModel#subnets}.
     */
    readonly subnets: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model}.
 */
export declare class SagemakerModel extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerModelConfig);
    get arn(): string;
    private _enableNetworkIsolation?;
    get enableNetworkIsolation(): boolean;
    set enableNetworkIsolation(value: boolean);
    resetEnableNetworkIsolation(): void;
    get enableNetworkIsolationInput(): boolean | undefined;
    private _executionRoleArn;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
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
    private _container?;
    get container(): SagemakerModelContainer[];
    set container(value: SagemakerModelContainer[]);
    resetContainer(): void;
    get containerInput(): SagemakerModelContainer[] | undefined;
    private _primaryContainer?;
    get primaryContainer(): SagemakerModelPrimaryContainer[];
    set primaryContainer(value: SagemakerModelPrimaryContainer[]);
    resetPrimaryContainer(): void;
    get primaryContainerInput(): SagemakerModelPrimaryContainer[] | undefined;
    private _vpcConfig?;
    get vpcConfig(): SagemakerModelVpcConfig[];
    set vpcConfig(value: SagemakerModelVpcConfig[]);
    resetVpcConfig(): void;
    get vpcConfigInput(): SagemakerModelVpcConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
