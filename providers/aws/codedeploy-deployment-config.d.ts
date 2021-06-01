import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodedeployDeploymentConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#compute_platform CodedeployDeploymentConfig#compute_platform}.
     */
    readonly computePlatform?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}.
     */
    readonly deploymentConfigName: string;
    /**
     * minimum_healthy_hosts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}
     */
    readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts[];
    /**
     * traffic_routing_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}
     */
    readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig[];
}
export interface CodedeployDeploymentConfigMinimumHealthyHosts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}.
     */
    readonly type?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#value CodedeployDeploymentConfig#value}.
     */
    readonly value?: number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}.
     */
    readonly interval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}.
     */
    readonly percentage?: number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}.
     */
    readonly interval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}.
     */
    readonly percentage?: number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}.
     */
    readonly type?: string;
    /**
     * time_based_canary block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_canary CodedeployDeploymentConfig#time_based_canary}
     */
    readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary[];
    /**
     * time_based_linear block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_linear CodedeployDeploymentConfig#time_based_linear}
     */
    readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config}.
 */
export declare class CodedeployDeploymentConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig);
    private _computePlatform?;
    get computePlatform(): string;
    set computePlatform(value: string);
    resetComputePlatform(): void;
    get computePlatformInput(): string | undefined;
    get deploymentConfigId(): string;
    private _deploymentConfigName;
    get deploymentConfigName(): string;
    set deploymentConfigName(value: string);
    get deploymentConfigNameInput(): string;
    get id(): string;
    private _minimumHealthyHosts?;
    get minimumHealthyHosts(): CodedeployDeploymentConfigMinimumHealthyHosts[];
    set minimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts[]);
    resetMinimumHealthyHosts(): void;
    get minimumHealthyHostsInput(): CodedeployDeploymentConfigMinimumHealthyHosts[] | undefined;
    private _trafficRoutingConfig?;
    get trafficRoutingConfig(): CodedeployDeploymentConfigTrafficRoutingConfig[];
    set trafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig[]);
    resetTrafficRoutingConfig(): void;
    get trafficRoutingConfigInput(): CodedeployDeploymentConfigTrafficRoutingConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
