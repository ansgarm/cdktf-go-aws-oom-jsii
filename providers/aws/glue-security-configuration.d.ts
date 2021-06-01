import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#name GlueSecurityConfiguration#name}.
     */
    readonly name: string;
    /**
     * encryption_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#encryption_configuration GlueSecurityConfiguration#encryption_configuration}
     */
    readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration[];
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}.
     */
    readonly cloudwatchEncryptionMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
}
export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}.
     */
    readonly jobBookmarksEncryptionMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
}
export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}.
     */
    readonly s3EncryptionMode?: string;
}
export interface GlueSecurityConfigurationEncryptionConfiguration {
    /**
     * cloudwatch_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}
     */
    readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption[];
    /**
     * job_bookmarks_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}
     */
    readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption[];
    /**
     * s3_encryption block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption GlueSecurityConfiguration#s3_encryption}
     */
    readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration}.
 */
export declare class GlueSecurityConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): GlueSecurityConfigurationEncryptionConfiguration[];
    set encryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration[]);
    get encryptionConfigurationInput(): GlueSecurityConfigurationEncryptionConfiguration[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
