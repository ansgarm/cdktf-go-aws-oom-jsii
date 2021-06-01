import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaCertificateAuthorityCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html#certificate AcmpcaCertificateAuthorityCertificate#certificate}.
     */
    readonly certificate: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html#certificate_authority_arn AcmpcaCertificateAuthorityCertificate#certificate_authority_arn}.
     */
    readonly certificateAuthorityArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html#certificate_chain AcmpcaCertificateAuthorityCertificate#certificate_chain}.
     */
    readonly certificateChain?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html aws_acmpca_certificate_authority_certificate}.
 */
export declare class AcmpcaCertificateAuthorityCertificate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html aws_acmpca_certificate_authority_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityCertificateConfig);
    private _certificate;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    private _certificateAuthorityArn;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
