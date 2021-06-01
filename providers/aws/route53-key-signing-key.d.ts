import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53KeySigningKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#hosted_zone_id Route53KeySigningKey#hosted_zone_id}.
     */
    readonly hostedZoneId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#key_management_service_arn Route53KeySigningKey#key_management_service_arn}.
     */
    readonly keyManagementServiceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#name Route53KeySigningKey#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html#status Route53KeySigningKey#status}.
     */
    readonly status?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html aws_route53_key_signing_key}.
 */
export declare class Route53KeySigningKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key.html aws_route53_key_signing_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53KeySigningKeyConfig);
    get digestAlgorithmMnemonic(): string;
    get digestAlgorithmType(): number;
    get digestValue(): string;
    get dnskeyRecord(): string;
    get dsRecord(): string;
    get flag(): number;
    private _hostedZoneId;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string;
    get id(): string;
    private _keyManagementServiceArn;
    get keyManagementServiceArn(): string;
    set keyManagementServiceArn(value: string);
    get keyManagementServiceArnInput(): string;
    get keyTag(): number;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get publicKey(): string;
    get signingAlgorithmMnemonic(): string;
    get signingAlgorithmType(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
