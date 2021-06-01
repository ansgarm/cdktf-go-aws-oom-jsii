import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * data_catalog_encryption_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}
     */
    readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#aws_kms_key_id GlueDataCatalogEncryptionSettings#aws_kms_key_id}.
     */
    readonly awsKmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}.
     */
    readonly returnConnectionPasswordEncrypted: boolean;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}.
     */
    readonly catalogEncryptionMode: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}.
     */
    readonly sseAwsKmsKeyId?: string;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
    /**
     * connection_password_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}
     */
    readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption[];
    /**
     * encryption_at_rest block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}
     */
    readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}.
 */
export declare class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueDataCatalogEncryptionSettingsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    get id(): string;
    private _dataCatalogEncryptionSettings;
    get dataCatalogEncryptionSettings(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
    set dataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[]);
    get dataCatalogEncryptionSettingsInput(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
