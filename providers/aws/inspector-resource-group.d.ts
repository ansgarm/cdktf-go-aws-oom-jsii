import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InspectorResourceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_resource_group.html#tags InspectorResourceGroup#tags}.
     */
    readonly tags: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_resource_group.html aws_inspector_resource_group}.
 */
export declare class InspectorResourceGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_resource_group.html aws_inspector_resource_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: InspectorResourceGroupConfig);
    get arn(): string;
    get id(): string;
    private _tags;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    get tagsInput(): {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
