import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverRuleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#name Route53ResolverRuleAssociation#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#resolver_rule_id Route53ResolverRuleAssociation#resolver_rule_id}.
     */
    readonly resolverRuleId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#vpc_id Route53ResolverRuleAssociation#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#timeouts Route53ResolverRuleAssociation#timeouts}
     */
    readonly timeouts?: Route53ResolverRuleAssociationTimeouts;
}
export interface Route53ResolverRuleAssociationTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#create Route53ResolverRuleAssociation#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#delete Route53ResolverRuleAssociation#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association}.
 */
export declare class Route53ResolverRuleAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ResolverRuleAssociationConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _resolverRuleId;
    get resolverRuleId(): string;
    set resolverRuleId(value: string);
    get resolverRuleIdInput(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts?;
    get timeouts(): Route53ResolverRuleAssociationTimeouts;
    set timeouts(value: Route53ResolverRuleAssociationTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): Route53ResolverRuleAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
