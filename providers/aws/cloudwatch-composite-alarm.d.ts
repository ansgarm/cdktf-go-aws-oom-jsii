import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#actions_enabled CloudwatchCompositeAlarm#actions_enabled}.
     */
    readonly actionsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_actions CloudwatchCompositeAlarm#alarm_actions}.
     */
    readonly alarmActions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_description CloudwatchCompositeAlarm#alarm_description}.
     */
    readonly alarmDescription?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_name CloudwatchCompositeAlarm#alarm_name}.
     */
    readonly alarmName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#alarm_rule CloudwatchCompositeAlarm#alarm_rule}.
     */
    readonly alarmRule: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}.
     */
    readonly insufficientDataActions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#ok_actions CloudwatchCompositeAlarm#ok_actions}.
     */
    readonly okActions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#tags CloudwatchCompositeAlarm#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html#tags_all CloudwatchCompositeAlarm#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm}.
 */
export declare class CloudwatchCompositeAlarm extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig);
    private _actionsEnabled?;
    get actionsEnabled(): boolean;
    set actionsEnabled(value: boolean);
    resetActionsEnabled(): void;
    get actionsEnabledInput(): boolean | undefined;
    private _alarmActions?;
    get alarmActions(): string[];
    set alarmActions(value: string[]);
    resetAlarmActions(): void;
    get alarmActionsInput(): string[] | undefined;
    private _alarmDescription?;
    get alarmDescription(): string;
    set alarmDescription(value: string);
    resetAlarmDescription(): void;
    get alarmDescriptionInput(): string | undefined;
    private _alarmName;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string;
    private _alarmRule;
    get alarmRule(): string;
    set alarmRule(value: string);
    get alarmRuleInput(): string;
    get arn(): string;
    get id(): string;
    private _insufficientDataActions?;
    get insufficientDataActions(): string[];
    set insufficientDataActions(value: string[]);
    resetInsufficientDataActions(): void;
    get insufficientDataActionsInput(): string[] | undefined;
    private _okActions?;
    get okActions(): string[];
    set okActions(value: string[]);
    resetOkActions(): void;
    get okActionsInput(): string[] | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
