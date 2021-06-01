import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#domain_name DataAwsRoute53ResolverRule#domain_name}.
     */
    readonly domainName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#name DataAwsRoute53ResolverRule#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}.
     */
    readonly resolverEndpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}.
     */
    readonly resolverRuleId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#rule_type DataAwsRoute53ResolverRule#rule_type}.
     */
    readonly ruleType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html#tags DataAwsRoute53ResolverRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html aws_route53_resolver_rule}.
 */
export declare class DataAwsRoute53ResolverRule extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html aws_route53_resolver_rule} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ResolverRuleConfig);
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
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
    private _resolverRuleId?;
    get resolverRuleId(): string;
    set resolverRuleId(value: string);
    resetResolverRuleId(): void;
    get resolverRuleIdInput(): string | undefined;
    private _ruleType?;
    get ruleType(): string;
    set ruleType(value: string);
    resetRuleType(): void;
    get ruleTypeInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
