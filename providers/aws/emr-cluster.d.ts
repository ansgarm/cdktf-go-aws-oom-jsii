import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_info EmrCluster#additional_info}.
     */
    readonly additionalInfo?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#applications EmrCluster#applications}.
     */
    readonly applications?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#autoscaling_role EmrCluster#autoscaling_role}.
     */
    readonly autoscalingRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}.
     */
    readonly configurations?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations_json EmrCluster#configurations_json}.
     */
    readonly configurationsJson?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#custom_ami_id EmrCluster#custom_ami_id}.
     */
    readonly customAmiId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_root_volume_size EmrCluster#ebs_root_volume_size}.
     */
    readonly ebsRootVolumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}.
     */
    readonly keepJobFlowAliveWhenNoSteps?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#log_uri EmrCluster#log_uri}.
     */
    readonly logUri?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#release_label EmrCluster#release_label}.
     */
    readonly releaseLabel: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#scale_down_behavior EmrCluster#scale_down_behavior}.
     */
    readonly scaleDownBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#security_configuration EmrCluster#security_configuration}.
     */
    readonly securityConfiguration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#service_role EmrCluster#service_role}.
     */
    readonly serviceRole: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#step EmrCluster#step}.
     */
    readonly step?: EmrClusterStep[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#step_concurrency_level EmrCluster#step_concurrency_level}.
     */
    readonly stepConcurrencyLevel?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#tags EmrCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#tags_all EmrCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#termination_protection EmrCluster#termination_protection}.
     */
    readonly terminationProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#visible_to_all_users EmrCluster#visible_to_all_users}.
     */
    readonly visibleToAllUsers?: boolean;
    /**
     * bootstrap_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bootstrap_action EmrCluster#bootstrap_action}
     */
    readonly bootstrapAction?: EmrClusterBootstrapAction[];
    /**
     * core_instance_fleet block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#core_instance_fleet EmrCluster#core_instance_fleet}
     */
    readonly coreInstanceFleet?: EmrClusterCoreInstanceFleet[];
    /**
     * core_instance_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#core_instance_group EmrCluster#core_instance_group}
     */
    readonly coreInstanceGroup?: EmrClusterCoreInstanceGroup[];
    /**
     * ec2_attributes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ec2_attributes EmrCluster#ec2_attributes}
     */
    readonly ec2Attributes?: EmrClusterEc2Attributes[];
    /**
     * kerberos_attributes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#kerberos_attributes EmrCluster#kerberos_attributes}
     */
    readonly kerberosAttributes?: EmrClusterKerberosAttributes[];
    /**
     * master_instance_fleet block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#master_instance_fleet EmrCluster#master_instance_fleet}
     */
    readonly masterInstanceFleet?: EmrClusterMasterInstanceFleet[];
    /**
     * master_instance_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#master_instance_group EmrCluster#master_instance_group}
     */
    readonly masterInstanceGroup?: EmrClusterMasterInstanceGroup[];
}
export interface EmrClusterStepHadoopJarStep {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#args EmrCluster#args}.
     */
    readonly args?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#jar EmrCluster#jar}.
     */
    readonly jar?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#main_class EmrCluster#main_class}.
     */
    readonly mainClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}.
     */
    readonly properties?: {
        [key: string]: string;
    };
}
export interface EmrClusterStep {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#action_on_failure EmrCluster#action_on_failure}.
     */
    readonly actionOnFailure?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#hadoop_jar_step EmrCluster#hadoop_jar_step}.
     */
    readonly hadoopJarStep?: EmrClusterStepHadoopJarStep[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}.
     */
    readonly name?: string;
}
export interface EmrClusterBootstrapAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#args EmrCluster#args}.
     */
    readonly args?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#path EmrCluster#path}.
     */
    readonly path: string;
}
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#classification EmrCluster#classification}.
     */
    readonly classification?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}.
     */
    readonly properties?: {
        [key: string]: string;
    };
}
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}.
     */
    readonly volumesPerInstance?: number;
}
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}.
     */
    readonly bidPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.
     */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#weighted_capacity EmrCluster#weighted_capacity}.
     */
    readonly weightedCapacity?: number;
    /**
     * configurations block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
     */
    readonly configurations?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
     * ebs_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
     */
    readonly ebsConfig?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[];
}
export interface EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}.
     */
    readonly allocationStrategy: string;
}
export interface EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}.
     */
    readonly allocationStrategy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#block_duration_minutes EmrCluster#block_duration_minutes}.
     */
    readonly blockDurationMinutes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_action EmrCluster#timeout_action}.
     */
    readonly timeoutAction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.
     */
    readonly timeoutDurationMinutes: number;
}
export interface EmrClusterCoreInstanceFleetLaunchSpecifications {
    /**
     * on_demand_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#on_demand_specification EmrCluster#on_demand_specification}
     */
    readonly onDemandSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
     * spot_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#spot_specification EmrCluster#spot_specification}
     */
    readonly spotSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[];
}
export interface EmrClusterCoreInstanceFleet {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.
     */
    readonly targetOnDemandCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_spot_capacity EmrCluster#target_spot_capacity}.
     */
    readonly targetSpotCapacity?: number;
    /**
     * instance_type_configs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type_configs EmrCluster#instance_type_configs}
     */
    readonly instanceTypeConfigs?: EmrClusterCoreInstanceFleetInstanceTypeConfigs[];
    /**
     * launch_specifications block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#launch_specifications EmrCluster#launch_specifications}
     */
    readonly launchSpecifications?: EmrClusterCoreInstanceFleetLaunchSpecifications[];
}
export interface EmrClusterCoreInstanceGroupEbsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}.
     */
    readonly volumesPerInstance?: number;
}
export interface EmrClusterCoreInstanceGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#autoscaling_policy EmrCluster#autoscaling_policy}.
     */
    readonly autoscalingPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}.
     */
    readonly bidPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_count EmrCluster#instance_count}.
     */
    readonly instanceCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}.
     */
    readonly name?: string;
    /**
     * ebs_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
     */
    readonly ebsConfig?: EmrClusterCoreInstanceGroupEbsConfig[];
}
export interface EmrClusterEc2Attributes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_master_security_groups EmrCluster#additional_master_security_groups}.
     */
    readonly additionalMasterSecurityGroups?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#additional_slave_security_groups EmrCluster#additional_slave_security_groups}.
     */
    readonly additionalSlaveSecurityGroups?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}.
     */
    readonly emrManagedMasterSecurityGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}.
     */
    readonly emrManagedSlaveSecurityGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_profile EmrCluster#instance_profile}.
     */
    readonly instanceProfile: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#key_name EmrCluster#key_name}.
     */
    readonly keyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#service_access_security_group EmrCluster#service_access_security_group}.
     */
    readonly serviceAccessSecurityGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#subnet_id EmrCluster#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#subnet_ids EmrCluster#subnet_ids}.
     */
    readonly subnetIds?: string[];
}
export interface EmrClusterKerberosAttributes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ad_domain_join_password EmrCluster#ad_domain_join_password}.
     */
    readonly adDomainJoinPassword?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ad_domain_join_user EmrCluster#ad_domain_join_user}.
     */
    readonly adDomainJoinUser?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}.
     */
    readonly crossRealmTrustPrincipalPassword?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#kdc_admin_password EmrCluster#kdc_admin_password}.
     */
    readonly kdcAdminPassword: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#realm EmrCluster#realm}.
     */
    readonly realm: string;
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#classification EmrCluster#classification}.
     */
    readonly classification?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#properties EmrCluster#properties}.
     */
    readonly properties?: {
        [key: string]: string;
    };
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}.
     */
    readonly volumesPerInstance?: number;
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}.
     */
    readonly bidPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.
     */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#weighted_capacity EmrCluster#weighted_capacity}.
     */
    readonly weightedCapacity?: number;
    /**
     * configurations block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#configurations EmrCluster#configurations}
     */
    readonly configurations?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[];
    /**
     * ebs_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
     */
    readonly ebsConfig?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[];
}
export interface EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}.
     */
    readonly allocationStrategy: string;
}
export interface EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#allocation_strategy EmrCluster#allocation_strategy}.
     */
    readonly allocationStrategy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#block_duration_minutes EmrCluster#block_duration_minutes}.
     */
    readonly blockDurationMinutes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_action EmrCluster#timeout_action}.
     */
    readonly timeoutAction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.
     */
    readonly timeoutDurationMinutes: number;
}
export interface EmrClusterMasterInstanceFleetLaunchSpecifications {
    /**
     * on_demand_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#on_demand_specification EmrCluster#on_demand_specification}
     */
    readonly onDemandSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[];
    /**
     * spot_specification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#spot_specification EmrCluster#spot_specification}
     */
    readonly spotSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[];
}
export interface EmrClusterMasterInstanceFleet {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.
     */
    readonly targetOnDemandCapacity?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#target_spot_capacity EmrCluster#target_spot_capacity}.
     */
    readonly targetSpotCapacity?: number;
    /**
     * instance_type_configs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type_configs EmrCluster#instance_type_configs}
     */
    readonly instanceTypeConfigs?: EmrClusterMasterInstanceFleetInstanceTypeConfigs[];
    /**
     * launch_specifications block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#launch_specifications EmrCluster#launch_specifications}
     */
    readonly launchSpecifications?: EmrClusterMasterInstanceFleetLaunchSpecifications[];
}
export interface EmrClusterMasterInstanceGroupEbsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#iops EmrCluster#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#size EmrCluster#size}.
     */
    readonly size: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#type EmrCluster#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#volumes_per_instance EmrCluster#volumes_per_instance}.
     */
    readonly volumesPerInstance?: number;
}
export interface EmrClusterMasterInstanceGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#bid_price EmrCluster#bid_price}.
     */
    readonly bidPrice?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_count EmrCluster#instance_count}.
     */
    readonly instanceCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#instance_type EmrCluster#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#name EmrCluster#name}.
     */
    readonly name?: string;
    /**
     * ebs_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html#ebs_config EmrCluster#ebs_config}
     */
    readonly ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster}.
 */
export declare class EmrCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EmrClusterConfig);
    private _additionalInfo?;
    get additionalInfo(): string;
    set additionalInfo(value: string);
    resetAdditionalInfo(): void;
    get additionalInfoInput(): string | undefined;
    private _applications?;
    get applications(): string[];
    set applications(value: string[]);
    resetApplications(): void;
    get applicationsInput(): string[] | undefined;
    get arn(): string;
    private _autoscalingRole?;
    get autoscalingRole(): string;
    set autoscalingRole(value: string);
    resetAutoscalingRole(): void;
    get autoscalingRoleInput(): string | undefined;
    get clusterState(): string;
    private _configurations?;
    get configurations(): string;
    set configurations(value: string);
    resetConfigurations(): void;
    get configurationsInput(): string | undefined;
    private _configurationsJson?;
    get configurationsJson(): string;
    set configurationsJson(value: string);
    resetConfigurationsJson(): void;
    get configurationsJsonInput(): string | undefined;
    private _customAmiId?;
    get customAmiId(): string;
    set customAmiId(value: string);
    resetCustomAmiId(): void;
    get customAmiIdInput(): string | undefined;
    private _ebsRootVolumeSize?;
    get ebsRootVolumeSize(): number;
    set ebsRootVolumeSize(value: number);
    resetEbsRootVolumeSize(): void;
    get ebsRootVolumeSizeInput(): number | undefined;
    get id(): string;
    private _keepJobFlowAliveWhenNoSteps?;
    get keepJobFlowAliveWhenNoSteps(): boolean;
    set keepJobFlowAliveWhenNoSteps(value: boolean);
    resetKeepJobFlowAliveWhenNoSteps(): void;
    get keepJobFlowAliveWhenNoStepsInput(): boolean | undefined;
    private _logUri?;
    get logUri(): string;
    set logUri(value: string);
    resetLogUri(): void;
    get logUriInput(): string | undefined;
    get masterPublicDns(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _releaseLabel;
    get releaseLabel(): string;
    set releaseLabel(value: string);
    get releaseLabelInput(): string;
    private _scaleDownBehavior?;
    get scaleDownBehavior(): string;
    set scaleDownBehavior(value: string);
    resetScaleDownBehavior(): void;
    get scaleDownBehaviorInput(): string | undefined;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
    private _serviceRole;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
    private _step?;
    get step(): EmrClusterStep[];
    set step(value: EmrClusterStep[]);
    resetStep(): void;
    get stepInput(): EmrClusterStep[] | undefined;
    private _stepConcurrencyLevel?;
    get stepConcurrencyLevel(): number;
    set stepConcurrencyLevel(value: number);
    resetStepConcurrencyLevel(): void;
    get stepConcurrencyLevelInput(): number | undefined;
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
    private _terminationProtection?;
    get terminationProtection(): boolean;
    set terminationProtection(value: boolean);
    resetTerminationProtection(): void;
    get terminationProtectionInput(): boolean | undefined;
    private _visibleToAllUsers?;
    get visibleToAllUsers(): boolean;
    set visibleToAllUsers(value: boolean);
    resetVisibleToAllUsers(): void;
    get visibleToAllUsersInput(): boolean | undefined;
    private _bootstrapAction?;
    get bootstrapAction(): EmrClusterBootstrapAction[];
    set bootstrapAction(value: EmrClusterBootstrapAction[]);
    resetBootstrapAction(): void;
    get bootstrapActionInput(): EmrClusterBootstrapAction[] | undefined;
    private _coreInstanceFleet?;
    get coreInstanceFleet(): EmrClusterCoreInstanceFleet[];
    set coreInstanceFleet(value: EmrClusterCoreInstanceFleet[]);
    resetCoreInstanceFleet(): void;
    get coreInstanceFleetInput(): EmrClusterCoreInstanceFleet[] | undefined;
    private _coreInstanceGroup?;
    get coreInstanceGroup(): EmrClusterCoreInstanceGroup[];
    set coreInstanceGroup(value: EmrClusterCoreInstanceGroup[]);
    resetCoreInstanceGroup(): void;
    get coreInstanceGroupInput(): EmrClusterCoreInstanceGroup[] | undefined;
    private _ec2Attributes?;
    get ec2Attributes(): EmrClusterEc2Attributes[];
    set ec2Attributes(value: EmrClusterEc2Attributes[]);
    resetEc2Attributes(): void;
    get ec2AttributesInput(): EmrClusterEc2Attributes[] | undefined;
    private _kerberosAttributes?;
    get kerberosAttributes(): EmrClusterKerberosAttributes[];
    set kerberosAttributes(value: EmrClusterKerberosAttributes[]);
    resetKerberosAttributes(): void;
    get kerberosAttributesInput(): EmrClusterKerberosAttributes[] | undefined;
    private _masterInstanceFleet?;
    get masterInstanceFleet(): EmrClusterMasterInstanceFleet[];
    set masterInstanceFleet(value: EmrClusterMasterInstanceFleet[]);
    resetMasterInstanceFleet(): void;
    get masterInstanceFleetInput(): EmrClusterMasterInstanceFleet[] | undefined;
    private _masterInstanceGroup?;
    get masterInstanceGroup(): EmrClusterMasterInstanceGroup[];
    set masterInstanceGroup(value: EmrClusterMasterInstanceGroup[]);
    resetMasterInstanceGroup(): void;
    get masterInstanceGroupInput(): EmrClusterMasterInstanceGroup[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
