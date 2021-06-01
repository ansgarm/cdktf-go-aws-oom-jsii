import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_name AppmeshGatewayRoute#mesh_name}.
     */
    readonly meshName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_owner AppmeshGatewayRoute#mesh_owner}.
     */
    readonly meshOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#name AppmeshGatewayRoute#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags AppmeshGatewayRoute#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags_all AppmeshGatewayRoute#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}.
     */
    readonly virtualGatewayName: string;
    /**
     * spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#spec AppmeshGatewayRoute#spec}
     */
    readonly spec: AppmeshGatewayRouteSpec[];
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.
     */
    readonly virtualServiceName: string;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
    /**
     * virtual_service block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
     */
    readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService[];
}
export interface AppmeshGatewayRouteSpecGrpcRouteAction {
    /**
     * target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
     */
    readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget[];
}
export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#service_name AppmeshGatewayRoute#service_name}.
     */
    readonly serviceName: string;
}
export interface AppmeshGatewayRouteSpecGrpcRoute {
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
     */
    readonly action: AppmeshGatewayRouteSpecGrpcRouteAction[];
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
     */
    readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch[];
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.
     */
    readonly virtualServiceName: string;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
    /**
     * virtual_service block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
     */
    readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService[];
}
export interface AppmeshGatewayRouteSpecHttp2RouteAction {
    /**
     * target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
     */
    readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget[];
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}.
     */
    readonly prefix: string;
}
export interface AppmeshGatewayRouteSpecHttp2Route {
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
     */
    readonly action: AppmeshGatewayRouteSpecHttp2RouteAction[];
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
     */
    readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch[];
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.
     */
    readonly virtualServiceName: string;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
    /**
     * virtual_service block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
     */
    readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService[];
}
export interface AppmeshGatewayRouteSpecHttpRouteAction {
    /**
     * target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
     */
    readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget[];
}
export interface AppmeshGatewayRouteSpecHttpRouteMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}.
     */
    readonly prefix: string;
}
export interface AppmeshGatewayRouteSpecHttpRoute {
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
     */
    readonly action: AppmeshGatewayRouteSpecHttpRouteAction[];
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
     */
    readonly match: AppmeshGatewayRouteSpecHttpRouteMatch[];
}
export interface AppmeshGatewayRouteSpec {
    /**
     * grpc_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#grpc_route AppmeshGatewayRoute#grpc_route}
     */
    readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute[];
    /**
     * http2_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http2_route AppmeshGatewayRoute#http2_route}
     */
    readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route[];
    /**
     * http_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http_route AppmeshGatewayRoute#http_route}
     */
    readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route}.
 */
export declare class AppmeshGatewayRoute extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig);
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
    private _virtualGatewayName;
    get virtualGatewayName(): string;
    set virtualGatewayName(value: string);
    get virtualGatewayNameInput(): string;
    private _spec;
    get spec(): AppmeshGatewayRouteSpec[];
    set spec(value: AppmeshGatewayRouteSpec[]);
    get specInput(): AppmeshGatewayRouteSpec[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
