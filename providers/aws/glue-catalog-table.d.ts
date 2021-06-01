import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#description GlueCatalogTable#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#owner GlueCatalogTable#owner}.
     */
    readonly owner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#retention GlueCatalogTable#retention}.
     */
    readonly retention?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#table_type GlueCatalogTable#table_type}.
     */
    readonly tableType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_expanded_text GlueCatalogTable#view_expanded_text}.
     */
    readonly viewExpandedText?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_original_text GlueCatalogTable#view_original_text}.
     */
    readonly viewOriginalText?: string;
    /**
     * partition_index block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_index GlueCatalogTable#partition_index}
     */
    readonly partitionIndex?: GlueCatalogTablePartitionIndex[];
    /**
     * partition_keys block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_keys GlueCatalogTable#partition_keys}
     */
    readonly partitionKeys?: GlueCatalogTablePartitionKeys[];
    /**
     * storage_descriptor block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#storage_descriptor GlueCatalogTable#storage_descriptor}
     */
    readonly storageDescriptor?: GlueCatalogTableStorageDescriptor[];
}
export interface GlueCatalogTablePartitionIndex {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#index_name GlueCatalogTable#index_name}.
     */
    readonly indexName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#keys GlueCatalogTable#keys}.
     */
    readonly keys: string[];
}
export interface GlueCatalogTablePartitionKeys {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}.
     */
    readonly type?: string;
}
export interface GlueCatalogTableStorageDescriptorColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}.
     */
    readonly type?: string;
}
export interface GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#registry_name GlueCatalogTable#registry_name}.
     */
    readonly registryName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_arn GlueCatalogTable#schema_arn}.
     */
    readonly schemaArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_name GlueCatalogTable#schema_name}.
     */
    readonly schemaName?: string;
}
export interface GlueCatalogTableStorageDescriptorSchemaReference {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_id GlueCatalogTable#schema_version_id}.
     */
    readonly schemaVersionId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_number GlueCatalogTable#schema_version_number}.
     */
    readonly schemaVersionNumber: number;
    /**
     * schema_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_id GlueCatalogTable#schema_id}
     */
    readonly schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId[];
}
export interface GlueCatalogTableStorageDescriptorSerDeInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#serialization_library GlueCatalogTable#serialization_library}.
     */
    readonly serializationLibrary?: string;
}
export interface GlueCatalogTableStorageDescriptorSkewedInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_names GlueCatalogTable#skewed_column_names}.
     */
    readonly skewedColumnNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}.
     */
    readonly skewedColumnValueLocationMaps?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_values GlueCatalogTable#skewed_column_values}.
     */
    readonly skewedColumnValues?: string[];
}
export interface GlueCatalogTableStorageDescriptorSortColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#column GlueCatalogTable#column}.
     */
    readonly column: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_order GlueCatalogTable#sort_order}.
     */
    readonly sortOrder: number;
}
export interface GlueCatalogTableStorageDescriptor {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#bucket_columns GlueCatalogTable#bucket_columns}.
     */
    readonly bucketColumns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#compressed GlueCatalogTable#compressed}.
     */
    readonly compressed?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#input_format GlueCatalogTable#input_format}.
     */
    readonly inputFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#location GlueCatalogTable#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#number_of_buckets GlueCatalogTable#number_of_buckets}.
     */
    readonly numberOfBuckets?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#output_format GlueCatalogTable#output_format}.
     */
    readonly outputFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}.
     */
    readonly storedAsSubDirectories?: boolean;
    /**
     * columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#columns GlueCatalogTable#columns}
     */
    readonly columns?: GlueCatalogTableStorageDescriptorColumns[];
    /**
     * schema_reference block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_reference GlueCatalogTable#schema_reference}
     */
    readonly schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference[];
    /**
     * ser_de_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#ser_de_info GlueCatalogTable#ser_de_info}
     */
    readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo[];
    /**
     * skewed_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_info GlueCatalogTable#skewed_info}
     */
    readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo[];
    /**
     * sort_columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_columns GlueCatalogTable#sort_columns}
     */
    readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table}.
 */
export declare class GlueCatalogTable extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueCatalogTableConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _databaseName;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _retention?;
    get retention(): number;
    set retention(value: number);
    resetRetention(): void;
    get retentionInput(): number | undefined;
    private _tableType?;
    get tableType(): string;
    set tableType(value: string);
    resetTableType(): void;
    get tableTypeInput(): string | undefined;
    private _viewExpandedText?;
    get viewExpandedText(): string;
    set viewExpandedText(value: string);
    resetViewExpandedText(): void;
    get viewExpandedTextInput(): string | undefined;
    private _viewOriginalText?;
    get viewOriginalText(): string;
    set viewOriginalText(value: string);
    resetViewOriginalText(): void;
    get viewOriginalTextInput(): string | undefined;
    private _partitionIndex?;
    get partitionIndex(): GlueCatalogTablePartitionIndex[];
    set partitionIndex(value: GlueCatalogTablePartitionIndex[]);
    resetPartitionIndex(): void;
    get partitionIndexInput(): GlueCatalogTablePartitionIndex[] | undefined;
    private _partitionKeys?;
    get partitionKeys(): GlueCatalogTablePartitionKeys[];
    set partitionKeys(value: GlueCatalogTablePartitionKeys[]);
    resetPartitionKeys(): void;
    get partitionKeysInput(): GlueCatalogTablePartitionKeys[] | undefined;
    private _storageDescriptor?;
    get storageDescriptor(): GlueCatalogTableStorageDescriptor[];
    set storageDescriptor(value: GlueCatalogTableStorageDescriptor[]);
    resetStorageDescriptor(): void;
    get storageDescriptorInput(): GlueCatalogTableStorageDescriptor[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
