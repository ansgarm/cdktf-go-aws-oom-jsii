import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#certificate_authority_arn AcmCertificate#certificate_authority_arn}.
     */
    readonly certificateAuthorityArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#certificate_body AcmCertificate#certificate_body}.
     */
    readonly certificateBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#certificate_chain AcmCertificate#certificate_chain}.
     */
    readonly certificateChain?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#domain_name AcmCertificate#domain_name}.
     */
    readonly domainName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#private_key AcmCertificate#private_key}.
     */
    readonly privateKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#subject_alternative_names AcmCertificate#subject_alternative_names}.
     */
    readonly subjectAlternativeNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#tags AcmCertificate#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#tags_all AcmCertificate#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#validation_method AcmCertificate#validation_method}.
     */
    readonly validationMethod?: string;
    /**
     * options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#options AcmCertificate#options}
     */
    readonly options?: AcmCertificateOptions[];
}
export declare class AcmCertificateDomainValidationOptions extends cdktf.ComplexComputedList {
    get domainName(): string;
    get resourceRecordName(): string;
    get resourceRecordType(): string;
    get resourceRecordValue(): string;
}
export interface AcmCertificateOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}.
     */
    readonly certificateTransparencyLoggingPreference?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html aws_acm_certificate}.
 */
export declare class AcmCertificate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html aws_acm_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: AcmCertificateConfig);
    get arn(): string;
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    resetCertificateAuthorityArn(): void;
    get certificateAuthorityArnInput(): string | undefined;
    private _certificateBody?;
    get certificateBody(): string;
    set certificateBody(value: string);
    resetCertificateBody(): void;
    get certificateBodyInput(): string | undefined;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    domainValidationOptions(index: string): AcmCertificateDomainValidationOptions;
    get id(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string | undefined;
    get status(): string;
    private _subjectAlternativeNames?;
    get subjectAlternativeNames(): string[];
    set subjectAlternativeNames(value: string[]);
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): string[] | undefined;
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
    get validationEmails(): string[];
    private _validationMethod?;
    get validationMethod(): string;
    set validationMethod(value: string);
    resetValidationMethod(): void;
    get validationMethodInput(): string | undefined;
    private _options?;
    get options(): AcmCertificateOptions[];
    set options(value: AcmCertificateOptions[]);
    resetOptions(): void;
    get optionsInput(): AcmCertificateOptions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
