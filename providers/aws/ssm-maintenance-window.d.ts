import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}.
     */
    readonly allowUnassociatedTargets?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#cutoff SsmMaintenanceWindow#cutoff}.
     */
    readonly cutoff: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#description SsmMaintenanceWindow#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#duration SsmMaintenanceWindow#duration}.
     */
    readonly duration: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#enabled SsmMaintenanceWindow#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#end_date SsmMaintenanceWindow#end_date}.
     */
    readonly endDate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#name SsmMaintenanceWindow#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#schedule SsmMaintenanceWindow#schedule}.
     */
    readonly schedule: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#schedule_offset SsmMaintenanceWindow#schedule_offset}.
     */
    readonly scheduleOffset?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#schedule_timezone SsmMaintenanceWindow#schedule_timezone}.
     */
    readonly scheduleTimezone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#start_date SsmMaintenanceWindow#start_date}.
     */
    readonly startDate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#tags SsmMaintenanceWindow#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html#tags_all SsmMaintenanceWindow#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html aws_ssm_maintenance_window}.
 */
export declare class SsmMaintenanceWindow extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html aws_ssm_maintenance_window} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmMaintenanceWindowConfig);
    private _allowUnassociatedTargets?;
    get allowUnassociatedTargets(): boolean;
    set allowUnassociatedTargets(value: boolean);
    resetAllowUnassociatedTargets(): void;
    get allowUnassociatedTargetsInput(): boolean | undefined;
    private _cutoff;
    get cutoff(): number;
    set cutoff(value: number);
    get cutoffInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _duration;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    private _endDate?;
    get endDate(): string;
    set endDate(value: string);
    resetEndDate(): void;
    get endDateInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schedule;
    get schedule(): string;
    set schedule(value: string);
    get scheduleInput(): string;
    private _scheduleOffset?;
    get scheduleOffset(): number;
    set scheduleOffset(value: number);
    resetScheduleOffset(): void;
    get scheduleOffsetInput(): number | undefined;
    private _scheduleTimezone?;
    get scheduleTimezone(): string;
    set scheduleTimezone(value: string);
    resetScheduleTimezone(): void;
    get scheduleTimezoneInput(): string | undefined;
    private _startDate?;
    get startDate(): string;
    set startDate(value: string);
    resetStartDate(): void;
    get startDateInput(): string | undefined;
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
