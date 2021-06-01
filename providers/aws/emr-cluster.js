"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmrCluster = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function emrClusterStepHadoopJarStepToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        args: struct.args === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.args),
        jar: struct.jar === undefined ? null : cdktf.stringToTerraform(struct.jar),
        main_class: struct.mainClass === undefined ? null : cdktf.stringToTerraform(struct.mainClass),
        properties: struct.properties === undefined ? null : cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
    };
}
function emrClusterStepToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_on_failure: struct.actionOnFailure === undefined ? null : cdktf.stringToTerraform(struct.actionOnFailure),
        hadoop_jar_step: struct.hadoopJarStep === undefined ? null : cdktf.listMapper(emrClusterStepHadoopJarStepToTerraform)(struct.hadoopJarStep),
        name: struct.name === undefined ? null : cdktf.stringToTerraform(struct.name),
    };
}
function emrClusterBootstrapActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        args: cdktf.listMapper(cdktf.stringToTerraform)(struct.args),
        name: cdktf.stringToTerraform(struct.name),
        path: cdktf.stringToTerraform(struct.path),
    };
}
function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
    };
}
function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
function emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct.bidPriceAsPercentageOfOnDemandPrice),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
        configurations: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig),
    };
}
function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
    };
}
function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
        timeout_duration_minutes: cdktf.numberToTerraform(struct.timeoutDurationMinutes),
    };
}
function emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_demand_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification),
    };
}
function emrClusterCoreInstanceFleetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        target_on_demand_capacity: cdktf.numberToTerraform(struct.targetOnDemandCapacity),
        target_spot_capacity: cdktf.numberToTerraform(struct.targetSpotCapacity),
        instance_type_configs: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform)(struct.instanceTypeConfigs),
        launch_specifications: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform)(struct.launchSpecifications),
    };
}
function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
function emrClusterCoreInstanceGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        autoscaling_policy: cdktf.stringToTerraform(struct.autoscalingPolicy),
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        name: cdktf.stringToTerraform(struct.name),
        ebs_config: cdktf.listMapper(emrClusterCoreInstanceGroupEbsConfigToTerraform)(struct.ebsConfig),
    };
}
function emrClusterEc2AttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        additional_master_security_groups: cdktf.stringToTerraform(struct.additionalMasterSecurityGroups),
        additional_slave_security_groups: cdktf.stringToTerraform(struct.additionalSlaveSecurityGroups),
        emr_managed_master_security_group: cdktf.stringToTerraform(struct.emrManagedMasterSecurityGroup),
        emr_managed_slave_security_group: cdktf.stringToTerraform(struct.emrManagedSlaveSecurityGroup),
        instance_profile: cdktf.stringToTerraform(struct.instanceProfile),
        key_name: cdktf.stringToTerraform(struct.keyName),
        service_access_security_group: cdktf.stringToTerraform(struct.serviceAccessSecurityGroup),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
function emrClusterKerberosAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_domain_join_password: cdktf.stringToTerraform(struct.adDomainJoinPassword),
        ad_domain_join_user: cdktf.stringToTerraform(struct.adDomainJoinUser),
        cross_realm_trust_principal_password: cdktf.stringToTerraform(struct.crossRealmTrustPrincipalPassword),
        kdc_admin_password: cdktf.stringToTerraform(struct.kdcAdminPassword),
        realm: cdktf.stringToTerraform(struct.realm),
    };
}
function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
    };
}
function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
function emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct.bidPriceAsPercentageOfOnDemandPrice),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
        configurations: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig),
    };
}
function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
    };
}
function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
        timeout_duration_minutes: cdktf.numberToTerraform(struct.timeoutDurationMinutes),
    };
}
function emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_demand_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification),
    };
}
function emrClusterMasterInstanceFleetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        target_on_demand_capacity: cdktf.numberToTerraform(struct.targetOnDemandCapacity),
        target_spot_capacity: cdktf.numberToTerraform(struct.targetSpotCapacity),
        instance_type_configs: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform)(struct.instanceTypeConfigs),
        launch_specifications: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform)(struct.launchSpecifications),
    };
}
function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
function emrClusterMasterInstanceGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        name: cdktf.stringToTerraform(struct.name),
        ebs_config: cdktf.listMapper(emrClusterMasterInstanceGroupEbsConfigToTerraform)(struct.ebsConfig),
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster}.
 */
class EmrCluster extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_emr_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._additionalInfo = config.additionalInfo;
        this._applications = config.applications;
        this._autoscalingRole = config.autoscalingRole;
        this._configurations = config.configurations;
        this._configurationsJson = config.configurationsJson;
        this._customAmiId = config.customAmiId;
        this._ebsRootVolumeSize = config.ebsRootVolumeSize;
        this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
        this._logUri = config.logUri;
        this._name = config.name;
        this._releaseLabel = config.releaseLabel;
        this._scaleDownBehavior = config.scaleDownBehavior;
        this._securityConfiguration = config.securityConfiguration;
        this._serviceRole = config.serviceRole;
        this._step = config.step;
        this._stepConcurrencyLevel = config.stepConcurrencyLevel;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._terminationProtection = config.terminationProtection;
        this._visibleToAllUsers = config.visibleToAllUsers;
        this._bootstrapAction = config.bootstrapAction;
        this._coreInstanceFleet = config.coreInstanceFleet;
        this._coreInstanceGroup = config.coreInstanceGroup;
        this._ec2Attributes = config.ec2Attributes;
        this._kerberosAttributes = config.kerberosAttributes;
        this._masterInstanceFleet = config.masterInstanceFleet;
        this._masterInstanceGroup = config.masterInstanceGroup;
    }
    get additionalInfo() {
        return this.getStringAttribute('additional_info');
    }
    set additionalInfo(value) {
        this._additionalInfo = value;
    }
    resetAdditionalInfo() {
        this._additionalInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get additionalInfoInput() {
        return this._additionalInfo;
    }
    get applications() {
        return this.getListAttribute('applications');
    }
    set applications(value) {
        this._applications = value;
    }
    resetApplications() {
        this._applications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applicationsInput() {
        return this._applications;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    get autoscalingRole() {
        return this.getStringAttribute('autoscaling_role');
    }
    set autoscalingRole(value) {
        this._autoscalingRole = value;
    }
    resetAutoscalingRole() {
        this._autoscalingRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingRoleInput() {
        return this._autoscalingRole;
    }
    // cluster_state - computed: true, optional: false, required: false
    get clusterState() {
        return this.getStringAttribute('cluster_state');
    }
    get configurations() {
        return this.getStringAttribute('configurations');
    }
    set configurations(value) {
        this._configurations = value;
    }
    resetConfigurations() {
        this._configurations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configurationsInput() {
        return this._configurations;
    }
    get configurationsJson() {
        return this.getStringAttribute('configurations_json');
    }
    set configurationsJson(value) {
        this._configurationsJson = value;
    }
    resetConfigurationsJson() {
        this._configurationsJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configurationsJsonInput() {
        return this._configurationsJson;
    }
    get customAmiId() {
        return this.getStringAttribute('custom_ami_id');
    }
    set customAmiId(value) {
        this._customAmiId = value;
    }
    resetCustomAmiId() {
        this._customAmiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customAmiIdInput() {
        return this._customAmiId;
    }
    get ebsRootVolumeSize() {
        return this.getNumberAttribute('ebs_root_volume_size');
    }
    set ebsRootVolumeSize(value) {
        this._ebsRootVolumeSize = value;
    }
    resetEbsRootVolumeSize() {
        this._ebsRootVolumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ebsRootVolumeSizeInput() {
        return this._ebsRootVolumeSize;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get keepJobFlowAliveWhenNoSteps() {
        return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
    }
    set keepJobFlowAliveWhenNoSteps(value) {
        this._keepJobFlowAliveWhenNoSteps = value;
    }
    resetKeepJobFlowAliveWhenNoSteps() {
        this._keepJobFlowAliveWhenNoSteps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepJobFlowAliveWhenNoStepsInput() {
        return this._keepJobFlowAliveWhenNoSteps;
    }
    get logUri() {
        return this.getStringAttribute('log_uri');
    }
    set logUri(value) {
        this._logUri = value;
    }
    resetLogUri() {
        this._logUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logUriInput() {
        return this._logUri;
    }
    // master_public_dns - computed: true, optional: false, required: false
    get masterPublicDns() {
        return this.getStringAttribute('master_public_dns');
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    get releaseLabel() {
        return this.getStringAttribute('release_label');
    }
    set releaseLabel(value) {
        this._releaseLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    get releaseLabelInput() {
        return this._releaseLabel;
    }
    get scaleDownBehavior() {
        return this.getStringAttribute('scale_down_behavior');
    }
    set scaleDownBehavior(value) {
        this._scaleDownBehavior = value;
    }
    resetScaleDownBehavior() {
        this._scaleDownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scaleDownBehaviorInput() {
        return this._scaleDownBehavior;
    }
    get securityConfiguration() {
        return this.getStringAttribute('security_configuration');
    }
    set securityConfiguration(value) {
        this._securityConfiguration = value;
    }
    resetSecurityConfiguration() {
        this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityConfigurationInput() {
        return this._securityConfiguration;
    }
    get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    set serviceRole(value) {
        this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceRoleInput() {
        return this._serviceRole;
    }
    get step() {
        return this.interpolationForAttribute('step'); // Getting the computed value is not yet implemented
    }
    set step(value) {
        this._step = value;
    }
    resetStep() {
        this._step = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stepInput() {
        return this._step;
    }
    get stepConcurrencyLevel() {
        return this.getNumberAttribute('step_concurrency_level');
    }
    set stepConcurrencyLevel(value) {
        this._stepConcurrencyLevel = value;
    }
    resetStepConcurrencyLevel() {
        this._stepConcurrencyLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stepConcurrencyLevelInput() {
        return this._stepConcurrencyLevel;
    }
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    get tagsAll() {
        return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    get terminationProtection() {
        return this.getBooleanAttribute('termination_protection');
    }
    set terminationProtection(value) {
        this._terminationProtection = value;
    }
    resetTerminationProtection() {
        this._terminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get terminationProtectionInput() {
        return this._terminationProtection;
    }
    get visibleToAllUsers() {
        return this.getBooleanAttribute('visible_to_all_users');
    }
    set visibleToAllUsers(value) {
        this._visibleToAllUsers = value;
    }
    resetVisibleToAllUsers() {
        this._visibleToAllUsers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get visibleToAllUsersInput() {
        return this._visibleToAllUsers;
    }
    get bootstrapAction() {
        return this.interpolationForAttribute('bootstrap_action');
    }
    set bootstrapAction(value) {
        this._bootstrapAction = value;
    }
    resetBootstrapAction() {
        this._bootstrapAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bootstrapActionInput() {
        return this._bootstrapAction;
    }
    get coreInstanceFleet() {
        return this.interpolationForAttribute('core_instance_fleet');
    }
    set coreInstanceFleet(value) {
        this._coreInstanceFleet = value;
    }
    resetCoreInstanceFleet() {
        this._coreInstanceFleet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get coreInstanceFleetInput() {
        return this._coreInstanceFleet;
    }
    get coreInstanceGroup() {
        return this.interpolationForAttribute('core_instance_group');
    }
    set coreInstanceGroup(value) {
        this._coreInstanceGroup = value;
    }
    resetCoreInstanceGroup() {
        this._coreInstanceGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get coreInstanceGroupInput() {
        return this._coreInstanceGroup;
    }
    get ec2Attributes() {
        return this.interpolationForAttribute('ec2_attributes');
    }
    set ec2Attributes(value) {
        this._ec2Attributes = value;
    }
    resetEc2Attributes() {
        this._ec2Attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2AttributesInput() {
        return this._ec2Attributes;
    }
    get kerberosAttributes() {
        return this.interpolationForAttribute('kerberos_attributes');
    }
    set kerberosAttributes(value) {
        this._kerberosAttributes = value;
    }
    resetKerberosAttributes() {
        this._kerberosAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kerberosAttributesInput() {
        return this._kerberosAttributes;
    }
    get masterInstanceFleet() {
        return this.interpolationForAttribute('master_instance_fleet');
    }
    set masterInstanceFleet(value) {
        this._masterInstanceFleet = value;
    }
    resetMasterInstanceFleet() {
        this._masterInstanceFleet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get masterInstanceFleetInput() {
        return this._masterInstanceFleet;
    }
    get masterInstanceGroup() {
        return this.interpolationForAttribute('master_instance_group');
    }
    set masterInstanceGroup(value) {
        this._masterInstanceGroup = value;
    }
    resetMasterInstanceGroup() {
        this._masterInstanceGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get masterInstanceGroupInput() {
        return this._masterInstanceGroup;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            additional_info: cdktf.stringToTerraform(this._additionalInfo),
            applications: cdktf.listMapper(cdktf.stringToTerraform)(this._applications),
            autoscaling_role: cdktf.stringToTerraform(this._autoscalingRole),
            configurations: cdktf.stringToTerraform(this._configurations),
            configurations_json: cdktf.stringToTerraform(this._configurationsJson),
            custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
            ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
            keep_job_flow_alive_when_no_steps: cdktf.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
            log_uri: cdktf.stringToTerraform(this._logUri),
            name: cdktf.stringToTerraform(this._name),
            release_label: cdktf.stringToTerraform(this._releaseLabel),
            scale_down_behavior: cdktf.stringToTerraform(this._scaleDownBehavior),
            security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            step: cdktf.listMapper(emrClusterStepToTerraform)(this._step),
            step_concurrency_level: cdktf.numberToTerraform(this._stepConcurrencyLevel),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
            visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
            bootstrap_action: cdktf.listMapper(emrClusterBootstrapActionToTerraform)(this._bootstrapAction),
            core_instance_fleet: cdktf.listMapper(emrClusterCoreInstanceFleetToTerraform)(this._coreInstanceFleet),
            core_instance_group: cdktf.listMapper(emrClusterCoreInstanceGroupToTerraform)(this._coreInstanceGroup),
            ec2_attributes: cdktf.listMapper(emrClusterEc2AttributesToTerraform)(this._ec2Attributes),
            kerberos_attributes: cdktf.listMapper(emrClusterKerberosAttributesToTerraform)(this._kerberosAttributes),
            master_instance_fleet: cdktf.listMapper(emrClusterMasterInstanceFleetToTerraform)(this._masterInstanceFleet),
            master_instance_group: cdktf.listMapper(emrClusterMasterInstanceGroupToTerraform)(this._masterInstanceGroup),
        };
    }
}
exports.EmrCluster = EmrCluster;
_a = JSII_RTTI_SYMBOL_1;
EmrCluster[_a] = { fqn: "hashicorp_aws.EmrCluster", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1yLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbXItY2x1c3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLCtCQUErQjtBQW1KL0IsU0FBUyxzQ0FBc0MsQ0FBQyxNQUFvQztJQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLElBQUksRUFBRSxNQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDakcsR0FBRyxFQUFFLE1BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQzVFLFVBQVUsRUFBRSxNQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUMvRixVQUFVLEVBQUUsTUFBTyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUNqSCxDQUFBO0FBQ0gsQ0FBQztBQWlCRCxTQUFTLHlCQUF5QixDQUFDLE1BQXVCO0lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0ws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QXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUM1RyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdDQUF3QyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQzdHLENBQUM7SUFDSixDQUFDOztBQXRoQkgsZ0NBdWhCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9lbXJfY2x1c3Rlci5odG1sXG4vLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4vLyBDb25maWd1cmF0aW9uXG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkZGl0aW9uYWxJbmZvPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9ucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b3NjYWxpbmdSb2xlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmF0aW9ucz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25zSnNvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUFtaUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNSb290Vm9sdW1lU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHM/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nVXJpPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVsZWFzZUxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2FsZURvd25CZWhhdmlvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3VyaXR5Q29uZmlndXJhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlUm9sZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RlcD86IEVtckNsdXN0ZXJTdGVwW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGVwQ29uY3VycmVuY3lMZXZlbD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlcm1pbmF0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZpc2libGVUb0FsbFVzZXJzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYm9vdHN0cmFwQWN0aW9uPzogRW1yQ2x1c3RlckJvb3RzdHJhcEFjdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3JlSW5zdGFuY2VGbGVldD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3JlSW5zdGFuY2VHcm91cD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYzJBdHRyaWJ1dGVzPzogRW1yQ2x1c3RlckVjMkF0dHJpYnV0ZXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2VyYmVyb3NBdHRyaWJ1dGVzPzogRW1yQ2x1c3RlcktlcmJlcm9zQXR0cmlidXRlc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXN0ZXJJbnN0YW5jZUZsZWV0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFzdGVySW5zdGFuY2VHcm91cD86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcmdzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgamFyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFpbkNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvcGVydGllcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcFRvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcmdzOiBzdHJ1Y3QhLmFyZ3MgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFyZ3MpLFxuICAgIGphcjogc3RydWN0IS5qYXIgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmphciksXG4gICAgbWFpbl9jbGFzczogc3RydWN0IS5tYWluQ2xhc3MgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1haW5DbGFzcyksXG4gICAgcHJvcGVydGllczogc3RydWN0IS5wcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9wZXJ0aWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJTdGVwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uT25GYWlsdXJlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhhZG9vcEphclN0ZXA/OiBFbXJDbHVzdGVyU3RlcEhhZG9vcEphclN0ZXBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJTdGVwVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlclN0ZXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uX29uX2ZhaWx1cmU6IHN0cnVjdCEuYWN0aW9uT25GYWlsdXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25PbkZhaWx1cmUpLFxuICAgIGhhZG9vcF9qYXJfc3RlcDogc3RydWN0IS5oYWRvb3BKYXJTdGVwID09PSB1bmRlZmluZWQgPyBudWxsIDogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyU3RlcEhhZG9vcEphclN0ZXBUb1RlcnJhZm9ybSkoc3RydWN0IS5oYWRvb3BKYXJTdGVwKSxcbiAgICBuYW1lOiBzdHJ1Y3QhLm5hbWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckJvb3RzdHJhcEFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcmdzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJCb290c3RyYXBBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQm9vdHN0cmFwQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFyZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYXJncyksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBwYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xhc3NpZmljYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9wZXJ0aWVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZnVuY3Rpb24gZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsYXNzaWZpY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsYXNzaWZpY2F0aW9uKSxcbiAgICBwcm9wZXJ0aWVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnRpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVzUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NFYnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZvbHVtZXNfcGVyX2luc3RhbmNlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZXNQZXJJbnN0YW5jZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZUFzUGVyY2VudGFnZU9mT25EZW1hbmRQcmljZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmF0aW9ucz86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNDb25maWc/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnW107XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJpZF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaWRQcmljZSksXG4gICAgYmlkX3ByaWNlX2FzX3BlcmNlbnRhZ2Vfb2Zfb25fZGVtYW5kX3ByaWNlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpZFByaWNlQXNQZXJjZW50YWdlT2ZPbkRlbWFuZFByaWNlKSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgY29uZmlndXJhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29uZmlndXJhdGlvbnMpLFxuICAgIGVic19jb25maWc6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVic0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvY2F0aW9uU3RyYXRlZ3k6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25TdHJhdGVneTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tEdXJhdGlvbk1pbnV0ZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRBY3Rpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0RHVyYXRpb25NaW51dGVzOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsbG9jYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICBibG9ja19kdXJhdGlvbl9taW51dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJsb2NrRHVyYXRpb25NaW51dGVzKSxcbiAgICB0aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0QWN0aW9uKSxcbiAgICB0aW1lb3V0X2R1cmF0aW9uX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dER1cmF0aW9uTWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kU3BlY2lmaWNhdGlvbj86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RTcGVjaWZpY2F0aW9uPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbltdO1xufVxuXG5mdW5jdGlvbiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIG9uX2RlbWFuZF9zcGVjaWZpY2F0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEub25EZW1hbmRTcGVjaWZpY2F0aW9uKSxcbiAgICBzcG90X3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnNwb3RTcGVjaWZpY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0T25EZW1hbmRDYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0U3BvdENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVR5cGVDb25maWdzPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hTcGVjaWZpY2F0aW9ucz86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zW107XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldFRvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHRhcmdldF9vbl9kZW1hbmRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0T25EZW1hbmRDYXBhY2l0eSksXG4gICAgdGFyZ2V0X3Nwb3RfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0U3BvdENhcGFjaXR5KSxcbiAgICBpbnN0YW5jZV90eXBlX2NvbmZpZ3M6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluc3RhbmNlVHlwZUNvbmZpZ3MpLFxuICAgIGxhdW5jaF9zcGVjaWZpY2F0aW9uczogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxhdW5jaFNwZWNpZmljYXRpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cEVic0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVzUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cEVic0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cEVic0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHNpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2b2x1bWVzX3Blcl9pbnN0YW5jZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVzUGVySW5zdGFuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvc2NhbGluZ1BvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzQ29uZmlnPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUdyb3VwRWJzQ29uZmlnW107XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cFRvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvc2NhbGluZ19wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0b3NjYWxpbmdQb2xpY3kpLFxuICAgIGJpZF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaWRQcmljZSksXG4gICAgaW5zdGFuY2VfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VDb3VudCksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgZWJzX2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBFYnNDb25maWdUb1RlcnJhZm9ybSkoc3RydWN0IS5lYnNDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckVjMkF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3Vwcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWRkaXRpb25hbFNsYXZlU2VjdXJpdHlHcm91cHM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVByb2ZpbGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM/OiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gZW1yQ2x1c3RlckVjMkF0dHJpYnV0ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyRWMyQXR0cmlidXRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZGRpdGlvbmFsX21hc3Rlcl9zZWN1cml0eV9ncm91cHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRkaXRpb25hbE1hc3RlclNlY3VyaXR5R3JvdXBzKSxcbiAgICBhZGRpdGlvbmFsX3NsYXZlX3NlY3VyaXR5X2dyb3VwczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGRpdGlvbmFsU2xhdmVTZWN1cml0eUdyb3VwcyksXG4gICAgZW1yX21hbmFnZWRfbWFzdGVyX3NlY3VyaXR5X2dyb3VwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtck1hbmFnZWRNYXN0ZXJTZWN1cml0eUdyb3VwKSxcbiAgICBlbXJfbWFuYWdlZF9zbGF2ZV9zZWN1cml0eV9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbXJNYW5hZ2VkU2xhdmVTZWN1cml0eUdyb3VwKSxcbiAgICBpbnN0YW5jZV9wcm9maWxlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlUHJvZmlsZSksXG4gICAga2V5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5TmFtZSksXG4gICAgc2VydmljZV9hY2Nlc3Nfc2VjdXJpdHlfZ3JvdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXApLFxuICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRJZHMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlcktlcmJlcm9zQXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkRG9tYWluSm9pblBhc3N3b3JkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWREb21haW5Kb2luVXNlcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZGNBZG1pblBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlYWxtOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJLZXJiZXJvc0F0dHJpYnV0ZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyS2VyYmVyb3NBdHRyaWJ1dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFkX2RvbWFpbl9qb2luX3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkRG9tYWluSm9pblBhc3N3b3JkKSxcbiAgICBhZF9kb21haW5fam9pbl91c2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkRG9tYWluSm9pblVzZXIpLFxuICAgIGNyb3NzX3JlYWxtX3RydXN0X3ByaW5jaXBhbF9wYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZCksXG4gICAga2RjX2FkbWluX3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtkY0FkbWluUGFzc3dvcmQpLFxuICAgIHJlYWxtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlYWxtKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xhc3NpZmljYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9wZXJ0aWVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZnVuY3Rpb24gZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzQ29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbGFzc2lmaWNhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGFzc2lmaWNhdGlvbiksXG4gICAgcHJvcGVydGllczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9wZXJ0aWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVzUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHNpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2b2x1bWVzX3Blcl9pbnN0YW5jZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVzUGVySW5zdGFuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZUFzUGVyY2VudGFnZU9mT25EZW1hbmRQcmljZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmF0aW9ucz86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic0NvbmZpZz86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZ1tdO1xufVxuXG5mdW5jdGlvbiBlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmlkX3ByaWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpZFByaWNlKSxcbiAgICBiaWRfcHJpY2VfYXNfcGVyY2VudGFnZV9vZl9vbl9kZW1hbmRfcHJpY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmlkUHJpY2VBc1BlcmNlbnRhZ2VPZk9uRGVtYW5kUHJpY2UpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHRlZENhcGFjaXR5KSxcbiAgICBjb25maWd1cmF0aW9uczogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25zKSxcbiAgICBlYnNfY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVic0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25TdHJhdGVneTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb2NhdGlvblN0cmF0ZWd5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9ja0R1cmF0aW9uTWludXRlcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dEFjdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXREdXJhdGlvbk1pbnV0ZXM6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFsbG9jYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICBibG9ja19kdXJhdGlvbl9taW51dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJsb2NrRHVyYXRpb25NaW51dGVzKSxcbiAgICB0aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0QWN0aW9uKSxcbiAgICB0aW1lb3V0X2R1cmF0aW9uX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dER1cmF0aW9uTWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb25EZW1hbmRTcGVjaWZpY2F0aW9uPzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcG90U3BlY2lmaWNhdGlvbj86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbltdO1xufVxuXG5mdW5jdGlvbiBlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvbl9kZW1hbmRfc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEub25EZW1hbmRTcGVjaWZpY2F0aW9uKSxcbiAgICBzcG90X3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3BvdFNwZWNpZmljYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldE9uRGVtYW5kQ2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFNwb3RDYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlQ29uZmlncz86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hTcGVjaWZpY2F0aW9ucz86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNbXTtcbn1cblxuZnVuY3Rpb24gZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHRhcmdldF9vbl9kZW1hbmRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0T25EZW1hbmRDYXBhY2l0eSksXG4gICAgdGFyZ2V0X3Nwb3RfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0U3BvdENhcGFjaXR5KSxcbiAgICBpbnN0YW5jZV90eXBlX2NvbmZpZ3M6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzVG9UZXJyYWZvcm0pKHN0cnVjdCEuaW5zdGFuY2VUeXBlQ29uZmlncyksXG4gICAgbGF1bmNoX3NwZWNpZmljYXRpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5sYXVuY2hTcGVjaWZpY2F0aW9ucyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cEVic0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVzUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwRWJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBFYnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW9wczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pb3BzKSxcbiAgICBzaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdm9sdW1lc19wZXJfaW5zdGFuY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lc1Blckluc3RhbmNlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzQ29uZmlnPzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBFYnNDb25maWdbXTtcbn1cblxuZnVuY3Rpb24gZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBiaWRfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYmlkUHJpY2UpLFxuICAgIGluc3RhbmNlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlQ291bnQpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIGVic19jb25maWc6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBFYnNDb25maWdUb1RlcnJhZm9ybSkoc3RydWN0IS5lYnNDb25maWcpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRW1yQ2x1c3RlciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVtckNsdXN0ZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lbXJfY2x1c3RlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hZGRpdGlvbmFsSW5mbyA9IGNvbmZpZy5hZGRpdGlvbmFsSW5mbztcbiAgICB0aGlzLl9hcHBsaWNhdGlvbnMgPSBjb25maWcuYXBwbGljYXRpb25zO1xuICAgIHRoaXMuX2F1dG9zY2FsaW5nUm9sZSA9IGNvbmZpZy5hdXRvc2NhbGluZ1JvbGU7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnMgPSBjb25maWcuY29uZmlndXJhdGlvbnM7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnNKc29uID0gY29uZmlnLmNvbmZpZ3VyYXRpb25zSnNvbjtcbiAgICB0aGlzLl9jdXN0b21BbWlJZCA9IGNvbmZpZy5jdXN0b21BbWlJZDtcbiAgICB0aGlzLl9lYnNSb290Vm9sdW1lU2l6ZSA9IGNvbmZpZy5lYnNSb290Vm9sdW1lU2l6ZTtcbiAgICB0aGlzLl9rZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHMgPSBjb25maWcua2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzO1xuICAgIHRoaXMuX2xvZ1VyaSA9IGNvbmZpZy5sb2dVcmk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3JlbGVhc2VMYWJlbCA9IGNvbmZpZy5yZWxlYXNlTGFiZWw7XG4gICAgdGhpcy5fc2NhbGVEb3duQmVoYXZpb3IgPSBjb25maWcuc2NhbGVEb3duQmVoYXZpb3I7XG4gICAgdGhpcy5fc2VjdXJpdHlDb25maWd1cmF0aW9uID0gY29uZmlnLnNlY3VyaXR5Q29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZSA9IGNvbmZpZy5zZXJ2aWNlUm9sZTtcbiAgICB0aGlzLl9zdGVwID0gY29uZmlnLnN0ZXA7XG4gICAgdGhpcy5fc3RlcENvbmN1cnJlbmN5TGV2ZWwgPSBjb25maWcuc3RlcENvbmN1cnJlbmN5TGV2ZWw7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90ZXJtaW5hdGlvblByb3RlY3Rpb24gPSBjb25maWcudGVybWluYXRpb25Qcm90ZWN0aW9uO1xuICAgIHRoaXMuX3Zpc2libGVUb0FsbFVzZXJzID0gY29uZmlnLnZpc2libGVUb0FsbFVzZXJzO1xuICAgIHRoaXMuX2Jvb3RzdHJhcEFjdGlvbiA9IGNvbmZpZy5ib290c3RyYXBBY3Rpb247XG4gICAgdGhpcy5fY29yZUluc3RhbmNlRmxlZXQgPSBjb25maWcuY29yZUluc3RhbmNlRmxlZXQ7XG4gICAgdGhpcy5fY29yZUluc3RhbmNlR3JvdXAgPSBjb25maWcuY29yZUluc3RhbmNlR3JvdXA7XG4gICAgdGhpcy5fZWMyQXR0cmlidXRlcyA9IGNvbmZpZy5lYzJBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2tlcmJlcm9zQXR0cmlidXRlcyA9IGNvbmZpZy5rZXJiZXJvc0F0dHJpYnV0ZXM7XG4gICAgdGhpcy5fbWFzdGVySW5zdGFuY2VGbGVldCA9IGNvbmZpZy5tYXN0ZXJJbnN0YW5jZUZsZWV0O1xuICAgIHRoaXMuX21hc3Rlckluc3RhbmNlR3JvdXAgPSBjb25maWcubWFzdGVySW5zdGFuY2VHcm91cDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWRkaXRpb25hbF9pbmZvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FkZGl0aW9uYWxJbmZvPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGFkZGl0aW9uYWxJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWRkaXRpb25hbF9pbmZvJyk7XG4gIH1cbiAgcHVibGljIHNldCBhZGRpdGlvbmFsSW5mbyh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxJbmZvID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWRkaXRpb25hbEluZm8oKSB7XG4gICAgdGhpcy5fYWRkaXRpb25hbEluZm8gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkZGl0aW9uYWxJbmZvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZGl0aW9uYWxJbmZvXG4gIH1cblxuICAvLyBhcHBsaWNhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25zPzogc3RyaW5nW107XG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbGljYXRpb25zKHZhbHVlOiBzdHJpbmdbXSApIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvbnMoKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25zXG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9zY2FsaW5nX3JvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b3NjYWxpbmdSb2xlPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGF1dG9zY2FsaW5nUm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dG9zY2FsaW5nX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9zY2FsaW5nUm9sZSh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2F1dG9zY2FsaW5nUm9sZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9zY2FsaW5nUm9sZSgpIHtcbiAgICB0aGlzLl9hdXRvc2NhbGluZ1JvbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9zY2FsaW5nUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvc2NhbGluZ1JvbGVcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbHVzdGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX3N0YXRlJyk7XG4gIH1cblxuICAvLyBjb25maWd1cmF0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9ucz86IHN0cmluZztcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9ucyh2YWx1ZTogc3RyaW5nICkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25zXG4gIH1cblxuICAvLyBjb25maWd1cmF0aW9uc19qc29uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25zSnNvbj86IHN0cmluZztcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uc0pzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWd1cmF0aW9uc19qc29uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uc0pzb24odmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uc0pzb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25maWd1cmF0aW9uc0pzb24oKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnNKc29uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uc0pzb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbnNKc29uXG4gIH1cblxuICAvLyBjdXN0b21fYW1pX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbUFtaUlkPzogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGN1c3RvbUFtaUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX2FtaV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tQW1pSWQodmFsdWU6IHN0cmluZyApIHtcbiAgICB0aGlzLl9jdXN0b21BbWlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUFtaUlkKCkge1xuICAgIHRoaXMuX2N1c3RvbUFtaUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21BbWlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21BbWlJZFxuICB9XG5cbiAgLy8gZWJzX3Jvb3Rfdm9sdW1lX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzUm9vdFZvbHVtZVNpemU/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgZWJzUm9vdFZvbHVtZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlYnNfcm9vdF92b2x1bWVfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZWJzUm9vdFZvbHVtZVNpemUodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9lYnNSb290Vm9sdW1lU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic1Jvb3RWb2x1bWVTaXplKCkge1xuICAgIHRoaXMuX2Vic1Jvb3RWb2x1bWVTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYnNSb290Vm9sdW1lU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNSb290Vm9sdW1lU2l6ZVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGtlZXBfam9iX2Zsb3dfYWxpdmVfd2hlbl9ub19zdGVwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwcz86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQga2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2tlZXBfam9iX2Zsb3dfYWxpdmVfd2hlbl9ub19zdGVwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQga2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fa2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzKCkge1xuICAgIHRoaXMuX2tlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwc1xuICB9XG5cbiAgLy8gbG9nX3VyaSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dVcmk/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbG9nVXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3VyaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nVXJpKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fbG9nVXJpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nVXJpKCkge1xuICAgIHRoaXMuX2xvZ1VyaSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nVXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1VyaVxuICB9XG5cbiAgLy8gbWFzdGVyX3B1YmxpY19kbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXN0ZXJQdWJsaWNEbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXN0ZXJfcHVibGljX2RucycpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lXG4gIH1cblxuICAvLyByZWxlYXNlX2xhYmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlbGVhc2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHJlbGVhc2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlbGVhc2VfbGFiZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlbGVhc2VMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVsZWFzZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlbGVhc2VMYWJlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxlYXNlTGFiZWxcbiAgfVxuXG4gIC8vIHNjYWxlX2Rvd25fYmVoYXZpb3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2FsZURvd25CZWhhdmlvcj86IHN0cmluZztcbiAgcHVibGljIGdldCBzY2FsZURvd25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjYWxlX2Rvd25fYmVoYXZpb3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjYWxlRG93bkJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY2FsZURvd25CZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjYWxlRG93bkJlaGF2aW9yKCkge1xuICAgIHRoaXMuX3NjYWxlRG93bkJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2FsZURvd25CZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZURvd25CZWhhdmlvclxuICB9XG5cbiAgLy8gc2VjdXJpdHlfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eUNvbmZpZ3VyYXRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjdXJpdHlfY29uZmlndXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlDb25maWd1cmF0aW9uKHZhbHVlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NlY3VyaXR5Q29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5Q29uZmlndXJhdGlvblxuICB9XG5cbiAgLy8gc2VydmljZV9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlcnZpY2VSb2xlOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VSb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlUm9sZVxuICB9XG5cbiAgLy8gc3RlcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0ZXA/OiBFbXJDbHVzdGVyU3RlcFtdXG4gIHB1YmxpYyBnZXQgc3RlcCgpOiBFbXJDbHVzdGVyU3RlcFtdIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGVwJykgYXMgYW55OyAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gIH1cbiAgcHVibGljIHNldCBzdGVwKHZhbHVlOiBFbXJDbHVzdGVyU3RlcFtdKSB7XG4gICAgdGhpcy5fc3RlcCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0ZXAoKSB7XG4gICAgdGhpcy5fc3RlcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RlcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGVwXG4gIH1cblxuICAvLyBzdGVwX2NvbmN1cnJlbmN5X2xldmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0ZXBDb25jdXJyZW5jeUxldmVsPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IHN0ZXBDb25jdXJyZW5jeUxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3RlcF9jb25jdXJyZW5jeV9sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RlcENvbmN1cnJlbmN5TGV2ZWwodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9zdGVwQ29uY3VycmVuY3lMZXZlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0ZXBDb25jdXJyZW5jeUxldmVsKCkge1xuICAgIHRoaXMuX3N0ZXBDb25jdXJyZW5jeUxldmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGVwQ29uY3VycmVuY3lMZXZlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGVwQ29uY3VycmVuY3lMZXZlbFxuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ICkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7IC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGxcbiAgfVxuXG4gIC8vIHRlcm1pbmF0aW9uX3Byb3RlY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZXJtaW5hdGlvblByb3RlY3Rpb24/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHRlcm1pbmF0aW9uUHJvdGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0ZXJtaW5hdGlvbl9wcm90ZWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZXJtaW5hdGlvblByb3RlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90ZXJtaW5hdGlvblByb3RlY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZXJtaW5hdGlvblByb3RlY3Rpb24oKSB7XG4gICAgdGhpcy5fdGVybWluYXRpb25Qcm90ZWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZXJtaW5hdGlvblByb3RlY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybWluYXRpb25Qcm90ZWN0aW9uXG4gIH1cblxuICAvLyB2aXNpYmxlX3RvX2FsbF91c2VycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92aXNpYmxlVG9BbGxVc2Vycz86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgdmlzaWJsZVRvQWxsVXNlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndmlzaWJsZV90b19hbGxfdXNlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZpc2libGVUb0FsbFVzZXJzKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX3Zpc2libGVUb0FsbFVzZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmlzaWJsZVRvQWxsVXNlcnMoKSB7XG4gICAgdGhpcy5fdmlzaWJsZVRvQWxsVXNlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpc2libGVUb0FsbFVzZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGVUb0FsbFVzZXJzXG4gIH1cblxuICAvLyBib290c3RyYXBfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jvb3RzdHJhcEFjdGlvbj86IEVtckNsdXN0ZXJCb290c3RyYXBBY3Rpb25bXTtcbiAgcHVibGljIGdldCBib290c3RyYXBBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYm9vdHN0cmFwX2FjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJvb3RzdHJhcEFjdGlvbih2YWx1ZTogRW1yQ2x1c3RlckJvb3RzdHJhcEFjdGlvbltdICkge1xuICAgIHRoaXMuX2Jvb3RzdHJhcEFjdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJvb3RzdHJhcEFjdGlvbigpIHtcbiAgICB0aGlzLl9ib290c3RyYXBBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJvb3RzdHJhcEFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ib290c3RyYXBBY3Rpb25cbiAgfVxuXG4gIC8vIGNvcmVfaW5zdGFuY2VfZmxlZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29yZUluc3RhbmNlRmxlZXQ/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRbXTtcbiAgcHVibGljIGdldCBjb3JlSW5zdGFuY2VGbGVldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb3JlX2luc3RhbmNlX2ZsZWV0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29yZUluc3RhbmNlRmxlZXQodmFsdWU6IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldFtdICkge1xuICAgIHRoaXMuX2NvcmVJbnN0YW5jZUZsZWV0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29yZUluc3RhbmNlRmxlZXQoKSB7XG4gICAgdGhpcy5fY29yZUluc3RhbmNlRmxlZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcmVJbnN0YW5jZUZsZWV0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVJbnN0YW5jZUZsZWV0XG4gIH1cblxuICAvLyBjb3JlX2luc3RhbmNlX2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcmVJbnN0YW5jZUdyb3VwPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUdyb3VwW107XG4gIHB1YmxpYyBnZXQgY29yZUluc3RhbmNlR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29yZV9pbnN0YW5jZV9ncm91cCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcmVJbnN0YW5jZUdyb3VwKHZhbHVlOiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBbXSApIHtcbiAgICB0aGlzLl9jb3JlSW5zdGFuY2VHcm91cCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcmVJbnN0YW5jZUdyb3VwKCkge1xuICAgIHRoaXMuX2NvcmVJbnN0YW5jZUdyb3VwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3JlSW5zdGFuY2VHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JlSW5zdGFuY2VHcm91cFxuICB9XG5cbiAgLy8gZWMyX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWMyQXR0cmlidXRlcz86IEVtckNsdXN0ZXJFYzJBdHRyaWJ1dGVzW107XG4gIHB1YmxpYyBnZXQgZWMyQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlYzJfYXR0cmlidXRlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVjMkF0dHJpYnV0ZXModmFsdWU6IEVtckNsdXN0ZXJFYzJBdHRyaWJ1dGVzW10gKSB7XG4gICAgdGhpcy5fZWMyQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVjMkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fZWMyQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWMyQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYzJBdHRyaWJ1dGVzXG4gIH1cblxuICAvLyBrZXJiZXJvc19hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tlcmJlcm9zQXR0cmlidXRlcz86IEVtckNsdXN0ZXJLZXJiZXJvc0F0dHJpYnV0ZXNbXTtcbiAgcHVibGljIGdldCBrZXJiZXJvc0F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna2VyYmVyb3NfYXR0cmlidXRlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGtlcmJlcm9zQXR0cmlidXRlcyh2YWx1ZTogRW1yQ2x1c3RlcktlcmJlcm9zQXR0cmlidXRlc1tdICkge1xuICAgIHRoaXMuX2tlcmJlcm9zQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtlcmJlcm9zQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLl9rZXJiZXJvc0F0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtlcmJlcm9zQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXJiZXJvc0F0dHJpYnV0ZXNcbiAgfVxuXG4gIC8vIG1hc3Rlcl9pbnN0YW5jZV9mbGVldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXN0ZXJJbnN0YW5jZUZsZWV0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRbXTtcbiAgcHVibGljIGdldCBtYXN0ZXJJbnN0YW5jZUZsZWV0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21hc3Rlcl9pbnN0YW5jZV9mbGVldCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hc3Rlckluc3RhbmNlRmxlZXQodmFsdWU6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0W10gKSB7XG4gICAgdGhpcy5fbWFzdGVySW5zdGFuY2VGbGVldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hc3Rlckluc3RhbmNlRmxlZXQoKSB7XG4gICAgdGhpcy5fbWFzdGVySW5zdGFuY2VGbGVldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFzdGVySW5zdGFuY2VGbGVldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJJbnN0YW5jZUZsZWV0XG4gIH1cblxuICAvLyBtYXN0ZXJfaW5zdGFuY2VfZ3JvdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFzdGVySW5zdGFuY2VHcm91cD86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwW107XG4gIHB1YmxpYyBnZXQgbWFzdGVySW5zdGFuY2VHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYXN0ZXJfaW5zdGFuY2VfZ3JvdXAnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtYXN0ZXJJbnN0YW5jZUdyb3VwKHZhbHVlOiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cFtdICkge1xuICAgIHRoaXMuX21hc3Rlckluc3RhbmNlR3JvdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXN0ZXJJbnN0YW5jZUdyb3VwKCkge1xuICAgIHRoaXMuX21hc3Rlckluc3RhbmNlR3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1hc3Rlckluc3RhbmNlR3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFzdGVySW5zdGFuY2VHcm91cFxuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRpdGlvbmFsX2luZm86IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FkZGl0aW9uYWxJbmZvKSxcbiAgICAgIGFwcGxpY2F0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYXBwbGljYXRpb25zKSxcbiAgICAgIGF1dG9zY2FsaW5nX3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dG9zY2FsaW5nUm9sZSksXG4gICAgICBjb25maWd1cmF0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29uZmlndXJhdGlvbnMpLFxuICAgICAgY29uZmlndXJhdGlvbnNfanNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29uZmlndXJhdGlvbnNKc29uKSxcbiAgICAgIGN1c3RvbV9hbWlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbUFtaUlkKSxcbiAgICAgIGVic19yb290X3ZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9lYnNSb290Vm9sdW1lU2l6ZSksXG4gICAgICBrZWVwX2pvYl9mbG93X2FsaXZlX3doZW5fbm9fc3RlcHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9rZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHMpLFxuICAgICAgbG9nX3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbG9nVXJpKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcmVsZWFzZV9sYWJlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVsZWFzZUxhYmVsKSxcbiAgICAgIHNjYWxlX2Rvd25fYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NjYWxlRG93bkJlaGF2aW9yKSxcbiAgICAgIHNlY3VyaXR5X2NvbmZpZ3VyYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlY3VyaXR5Q29uZmlndXJhdGlvbiksXG4gICAgICBzZXJ2aWNlX3JvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VSb2xlKSxcbiAgICAgIHN0ZXA6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlclN0ZXBUb1RlcnJhZm9ybSkodGhpcy5fc3RlcCksXG4gICAgICBzdGVwX2NvbmN1cnJlbmN5X2xldmVsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9zdGVwQ29uY3VycmVuY3lMZXZlbCksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHRlcm1pbmF0aW9uX3Byb3RlY3Rpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl90ZXJtaW5hdGlvblByb3RlY3Rpb24pLFxuICAgICAgdmlzaWJsZV90b19hbGxfdXNlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl92aXNpYmxlVG9BbGxVc2VycyksXG4gICAgICBib290c3RyYXBfYWN0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJCb290c3RyYXBBY3Rpb25Ub1RlcnJhZm9ybSkodGhpcy5fYm9vdHN0cmFwQWN0aW9uKSxcbiAgICAgIGNvcmVfaW5zdGFuY2VfZmxlZXQ6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0VG9UZXJyYWZvcm0pKHRoaXMuX2NvcmVJbnN0YW5jZUZsZWV0KSxcbiAgICAgIGNvcmVfaW5zdGFuY2VfZ3JvdXA6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUdyb3VwVG9UZXJyYWZvcm0pKHRoaXMuX2NvcmVJbnN0YW5jZUdyb3VwKSxcbiAgICAgIGVjMl9hdHRyaWJ1dGVzOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJFYzJBdHRyaWJ1dGVzVG9UZXJyYWZvcm0pKHRoaXMuX2VjMkF0dHJpYnV0ZXMpLFxuICAgICAga2VyYmVyb3NfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyS2VyYmVyb3NBdHRyaWJ1dGVzVG9UZXJyYWZvcm0pKHRoaXMuX2tlcmJlcm9zQXR0cmlidXRlcyksXG4gICAgICBtYXN0ZXJfaW5zdGFuY2VfZmxlZXQ6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRUb1RlcnJhZm9ybSkodGhpcy5fbWFzdGVySW5zdGFuY2VGbGVldCksXG4gICAgICBtYXN0ZXJfaW5zdGFuY2VfZ3JvdXA6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBUb1RlcnJhZm9ybSkodGhpcy5fbWFzdGVySW5zdGFuY2VHcm91cCksXG4gICAgfTtcbiAgfVxufVxuIl19