import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#admins LakeformationDataLakeSettings#admins}.
     */
    readonly admins?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#catalog_id LakeformationDataLakeSettings#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}.
     */
    readonly trustedResourceOwners?: string[];
    /**
     * create_database_default_permissions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}
     */
    readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
    /**
     * create_table_default_permissions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}
     */
    readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
}
export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}.
     */
    readonly permissions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}.
     */
    readonly principal?: string;
}
export interface LakeformationDataLakeSettingsCreateTableDefaultPermissions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}.
     */
    readonly permissions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}.
     */
    readonly principal?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}.
 */
export declare class LakeformationDataLakeSettings extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: LakeformationDataLakeSettingsConfig);
    private _admins?;
    get admins(): string[];
    set admins(value: string[]);
    resetAdmins(): void;
    get adminsInput(): string[] | undefined;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    get id(): string;
    private _trustedResourceOwners?;
    get trustedResourceOwners(): string[];
    set trustedResourceOwners(value: string[]);
    resetTrustedResourceOwners(): void;
    get trustedResourceOwnersInput(): string[] | undefined;
    private _createDatabaseDefaultPermissions?;
    get createDatabaseDefaultPermissions(): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
    set createDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[]);
    resetCreateDatabaseDefaultPermissions(): void;
    get createDatabaseDefaultPermissionsInput(): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | undefined;
    private _createTableDefaultPermissions?;
    get createTableDefaultPermissions(): LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
    set createTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[]);
    resetCreateTableDefaultPermissions(): void;
    get createTableDefaultPermissionsInput(): LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
