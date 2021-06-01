import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2ClassificationJobConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}.
     */
    readonly customDataIdentifierIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#description Macie2ClassificationJob#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#initial_run Macie2ClassificationJob#initial_run}.
     */
    readonly initialRun?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_status Macie2ClassificationJob#job_status}.
     */
    readonly jobStatus?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_type Macie2ClassificationJob#job_type}.
     */
    readonly jobType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name Macie2ClassificationJob#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name_prefix Macie2ClassificationJob#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#sampling_percentage Macie2ClassificationJob#sampling_percentage}.
     */
    readonly samplingPercentage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags Macie2ClassificationJob#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags_all Macie2ClassificationJob#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * s3_job_definition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#s3_job_definition Macie2ClassificationJob#s3_job_definition}
     */
    readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition[];
    /**
     * schedule_frequency block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#schedule_frequency Macie2ClassificationJob#schedule_frequency}
     */
    readonly scheduleFrequency?: Macie2ClassificationJobScheduleFrequency[];
}
export declare class Macie2ClassificationJobUserPausedDetails extends cdktf.ComplexComputedList {
    get jobExpiresAt(): string;
    get jobImminentExpirationHealthEventArn(): string;
    get jobPausedAt(): string;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketDefinitions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#account_id Macie2ClassificationJob#account_id}.
     */
    readonly accountId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#buckets Macie2ClassificationJob#buckets}.
     */
    readonly buckets: string[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}.
     */
    readonly comparator?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}.
     */
    readonly values?: string[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}.
     */
    readonly value?: string;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}.
     */
    readonly comparator?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}.
     */
    readonly target?: string;
    /**
     * tag_values block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
     */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
    /**
     * simple_scope_term block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
     */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm[];
    /**
     * tag_scope_term block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
     */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludes {
    /**
     * and block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
     */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}.
     */
    readonly comparator?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}.
     */
    readonly values?: string[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}.
     */
    readonly value?: string;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}.
     */
    readonly comparator?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}.
     */
    readonly target?: string;
    /**
     * tag_values block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
     */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
    /**
     * simple_scope_term block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
     */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm[];
    /**
     * tag_scope_term block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
     */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludes {
    /**
     * and block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
     */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
}
export interface Macie2ClassificationJobS3JobDefinitionScoping {
    /**
     * excludes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#excludes Macie2ClassificationJob#excludes}
     */
    readonly excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes[];
    /**
     * includes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#includes Macie2ClassificationJob#includes}
     */
    readonly includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes[];
}
export interface Macie2ClassificationJobS3JobDefinition {
    /**
     * bucket_definitions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#bucket_definitions Macie2ClassificationJob#bucket_definitions}
     */
    readonly bucketDefinitions?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
    /**
     * scoping block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#scoping Macie2ClassificationJob#scoping}
     */
    readonly scoping?: Macie2ClassificationJobS3JobDefinitionScoping[];
}
export interface Macie2ClassificationJobScheduleFrequency {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#daily_schedule Macie2ClassificationJob#daily_schedule}.
     */
    readonly dailySchedule?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#monthly_schedule Macie2ClassificationJob#monthly_schedule}.
     */
    readonly monthlySchedule?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#weekly_schedule Macie2ClassificationJob#weekly_schedule}.
     */
    readonly weeklySchedule?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job}.
 */
export declare class Macie2ClassificationJob extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Macie2ClassificationJobConfig);
    get createdAt(): string;
    private _customDataIdentifierIds?;
    get customDataIdentifierIds(): string[];
    set customDataIdentifierIds(value: string[]);
    resetCustomDataIdentifierIds(): void;
    get customDataIdentifierIdsInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _initialRun?;
    get initialRun(): boolean;
    set initialRun(value: boolean);
    resetInitialRun(): void;
    get initialRunInput(): boolean | undefined;
    get jobArn(): string;
    get jobId(): string;
    private _jobStatus?;
    get jobStatus(): string;
    set jobStatus(value: string);
    resetJobStatus(): void;
    get jobStatusInput(): string | undefined;
    private _jobType;
    get jobType(): string;
    set jobType(value: string);
    get jobTypeInput(): string;
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
    private _samplingPercentage?;
    get samplingPercentage(): number;
    set samplingPercentage(value: number);
    resetSamplingPercentage(): void;
    get samplingPercentageInput(): number | undefined;
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
    userPausedDetails(index: string): Macie2ClassificationJobUserPausedDetails;
    private _s3JobDefinition;
    get s3JobDefinition(): Macie2ClassificationJobS3JobDefinition[];
    set s3JobDefinition(value: Macie2ClassificationJobS3JobDefinition[]);
    get s3JobDefinitionInput(): Macie2ClassificationJobS3JobDefinition[];
    private _scheduleFrequency?;
    get scheduleFrequency(): Macie2ClassificationJobScheduleFrequency[];
    set scheduleFrequency(value: Macie2ClassificationJobScheduleFrequency[]);
    resetScheduleFrequency(): void;
    get scheduleFrequencyInput(): Macie2ClassificationJobScheduleFrequency[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
