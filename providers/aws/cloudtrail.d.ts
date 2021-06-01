import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudtrailConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}.
     */
    readonly cloudWatchLogsGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}.
     */
    readonly cloudWatchLogsRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#enable_log_file_validation Cloudtrail#enable_log_file_validation}.
     */
    readonly enableLogFileValidation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#enable_logging Cloudtrail#enable_logging}.
     */
    readonly enableLogging?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#include_global_service_events Cloudtrail#include_global_service_events}.
     */
    readonly includeGlobalServiceEvents?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#is_multi_region_trail Cloudtrail#is_multi_region_trail}.
     */
    readonly isMultiRegionTrail?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#is_organization_trail Cloudtrail#is_organization_trail}.
     */
    readonly isOrganizationTrail?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#kms_key_id Cloudtrail#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#name Cloudtrail#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#s3_bucket_name Cloudtrail#s3_bucket_name}.
     */
    readonly s3BucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#s3_key_prefix Cloudtrail#s3_key_prefix}.
     */
    readonly s3KeyPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#sns_topic_name Cloudtrail#sns_topic_name}.
     */
    readonly snsTopicName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#tags Cloudtrail#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#tags_all Cloudtrail#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * event_selector block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#event_selector Cloudtrail#event_selector}
     */
    readonly eventSelector?: CloudtrailEventSelector[];
    /**
     * insight_selector block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#insight_selector Cloudtrail#insight_selector}
     */
    readonly insightSelector?: CloudtrailInsightSelector[];
}
export interface CloudtrailEventSelectorDataResource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#type Cloudtrail#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#values Cloudtrail#values}.
     */
    readonly values: string[];
}
export interface CloudtrailEventSelector {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#include_management_events Cloudtrail#include_management_events}.
     */
    readonly includeManagementEvents?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#read_write_type Cloudtrail#read_write_type}.
     */
    readonly readWriteType?: string;
    /**
     * data_resource block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#data_resource Cloudtrail#data_resource}
     */
    readonly dataResource?: CloudtrailEventSelectorDataResource[];
}
export interface CloudtrailInsightSelector {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#insight_type Cloudtrail#insight_type}.
     */
    readonly insightType: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail}.
 */
export declare class Cloudtrail extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudtrailConfig);
    get arn(): string;
    private _cloudWatchLogsGroupArn?;
    get cloudWatchLogsGroupArn(): string;
    set cloudWatchLogsGroupArn(value: string);
    resetCloudWatchLogsGroupArn(): void;
    get cloudWatchLogsGroupArnInput(): string | undefined;
    private _cloudWatchLogsRoleArn?;
    get cloudWatchLogsRoleArn(): string;
    set cloudWatchLogsRoleArn(value: string);
    resetCloudWatchLogsRoleArn(): void;
    get cloudWatchLogsRoleArnInput(): string | undefined;
    private _enableLogFileValidation?;
    get enableLogFileValidation(): boolean;
    set enableLogFileValidation(value: boolean);
    resetEnableLogFileValidation(): void;
    get enableLogFileValidationInput(): boolean | undefined;
    private _enableLogging?;
    get enableLogging(): boolean;
    set enableLogging(value: boolean);
    resetEnableLogging(): void;
    get enableLoggingInput(): boolean | undefined;
    get homeRegion(): string;
    get id(): string;
    private _includeGlobalServiceEvents?;
    get includeGlobalServiceEvents(): boolean;
    set includeGlobalServiceEvents(value: boolean);
    resetIncludeGlobalServiceEvents(): void;
    get includeGlobalServiceEventsInput(): boolean | undefined;
    private _isMultiRegionTrail?;
    get isMultiRegionTrail(): boolean;
    set isMultiRegionTrail(value: boolean);
    resetIsMultiRegionTrail(): void;
    get isMultiRegionTrailInput(): boolean | undefined;
    private _isOrganizationTrail?;
    get isOrganizationTrail(): boolean;
    set isOrganizationTrail(value: boolean);
    resetIsOrganizationTrail(): void;
    get isOrganizationTrailInput(): boolean | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _s3BucketName;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
    private _snsTopicName?;
    get snsTopicName(): string;
    set snsTopicName(value: string);
    resetSnsTopicName(): void;
    get snsTopicNameInput(): string | undefined;
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
    private _eventSelector?;
    get eventSelector(): CloudtrailEventSelector[];
    set eventSelector(value: CloudtrailEventSelector[]);
    resetEventSelector(): void;
    get eventSelectorInput(): CloudtrailEventSelector[] | undefined;
    private _insightSelector?;
    get insightSelector(): CloudtrailInsightSelector[];
    set insightSelector(value: CloudtrailInsightSelector[]);
    resetInsightSelector(): void;
    get insightSelectorInput(): CloudtrailInsightSelector[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
