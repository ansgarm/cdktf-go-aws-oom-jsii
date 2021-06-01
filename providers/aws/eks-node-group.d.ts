import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ami_type EksNodeGroup#ami_type}.
     */
    readonly amiType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#capacity_type EksNodeGroup#capacity_type}.
     */
    readonly capacityType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#cluster_name EksNodeGroup#cluster_name}.
     */
    readonly clusterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#disk_size EksNodeGroup#disk_size}.
     */
    readonly diskSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#force_update_version EksNodeGroup#force_update_version}.
     */
    readonly forceUpdateVersion?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#instance_types EksNodeGroup#instance_types}.
     */
    readonly instanceTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#labels EksNodeGroup#labels}.
     */
    readonly labels?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name EksNodeGroup#node_group_name}.
     */
    readonly nodeGroupName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name_prefix EksNodeGroup#node_group_name_prefix}.
     */
    readonly nodeGroupNamePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_role_arn EksNodeGroup#node_role_arn}.
     */
    readonly nodeRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#release_version EksNodeGroup#release_version}.
     */
    readonly releaseVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#subnet_ids EksNodeGroup#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags EksNodeGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags_all EksNodeGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}.
     */
    readonly version?: string;
    /**
     * launch_template block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#launch_template EksNodeGroup#launch_template}
     */
    readonly launchTemplate?: EksNodeGroupLaunchTemplate[];
    /**
     * remote_access block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#remote_access EksNodeGroup#remote_access}
     */
    readonly remoteAccess?: EksNodeGroupRemoteAccess[];
    /**
     * scaling_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#scaling_config EksNodeGroup#scaling_config}
     */
    readonly scalingConfig: EksNodeGroupScalingConfig[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#timeouts EksNodeGroup#timeouts}
     */
    readonly timeouts?: EksNodeGroupTimeouts;
}
export declare class EksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {
    get name(): string;
}
export declare class EksNodeGroupResources extends cdktf.ComplexComputedList {
    get autoscalingGroups(): any;
    get remoteAccessSecurityGroupId(): string;
}
export interface EksNodeGroupLaunchTemplate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#id EksNodeGroup#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#name EksNodeGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}.
     */
    readonly version: string;
}
export interface EksNodeGroupRemoteAccess {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ec2_ssh_key EksNodeGroup#ec2_ssh_key}.
     */
    readonly ec2SshKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#source_security_group_ids EksNodeGroup#source_security_group_ids}.
     */
    readonly sourceSecurityGroupIds?: string[];
}
export interface EksNodeGroupScalingConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#desired_size EksNodeGroup#desired_size}.
     */
    readonly desiredSize: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_size EksNodeGroup#max_size}.
     */
    readonly maxSize: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#min_size EksNodeGroup#min_size}.
     */
    readonly minSize: number;
}
export interface EksNodeGroupTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#create EksNodeGroup#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#delete EksNodeGroup#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update EksNodeGroup#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group}.
 */
export declare class EksNodeGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EksNodeGroupConfig);
    private _amiType?;
    get amiType(): string;
    set amiType(value: string);
    resetAmiType(): void;
    get amiTypeInput(): string | undefined;
    get arn(): string;
    private _capacityType?;
    get capacityType(): string;
    set capacityType(value: string);
    resetCapacityType(): void;
    get capacityTypeInput(): string | undefined;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    private _diskSize?;
    get diskSize(): number;
    set diskSize(value: number);
    resetDiskSize(): void;
    get diskSizeInput(): number | undefined;
    private _forceUpdateVersion?;
    get forceUpdateVersion(): boolean;
    set forceUpdateVersion(value: boolean);
    resetForceUpdateVersion(): void;
    get forceUpdateVersionInput(): boolean | undefined;
    get id(): string;
    private _instanceTypes?;
    get instanceTypes(): string[];
    set instanceTypes(value: string[]);
    resetInstanceTypes(): void;
    get instanceTypesInput(): string[] | undefined;
    private _labels?;
    get labels(): {
        [key: string]: string;
    };
    set labels(value: {
        [key: string]: string;
    });
    resetLabels(): void;
    get labelsInput(): {
        [key: string]: string;
    } | undefined;
    private _nodeGroupName?;
    get nodeGroupName(): string;
    set nodeGroupName(value: string);
    resetNodeGroupName(): void;
    get nodeGroupNameInput(): string | undefined;
    private _nodeGroupNamePrefix?;
    get nodeGroupNamePrefix(): string;
    set nodeGroupNamePrefix(value: string);
    resetNodeGroupNamePrefix(): void;
    get nodeGroupNamePrefixInput(): string | undefined;
    private _nodeRoleArn;
    get nodeRoleArn(): string;
    set nodeRoleArn(value: string);
    get nodeRoleArnInput(): string;
    private _releaseVersion?;
    get releaseVersion(): string;
    set releaseVersion(value: string);
    resetReleaseVersion(): void;
    get releaseVersionInput(): string | undefined;
    resources(index: string): EksNodeGroupResources;
    get status(): string;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _launchTemplate?;
    get launchTemplate(): EksNodeGroupLaunchTemplate[];
    set launchTemplate(value: EksNodeGroupLaunchTemplate[]);
    resetLaunchTemplate(): void;
    get launchTemplateInput(): EksNodeGroupLaunchTemplate[] | undefined;
    private _remoteAccess?;
    get remoteAccess(): EksNodeGroupRemoteAccess[];
    set remoteAccess(value: EksNodeGroupRemoteAccess[]);
    resetRemoteAccess(): void;
    get remoteAccessInput(): EksNodeGroupRemoteAccess[] | undefined;
    private _scalingConfig;
    get scalingConfig(): EksNodeGroupScalingConfig[];
    set scalingConfig(value: EksNodeGroupScalingConfig[]);
    get scalingConfigInput(): EksNodeGroupScalingConfig[];
    private _timeouts?;
    get timeouts(): EksNodeGroupTimeouts;
    set timeouts(value: EksNodeGroupTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): EksNodeGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
