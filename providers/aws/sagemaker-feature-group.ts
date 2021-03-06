// https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#description SagemakerFeatureGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
  */
  readonly eventTimeFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_group_name SagemakerFeatureGroup#feature_group_name}
  */
  readonly featureGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
  */
  readonly recordIdentifierFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#role_arn SagemakerFeatureGroup#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags SagemakerFeatureGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags_all SagemakerFeatureGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * feature_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_definition SagemakerFeatureGroup#feature_definition}
  */
  readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[];
  /**
  * offline_store_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#offline_store_config SagemakerFeatureGroup#offline_store_config}
  */
  readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig[];
  /**
  * online_store_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#online_store_config SagemakerFeatureGroup#online_store_config}
  */
  readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig[];
}
export interface SagemakerFeatureGroupFeatureDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_name SagemakerFeatureGroup#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_type SagemakerFeatureGroup#feature_type}
  */
  readonly featureType?: string;
}

function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct?: SagemakerFeatureGroupFeatureDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    feature_type: cdktf.stringToTerraform(struct!.featureType),
  }
}

export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#catalog SagemakerFeatureGroup#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#database SagemakerFeatureGroup#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#table_name SagemakerFeatureGroup#table_name}
  */
  readonly tableName?: string;
}

function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    database: cdktf.stringToTerraform(struct!.database),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_uri SagemakerFeatureGroup#s3_uri}
  */
  readonly s3Uri: string;
}

function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerFeatureGroupOfflineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
  */
  readonly disableGlueTableCreation?: boolean;
  /**
  * data_catalog_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
  */
  readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig[];
  /**
  * s3_storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
  */
  readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig[];
}

function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_glue_table_creation: cdktf.booleanToTerraform(struct!.disableGlueTableCreation),
    data_catalog_config: cdktf.listMapper(sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform)(struct!.dataCatalogConfig),
    s3_storage_config: cdktf.listMapper(sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform)(struct!.s3StorageConfig),
  }
}

export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export interface SagemakerFeatureGroupOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#enable_online_store SagemakerFeatureGroup#enable_online_store}
  */
  readonly enableOnlineStore?: boolean;
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#security_config SagemakerFeatureGroup#security_config}
  */
  readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig[];
}

function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
    security_config: cdktf.listMapper(sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform)(struct!.securityConfig),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group}
*/
export class SagemakerFeatureGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerFeatureGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_feature_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._eventTimeFeatureName = config.eventTimeFeatureName;
    this._featureGroupName = config.featureGroupName;
    this._recordIdentifierFeatureName = config.recordIdentifierFeatureName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._featureDefinition = config.featureDefinition;
    this._offlineStoreConfig = config.offlineStoreConfig;
    this._onlineStoreConfig = config.onlineStoreConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // event_time_feature_name - computed: false, optional: false, required: true
  private _eventTimeFeatureName: string;
  public get eventTimeFeatureName() {
    return this.getStringAttribute('event_time_feature_name');
  }
  public set eventTimeFeatureName(value: string) {
    this._eventTimeFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeFeatureNameInput() {
    return this._eventTimeFeatureName
  }

  // feature_group_name - computed: false, optional: false, required: true
  private _featureGroupName: string;
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
  public set featureGroupName(value: string) {
    this._featureGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupNameInput() {
    return this._featureGroupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // record_identifier_feature_name - computed: false, optional: false, required: true
  private _recordIdentifierFeatureName: string;
  public get recordIdentifierFeatureName() {
    return this.getStringAttribute('record_identifier_feature_name');
  }
  public set recordIdentifierFeatureName(value: string) {
    this._recordIdentifierFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdentifierFeatureNameInput() {
    return this._recordIdentifierFeatureName
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // feature_definition - computed: false, optional: false, required: true
  private _featureDefinition: SagemakerFeatureGroupFeatureDefinition[];
  public get featureDefinition() {
    return this.interpolationForAttribute('feature_definition') as any;
  }
  public set featureDefinition(value: SagemakerFeatureGroupFeatureDefinition[]) {
    this._featureDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDefinitionInput() {
    return this._featureDefinition
  }

  // offline_store_config - computed: false, optional: true, required: false
  private _offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig[];
  public get offlineStoreConfig() {
    return this.interpolationForAttribute('offline_store_config') as any;
  }
  public set offlineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig[] ) {
    this._offlineStoreConfig = value;
  }
  public resetOfflineStoreConfig() {
    this._offlineStoreConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineStoreConfigInput() {
    return this._offlineStoreConfig
  }

  // online_store_config - computed: false, optional: true, required: false
  private _onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig[];
  public get onlineStoreConfig() {
    return this.interpolationForAttribute('online_store_config') as any;
  }
  public set onlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig[] ) {
    this._onlineStoreConfig = value;
  }
  public resetOnlineStoreConfig() {
    this._onlineStoreConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreConfigInput() {
    return this._onlineStoreConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_time_feature_name: cdktf.stringToTerraform(this._eventTimeFeatureName),
      feature_group_name: cdktf.stringToTerraform(this._featureGroupName),
      record_identifier_feature_name: cdktf.stringToTerraform(this._recordIdentifierFeatureName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      feature_definition: cdktf.listMapper(sagemakerFeatureGroupFeatureDefinitionToTerraform)(this._featureDefinition),
      offline_store_config: cdktf.listMapper(sagemakerFeatureGroupOfflineStoreConfigToTerraform)(this._offlineStoreConfig),
      online_store_config: cdktf.listMapper(sagemakerFeatureGroupOnlineStoreConfigToTerraform)(this._onlineStoreConfig),
    };
  }
}
