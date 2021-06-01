import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#cluster EcsService#cluster}.
     */
    readonly cluster?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_maximum_percent EcsService#deployment_maximum_percent}.
     */
    readonly deploymentMaximumPercent?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}.
     */
    readonly deploymentMinimumHealthyPercent?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#desired_count EcsService#desired_count}.
     */
    readonly desiredCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}.
     */
    readonly enableEcsManagedTags?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_execute_command EcsService#enable_execute_command}.
     */
    readonly enableExecuteCommand?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#force_new_deployment EcsService#force_new_deployment}.
     */
    readonly forceNewDeployment?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}.
     */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#iam_role EcsService#iam_role}.
     */
    readonly iamRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#launch_type EcsService#launch_type}.
     */
    readonly launchType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#name EcsService#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#platform_version EcsService#platform_version}.
     */
    readonly platformVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#propagate_tags EcsService#propagate_tags}.
     */
    readonly propagateTags?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#scheduling_strategy EcsService#scheduling_strategy}.
     */
    readonly schedulingStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags EcsService#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags_all EcsService#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#task_definition EcsService#task_definition}.
     */
    readonly taskDefinition?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#wait_for_steady_state EcsService#wait_for_steady_state}.
     */
    readonly waitForSteadyState?: boolean;
    /**
     * capacity_provider_strategy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider_strategy EcsService#capacity_provider_strategy}
     */
    readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
    /**
     * deployment_circuit_breaker block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
     */
    readonly deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker[];
    /**
     * deployment_controller block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_controller EcsService#deployment_controller}
     */
    readonly deploymentController?: EcsServiceDeploymentController[];
    /**
     * load_balancer block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#load_balancer EcsService#load_balancer}
     */
    readonly loadBalancer?: EcsServiceLoadBalancer[];
    /**
     * network_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#network_configuration EcsService#network_configuration}
     */
    readonly networkConfiguration?: EcsServiceNetworkConfiguration[];
    /**
     * ordered_placement_strategy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#ordered_placement_strategy EcsService#ordered_placement_strategy}
     */
    readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
    /**
     * placement_constraints block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#placement_constraints EcsService#placement_constraints}
     */
    readonly placementConstraints?: EcsServicePlacementConstraints[];
    /**
     * service_registries block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#service_registries EcsService#service_registries}
     */
    readonly serviceRegistries?: EcsServiceServiceRegistries[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#timeouts EcsService#timeouts}
     */
    readonly timeouts?: EcsServiceTimeouts;
}
export interface EcsServiceCapacityProviderStrategy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#base EcsService#base}.
     */
    readonly base?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider EcsService#capacity_provider}.
     */
    readonly capacityProvider: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#weight EcsService#weight}.
     */
    readonly weight?: number;
}
export interface EcsServiceDeploymentCircuitBreaker {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable EcsService#enable}.
     */
    readonly enable: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#rollback EcsService#rollback}.
     */
    readonly rollback: boolean;
}
export interface EcsServiceDeploymentController {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}.
     */
    readonly type?: string;
}
export interface EcsServiceLoadBalancer {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}.
     */
    readonly containerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}.
     */
    readonly containerPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#elb_name EcsService#elb_name}.
     */
    readonly elbName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#target_group_arn EcsService#target_group_arn}.
     */
    readonly targetGroupArn?: string;
}
export interface EcsServiceNetworkConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#assign_public_ip EcsService#assign_public_ip}.
     */
    readonly assignPublicIp?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#security_groups EcsService#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#subnets EcsService#subnets}.
     */
    readonly subnets: string[];
}
export interface EcsServiceOrderedPlacementStrategy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#field EcsService#field}.
     */
    readonly field?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}.
     */
    readonly type: string;
}
export interface EcsServicePlacementConstraints {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#expression EcsService#expression}.
     */
    readonly expression?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}.
     */
    readonly type: string;
}
export interface EcsServiceServiceRegistries {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}.
     */
    readonly containerName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}.
     */
    readonly containerPort?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#port EcsService#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#registry_arn EcsService#registry_arn}.
     */
    readonly registryArn: string;
}
export interface EcsServiceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#delete EcsService#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service}.
 */
export declare class EcsService extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcsServiceConfig);
    private _cluster?;
    get cluster(): string;
    set cluster(value: string);
    resetCluster(): void;
    get clusterInput(): string | undefined;
    private _deploymentMaximumPercent?;
    get deploymentMaximumPercent(): number;
    set deploymentMaximumPercent(value: number);
    resetDeploymentMaximumPercent(): void;
    get deploymentMaximumPercentInput(): number | undefined;
    private _deploymentMinimumHealthyPercent?;
    get deploymentMinimumHealthyPercent(): number;
    set deploymentMinimumHealthyPercent(value: number);
    resetDeploymentMinimumHealthyPercent(): void;
    get deploymentMinimumHealthyPercentInput(): number | undefined;
    private _desiredCount?;
    get desiredCount(): number;
    set desiredCount(value: number);
    resetDesiredCount(): void;
    get desiredCountInput(): number | undefined;
    private _enableEcsManagedTags?;
    get enableEcsManagedTags(): boolean;
    set enableEcsManagedTags(value: boolean);
    resetEnableEcsManagedTags(): void;
    get enableEcsManagedTagsInput(): boolean | undefined;
    private _enableExecuteCommand?;
    get enableExecuteCommand(): boolean;
    set enableExecuteCommand(value: boolean);
    resetEnableExecuteCommand(): void;
    get enableExecuteCommandInput(): boolean | undefined;
    private _forceNewDeployment?;
    get forceNewDeployment(): boolean;
    set forceNewDeployment(value: boolean);
    resetForceNewDeployment(): void;
    get forceNewDeploymentInput(): boolean | undefined;
    private _healthCheckGracePeriodSeconds?;
    get healthCheckGracePeriodSeconds(): number;
    set healthCheckGracePeriodSeconds(value: number);
    resetHealthCheckGracePeriodSeconds(): void;
    get healthCheckGracePeriodSecondsInput(): number | undefined;
    private _iamRole?;
    get iamRole(): string;
    set iamRole(value: string);
    resetIamRole(): void;
    get iamRoleInput(): string | undefined;
    get id(): string;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string | undefined;
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string | undefined;
    private _schedulingStrategy?;
    get schedulingStrategy(): string;
    set schedulingStrategy(value: string);
    resetSchedulingStrategy(): void;
    get schedulingStrategyInput(): string | undefined;
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
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    resetTaskDefinition(): void;
    get taskDefinitionInput(): string | undefined;
    private _waitForSteadyState?;
    get waitForSteadyState(): boolean;
    set waitForSteadyState(value: boolean);
    resetWaitForSteadyState(): void;
    get waitForSteadyStateInput(): boolean | undefined;
    private _capacityProviderStrategy?;
    get capacityProviderStrategy(): EcsServiceCapacityProviderStrategy[];
    set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[]);
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): EcsServiceCapacityProviderStrategy[] | undefined;
    private _deploymentCircuitBreaker?;
    get deploymentCircuitBreaker(): EcsServiceDeploymentCircuitBreaker[];
    set deploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker[]);
    resetDeploymentCircuitBreaker(): void;
    get deploymentCircuitBreakerInput(): EcsServiceDeploymentCircuitBreaker[] | undefined;
    private _deploymentController?;
    get deploymentController(): EcsServiceDeploymentController[];
    set deploymentController(value: EcsServiceDeploymentController[]);
    resetDeploymentController(): void;
    get deploymentControllerInput(): EcsServiceDeploymentController[] | undefined;
    private _loadBalancer?;
    get loadBalancer(): EcsServiceLoadBalancer[];
    set loadBalancer(value: EcsServiceLoadBalancer[]);
    resetLoadBalancer(): void;
    get loadBalancerInput(): EcsServiceLoadBalancer[] | undefined;
    private _networkConfiguration?;
    get networkConfiguration(): EcsServiceNetworkConfiguration[];
    set networkConfiguration(value: EcsServiceNetworkConfiguration[]);
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EcsServiceNetworkConfiguration[] | undefined;
    private _orderedPlacementStrategy?;
    get orderedPlacementStrategy(): EcsServiceOrderedPlacementStrategy[];
    set orderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[]);
    resetOrderedPlacementStrategy(): void;
    get orderedPlacementStrategyInput(): EcsServiceOrderedPlacementStrategy[] | undefined;
    private _placementConstraints?;
    get placementConstraints(): EcsServicePlacementConstraints[];
    set placementConstraints(value: EcsServicePlacementConstraints[]);
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): EcsServicePlacementConstraints[] | undefined;
    private _serviceRegistries?;
    get serviceRegistries(): EcsServiceServiceRegistries[];
    set serviceRegistries(value: EcsServiceServiceRegistries[]);
    resetServiceRegistries(): void;
    get serviceRegistriesInput(): EcsServiceServiceRegistries[] | undefined;
    private _timeouts?;
    get timeouts(): EcsServiceTimeouts;
    set timeouts(value: EcsServiceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): EcsServiceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
