import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html#id DataAwsCloudfrontDistribution#id}.
     */
    readonly id: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html#tags DataAwsCloudfrontDistribution#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution}.
 */
export declare class DataAwsCloudfrontDistribution extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCloudfrontDistributionConfig);
    get arn(): string;
    get domainName(): string;
    get enabled(): boolean;
    get etag(): string;
    get hostedZoneId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get inProgressValidationBatches(): number;
    get lastModifiedTime(): string;
    get status(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
