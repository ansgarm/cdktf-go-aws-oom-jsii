import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#addon_name DataAwsEksAddon#addon_name}.
     */
    readonly addonName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#cluster_name DataAwsEksAddon#cluster_name}.
     */
    readonly clusterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#tags DataAwsEksAddon#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon}.
 */
export declare class DataAwsEksAddon extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEksAddonConfig);
    private _addonName;
    get addonName(): string;
    set addonName(value: string);
    get addonNameInput(): string;
    get addonVersion(): string;
    get arn(): string;
    private _clusterName;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get createdAt(): string;
    get id(): string;
    get modifiedAt(): string;
    get serviceAccountRoleArn(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
