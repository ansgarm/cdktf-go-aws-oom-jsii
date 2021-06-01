import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyThreatintelsetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#activate GuarddutyThreatintelset#activate}.
     */
    readonly activate: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#detector_id GuarddutyThreatintelset#detector_id}.
     */
    readonly detectorId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#format GuarddutyThreatintelset#format}.
     */
    readonly format: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#location GuarddutyThreatintelset#location}.
     */
    readonly location: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#name GuarddutyThreatintelset#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#tags GuarddutyThreatintelset#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html#tags_all GuarddutyThreatintelset#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html aws_guardduty_threatintelset}.
 */
export declare class GuarddutyThreatintelset extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html aws_guardduty_threatintelset} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyThreatintelsetConfig);
    private _activate;
    get activate(): boolean;
    set activate(value: boolean);
    get activateInput(): boolean;
    get arn(): string;
    private _detectorId;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    private _format;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
    get id(): string;
    private _location;
    get location(): string;
    set location(value: string);
    get locationInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
