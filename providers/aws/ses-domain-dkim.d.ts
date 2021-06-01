import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesDomainDkimConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html#domain SesDomainDkim#domain}.
     */
    readonly domain: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html aws_ses_domain_dkim}.
 */
export declare class SesDomainDkim extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html aws_ses_domain_dkim} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesDomainDkimConfig);
    get dkimTokens(): string[];
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
