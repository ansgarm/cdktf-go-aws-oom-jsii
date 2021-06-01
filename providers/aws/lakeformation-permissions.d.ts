import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_resource LakeformationPermissions#catalog_resource}.
     */
    readonly catalogResource?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions LakeformationPermissions#permissions}.
     */
    readonly permissions: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}.
     */
    readonly permissionsWithGrantOption?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#principal LakeformationPermissions#principal}.
     */
    readonly principal: string;
    /**
     * data_location block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#data_location LakeformationPermissions#data_location}
     */
    readonly dataLocation?: LakeformationPermissionsDataLocation[];
    /**
     * database block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database LakeformationPermissions#database}
     */
    readonly database?: LakeformationPermissionsDatabase[];
    /**
     * table block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table LakeformationPermissions#table}
     */
    readonly table?: LakeformationPermissionsTable[];
    /**
     * table_with_columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table_with_columns LakeformationPermissions#table_with_columns}
     */
    readonly tableWithColumns?: LakeformationPermissionsTableWithColumns[];
}
export interface LakeformationPermissionsDataLocation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#arn LakeformationPermissions#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
}
export interface LakeformationPermissionsDatabase {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}.
     */
    readonly name: string;
}
export interface LakeformationPermissionsTable {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}.
     */
    readonly wildcard?: boolean;
}
export interface LakeformationPermissionsTableWithColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#column_names LakeformationPermissions#column_names}.
     */
    readonly columnNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#excluded_column_names LakeformationPermissions#excluded_column_names}.
     */
    readonly excludedColumnNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}.
     */
    readonly wildcard?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions}.
 */
export declare class LakeformationPermissions extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LakeformationPermissionsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _catalogResource?;
    get catalogResource(): boolean;
    set catalogResource(value: boolean);
    resetCatalogResource(): void;
    get catalogResourceInput(): boolean | undefined;
    get id(): string;
    private _permissions;
    get permissions(): string[];
    set permissions(value: string[]);
    get permissionsInput(): string[];
    private _permissionsWithGrantOption?;
    get permissionsWithGrantOption(): string[];
    set permissionsWithGrantOption(value: string[]);
    resetPermissionsWithGrantOption(): void;
    get permissionsWithGrantOptionInput(): string[] | undefined;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _dataLocation?;
    get dataLocation(): LakeformationPermissionsDataLocation[];
    set dataLocation(value: LakeformationPermissionsDataLocation[]);
    resetDataLocation(): void;
    get dataLocationInput(): LakeformationPermissionsDataLocation[] | undefined;
    private _database?;
    get database(): LakeformationPermissionsDatabase[];
    set database(value: LakeformationPermissionsDatabase[]);
    resetDatabase(): void;
    get databaseInput(): LakeformationPermissionsDatabase[] | undefined;
    private _table?;
    get table(): LakeformationPermissionsTable[];
    set table(value: LakeformationPermissionsTable[]);
    resetTable(): void;
    get tableInput(): LakeformationPermissionsTable[] | undefined;
    private _tableWithColumns?;
    get tableWithColumns(): LakeformationPermissionsTableWithColumns[];
    set tableWithColumns(value: LakeformationPermissionsTableWithColumns[]);
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): LakeformationPermissionsTableWithColumns[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
