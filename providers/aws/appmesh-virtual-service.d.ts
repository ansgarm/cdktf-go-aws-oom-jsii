import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_name AppmeshVirtualService#mesh_name}.
     */
    readonly meshName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_owner AppmeshVirtualService#mesh_owner}.
     */
    readonly meshOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#name AppmeshVirtualService#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags AppmeshVirtualService#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags_all AppmeshVirtualService#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#spec AppmeshVirtualService#spec}
     */
    readonly spec: AppmeshVirtualServiceSpec[];
}
export interface AppmeshVirtualServiceSpecProviderVirtualNode {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node_name AppmeshVirtualService#virtual_node_name}.
     */
    readonly virtualNodeName: string;
}
export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router_name AppmeshVirtualService#virtual_router_name}.
     */
    readonly virtualRouterName: string;
}
export interface AppmeshVirtualServiceSpecProvider {
    /**
     * virtual_node block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node AppmeshVirtualService#virtual_node}
     */
    readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode[];
    /**
     * virtual_router block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router AppmeshVirtualService#virtual_router}
     */
    readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter[];
}
export interface AppmeshVirtualServiceSpec {
    /**
     * provider block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#provider AppmeshVirtualService#provider}
     */
    readonly provider?: AppmeshVirtualServiceSpecProvider[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service}.
 */
export declare class AppmeshVirtualService extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig);
    get arn(): string;
    get createdDate(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _meshName;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string | undefined;
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
    private _spec;
    get spec(): AppmeshVirtualServiceSpec[];
    set spec(value: AppmeshVirtualServiceSpec[]);
    get specInput(): AppmeshVirtualServiceSpec[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
