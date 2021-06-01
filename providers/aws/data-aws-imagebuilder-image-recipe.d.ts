import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html#arn DataAwsImagebuilderImageRecipe#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html#tags DataAwsImagebuilderImageRecipe#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs extends cdktf.ComplexComputedList {
    get deleteOnTermination(): boolean;
    get encrypted(): boolean;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMapping extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get ebs(): any;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsImagebuilderImageRecipeComponent extends cdktf.ComplexComputedList {
    get componentArn(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}.
 */
export declare class DataAwsImagebuilderImageRecipe extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageRecipeConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    blockDeviceMapping(index: string): DataAwsImagebuilderImageRecipeBlockDeviceMapping;
    component(index: string): DataAwsImagebuilderImageRecipeComponent;
    get dateCreated(): string;
    get description(): string;
    get id(): string;
    get name(): string;
    get owner(): string;
    get parentImage(): string;
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
    get workingDirectory(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
