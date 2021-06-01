import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html#group_names AutoscalingNotification#group_names}.
     */
    readonly groupNames: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html#notifications AutoscalingNotification#notifications}.
     */
    readonly notifications: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html#topic_arn AutoscalingNotification#topic_arn}.
     */
    readonly topicArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html aws_autoscaling_notification}.
 */
export declare class AutoscalingNotification extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html aws_autoscaling_notification} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AutoscalingNotificationConfig);
    private _groupNames;
    get groupNames(): string[];
    set groupNames(value: string[]);
    get groupNamesInput(): string[];
    get id(): string;
    private _notifications;
    get notifications(): string[];
    set notifications(value: string[]);
    get notificationsInput(): string[];
    private _topicArn;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
