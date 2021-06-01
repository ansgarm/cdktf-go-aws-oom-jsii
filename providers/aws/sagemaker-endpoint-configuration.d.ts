import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#name SagemakerEndpointConfiguration#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags SagemakerEndpointConfiguration#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags_all SagemakerEndpointConfiguration#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * data_capture_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#data_capture_config SagemakerEndpointConfiguration#data_capture_config}
     */
    readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig[];
    /**
     * production_variants block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#production_variants SagemakerEndpointConfiguration#production_variants}
     */
    readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[];
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#csv_content_types SagemakerEndpointConfiguration#csv_content_types}.
     */
    readonly csvContentTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#json_content_types SagemakerEndpointConfiguration#json_content_types}.
     */
    readonly jsonContentTypes?: string[];
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_mode SagemakerEndpointConfiguration#capture_mode}.
     */
    readonly captureMode: string;
}
export interface SagemakerEndpointConfigurationDataCaptureConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.
     */
    readonly destinationS3Uri: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#enable_capture SagemakerEndpointConfiguration#enable_capture}.
     */
    readonly enableCapture?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}.
     */
    readonly initialSamplingPercentage: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * capture_content_type_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}
     */
    readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader[];
    /**
     * capture_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_options SagemakerEndpointConfiguration#capture_options}
     */
    readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
}
export interface SagemakerEndpointConfigurationProductionVariants {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#accelerator_type SagemakerEndpointConfiguration#accelerator_type}.
     */
    readonly acceleratorType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}.
     */
    readonly initialInstanceCount: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}.
     */
    readonly initialVariantWeight?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#instance_type SagemakerEndpointConfiguration#instance_type}.
     */
    readonly instanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#model_name SagemakerEndpointConfiguration#model_name}.
     */
    readonly modelName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#variant_name SagemakerEndpointConfiguration#variant_name}.
     */
    readonly variantName?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration}.
 */
export declare class SagemakerEndpointConfiguration extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig);
    get arn(): string;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
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
    private _dataCaptureConfig?;
    get dataCaptureConfig(): SagemakerEndpointConfigurationDataCaptureConfig[];
    set dataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig[]);
    resetDataCaptureConfig(): void;
    get dataCaptureConfigInput(): SagemakerEndpointConfigurationDataCaptureConfig[] | undefined;
    private _productionVariants;
    get productionVariants(): SagemakerEndpointConfigurationProductionVariants[];
    set productionVariants(value: SagemakerEndpointConfigurationProductionVariants[]);
    get productionVariantsInput(): SagemakerEndpointConfigurationProductionVariants[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
