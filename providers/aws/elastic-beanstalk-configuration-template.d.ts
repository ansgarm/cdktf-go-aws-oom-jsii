import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticBeanstalkConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#application ElasticBeanstalkConfigurationTemplate#application}.
     */
    readonly application: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#description ElasticBeanstalkConfigurationTemplate#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}.
     */
    readonly environmentId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#name ElasticBeanstalkConfigurationTemplate#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}.
     */
    readonly solutionStackName?: string;
    /**
     * setting block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#setting ElasticBeanstalkConfigurationTemplate#setting}
     */
    readonly setting?: ElasticBeanstalkConfigurationTemplateSetting[];
}
export interface ElasticBeanstalkConfigurationTemplateSetting {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#name ElasticBeanstalkConfigurationTemplate#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#namespace ElasticBeanstalkConfigurationTemplate#namespace}.
     */
    readonly namespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#resource ElasticBeanstalkConfigurationTemplate#resource}.
     */
    readonly resource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#value ElasticBeanstalkConfigurationTemplate#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html aws_elastic_beanstalk_configuration_template}.
 */
export declare class ElasticBeanstalkConfigurationTemplate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html aws_elastic_beanstalk_configuration_template} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkConfigurationTemplateConfig);
    private _application;
    get application(): string;
    set application(value: string);
    get applicationInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    resetEnvironmentId(): void;
    get environmentIdInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _solutionStackName?;
    get solutionStackName(): string;
    set solutionStackName(value: string);
    resetSolutionStackName(): void;
    get solutionStackNameInput(): string | undefined;
    private _setting?;
    get setting(): ElasticBeanstalkConfigurationTemplateSetting[];
    set setting(value: ElasticBeanstalkConfigurationTemplateSetting[]);
    resetSetting(): void;
    get settingInput(): ElasticBeanstalkConfigurationTemplateSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
