import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html#arn DataAwsImagebuilderImage#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html#tags DataAwsImagebuilderImage#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsImagebuilderImageImageTestsConfiguration extends cdktf.ComplexComputedList {
    get imageTestsEnabled(): boolean;
    get timeoutMinutes(): number;
}
export declare class DataAwsImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {
    get accountId(): string;
    get description(): string;
    get image(): string;
    get name(): string;
    get region(): string;
}
export declare class DataAwsImagebuilderImageOutputResources extends cdktf.ComplexComputedList {
    get amis(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image}.
 */
export declare class DataAwsImagebuilderImage extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get buildVersionArn(): string;
    get dateCreated(): string;
    get distributionConfigurationArn(): string;
    get enhancedImageMetadataEnabled(): boolean;
    get id(): string;
    get imageRecipeArn(): string;
    imageTestsConfiguration(index: string): DataAwsImagebuilderImageImageTestsConfiguration;
    get infrastructureConfigurationArn(): string;
    get name(): string;
    get osVersion(): string;
    outputResources(index: string): DataAwsImagebuilderImageOutputResources;
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
