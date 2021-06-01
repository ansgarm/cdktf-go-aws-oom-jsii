import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#detail_type CodestarnotificationsNotificationRule#detail_type}.
     */
    readonly detailType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.
     */
    readonly eventTypeIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#name CodestarnotificationsNotificationRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#resource CodestarnotificationsNotificationRule#resource}.
     */
    readonly resource: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#status CodestarnotificationsNotificationRule#status}.
     */
    readonly status?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#tags CodestarnotificationsNotificationRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#tags_all CodestarnotificationsNotificationRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#target CodestarnotificationsNotificationRule#target}
     */
    readonly target?: CodestarnotificationsNotificationRuleTarget[];
}
export interface CodestarnotificationsNotificationRuleTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#address CodestarnotificationsNotificationRule#address}.
     */
    readonly address: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html#type CodestarnotificationsNotificationRule#type}.
     */
    readonly type?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule}.
 */
export declare class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig);
    get arn(): string;
    private _detailType;
    get detailType(): string;
    set detailType(value: string);
    get detailTypeInput(): string;
    private _eventTypeIds;
    get eventTypeIds(): string[];
    set eventTypeIds(value: string[]);
    get eventTypeIdsInput(): string[];
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resource;
    get resource(): string;
    set resource(value: string);
    get resourceInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _target?;
    get target(): CodestarnotificationsNotificationRuleTarget[];
    set target(value: CodestarnotificationsNotificationRuleTarget[]);
    resetTarget(): void;
    get targetInput(): CodestarnotificationsNotificationRuleTarget[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
