import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSagemakerPrebuiltEcrImageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}.
     */
    readonly dnsSuffix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}.
     */
    readonly imageTag?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#region DataAwsSagemakerPrebuiltEcrImage#region}.
     */
    readonly region?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}.
     */
    readonly repositoryName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image}.
 */
export declare class DataAwsSagemakerPrebuiltEcrImage extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSagemakerPrebuiltEcrImageConfig);
    private _dnsSuffix?;
    get dnsSuffix(): string;
    set dnsSuffix(value: string);
    resetDnsSuffix(): void;
    get dnsSuffixInput(): string | undefined;
    get id(): string;
    private _imageTag?;
    get imageTag(): string;
    set imageTag(value: string);
    resetImageTag(): void;
    get imageTagInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    get registryId(): string;
    get registryPath(): string;
    private _repositoryName;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
