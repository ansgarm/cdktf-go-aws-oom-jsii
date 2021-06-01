import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2FindingsFilterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#action Macie2FindingsFilter#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#description Macie2FindingsFilter#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name Macie2FindingsFilter#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name_prefix Macie2FindingsFilter#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#position Macie2FindingsFilter#position}.
     */
    readonly position?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags Macie2FindingsFilter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags_all Macie2FindingsFilter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * finding_criteria block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#finding_criteria Macie2FindingsFilter#finding_criteria}
     */
    readonly findingCriteria: Macie2FindingsFilterFindingCriteria[];
}
export interface Macie2FindingsFilterFindingCriteriaCriterion {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq Macie2FindingsFilter#eq}.
     */
    readonly eq?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq_exact_match Macie2FindingsFilter#eq_exact_match}.
     */
    readonly eqExactMatch?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#field Macie2FindingsFilter#field}.
     */
    readonly field: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gt Macie2FindingsFilter#gt}.
     */
    readonly gt?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gte Macie2FindingsFilter#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lt Macie2FindingsFilter#lt}.
     */
    readonly lt?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lte Macie2FindingsFilter#lte}.
     */
    readonly lte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#neq Macie2FindingsFilter#neq}.
     */
    readonly neq?: string[];
}
export interface Macie2FindingsFilterFindingCriteria {
    /**
     * criterion block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#criterion Macie2FindingsFilter#criterion}
     */
    readonly criterion?: Macie2FindingsFilterFindingCriteriaCriterion[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter}.
 */
export declare class Macie2FindingsFilter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Macie2FindingsFilterConfig);
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
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    resetPosition(): void;
    get positionInput(): number | undefined;
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
    get findingCriteria(): Macie2FindingsFilterFindingCriteria[];
    set findingCriteria(value: Macie2FindingsFilterFindingCriteria[]);
    get findingCriteriaInput(): Macie2FindingsFilterFindingCriteria[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
