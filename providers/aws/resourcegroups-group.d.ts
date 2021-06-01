import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ResourcegroupsGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#description ResourcegroupsGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#name ResourcegroupsGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#tags ResourcegroupsGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#tags_all ResourcegroupsGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * resource_query block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#resource_query ResourcegroupsGroup#resource_query}
     */
    readonly resourceQuery: ResourcegroupsGroupResourceQuery[];
}
export interface ResourcegroupsGroupResourceQuery {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#query ResourcegroupsGroup#query}.
     */
    readonly query: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html#type ResourcegroupsGroup#type}.
     */
    readonly type?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html aws_resourcegroups_group}.
 */
export declare class ResourcegroupsGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group.html aws_resourcegroups_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ResourcegroupsGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _resourceQuery;
    get resourceQuery(): ResourcegroupsGroupResourceQuery[];
    set resourceQuery(value: ResourcegroupsGroupResourceQuery[]);
    get resourceQueryInput(): ResourcegroupsGroupResourceQuery[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
