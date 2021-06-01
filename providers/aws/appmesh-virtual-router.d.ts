import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_name AppmeshVirtualRouter#mesh_name}.
     */
    readonly meshName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_owner AppmeshVirtualRouter#mesh_owner}.
     */
    readonly meshOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#name AppmeshVirtualRouter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags AppmeshVirtualRouter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags_all AppmeshVirtualRouter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#spec AppmeshVirtualRouter#spec}
     */
    readonly spec: AppmeshVirtualRouterSpec[];
}
export interface AppmeshVirtualRouterSpecListenerPortMapping {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port AppmeshVirtualRouter#port}.
     */
    readonly port: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#protocol AppmeshVirtualRouter#protocol}.
     */
    readonly protocol: string;
}
export interface AppmeshVirtualRouterSpecListener {
    /**
     * port_mapping block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port_mapping AppmeshVirtualRouter#port_mapping}
     */
    readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping[];
}
export interface AppmeshVirtualRouterSpec {
    /**
     * listener block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#listener AppmeshVirtualRouter#listener}
     */
    readonly listener: AppmeshVirtualRouterSpecListener[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router}.
 */
export declare class AppmeshVirtualRouter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppmeshVirtualRouterConfig);
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
    get spec(): AppmeshVirtualRouterSpec[];
    set spec(value: AppmeshVirtualRouterSpec[]);
    get specInput(): AppmeshVirtualRouterSpec[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
