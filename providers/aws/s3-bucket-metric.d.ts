import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketMetricConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#bucket S3BucketMetric#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#name S3BucketMetric#name}.
     */
    readonly name: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#filter S3BucketMetric#filter}
     */
    readonly filter?: S3BucketMetricFilter[];
}
export interface S3BucketMetricFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#prefix S3BucketMetric#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html#tags S3BucketMetric#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html aws_s3_bucket_metric}.
 */
export declare class S3BucketMetric extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html aws_s3_bucket_metric} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: S3BucketMetricConfig);
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
    get filter(): S3BucketMetricFilter[];
    set filter(value: S3BucketMetricFilter[]);
    resetFilter(): void;
    get filterInput(): S3BucketMetricFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
