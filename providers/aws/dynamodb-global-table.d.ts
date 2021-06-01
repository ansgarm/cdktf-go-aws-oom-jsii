import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#name DynamodbGlobalTable#name}.
     */
    readonly name: string;
    /**
     * replica block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#replica DynamodbGlobalTable#replica}
     */
    readonly replica: DynamodbGlobalTableReplica[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#timeouts DynamodbGlobalTable#timeouts}
     */
    readonly timeouts?: DynamodbGlobalTableTimeouts;
}
export interface DynamodbGlobalTableReplica {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#region_name DynamodbGlobalTable#region_name}.
     */
    readonly regionName: string;
}
export interface DynamodbGlobalTableTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#create DynamodbGlobalTable#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#delete DynamodbGlobalTable#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#update DynamodbGlobalTable#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table}.
 */
export declare class DynamodbGlobalTable extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _replica;
    get replica(): DynamodbGlobalTableReplica[];
    set replica(value: DynamodbGlobalTableReplica[]);
    get replicaInput(): DynamodbGlobalTableReplica[];
    private _timeouts?;
    get timeouts(): DynamodbGlobalTableTimeouts;
    set timeouts(value: DynamodbGlobalTableTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DynamodbGlobalTableTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
