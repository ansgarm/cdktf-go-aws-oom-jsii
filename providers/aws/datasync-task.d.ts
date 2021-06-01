import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.
     */
    readonly cloudwatchLogGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#destination_location_arn DatasyncTask#destination_location_arn}.
     */
    readonly destinationLocationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#name DatasyncTask#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#source_location_arn DatasyncTask#source_location_arn}.
     */
    readonly sourceLocationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags DatasyncTask#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags_all DatasyncTask#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * excludes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#excludes DatasyncTask#excludes}
     */
    readonly excludes?: DatasyncTaskExcludes[];
    /**
     * options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#options DatasyncTask#options}
     */
    readonly options?: DatasyncTaskOptions[];
    /**
     * schedule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule DatasyncTask#schedule}
     */
    readonly schedule?: DatasyncTaskSchedule[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#timeouts DatasyncTask#timeouts}
     */
    readonly timeouts?: DatasyncTaskTimeouts;
}
export interface DatasyncTaskExcludes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#filter_type DatasyncTask#filter_type}.
     */
    readonly filterType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#value DatasyncTask#value}.
     */
    readonly value?: string;
}
export interface DatasyncTaskOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#atime DatasyncTask#atime}.
     */
    readonly atime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#bytes_per_second DatasyncTask#bytes_per_second}.
     */
    readonly bytesPerSecond?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#gid DatasyncTask#gid}.
     */
    readonly gid?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#log_level DatasyncTask#log_level}.
     */
    readonly logLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#mtime DatasyncTask#mtime}.
     */
    readonly mtime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#overwrite_mode DatasyncTask#overwrite_mode}.
     */
    readonly overwriteMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#posix_permissions DatasyncTask#posix_permissions}.
     */
    readonly posixPermissions?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_deleted_files DatasyncTask#preserve_deleted_files}.
     */
    readonly preserveDeletedFiles?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_devices DatasyncTask#preserve_devices}.
     */
    readonly preserveDevices?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#task_queueing DatasyncTask#task_queueing}.
     */
    readonly taskQueueing?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#transfer_mode DatasyncTask#transfer_mode}.
     */
    readonly transferMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#uid DatasyncTask#uid}.
     */
    readonly uid?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#verify_mode DatasyncTask#verify_mode}.
     */
    readonly verifyMode?: string;
}
export interface DatasyncTaskSchedule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule_expression DatasyncTask#schedule_expression}.
     */
    readonly scheduleExpression: string;
}
export interface DatasyncTaskTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#create DatasyncTask#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task}.
 */
export declare class DatasyncTask extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DatasyncTaskConfig);
    get arn(): string;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    resetCloudwatchLogGroupArn(): void;
    get cloudwatchLogGroupArnInput(): string | undefined;
    private _destinationLocationArn;
    get destinationLocationArn(): string;
    set destinationLocationArn(value: string);
    get destinationLocationArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sourceLocationArn;
    get sourceLocationArn(): string;
    set sourceLocationArn(value: string);
    get sourceLocationArnInput(): string;
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
    private _excludes?;
    get excludes(): DatasyncTaskExcludes[];
    set excludes(value: DatasyncTaskExcludes[]);
    resetExcludes(): void;
    get excludesInput(): DatasyncTaskExcludes[] | undefined;
    private _options?;
    get options(): DatasyncTaskOptions[];
    set options(value: DatasyncTaskOptions[]);
    resetOptions(): void;
    get optionsInput(): DatasyncTaskOptions[] | undefined;
    private _schedule?;
    get schedule(): DatasyncTaskSchedule[];
    set schedule(value: DatasyncTaskSchedule[]);
    resetSchedule(): void;
    get scheduleInput(): DatasyncTaskSchedule[] | undefined;
    private _timeouts?;
    get timeouts(): DatasyncTaskTimeouts;
    set timeouts(value: DatasyncTaskTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DatasyncTaskTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
