import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_name AppmeshRoute#mesh_name}.
     */
    readonly meshName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_owner AppmeshRoute#mesh_owner}.
     */
    readonly meshOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags AppmeshRoute#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags_all AppmeshRoute#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_router_name AppmeshRoute#virtual_router_name}.
     */
    readonly virtualRouterName: string;
    /**
     * spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#spec AppmeshRoute#spec}
     */
    readonly spec: AppmeshRouteSpec[];
}
export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}.
     */
    readonly virtualNode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}.
     */
    readonly weight: number;
}
export interface AppmeshRouteSpecGrpcRouteAction {
    /**
     * weighted_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
     */
    readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}.
     */
    readonly end: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}.
     */
    readonly start: number;
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}.
     */
    readonly exact?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}.
     */
    readonly regex?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}.
     */
    readonly suffix?: string;
    /**
     * range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
     */
    readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange[];
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}.
     */
    readonly invert?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}.
     */
    readonly name: string;
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
     */
    readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch[];
}
export interface AppmeshRouteSpecGrpcRouteMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method_name AppmeshRoute#method_name}.
     */
    readonly methodName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#service_name AppmeshRoute#service_name}.
     */
    readonly serviceName?: string;
    /**
     * metadata block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#metadata AppmeshRoute#metadata}
     */
    readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[];
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_retry_events AppmeshRoute#grpc_retry_events}.
     */
    readonly grpcRetryEvents?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}.
     */
    readonly httpRetryEvents?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}.
     */
    readonly maxRetries: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}.
     */
    readonly tcpRetryEvents?: string[];
    /**
     * per_retry_timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
     */
    readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout[];
}
export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecGrpcRouteTimeout {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
     */
    readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle[];
    /**
     * per_request block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
     */
    readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest[];
}
export interface AppmeshRouteSpecGrpcRoute {
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
     */
    readonly action: AppmeshRouteSpecGrpcRouteAction[];
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
     */
    readonly match?: AppmeshRouteSpecGrpcRouteMatch[];
    /**
     * retry_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
     */
    readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy[];
    /**
     * timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
     */
    readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout[];
}
export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}.
     */
    readonly virtualNode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}.
     */
    readonly weight: number;
}
export interface AppmeshRouteSpecHttp2RouteAction {
    /**
     * weighted_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
     */
    readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}.
     */
    readonly end: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}.
     */
    readonly start: number;
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}.
     */
    readonly exact?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}.
     */
    readonly regex?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}.
     */
    readonly suffix?: string;
    /**
     * range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
     */
    readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange[];
}
export interface AppmeshRouteSpecHttp2RouteMatchHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}.
     */
    readonly invert?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}.
     */
    readonly name: string;
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
     */
    readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch[];
}
export interface AppmeshRouteSpecHttp2RouteMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}.
     */
    readonly method?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}.
     */
    readonly prefix: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}.
     */
    readonly scheme?: string;
    /**
     * header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
     */
    readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[];
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}.
     */
    readonly httpRetryEvents?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}.
     */
    readonly maxRetries: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}.
     */
    readonly tcpRetryEvents?: string[];
    /**
     * per_retry_timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
     */
    readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout[];
}
export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecHttp2RouteTimeout {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
     */
    readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle[];
    /**
     * per_request block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
     */
    readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest[];
}
export interface AppmeshRouteSpecHttp2Route {
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
     */
    readonly action: AppmeshRouteSpecHttp2RouteAction[];
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
     */
    readonly match: AppmeshRouteSpecHttp2RouteMatch[];
    /**
     * retry_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
     */
    readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy[];
    /**
     * timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
     */
    readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout[];
}
export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}.
     */
    readonly virtualNode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}.
     */
    readonly weight: number;
}
export interface AppmeshRouteSpecHttpRouteAction {
    /**
     * weighted_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
     */
    readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}.
     */
    readonly end: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}.
     */
    readonly start: number;
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}.
     */
    readonly exact?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}.
     */
    readonly regex?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}.
     */
    readonly suffix?: string;
    /**
     * range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
     */
    readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange[];
}
export interface AppmeshRouteSpecHttpRouteMatchHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}.
     */
    readonly invert?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}.
     */
    readonly name: string;
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
     */
    readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch[];
}
export interface AppmeshRouteSpecHttpRouteMatch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}.
     */
    readonly method?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}.
     */
    readonly prefix: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}.
     */
    readonly scheme?: string;
    /**
     * header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
     */
    readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[];
}
export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecHttpRouteRetryPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}.
     */
    readonly httpRetryEvents?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}.
     */
    readonly maxRetries: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}.
     */
    readonly tcpRetryEvents?: string[];
    /**
     * per_retry_timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
     */
    readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout[];
}
export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecHttpRouteTimeout {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
     */
    readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle[];
    /**
     * per_request block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
     */
    readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest[];
}
export interface AppmeshRouteSpecHttpRoute {
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
     */
    readonly action: AppmeshRouteSpecHttpRouteAction[];
    /**
     * match block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
     */
    readonly match: AppmeshRouteSpecHttpRouteMatch[];
    /**
     * retry_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
     */
    readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy[];
    /**
     * timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
     */
    readonly timeout?: AppmeshRouteSpecHttpRouteTimeout[];
}
export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}.
     */
    readonly virtualNode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}.
     */
    readonly weight: number;
}
export interface AppmeshRouteSpecTcpRouteAction {
    /**
     * weighted_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
     */
    readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}.
     */
    readonly value: number;
}
export interface AppmeshRouteSpecTcpRouteTimeout {
    /**
     * idle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
     */
    readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle[];
}
export interface AppmeshRouteSpecTcpRoute {
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
     */
    readonly action: AppmeshRouteSpecTcpRouteAction[];
    /**
     * timeout block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
     */
    readonly timeout?: AppmeshRouteSpecTcpRouteTimeout[];
}
export interface AppmeshRouteSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#priority AppmeshRoute#priority}.
     */
    readonly priority?: number;
    /**
     * grpc_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_route AppmeshRoute#grpc_route}
     */
    readonly grpcRoute?: AppmeshRouteSpecGrpcRoute[];
    /**
     * http2_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http2_route AppmeshRoute#http2_route}
     */
    readonly http2Route?: AppmeshRouteSpecHttp2Route[];
    /**
     * http_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_route AppmeshRoute#http_route}
     */
    readonly httpRoute?: AppmeshRouteSpecHttpRoute[];
    /**
     * tcp_route block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_route AppmeshRoute#tcp_route}
     */
    readonly tcpRoute?: AppmeshRouteSpecTcpRoute[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}.
 */
export declare class AppmeshRoute extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppmeshRouteConfig);
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
    private _virtualRouterName;
    get virtualRouterName(): string;
    set virtualRouterName(value: string);
    get virtualRouterNameInput(): string;
    private _spec;
    get spec(): AppmeshRouteSpec[];
    set spec(value: AppmeshRouteSpec[]);
    get specInput(): AppmeshRouteSpec[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
