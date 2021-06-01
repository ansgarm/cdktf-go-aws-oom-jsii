import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#description ImagebuilderImagePipeline#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}.
     */
    readonly distributionConfigurationArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}.
     */
    readonly enhancedImageMetadataEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}.
     */
    readonly imageRecipeArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}.
     */
    readonly infrastructureConfigurationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#name ImagebuilderImagePipeline#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#status ImagebuilderImagePipeline#status}.
     */
    readonly status?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags ImagebuilderImagePipeline#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags_all ImagebuilderImagePipeline#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * image_tests_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}
     */
    readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration[];
    /**
     * schedule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule ImagebuilderImagePipeline#schedule}
     */
    readonly schedule?: ImagebuilderImagePipelineSchedule[];
}
export interface ImagebuilderImagePipelineImageTestsConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}.
     */
    readonly imageTestsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}.
     */
    readonly timeoutMinutes?: number;
}
export interface ImagebuilderImagePipelineSchedule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}.
     */
    readonly pipelineExecutionStartCondition?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule_expression ImagebuilderImagePipeline#schedule_expression}.
     */
    readonly scheduleExpression: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}.
 */
export declare class ImagebuilderImagePipeline extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig);
    get arn(): string;
    get dateCreated(): string;
    get dateLastRun(): string;
    get dateNextRun(): string;
    get dateUpdated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platform(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _imageTestsConfiguration?;
    get imageTestsConfiguration(): ImagebuilderImagePipelineImageTestsConfiguration[];
    set imageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration[]);
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImagePipelineImageTestsConfiguration[] | undefined;
    private _schedule?;
    get schedule(): ImagebuilderImagePipelineSchedule[];
    set schedule(value: ImagebuilderImagePipelineSchedule[]);
    resetSchedule(): void;
    get scheduleInput(): ImagebuilderImagePipelineSchedule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
