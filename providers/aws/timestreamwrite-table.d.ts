import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#database_name TimestreamwriteTable#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#table_name TimestreamwriteTable#table_name}.
     */
    readonly tableName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#tags TimestreamwriteTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#tags_all TimestreamwriteTable#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * retention_properties block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#retention_properties TimestreamwriteTable#retention_properties}
     */
    readonly retentionProperties?: TimestreamwriteTableRetentionProperties[];
}
export interface TimestreamwriteTableRetentionProperties {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#magnetic_store_retention_period_in_days TimestreamwriteTable#magnetic_store_retention_period_in_days}.
     */
    readonly magneticStoreRetentionPeriodInDays: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#memory_store_retention_period_in_hours TimestreamwriteTable#memory_store_retention_period_in_hours}.
     */
    readonly memoryStoreRetentionPeriodInHours: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table}.
 */
export declare class TimestreamwriteTable extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: TimestreamwriteTableConfig);
    get arn(): string;
    private _databaseName;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    get id(): string;
    private _tableName;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
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
    private _retentionProperties?;
    get retentionProperties(): TimestreamwriteTableRetentionProperties[];
    set retentionProperties(value: TimestreamwriteTableRetentionProperties[]);
    resetRetentionProperties(): void;
    get retentionPropertiesInput(): TimestreamwriteTableRetentionProperties[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
