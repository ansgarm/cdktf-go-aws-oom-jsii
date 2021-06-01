import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbTableItemConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#hash_key DynamodbTableItem#hash_key}.
     */
    readonly hashKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#item DynamodbTableItem#item}.
     */
    readonly item: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#range_key DynamodbTableItem#range_key}.
     */
    readonly rangeKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#table_name DynamodbTableItem#table_name}.
     */
    readonly tableName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html aws_dynamodb_table_item}.
 */
export declare class DynamodbTableItem extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html aws_dynamodb_table_item} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DynamodbTableItemConfig);
    private _hashKey;
    get hashKey(): string;
    set hashKey(value: string);
    get hashKeyInput(): string;
    get id(): string;
    private _item;
    get item(): string;
    set item(value: string);
    get itemInput(): string;
    private _rangeKey?;
    get rangeKey(): string;
    set rangeKey(value: string);
    resetRangeKey(): void;
    get rangeKeyInput(): string | undefined;
    private _tableName;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
