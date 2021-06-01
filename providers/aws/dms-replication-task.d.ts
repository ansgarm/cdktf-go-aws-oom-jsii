import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#cdc_start_time DmsReplicationTask#cdc_start_time}.
     */
    readonly cdcStartTime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#migration_type DmsReplicationTask#migration_type}.
     */
    readonly migrationType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#replication_instance_arn DmsReplicationTask#replication_instance_arn}.
     */
    readonly replicationInstanceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#replication_task_id DmsReplicationTask#replication_task_id}.
     */
    readonly replicationTaskId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#replication_task_settings DmsReplicationTask#replication_task_settings}.
     */
    readonly replicationTaskSettings?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}.
     */
    readonly sourceEndpointArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#table_mappings DmsReplicationTask#table_mappings}.
     */
    readonly tableMappings: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#tags DmsReplicationTask#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#tags_all DmsReplicationTask#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}.
     */
    readonly targetEndpointArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html aws_dms_replication_task}.
 */
export declare class DmsReplicationTask extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html aws_dms_replication_task} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DmsReplicationTaskConfig);
    private _cdcStartTime?;
    get cdcStartTime(): string;
    set cdcStartTime(value: string);
    resetCdcStartTime(): void;
    get cdcStartTimeInput(): string | undefined;
    get id(): string;
    private _migrationType;
    get migrationType(): string;
    set migrationType(value: string);
    get migrationTypeInput(): string;
    private _replicationInstanceArn;
    get replicationInstanceArn(): string;
    set replicationInstanceArn(value: string);
    get replicationInstanceArnInput(): string;
    get replicationTaskArn(): string;
    private _replicationTaskId;
    get replicationTaskId(): string;
    set replicationTaskId(value: string);
    get replicationTaskIdInput(): string;
    private _replicationTaskSettings?;
    get replicationTaskSettings(): string;
    set replicationTaskSettings(value: string);
    resetReplicationTaskSettings(): void;
    get replicationTaskSettingsInput(): string | undefined;
    private _sourceEndpointArn;
    get sourceEndpointArn(): string;
    set sourceEndpointArn(value: string);
    get sourceEndpointArnInput(): string;
    private _tableMappings;
    get tableMappings(): string;
    set tableMappings(value: string);
    get tableMappingsInput(): string;
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
    private _targetEndpointArn;
    get targetEndpointArn(): string;
    set targetEndpointArn(value: string);
    get targetEndpointArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
