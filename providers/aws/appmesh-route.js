"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppmeshRoute = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function appmeshRouteSpecGrpcRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start),
    };
}
function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform)(struct.range),
    };
}
function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform)(struct.match),
    };
}
function appmeshRouteSpecGrpcRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        method_name: cdktf.stringToTerraform(struct.methodName),
        prefix: cdktf.stringToTerraform(struct.prefix),
        service_name: cdktf.stringToTerraform(struct.serviceName),
        metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform)(struct.metadata),
    };
}
function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.grpcRetryEvents),
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform)(struct.perRetryTimeout),
    };
}
function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform)(struct.perRequest),
    };
}
function appmeshRouteSpecGrpcRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchToTerraform)(struct.match),
        retry_policy: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyToTerraform)(struct.retryPolicy),
        timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutToTerraform)(struct.timeout),
    };
}
function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function appmeshRouteSpecHttp2RouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start),
    };
}
function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform)(struct.range),
    };
}
function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform)(struct.match),
    };
}
function appmeshRouteSpecHttp2RouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        prefix: cdktf.stringToTerraform(struct.prefix),
        scheme: cdktf.stringToTerraform(struct.scheme),
        header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform)(struct.header),
    };
}
function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform)(struct.perRetryTimeout),
    };
}
function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform)(struct.perRequest),
    };
}
function appmeshRouteSpecHttp2RouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchToTerraform)(struct.match),
        retry_policy: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyToTerraform)(struct.retryPolicy),
        timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutToTerraform)(struct.timeout),
    };
}
function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function appmeshRouteSpecHttpRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start),
    };
}
function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform)(struct.range),
    };
}
function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform)(struct.match),
    };
}
function appmeshRouteSpecHttpRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        prefix: cdktf.stringToTerraform(struct.prefix),
        scheme: cdktf.stringToTerraform(struct.scheme),
        header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform)(struct.header),
    };
}
function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform)(struct.perRetryTimeout),
    };
}
function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform)(struct.perRequest),
    };
}
function appmeshRouteSpecHttpRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecHttpRouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchToTerraform)(struct.match),
        retry_policy: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyToTerraform)(struct.retryPolicy),
        timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutToTerraform)(struct.timeout),
    };
}
function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function appmeshRouteSpecTcpRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct.weightedTarget),
    };
}
function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutIdleToTerraform)(struct.idle),
    };
}
function appmeshRouteSpecTcpRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecTcpRouteActionToTerraform)(struct.action),
        timeout: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutToTerraform)(struct.timeout),
    };
}
function appmeshRouteSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        grpc_route: cdktf.listMapper(appmeshRouteSpecGrpcRouteToTerraform)(struct.grpcRoute),
        http2_route: cdktf.listMapper(appmeshRouteSpecHttp2RouteToTerraform)(struct.http2Route),
        http_route: cdktf.listMapper(appmeshRouteSpecHttpRouteToTerraform)(struct.httpRoute),
        tcp_route: cdktf.listMapper(appmeshRouteSpecTcpRouteToTerraform)(struct.tcpRoute),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}.
 */
class AppmeshRoute extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_appmesh_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._meshName = config.meshName;
        this._meshOwner = config.meshOwner;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._virtualRouterName = config.virtualRouterName;
        this._spec = config.spec;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_date - computed: true, optional: false, required: false
    get createdDate() {
        return this.getStringAttribute('created_date');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated_date - computed: true, optional: false, required: false
    get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
    }
    get meshName() {
        return this.getStringAttribute('mesh_name');
    }
    set meshName(value) {
        this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    get meshNameInput() {
        return this._meshName;
    }
    get meshOwner() {
        return this.getStringAttribute('mesh_owner');
    }
    set meshOwner(value) {
        this._meshOwner = value;
    }
    resetMeshOwner() {
        this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get meshOwnerInput() {
        return this._meshOwner;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // resource_owner - computed: true, optional: false, required: false
    get resourceOwner() {
        return this.getStringAttribute('resource_owner');
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get tagsAll() {
        return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    get virtualRouterName() {
        return this.getStringAttribute('virtual_router_name');
    }
    set virtualRouterName(value) {
        this._virtualRouterName = value;
    }
    // Temporarily expose input value. Use with caution.
    get virtualRouterNameInput() {
        return this._virtualRouterName;
    }
    get spec() {
        return this.interpolationForAttribute('spec');
    }
    set spec(value) {
        this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    get specInput() {
        return this._spec;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
            spec: cdktf.listMapper(appmeshRouteSpecToTerraform)(this._spec),
        };
    }
}
exports.AppmeshRoute = AppmeshRoute;
_a = JSII_RTTI_SYMBOL_1;
AppmeshRoute[_a] = { fqn: "hashicorp_aws.AppmeshRoute", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbWVzaC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcG1lc2gtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQkFBK0I7QUErQy9CLFNBQVMsd0RBQXdELENBQUMsTUFBc0Q7SUFDdEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBV0QsU0FBUywwQ0FBMEMsQ0FBQyxNQUF3QztJQUMxRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdEQUF3RCxDQUFDLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNwSCxDQUFBO0FBQ0gsQ0FBQztBQWFELFNBQVMsMkRBQTJELENBQUMsTUFBeUQ7SUFDNUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBMkJELFNBQVMsc0RBQXNELENBQUMsTUFBb0Q7SUFDbEgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENB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QUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3JFLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoRSxDQUFDO0lBQ0osQ0FBQzs7QUFoTEgsb0NBaUxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3cy9yL2FwcG1lc2hfcm91dGUuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNoTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc2hPd25lcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsUm91dGVyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BlYzogQXBwbWVzaFJvdXRlU3BlY1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsTm9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxfbm9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTm9kZSksXG4gICAgd2VpZ2h0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlaWdodGVkVGFyZ2V0OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZUFjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgd2VpZ2h0ZWRfdGFyZ2V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFRvVGVycmFmb3JtKShzdHJ1Y3QhLndlaWdodGVkVGFyZ2V0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhTWF0Y2hSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnQ6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaFJhbmdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5lbmQpLFxuICAgIHN0YXJ0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhhY3Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZ2V4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWZmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByYW5nZT86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhTWF0Y2hSYW5nZVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFNYXRjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBleGFjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leGFjdCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcmVnZXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnZXgpLFxuICAgIHN1ZmZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWZmaXgpLFxuICAgIHJhbmdlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhTWF0Y2hSYW5nZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW52ZXJ0PzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXRjaD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhTWF0Y2hbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoTWV0YWRhdGFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnZlcnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmludmVydCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBtYXRjaDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hNZXRhZGF0YU1hdGNoVG9UZXJyYWZvcm0pKHN0cnVjdCEubWF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldGhvZE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRhZGF0YT86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXRob2RfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRob2ROYW1lKSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICBzZXJ2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZU5hbWUpLFxuICAgIG1ldGFkYXRhOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVNYXRjaE1ldGFkYXRhVG9UZXJyYWZvcm0pKHN0cnVjdCEubWV0YWRhdGEpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JwY1JldHJ5RXZlbnRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFJldHJpZXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0Y3BSZXRyeUV2ZW50cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyUmV0cnlUaW1lb3V0OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVJldHJ5UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGdycGNfcmV0cnlfZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmdycGNSZXRyeUV2ZW50cyksXG4gICAgaHR0cF9yZXRyeV9ldmVudHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaHR0cFJldHJ5RXZlbnRzKSxcbiAgICBtYXhfcmV0cmllczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhSZXRyaWVzKSxcbiAgICB0Y3BfcmV0cnlfZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRjcFJldHJ5RXZlbnRzKSxcbiAgICBwZXJfcmV0cnlfdGltZW91dDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRUb1RlcnJhZm9ybSkoc3RydWN0IS5wZXJSZXRyeVRpbWVvdXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXRJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dFBlclJlcXVlc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkbGU/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dElkbGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlclJlcXVlc3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dFBlclJlcXVlc3RbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZVRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlVGltZW91dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpZGxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0SWRsZVRvVGVycmFmb3JtKShzdHJ1Y3QhLmlkbGUpLFxuICAgIHBlcl9yZXF1ZXN0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0UGVyUmVxdWVzdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnBlclJlcXVlc3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb246IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVBY3Rpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoPzogQXBwbWVzaFJvdXRlU3BlY0dycGNSb3V0ZU1hdGNoW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRyeVBvbGljeT86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dD86IEFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0W107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlQWN0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9uKSxcbiAgICBtYXRjaDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlTWF0Y2hUb1RlcnJhZm9ybSkoc3RydWN0IS5tYXRjaCksXG4gICAgcmV0cnlfcG9saWN5OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVSZXRyeVBvbGljeVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJldHJ5UG9saWN5KSxcbiAgICB0aW1lb3V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUaW1lb3V0VG9UZXJyYWZvcm0pKHN0cnVjdCEudGltZW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxfbm9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTm9kZSksXG4gICAgd2VpZ2h0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZFRhcmdldDogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHdlaWdodGVkX3RhcmdldDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0pKHN0cnVjdCEud2VpZ2h0ZWRUYXJnZXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXJ0OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoUmFuZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuZCksXG4gICAgc3RhcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4YWN0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWdleD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VmZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmFuZ2U/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2gpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXhhY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhhY3QpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHJlZ2V4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZ2V4KSxcbiAgICBzdWZmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3VmZml4KSxcbiAgICByYW5nZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnZlcnQ/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hdGNoPzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaEhlYWRlck1hdGNoW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGludmVydDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW52ZXJ0KSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIG1hdGNoOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hIZWFkZXJNYXRjaFRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hdGNoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRob2Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFkZXI/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1ldGhvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRob2QpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHNjaGVtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWUpLFxuICAgIGhlYWRlcjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZU1hdGNoSGVhZGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFJldHJpZXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0Y3BSZXRyeUV2ZW50cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyUmV0cnlUaW1lb3V0OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0W107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlUmV0cnlQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVJldHJ5UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGh0dHBfcmV0cnlfZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmh0dHBSZXRyeUV2ZW50cyksXG4gICAgbWF4X3JldHJpZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UmV0cmllcyksXG4gICAgdGNwX3JldHJ5X2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50Y3BSZXRyeUV2ZW50cyksXG4gICAgcGVyX3JldHJ5X3RpbWVvdXQ6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dFRvVGVycmFmb3JtKShzdHJ1Y3QhLnBlclJldHJ5VGltZW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRJZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRJZGxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0SWRsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFBlclJlcXVlc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFBlclJlcXVlc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkbGU/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRJZGxlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwZXJSZXF1ZXN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0UGVyUmVxdWVzdFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaWRsZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRpbWVvdXRJZGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVUaW1lb3V0UGVyUmVxdWVzdFRvVGVycmFmb3JtKShzdHJ1Y3QhLnBlclJlcXVlc3QpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uOiBBcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlTWF0Y2hbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJldHJ5UG9saWN5PzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cDJSb3V0ZUFjdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmFjdGlvbiksXG4gICAgbWF0Y2g6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVNYXRjaFRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hdGNoKSxcbiAgICByZXRyeV9wb2xpY3k6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVSZXRyeVBvbGljeVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJldHJ5UG9saWN5KSxcbiAgICB0aW1lb3V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVGltZW91dFRvVGVycmFmb3JtKShzdHJ1Y3QhLnRpbWVvdXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX25vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5vZGUpLFxuICAgIHdlaWdodDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZFRhcmdldDogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0W107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHdlaWdodGVkX3RhcmdldDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRUb1RlcnJhZm9ybSkoc3RydWN0IS53ZWlnaHRlZFRhcmdldCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydDogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFJhbmdlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZW5kKSxcbiAgICBzdGFydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zdGFydCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGFjdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVnZXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1ZmZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJhbmdlPzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlck1hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV4YWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4YWN0KSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICByZWdleDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWdleCksXG4gICAgc3VmZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1ZmZpeCksXG4gICAgcmFuZ2U6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hSYW5nZVRvVGVycmFmb3JtKShzdHJ1Y3QhLnJhbmdlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaEhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludmVydD86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJNYXRjaFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW52ZXJ0OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbnZlcnQpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgbWF0Y2g6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoSGVhZGVyTWF0Y2hUb1RlcnJhZm9ybSkoc3RydWN0IS5tYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRob2Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFkZXI/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJbXTtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG1ldGhvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRob2QpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHNjaGVtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWUpLFxuICAgIGhlYWRlcjogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlTWF0Y2hIZWFkZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5oZWFkZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1bml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lQZXJSZXRyeVRpbWVvdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cFJldHJ5RXZlbnRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhSZXRyaWVzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGNwUmV0cnlFdmVudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlclJldHJ5VGltZW91dDogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVJldHJ5UG9saWN5UGVyUmV0cnlUaW1lb3V0W107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBodHRwX3JldHJ5X2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5odHRwUmV0cnlFdmVudHMpLFxuICAgIG1heF9yZXRyaWVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFJldHJpZXMpLFxuICAgIHRjcF9yZXRyeV9ldmVudHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGNwUmV0cnlFdmVudHMpLFxuICAgIHBlcl9yZXRyeV90aW1lb3V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVSZXRyeVBvbGljeVBlclJldHJ5VGltZW91dFRvVGVycmFmb3JtKShzdHJ1Y3QhLnBlclJldHJ5VGltZW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dElkbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0SWRsZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0SWRsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB1bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVuaXQpLFxuICAgIHZhbHVlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0UGVyUmVxdWVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHVuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudW5pdCksXG4gICAgdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWRsZT86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0SWRsZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVyUmVxdWVzdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0UGVyUmVxdWVzdFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVUaW1lb3V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGlkbGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRJZGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRsZSksXG4gICAgcGVyX3JlcXVlc3Q6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZVRpbWVvdXRQZXJSZXF1ZXN0VG9UZXJyYWZvcm0pKHN0cnVjdCEucGVyUmVxdWVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbjogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF0Y2g6IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVNYXRjaFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmV0cnlQb2xpY3k/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXQ/OiBBcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZUFjdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmFjdGlvbiksXG4gICAgbWF0Y2g6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY0h0dHBSb3V0ZU1hdGNoVG9UZXJyYWZvcm0pKHN0cnVjdCEubWF0Y2gpLFxuICAgIHJldHJ5X3BvbGljeTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlUmV0cnlQb2xpY3lUb1RlcnJhZm9ybSkoc3RydWN0IS5yZXRyeVBvbGljeSksXG4gICAgdGltZW91dDogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVGltZW91dFRvVGVycmFmb3JtKShzdHJ1Y3QhLnRpbWVvdXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXJ0dWFsTm9kZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gYXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uV2VpZ2h0ZWRUYXJnZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsX25vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5vZGUpLFxuICAgIHdlaWdodDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlaWdodGVkVGFyZ2V0OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb25XZWlnaHRlZFRhcmdldFtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgd2VpZ2h0ZWRfdGFyZ2V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZUFjdGlvbldlaWdodGVkVGFyZ2V0VG9UZXJyYWZvcm0pKHN0cnVjdCEud2VpZ2h0ZWRUYXJnZXQpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dElkbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRJZGxlVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dElkbGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51bml0KSxcbiAgICB2YWx1ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkbGU/OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0SWRsZVtdO1xufVxuXG5mdW5jdGlvbiBhcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0VG9UZXJyYWZvcm0oc3RydWN0PzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVGltZW91dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpZGxlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRJZGxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uOiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVBY3Rpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXQ/OiBBcHBtZXNoUm91dGVTcGVjVGNwUm91dGVUaW1lb3V0W107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IEFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlQWN0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWN0aW9uKSxcbiAgICB0aW1lb3V0OiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNUY3BSb3V0ZVRpbWVvdXRUb1RlcnJhZm9ybSkoc3RydWN0IS50aW1lb3V0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcG1lc2hSb3V0ZVNwZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpb3JpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncnBjUm91dGU/OiBBcHBtZXNoUm91dGVTcGVjR3JwY1JvdXRlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwMlJvdXRlPzogQXBwbWVzaFJvdXRlU3BlY0h0dHAyUm91dGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBSb3V0ZT86IEFwcG1lc2hSb3V0ZVNwZWNIdHRwUm91dGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRjcFJvdXRlPzogQXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlW107XG59XG5cbmZ1bmN0aW9uIGFwcG1lc2hSb3V0ZVNwZWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBtZXNoUm91dGVTcGVjKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICBncnBjX3JvdXRlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNHcnBjUm91dGVUb1RlcnJhZm9ybSkoc3RydWN0IS5ncnBjUm91dGUpLFxuICAgIGh0dHAyX3JvdXRlOiBjZGt0Zi5saXN0TWFwcGVyKGFwcG1lc2hSb3V0ZVNwZWNIdHRwMlJvdXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaHR0cDJSb3V0ZSksXG4gICAgaHR0cF9yb3V0ZTogY2RrdGYubGlzdE1hcHBlcihhcHBtZXNoUm91dGVTcGVjSHR0cFJvdXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEuaHR0cFJvdXRlKSxcbiAgICB0Y3Bfcm91dGU6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY1RjcFJvdXRlVG9UZXJyYWZvcm0pKHN0cnVjdCEudGNwUm91dGUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFwcG1lc2hSb3V0ZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFwcG1lc2hSb3V0ZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwcG1lc2hfcm91dGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbWVzaE5hbWUgPSBjb25maWcubWVzaE5hbWU7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gY29uZmlnLm1lc2hPd25lcjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl92aXJ0dWFsUm91dGVyTmFtZSA9IGNvbmZpZy52aXJ0dWFsUm91dGVyTmFtZTtcbiAgICB0aGlzLl9zcGVjID0gY29uZmlnLnNwZWM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY3JlYXRlZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfdXBkYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBtZXNoX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWVzaE5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCBtZXNoTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc2hfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzaE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc2hOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc2hOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc2hOYW1lXG4gIH1cblxuICAvLyBtZXNoX293bmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVzaE93bmVyPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IG1lc2hPd25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc2hfb3duZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc2hPd25lcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzaE93bmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWVzaE93bmVyKCkge1xuICAgIHRoaXMuX21lc2hPd25lciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVzaE93bmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc2hPd25lclxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyByZXNvdXJjZV9vd25lciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlT3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9vd25lcicpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vIHZpcnR1YWxfcm91dGVyX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmlydHVhbFJvdXRlck5hbWU6IHN0cmluZztcbiAgcHVibGljIGdldCB2aXJ0dWFsUm91dGVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZpcnR1YWxfcm91dGVyX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZpcnR1YWxSb3V0ZXJOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aXJ0dWFsUm91dGVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aXJ0dWFsUm91dGVyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsUm91dGVyTmFtZVxuICB9XG5cbiAgLy8gc3BlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zcGVjOiBBcHBtZXNoUm91dGVTcGVjW107XG4gIHB1YmxpYyBnZXQgc3BlYygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcGVjJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3BlYyh2YWx1ZTogQXBwbWVzaFJvdXRlU3BlY1tdKSB7XG4gICAgdGhpcy5fc3BlYyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWNcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzaF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZXNoTmFtZSksXG4gICAgICBtZXNoX293bmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZXNoT3duZXIpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHZpcnR1YWxfcm91dGVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZpcnR1YWxSb3V0ZXJOYW1lKSxcbiAgICAgIHNwZWM6IGNka3RmLmxpc3RNYXBwZXIoYXBwbWVzaFJvdXRlU3BlY1RvVGVycmFmb3JtKSh0aGlzLl9zcGVjKSxcbiAgICB9O1xuICB9XG59XG4iXX0=