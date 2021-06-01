import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#enabled DbEventSubscription#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#event_categories DbEventSubscription#event_categories}.
     */
    readonly eventCategories?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#name DbEventSubscription#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#name_prefix DbEventSubscription#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#sns_topic DbEventSubscription#sns_topic}.
     */
    readonly snsTopic: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#source_ids DbEventSubscription#source_ids}.
     */
    readonly sourceIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#source_type DbEventSubscription#source_type}.
     */
    readonly sourceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#tags DbEventSubscription#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#tags_all DbEventSubscription#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#timeouts DbEventSubscription#timeouts}
     */
    readonly timeouts?: DbEventSubscriptionTimeouts;
}
export interface DbEventSubscriptionTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#create DbEventSubscription#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#delete DbEventSubscription#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html#update DbEventSubscription#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html aws_db_event_subscription}.
 */
export declare class DbEventSubscription extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html aws_db_event_subscription} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbEventSubscriptionConfig);
    get arn(): string;
    get customerAwsId(): string;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    private _eventCategories?;
    get eventCategories(): string[];
    set eventCategories(value: string[]);
    resetEventCategories(): void;
    get eventCategoriesInput(): string[] | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _snsTopic;
    get snsTopic(): string;
    set snsTopic(value: string);
    get snsTopicInput(): string;
    private _sourceIds?;
    get sourceIds(): string[];
    set sourceIds(value: string[]);
    resetSourceIds(): void;
    get sourceIdsInput(): string[] | undefined;
    private _sourceType?;
    get sourceType(): string;
    set sourceType(value: string);
    resetSourceType(): void;
    get sourceTypeInput(): string | undefined;
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
    private _timeouts?;
    get timeouts(): DbEventSubscriptionTimeouts;
    set timeouts(value: DbEventSubscriptionTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DbEventSubscriptionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
