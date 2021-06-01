import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#description GlueTrigger#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#enabled GlueTrigger#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#name GlueTrigger#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#schedule GlueTrigger#schedule}.
     */
    readonly schedule?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags GlueTrigger#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#tags_all GlueTrigger#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#type GlueTrigger#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#workflow_name GlueTrigger#workflow_name}.
     */
    readonly workflowName?: string;
    /**
     * actions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#actions GlueTrigger#actions}
     */
    readonly actions: GlueTriggerActions[];
    /**
     * predicate block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#predicate GlueTrigger#predicate}
     */
    readonly predicate?: GlueTriggerPredicate[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeouts GlueTrigger#timeouts}
     */
    readonly timeouts?: GlueTriggerTimeouts;
}
export interface GlueTriggerActionsNotificationProperty {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notify_delay_after GlueTrigger#notify_delay_after}.
     */
    readonly notifyDelayAfter?: number;
}
export interface GlueTriggerActions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#arguments GlueTrigger#arguments}.
     */
    readonly arguments?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}.
     */
    readonly crawlerName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}.
     */
    readonly jobName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#security_configuration GlueTrigger#security_configuration}.
     */
    readonly securityConfiguration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#timeout GlueTrigger#timeout}.
     */
    readonly timeout?: number;
    /**
     * notification_property block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#notification_property GlueTrigger#notification_property}
     */
    readonly notificationProperty?: GlueTriggerActionsNotificationProperty[];
}
export interface GlueTriggerPredicateConditions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawl_state GlueTrigger#crawl_state}.
     */
    readonly crawlState?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#crawler_name GlueTrigger#crawler_name}.
     */
    readonly crawlerName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#job_name GlueTrigger#job_name}.
     */
    readonly jobName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical_operator GlueTrigger#logical_operator}.
     */
    readonly logicalOperator?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#state GlueTrigger#state}.
     */
    readonly state?: string;
}
export interface GlueTriggerPredicate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#logical GlueTrigger#logical}.
     */
    readonly logical?: string;
    /**
     * conditions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#conditions GlueTrigger#conditions}
     */
    readonly conditions: GlueTriggerPredicateConditions[];
}
export interface GlueTriggerTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#create GlueTrigger#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html#delete GlueTrigger#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger}.
 */
export declare class GlueTrigger extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueTriggerConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string | undefined;
    get state(): string;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _workflowName?;
    get workflowName(): string;
    set workflowName(value: string);
    resetWorkflowName(): void;
    get workflowNameInput(): string | undefined;
    private _actions;
    get actions(): GlueTriggerActions[];
    set actions(value: GlueTriggerActions[]);
    get actionsInput(): GlueTriggerActions[];
    private _predicate?;
    get predicate(): GlueTriggerPredicate[];
    set predicate(value: GlueTriggerPredicate[]);
    resetPredicate(): void;
    get predicateInput(): GlueTriggerPredicate[] | undefined;
    private _timeouts?;
    get timeouts(): GlueTriggerTimeouts;
    set timeouts(value: GlueTriggerTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): GlueTriggerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
