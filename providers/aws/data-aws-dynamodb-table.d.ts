import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#name DataAwsDynamodbTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#tags DataAwsDynamodbTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * server_side_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#server_side_encryption DataAwsDynamodbTable#server_side_encryption}
     */
    readonly serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption[];
}
export declare class DataAwsDynamodbTableAttribute extends cdktf.ComplexComputedList {
    get name(): string;
    get type(): string;
}
export declare class DataAwsDynamodbTableGlobalSecondaryIndex extends cdktf.ComplexComputedList {
    get hashKey(): string;
    get name(): string;
    get nonKeyAttributes(): string[];
    get projectionType(): string;
    get rangeKey(): string;
    get readCapacity(): number;
    get writeCapacity(): number;
}
export declare class DataAwsDynamodbTableLocalSecondaryIndex extends cdktf.ComplexComputedList {
    get name(): string;
    get nonKeyAttributes(): string[];
    get projectionType(): string;
    get rangeKey(): string;
}
export declare class DataAwsDynamodbTablePointInTimeRecovery extends cdktf.ComplexComputedList {
    get enabled(): boolean;
}
export declare class DataAwsDynamodbTableReplica extends cdktf.ComplexComputedList {
    get kmsKeyArn(): string;
    get regionName(): string;
}
export declare class DataAwsDynamodbTableTtl extends cdktf.ComplexComputedList {
    get attributeName(): string;
    get enabled(): boolean;
}
export interface DataAwsDynamodbTableServerSideEncryption {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table}.
 */
export declare class DataAwsDynamodbTable extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsDynamodbTableConfig);
    get arn(): string;
    attribute(index: string): DataAwsDynamodbTableAttribute;
    get billingMode(): string;
    globalSecondaryIndex(index: string): DataAwsDynamodbTableGlobalSecondaryIndex;
    get hashKey(): string;
    get id(): string;
    localSecondaryIndex(index: string): DataAwsDynamodbTableLocalSecondaryIndex;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    pointInTimeRecovery(index: string): DataAwsDynamodbTablePointInTimeRecovery;
    get rangeKey(): string;
    get readCapacity(): number;
    replica(index: string): DataAwsDynamodbTableReplica;
    get streamArn(): string;
    get streamEnabled(): boolean;
    get streamLabel(): string;
    get streamViewType(): string;
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
    ttl(index: string): DataAwsDynamodbTableTtl;
    get writeCapacity(): number;
    private _serverSideEncryption?;
    get serverSideEncryption(): DataAwsDynamodbTableServerSideEncryption[];
    set serverSideEncryption(value: DataAwsDynamodbTableServerSideEncryption[]);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): DataAwsDynamodbTableServerSideEncryption[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
