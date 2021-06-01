import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksMemcachedLayerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#allocated_memory OpsworksMemcachedLayer#allocated_memory}.
     */
    readonly allocatedMemory?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}.
     */
    readonly autoAssignElasticIps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}.
     */
    readonly autoAssignPublicIps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_healing OpsworksMemcachedLayer#auto_healing}.
     */
    readonly autoHealing?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}.
     */
    readonly customConfigureRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}.
     */
    readonly customDeployRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}.
     */
    readonly customInstanceProfileArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_json OpsworksMemcachedLayer#custom_json}.
     */
    readonly customJson?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}.
     */
    readonly customSecurityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}.
     */
    readonly customSetupRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}.
     */
    readonly customShutdownRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}.
     */
    readonly customUndeployRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}.
     */
    readonly drainElbOnShutdown?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}.
     */
    readonly elasticLoadBalancer?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}.
     */
    readonly installUpdatesOnBoot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}.
     */
    readonly instanceShutdownTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#name OpsworksMemcachedLayer#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#stack_id OpsworksMemcachedLayer#stack_id}.
     */
    readonly stackId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#system_packages OpsworksMemcachedLayer#system_packages}.
     */
    readonly systemPackages?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#tags OpsworksMemcachedLayer#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#tags_all OpsworksMemcachedLayer#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}.
     */
    readonly useEbsOptimizedInstances?: boolean;
    /**
     * ebs_volume block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#ebs_volume OpsworksMemcachedLayer#ebs_volume}
     */
    readonly ebsVolume?: OpsworksMemcachedLayerEbsVolume[];
}
export interface OpsworksMemcachedLayerEbsVolume {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#encrypted OpsworksMemcachedLayer#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#iops OpsworksMemcachedLayer#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#mount_point OpsworksMemcachedLayer#mount_point}.
     */
    readonly mountPoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#number_of_disks OpsworksMemcachedLayer#number_of_disks}.
     */
    readonly numberOfDisks: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#raid_level OpsworksMemcachedLayer#raid_level}.
     */
    readonly raidLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#size OpsworksMemcachedLayer#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#type OpsworksMemcachedLayer#type}.
     */
    readonly type?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html aws_opsworks_memcached_layer}.
 */
export declare class OpsworksMemcachedLayer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html aws_opsworks_memcached_layer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OpsworksMemcachedLayerConfig);
    private _allocatedMemory?;
    get allocatedMemory(): number;
    set allocatedMemory(value: number);
    resetAllocatedMemory(): void;
    get allocatedMemoryInput(): number | undefined;
    get arn(): string;
    private _autoAssignElasticIps?;
    get autoAssignElasticIps(): boolean;
    set autoAssignElasticIps(value: boolean);
    resetAutoAssignElasticIps(): void;
    get autoAssignElasticIpsInput(): boolean | undefined;
    private _autoAssignPublicIps?;
    get autoAssignPublicIps(): boolean;
    set autoAssignPublicIps(value: boolean);
    resetAutoAssignPublicIps(): void;
    get autoAssignPublicIpsInput(): boolean | undefined;
    private _autoHealing?;
    get autoHealing(): boolean;
    set autoHealing(value: boolean);
    resetAutoHealing(): void;
    get autoHealingInput(): boolean | undefined;
    private _customConfigureRecipes?;
    get customConfigureRecipes(): string[];
    set customConfigureRecipes(value: string[]);
    resetCustomConfigureRecipes(): void;
    get customConfigureRecipesInput(): string[] | undefined;
    private _customDeployRecipes?;
    get customDeployRecipes(): string[];
    set customDeployRecipes(value: string[]);
    resetCustomDeployRecipes(): void;
    get customDeployRecipesInput(): string[] | undefined;
    private _customInstanceProfileArn?;
    get customInstanceProfileArn(): string;
    set customInstanceProfileArn(value: string);
    resetCustomInstanceProfileArn(): void;
    get customInstanceProfileArnInput(): string | undefined;
    private _customJson?;
    get customJson(): string;
    set customJson(value: string);
    resetCustomJson(): void;
    get customJsonInput(): string | undefined;
    private _customSecurityGroupIds?;
    get customSecurityGroupIds(): string[];
    set customSecurityGroupIds(value: string[]);
    resetCustomSecurityGroupIds(): void;
    get customSecurityGroupIdsInput(): string[] | undefined;
    private _customSetupRecipes?;
    get customSetupRecipes(): string[];
    set customSetupRecipes(value: string[]);
    resetCustomSetupRecipes(): void;
    get customSetupRecipesInput(): string[] | undefined;
    private _customShutdownRecipes?;
    get customShutdownRecipes(): string[];
    set customShutdownRecipes(value: string[]);
    resetCustomShutdownRecipes(): void;
    get customShutdownRecipesInput(): string[] | undefined;
    private _customUndeployRecipes?;
    get customUndeployRecipes(): string[];
    set customUndeployRecipes(value: string[]);
    resetCustomUndeployRecipes(): void;
    get customUndeployRecipesInput(): string[] | undefined;
    private _drainElbOnShutdown?;
    get drainElbOnShutdown(): boolean;
    set drainElbOnShutdown(value: boolean);
    resetDrainElbOnShutdown(): void;
    get drainElbOnShutdownInput(): boolean | undefined;
    private _elasticLoadBalancer?;
    get elasticLoadBalancer(): string;
    set elasticLoadBalancer(value: string);
    resetElasticLoadBalancer(): void;
    get elasticLoadBalancerInput(): string | undefined;
    get id(): string;
    private _installUpdatesOnBoot?;
    get installUpdatesOnBoot(): boolean;
    set installUpdatesOnBoot(value: boolean);
    resetInstallUpdatesOnBoot(): void;
    get installUpdatesOnBootInput(): boolean | undefined;
    private _instanceShutdownTimeout?;
    get instanceShutdownTimeout(): number;
    set instanceShutdownTimeout(value: number);
    resetInstanceShutdownTimeout(): void;
    get instanceShutdownTimeoutInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _stackId;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string;
    private _systemPackages?;
    get systemPackages(): string[];
    set systemPackages(value: string[]);
    resetSystemPackages(): void;
    get systemPackagesInput(): string[] | undefined;
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
    private _useEbsOptimizedInstances?;
    get useEbsOptimizedInstances(): boolean;
    set useEbsOptimizedInstances(value: boolean);
    resetUseEbsOptimizedInstances(): void;
    get useEbsOptimizedInstancesInput(): boolean | undefined;
    private _ebsVolume?;
    get ebsVolume(): OpsworksMemcachedLayerEbsVolume[];
    set ebsVolume(value: OpsworksMemcachedLayerEbsVolume[]);
    resetEbsVolume(): void;
    get ebsVolumeInput(): OpsworksMemcachedLayerEbsVolume[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
