import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsVolumesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#tags DataAwsEbsVolumes#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#filter DataAwsEbsVolumes#filter}
     */
    readonly filter?: DataAwsEbsVolumesFilter[];
}
export interface DataAwsEbsVolumesFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#name DataAwsEbsVolumes#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#values DataAwsEbsVolumes#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html aws_ebs_volumes}.
 */
export declare class DataAwsEbsVolumes extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html aws_ebs_volumes} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEbsVolumesConfig);
    get id(): string;
    get ids(): string[];
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
    private _filter?;
    get filter(): DataAwsEbsVolumesFilter[];
    set filter(value: DataAwsEbsVolumesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEbsVolumesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
