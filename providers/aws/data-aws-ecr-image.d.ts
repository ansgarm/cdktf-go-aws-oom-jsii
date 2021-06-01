import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrImageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#image_digest DataAwsEcrImage#image_digest}.
     */
    readonly imageDigest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#image_tag DataAwsEcrImage#image_tag}.
     */
    readonly imageTag?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#registry_id DataAwsEcrImage#registry_id}.
     */
    readonly registryId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#repository_name DataAwsEcrImage#repository_name}.
     */
    readonly repositoryName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image}.
 */
export declare class DataAwsEcrImage extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEcrImageConfig);
    get id(): string;
    private _imageDigest?;
    get imageDigest(): string;
    set imageDigest(value: string);
    resetImageDigest(): void;
    get imageDigestInput(): string | undefined;
    get imagePushedAt(): number;
    get imageSizeInBytes(): number;
    private _imageTag?;
    get imageTag(): string;
    set imageTag(value: string);
    resetImageTag(): void;
    get imageTagInput(): string | undefined;
    get imageTags(): string[];
    private _registryId?;
    get registryId(): string;
    set registryId(value: string);
    resetRegistryId(): void;
    get registryIdInput(): string | undefined;
    private _repositoryName;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
