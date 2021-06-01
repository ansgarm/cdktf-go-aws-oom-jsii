import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticBeanstalkEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#application ElasticBeanstalkEnvironment#application}.
     */
    readonly application: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}.
     */
    readonly cnamePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#description ElasticBeanstalkEnvironment#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#name ElasticBeanstalkEnvironment#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#platform_arn ElasticBeanstalkEnvironment#platform_arn}.
     */
    readonly platformArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#poll_interval ElasticBeanstalkEnvironment#poll_interval}.
     */
    readonly pollInterval?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}.
     */
    readonly solutionStackName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tags ElasticBeanstalkEnvironment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tags_all ElasticBeanstalkEnvironment#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#template_name ElasticBeanstalkEnvironment#template_name}.
     */
    readonly templateName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tier ElasticBeanstalkEnvironment#tier}.
     */
    readonly tier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#version_label ElasticBeanstalkEnvironment#version_label}.
     */
    readonly versionLabel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}.
     */
    readonly waitForReadyTimeout?: string;
    /**
     * setting block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#setting ElasticBeanstalkEnvironment#setting}
     */
    readonly setting?: ElasticBeanstalkEnvironmentSetting[];
}
export declare class ElasticBeanstalkEnvironmentAllSettings extends cdktf.ComplexComputedList {
    get name(): string;
    get namespace(): string;
    get resource(): string;
    get value(): string;
}
export interface ElasticBeanstalkEnvironmentSetting {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#name ElasticBeanstalkEnvironment#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#namespace ElasticBeanstalkEnvironment#namespace}.
     */
    readonly namespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#resource ElasticBeanstalkEnvironment#resource}.
     */
    readonly resource?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#value ElasticBeanstalkEnvironment#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment}.
 */
export declare class ElasticBeanstalkEnvironment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkEnvironmentConfig);
    allSettings(index: string): ElasticBeanstalkEnvironmentAllSettings;
    private _application;
    get application(): string;
    set application(value: string);
    get applicationInput(): string;
    get arn(): string;
    get autoscalingGroups(): string[];
    get cname(): string;
    private _cnamePrefix?;
    get cnamePrefix(): string;
    set cnamePrefix(value: string);
    resetCnamePrefix(): void;
    get cnamePrefixInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get endpointUrl(): string;
    get id(): string;
    get instances(): string[];
    get launchConfigurations(): string[];
    get loadBalancers(): string[];
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _platformArn?;
    get platformArn(): string;
    set platformArn(value: string);
    resetPlatformArn(): void;
    get platformArnInput(): string | undefined;
    private _pollInterval?;
    get pollInterval(): string;
    set pollInterval(value: string);
    resetPollInterval(): void;
    get pollIntervalInput(): string | undefined;
    get queues(): string[];
    private _solutionStackName?;
    get solutionStackName(): string;
    set solutionStackName(value: string);
    resetSolutionStackName(): void;
    get solutionStackNameInput(): string | undefined;
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
    private _templateName?;
    get templateName(): string;
    set templateName(value: string);
    resetTemplateName(): void;
    get templateNameInput(): string | undefined;
    private _tier?;
    get tier(): string;
    set tier(value: string);
    resetTier(): void;
    get tierInput(): string | undefined;
    get triggers(): string[];
    private _versionLabel?;
    get versionLabel(): string;
    set versionLabel(value: string);
    resetVersionLabel(): void;
    get versionLabelInput(): string | undefined;
    private _waitForReadyTimeout?;
    get waitForReadyTimeout(): string;
    set waitForReadyTimeout(value: string);
    resetWaitForReadyTimeout(): void;
    get waitForReadyTimeoutInput(): string | undefined;
    private _setting?;
    get setting(): ElasticBeanstalkEnvironmentSetting[];
    set setting(value: ElasticBeanstalkEnvironmentSetting[]);
    resetSetting(): void;
    get settingInput(): ElasticBeanstalkEnvironmentSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
