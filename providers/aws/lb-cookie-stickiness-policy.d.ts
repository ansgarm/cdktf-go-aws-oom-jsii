import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}.
     */
    readonly cookieExpirationPeriod?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#lb_port LbCookieStickinessPolicy#lb_port}.
     */
    readonly lbPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#load_balancer LbCookieStickinessPolicy#load_balancer}.
     */
    readonly loadBalancer: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#name LbCookieStickinessPolicy#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy}.
 */
export declare class LbCookieStickinessPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LbCookieStickinessPolicyConfig);
    private _cookieExpirationPeriod?;
    get cookieExpirationPeriod(): number;
    set cookieExpirationPeriod(value: number);
    resetCookieExpirationPeriod(): void;
    get cookieExpirationPeriodInput(): number | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
