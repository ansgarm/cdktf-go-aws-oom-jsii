import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailDomainConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_domain.html#domain_name LightsailDomain#domain_name}.
     */
    readonly domainName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_domain.html aws_lightsail_domain}.
 */
export declare class LightsailDomain extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_domain.html aws_lightsail_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LightsailDomainConfig);
    get arn(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
