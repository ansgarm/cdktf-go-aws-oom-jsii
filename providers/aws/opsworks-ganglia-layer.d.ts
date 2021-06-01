import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksGangliaLayerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#auto_assign_elastic_ips OpsworksGangliaLayer#auto_assign_elastic_ips}.
     */
    readonly autoAssignElasticIps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#auto_assign_public_ips OpsworksGangliaLayer#auto_assign_public_ips}.
     */
    readonly autoAssignPublicIps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#auto_healing OpsworksGangliaLayer#auto_healing}.
     */
    readonly autoHealing?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_configure_recipes OpsworksGangliaLayer#custom_configure_recipes}.
     */
    readonly customConfigureRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_deploy_recipes OpsworksGangliaLayer#custom_deploy_recipes}.
     */
    readonly customDeployRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_instance_profile_arn OpsworksGangliaLayer#custom_instance_profile_arn}.
     */
    readonly customInstanceProfileArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_json OpsworksGangliaLayer#custom_json}.
     */
    readonly customJson?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_security_group_ids OpsworksGangliaLayer#custom_security_group_ids}.
     */
    readonly customSecurityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_setup_recipes OpsworksGangliaLayer#custom_setup_recipes}.
     */
    readonly customSetupRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_shutdown_recipes OpsworksGangliaLayer#custom_shutdown_recipes}.
     */
    readonly customShutdownRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#custom_undeploy_recipes OpsworksGangliaLayer#custom_undeploy_recipes}.
     */
    readonly customUndeployRecipes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#drain_elb_on_shutdown OpsworksGangliaLayer#drain_elb_on_shutdown}.
     */
    readonly drainElbOnShutdown?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#elastic_load_balancer OpsworksGangliaLayer#elastic_load_balancer}.
     */
    readonly elasticLoadBalancer?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#install_updates_on_boot OpsworksGangliaLayer#install_updates_on_boot}.
     */
    readonly installUpdatesOnBoot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#instance_shutdown_timeout OpsworksGangliaLayer#instance_shutdown_timeout}.
     */
    readonly instanceShutdownTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#name OpsworksGangliaLayer#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#password OpsworksGangliaLayer#password}.
     */
    readonly password: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#stack_id OpsworksGangliaLayer#stack_id}.
     */
    readonly stackId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#system_packages OpsworksGangliaLayer#system_packages}.
     */
    readonly systemPackages?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#tags OpsworksGangliaLayer#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#tags_all OpsworksGangliaLayer#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#url OpsworksGangliaLayer#url}.
     */
    readonly url?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#use_ebs_optimized_instances OpsworksGangliaLayer#use_ebs_optimized_instances}.
     */
    readonly useEbsOptimizedInstances?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#username OpsworksGangliaLayer#username}.
     */
    readonly username?: string;
    /**
     * ebs_volume block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#ebs_volume OpsworksGangliaLayer#ebs_volume}
     */
    readonly ebsVolume?: OpsworksGangliaLayerEbsVolume[];
}
export interface OpsworksGangliaLayerEbsVolume {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#encrypted OpsworksGangliaLayer#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#iops OpsworksGangliaLayer#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#mount_point OpsworksGangliaLayer#mount_point}.
     */
    readonly mountPoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#number_of_disks OpsworksGangliaLayer#number_of_disks}.
     */
    readonly numberOfDisks: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#raid_level OpsworksGangliaLayer#raid_level}.
     */
    readonly raidLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#size OpsworksGangliaLayer#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html#type OpsworksGangliaLayer#type}.
     */
    readonly type?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html aws_opsworks_ganglia_layer}.
 */
export declare class OpsworksGangliaLayer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html aws_opsworks_ganglia_layer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OpsworksGangliaLayerConfig);
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
    private _password;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
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
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
    private _useEbsOptimizedInstances?;
    get useEbsOptimizedInstances(): boolean;
    set useEbsOptimizedInstances(value: boolean);
    resetUseEbsOptimizedInstances(): void;
    get useEbsOptimizedInstancesInput(): boolean | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
    private _ebsVolume?;
    get ebsVolume(): OpsworksGangliaLayerEbsVolume[];
    set ebsVolume(value: OpsworksGangliaLayerEbsVolume[]);
    resetEbsVolume(): void;
    get ebsVolumeInput(): OpsworksGangliaLayerEbsVolume[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
