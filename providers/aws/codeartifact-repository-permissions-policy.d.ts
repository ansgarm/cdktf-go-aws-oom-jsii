import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactRepositoryPermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#domain CodeartifactRepositoryPermissionsPolicy#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}.
     */
    readonly domainOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}.
     */
    readonly policyDocument: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}.
     */
    readonly policyRevision?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html#repository CodeartifactRepositoryPermissionsPolicy#repository}.
     */
    readonly repository: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy}.
 */
export declare class CodeartifactRepositoryPermissionsPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodeartifactRepositoryPermissionsPolicyConfig);
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
    private _repository;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get resourceArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
