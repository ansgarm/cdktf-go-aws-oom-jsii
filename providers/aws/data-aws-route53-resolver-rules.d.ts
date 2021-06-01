import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ResolverRulesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#owner_id DataAwsRoute53ResolverRules#owner_id}.
     */
    readonly ownerId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.
     */
    readonly resolverEndpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#rule_type DataAwsRoute53ResolverRules#rule_type}.
     */
    readonly ruleType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#share_status DataAwsRoute53ResolverRules#share_status}.
     */
    readonly shareStatus?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules}.
 */
export declare class DataAwsRoute53ResolverRules extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ResolverRulesConfig);
    get id(): string;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string | undefined;
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string | undefined;
    get resolverRuleIds(): string[];
    private _ruleType?;
    get ruleType(): string;
    set ruleType(value: string);
    resetRuleType(): void;
    get ruleTypeInput(): string | undefined;
    private _shareStatus?;
    get shareStatus(): string;
    set shareStatus(value: string);
    resetShareStatus(): void;
    get shareStatusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
