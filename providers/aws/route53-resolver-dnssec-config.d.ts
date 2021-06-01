import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverDnssecConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config.html#resource_id Route53ResolverDnssecConfig#resource_id}.
     */
    readonly resourceId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config.html aws_route53_resolver_dnssec_config}.
 */
export declare class Route53ResolverDnssecConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_dnssec_config.html aws_route53_resolver_dnssec_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ResolverDnssecConfigConfig);
    get arn(): string;
    get id(): string;
    get ownerId(): string;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    get validationStatus(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
