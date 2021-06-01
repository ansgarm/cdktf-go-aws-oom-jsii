import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactDomainPermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#domain CodeartifactDomainPermissionsPolicy#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}.
     */
    readonly domainOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#policy_document CodeartifactDomainPermissionsPolicy#policy_document}.
     */
    readonly policyDocument: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}.
     */
    readonly policyRevision?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html aws_codeartifact_domain_permissions_policy}.
 */
export declare class CodeartifactDomainPermissionsPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html aws_codeartifact_domain_permissions_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodeartifactDomainPermissionsPolicyConfig);
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string | undefined;
    get id(): string;
    private _policyDocument;
    get policyDocument(): string;
    set policyDocument(value: string);
    get policyDocumentInput(): string;
    private _policyRevision?;
    get policyRevision(): string;
    set policyRevision(value: string);
    resetPolicyRevision(): void;
    get policyRevisionInput(): string | undefined;
    get resourceArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
