import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEbsVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#most_recent DataAwsEbsVolume#most_recent}.
     */
    readonly mostRecent?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#tags DataAwsEbsVolume#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#filter DataAwsEbsVolume#filter}
     */
    readonly filter?: DataAwsEbsVolumeFilter[];
}
export interface DataAwsEbsVolumeFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#name DataAwsEbsVolume#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#values DataAwsEbsVolume#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume}.
 */
export declare class DataAwsEbsVolume extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEbsVolumeConfig);
    get arn(): string;
    get availabilityZone(): string;
    get encrypted(): boolean;
    get id(): string;
    get iops(): number;
    get kmsKeyId(): string;
    private _mostRecent?;
    get mostRecent(): boolean;
    set mostRecent(value: boolean);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | undefined;
    get multiAttachEnabled(): boolean;
    get outpostArn(): string;
    get size(): number;
    get snapshotId(): string;
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
    get throughput(): number;
    get volumeId(): string;
    get volumeType(): string;
    private _filter?;
    get filter(): DataAwsEbsVolumeFilter[];
    set filter(value: DataAwsEbsVolumeFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEbsVolumeFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
