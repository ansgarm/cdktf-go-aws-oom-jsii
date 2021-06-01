import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#domain_name Route53ResolverRule#domain_name}.
     */
    readonly domainName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#name Route53ResolverRule#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#resolver_endpoint_id Route53ResolverRule#resolver_endpoint_id}.
     */
    readonly resolverEndpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#rule_type Route53ResolverRule#rule_type}.
     */
    readonly ruleType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags Route53ResolverRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags_all Route53ResolverRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * target_ip block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#target_ip Route53ResolverRule#target_ip}
     */
    readonly targetIp?: Route53ResolverRuleTargetIp[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#timeouts Route53ResolverRule#timeouts}
     */
    readonly timeouts?: Route53ResolverRuleTimeouts;
}
export interface Route53ResolverRuleTargetIp {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#ip Route53ResolverRule#ip}.
     */
    readonly ip: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#port Route53ResolverRule#port}.
     */
    readonly port?: number;
}
export interface Route53ResolverRuleTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#create Route53ResolverRule#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#delete Route53ResolverRule#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#update Route53ResolverRule#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule}.
 */
export declare class Route53ResolverRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ResolverRuleConfig);
    get arn(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get ownerId(): string;
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string | undefined;
    private _ruleType;
    get ruleType(): string;
    set ruleType(value: string);
    get ruleTypeInput(): string;
    get shareStatus(): string;
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
    private _targetIp?;
    get targetIp(): Route53ResolverRuleTargetIp[];
    set targetIp(value: Route53ResolverRuleTargetIp[]);
    resetTargetIp(): void;
    get targetIpInput(): Route53ResolverRuleTargetIp[] | undefined;
    private _timeouts?;
    get timeouts(): Route53ResolverRuleTimeouts;
    set timeouts(value: Route53ResolverRuleTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): Route53ResolverRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
