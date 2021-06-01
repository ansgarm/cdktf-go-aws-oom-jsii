import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticBeanstalkSolutionStackConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}.
     */
    readonly mostRecent?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}.
     */
    readonly nameRegex: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack}.
 */
export declare class DataAwsElasticBeanstalkSolutionStack extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkSolutionStackConfig);
    get id(): string;
    private _mostRecent?;
    get mostRecent(): boolean;
    set mostRecent(value: boolean);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | undefined;
    get name(): string;
    private _nameRegex;
    get nameRegex(): string;
    set nameRegex(value: string);
    get nameRegexInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
