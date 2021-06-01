import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingLifecycleHookConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}.
     */
    readonly autoscalingGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#default_result AutoscalingLifecycleHook#default_result}.
     */
    readonly defaultResult?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}.
     */
    readonly heartbeatTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}.
     */
    readonly lifecycleTransition: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#name AutoscalingLifecycleHook#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#notification_metadata AutoscalingLifecycleHook#notification_metadata}.
     */
    readonly notificationMetadata?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}.
     */
    readonly notificationTargetArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#role_arn AutoscalingLifecycleHook#role_arn}.
     */
    readonly roleArn?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html aws_autoscaling_lifecycle_hook}.
 */
export declare class AutoscalingLifecycleHook extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html aws_autoscaling_lifecycle_hook} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AutoscalingLifecycleHookConfig);
    private _autoscalingGroupName;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string;
    private _defaultResult?;
    get defaultResult(): string;
    set defaultResult(value: string);
    resetDefaultResult(): void;
    get defaultResultInput(): string | undefined;
    private _heartbeatTimeout?;
    get heartbeatTimeout(): number;
    set heartbeatTimeout(value: number);
    resetHeartbeatTimeout(): void;
    get heartbeatTimeoutInput(): number | undefined;
    get id(): string;
    private _lifecycleTransition;
    get lifecycleTransition(): string;
    set lifecycleTransition(value: string);
    get lifecycleTransitionInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _notificationMetadata?;
    get notificationMetadata(): string;
    set notificationMetadata(value: string);
    resetNotificationMetadata(): void;
    get notificationMetadataInput(): string | undefined;
    private _notificationTargetArn?;
    get notificationTargetArn(): string;
    set notificationTargetArn(value: string);
    resetNotificationTargetArn(): void;
    get notificationTargetArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
