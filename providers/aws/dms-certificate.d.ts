import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_id DmsCertificate#certificate_id}.
     */
    readonly certificateId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_pem DmsCertificate#certificate_pem}.
     */
    readonly certificatePem?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_wallet DmsCertificate#certificate_wallet}.
     */
    readonly certificateWallet?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags DmsCertificate#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags_all DmsCertificate#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate}.
 */
export declare class DmsCertificate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DmsCertificateConfig);
    get certificateArn(): string;
    private _certificateId;
    get certificateId(): string;
    set certificateId(value: string);
    get certificateIdInput(): string;
    private _certificatePem?;
    get certificatePem(): string;
    set certificatePem(value: string);
    resetCertificatePem(): void;
    get certificatePemInput(): string | undefined;
    private _certificateWallet?;
    get certificateWallet(): string;
    set certificateWallet(value: string);
    resetCertificateWallet(): void;
    get certificateWalletInput(): string | undefined;
    get id(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
