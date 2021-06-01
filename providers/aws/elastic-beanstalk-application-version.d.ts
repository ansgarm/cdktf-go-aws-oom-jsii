import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticBeanstalkApplicationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#application ElasticBeanstalkApplicationVersion#application}.
     */
    readonly application: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#bucket ElasticBeanstalkApplicationVersion#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#description ElasticBeanstalkApplicationVersion#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#force_delete ElasticBeanstalkApplicationVersion#force_delete}.
     */
    readonly forceDelete?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#key ElasticBeanstalkApplicationVersion#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#name ElasticBeanstalkApplicationVersion#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#tags ElasticBeanstalkApplicationVersion#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#tags_all ElasticBeanstalkApplicationVersion#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html aws_elastic_beanstalk_application_version}.
 */
export declare class ElasticBeanstalkApplicationVersion extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html aws_elastic_beanstalk_application_version} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationVersionConfig);
    private _application;
    get application(): string;
    set application(value: string);
    get applicationInput(): string;
    get arn(): string;
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceDelete?;
    get forceDelete(): boolean;
    set forceDelete(value: boolean);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | undefined;
    get id(): string;
    private _key;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
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
