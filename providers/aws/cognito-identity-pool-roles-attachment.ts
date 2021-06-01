// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityPoolRolesAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#roles CognitoIdentityPoolRolesAttachment#roles}
  */
  readonly roles: { [key: string]: string };
  /**
  * role_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#role_mapping CognitoIdentityPoolRolesAttachment#role_mapping}
  */
  readonly roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[];
}
export interface CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#claim CognitoIdentityPoolRolesAttachment#claim}
  */
  readonly claim: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#match_type CognitoIdentityPoolRolesAttachment#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#role_arn CognitoIdentityPoolRolesAttachment#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#value CognitoIdentityPoolRolesAttachment#value}
  */
  readonly value: string;
}

function cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CognitoIdentityPoolRolesAttachmentRoleMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#ambiguous_role_resolution CognitoIdentityPoolRolesAttachment#ambiguous_role_resolution}
  */
  readonly ambiguousRoleResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#identity_provider CognitoIdentityPoolRolesAttachment#identity_provider}
  */
  readonly identityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#type CognitoIdentityPoolRolesAttachment#type}
  */
  readonly type: string;
  /**
  * mapping_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#mapping_rule CognitoIdentityPoolRolesAttachment#mapping_rule}
  */
  readonly mappingRule?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[];
}

function cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ambiguous_role_resolution: cdktf.stringToTerraform(struct!.ambiguousRoleResolution),
    identity_provider: cdktf.stringToTerraform(struct!.identityProvider),
    type: cdktf.stringToTerraform(struct!.type),
    mapping_rule: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform)(struct!.mappingRule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment}
*/
export class CognitoIdentityPoolRolesAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoIdentityPoolRolesAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoIdentityPoolRolesAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_pool_roles_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._identityPoolId = config.identityPoolId;
    this._roles = config.roles;
    this._roleMapping = config.roleMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId: string;
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId
  }

  // roles - computed: false, optional: false, required: true
  private _roles: { [key: string]: string };
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: { [key: string]: string }) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // role_mapping - computed: false, optional: true, required: false
  private _roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[];
  public get roleMapping() {
    return this.interpolationForAttribute('role_mapping') as any;
  }
  public set roleMapping(value: CognitoIdentityPoolRolesAttachmentRoleMapping[] ) {
    this._roleMapping = value;
  }
  public resetRoleMapping() {
    this._roleMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMappingInput() {
    return this._roleMapping
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_pool_id: cdktf.stringToTerraform(this._identityPoolId),
      roles: cdktf.hashMapper(cdktf.anyToTerraform)(this._roles),
      role_mapping: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform)(this._roleMapping),
    };
  }
}
