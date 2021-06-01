import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html#active IotCertificate#active}.
     */
    readonly active: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html#csr IotCertificate#csr}.
     */
    readonly csr?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html aws_iot_certificate}.
 */
export declare class IotCertificate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html aws_iot_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotCertificateConfig);
    private _active;
    get active(): boolean;
    set active(value: boolean);
    get activeInput(): boolean;
    get arn(): string;
    get certificatePem(): string;
    private _csr?;
    get csr(): string;
    set csr(value: string);
    resetCsr(): void;
    get csrInput(): string | undefined;
    get id(): string;
    get privateKey(): string;
    get publicKey(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
