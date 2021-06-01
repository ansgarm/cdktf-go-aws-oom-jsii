import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#cookie_name AppCookieStickinessPolicy#cookie_name}.
     */
    readonly cookieName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#lb_port AppCookieStickinessPolicy#lb_port}.
     */
    readonly lbPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#load_balancer AppCookieStickinessPolicy#load_balancer}.
     */
    readonly loadBalancer: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#name AppCookieStickinessPolicy#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy}.
 */
export declare class AppCookieStickinessPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AppCookieStickinessPolicyConfig);
    private _cookieName;
    get cookieName(): string;
    set cookieName(value: string);
    get cookieNameInput(): string;
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
