import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftGameSessionQueueConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#destinations GameliftGameSessionQueue#destinations}.
     */
    readonly destinations?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#name GameliftGameSessionQueue#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#tags GameliftGameSessionQueue#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#tags_all GameliftGameSessionQueue#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}.
     */
    readonly timeoutInSeconds?: number;
    /**
     * player_latency_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#player_latency_policy GameliftGameSessionQueue#player_latency_policy}
     */
    readonly playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[];
}
export interface GameliftGameSessionQueuePlayerLatencyPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}.
     */
    readonly maximumIndividualPlayerLatencyMilliseconds: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}.
     */
    readonly policyDurationSeconds?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html aws_gamelift_game_session_queue}.
 */
export declare class GameliftGameSessionQueue extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html aws_gamelift_game_session_queue} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GameliftGameSessionQueueConfig);
    get arn(): string;
    private _destinations?;
    get destinations(): string[];
    set destinations(value: string[]);
    resetDestinations(): void;
    get destinationsInput(): string[] | undefined;
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
    private _timeoutInSeconds?;
    get timeoutInSeconds(): number;
    set timeoutInSeconds(value: number);
    resetTimeoutInSeconds(): void;
    get timeoutInSecondsInput(): number | undefined;
    private _playerLatencyPolicy?;
    get playerLatencyPolicy(): GameliftGameSessionQueuePlayerLatencyPolicy[];
    set playerLatencyPolicy(value: GameliftGameSessionQueuePlayerLatencyPolicy[]);
    resetPlayerLatencyPolicy(): void;
    get playerLatencyPolicyInput(): GameliftGameSessionQueuePlayerLatencyPolicy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
