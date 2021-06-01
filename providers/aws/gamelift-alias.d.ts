import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftAliasConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#description GameliftAlias#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#name GameliftAlias#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags GameliftAlias#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags_all GameliftAlias#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * routing_strategy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#routing_strategy GameliftAlias#routing_strategy}
     */
    readonly routingStrategy: GameliftAliasRoutingStrategy[];
}
export interface GameliftAliasRoutingStrategy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#fleet_id GameliftAlias#fleet_id}.
     */
    readonly fleetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#message GameliftAlias#message}.
     */
    readonly message?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#type GameliftAlias#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias}.
 */
export declare class GameliftAlias extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GameliftAliasConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    private _routingStrategy;
    get routingStrategy(): GameliftAliasRoutingStrategy[];
    set routingStrategy(value: GameliftAliasRoutingStrategy[]);
    get routingStrategyInput(): GameliftAliasRoutingStrategy[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
