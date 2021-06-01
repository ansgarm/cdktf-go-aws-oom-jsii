import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbSslNegotiationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#lb_port LbSslNegotiationPolicy#lb_port}.
     */
    readonly lbPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#load_balancer LbSslNegotiationPolicy#load_balancer}.
     */
    readonly loadBalancer: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#name LbSslNegotiationPolicy#name}.
     */
    readonly name: string;
    /**
     * attribute block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#attribute LbSslNegotiationPolicy#attribute}
     */
    readonly attribute?: LbSslNegotiationPolicyAttribute[];
}
export interface LbSslNegotiationPolicyAttribute {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#name LbSslNegotiationPolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#value LbSslNegotiationPolicy#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy}.
 */
export declare class LbSslNegotiationPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LbSslNegotiationPolicyConfig);
    get id(): string;
    private _lbPort;
    get lbPort(): number;
    set lbPort(value: number);
    get lbPortInput(): number;
    private _loadBalancer;
    get loadBalancer(): string;
    set loadBalancer(value: string);
    get loadBalancerInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _attribute?;
    get attribute(): LbSslNegotiationPolicyAttribute[];
    set attribute(value: LbSslNegotiationPolicyAttribute[]);
    resetAttribute(): void;
    get attributeInput(): LbSslNegotiationPolicyAttribute[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
