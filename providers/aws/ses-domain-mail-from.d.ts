import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesDomainMailFromConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#behavior_on_mx_failure SesDomainMailFrom#behavior_on_mx_failure}.
     */
    readonly behaviorOnMxFailure?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#domain SesDomainMailFrom#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#mail_from_domain SesDomainMailFrom#mail_from_domain}.
     */
    readonly mailFromDomain: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from}.
 */
export declare class SesDomainMailFrom extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesDomainMailFromConfig);
    private _behaviorOnMxFailure?;
    get behaviorOnMxFailure(): string;
    set behaviorOnMxFailure(value: string);
    resetBehaviorOnMxFailure(): void;
    get behaviorOnMxFailureInput(): string | undefined;
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get id(): string;
    private _mailFromDomain;
    get mailFromDomain(): string;
    set mailFromDomain(value: string);
    get mailFromDomainInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
