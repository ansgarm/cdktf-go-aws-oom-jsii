import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_providers EcsCluster#capacity_providers}.
     */
    readonly capacityProviders?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags EcsCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags_all EcsCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * default_capacity_provider_strategy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}
     */
    readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
    /**
     * setting block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#setting EcsCluster#setting}
     */
    readonly setting?: EcsClusterSetting[];
}
export interface EcsClusterDefaultCapacityProviderStrategy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#base EcsCluster#base}.
     */
    readonly base?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_provider EcsCluster#capacity_provider}.
     */
    readonly capacityProvider: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#weight EcsCluster#weight}.
     */
    readonly weight?: number;
}
export interface EcsClusterSetting {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#value EcsCluster#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster}.
 */
export declare class EcsCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcsClusterConfig);
    get arn(): string;
    private _capacityProviders?;
    get capacityProviders(): string[];
    set capacityProviders(value: string[]);
    resetCapacityProviders(): void;
    get capacityProvidersInput(): string[] | undefined;
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
    private _defaultCapacityProviderStrategy?;
    get defaultCapacityProviderStrategy(): EcsClusterDefaultCapacityProviderStrategy[];
    set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[]);
    resetDefaultCapacityProviderStrategy(): void;
    get defaultCapacityProviderStrategyInput(): EcsClusterDefaultCapacityProviderStrategy[] | undefined;
    private _setting?;
    get setting(): EcsClusterSetting[];
    set setting(value: EcsClusterSetting[]);
    resetSetting(): void;
    get settingInput(): EcsClusterSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
