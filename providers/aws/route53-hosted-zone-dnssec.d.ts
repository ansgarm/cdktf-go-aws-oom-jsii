import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53HostedZoneDnssecConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}.
     */
    readonly hostedZoneId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html#signing_status Route53HostedZoneDnssec#signing_status}.
     */
    readonly signingStatus?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec}.
 */
export declare class Route53HostedZoneDnssec extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53HostedZoneDnssecConfig);
    private _hostedZoneId;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string;
    get id(): string;
    private _signingStatus?;
    get signingStatus(): string;
    set signingStatus(value: string);
    resetSigningStatus(): void;
    get signingStatusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
