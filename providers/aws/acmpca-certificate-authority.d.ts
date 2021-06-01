import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}.
     */
    readonly permanentDeletionTimeInDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags AcmpcaCertificateAuthority#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags_all AcmpcaCertificateAuthority#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#type AcmpcaCertificateAuthority#type}.
     */
    readonly type?: string;
    /**
     * certificate_authority_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}
     */
    readonly certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[];
    /**
     * revocation_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}
     */
    readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#timeouts AcmpcaCertificateAuthority#timeouts}
     */
    readonly timeouts?: AcmpcaCertificateAuthorityTimeouts;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#common_name AcmpcaCertificateAuthority#common_name}.
     */
    readonly commonName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#country AcmpcaCertificateAuthority#country}.
     */
    readonly country?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.
     */
    readonly distinguishedNameQualifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.
     */
    readonly generationQualifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#given_name AcmpcaCertificateAuthority#given_name}.
     */
    readonly givenName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#initials AcmpcaCertificateAuthority#initials}.
     */
    readonly initials?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#locality AcmpcaCertificateAuthority#locality}.
     */
    readonly locality?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organization AcmpcaCertificateAuthority#organization}.
     */
    readonly organization?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.
     */
    readonly organizationalUnit?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#pseudonym AcmpcaCertificateAuthority#pseudonym}.
     */
    readonly pseudonym?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#state AcmpcaCertificateAuthority#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#surname AcmpcaCertificateAuthority#surname}.
     */
    readonly surname?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#title AcmpcaCertificateAuthority#title}.
     */
    readonly title?: string;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#key_algorithm AcmpcaCertificateAuthority#key_algorithm}.
     */
    readonly keyAlgorithm: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}.
     */
    readonly signingAlgorithm: string;
    /**
     * subject block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#subject AcmpcaCertificateAuthority#subject}
     */
    readonly subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject[];
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#custom_cname AcmpcaCertificateAuthority#custom_cname}.
     */
    readonly customCname?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.
     */
    readonly expirationInDays: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.
     */
    readonly s3BucketName?: string;
}
export interface AcmpcaCertificateAuthorityRevocationConfiguration {
    /**
     * crl_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
     */
    readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[];
}
export interface AcmpcaCertificateAuthorityTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#create AcmpcaCertificateAuthority#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority}.
 */
export declare class AcmpcaCertificateAuthority extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig);
    get arn(): string;
    get certificate(): string;
    get certificateChain(): string;
    get certificateSigningRequest(): string;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get id(): string;
    get notAfter(): string;
    get notBefore(): string;
    private _permanentDeletionTimeInDays?;
    get permanentDeletionTimeInDays(): number;
    set permanentDeletionTimeInDays(value: number);
    resetPermanentDeletionTimeInDays(): void;
    get permanentDeletionTimeInDaysInput(): number | undefined;
    get serial(): string;
    get status(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _certificateAuthorityConfiguration;
    get certificateAuthorityConfiguration(): AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[];
    set certificateAuthorityConfiguration(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[]);
    get certificateAuthorityConfigurationInput(): AcmpcaCertificateAuthorityCertificateAuthorityConfiguration[];
    private _revocationConfiguration?;
    get revocationConfiguration(): AcmpcaCertificateAuthorityRevocationConfiguration[];
    set revocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration[]);
    resetRevocationConfiguration(): void;
    get revocationConfigurationInput(): AcmpcaCertificateAuthorityRevocationConfiguration[] | undefined;
    private _timeouts?;
    get timeouts(): AcmpcaCertificateAuthorityTimeouts;
    set timeouts(value: AcmpcaCertificateAuthorityTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AcmpcaCertificateAuthorityTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
