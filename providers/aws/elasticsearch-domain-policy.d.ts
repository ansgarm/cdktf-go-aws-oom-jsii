import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticsearchDomainPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html#access_policies ElasticsearchDomainPolicy#access_policies}.
     */
    readonly accessPolicies: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html#domain_name ElasticsearchDomainPolicy#domain_name}.
     */
    readonly domainName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html aws_elasticsearch_domain_policy}.
 */
export declare class ElasticsearchDomainPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html aws_elasticsearch_domain_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElasticsearchDomainPolicyConfig);
    private _accessPolicies;
    get accessPolicies(): string;
    set accessPolicies(value: string);
    get accessPoliciesInput(): string;
    private _domainName;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
