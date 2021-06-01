import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbListenerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html#certificate_arn LbListenerCertificate#certificate_arn}.
     */
    readonly certificateArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html#listener_arn LbListenerCertificate#listener_arn}.
     */
    readonly listenerArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate}.
 */
export declare class LbListenerCertificate extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LbListenerCertificateConfig);
    private _certificateArn;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string;
    get id(): string;
    private _listenerArn;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
