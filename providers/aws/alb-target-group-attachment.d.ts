import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#availability_zone AlbTargetGroupAttachment#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#port AlbTargetGroupAttachment#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#target_group_arn AlbTargetGroupAttachment#target_group_arn}.
     */
    readonly targetGroupArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#target_id AlbTargetGroupAttachment#target_id}.
     */
    readonly targetId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment}.
 */
export declare class AlbTargetGroupAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AlbTargetGroupAttachmentConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    get id(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _targetGroupArn;
    get targetGroupArn(): string;
    set targetGroupArn(value: string);
    get targetGroupArnInput(): string;
    private _targetId;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
