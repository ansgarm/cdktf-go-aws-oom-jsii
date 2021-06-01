import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftFleetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#build_id GameliftFleet#build_id}.
     */
    readonly buildId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#description GameliftFleet#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ec2_instance_type GameliftFleet#ec2_instance_type}.
     */
    readonly ec2InstanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#fleet_type GameliftFleet#fleet_type}.
     */
    readonly fleetType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#instance_role_arn GameliftFleet#instance_role_arn}.
     */
    readonly instanceRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#metric_groups GameliftFleet#metric_groups}.
     */
    readonly metricGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#name GameliftFleet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}.
     */
    readonly newGameSessionProtectionPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#tags GameliftFleet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#tags_all GameliftFleet#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * ec2_inbound_permission block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}
     */
    readonly ec2InboundPermission?: GameliftFleetEc2InboundPermission[];
    /**
     * resource_creation_limit_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}
     */
    readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy[];
    /**
     * runtime_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#runtime_configuration GameliftFleet#runtime_configuration}
     */
    readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#timeouts GameliftFleet#timeouts}
     */
    readonly timeouts?: GameliftFleetTimeouts;
}
export interface GameliftFleetEc2InboundPermission {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#from_port GameliftFleet#from_port}.
     */
    readonly fromPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ip_range GameliftFleet#ip_range}.
     */
    readonly ipRange: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#protocol GameliftFleet#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#to_port GameliftFleet#to_port}.
     */
    readonly toPort: number;
}
export interface GameliftFleetResourceCreationLimitPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}.
     */
    readonly newGameSessionsPerCreator?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}.
     */
    readonly policyPeriodInMinutes?: number;
}
export interface GameliftFleetRuntimeConfigurationServerProcess {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#concurrent_executions GameliftFleet#concurrent_executions}.
     */
    readonly concurrentExecutions: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#launch_path GameliftFleet#launch_path}.
     */
    readonly launchPath: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#parameters GameliftFleet#parameters}.
     */
    readonly parameters?: string;
}
export interface GameliftFleetRuntimeConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}.
     */
    readonly gameSessionActivationTimeoutSeconds?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}.
     */
    readonly maxConcurrentGameSessionActivations?: number;
    /**
     * server_process block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#server_process GameliftFleet#server_process}
     */
    readonly serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[];
}
export interface GameliftFleetTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#create GameliftFleet#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#delete GameliftFleet#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet}.
 */
export declare class GameliftFleet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GameliftFleetConfig);
    get arn(): string;
    private _buildId;
    get buildId(): string;
    set buildId(value: string);
    get buildIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _ec2InstanceType;
    get ec2InstanceType(): string;
    set ec2InstanceType(value: string);
    get ec2InstanceTypeInput(): string;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string | undefined;
    get id(): string;
    private _instanceRoleArn?;
    get instanceRoleArn(): string;
    set instanceRoleArn(value: string);
    resetInstanceRoleArn(): void;
    get instanceRoleArnInput(): string | undefined;
    get logPaths(): string[];
    private _metricGroups?;
    get metricGroups(): string[];
    set metricGroups(value: string[]);
    resetMetricGroups(): void;
    get metricGroupsInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _newGameSessionProtectionPolicy?;
    get newGameSessionProtectionPolicy(): string;
    set newGameSessionProtectionPolicy(value: string);
    resetNewGameSessionProtectionPolicy(): void;
    get newGameSessionProtectionPolicyInput(): string | undefined;
    get operatingSystem(): string;
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
    private _ec2InboundPermission?;
    get ec2InboundPermission(): GameliftFleetEc2InboundPermission[];
    set ec2InboundPermission(value: GameliftFleetEc2InboundPermission[]);
    resetEc2InboundPermission(): void;
    get ec2InboundPermissionInput(): GameliftFleetEc2InboundPermission[] | undefined;
    private _resourceCreationLimitPolicy?;
    get resourceCreationLimitPolicy(): GameliftFleetResourceCreationLimitPolicy[];
    set resourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy[]);
    resetResourceCreationLimitPolicy(): void;
    get resourceCreationLimitPolicyInput(): GameliftFleetResourceCreationLimitPolicy[] | undefined;
    private _runtimeConfiguration?;
    get runtimeConfiguration(): GameliftFleetRuntimeConfiguration[];
    set runtimeConfiguration(value: GameliftFleetRuntimeConfiguration[]);
    resetRuntimeConfiguration(): void;
    get runtimeConfigurationInput(): GameliftFleetRuntimeConfiguration[] | undefined;
    private _timeouts?;
    get timeouts(): GameliftFleetTimeouts;
    set timeouts(value: GameliftFleetTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): GameliftFleetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
