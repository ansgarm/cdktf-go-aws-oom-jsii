import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElastictranscoderPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}.
     */
    readonly awsKmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#input_bucket ElastictranscoderPipeline#input_bucket}.
     */
    readonly inputBucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#name ElastictranscoderPipeline#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#output_bucket ElastictranscoderPipeline#output_bucket}.
     */
    readonly outputBucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#role ElastictranscoderPipeline#role}.
     */
    readonly role: string;
    /**
     * content_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config ElastictranscoderPipeline#content_config}
     */
    readonly contentConfig?: ElastictranscoderPipelineContentConfig[];
    /**
     * content_config_permissions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config_permissions ElastictranscoderPipeline#content_config_permissions}
     */
    readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
    /**
     * notifications block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#notifications ElastictranscoderPipeline#notifications}
     */
    readonly notifications?: ElastictranscoderPipelineNotifications[];
    /**
     * thumbnail_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config ElastictranscoderPipeline#thumbnail_config}
     */
    readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig[];
    /**
     * thumbnail_config_permissions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}
     */
    readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
}
export interface ElastictranscoderPipelineContentConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}.
     */
    readonly bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}.
     */
    readonly storageClass?: string;
}
export interface ElastictranscoderPipelineContentConfigPermissions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}.
     */
    readonly access?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}.
     */
    readonly grantee?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}.
     */
    readonly granteeType?: string;
}
export interface ElastictranscoderPipelineNotifications {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#completed ElastictranscoderPipeline#completed}.
     */
    readonly completed?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#error ElastictranscoderPipeline#error}.
     */
    readonly error?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#progressing ElastictranscoderPipeline#progressing}.
     */
    readonly progressing?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#warning ElastictranscoderPipeline#warning}.
     */
    readonly warning?: string;
}
export interface ElastictranscoderPipelineThumbnailConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}.
     */
    readonly bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}.
     */
    readonly storageClass?: string;
}
export interface ElastictranscoderPipelineThumbnailConfigPermissions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}.
     */
    readonly access?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}.
     */
    readonly grantee?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}.
     */
    readonly granteeType?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline}.
 */
export declare class ElastictranscoderPipeline extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElastictranscoderPipelineConfig);
    get arn(): string;
    private _awsKmsKeyArn?;
    get awsKmsKeyArn(): string;
    set awsKmsKeyArn(value: string);
    resetAwsKmsKeyArn(): void;
    get awsKmsKeyArnInput(): string | undefined;
    get id(): string;
    private _inputBucket;
    get inputBucket(): string;
    set inputBucket(value: string);
    get inputBucketInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _outputBucket?;
    get outputBucket(): string;
    set outputBucket(value: string);
    resetOutputBucket(): void;
    get outputBucketInput(): string | undefined;
    private _role;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _contentConfig?;
    get contentConfig(): ElastictranscoderPipelineContentConfig[];
    set contentConfig(value: ElastictranscoderPipelineContentConfig[]);
    resetContentConfig(): void;
    get contentConfigInput(): ElastictranscoderPipelineContentConfig[] | undefined;
    private _contentConfigPermissions?;
    get contentConfigPermissions(): ElastictranscoderPipelineContentConfigPermissions[];
    set contentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[]);
    resetContentConfigPermissions(): void;
    get contentConfigPermissionsInput(): ElastictranscoderPipelineContentConfigPermissions[] | undefined;
    private _notifications?;
    get notifications(): ElastictranscoderPipelineNotifications[];
    set notifications(value: ElastictranscoderPipelineNotifications[]);
    resetNotifications(): void;
    get notificationsInput(): ElastictranscoderPipelineNotifications[] | undefined;
    private _thumbnailConfig?;
    get thumbnailConfig(): ElastictranscoderPipelineThumbnailConfig[];
    set thumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig[]);
    resetThumbnailConfig(): void;
    get thumbnailConfigInput(): ElastictranscoderPipelineThumbnailConfig[] | undefined;
    private _thumbnailConfigPermissions?;
    get thumbnailConfigPermissions(): ElastictranscoderPipelineThumbnailConfigPermissions[];
    set thumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[]);
    resetThumbnailConfigPermissions(): void;
    get thumbnailConfigPermissionsInput(): ElastictranscoderPipelineThumbnailConfigPermissions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
