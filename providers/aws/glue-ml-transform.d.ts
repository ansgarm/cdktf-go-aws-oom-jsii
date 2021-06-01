import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueMlTransformConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#description GlueMlTransform#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#glue_version GlueMlTransform#glue_version}.
     */
    readonly glueVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#max_capacity GlueMlTransform#max_capacity}.
     */
    readonly maxCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#max_retries GlueMlTransform#max_retries}.
     */
    readonly maxRetries?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#name GlueMlTransform#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#number_of_workers GlueMlTransform#number_of_workers}.
     */
    readonly numberOfWorkers?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#role_arn GlueMlTransform#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#tags GlueMlTransform#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#tags_all GlueMlTransform#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#timeout GlueMlTransform#timeout}.
     */
    readonly timeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#worker_type GlueMlTransform#worker_type}.
     */
    readonly workerType?: string;
    /**
     * input_record_tables block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#input_record_tables GlueMlTransform#input_record_tables}
     */
    readonly inputRecordTables: GlueMlTransformInputRecordTables[];
    /**
     * parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#parameters GlueMlTransform#parameters}
     */
    readonly parameters: GlueMlTransformParameters[];
}
export declare class GlueMlTransformSchema extends cdktf.ComplexComputedList {
    get dataType(): string;
    get name(): string;
}
export interface GlueMlTransformInputRecordTables {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#catalog_id GlueMlTransform#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#connection_name GlueMlTransform#connection_name}.
     */
    readonly connectionName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#database_name GlueMlTransform#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#table_name GlueMlTransform#table_name}.
     */
    readonly tableName: string;
}
export interface GlueMlTransformParametersFindMatchesParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}.
     */
    readonly accuracyCostTradeOff?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#enforce_provided_labels GlueMlTransform#enforce_provided_labels}.
     */
    readonly enforceProvidedLabels?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}.
     */
    readonly precisionRecallTradeOff?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#primary_key_column_name GlueMlTransform#primary_key_column_name}.
     */
    readonly primaryKeyColumnName?: string;
}
export interface GlueMlTransformParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#transform_type GlueMlTransform#transform_type}.
     */
    readonly transformType: string;
    /**
     * find_matches_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html#find_matches_parameters GlueMlTransform#find_matches_parameters}
     */
    readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParameters[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform}.
 */
export declare class GlueMlTransform extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueMlTransformConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _glueVersion?;
    get glueVersion(): string;
    set glueVersion(value: string);
    resetGlueVersion(): void;
    get glueVersionInput(): string | undefined;
    get id(): string;
    get labelCount(): number;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number | undefined;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    resetMaxRetries(): void;
    get maxRetriesInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _numberOfWorkers?;
    get numberOfWorkers(): number;
    set numberOfWorkers(value: number);
    resetNumberOfWorkers(): void;
    get numberOfWorkersInput(): number | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    schema(index: string): GlueMlTransformSchema;
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
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _workerType?;
    get workerType(): string;
    set workerType(value: string);
    resetWorkerType(): void;
    get workerTypeInput(): string | undefined;
    private _inputRecordTables;
    get inputRecordTables(): GlueMlTransformInputRecordTables[];
    set inputRecordTables(value: GlueMlTransformInputRecordTables[]);
    get inputRecordTablesInput(): GlueMlTransformInputRecordTables[];
    private _parameters;
    get parameters(): GlueMlTransformParameters[];
    set parameters(value: GlueMlTransformParameters[]);
    get parametersInput(): GlueMlTransformParameters[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
