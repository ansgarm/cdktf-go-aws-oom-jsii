import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticBeanstalkHostedZoneConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html#region DataAwsElasticBeanstalkHostedZone#region}.
     */
    readonly region?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html aws_elastic_beanstalk_hosted_zone}.
 */
export declare class DataAwsElasticBeanstalkHostedZone extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html aws_elastic_beanstalk_hosted_zone} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsElasticBeanstalkHostedZoneConfig);
    get id(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
