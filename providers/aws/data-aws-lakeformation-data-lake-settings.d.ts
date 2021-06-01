import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}.
     */
    readonly catalogId?: string;
}
export declare class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions extends cdktf.ComplexComputedList {
    get permissions(): string[];
    get principal(): string;
}
export declare class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions extends cdktf.ComplexComputedList {
    get permissions(): string[];
    get principal(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}.
 */
export declare class DataAwsLakeformationDataLakeSettings extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsLakeformationDataLakeSettingsConfig);
    get admins(): string[];
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    createDatabaseDefaultPermissions(index: string): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;
    createTableDefaultPermissions(index: string): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions;
    get id(): string;
    get trustedResourceOwners(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
