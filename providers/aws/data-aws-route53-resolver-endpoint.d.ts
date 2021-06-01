import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}.
     */
    readonly resolverEndpointId?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#filter DataAwsRoute53ResolverEndpoint#filter}
     */
    readonly filter?: DataAwsRoute53ResolverEndpointFilter[];
}
export interface DataAwsRoute53ResolverEndpointFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#name DataAwsRoute53ResolverEndpoint#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#values DataAwsRoute53ResolverEndpoint#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint}.
 */
export declare class DataAwsRoute53ResolverEndpoint extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ResolverEndpointConfig);
    get arn(): string;
    get direction(): string;
    get id(): string;
    get ipAddresses(): string[];
    get name(): string;
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string | undefined;
    get status(): string;
    get vpcId(): string;
    private _filter?;
    get filter(): DataAwsRoute53ResolverEndpointFilter[];
    set filter(value: DataAwsRoute53ResolverEndpointFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRoute53ResolverEndpointFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
