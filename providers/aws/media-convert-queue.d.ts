import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediaConvertQueueConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#description MediaConvertQueue#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#name MediaConvertQueue#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#pricing_plan MediaConvertQueue#pricing_plan}.
     */
    readonly pricingPlan?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#status MediaConvertQueue#status}.
     */
    readonly status?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#tags MediaConvertQueue#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#tags_all MediaConvertQueue#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * reservation_plan_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}
     */
    readonly reservationPlanSettings?: MediaConvertQueueReservationPlanSettings[];
}
export interface MediaConvertQueueReservationPlanSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#commitment MediaConvertQueue#commitment}.
     */
    readonly commitment: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#renewal_type MediaConvertQueue#renewal_type}.
     */
    readonly renewalType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#reserved_slots MediaConvertQueue#reserved_slots}.
     */
    readonly reservedSlots: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue}.
 */
export declare class MediaConvertQueue extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MediaConvertQueueConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pricingPlan?;
    get pricingPlan(): string;
    set pricingPlan(value: string);
    resetPricingPlan(): void;
    get pricingPlanInput(): string | undefined;
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
    private _reservationPlanSettings?;
    get reservationPlanSettings(): MediaConvertQueueReservationPlanSettings[];
    set reservationPlanSettings(value: MediaConvertQueueReservationPlanSettings[]);
    resetReservationPlanSettings(): void;
    get reservationPlanSettingsInput(): MediaConvertQueueReservationPlanSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
