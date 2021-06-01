import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#description SagemakerFeatureGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}.
     */
    readonly eventTimeFeatureName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_group_name SagemakerFeatureGroup#feature_group_name}.
     */
    readonly featureGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}.
     */
    readonly recordIdentifierFeatureName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#role_arn SagemakerFeatureGroup#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags SagemakerFeatureGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags_all SagemakerFeatureGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * feature_definition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_definition SagemakerFeatureGroup#feature_definition}
     */
    readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[];
    /**
     * offline_store_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#offline_store_config SagemakerFeatureGroup#offline_store_config}
     */
    readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig[];
    /**
     * online_store_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#online_store_config SagemakerFeatureGroup#online_store_config}
     */
    readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig[];
}
export interface SagemakerFeatureGroupFeatureDefinition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_name SagemakerFeatureGroup#feature_name}.
     */
    readonly featureName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_type SagemakerFeatureGroup#feature_type}.
     */
    readonly featureType?: string;
}
export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#catalog SagemakerFeatureGroup#catalog}.
     */
    readonly catalog?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#database SagemakerFeatureGroup#database}.
     */
    readonly database?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#table_name SagemakerFeatureGroup#table_name}.
     */
    readonly tableName?: string;
}
export interface SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_uri SagemakerFeatureGroup#s3_uri}.
     */
    readonly s3Uri: string;
}
export interface SagemakerFeatureGroupOfflineStoreConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}.
     */
    readonly disableGlueTableCreation?: boolean;
    /**
     * data_catalog_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
     */
    readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig[];
    /**
     * s3_storage_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
     */
    readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig[];
}
export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}.
     */
    readonly kmsKeyId?: string;
}
export interface SagemakerFeatureGroupOnlineStoreConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#enable_online_store SagemakerFeatureGroup#enable_online_store}.
     */
    readonly enableOnlineStore?: boolean;
    /**
     * security_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#security_config SagemakerFeatureGroup#security_config}
     */
    readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group}.
 */
export declare class SagemakerFeatureGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventTimeFeatureName;
    get eventTimeFeatureName(): string;
    set eventTimeFeatureName(value: string);
    get eventTimeFeatureNameInput(): string;
    private _featureGroupName;
    get featureGroupName(): string;
    set featureGroupName(value: string);
    get featureGroupNameInput(): string;
    get id(): string;
    private _recordIdentifierFeatureName;
    get recordIdentifierFeatureName(): string;
    set recordIdentifierFeatureName(value: string);
    get recordIdentifierFeatureNameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _featureDefinition;
    get featureDefinition(): SagemakerFeatureGroupFeatureDefinition[];
    set featureDefinition(value: SagemakerFeatureGroupFeatureDefinition[]);
    get featureDefinitionInput(): SagemakerFeatureGroupFeatureDefinition[];
    private _offlineStoreConfig?;
    get offlineStoreConfig(): SagemakerFeatureGroupOfflineStoreConfig[];
    set offlineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig[]);
    resetOfflineStoreConfig(): void;
    get offlineStoreConfigInput(): SagemakerFeatureGroupOfflineStoreConfig[] | undefined;
    private _onlineStoreConfig?;
    get onlineStoreConfig(): SagemakerFeatureGroupOnlineStoreConfig[];
    set onlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig[]);
    resetOnlineStoreConfig(): void;
    get onlineStoreConfigInput(): SagemakerFeatureGroupOnlineStoreConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
