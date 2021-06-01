import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyFilterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#action GuarddutyFilter#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#description GuarddutyFilter#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#detector_id GuarddutyFilter#detector_id}.
     */
    readonly detectorId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#name GuarddutyFilter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#rank GuarddutyFilter#rank}.
     */
    readonly rank: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags GuarddutyFilter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#tags_all GuarddutyFilter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * finding_criteria block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#finding_criteria GuarddutyFilter#finding_criteria}
     */
    readonly findingCriteria: GuarddutyFilterFindingCriteria[];
}
export interface GuarddutyFilterFindingCriteriaCriterion {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#equals GuarddutyFilter#equals}.
     */
    readonly equalTo?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#field GuarddutyFilter#field}.
     */
    readonly field: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than GuarddutyFilter#greater_than}.
     */
    readonly greaterThan?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}.
     */
    readonly greaterThanOrEqual?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than GuarddutyFilter#less_than}.
     */
    readonly lessThan?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#less_than_or_equal GuarddutyFilter#less_than_or_equal}.
     */
    readonly lessThanOrEqual?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#not_equals GuarddutyFilter#not_equals}.
     */
    readonly notEquals?: string[];
}
export interface GuarddutyFilterFindingCriteria {
    /**
     * criterion block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html#criterion GuarddutyFilter#criterion}
     */
    readonly criterion: GuarddutyFilterFindingCriteriaCriterion[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter}.
 */
export declare class GuarddutyFilter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_filter.html aws_guardduty_filter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyFilterConfig);
    private _action;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _detectorId;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rank;
    get rank(): number;
    set rank(value: number);
    get rankInput(): number;
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
    private _findingCriteria;
    get findingCriteria(): GuarddutyFilterFindingCriteria[];
    set findingCriteria(value: GuarddutyFilterFindingCriteria[]);
    get findingCriteriaInput(): GuarddutyFilterFindingCriteria[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
