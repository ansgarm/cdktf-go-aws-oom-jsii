import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html#name DataAwsElasticBeanstalkApplication#name}.
     */
    readonly name: string;
}
export declare class DataAwsElasticBeanstalkApplicationAppversionLifecycle extends cdktf.ComplexComputedList {
    get deleteSourceFromS3(): boolean;
    get maxAgeInDays(): number;
    get maxCount(): number;
    get serviceRole(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html aws_elastic_beanstalk_application}.
 */
export declare class DataAwsElasticBeanstalkApplication extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkApplicationConfig);
    appversionLifecycle(index: string): DataAwsElasticBeanstalkApplicationAppversionLifecycle;
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
