import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LoadBalancerListenerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}.
     */
    readonly loadBalancerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}.
     */
    readonly loadBalancerPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#policy_names LoadBalancerListenerPolicy#policy_names}.
     */
    readonly policyNames?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy}.
 */
export declare class LoadBalancerListenerPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LoadBalancerListenerPolicyConfig);
    get id(): string;
    private _loadBalancerName;
    get loadBalancerName(): string;
    set loadBalancerName(value: string);
    get loadBalancerNameInput(): string;
    private _loadBalancerPort;
    get loadBalancerPort(): number;
    set loadBalancerPort(value: number);
    get loadBalancerPortInput(): number;
    private _policyNames?;
    get policyNames(): string[];
    set policyNames(value: string[]);
    resetPolicyNames(): void;
    get policyNamesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
