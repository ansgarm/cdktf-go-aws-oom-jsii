import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#cluster_name EksFargateProfile#cluster_name}.
     */
    readonly clusterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#fargate_profile_name EksFargateProfile#fargate_profile_name}.
     */
    readonly fargateProfileName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}.
     */
    readonly podExecutionRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#subnet_ids EksFargateProfile#subnet_ids}.
     */
    readonly subnetIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags EksFargateProfile#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags_all EksFargateProfile#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * selector block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#selector EksFargateProfile#selector}
     */
    readonly selector: EksFargateProfileSelector[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#timeouts EksFargateProfile#timeouts}
     */
    readonly timeouts?: EksFargateProfileTimeouts;
}
export interface EksFargateProfileSelector {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#labels EksFargateProfile#labels}.
     */
    readonly labels?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#namespace EksFargateProfile#namespace}.
     */
    readonly namespace: string;
}
export interface EksFargateProfileTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#create EksFargateProfile#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#delete EksFargateProfile#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile}.
 */
export declare class EksFargateProfile extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EksFargateProfileConfig);
    get arn(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    private _fargateProfileName;
    get fargateProfileName(): string;
    set fargateProfileName(value: string);
    get fargateProfileNameInput(): string;
    get id(): string;
    private _podExecutionRoleArn;
    get podExecutionRoleArn(): string;
    set podExecutionRoleArn(value: string);
    get podExecutionRoleArnInput(): string;
    get status(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _selector;
    get selector(): EksFargateProfileSelector[];
    set selector(value: EksFargateProfileSelector[]);
    get selectorInput(): EksFargateProfileSelector[];
    private _timeouts?;
    get timeouts(): EksFargateProfileTimeouts;
    set timeouts(value: EksFargateProfileTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): EksFargateProfileTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
