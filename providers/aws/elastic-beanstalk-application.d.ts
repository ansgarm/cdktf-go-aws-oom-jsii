import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#description ElasticBeanstalkApplication#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#name ElasticBeanstalkApplication#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags ElasticBeanstalkApplication#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags_all ElasticBeanstalkApplication#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * appversion_lifecycle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}
     */
    readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle[];
}
export interface ElasticBeanstalkApplicationAppversionLifecycle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}.
     */
    readonly deleteSourceFromS3?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}.
     */
    readonly maxAgeInDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_count ElasticBeanstalkApplication#max_count}.
     */
    readonly maxCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#service_role ElasticBeanstalkApplication#service_role}.
     */
    readonly serviceRole: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application}.
 */
export declare class ElasticBeanstalkApplication extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
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
    private _appversionLifecycle?;
    get appversionLifecycle(): ElasticBeanstalkApplicationAppversionLifecycle[];
    set appversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle[]);
    resetAppversionLifecycle(): void;
    get appversionLifecycleInput(): ElasticBeanstalkApplicationAppversionLifecycle[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
