import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#direction Route53ResolverEndpoint#direction}.
     */
    readonly direction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#name Route53ResolverEndpoint#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#security_group_ids Route53ResolverEndpoint#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#tags Route53ResolverEndpoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#tags_all Route53ResolverEndpoint#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * ip_address block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#ip_address Route53ResolverEndpoint#ip_address}
     */
    readonly ipAddress: Route53ResolverEndpointIpAddress[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#timeouts Route53ResolverEndpoint#timeouts}
     */
    readonly timeouts?: Route53ResolverEndpointTimeouts;
}
export interface Route53ResolverEndpointIpAddress {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#ip Route53ResolverEndpoint#ip}.
     */
    readonly ip?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#subnet_id Route53ResolverEndpoint#subnet_id}.
     */
    readonly subnetId: string;
}
export interface Route53ResolverEndpointTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#create Route53ResolverEndpoint#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#delete Route53ResolverEndpoint#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html#update Route53ResolverEndpoint#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html aws_route53_resolver_endpoint}.
 */
export declare class Route53ResolverEndpoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html aws_route53_resolver_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ResolverEndpointConfig);
    get arn(): string;
    private _direction;
    get direction(): string;
    set direction(value: string);
    get directionInput(): string;
    get hostVpcId(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _securityGroupIds;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
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
    private _ipAddress;
    get ipAddress(): Route53ResolverEndpointIpAddress[];
    set ipAddress(value: Route53ResolverEndpointIpAddress[]);
    get ipAddressInput(): Route53ResolverEndpointIpAddress[];
    private _timeouts?;
    get timeouts(): Route53ResolverEndpointTimeouts;
    set timeouts(value: Route53ResolverEndpointTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): Route53ResolverEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
