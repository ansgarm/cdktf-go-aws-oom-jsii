// https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#load_balancer_name LoadBalancerPolicy#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_name LoadBalancerPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_type_name LoadBalancerPolicy#policy_type_name}
  */
  readonly policyTypeName: string;
  /**
  * policy_attribute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_attribute LoadBalancerPolicy#policy_attribute}
  */
  readonly policyAttribute?: LoadBalancerPolicyPolicyAttribute[];
}
export interface LoadBalancerPolicyPolicyAttribute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#name LoadBalancerPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#value LoadBalancerPolicy#value}
  */
  readonly value?: string;
}

function loadBalancerPolicyPolicyAttributeToTerraform(struct?: LoadBalancerPolicyPolicyAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy}
*/
export class LoadBalancerPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_load_balancer_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerName = config.loadBalancerName;
    this._policyName = config.policyName;
    this._policyTypeName = config.policyTypeName;
    this._policyAttribute = config.policyAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName: string;
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName: string;
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }

  // policy_type_name - computed: false, optional: false, required: true
  private _policyTypeName: string;
  public get policyTypeName() {
    return this.getStringAttribute('policy_type_name');
  }
  public set policyTypeName(value: string) {
    this._policyTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeNameInput() {
    return this._policyTypeName
  }

  // policy_attribute - computed: false, optional: true, required: false
  private _policyAttribute?: LoadBalancerPolicyPolicyAttribute[];
  public get policyAttribute() {
    return this.interpolationForAttribute('policy_attribute') as any;
  }
  public set policyAttribute(value: LoadBalancerPolicyPolicyAttribute[] ) {
    this._policyAttribute = value;
  }
  public resetPolicyAttribute() {
    this._policyAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAttributeInput() {
    return this._policyAttribute
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_type_name: cdktf.stringToTerraform(this._policyTypeName),
      policy_attribute: cdktf.listMapper(loadBalancerPolicyPolicyAttributeToTerraform)(this._policyAttribute),
    };
  }
}
