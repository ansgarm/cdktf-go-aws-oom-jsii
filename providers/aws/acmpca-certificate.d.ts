import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}.
     */
    readonly certificateAuthorityArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#certificate_signing_request AcmpcaCertificate#certificate_signing_request}.
     */
    readonly certificateSigningRequest: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#signing_algorithm AcmpcaCertificate#signing_algorithm}.
     */
    readonly signingAlgorithm: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#template_arn AcmpcaCertificate#template_arn}.
     */
    readonly templateArn?: string;
    /**
     * validity block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#validity AcmpcaCertificate#validity}
     */
    readonly validity: AcmpcaCertificateValidity[];
}
export interface AcmpcaCertificateValidity {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#type AcmpcaCertificate#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html#value AcmpcaCertificate#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html aws_acmpca_certificate}.
 */
export declare class AcmpcaCertificate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html aws_acmpca_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AcmpcaCertificateConfig);
    get arn(): string;
    get certificate(): string;
    private _certificateAuthorityArn;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string;
    get certificateChain(): string;
    private _certificateSigningRequest;
    get certificateSigningRequest(): string;
    set certificateSigningRequest(value: string);
    get certificateSigningRequestInput(): string;
    get id(): string;
    private _signingAlgorithm;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string;
    private _templateArn?;
    get templateArn(): string;
    set templateArn(value: string);
    resetTemplateArn(): void;
    get templateArnInput(): string | undefined;
    private _validity;
    get validity(): AcmpcaCertificateValidity[];
    set validity(value: AcmpcaCertificateValidity[]);
    get validityInput(): AcmpcaCertificateValidity[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
