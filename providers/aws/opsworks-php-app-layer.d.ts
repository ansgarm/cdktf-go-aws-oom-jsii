import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksPhpAppLayerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#auto_assign_elastic_ips OpsworksPhpAppLayer#auto_assign_elastic_ips}.
     */
    readonly autoAssignElasticIps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#auto_assign_public_ips OpsworksPhpAppLayer#auto_assign_public_ips}.
     */
    readonly autoAssignPublicIps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#auto_healing OpsworksPhpAppLayer#auto_healing}.
     */
    readonly autoHealing?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_configure_recipes OpsworksPhpAppLayer#custom_configure_recipes}.
     */
    readonly customConfigureRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_deploy_recipes OpsworksPhpAppLayer#custom_deploy_recipes}.
     */
    readonly customDeployRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_instance_profile_arn OpsworksPhpAppLayer#custom_instance_profile_arn}.
     */
    readonly customInstanceProfileArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_json OpsworksPhpAppLayer#custom_json}.
     */
    readonly customJson?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_security_group_ids OpsworksPhpAppLayer#custom_security_group_ids}.
     */
    readonly customSecurityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_setup_recipes OpsworksPhpAppLayer#custom_setup_recipes}.
     */
    readonly customSetupRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_shutdown_recipes OpsworksPhpAppLayer#custom_shutdown_recipes}.
     */
    readonly customShutdownRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#custom_undeploy_recipes OpsworksPhpAppLayer#custom_undeploy_recipes}.
     */
    readonly customUndeployRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#drain_elb_on_shutdown OpsworksPhpAppLayer#drain_elb_on_shutdown}.
     */
    readonly drainElbOnShutdown?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#elastic_load_balancer OpsworksPhpAppLayer#elastic_load_balancer}.
     */
    readonly elasticLoadBalancer?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#install_updates_on_boot OpsworksPhpAppLayer#install_updates_on_boot}.
     */
    readonly installUpdatesOnBoot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#instance_shutdown_timeout OpsworksPhpAppLayer#instance_shutdown_timeout}.
     */
    readonly instanceShutdownTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#name OpsworksPhpAppLayer#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#stack_id OpsworksPhpAppLayer#stack_id}.
     */
    readonly stackId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#system_packages OpsworksPhpAppLayer#system_packages}.
     */
    readonly systemPackages?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#tags OpsworksPhpAppLayer#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#tags_all OpsworksPhpAppLayer#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#use_ebs_optimized_instances OpsworksPhpAppLayer#use_ebs_optimized_instances}.
     */
    readonly useEbsOptimizedInstances?: boolean;
    /**
     * ebs_volume block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#ebs_volume OpsworksPhpAppLayer#ebs_volume}
     */
    readonly ebsVolume?: OpsworksPhpAppLayerEbsVolume[];
}
export interface OpsworksPhpAppLayerEbsVolume {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#encrypted OpsworksPhpAppLayer#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#iops OpsworksPhpAppLayer#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#mount_point OpsworksPhpAppLayer#mount_point}.
     */
    readonly mountPoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#number_of_disks OpsworksPhpAppLayer#number_of_disks}.
     */
    readonly numberOfDisks: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#raid_level OpsworksPhpAppLayer#raid_level}.
     */
    readonly raidLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#size OpsworksPhpAppLayer#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html#type OpsworksPhpAppLayer#type}.
     */
    readonly type?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html aws_opsworks_php_app_layer}.
 */
export declare class OpsworksPhpAppLayer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_php_app_layer.html aws_opsworks_php_app_layer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OpsworksPhpAppLayerConfig);
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
    get ebsVolume(): OpsworksPhpAppLayerEbsVolume[];
    set ebsVolume(value: OpsworksPhpAppLayerEbsVolume[]);
    resetEbsVolume(): void;
    get ebsVolumeInput(): OpsworksPhpAppLayerEbsVolume[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
