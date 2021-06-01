import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerImageVersionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html#base_image SagemakerImageVersion#base_image}.
     */
    readonly baseImage: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html#image_name SagemakerImageVersion#image_name}.
     */
    readonly imageName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html aws_sagemaker_image_version}.
 */
export declare class SagemakerImageVersion extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html aws_sagemaker_image_version} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerImageVersionConfig);
    get arn(): string;
    private _baseImage;
    get baseImage(): string;
    set baseImage(value: string);
    get baseImageInput(): string;
    get containerImage(): string;
    get id(): string;
    get imageArn(): string;
    private _imageName;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
