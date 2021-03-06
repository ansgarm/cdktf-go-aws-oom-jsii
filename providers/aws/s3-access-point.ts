// https://www.terraform.io/docs/providers/aws/r/s3_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3AccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#account_id S3AccessPoint#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#bucket S3AccessPoint#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#name S3AccessPoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#policy S3AccessPoint#policy}
  */
  readonly policy?: string;
  /**
  * public_access_block_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#public_access_block_configuration S3AccessPoint#public_access_block_configuration}
  */
  readonly publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration[];
  /**
  * vpc_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_configuration S3AccessPoint#vpc_configuration}
  */
  readonly vpcConfiguration?: S3AccessPointVpcConfiguration[];
}
export interface S3AccessPointPublicAccessBlockConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_acls S3AccessPoint#block_public_acls}
  */
  readonly blockPublicAcls?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_policy S3AccessPoint#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#ignore_public_acls S3AccessPoint#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#restrict_public_buckets S3AccessPoint#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean;
}

function s3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3AccessPointPublicAccessBlockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}

export interface S3AccessPointVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_id S3AccessPoint#vpc_id}
  */
  readonly vpcId: string;
}

function s3AccessPointVpcConfigurationToTerraform(struct?: S3AccessPointVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point}
*/
export class S3AccessPoint extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3AccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3AccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_access_point',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._bucket = config.bucket;
    this._name = config.name;
    this._policy = config.policy;
    this._publicAccessBlockConfiguration = config.publicAccessBlockConfiguration;
    this._vpcConfiguration = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // has_public_access_policy - computed: true, optional: false, required: false
  public get hasPublicAccessPolicy() {
    return this.getBooleanAttribute('has_public_access_policy');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network_origin - computed: true, optional: false, required: false
  public get networkOrigin() {
    return this.getStringAttribute('network_origin');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string ) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // public_access_block_configuration - computed: false, optional: true, required: false
  private _publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration[];
  public get publicAccessBlockConfiguration() {
    return this.interpolationForAttribute('public_access_block_configuration') as any;
  }
  public set publicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration[] ) {
    this._publicAccessBlockConfiguration = value;
  }
  public resetPublicAccessBlockConfiguration() {
    this._publicAccessBlockConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockConfigurationInput() {
    return this._publicAccessBlockConfiguration
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration?: S3AccessPointVpcConfiguration[];
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
  public set vpcConfiguration(value: S3AccessPointVpcConfiguration[] ) {
    this._vpcConfiguration = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket: cdktf.stringToTerraform(this._bucket),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      public_access_block_configuration: cdktf.listMapper(s3AccessPointPublicAccessBlockConfigurationToTerraform)(this._publicAccessBlockConfiguration),
      vpc_configuration: cdktf.listMapper(s3AccessPointVpcConfigurationToTerraform)(this._vpcConfiguration),
    };
  }
}
