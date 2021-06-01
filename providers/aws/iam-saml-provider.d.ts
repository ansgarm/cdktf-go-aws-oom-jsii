import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamSamlProviderConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#name IamSamlProvider#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#saml_metadata_document IamSamlProvider#saml_metadata_document}.
     */
    readonly samlMetadataDocument: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#tags IamSamlProvider#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html#tags_all IamSamlProvider#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html aws_iam_saml_provider}.
 */
export declare class IamSamlProvider extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html aws_iam_saml_provider} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamSamlProviderConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _samlMetadataDocument;
    get samlMetadataDocument(): string;
    set samlMetadataDocument(value: string);
    get samlMetadataDocumentInput(): string;
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
    get validUntil(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
