import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#description ImagebuilderInfrastructureConfiguration#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}.
     */
    readonly instanceProfileName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#instance_types ImagebuilderInfrastructureConfiguration#instance_types}.
     */
    readonly instanceTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#key_pair ImagebuilderInfrastructureConfiguration#key_pair}.
     */
    readonly keyPair?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#name ImagebuilderInfrastructureConfiguration#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}.
     */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}.
     */
    readonly snsTopicArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#tags ImagebuilderInfrastructureConfiguration#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#tags_all ImagebuilderInfrastructureConfiguration#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}.
     */
    readonly terminateInstanceOnFailure?: boolean;
    /**
     * logging block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#logging ImagebuilderInfrastructureConfiguration#logging}
     */
    readonly logging?: ImagebuilderInfrastructureConfigurationLogging[];
}
export interface ImagebuilderInfrastructureConfigurationLoggingS3Logs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}.
     */
    readonly s3BucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}.
     */
    readonly s3KeyPrefix?: string;
}
export interface ImagebuilderInfrastructureConfigurationLogging {
    /**
     * s3_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}
     */
    readonly s3Logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}.
 */
export declare class ImagebuilderInfrastructureConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ImagebuilderInfrastructureConfigurationConfig);
    get arn(): string;
    get dateCreated(): string;
    get dateUpdated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _instanceProfileName;
    get instanceProfileName(): string;
    set instanceProfileName(value: string);
    get instanceProfileNameInput(): string;
    private _instanceTypes?;
    get instanceTypes(): string[];
    set instanceTypes(value: string[]);
    resetInstanceTypes(): void;
    get instanceTypesInput(): string[] | undefined;
    private _keyPair?;
    get keyPair(): string;
    set keyPair(value: string);
    resetKeyPair(): void;
    get keyPairInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    };
    set resourceTags(value: {
        [key: string]: string;
    });
    resetResourceTags(): void;
    get resourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _terminateInstanceOnFailure?;
    get terminateInstanceOnFailure(): boolean;
    set terminateInstanceOnFailure(value: boolean);
    resetTerminateInstanceOnFailure(): void;
    get terminateInstanceOnFailureInput(): boolean | undefined;
    private _logging?;
    get logging(): ImagebuilderInfrastructureConfigurationLogging[];
    set logging(value: ImagebuilderInfrastructureConfigurationLogging[]);
    resetLogging(): void;
    get loggingInput(): ImagebuilderInfrastructureConfigurationLogging[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
