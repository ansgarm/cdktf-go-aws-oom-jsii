import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#agent_arns DatasyncLocationS3#agent_arns}.
     */
    readonly agentArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}.
     */
    readonly s3BucketArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_storage_class DatasyncLocationS3#s3_storage_class}.
     */
    readonly s3StorageClass?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#subdirectory DatasyncLocationS3#subdirectory}.
     */
    readonly subdirectory: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags DatasyncLocationS3#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags_all DatasyncLocationS3#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * s3_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_config DatasyncLocationS3#s3_config}
     */
    readonly s3Config: DatasyncLocationS3S3Config[];
}
export interface DatasyncLocationS3S3Config {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}.
     */
    readonly bucketAccessRoleArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3}.
 */
export declare class DatasyncLocationS3 extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DatasyncLocationS3Config);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    resetAgentArns(): void;
    get agentArnsInput(): string[] | undefined;
    get arn(): string;
    get id(): string;
    private _s3BucketArn;
    get s3BucketArn(): string;
    set s3BucketArn(value: string);
    get s3BucketArnInput(): string;
    private _s3StorageClass?;
    get s3StorageClass(): string;
    set s3StorageClass(value: string);
    resetS3StorageClass(): void;
    get s3StorageClassInput(): string | undefined;
    private _subdirectory;
    get subdirectory(): string;
    set subdirectory(value: string);
    get subdirectoryInput(): string;
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
    private _s3Config;
    get s3Config(): DatasyncLocationS3S3Config[];
    set s3Config(value: DatasyncLocationS3S3Config[]);
    get s3ConfigInput(): DatasyncLocationS3S3Config[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
