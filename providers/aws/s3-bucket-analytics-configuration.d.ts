import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketAnalyticsConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket S3BucketAnalyticsConfiguration#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#name S3BucketAnalyticsConfiguration#name}.
     */
    readonly name: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#filter S3BucketAnalyticsConfiguration#filter}
     */
    readonly filter?: S3BucketAnalyticsConfigurationFilter[];
    /**
     * storage_class_analysis block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#storage_class_analysis S3BucketAnalyticsConfiguration#storage_class_analysis}
     */
    readonly storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis[];
}
export interface S3BucketAnalyticsConfigurationFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#tags S3BucketAnalyticsConfiguration#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_account_id S3BucketAnalyticsConfiguration#bucket_account_id}.
     */
    readonly bucketAccountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_arn S3BucketAnalyticsConfiguration#bucket_arn}.
     */
    readonly bucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#format S3BucketAnalyticsConfiguration#format}.
     */
    readonly format?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}.
     */
    readonly prefix?: string;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
    /**
     * s3_bucket_destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#s3_bucket_destination S3BucketAnalyticsConfiguration#s3_bucket_destination}
     */
    readonly s3BucketDestination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination[];
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#output_schema_version S3BucketAnalyticsConfiguration#output_schema_version}.
     */
    readonly outputSchemaVersion?: string;
    /**
     * destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#destination S3BucketAnalyticsConfiguration#destination}
     */
    readonly destination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination[];
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysis {
    /**
     * data_export block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#data_export S3BucketAnalyticsConfiguration#data_export}
     */
    readonly dataExport: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration}.
 */
export declare class S3BucketAnalyticsConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3BucketAnalyticsConfigurationConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _filter?;
    get filter(): S3BucketAnalyticsConfigurationFilter[];
    set filter(value: S3BucketAnalyticsConfigurationFilter[]);
    resetFilter(): void;
    get filterInput(): S3BucketAnalyticsConfigurationFilter[] | undefined;
    private _storageClassAnalysis?;
    get storageClassAnalysis(): S3BucketAnalyticsConfigurationStorageClassAnalysis[];
    set storageClassAnalysis(value: S3BucketAnalyticsConfigurationStorageClassAnalysis[]);
    resetStorageClassAnalysis(): void;
    get storageClassAnalysisInput(): S3BucketAnalyticsConfigurationStorageClassAnalysis[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
