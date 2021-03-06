// https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#admins LakeformationDataLakeSettings#admins}
  */
  readonly admins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#catalog_id LakeformationDataLakeSettings#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}
  */
  readonly trustedResourceOwners?: string[];
  /**
  * create_database_default_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}
  */
  readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
  /**
  * create_table_default_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}
  */
  readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
}
export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}
  */
  readonly permissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}
  */
  readonly principal?: string;
}

function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export interface LakeformationDataLakeSettingsCreateTableDefaultPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}
  */
  readonly permissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}
  */
  readonly principal?: string;
}

function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
*/
export class LakeformationDataLakeSettings extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationDataLakeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LakeformationDataLakeSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_data_lake_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._admins = config.admins;
    this._catalogId = config.catalogId;
    this._trustedResourceOwners = config.trustedResourceOwners;
    this._createDatabaseDefaultPermissions = config.createDatabaseDefaultPermissions;
    this._createTableDefaultPermissions = config.createTableDefaultPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: true, required: false
  private _admins?: string[];
  public get admins() {
    return this.getListAttribute('admins');
  }
  public set admins(value: string[]) {
    this._admins = value;
  }
  public resetAdmins() {
    this._admins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string ) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trusted_resource_owners - computed: true, optional: true, required: false
  private _trustedResourceOwners?: string[];
  public get trustedResourceOwners() {
    return this.getListAttribute('trusted_resource_owners');
  }
  public set trustedResourceOwners(value: string[]) {
    this._trustedResourceOwners = value;
  }
  public resetTrustedResourceOwners() {
    this._trustedResourceOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedResourceOwnersInput() {
    return this._trustedResourceOwners
  }

  // create_database_default_permissions - computed: false, optional: true, required: false
  private _createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
  public get createDatabaseDefaultPermissions() {
    return this.interpolationForAttribute('create_database_default_permissions') as any;
  }
  public set createDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] ) {
    this._createDatabaseDefaultPermissions = value;
  }
  public resetCreateDatabaseDefaultPermissions() {
    this._createDatabaseDefaultPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseDefaultPermissionsInput() {
    return this._createDatabaseDefaultPermissions
  }

  // create_table_default_permissions - computed: false, optional: true, required: false
  private _createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
  public get createTableDefaultPermissions() {
    return this.interpolationForAttribute('create_table_default_permissions') as any;
  }
  public set createTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] ) {
    this._createTableDefaultPermissions = value;
  }
  public resetCreateTableDefaultPermissions() {
    this._createTableDefaultPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTableDefaultPermissionsInput() {
    return this._createTableDefaultPermissions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admins: cdktf.listMapper(cdktf.stringToTerraform)(this._admins),
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      trusted_resource_owners: cdktf.listMapper(cdktf.stringToTerraform)(this._trustedResourceOwners),
      create_database_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform)(this._createDatabaseDefaultPermissions),
      create_table_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform)(this._createTableDefaultPermissions),
    };
  }
}
