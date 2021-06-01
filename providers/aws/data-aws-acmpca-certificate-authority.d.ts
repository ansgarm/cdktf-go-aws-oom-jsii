import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#arn DataAwsAcmpcaCertificateAuthority#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#tags DataAwsAcmpcaCertificateAuthority#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * revocation_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#revocation_configuration DataAwsAcmpcaCertificateAuthority#revocation_configuration}
     */
    readonly revocationConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[];
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfiguration {
    /**
     * crl_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html#crl_configuration DataAwsAcmpcaCertificateAuthority#crl_configuration}
     */
    readonly crlConfiguration?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html aws_acmpca_certificate_authority}.
 */
export declare class DataAwsAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsAcmpcaCertificateAuthorityConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get certificate(): string;
    get certificateChain(): string;
    get certificateSigningRequest(): string;
    get id(): string;
    get notAfter(): string;
    get notBefore(): string;
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
    get type(): string;
    private _revocationConfiguration?;
    get revocationConfiguration(): DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[];
    set revocationConfiguration(value: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[]);
    resetRevocationConfiguration(): void;
    get revocationConfigurationInput(): DataAwsAcmpcaCertificateAuthorityRevocationConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
