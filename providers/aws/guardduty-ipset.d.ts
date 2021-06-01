import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#activate GuarddutyIpset#activate}.
     */
    readonly activate: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#detector_id GuarddutyIpset#detector_id}.
     */
    readonly detectorId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#format GuarddutyIpset#format}.
     */
    readonly format: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#location GuarddutyIpset#location}.
     */
    readonly location: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#name GuarddutyIpset#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#tags GuarddutyIpset#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html#tags_all GuarddutyIpset#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html aws_guardduty_ipset}.
 */
export declare class GuarddutyIpset extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html aws_guardduty_ipset} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyIpsetConfig);
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
