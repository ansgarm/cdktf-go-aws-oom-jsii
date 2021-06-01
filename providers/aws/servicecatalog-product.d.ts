import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#accept_language ServicecatalogProduct#accept_language}.
     */
    readonly acceptLanguage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#distributor ServicecatalogProduct#distributor}.
     */
    readonly distributor?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#owner ServicecatalogProduct#owner}.
     */
    readonly owner: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_description ServicecatalogProduct#support_description}.
     */
    readonly supportDescription?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_email ServicecatalogProduct#support_email}.
     */
    readonly supportEmail?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#support_url ServicecatalogProduct#support_url}.
     */
    readonly supportUrl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags ServicecatalogProduct#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#tags_all ServicecatalogProduct#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}.
     */
    readonly type: string;
    /**
     * provisioning_artifact_parameters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}
     */
    readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters[];
}
export interface ServicecatalogProductProvisioningArtifactParameters {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#description ServicecatalogProduct#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#disable_template_validation ServicecatalogProduct#disable_template_validation}.
     */
    readonly disableTemplateValidation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#name ServicecatalogProduct#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_physical_id ServicecatalogProduct#template_physical_id}.
     */
    readonly templatePhysicalId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#template_url ServicecatalogProduct#template_url}.
     */
    readonly templateUrl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html#type ServicecatalogProduct#type}.
     */
    readonly type?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product}.
 */
export declare class ServicecatalogProduct extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ServicecatalogProductConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _distributor?;
    get distributor(): string;
    set distributor(value: string);
    resetDistributor(): void;
    get distributorInput(): string | undefined;
    get hasDefaultPath(): boolean;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _owner;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    get status(): string;
    private _supportDescription?;
    get supportDescription(): string;
    set supportDescription(value: string);
    resetSupportDescription(): void;
    get supportDescriptionInput(): string | undefined;
    private _supportEmail?;
    get supportEmail(): string;
    set supportEmail(value: string);
    resetSupportEmail(): void;
    get supportEmailInput(): string | undefined;
    private _supportUrl?;
    get supportUrl(): string;
    set supportUrl(value: string);
    resetSupportUrl(): void;
    get supportUrlInput(): string | undefined;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _provisioningArtifactParameters;
    get provisioningArtifactParameters(): ServicecatalogProductProvisioningArtifactParameters[];
    set provisioningArtifactParameters(value: ServicecatalogProductProvisioningArtifactParameters[]);
    get provisioningArtifactParametersInput(): ServicecatalogProductProvisioningArtifactParameters[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
