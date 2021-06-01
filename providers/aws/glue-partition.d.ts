import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GluePartitionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#catalog_id GluePartition#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#database_name GluePartition#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#partition_values GluePartition#partition_values}.
     */
    readonly partitionValues: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#table_name GluePartition#table_name}.
     */
    readonly tableName: string;
    /**
     * storage_descriptor block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#storage_descriptor GluePartition#storage_descriptor}
     */
    readonly storageDescriptor?: GluePartitionStorageDescriptor[];
}
export interface GluePartitionStorageDescriptorColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#comment GluePartition#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#type GluePartition#type}.
     */
    readonly type?: string;
}
export interface GluePartitionStorageDescriptorSerDeInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#serialization_library GluePartition#serialization_library}.
     */
    readonly serializationLibrary?: string;
}
export interface GluePartitionStorageDescriptorSkewedInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_names GluePartition#skewed_column_names}.
     */
    readonly skewedColumnNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}.
     */
    readonly skewedColumnValueLocationMaps?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_values GluePartition#skewed_column_values}.
     */
    readonly skewedColumnValues?: string[];
}
export interface GluePartitionStorageDescriptorSortColumns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#column GluePartition#column}.
     */
    readonly column: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_order GluePartition#sort_order}.
     */
    readonly sortOrder: number;
}
export interface GluePartitionStorageDescriptor {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#bucket_columns GluePartition#bucket_columns}.
     */
    readonly bucketColumns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#compressed GluePartition#compressed}.
     */
    readonly compressed?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#input_format GluePartition#input_format}.
     */
    readonly inputFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#location GluePartition#location}.
     */
    readonly location?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#number_of_buckets GluePartition#number_of_buckets}.
     */
    readonly numberOfBuckets?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#output_format GluePartition#output_format}.
     */
    readonly outputFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#stored_as_sub_directories GluePartition#stored_as_sub_directories}.
     */
    readonly storedAsSubDirectories?: boolean;
    /**
     * columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#columns GluePartition#columns}
     */
    readonly columns?: GluePartitionStorageDescriptorColumns[];
    /**
     * ser_de_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#ser_de_info GluePartition#ser_de_info}
     */
    readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo[];
    /**
     * skewed_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_info GluePartition#skewed_info}
     */
    readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo[];
    /**
     * sort_columns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_columns GluePartition#sort_columns}
     */
    readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition}.
 */
export declare class GluePartition extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GluePartitionConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    get creationTime(): string;
    private _databaseName;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    get id(): string;
    get lastAccessedTime(): string;
    get lastAnalyzedTime(): string;
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
    private _partitionValues;
    get partitionValues(): string[];
    set partitionValues(value: string[]);
    get partitionValuesInput(): string[];
    private _tableName;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    private _storageDescriptor?;
    get storageDescriptor(): GluePartitionStorageDescriptor[];
    set storageDescriptor(value: GluePartitionStorageDescriptor[]);
    resetStorageDescriptor(): void;
    get storageDescriptorInput(): GluePartitionStorageDescriptor[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
