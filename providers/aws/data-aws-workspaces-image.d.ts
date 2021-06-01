import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWorkspacesImageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html#image_id DataAwsWorkspacesImage#image_id}.
     */
    readonly imageId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image}.
 */
export declare class DataAwsWorkspacesImage extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWorkspacesImageConfig);
    get description(): string;
    get id(): string;
    private _imageId;
    get imageId(): string;
    set imageId(value: string);
    get imageIdInput(): string;
    get name(): string;
    get operatingSystemType(): string;
    get requiredTenancy(): string;
    get state(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
