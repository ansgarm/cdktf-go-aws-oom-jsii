import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html#arn DataAwsImagebuilderImagePipeline#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html#tags DataAwsImagebuilderImagePipeline#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsImagebuilderImagePipelineImageTestsConfiguration extends cdktf.ComplexComputedList {
    get imageTestsEnabled(): boolean;
    get timeoutMinutes(): number;
}
export declare class DataAwsImagebuilderImagePipelineSchedule extends cdktf.ComplexComputedList {
    get pipelineExecutionStartCondition(): string;
    get scheduleExpression(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}.
 */
export declare class DataAwsImagebuilderImagePipeline extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImagePipelineConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get dateCreated(): string;
    get dateLastRun(): string;
    get dateNextRun(): string;
    get dateUpdated(): string;
    get description(): string;
    get distributionConfigurationArn(): string;
    get enhancedImageMetadataEnabled(): boolean;
    get id(): string;
    get imageRecipeArn(): string;
    imageTestsConfiguration(index: string): DataAwsImagebuilderImagePipelineImageTestsConfiguration;
    get infrastructureConfigurationArn(): string;
    get name(): string;
    get platform(): string;
    schedule(index: string): DataAwsImagebuilderImagePipelineSchedule;
    get status(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
