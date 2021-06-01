import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrpublicRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#force_destroy EcrpublicRepository#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#repository_name EcrpublicRepository#repository_name}.
     */
    readonly repositoryName: string;
    /**
     * catalog_data block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#catalog_data EcrpublicRepository#catalog_data}
     */
    readonly catalogData?: EcrpublicRepositoryCatalogData[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#timeouts EcrpublicRepository#timeouts}
     */
    readonly timeouts?: EcrpublicRepositoryTimeouts;
}
export interface EcrpublicRepositoryCatalogData {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#about_text EcrpublicRepository#about_text}.
     */
    readonly aboutText?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#architectures EcrpublicRepository#architectures}.
     */
    readonly architectures?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#description EcrpublicRepository#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#logo_image_blob EcrpublicRepository#logo_image_blob}.
     */
    readonly logoImageBlob?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#operating_systems EcrpublicRepository#operating_systems}.
     */
    readonly operatingSystems?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#usage_text EcrpublicRepository#usage_text}.
     */
    readonly usageText?: string;
}
export interface EcrpublicRepositoryTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html#delete EcrpublicRepository#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository}.
 */
export declare class EcrpublicRepository extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcrpublicRepositoryConfig);
    get arn(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    get id(): string;
    get registryId(): string;
    private _repositoryName;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    get repositoryUri(): string;
    private _catalogData?;
    get catalogData(): EcrpublicRepositoryCatalogData[];
    set catalogData(value: EcrpublicRepositoryCatalogData[]);
    resetCatalogData(): void;
    get catalogDataInput(): EcrpublicRepositoryCatalogData[] | undefined;
    private _timeouts?;
    get timeouts(): EcrpublicRepositoryTimeouts;
    set timeouts(value: EcrpublicRepositoryTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): EcrpublicRepositoryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
