import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAcmpcaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate.html#arn DataAwsAcmpcaCertificate#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate.html#certificate_authority_arn DataAwsAcmpcaCertificate#certificate_authority_arn}.
     */
    readonly certificateAuthorityArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate.html aws_acmpca_certificate}.
 */
export declare class DataAwsAcmpcaCertificate extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate.html aws_acmpca_certificate} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsAcmpcaCertificateConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get certificate(): string;
    private _certificateAuthorityArn;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string;
    get certificateChain(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
