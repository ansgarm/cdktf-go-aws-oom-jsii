import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspacesIpGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#description WorkspacesIpGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#name WorkspacesIpGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#tags WorkspacesIpGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#tags_all WorkspacesIpGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * rules block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#rules WorkspacesIpGroup#rules}
     */
    readonly rules?: WorkspacesIpGroupRules[];
}
export interface WorkspacesIpGroupRules {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#description WorkspacesIpGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#source WorkspacesIpGroup#source}.
     */
    readonly source: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html aws_workspaces_ip_group}.
 */
export declare class WorkspacesIpGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html aws_workspaces_ip_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WorkspacesIpGroupConfig);
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
    private _rules?;
    get rules(): WorkspacesIpGroupRules[];
    set rules(value: WorkspacesIpGroupRules[]);
    resetRules(): void;
    get rulesInput(): WorkspacesIpGroupRules[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
