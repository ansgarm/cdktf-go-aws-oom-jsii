import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#billing_mode DynamodbTable#billing_mode}.
     */
    readonly billingMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#hash_key DynamodbTable#hash_key}.
     */
    readonly hashKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}.
     */
    readonly rangeKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#read_capacity DynamodbTable#read_capacity}.
     */
    readonly readCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#stream_enabled DynamodbTable#stream_enabled}.
     */
    readonly streamEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#stream_view_type DynamodbTable#stream_view_type}.
     */
    readonly streamViewType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#tags DynamodbTable#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#tags_all DynamodbTable#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#write_capacity DynamodbTable#write_capacity}.
     */
    readonly writeCapacity?: number;
    /**
     * attribute block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#attribute DynamodbTable#attribute}
     */
    readonly attribute: DynamodbTableAttribute[];
    /**
     * global_secondary_index block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#global_secondary_index DynamodbTable#global_secondary_index}
     */
    readonly globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[];
    /**
     * local_secondary_index block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#local_secondary_index DynamodbTable#local_secondary_index}
     */
    readonly localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[];
    /**
     * point_in_time_recovery block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#point_in_time_recovery DynamodbTable#point_in_time_recovery}
     */
    readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery[];
    /**
     * replica block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#replica DynamodbTable#replica}
     */
    readonly replica?: DynamodbTableReplica[];
    /**
     * server_side_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#server_side_encryption DynamodbTable#server_side_encryption}
     */
    readonly serverSideEncryption?: DynamodbTableServerSideEncryption[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#timeouts DynamodbTable#timeouts}
     */
    readonly timeouts?: DynamodbTableTimeouts;
    /**
     * ttl block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#ttl DynamodbTable#ttl}
     */
    readonly ttl?: DynamodbTableTtl[];
}
export interface DynamodbTableAttribute {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#type DynamodbTable#type}.
     */
    readonly type: string;
}
export interface DynamodbTableGlobalSecondaryIndex {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#hash_key DynamodbTable#hash_key}.
     */
    readonly hashKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#non_key_attributes DynamodbTable#non_key_attributes}.
     */
    readonly nonKeyAttributes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#projection_type DynamodbTable#projection_type}.
     */
    readonly projectionType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}.
     */
    readonly rangeKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#read_capacity DynamodbTable#read_capacity}.
     */
    readonly readCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#write_capacity DynamodbTable#write_capacity}.
     */
    readonly writeCapacity?: number;
}
export interface DynamodbTableLocalSecondaryIndex {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#non_key_attributes DynamodbTable#non_key_attributes}.
     */
    readonly nonKeyAttributes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#projection_type DynamodbTable#projection_type}.
     */
    readonly projectionType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}.
     */
    readonly rangeKey: string;
}
export interface DynamodbTablePointInTimeRecovery {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}.
     */
    readonly enabled: boolean;
}
export interface DynamodbTableReplica {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#region_name DynamodbTable#region_name}.
     */
    readonly regionName: string;
}
export interface DynamodbTableServerSideEncryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
}
export interface DynamodbTableTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#create DynamodbTable#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#delete DynamodbTable#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#update DynamodbTable#update}.
     */
    readonly update?: string;
}
export interface DynamodbTableTtl {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#attribute_name DynamodbTable#attribute_name}.
     */
    readonly attributeName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table}.
 */
export declare class DynamodbTable extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DynamodbTableConfig);
    get arn(): string;
    private _billingMode?;
    get billingMode(): string;
    set billingMode(value: string);
    resetBillingMode(): void;
    get billingModeInput(): string | undefined;
    private _hashKey;
    get hashKey(): string;
    set hashKey(value: string);
    get hashKeyInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rangeKey?;
    get rangeKey(): string;
    set rangeKey(value: string);
    resetRangeKey(): void;
    get rangeKeyInput(): string | undefined;
    private _readCapacity?;
    get readCapacity(): number;
    set readCapacity(value: number);
    resetReadCapacity(): void;
    get readCapacityInput(): number | undefined;
    get streamArn(): string;
    private _streamEnabled?;
    get streamEnabled(): boolean;
    set streamEnabled(value: boolean);
    resetStreamEnabled(): void;
    get streamEnabledInput(): boolean | undefined;
    get streamLabel(): string;
    private _streamViewType?;
    get streamViewType(): string;
    set streamViewType(value: string);
    resetStreamViewType(): void;
    get streamViewTypeInput(): string | undefined;
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
    private _writeCapacity?;
    get writeCapacity(): number;
    set writeCapacity(value: number);
    resetWriteCapacity(): void;
    get writeCapacityInput(): number | undefined;
    private _attribute;
    get attribute(): DynamodbTableAttribute[];
    set attribute(value: DynamodbTableAttribute[]);
    get attributeInput(): DynamodbTableAttribute[];
    private _globalSecondaryIndex?;
    get globalSecondaryIndex(): DynamodbTableGlobalSecondaryIndex[];
    set globalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[]);
    resetGlobalSecondaryIndex(): void;
    get globalSecondaryIndexInput(): DynamodbTableGlobalSecondaryIndex[] | undefined;
    private _localSecondaryIndex?;
    get localSecondaryIndex(): DynamodbTableLocalSecondaryIndex[];
    set localSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[]);
    resetLocalSecondaryIndex(): void;
    get localSecondaryIndexInput(): DynamodbTableLocalSecondaryIndex[] | undefined;
    private _pointInTimeRecovery?;
    get pointInTimeRecovery(): DynamodbTablePointInTimeRecovery[];
    set pointInTimeRecovery(value: DynamodbTablePointInTimeRecovery[]);
    resetPointInTimeRecovery(): void;
    get pointInTimeRecoveryInput(): DynamodbTablePointInTimeRecovery[] | undefined;
    private _replica?;
    get replica(): DynamodbTableReplica[];
    set replica(value: DynamodbTableReplica[]);
    resetReplica(): void;
    get replicaInput(): DynamodbTableReplica[] | undefined;
    private _serverSideEncryption?;
    get serverSideEncryption(): DynamodbTableServerSideEncryption[];
    set serverSideEncryption(value: DynamodbTableServerSideEncryption[]);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): DynamodbTableServerSideEncryption[] | undefined;
    private _timeouts?;
    get timeouts(): DynamodbTableTimeouts;
    set timeouts(value: DynamodbTableTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DynamodbTableTimeouts | undefined;
    private _ttl?;
    get ttl(): DynamodbTableTtl[];
    set ttl(value: DynamodbTableTtl[]);
    resetTtl(): void;
    get ttlInput(): DynamodbTableTtl[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
