// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}
  */
  readonly rotationLambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#secret_id SecretsmanagerSecretRotation#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#tags SecretsmanagerSecretRotation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rotation_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_rules SecretsmanagerSecretRotation#rotation_rules}
  */
  readonly rotationRules: SecretsmanagerSecretRotationRotationRules[];
}
export interface SecretsmanagerSecretRotationRotationRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}
  */
  readonly automaticallyAfterDays: number;
}

function secretsmanagerSecretRotationRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRotationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatically_after_days: cdktf.numberToTerraform(struct!.automaticallyAfterDays),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}
*/
export class SecretsmanagerSecretRotation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsmanagerSecretRotationConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_rotation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._rotationLambdaArn = config.rotationLambdaArn;
    this._secretId = config.secretId;
    this._tags = config.tags;
    this._rotationRules = config.rotationRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rotation_enabled - computed: true, optional: false, required: false
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }

  // rotation_lambda_arn - computed: false, optional: false, required: true
  private _rotationLambdaArn: string;
  public get rotationLambdaArn() {
    return this.getStringAttribute('rotation_lambda_arn');
  }
  public set rotationLambdaArn(value: string) {
    this._rotationLambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationLambdaArnInput() {
    return this._rotationLambdaArn
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // rotation_rules - computed: false, optional: false, required: true
  private _rotationRules: SecretsmanagerSecretRotationRotationRules[];
  public get rotationRules() {
    return this.interpolationForAttribute('rotation_rules') as any;
  }
  public set rotationRules(value: SecretsmanagerSecretRotationRotationRules[]) {
    this._rotationRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationRulesInput() {
    return this._rotationRules
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rotation_lambda_arn: cdktf.stringToTerraform(this._rotationLambdaArn),
      secret_id: cdktf.stringToTerraform(this._secretId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      rotation_rules: cdktf.listMapper(secretsmanagerSecretRotationRotationRulesToTerraform)(this._rotationRules),
    };
  }
}
