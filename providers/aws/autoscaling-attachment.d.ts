import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}.
     */
    readonly albTargetGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}.
     */
    readonly autoscalingGroupName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html#elb AutoscalingAttachment#elb}.
     */
    readonly elb?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment}.
 */
export declare class AutoscalingAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AutoscalingAttachmentConfig);
    private _albTargetGroupArn?;
    get albTargetGroupArn(): string;
    set albTargetGroupArn(value: string);
    resetAlbTargetGroupArn(): void;
    get albTargetGroupArnInput(): string | undefined;
    private _autoscalingGroupName;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string;
    private _elb?;
    get elb(): string;
    set elb(value: string);
    resetElb(): void;
    get elbInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
