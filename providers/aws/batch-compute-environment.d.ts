import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_environment_name BatchComputeEnvironment#compute_environment_name}.
     */
    readonly computeEnvironmentName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_environment_name_prefix BatchComputeEnvironment#compute_environment_name_prefix}.
     */
    readonly computeEnvironmentNamePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#service_role BatchComputeEnvironment#service_role}.
     */
    readonly serviceRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#state BatchComputeEnvironment#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags BatchComputeEnvironment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags_all BatchComputeEnvironment#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#type BatchComputeEnvironment#type}.
     */
    readonly type: string;
    /**
     * compute_resources block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_resources BatchComputeEnvironment#compute_resources}
     */
    readonly computeResources?: BatchComputeEnvironmentComputeResources[];
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template_id BatchComputeEnvironment#launch_template_id}.
     */
    readonly launchTemplateId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template_name BatchComputeEnvironment#launch_template_name}.
     */
    readonly launchTemplateName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#version BatchComputeEnvironment#version}.
     */
    readonly version?: string;
}
export interface BatchComputeEnvironmentComputeResources {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#allocation_strategy BatchComputeEnvironment#allocation_strategy}.
     */
    readonly allocationStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#bid_percentage BatchComputeEnvironment#bid_percentage}.
     */
    readonly bidPercentage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#desired_vcpus BatchComputeEnvironment#desired_vcpus}.
     */
    readonly desiredVcpus?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}.
     */
    readonly ec2KeyPair?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#image_id BatchComputeEnvironment#image_id}.
     */
    readonly imageId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#instance_role BatchComputeEnvironment#instance_role}.
     */
    readonly instanceRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#instance_type BatchComputeEnvironment#instance_type}.
     */
    readonly instanceType?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#max_vcpus BatchComputeEnvironment#max_vcpus}.
     */
    readonly maxVcpus: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#min_vcpus BatchComputeEnvironment#min_vcpus}.
     */
    readonly minVcpus?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#security_group_ids BatchComputeEnvironment#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}.
     */
    readonly spotIamFleetRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#subnets BatchComputeEnvironment#subnets}.
     */
    readonly subnets: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags BatchComputeEnvironment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#type BatchComputeEnvironment#type}.
     */
    readonly type: string;
    /**
     * launch_template block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template BatchComputeEnvironment#launch_template}
     */
    readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment}.
 */
export declare class BatchComputeEnvironment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig);
    get arn(): string;
    private _computeEnvironmentName?;
    get computeEnvironmentName(): string;
    set computeEnvironmentName(value: string);
    resetComputeEnvironmentName(): void;
    get computeEnvironmentNameInput(): string | undefined;
    private _computeEnvironmentNamePrefix?;
    get computeEnvironmentNamePrefix(): string;
    set computeEnvironmentNamePrefix(value: string);
    resetComputeEnvironmentNamePrefix(): void;
    get computeEnvironmentNamePrefixInput(): string | undefined;
    get ecsClusterArn(): string;
    get id(): string;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    resetServiceRole(): void;
    get serviceRoleInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    get status(): string;
    get statusReason(): string;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _computeResources?;
    get computeResources(): BatchComputeEnvironmentComputeResources[];
    set computeResources(value: BatchComputeEnvironmentComputeResources[]);
    resetComputeResources(): void;
    get computeResourcesInput(): BatchComputeEnvironmentComputeResources[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
