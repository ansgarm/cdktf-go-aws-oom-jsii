import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}.
     */
    readonly efsFileSystemArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subdirectory DatasyncLocationEfs#subdirectory}.
     */
    readonly subdirectory?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags DatasyncLocationEfs#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags_all DatasyncLocationEfs#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * ec2_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#ec2_config DatasyncLocationEfs#ec2_config}
     */
    readonly ec2Config: DatasyncLocationEfsEc2Config[];
}
export interface DatasyncLocationEfsEc2Config {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#security_group_arns DatasyncLocationEfs#security_group_arns}.
     */
    readonly securityGroupArns: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subnet_arn DatasyncLocationEfs#subnet_arn}.
     */
    readonly subnetArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs}.
 */
export declare class DatasyncLocationEfs extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig);
    get arn(): string;
    private _efsFileSystemArn;
    get efsFileSystemArn(): string;
    set efsFileSystemArn(value: string);
    get efsFileSystemArnInput(): string;
    get id(): string;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _ec2Config;
    get ec2Config(): DatasyncLocationEfsEc2Config[];
    set ec2Config(value: DatasyncLocationEfsEc2Config[]);
    get ec2ConfigInput(): DatasyncLocationEfsEc2Config[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
