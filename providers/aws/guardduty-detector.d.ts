import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#enable GuarddutyDetector#enable}.
     */
    readonly enable?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.
     */
    readonly findingPublishingFrequency?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags GuarddutyDetector#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags_all GuarddutyDetector#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector}.
 */
export declare class GuarddutyDetector extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: GuarddutyDetectorConfig);
    get accountId(): string;
    get arn(): string;
    private _enable?;
    get enable(): boolean;
    set enable(value: boolean);
    resetEnable(): void;
    get enableInput(): boolean | undefined;
    private _findingPublishingFrequency?;
    get findingPublishingFrequency(): string;
    set findingPublishingFrequency(value: string);
    resetFindingPublishingFrequency(): void;
    get findingPublishingFrequencyInput(): string | undefined;
    get id(): string;
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
