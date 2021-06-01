import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}.
     */
    readonly deliveryS3Bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}.
     */
    readonly deliveryS3KeyPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#name ConfigConformancePack#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_body ConfigConformancePack#template_body}.
     */
    readonly templateBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_s3_uri ConfigConformancePack#template_s3_uri}.
     */
    readonly templateS3Uri?: string;
    /**
     * input_parameter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#input_parameter ConfigConformancePack#input_parameter}
     */
    readonly inputParameter?: ConfigConformancePackInputParameter[];
}
export interface ConfigConformancePackInputParameter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_name ConfigConformancePack#parameter_name}.
     */
    readonly parameterName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_value ConfigConformancePack#parameter_value}.
     */
    readonly parameterValue: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack}.
 */
export declare class ConfigConformancePack extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ConfigConformancePackConfig);
    get arn(): string;
    private _deliveryS3Bucket?;
    get deliveryS3Bucket(): string;
    set deliveryS3Bucket(value: string);
    resetDeliveryS3Bucket(): void;
    get deliveryS3BucketInput(): string | undefined;
    private _deliveryS3KeyPrefix?;
    get deliveryS3KeyPrefix(): string;
    set deliveryS3KeyPrefix(value: string);
    resetDeliveryS3KeyPrefix(): void;
    get deliveryS3KeyPrefixInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateS3Uri?;
    get templateS3Uri(): string;
    set templateS3Uri(value: string);
    resetTemplateS3Uri(): void;
    get templateS3UriInput(): string | undefined;
    private _inputParameter?;
    get inputParameter(): ConfigConformancePackInputParameter[];
    set inputParameter(value: ConfigConformancePackInputParameter[]);
    resetInputParameter(): void;
    get inputParameterInput(): ConfigConformancePackInputParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
