import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmCertificateValidationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#certificate_arn AcmCertificateValidation#certificate_arn}.
     */
    readonly certificateArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#validation_record_fqdns AcmCertificateValidation#validation_record_fqdns}.
     */
    readonly validationRecordFqdns?: string[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#timeouts AcmCertificateValidation#timeouts}
     */
    readonly timeouts?: AcmCertificateValidationTimeouts;
}
export interface AcmCertificateValidationTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#create AcmCertificateValidation#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation}.
 */
export declare class AcmCertificateValidation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AcmCertificateValidationConfig);
    private _certificateArn;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string;
    get id(): string;
    private _validationRecordFqdns?;
    get validationRecordFqdns(): string[];
    set validationRecordFqdns(value: string[]);
    resetValidationRecordFqdns(): void;
    get validationRecordFqdnsInput(): string[] | undefined;
    private _timeouts?;
    get timeouts(): AcmCertificateValidationTimeouts;
    set timeouts(value: AcmCertificateValidationTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AcmCertificateValidationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
