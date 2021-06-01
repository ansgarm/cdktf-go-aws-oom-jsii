import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}.
     */
    readonly distributionConfigurationArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}.
     */
    readonly enhancedImageMetadataEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_recipe_arn ImagebuilderImage#image_recipe_arn}.
     */
    readonly imageRecipeArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}.
     */
    readonly infrastructureConfigurationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags ImagebuilderImage#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags_all ImagebuilderImage#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * image_tests_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_configuration ImagebuilderImage#image_tests_configuration}
     */
    readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeouts ImagebuilderImage#timeouts}
     */
    readonly timeouts?: ImagebuilderImageTimeouts;
}
export declare class ImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {
    get accountId(): string;
    get description(): string;
    get image(): string;
    get name(): string;
    get region(): string;
}
export declare class ImagebuilderImageOutputResources extends cdktf.ComplexComputedList {
    get amis(): any;
}
export interface ImagebuilderImageImageTestsConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_enabled ImagebuilderImage#image_tests_enabled}.
     */
    readonly imageTestsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeout_minutes ImagebuilderImage#timeout_minutes}.
     */
    readonly timeoutMinutes?: number;
}
export interface ImagebuilderImageTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#create ImagebuilderImage#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image}.
 */
export declare class ImagebuilderImage extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ImagebuilderImageConfig);
    get arn(): string;
    get dateCreated(): string;
    private _distributionConfigurationArn?;
    get distributionConfigurationArn(): string;
    set distributionConfigurationArn(value: string);
    resetDistributionConfigurationArn(): void;
    get distributionConfigurationArnInput(): string | undefined;
    private _enhancedImageMetadataEnabled?;
    get enhancedImageMetadataEnabled(): boolean;
    set enhancedImageMetadataEnabled(value: boolean);
    resetEnhancedImageMetadataEnabled(): void;
    get enhancedImageMetadataEnabledInput(): boolean | undefined;
    get id(): string;
    private _imageRecipeArn;
    get imageRecipeArn(): string;
    set imageRecipeArn(value: string);
    get imageRecipeArnInput(): string;
    private _infrastructureConfigurationArn;
    get infrastructureConfigurationArn(): string;
    set infrastructureConfigurationArn(value: string);
    get infrastructureConfigurationArnInput(): string;
    get name(): string;
    get osVersion(): string;
    outputResources(index: string): ImagebuilderImageOutputResources;
    get platform(): string;
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
    get version(): string;
    private _imageTestsConfiguration?;
    get imageTestsConfiguration(): ImagebuilderImageImageTestsConfiguration[];
    set imageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration[]);
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImageImageTestsConfiguration[] | undefined;
    private _timeouts?;
    get timeouts(): ImagebuilderImageTimeouts;
    set timeouts(value: ImagebuilderImageTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): ImagebuilderImageTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
