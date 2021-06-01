import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#arn DataAwsImagebuilderInfrastructureConfiguration#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}.
     */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html#tags DataAwsImagebuilderInfrastructureConfiguration#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs extends cdktf.ComplexComputedList {
    get s3BucketName(): string;
    get s3KeyPrefix(): string;
}
export declare class DataAwsImagebuilderInfrastructureConfigurationLogging extends cdktf.ComplexComputedList {
    get s3Logs(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}.
 */
export declare class DataAwsImagebuilderInfrastructureConfiguration extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderInfrastructureConfigurationConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get dateCreated(): string;
    get dateUpdated(): string;
    get description(): string;
    get id(): string;
    get instanceProfileName(): string;
    get instanceTypes(): string[];
    get keyPair(): string;
    logging(index: string): DataAwsImagebuilderInfrastructureConfigurationLogging;
    get name(): string;
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
    get securityGroupIds(): string[];
    get snsTopicArn(): string;
    get subnetId(): string;
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
    get terminateInstanceOnFailure(): boolean;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
