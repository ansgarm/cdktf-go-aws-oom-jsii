import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#addon_name EksAddon#addon_name}.
     */
    readonly addonName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#addon_version EksAddon#addon_version}.
     */
    readonly addonVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#cluster_name EksAddon#cluster_name}.
     */
    readonly clusterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#resolve_conflicts EksAddon#resolve_conflicts}.
     */
    readonly resolveConflicts?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#service_account_role_arn EksAddon#service_account_role_arn}.
     */
    readonly serviceAccountRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#tags EksAddon#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#tags_all EksAddon#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon}.
 */
export declare class EksAddon extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EksAddonConfig);
    private _addonName;
    get addonName(): string;
    set addonName(value: string);
    get addonNameInput(): string;
    private _addonVersion?;
    get addonVersion(): string;
    set addonVersion(value: string);
    resetAddonVersion(): void;
    get addonVersionInput(): string | undefined;
    get arn(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get createdAt(): string;
    get id(): string;
    get modifiedAt(): string;
    private _resolveConflicts?;
    get resolveConflicts(): string;
    set resolveConflicts(value: string);
    resetResolveConflicts(): void;
    get resolveConflictsInput(): string | undefined;
    private _serviceAccountRoleArn?;
    get serviceAccountRoleArn(): string;
    set serviceAccountRoleArn(value: string);
    resetServiceAccountRoleArn(): void;
    get serviceAccountRoleArnInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
