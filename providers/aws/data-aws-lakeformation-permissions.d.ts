import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_resource DataAwsLakeformationPermissions#catalog_resource}.
     */
    readonly catalogResource?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#principal DataAwsLakeformationPermissions#principal}.
     */
    readonly principal: string;
    /**
     * data_location block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#data_location DataAwsLakeformationPermissions#data_location}
     */
    readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation[];
    /**
     * database block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database DataAwsLakeformationPermissions#database}
     */
    readonly database?: DataAwsLakeformationPermissionsDatabase[];
    /**
     * table block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table DataAwsLakeformationPermissions#table}
     */
    readonly table?: DataAwsLakeformationPermissionsTable[];
    /**
     * table_with_columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
     */
    readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns[];
}
export interface DataAwsLakeformationPermissionsDataLocation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#arn DataAwsLakeformationPermissions#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
}
export interface DataAwsLakeformationPermissionsDatabase {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}.
     */
    readonly name: string;
}
export interface DataAwsLakeformationPermissionsTable {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}.
     */
    readonly wildcard?: boolean;
}
export interface DataAwsLakeformationPermissionsTableWithColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#column_names DataAwsLakeformationPermissions#column_names}.
     */
    readonly columnNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}.
     */
    readonly excludedColumnNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}.
     */
    readonly wildcard?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions}.
 */
export declare class DataAwsLakeformationPermissions extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLakeformationPermissionsConfig);
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
    get permissions(): string[];
    get permissionsWithGrantOption(): string[];
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _dataLocation?;
    get dataLocation(): DataAwsLakeformationPermissionsDataLocation[];
    set dataLocation(value: DataAwsLakeformationPermissionsDataLocation[]);
    resetDataLocation(): void;
    get dataLocationInput(): DataAwsLakeformationPermissionsDataLocation[] | undefined;
    private _database?;
    get database(): DataAwsLakeformationPermissionsDatabase[];
    set database(value: DataAwsLakeformationPermissionsDatabase[]);
    resetDatabase(): void;
    get databaseInput(): DataAwsLakeformationPermissionsDatabase[] | undefined;
    private _table?;
    get table(): DataAwsLakeformationPermissionsTable[];
    set table(value: DataAwsLakeformationPermissionsTable[]);
    resetTable(): void;
    get tableInput(): DataAwsLakeformationPermissionsTable[] | undefined;
    private _tableWithColumns?;
    get tableWithColumns(): DataAwsLakeformationPermissionsTableWithColumns[];
    set tableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns[]);
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): DataAwsLakeformationPermissionsTableWithColumns[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
