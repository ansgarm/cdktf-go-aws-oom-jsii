import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueJobConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#connections GlueJob#connections}.
     */
    readonly connections?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#default_arguments GlueJob#default_arguments}.
     */
    readonly defaultArguments?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#description GlueJob#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#glue_version GlueJob#glue_version}.
     */
    readonly glueVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_capacity GlueJob#max_capacity}.
     */
    readonly maxCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_retries GlueJob#max_retries}.
     */
    readonly maxRetries?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#non_overridable_arguments GlueJob#non_overridable_arguments}.
     */
    readonly nonOverridableArguments?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#number_of_workers GlueJob#number_of_workers}.
     */
    readonly numberOfWorkers?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#role_arn GlueJob#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#security_configuration GlueJob#security_configuration}.
     */
    readonly securityConfiguration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags GlueJob#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#tags_all GlueJob#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#timeout GlueJob#timeout}.
     */
    readonly timeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#worker_type GlueJob#worker_type}.
     */
    readonly workerType?: string;
    /**
     * command block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#command GlueJob#command}
     */
    readonly command: GlueJobCommand[];
    /**
     * execution_property block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#execution_property GlueJob#execution_property}
     */
    readonly executionProperty?: GlueJobExecutionProperty[];
    /**
     * notification_property block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notification_property GlueJob#notification_property}
     */
    readonly notificationProperty?: GlueJobNotificationProperty[];
}
export interface GlueJobCommand {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#name GlueJob#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#python_version GlueJob#python_version}.
     */
    readonly pythonVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#script_location GlueJob#script_location}.
     */
    readonly scriptLocation: string;
}
export interface GlueJobExecutionProperty {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#max_concurrent_runs GlueJob#max_concurrent_runs}.
     */
    readonly maxConcurrentRuns?: number;
}
export interface GlueJobNotificationProperty {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html#notify_delay_after GlueJob#notify_delay_after}.
     */
    readonly notifyDelayAfter?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job}.
 */
export declare class GlueJob extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueJobConfig);
    get arn(): string;
    private _connections?;
    get connections(): string[];
    set connections(value: string[]);
    resetConnections(): void;
    get connectionsInput(): string[] | undefined;
    private _defaultArguments?;
    get defaultArguments(): {
        [key: string]: string;
    };
    set defaultArguments(value: {
        [key: string]: string;
    });
    resetDefaultArguments(): void;
    get defaultArgumentsInput(): {
        [key: string]: string;
    } | undefined;
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
    private _nonOverridableArguments?;
    get nonOverridableArguments(): {
        [key: string]: string;
    };
    set nonOverridableArguments(value: {
        [key: string]: string;
    });
    resetNonOverridableArguments(): void;
    get nonOverridableArgumentsInput(): {
        [key: string]: string;
    } | undefined;
    private _numberOfWorkers?;
    get numberOfWorkers(): number;
    set numberOfWorkers(value: number);
    resetNumberOfWorkers(): void;
    get numberOfWorkersInput(): number | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
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
    private _command;
    get command(): GlueJobCommand[];
    set command(value: GlueJobCommand[]);
    get commandInput(): GlueJobCommand[];
    private _executionProperty?;
    get executionProperty(): GlueJobExecutionProperty[];
    set executionProperty(value: GlueJobExecutionProperty[]);
    resetExecutionProperty(): void;
    get executionPropertyInput(): GlueJobExecutionProperty[] | undefined;
    private _notificationProperty?;
    get notificationProperty(): GlueJobNotificationProperty[];
    set notificationProperty(value: GlueJobNotificationProperty[]);
    resetNotificationProperty(): void;
    get notificationPropertyInput(): GlueJobNotificationProperty[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
