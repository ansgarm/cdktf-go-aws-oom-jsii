import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#name AppmeshMesh#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags AppmeshMesh#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags_all AppmeshMesh#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#spec AppmeshMesh#spec}
     */
    readonly spec?: AppmeshMeshSpec[];
}
export interface AppmeshMeshSpecEgressFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#type AppmeshMesh#type}.
     */
    readonly type?: string;
}
export interface AppmeshMeshSpec {
    /**
     * egress_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#egress_filter AppmeshMesh#egress_filter}
     */
    readonly egressFilter?: AppmeshMeshSpecEgressFilter[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh}.
 */
export declare class AppmeshMesh extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppmeshMeshConfig);
    get arn(): string;
    get createdDate(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    get meshOwner(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get resourceOwner(): string;
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
    private _spec?;
    get spec(): AppmeshMeshSpec[];
    set spec(value: AppmeshMeshSpec[]);
    resetSpec(): void;
    get specInput(): AppmeshMeshSpec[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
